/**
 * @file TableContent component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import eventsOn from 'dom-helpers/events/on';
import eventsOff from 'dom-helpers/events/off';
import startCase from 'lodash/startCase';
import isArray from 'lodash/isArray';

import ScrollableTable from '../_ScrollableTable';
import Checkbox from '../Checkbox';
import IconButton from '../IconButton';

import Theme from '../Theme';
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';
import VirtualRoot from '../_statics/VirtualRoot';

import Util from '../_vendors/Util';
import TableLayout from '../_vendors/TableLayout';
import TableCalculation from '../_vendors/TableCalculation';

class TableContent extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static Fixed = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.leftBodyScroller = null;
        this.centerHeadScroller = null;
        this.centerBodyScroller = null;
        this.centerFootScroller = null;
        this.rightBodyScroller = null;

        this.lastScrollLeft = 0;
        this.lastScrollTop = 0;

        this.wrapper = createRef();
        this.wrapperEl = null;
        this.fixedLeft = createRef();
        this.fixedLeftEl = null;
        this.fixedRight = createRef();
        this.fixedRightEl = null;

        // sorted current page cache data
        this.tableData = [];
        this.columns = {
            [HorizontalAlign.LEFT]: [],
            [HorizontalAlign.CENTER]: [],
            [HorizontalAlign.RIGHT]: []
        };

    }

    addRecursiveValue = (node, value, idProp, isSelectRecursive) => {

        if (!node || !value) {
            return;
        }

        if (!TableCalculation.isNodeChecked(node, value, idProp)) {
            value.push(node);
        }

        if (!isSelectRecursive || !node.children || node.children.length < 1) {
            return;
        }

        for (let item of node.children) {
            this.addRecursiveValue(item, value, idProp);
        }

    };

    removeRecursiveValue = (node, value, idProp, isSelectRecursive) => {

        if (!node || !value) {
            return;
        }

        const index = TableCalculation.indexOfNodeInValue(node, value, idProp);
        if (index > -1) {
            value.splice(index, 1);
        }

        if (!isSelectRecursive || !node.children || node.children.length < 1) {
            return;
        }

        for (let item of node.children) {
            this.removeRecursiveValue(item, value, idProp);
        }

    };

    /**
     * traverse tree data to update value when multi recursive select
     * @param value
     * @returns {Array}
     */
    updateValue = value => {

        const {data, idProp} = this.props;
        let result = [];

        Util.postOrderTraverse({[VirtualRoot]: true, children: data}, node => {
            if (!(VirtualRoot in node)) {
                if (!node.children || node.children.length < 1) {
                    if (TableCalculation.isNodeChecked(node, value, idProp)) {
                        result.push(node);
                    }
                } else {
                    if (node.children.every(child => TableCalculation.isNodeChecked(child, value, idProp))) {
                        result.push(node);
                    }
                }
            }
        });

        return result;

    };

    handleSelect = (node, rowIndex, colIndex, collapsed, depth, path) => {

        if (!node || this.props.selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {value, isSelectRecursive, idProp, onSelect, onChange} = this.props;

        let result = value ? value.slice() : value;
        if (!result || !isArray(result)) {
            result = [];
        }

        this.addRecursiveValue(node, result, idProp, isSelectRecursive);
        if (isSelectRecursive) {
            result = this.updateValue(result);
        }

        onSelect && onSelect(node, rowIndex, colIndex, collapsed, depth, path);
        onChange && onChange(result);

    };

    handleDeselect = (node, rowIndex, colIndex, collapsed, depth, path) => {

        if (!node || this.props.selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {isSelectRecursive, value, idProp, onDeselect, onChange} = this.props;

        let result = value ? value.slice() : value;
        if (!result || !isArray(result)) {
            result = [];
        } else {
            this.removeRecursiveValue(node, result, idProp, isSelectRecursive);
            if (isSelectRecursive) {
                result = this.updateValue(result);
            }
        }

        onDeselect && onDeselect(node, rowIndex, colIndex, collapsed, depth, path);
        onChange && onChange(result);

    };

    handleSelectAllChange = checked => {

        const {
                selectAllMode, data, value, idProp,
                onChange, onSelectAll, onDeselectAll
            } = this.props,
            result = TableCalculation.handleSelectAllChange(
                checked, selectAllMode, data, this.tableData, value, idProp);

        onChange && onChange(result);

        if (checked) {
            onSelectAll && onSelectAll(result);
        } else {
            onDeselectAll && onDeselectAll(value);
        }

    };

    /**
     * split columns by fixed
     * @returns {{[p: string]: Array}}
     */
    getColumns = () => {

        const {
                selectTheme, selectMode, selectAllMode, columns, data, disabled, value, idProp,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls, hasChildren
            } = this.props,
            result = {
                [HorizontalAlign.LEFT]: [],
                [HorizontalAlign.CENTER]: [],
                [HorizontalAlign.RIGHT]: []
            };

        columns.forEach(column => {
            if (column.fixed === true || column.fixed === HorizontalAlign.LEFT) {
                result[HorizontalAlign.LEFT].push(column);
            } else if (column.fixed === HorizontalAlign.RIGHT) {
                result[HorizontalAlign.RIGHT].push(column);
            } else {
                result[HorizontalAlign.CENTER].push(column);
            }
        });

        const firstColumnPosition = TableCalculation.getFirstColumnPosition(result);

        /**
         * handle expand
         */
        if (firstColumnPosition) {
            const firstColumn = result[firstColumnPosition][0];
            result[firstColumnPosition][0] = {
                ...result[firstColumnPosition][0],
                bodyClassName: classNames('table-expand-column', {
                    [firstColumn.bodyClassName]: firstColumn.bodyClassName
                }),
                bodyRenderer: (rowData, rowIndex, colIndex, collapsed, depth, path) =>
                    <Fragment>

                        <span className={classNames('table-indent', `indent-level-${depth}`)}
                              style={{paddingLeft: depth * 20}}></span>

                        <IconButton className={classNames('collapse-button', {
                            hidden: hasChildren ? !hasChildren(rowData, rowIndex, colIndex) : true
                        })}
                                    iconCls="fas fa-chevron-right"
                                    disableTouchRipple={true}
                                    onClick={() => this.handleExpandChange(!collapsed, rowData)}/>

                        {
                            typeof firstColumn.bodyRenderer === 'function' ?
                                firstColumn.bodyRenderer(rowData, rowIndex, colIndex, collapsed, depth)
                                :
                                firstColumn.bodyRenderer
                        }

                    </Fragment>
            };
        }

        /**
         * handle multi select
         */
        if (selectMode === SelectMode.MULTI_SELECT) {
            result[firstColumnPosition || HorizontalAlign.CENTER].unshift({
                headClassName: 'table-select-th',
                headRenderer: () => {

                    const {checked, indeterminate} = TableCalculation.isRootNodeChecked(
                        selectAllMode === SelectAllMode.ALL ? data : this.tableData, value, idProp);

                    return (
                        <Checkbox className="table-select"
                                  theme={selectTheme}
                                  checked={checked}
                                  disabled={disabled}
                                  indeterminate={indeterminate}
                                  uncheckedIconCls={checkboxUncheckedIconCls}
                                  checkedIconCls={checkboxCheckedIconCls}
                                  indeterminateIconCls={checkboxIndeterminateIconCls}
                                  onChange={this.handleSelectAllChange}/>

                    );
                },
                bodyClassName: 'table-select-td',
                bodyRenderer: (rowData, rowIndex, colIndex, collapsed, depth, path) =>
                    <Checkbox className="table-select"
                              theme={selectTheme}
                              checked={TableCalculation.isNodeChecked(rowData, value, idProp)}
                              disabled={disabled || rowData.disabled}
                              indeterminate={TableCalculation.isNodeIndeterminate(rowData, value, idProp)}
                              uncheckedIconCls={checkboxUncheckedIconCls}
                              checkedIconCls={checkboxCheckedIconCls}
                              indeterminateIconCls={checkboxIndeterminateIconCls}
                              onCheck={() => this.handleSelect(rowData, rowIndex, colIndex, collapsed, depth, path)}
                              onUncheck={() => this.handleDeselect(rowData, rowIndex, colIndex, collapsed, depth, path)}/>
            });
        }

        return result;

    };

    /**
     * sort data by sorting
     * @param data
     * @returns {*[]}
     */
    sortData = (data = this.props.data) => {
        const {sorting, sortingFunc} = this.props;
        return sorting ? TableCalculation.sortTableData(data, sorting, sortingFunc) : data;
    };

    /**
     * slice data by pagination
     * @param data
     * @returns {*[]}
     */
    paginateData = (data = this.props.data) => {

        if (!data) {
            return [];
        }

        const {isPaginated, pagination} = this.props;

        if (!isPaginated || !pagination) {
            return data;
        }

        const {pageSize, page} = pagination,
            len = data.length;

        let start = page * pageSize,
            stop = start + pageSize;

        start = start < 0 ? 0 : start;
        stop = stop > len ? len : stop;

        return data.slice(start, stop);

    };

    /**
     * fix table layout at once
     */
    fixLayout = () => {
        if (this.wrapperEl && TableLayout.hasFixed(this.props, this.columns)) {
            TableLayout.fixLayout(this.wrapperEl, this.props);
        }
        TableLayout.updateHorizontalScrollClassNames(this.wrapperEl, this.centerBodyScroller);
    };

    /**
     * handle get scroll el
     * @param el
     * @param fixed
     * @param fragment
     */
    handleGetScrollerEl = (el, fixed, fragment) => {
        this[`${fixed}${startCase(fragment)}Scroller`] = el;
    };

    /**
     * handle table horizontal scroll
     * @param e
     */
    handleHorizontalScroll = e => {

        if (!e || e.currentTarget !== e.target) {
            return;
        }

        const {isHeadFixed, isFootFixed, scroll = {}} = this.props,
            target = e.target,
            scrollLeft = target.scrollLeft;

        if (scrollLeft !== this.lastScrollLeft && scroll.width) {

            switch (target) {
                case this.centerBodyScroller: {
                    if (isHeadFixed && this.centerHeadScroller) {
                        this.centerHeadScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.centerHeadScroller) {
                        this.centerFootScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
                case this.centerHeadScroller: {
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.centerHeadScroller) {
                        this.centerFootScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
                case this.centerFootScroller: {
                    if (isHeadFixed && this.centerHeadScroller) {
                        this.centerHeadScroller.scrollLeft = scrollLeft;
                    }
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
            }

            TableLayout.updateHorizontalScrollClassNames(this.wrapperEl, this.centerBodyScroller);

        }

        this.lastScrollLeft = scrollLeft;

    };

    /**
     * handle table vertical scroll
     * @param e
     */
    handleVerticalScroll = e => {

        if (!e || e.currentTarget !== e.target) {
            return;
        }

        const {scroll = {}} = this.props,
            target = e.target,
            scrollTop = target.scrollTop;

        if (scrollTop !== this.lastScrollTop && scroll.height
            && (target != this.centerHeadScroller || target != this.centerFootScroller)) {
            switch (target) {
                case this.centerBodyScroller: {
                    if (this.leftBodyScroller) {
                        this.leftBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.rightBodyScroller) {
                        this.rightBodyScroller.scrollTop = scrollTop;
                    }
                    break;
                }
                case this.leftBodyScroller: {
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.rightBodyScroller) {
                        this.rightBodyScroller.scrollTop = scrollTop;
                    }
                    break;
                }
                case this.rightBodyScroller: {
                    if (this.leftBodyScroller) {
                        this.leftBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollTop = scrollTop;
                    }
                    break;
                }
            }
        }

        this.lastScrollTop = scrollTop;

    };

    /**
     * handle table scroll
     * @param e
     */
    handleScroll = e => {
        this.handleHorizontalScroll(e);
        this.handleVerticalScroll(e);
    };

    /**
     * handle table wheel in IE
     * @param e
     */
    handleWheel = e => {

        const {scroll = {}} = this.props;

        if (!window.navigator.userAgent.match(/Trident\/7\./) || !scroll.height) {
            return;
        }

        e.preventDefault();

        const wd = e.deltaY,
            target = e.target;

        let scrollTop = 0;

        if (this.lastScrollTop) {
            scrollTop = this.lastScrollTop + wd;
        } else {
            scrollTop = wd;
        }

        if (this.leftBodyScroller && this.leftBodyScroller !== target) {
            this.leftBodyScroller.scrollTop = scrollTop;
        }

        if (this.centerBodyScroller && this.centerBodyScroller !== target) {
            this.centerBodyScroller.scrollTop = scrollTop;
        }

        if (this.rightBodyScroller && this.rightBodyScroller !== target) {
            this.rightBodyScroller.scrollTop = scrollTop;
        }

    };

    handleExpandChange = (collapsed, rowData) => {

        const {idProp, expandRows, onExpand, onCollapse, onExpandChange} = this.props;

        if (collapsed) {

            onCollapse && onCollapse(rowData);

            const index = TableCalculation.indexOfNodeInValue(rowData, expandRows, idProp);
            if (index !== -1) {
                expandRows.splice(index, 1);
                onExpandChange && onExpandChange(expandRows);
            }

        } else {

            onExpand && onExpand(rowData);

            const index = TableCalculation.indexOfNodeInValue(rowData, expandRows, idProp);
            if (index === -1) {
                expandRows.push(rowData);
                onExpandChange && onExpandChange(expandRows, () => {
                    const {value, selectMode, isSelectRecursive, onChange} = this.props;
                    if (selectMode === SelectMode.MULTI_SELECT && isSelectRecursive) {
                        onChange && onChange(TableCalculation.recursiveSelectChildren(rowData, value));
                    }
                });
            }

        }

    };

    componentDidMount() {

        this.wrapperEl = this.wrapper && this.wrapper.current;
        this.fixedLeftEl = this.fixedLeft && this.fixedLeft.current && findDOMNode(this.fixedLeft.current);
        this.fixedRightEl = this.fixedRight && this.fixedRight.current && findDOMNode(this.fixedRight.current);

        eventsOn(window, 'resize', this.fixLayout);

        TableLayout.updateHorizontalScrollClassNames(this.wrapperEl, this.centerBodyScroller);
        this.fixLayout();

        const {onInit} = this.props;
        onInit && setTimeout(() => onInit(), 250);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.fixLayout();
    }

    componentWillUnmount() {
        eventsOff(window, 'resize', this.fixLayout);
    }

    render() {

        const {
            className, style, columns: originColumns, data, scroll,
            ...restProps
        } = this.props;

        this.columns = this.getColumns();

        if (!this.columns) {
            return null;
        }

        this.tableData = this.paginateData(this.sortData(data));

        const isHeadHidden = !TableCalculation.hasAnyRenderer(originColumns, TableFragment.HEAD),
            isFootHidden = !TableCalculation.hasAnyRenderer(originColumns, TableFragment.FOOT),

            bodyScrollerStyle = scroll && scroll.height ? {maxHeight: scroll.height} : null,
            tableStyle = scroll && scroll.width ? {minWidth: scroll.width} : null;

        return (
            <div ref={this.wrapper}
                 className={classNames('table-content', {
                     [className]: className
                 })}
                 style={style}>

                <ScrollableTable {...restProps}
                                 className="table-content-center"
                                 bodyScrollerStyle={bodyScrollerStyle}
                                 maskStyle={tableStyle}
                                 tableStyle={tableStyle}
                                 columns={[
                                     ...TableCalculation.handleFixedColumns(this.columns[HorizontalAlign.LEFT]),
                                     ...this.columns[HorizontalAlign.CENTER],
                                     ...TableCalculation.handleFixedColumns(this.columns[HorizontalAlign.RIGHT])
                                 ]}
                                 data={this.tableData}
                                 scroll={scroll}
                                 isHeadHidden={isHeadHidden}
                                 isFootHidden={isFootHidden}
                                 onScroll={this.handleScroll}
                                 onWheel={this.handleWheel}
                                 onGetHeadScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.HEAD)}
                                 onGetBodyScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.BODY)}
                                 onGetFootScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.FOOT)}/>

                {
                    this.columns[HorizontalAlign.LEFT] && this.columns[HorizontalAlign.LEFT].length > 0 ?
                        <ScrollableTable {...restProps}
                                         ref={this.fixedLeft}
                                         className="table-content-left"
                                         bodyScrollerStyle={bodyScrollerStyle}
                                         fixed={HorizontalAlign.LEFT}
                                         columns={this.columns[HorizontalAlign.LEFT]}
                                         data={this.tableData}
                                         scroll={scroll}
                                         isHeadHidden={isHeadHidden}
                                         isFootHidden={isFootHidden}
                                         onGetHeadScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.LEFT, TableFragment.HEAD)}
                                         onGetBodyScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.LEFT, TableFragment.BODY)}
                                         onGetFootScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.LEFT, TableFragment.FOOT)}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
                                         onExpandChange={this.handleExpandChange}/>
                        :
                        null
                }

                {
                    this.columns[HorizontalAlign.RIGHT] && this.columns[HorizontalAlign.RIGHT].length > 0 ?
                        <ScrollableTable {...restProps}
                                         ref={this.fixedRight}
                                         className="table-content-right"
                                         bodyScrollerStyle={bodyScrollerStyle}
                                         fixed={HorizontalAlign.RIGHT}
                                         columns={this.columns[HorizontalAlign.RIGHT]}
                                         data={this.tableData}
                                         scroll={scroll}
                                         isHeadHidden={isHeadHidden}
                                         isFootHidden={isFootHidden}
                                         baseColIndex={this.columns[HorizontalAlign.LEFT].length
                                         + this.columns[HorizontalAlign.CENTER].length}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
                                         onGetHeadScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.RIGHT, TableFragment.HEAD)}
                                         onGetBodyScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.RIGHT, TableFragment.BODY)}
                                         onGetFootScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.RIGHT, TableFragment.FOOT)}/>
                        :
                        null
                }

            </div>
        );

    }
}

TableContent.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the table select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The select all mode of table, all or current page.
     */
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        /**
         * fixed position of column ( true / 'left' / 'right' )
         */
        fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Util.enumerateValue(HorizontalAlign))]),

        /**
         * width of column
         */
        width: PropTypes.number,

        /**
         * minimum width of column
         */
        minWidth: PropTypes.number,

        /**
         * The class name of header.
         */
        headClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headStyle: PropTypes.object,

        /**
         * The render content in header.
         * (1) string，example： 'id'
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        headRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table header cell
         */
        headAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table header
         */
        headSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * The class name of td.
         */
        bodyClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        bodyStyle: PropTypes.object,

        /**
         * The render content in table.
         * (1) data key，example： 'id'
         * (2) data key tamplate，example：'${id} - ${name}'
         * (3) callback，example：function (rowData, rowIndex, colIndex) {return rowData.id;}
         */
        bodyRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table body cell
         */
        bodyAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table body
         */
        bodySpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * The class name of footer.
         */
        footClassName: PropTypes.string,

        /**
         * Override the styles of footer.
         */
        footStyle: PropTypes.object,

        /**
         * The render content in footer.
         * (1) string，example： 'id'
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        footRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table footer cell
         */
        footAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table foot
         */
        footSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sorting property.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType))

    })).isRequired,

    data: PropTypes.array,
    value: PropTypes.array,
    idProp: PropTypes.string,
    disabled: PropTypes.bool,
    expandRows: PropTypes.array,
    isSelectRecursive: PropTypes.bool,

    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),
    defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string,
    sortingFunc: PropTypes.func,

    /**
     * pagination
     */
    isPaginated: PropTypes.bool,
    pagination: PropTypes.shape({
        pageSize: PropTypes.number,
        page: PropTypes.number
    }),
    pageSizes: PropTypes.array,

    /**
     * fixed
     */
    isHeadFixed: PropTypes.bool,
    isFootFixed: PropTypes.bool,

    scroll: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),

    /**
     * callback
     */
    onInit: PropTypes.func,
    hasChildren: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onSelectAll: PropTypes.func,
    onDeselectAll: PropTypes.func,
    onExpand: PropTypes.func,
    onCollapse: PropTypes.func,
    onExpandChange: PropTypes.func,
    onSortChange: PropTypes.func

};

TableContent.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.CURRENT_PAGE,

    disabled: false,
    idProp: 'id',
    expandRows: [],
    isSelectRecursive: true,

    uncheckedIconCls: 'far fa-square',
    checkedIconCls: 'fas fa-check-square',
    indeterminateIconCls: 'fas fa-minus-square',

    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-angle-up',
    sortingDescIconCls: 'fas fa-angle-down',

    isPaginated: true,
    pagination: {
        pageSize: 10,
        page: 0
    },
    pageSizes: [5, 10, 15, 20],

    isHeadFixed: false,
    isFootFixed: false

};

export default TableContent;

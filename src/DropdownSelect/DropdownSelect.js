/**
 * @file DropdownSelect component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import GroupList from '../GroupList';
import List from '../List';
import DynamicRenderList from '../DynamicRenderList';
import Checkbox from '../Checkbox';

// Statics
import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import ComponentUtil from '../_vendors/ComponentUtil';

class DropdownSelect extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;
    static Position = Position;
    static TipPosition = Position;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.hiddenFilter = createRef();
        this.dropdown = createRef();
        this.dropdownInstance = null;
        this.actions = createRef();
        this.filter = createRef();
        this.scroller = createRef();
        this.popupChildren = createRef();

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false
        };

    }

    componentDidMount() {
        this.dropdownInstance = this.dropdown?.current;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateScrollHeight();
    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.dropdownInstance?.startRipple?.(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.dropdownInstance?.endRipple?.();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.dropdownInstance?.triggerRipple?.(e, props);
    };

    /**
     * public
     */
    resetPopupPosition = () => {
        this.dropdownInstance?.resetPosition?.();
    };

    /**
     * public
     */
    openPopup = () => {
        this.dropdownInstance?.openPopup?.();
    };

    /**
     * public
     */
    closePopup = () => {
        this.dropdownInstance?.closePopup?.();
    };

    getListHeight = () => {

        let result = this.props.listHeight;

        if (!result) {
            return result;
        }

        if (this.actions?.current?.offsetHeight) {
            result -= this.actions.current.offsetHeight;
        }

        if (this.popupChildren?.current?.offsetHeight) {
            result -= this.popupChildren.current.offsetHeight;
        }

        return result;

    };

    updateScrollHeight = () => {

        if (!this.scroller || !this.scroller.current) {
            return;
        }

        const scrollerEl = this.scroller.current,
            popEl = Dom.findParentByClassName(scrollerEl, 'popup-content');

        if (!popEl) {
            return;
        }

        const scrollTop = scrollerEl.scrollTop;
        scrollerEl.style.height = 'auto';

        let scrollerHeight = popEl.offsetHeight;
        if (this.actions?.current?.offsetHeight) {
            scrollerHeight -= this.actions.current.offsetHeight;
        }
        if (this.popupChildren?.current?.offsetHeight) {
            scrollerHeight -= this.popupChildren.current.offsetHeight;
        }

        scrollerEl.style.height = `${scrollerHeight}px`;
        scrollerEl.scrollTop = scrollTop;

    };

    handleFilterChange = filter => {
        this.setState({
            filter
        }, () => {

            this.props.onFilterChange?.(filter);

            this.dropdown?.current?.resetPopupPosition?.();

        });
    };

    filterData = (filter = this.state.filter, data = this.props.data) => {

        if (!filter) {
            return data;
        }

        const {displayField, isGrouped, filterCallback} = this.props,
            filterFunc = originData => originData.filter(item => typeof item === 'object' && !!item[displayField] ?
                item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
                :
                item.toString().toUpperCase().includes(filter.toUpperCase()));

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        if (isGrouped) {

            return data && data.map(group => {

                const children = filterFunc(group.children);

                if (children.length < 1) {
                    return null;
                } else {
                    return {
                        ...group,
                        children
                    };
                }

            }).filter(item => !!item);

        }

        return filterFunc(data);

    };

    handleSelectAllClick = () => {

        const {data} = this.props,
            {value} = this.state;

        if (!data) {
            return;
        }

        const isSelectAll = !value || (value && value.length < data.length),
            newValue = isSelectAll ? data : [];

        this.setState({
            value: newValue
        }, () => this.handleChange(newValue));

    };

    handleItemClick = (...args) => {

        if (this.props.autoClose) {
            this.closePopup();
        }

        this.props.onItemClick?.(...args);

    };

    handleChange = value => {

        if (this.props.autoClose) {
            this.closePopup();
        }

        if (this.props.onBeforeChange?.(value, this.state.value) === false) {
            return;
        }

        this.setState({
            value
        }, () => this.props.onChange?.(value));

        setTimeout(() => this.hiddenFilter?.current?.focus?.(), 1000);

    };

    handlePopupOpen = e => {

        const {isHiddenInputFilter, useFilter} = this.props;

        if (isHiddenInputFilter) {
            this.hiddenFilter?.current?.focus?.();
        } else if (useFilter) {
            this.filter?.current?.focus?.();
        }

        this.setState({
            popupVisible: true
        }, () => this.props.onOpenPopup?.(e));

    };

    handlePopupClose = e => {

        this.hiddenFilter?.current?.blur?.();

        this.setState({
            popupVisible: false
        }, () => this.props.onClosePopup?.(e));

    };

    handleHiddenFilterChange = e => {

        const {data, displayField, clearHiddenInputFilterInterval} = this.props;

        if (!data) {
            return;
        }

        let target = e.target,
            timer = setTimeout(() => {
                clearTimeout(timer);
                target.value = '';
            }, clearHiddenInputFilterInterval);

        let index = data.findIndex(item =>
            typeof item === 'object' ?
                item[displayField].toUpperCase().startsWith(target.value.toUpperCase())
                :
                item.toUpperCase().startsWith(target.value.toUpperCase())
        );

        this.scroller?.current && this.scrollTo(this.scroller.current, (index) * 40, 200);

    };

    scrollTo = (element, to, duration) => {

        if (!element) {
            return;
        }

        // jump to target if duration zero
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }

        const difference = to - element.scrollTop,
            perTick = difference / duration * 10;

        setTimeout(() => {

            element.scrollTop = element.scrollTop + perTick;

            if (element.scrollTop === to) {
                return;
            }

            this.scrollTo(element, to, duration - 10);

        }, 10);

    };

    getTriggerValue = () => {

        const {placeholder, triggerRenderer, renderer, valueField, displayField, selectMode} = this.props,
            {value} = this.state,
            isMultiSelect = selectMode === SelectMode.MULTI_SELECT;

        if (triggerRenderer) {
            return typeof triggerRenderer === 'function' ? triggerRenderer(value) : triggerRenderer;
        }

        if (!value) {
            return placeholder;
        }

        return isMultiSelect ?
            value.length > 0 ?
                value.length + ' selected'
                :
                placeholder
            :
            renderer ?
                renderer(value)
                :
                Util.getTextByDisplayField(value, displayField, valueField);

    };

    /* eslint-disable complexity */
    render() {

        const {

                className, triggerClassName, popupClassName, style, name, popupTheme, data, triggerRenderer,
                useDynamicRenderList, itemHeight, scrollBuffer, renderer, listItemRenderer, selectMode,
                itemDisabled, useFilter, filterIconCls, useSelectAll, selectAllText, valueField, displayField,
                descriptionField, popupChildren, isHiddenInputFilter, noMatchedMsg, isGrouped, filterPlaceholder,
                radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,
                onListDataChange,

                // not passing down these props
                /* eslint-disable no-unused-vars */
                value: v, clearHiddenInputFilterInterval, listHeight,
                onOpenPopup, onClosePopup, onItemClick, onBeforeChange, onChange, onFilterChange,
                /* eslint-enable no-unused-vars */

                ...restProps

            } = this.props,
            {value, filter, popupVisible} = this.state,

            isMultiSelect = selectMode === SelectMode.MULTI_SELECT,
            listData = this.filterData();

        onListDataChange?.(listData);

        return (
            <div className={classNames('dropdown-select', {
                activated: popupVisible,
                [className]: className
            })}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                {
                    isHiddenInputFilter ?
                        <input ref={this.hiddenFilter}
                               className="hiddenFilter"
                               type="text"
                               onChange={this.handleHiddenFilterChange}/>
                        :
                        null
                }

                <Dropdown {...restProps}
                          ref={this.dropdown}
                          triggerClassName={classNames({
                              empty: !triggerRenderer && !value,
                              [triggerClassName]: triggerClassName
                          })}
                          popupClassName={'dropdown-select-popup' + (popupClassName ? ' ' + popupClassName : '')}
                          popupTheme={popupTheme}
                          triggerValue={this.getTriggerValue()}
                          onOpenPopup={this.handlePopupOpen}
                          onClosePopup={this.handlePopupClose}>

                    {
                        useFilter || (isMultiSelect && useSelectAll) ?
                            <div ref={this.actions}
                                 className="dropdown-select-popup-actions">
                                {
                                    useFilter ?
                                        <TextField ref={this.filter}
                                                   className="dropdown-select-filter"
                                                   value={filter}
                                                   placeholder={filterPlaceholder}
                                                   rightIconCls={filterIconCls}
                                                   onChange={this.handleFilterChange}/>
                                        :
                                        null
                                }
                                {
                                    isMultiSelect && useSelectAll ?
                                        <div className="list-item dropdown-select-all-wrapper"
                                             onClick={this.handleSelectAllClick}>
                                            <Checkbox className="list-item-select"
                                                      checked={data && value && value.length === data.length}
                                                      indeterminate={data && value && value.length > 0 && value.length <
                                                      data.length}
                                                      uncheckedIconCls={checkboxUncheckedIconCls}
                                                      checkedIconCls={checkboxCheckedIconCls}
                                                      indeterminateIconCls={checkboxIndeterminateIconCls}/>
                                            {selectAllText}
                                        </div>
                                        :
                                        null
                                }
                            </div>
                            :
                            null
                    }

                    <div ref={this.scroller}
                         className="dropdown-select-list-scroller">
                        {
                            !listData || listData.length < 1 ?
                                <div className="no-matched">
                                    {
                                        noMatchedMsg ?
                                            noMatchedMsg
                                            :
                                            <span>
                                                <i className="fas fa-exclamation-triangle no-matched-icon"/>
                                                No matched value.
                                            </span>
                                    }
                                </div>
                                :
                                isGrouped ?
                                    <GroupList className="group-select-list"
                                               value={value}
                                               selectMode={selectMode}
                                               data={listData}
                                               valueField={valueField}
                                               displayField={displayField}
                                               descriptionField={descriptionField}
                                               itemHeight={itemHeight}
                                               itemDisabled={itemDisabled}
                                               renderer={listItemRenderer || renderer}
                                               radioUncheckedIconCls={radioUncheckedIconCls}
                                               radioCheckedIconCls={radioCheckedIconCls}
                                               checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                               checkboxCheckedIconCls={checkboxCheckedIconCls}
                                               checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                               onItemClick={this.handleItemClick}
                                               onChange={this.handleChange}/>
                                    :
                                    useDynamicRenderList ?
                                        <DynamicRenderList className="dropdown-select-list"
                                                           theme={popupTheme}
                                                           selectMode={selectMode}
                                                           data={listData}
                                                           value={value}
                                                           valueField={valueField}
                                                           displayField={displayField}
                                                           descriptionField={descriptionField}
                                                           listHeight={this.getListHeight()}
                                                           itemHeight={itemHeight}
                                                           scrollBuffer={scrollBuffer}
                                                           itemDisabled={itemDisabled}
                                                           renderer={listItemRenderer || renderer}
                                                           radioUncheckedIconCls={radioUncheckedIconCls}
                                                           radioCheckedIconCls={radioCheckedIconCls}
                                                           checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                                           checkboxCheckedIconCls={checkboxCheckedIconCls}
                                                           checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                                           onItemClick={this.handleItemClick}
                                                           onChange={this.handleChange}/>
                                        :
                                        <List className="dropdown-select-list"
                                              theme={popupTheme}
                                              selectMode={selectMode}
                                              data={listData}
                                              value={value}
                                              valueField={valueField}
                                              displayField={displayField}
                                              descriptionField={descriptionField}
                                              itemDisabled={itemDisabled}
                                              renderer={listItemRenderer || renderer}
                                              radioUncheckedIconCls={radioUncheckedIconCls}
                                              radioCheckedIconCls={radioCheckedIconCls}
                                              checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                              checkboxCheckedIconCls={checkboxCheckedIconCls}
                                              checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                              onItemClick={this.handleItemClick}
                                              onChange={this.handleChange}/>
                        }
                    </div>

                    <div ref={this.popupChildren}
                         className="dropdown-select-popup-children">
                        {popupChildren}
                    </div>

                </Dropdown>

            </div>
        );

    }
}

DropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the trigger element.
     */
    triggerClassName: PropTypes.string,

    /**
     * The class name of the popup element.
     */
    popupClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The name of the dropDownSelect.
     */
    name: PropTypes.string,

    /**
     * The value of the dropDownSelect.
     */
    value: PropTypes.any,

    /**
     * The placeholder of the dropDownSelect.
     */
    placeholder: PropTypes.string,

    title: PropTypes.string,
    tip: PropTypes.string,
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Position)),

    triggerRenderer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

    rightIconCls: PropTypes.string,

    /**
     * The options' data.
     */
    data: PropTypes.oneOfType([

        // not grouped
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

            /**
             * The CSS class name of the list button.
             */
            className: PropTypes.string,

            /**
             * Override the styles of the list button.
             */
            style: PropTypes.object,

            /**
             * The theme of the list button.
             */
            theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

            /**
             * The text value of the list button.Type can be string or number.
             */
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            /**
             * The desc value of the list button. Type can be string or number.
             */
            desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

            title: PropTypes.string,

            /**
             * If true, the list button will be disabled.
             */
            disabled: PropTypes.bool,

            /**
             * If true, the button will have loading effect.
             */
            isLoading: PropTypes.bool,

            /**
             * If true,the element's ripple effect will be disabled.
             */
            disableTouchRipple: PropTypes.bool,

            /**
             * Use this property to display an icon. It will display on the left.
             */
            iconCls: PropTypes.string,

            /**
             * Use this property to display an icon. It will display on the right.
             */
            rightIconCls: PropTypes.string,

            /**
             * You can create a complicated renderer callback instead of value and desc prop.
             */
            renderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onClick: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]),

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true,the dropDownSelect will be loading.
     */
    isLoading: PropTypes.bool,

    /**
     * List item disabled callback.
     */
    itemDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

    /**
     * The select mode of listItem.Can be normal,checkbox.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The value field name in data. (default: "value")
     */
    valueField: PropTypes.string,

    /**
     * The display field name in data. (default: "text")
     */
    displayField: PropTypes.string,

    /**
     * The description field name in data. (default: "desc")
     */
    descriptionField: PropTypes.string,

    /**
     * The message of the dropDownSelect.
     */
    infoMsg: PropTypes.string,

    /**
     * Use this function to format the options' text.
     */
    textFormat: PropTypes.func,

    /**
     * If true, the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * If true, the drop-down box automatically closed when it blur.
     */
    isBlurClose: PropTypes.bool,

    /**
     * If true,the drop-down box will have search input.
     */
    useFilter: PropTypes.bool,

    /**
     * If true,the dropDownSelect will be grouped.
     */
    isGrouped: PropTypes.bool,

    filterIconCls: PropTypes.string,
    filterPlaceholder: PropTypes.string,
    useSelectAll: PropTypes.bool,
    selectAllText: PropTypes.string,

    isHiddenInputFilter: PropTypes.bool,
    clearHiddenInputFilterInterval: PropTypes.number,

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

    popupChildren: PropTypes.any,

    useDynamicRenderList: PropTypes.bool,
    listHeight: PropTypes.number,
    itemHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,
    resetPopPositionWait: PropTypes.number,
    autoPopupWidth: PropTypes.bool,
    shouldFollowScroll: PropTypes.bool,

    renderer: PropTypes.func,
    listItemRenderer: PropTypes.func,
    filterCallback: PropTypes.func,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemClick: PropTypes.func,

    /**
     * Callback function fired when the popup is open.
     */
    onOpenPopup: PropTypes.func,

    /**
     * Callback function fired when the popup is close.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onBeforeChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onFilterChange: PropTypes.func,
    onListDataChange: PropTypes.func

};

DropdownSelect.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    data: [],
    disabled: false,
    isLoading: false,
    itemDisabled: false,
    selectMode: SelectMode.SINGLE_SELECT,
    tipPosition: Position.BOTTOM,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: true,
    isBlurClose: true,
    useFilter: false,
    filterIconCls: 'fas fa-search',
    filterPlaceholder: 'Search ...',
    useSelectAll: false,
    selectAllText: 'Select All',
    useDynamicRenderList: false,
    isHiddenInputFilter: false,
    clearHiddenInputFilterInterval: 1000,
    isGrouped: false,
    resetPopPositionWait: 250,
    autoPopupWidth: true,

    listHeight: 200,
    itemHeight: 40,
    scrollBuffer: 8

};

export default DropdownSelect;

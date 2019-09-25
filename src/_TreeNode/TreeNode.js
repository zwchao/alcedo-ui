/**
 * @file TreeNode component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CircularLoading from '../CircularLoading';
import IconButton from '../IconButton';
import Radio from '../Radio';
import Checkbox from '../Checkbox';

import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import VirtualRoot from '../_statics/VirtualRoot';

import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';

class TreeNode extends Component {

    static SelectMode = SelectMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            collapsed: this.isCollapsed(props)
        };

    }

    isCollapsed = (props = this.props) => {

        const {data, isNodeCollapsed, collapsed, index, depth, path} = props;

        if (data && data[VirtualRoot]) {
            return false;
        }

        if (isNodeCollapsed) {
            if (typeof isNodeCollapsed === 'function') {
                return isNodeCollapsed(data, index, depth, path);
            } else {
                return !!isNodeCollapsed;
            }
        }

        return collapsed;

    };

    toggleTreeNode = e => {

        e && e.stopPropagation();

        const {onNodeToggleStart} = this.props;
        onNodeToggleStart && onNodeToggleStart();

        this.setState({
            collapsed: !this.state.collapsed
        }, () => {
            const {onNodeToggleEnd} = this.props;
            onNodeToggleEnd && onNodeToggleEnd();
        });

    };

    handleCheckboxChange = e => {

        const {data, path, value, onSelect, onDeselect} = this.props;

        if (!Calculation.isItemChecked(data, value, this.props)) {
            onSelect && onSelect(data, path, e);
        } else {
            onDeselect && onDeselect(data, path, e);
        }

    };

    handleRadioChange = e => {
        const {data, path, onSelect} = this.props;
        onSelect && onSelect(data, path, e);
    };

    handleClick = e => {

        const {data, path, disabled, isLoading, readOnly} = this.props;

        if (disabled || isLoading || readOnly || data.disabled || data.isLoading || data.readOnly) {
            return;
        }

        const {onClick} = this.props;
        onClick && onClick(data, path, e);

        const {selectMode} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                this.handleCheckboxChange(e);
                return;
            case SelectMode.SINGLE_SELECT:
                this.handleRadioChange(e);
                return;
        }

    };

    renderChildren = () => {

        const {depth, path, data} = this.props,
            {collapsed} = this.state,
            isVirtual = VirtualRoot in data;

        return data.children && data.children.length > 0 ?
            <div className={classNames('tree-node-children', {
                collapsed
            })}>
                {
                    data.children.map((item, index) =>
                        <TreeNode {...this.props}
                                  key={index}
                                  data={item}
                                  index={index}
                                  depth={depth + (isVirtual ? 0 : 1)}
                                  path={
                                      path ?
                                          [...path, {index, node: item}]
                                          :
                                          [{index, node: item}]
                                  }/>
                    )
                }
            </div>
            :
            null;

    };

    /* eslint-disable complexity */
    render() {

        const {data} = this.props;

        if (VirtualRoot in data) {
            return this.renderChildren();
        }

        const {

                index, depth, theme, selectTheme, selectMode, value,
                disabled, isLoading, readOnly, allowCollapse, isSelectRecursive, indentWidth,
                valueField, displayField, descriptionField, filter,

                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                renderer, onMouseEnter, onMouseLeave

            } = this.props,
            {collapsed} = this.state,

            checked = Calculation.isItemChecked(data, value, this.props),
            indeterminate = Calculation.isNodeIndeterminate(data, value, this.props),

            isNodeLoading = data.isLoading || isLoading,
            isNodeDisabled = data.disabled || disabled || isNodeLoading,

            isNodeMatched = !filter || (data && displayField in data
                && data[displayField].toString().toUpperCase().includes(filter.toUpperCase())),

            loadingIconPosition = (data.rightIconCls && !data.iconCls) ? 'right' : 'left';

        return (
            <Fragment>

                {
                    isNodeMatched ?
                        <div className={classNames('tree-node', {
                            [`theme-${theme}`]: theme,
                            [data.className]: data.className
                        })}
                             style={{
                                 ...data.style,
                                 paddingLeft: (depth + 1) * indentWidth
                             }}
                             title={data.title}
                             disabled={isNodeDisabled}
                             readOnly={readOnly}
                             onClick={this.handleClick}
                             onMouseEnter={onMouseEnter}
                             onMouseLeave={onMouseLeave}>

                            <div className="tree-node-inner">

                                {
                                    allowCollapse && data.children && data.children.length > 0 ?
                                        <IconButton className="tree-node-collapse-icon"
                                                    iconCls={collapsed ?
                                                        data.collapsedIconCls || collapsedIconCls
                                                        :
                                                        data.expandedIconCls || expandedIconCls}
                                                    onClick={this.toggleTreeNode}/>
                                        :
                                        null
                                }

                                {
                                    selectMode === SelectMode.SINGLE_SELECT && (radioUncheckedIconCls || radioCheckedIconCls) ?
                                        <Radio className="tree-node-select"
                                               theme={selectTheme}
                                               checked={checked}
                                               disabled={isNodeDisabled}
                                               uncheckedIconCls={data.radioUncheckedIconCls || radioUncheckedIconCls}
                                               checkedIconCls={data.radioCheckedIconCls || radioCheckedIconCls}
                                               disableTouchRipple={true}/>
                                        :
                                        null
                                }

                                {
                                    selectMode === SelectMode.MULTI_SELECT ?
                                        <Checkbox className="tree-node-select"
                                                  theme={selectTheme}
                                                  checked={checked}
                                                  indeterminate={isSelectRecursive ? indeterminate : false}
                                                  disabled={isNodeDisabled}
                                                  uncheckedIconCls={data.checkboxUncheckedIconCls || checkboxUncheckedIconCls}
                                                  checkedIconCls={data.checkboxCheckedIconCls || checkboxCheckedIconCls}
                                                  indeterminateIconCls={data.checkboxIndeterminateIconCls || checkboxIndeterminateIconCls}
                                                  disableTouchRipple={true}/>
                                        :
                                        null
                                }

                                {
                                    isNodeLoading && loadingIconPosition === 'left' ?
                                        <div className="button-icon button-icon-left">
                                            <CircularLoading className="button-loading-icon"
                                                             size="small"/>
                                        </div>
                                        :
                                        (
                                            data.iconCls ?
                                                <i className={`button-icon button-icon-left ${data.iconCls}`}
                                                   aria-hidden="true"></i>
                                                :
                                                null
                                        )
                                }

                                {
                                    data.itemRenderer && typeof data.itemRenderer === 'function' ?
                                        data.itemRenderer(data, index)
                                        :
                                        (
                                            renderer && typeof renderer === 'function' ?
                                                renderer(data, index)
                                                :
                                                (
                                                    data[descriptionField] ?
                                                        <div className="tree-node-content">
                                                            <span className="tree-node-content-value">
                                                                {Util.getTextByDisplayField(data, displayField, valueField)}
                                                            </span>
                                                            <span className="tree-node-content-desc">
                                                                {data[descriptionField]}
                                                            </span>
                                                        </div>
                                                        :
                                                        Util.getTextByDisplayField(data, displayField, valueField)
                                                )
                                        )
                                }

                                {
                                    isNodeLoading && loadingIconPosition === 'right' ?
                                        <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                                         size="small"/>
                                        :
                                        (
                                            data.rightIconCls ?
                                                <i className={`button-icon button-icon-right ${data.rightIconCls}`}
                                                   aria-hidden="true"></i>
                                                :
                                                null
                                        )
                                }
                            </div>

                        </div>
                        :
                        null
                }

                {this.renderChildren()}

            </Fragment>
        );

    }
}

TreeNode.propTypes = {

    index: PropTypes.number,
    depth: PropTypes.number,
    path: PropTypes.array,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.object,
    value: PropTypes.any,
    filter: PropTypes.string,

    valueField: PropTypes.string,
    displayField: PropTypes.string,
    descriptionField: PropTypes.string,

    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    readOnly: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsed: PropTypes.bool,
    isNodeToggling: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,
    indentWidth: PropTypes.number,

    renderer: PropTypes.func,

    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onNodeToggleStart: PropTypes.func,
    onNodeToggleEnd: PropTypes.func

};

TreeNode.defaultProps = {

    index: 0,
    depth: 0,

    theme: Theme.DEFAULT,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    disabled: false,
    isLoading: false,
    readOnly: false,
    allowCollapse: true,
    collapsed: false,
    isNodeToggling: false,
    isSelectRecursive: false,
    indentWidth: 20,

    collapsedIconCls: 'fas fa-caret-right',
    expandedIconCls: 'fas fa-caret-down',
    checkboxUncheckedIconCls: 'far fa-square',
    checkboxCheckedIconCls: 'fas fa-check-square',
    checkboxIndeterminateIconCls: 'fas fa-minus-square'

};

export default TreeNode;

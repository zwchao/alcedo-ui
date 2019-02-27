/**
 * @file CascaderSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropdown from '../Dropdown';
import CascaderList from '../CascaderList';
import Theme from '../Theme';
import Tip from '../Tip';

import SelectMode from '../_statics/SelectMode';
import HorizontalDirection from '../_statics/HorizontalDirection';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import CascaderCalculation from '../_vendors/CascaderCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class CascaderSelect extends Component {

    static SelectMode = SelectMode;
    static ExpandDirection = HorizontalDirection;
    static Theme = Theme;
    static Position = Position;
    static TipPosition = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            popupVisible: false,
            path: props.selectMode === SelectMode.SINGLE_SELECT ?
                CascaderCalculation.calPath(props.value, props.data, props) : undefined
        };

    }

    /**
     * public
     */
    startRipple = (e, props) => {
        this.refs.dropdown && this.refs.dropdown.startRipple(e, props);
    };

    /**
     * public
     */
    endRipple = () => {
        this.refs.dropdown && this.refs.dropdown.endRipple();
    };

    /**
     * public
     */
    triggerRipple = (e, props) => {
        this.refs.dropdown && this.refs.dropdown.triggerRipple(e, props);
    };

    /**
     * public
     */
    resetPopupPosition = () => {
        this.refs.dropdown && this.refs.dropdown.resetPosition();
    };

    /**
     * public
     */
    openPopup = () => {
        this.refs.dropdown && this.refs.dropdown.openPopup();
    };

    /**
     * public
     */
    closePopup = () => {
        this.refs.dropdown && this.refs.dropdown.closePopup();
    };

    getTriggerValue = (props = this.props) => {

        const {data, selectMode, placeholder, triggerRenderer, renderer, displayField, valueField} = props,
            {value, path} = this.state,
            isMultiSelect = selectMode === SelectMode.MULTI_SELECT;

        if (triggerRenderer) {
            return typeof triggerRenderer === 'function' ? triggerRenderer(value, path) : triggerRenderer;
        }

        if (!value) {
            return placeholder;
        }

        if (isMultiSelect) {
            return value.length > 0 ?
                value.length + ' selected'
                :
                placeholder;
        }

        let result = [];

        function addNode(node, i) {
            result.push(
                renderer ?
                    <div key={2 * i + 1}
                         className="cascader-select-trigger-value-node">
                        {renderer(node, path && path.slice(0, i + 1))}
                    </div>
                    :
                    Util.getTextByDisplayField(node, displayField, valueField)
            );
        }

        if (path) {
            for (let i = 0, len = path.length; i < len; i++) {

                i > 0 && result.push(
                    <i key={2 * i}
                       className="fas fa-angle-right cascader-select-trigger-value-separator"/>
                );

                addNode(path[i].node, i);

            }
        }

        return result;

    };

    pathChangeHandler = () => {
        this.refs.dropdown.resetPopupPosition();
    };

    nodeSelectHandler = (node, path) => {

        const {onNodeSelect} = this.props;
        onNodeSelect && onNodeSelect(node, path);

        if (this.props.selectMode !== SelectMode.SINGLE_SELECT) {
            return;
        }

        this.setState({
            path
        });

    };

    changeHandler = value => {

        const {autoClose} = this.props;
        if (autoClose) {
            this.closePopup();
        }

        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    };

    popupClosedHandler = e => {
        this.setState({
            popupVisible: false
        }, () => {
            const {onClosePopup} = this.props;
            onClosePopup && onClosePopup(e);
        });
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };
    }

    render() {

        const {

                className, triggerClassName, popupClassName, style, name, popupTheme, listWidth, data, renderer,
                selectTheme, selectMode, expandDirection, valueField, displayField, descriptionField, triggerRenderer,
                isSelectRecursive, allowCollapse, onNodeDeselect, popupChildren, onNodeClick,
                collapsedIconCls, expandedIconCls, radioUncheckedIconCls, radioCheckedIconCls,
                checkboxUncheckedIconCls, checkboxCheckedIconCls, checkboxIndeterminateIconCls,

                ...restProps

            } = this.props,
            {value, popupVisible} = this.state,

            wrapperClassName = classNames('cascader-select', {
                [className]: className
            }),

            selectTriggerClassName = classNames({
                activated: popupVisible,
                empty: !triggerRenderer && !value,
                [triggerClassName]: triggerClassName
            }),
            selectPopupClassName = classNames('cascader-select-popup', {
                [popupClassName]: popupClassName
            });

        return (
            <div ref="dropdownSelect"
                 className={wrapperClassName}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <Dropdown {...restProps}
                          ref="dropdown"
                          triggerClassName={selectTriggerClassName}
                          popupClassName={selectPopupClassName}
                          popupTheme={popupTheme}
                          autoPopupWidth={false}
                          triggerValue={this.getTriggerValue()}
                          onClosePopup={this.popupClosedHandler}>

                    <div className="cascader-select-list-scroller"
                         onWheel={e => Event.wheelHandler(e, this.props)}>

                        <CascaderList className="cascader-select-list"
                                      theme={popupTheme}
                                      selectTheme={selectTheme}
                                      expandDirection={expandDirection}
                                      listWidth={listWidth}
                                      selectMode={selectMode}
                                      data={data}
                                      value={value}
                                      valueField={valueField}
                                      displayField={displayField}
                                      descriptionField={descriptionField}
                                      isSelectRecursive={isSelectRecursive}
                                      allowCollapse={allowCollapse}
                                      collapsedIconCls={collapsedIconCls}
                                      expandedIconCls={expandedIconCls}
                                      radioUncheckedIconCls={radioUncheckedIconCls}
                                      radioCheckedIconCls={radioCheckedIconCls}
                                      checkboxUncheckedIconCls={checkboxUncheckedIconCls}
                                      checkboxCheckedIconCls={checkboxCheckedIconCls}
                                      checkboxIndeterminateIconCls={checkboxIndeterminateIconCls}
                                      renderer={renderer}
                                      onNodeClick={onNodeClick}
                                      onNodeSelect={this.nodeSelectHandler}
                                      onNodeDeselect={onNodeDeselect}
                                      onChange={this.changeHandler}
                                      onPathChange={this.pathChangeHandler}/>

                    </div>

                    {popupChildren}

                </Dropdown>

            </div>
        );

    }
}

CascaderSelect.propTypes = {

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

    listWidth: PropTypes.number,

    /**
     * The theme of the tree node select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The mode of tree node.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The direction of expansion.
     */
    expandDirection: PropTypes.oneOf(Util.enumerateValue(HorizontalDirection)),

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
    triggerValue: PropTypes.string,
    rightIconCls: PropTypes.string,

    /**
     * The options data.
     */
    data: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The CSS class name of the tree node.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the tree node.
         */
        style: PropTypes.object,

        /**
         * The theme of the tree button.
         */
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        /**
         * The text value of the tree button.Type can be string or number.
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The tree node's display text. Type can be string, number or bool.
         */
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * The desc value of the tree node. Type can be string or number.
         */
        desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

        /**
         * If true,the tree node will be disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,the button will be have loading effect.
         */
        isLoading: PropTypes.bool,

        /**
         * Use this property to display an icon. It will display on the left.
         */
        iconCls: PropTypes.string,

        /**
         * Use this property to display an icon. It will display on the right.
         */
        rightIconCls: PropTypes.string,

        /**
         * The message of tip.
         */
        tip: PropTypes.string,

        /**
         * The position of tip.
         */
        tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

        children: PropTypes.array,

        /**
         * You can create a complicated renderer callback instead of value and desc prop.
         */
        itemRenderer: PropTypes.func,

        /**
         * Callback function fired when a tree node touch-tapped.
         */
        onClick: PropTypes.func

    })),

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If true, the tree will be at loading status.
     */
    isLoading: PropTypes.bool,

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
     * Use this function to format the options's text.
     */
    textFormat: PropTypes.func,

    /**
     * If true,the drop-down box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    isTriggerPositionFixed: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isSelectRecursive: PropTypes.bool,
    allowCollapse: PropTypes.bool,
    collapsedIconCls: PropTypes.string,
    expandedIconCls: PropTypes.string,
    radioUncheckedIconCls: PropTypes.string,
    radioCheckedIconCls: PropTypes.string,
    checkboxUncheckedIconCls: PropTypes.string,
    checkboxCheckedIconCls: PropTypes.string,
    checkboxIndeterminateIconCls: PropTypes.string,

    popupChildren: PropTypes.any,

    resetPopPositionWait: PropTypes.number,

    renderer: PropTypes.func,

    triggerRenderer: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onNodeClick: PropTypes.func,

    /**
     * Callback function fired when the tree node selected.
     */
    onNodeSelect: PropTypes.func,

    /**
     * Callback function fired when the tree node deselected.
     */
    onNodeDeselect: PropTypes.func,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    /**
     * Callback function fired when a menu item is selected.
     */
    onChange: PropTypes.func,

    onWheel: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func

};

CascaderSelect.defaultProps = {

    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,
    listWidth: 200,

    selectTheme: Theme.DEFAULT,
    selectMode: SelectMode.SINGLE_SELECT,
    expandDirection: HorizontalDirection.RIGHT,

    placeholder: 'Please select ...',
    rightIconCls: 'fas fa-angle-down',
    disabled: false,
    isLoading: false,
    tipPosition: Position.BOTTOM,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    autoClose: false,

    isTriggerPositionFixed: false,
    shouldPreventContainerScroll: true,
    isSelectRecursive: true,
    allowCollapse: true,

    resetPopPositionWait: 250

};

export default CascaderSelect;

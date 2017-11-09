/**
 * @file LocalAutoComplete component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';

export default class LocalAutoComplete extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.triggerEl = null;

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false,
            isAbove: false
        };

        this.isAbove = ::this.isAbove;
        this.filterData = ::this.filterData;
        this.triggerFocusHandler = ::this.triggerFocusHandler;
        this.triggerBlurHandler = ::this.triggerBlurHandler;
        this.filterChangeHandler = ::this.filterChangeHandler;
        this.filterPressEnterHandler = ::this.filterPressEnterHandler;
        this.closePopup = ::this.closePopup;
        this.popupRenderHandler = ::this.popupRenderHandler;
        this.changeHandler = ::this.changeHandler;

    }

    isAbove() {

        const autoComplete = this.refs.autoComplete;

        if (!this.popupHeight || !autoComplete) {
            return false;
        }

        const {top} = Dom.getOffset(autoComplete),
            scrollTop = Dom.getScrollTop();

        if (top + this.triggerHeight + this.popupHeight - scrollTop > window.innerHeight) {
            return true;
        }

        return false;

    }

    filterData(filter = this.state.filter, data = this.props.data) {

        if (!filter) {
            return data;
        }

        const {displayField, filterCallback} = this.props;

        if (filterCallback) {
            return filterCallback(filter, data);
        }

        const filterFunc = (originData) => {
            return originData.filter(item => typeof item === 'object' && !!item[displayField] ?
                item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
                :
                item.toString().toUpperCase().includes(filter.toUpperCase()));
        };

        return filterFunc(data);

    }

    triggerFocusHandler(...args) {

        const {disabled, onFocus} = this.props,
            {filter} = this.state;

        onFocus && onFocus(...args);

        !disabled && filter && this.setState({
            popupVisible: true
        });

    }

    triggerBlurHandler(...args) {
        const {disabled, onBlur} = this.props;
        !disabled && onBlur && onBlur(...args);
    }

    filterChangeHandler(filter) {

        const value = this.state.value,
            state = {
                filter,
                popupVisible: !!filter
            };

        if (!filter) {
            state.value = undefined;
        }

        this.setState(state, () => {
            const {onFilterChange} = this.props;
            onFilterChange && onFilterChange(filter);
        });

    }

    filterPressEnterHandler(e, filter) {

        const {autoClose} = this.props,
            callback = () => {
                const {onFilterPressEnter} = this.props;
                onFilterPressEnter && onFilterPressEnter(filter);
            };

        if (autoClose) {
            this.setState({
                popupVisible: false
            }, () => {
                callback();
            });
        } else {
            callback();
        }

    }

    closePopup() {
        this.setState({
            popupVisible: false
        }, () => {
            const {onPopupClosed} = this.props;
            onPopupClosed && onPopupClosed();
        });
    }

    popupRenderHandler(popupEl) {

        this.popupEl = findDOMNode(popupEl);
        this.popupHeight = this.popupEl.offsetHeight;

        const isAbove = this.isAbove();

        if (isAbove !== this.state.isAbove) {
            this.setState({
                isAbove
            });
        }

    }

    changeHandler(value) {

        const {autoClose, valueField, displayField} = this.props,
            state = {
                value,
                filter: Util.getTextByDisplayField(value, displayField, valueField)
            };

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.refs.trigger);
        this.triggerHeight = this.triggerEl.clientHeight;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {
                className, popupClassName, style, popupStyle, theme, popupTheme, name, placeholder,
                disabled, iconCls, rightIconCls, valueField, displayField, descriptionField,
                noMatchedPopupVisible, noMatchedMsg, popupChildren, renderer, onItemTouchTap, onFilterClear,
                onTriggerMouseOver, onTriggerMouseOut
            } = this.props,
            {isAbove, value, filter, popupVisible} = this.state,

            emptyEl = [{
                itemRenderer() {
                    return (
                        <div className="no-matched-list-item">

                            {
                                noMatchedMsg ?
                                    noMatchedMsg
                                    :
                                    <span>
                                        <i className="fa fa-exclamation-triangle no-matched-list-item-icon"></i>
                                        No matched value.
                                    </span>
                            }

                        </div>
                    );
                },
                disableTouchRipple: true
            }],

            listData = this.filterData(),
            isEmpty = listData.length < 1,

            wrapperClassName = (className ? ' ' + className : ''),
            triggerClassName = (isEmpty && !noMatchedPopupVisible ? '' : (popupVisible ? ' activated' : ''))
                + (isAbove ? ' above' : ' blow'),
            autoCompletePopupClassName = (isAbove ? ' above' : ' blow') + (popupClassName ? ' ' + popupClassName : ''),
            autoCompletePopupStyle = Object.assign({
                width: this.triggerEl && getComputedStyle(this.triggerEl).width
            }, popupStyle);

        return (
            <div ref="autoComplete"
                 className={'local-auto-complete' + wrapperClassName}
                 style={style}>

                {
                    name ?
                        <input type="hidden"
                               name={name}
                               value={Util.getValueByValueField(value, valueField, displayField)}/>
                        :
                        null
                }

                <TextField ref="trigger"
                           className={'local-auto-complete-trigger' + triggerClassName}
                           theme={theme}
                           value={filter}
                           placeholder={placeholder}
                           disabled={disabled}
                           iconCls={iconCls}
                           rightIconCls={rightIconCls}
                           onFocus={this.triggerFocusHandler}
                           onBlur={this.triggerBlurHandler}
                           onMouseOver={onTriggerMouseOver}
                           onMouseOut={onTriggerMouseOut}
                           onChange={this.filterChangeHandler}
                           onPressEnter={this.filterPressEnterHandler}
                           onClear={onFilterClear}
                           onRightIconTouchTap={this.filterPressEnterHandler}/>

                {
                    isEmpty && !noMatchedPopupVisible ?
                        null
                        :
                        <Popup className={'local-auto-complete-popup' + autoCompletePopupClassName}
                               style={autoCompletePopupStyle}
                               theme={popupTheme}
                               visible={popupVisible}
                               triggerEl={this.triggerEl}
                               hasTriangle={false}
                               triggerMode={Popup.TriggerMode.OPEN}
                               position={isAbove ? Popup.Position.TOP_LEFT : Popup.Position.BOTTOM_LEFT}
                               onRender={this.popupRenderHandler}
                               onRequestClose={this.closePopup}>

                            {
                                isEmpty ?
                                    <List className="local-auto-complete-list"
                                          theme={popupTheme}
                                          data={emptyEl}/>
                                    :
                                    <List className="local-auto-complete-list"
                                          theme={popupTheme}
                                          value={value}
                                          data={listData}
                                          valueField={valueField}
                                          displayField={displayField}
                                          descriptionField={descriptionField}
                                          renderer={renderer}
                                          onItemTouchTap={onItemTouchTap}
                                          onChange={this.changeHandler}/>
                            }

                            {popupChildren}

                        </Popup>
                }

            </div>
        );
    }

};

LocalAutoComplete.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the popup element.
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

    /**
     * The name of the auto complete.
     */
    name: PropTypes.string,

    /**
     * The placeholder of the field.
     */
    placeholder: PropTypes.string,

    /**
     * Children passed into the List.
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

            /**
             * If true, the list button will be disabled.
             */
            disabled: PropTypes.bool,

            /**
             * If true,the button will be have loading effect.
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
            itemRenderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     * If true, the auto complete will be disabled.
     */
    disabled: PropTypes.bool,

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
     * If true, the popup list automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    /**
     * Callback function fired when filter changed.
     */
    filterCallback: PropTypes.func,

    /**
     * Use this property to display an icon.
     */
    iconCls: PropTypes.string,

    /**
     * Use this property to display an icon.
     */
    rightIconCls: PropTypes.string,

    /**
     * The visiblity of no matched popup.
     */
    noMatchedPopupVisible: PropTypes.bool,

    /**
     * The message of no matched value.
     */
    noMatchedMsg: PropTypes.string,

    popupChildren: PropTypes.any,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    renderer: PropTypes.func,

    /**
     * The function that trigger when filter changes.
     */
    onFilterChange: PropTypes.func,

    /**
     * The function that trigger when press enter.
     */
    onFilterPressEnter: PropTypes.func,

    /**
     * The function that trigger when filter cleared.
     */
    onFilterClear: PropTypes.func,

    /**
     * The function that trigger when value changed.
     */
    onChange: PropTypes.func,

    /**
     * The function that trigger when touch-tap the list items.
     */
    onItemTouchTap: PropTypes.func,

    /**
     * Callback function fired when LocalAutoComplete get focus.
     */
    onFocus: PropTypes.func,

    /**
     * Callback function fired when LocalAutoComplete lose focus.
     */
    onBlur: PropTypes.func,

    onTriggerMouseOver: PropTypes.func,
    onTriggerMouseOut: PropTypes.func,
    onPopupClosed: PropTypes.func

};

LocalAutoComplete.defaultProps = {

    className: null,
    popupClassName: null,
    style: null,
    popupStyle: null,
    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    name: null,
    placeholder: null,
    data: [],
    disabled: false,
    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',
    autoClose: false,
    iconCls: null,
    rightIconCls: 'fa fa-search',
    noMatchedPopupVisible: true,
    noMatchedMsg: null,

    popupChildren: null

};
/**
 * @file DropdownSelect component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

import Dropdown from '../Dropdown';
import RaisedButton from '../RaisedButton';
import TextField from '../TextField';
import Popup from '../Popup';
import List from '../List';
import GroupList from '../GroupList';
import Checkbox from '../Checkbox';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';

export default class DropdownSelect extends Component {

    static Mode = List.Mode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            filter: '',
            popupVisible: false
        };

        this.closePopup = ::this.closePopup;
        this.filterChangeHandler = ::this.filterChangeHandler;
        this.filterData = ::this.filterData;
        this.selectAllTouchTapHandler = ::this.selectAllTouchTapHandler;
        this.changeHandler = ::this.changeHandler;
        this.wheelHandler = ::this.wheelHandler;

    }

    closePopup() {
        this.refs.dropdown.closePopup();
    }

    filterChangeHandler(filter) {
        this.setState({
            filter
        });
    }

    filterData(filter = this.state.filter, data = this.props.data) {

        if (!filter) {
            return data;
        }

        const {displayField, isGrouped} = this.props,
            filterFunc = (originData) => {
                return originData.filter(item => typeof item === 'object' && !!item[displayField] ?
                    item[displayField].toString().toUpperCase().includes(filter.toUpperCase())
                    :
                    item.toString().toUpperCase().includes(filter.toUpperCase()));
            };

        if (isGrouped) {

            let result = Object.assign(data);

            for (let i = 0, len = result.length; i < len; i++) {
                let group = result[i];
                group.children = filterFunc(group.children);
                if (group.children.length < 1) {
                    result.splice(i, 1);
                    i--;
                }
            }

        }

        return filterFunc(data);

    }

    selectAllTouchTapHandler() {

        const {data} = this.props,
            {value} = this.state;

        if (!data) {
            return;
        }

        const isSelectAll = !value || (value && value.length < data.length),
            newValue = isSelectAll ? data : [];

        this.setState({
            value: newValue
        }, () => {
            this.changeHandler(newValue);
        });

    }

    changeHandler(value) {

        const {autoClose} = this.props,
            state = {
                value
            };

        if (autoClose) {
            state.popupVisible = false;
        }

        this.setState(state, () => {
            const {onChange} = this.props;
            onChange && onChange(value);
        });

    }

    wheelHandler(e) {
        const {shouldPreventContainerScroll, onWheel} = this.props;
        shouldPreventContainerScroll && Event.preventContainerScroll(e);
        onWheel && onWheel(e);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {
                className, popupClassName, style, name, placeholder, popupTheme, data,
                mode, useFilter, useSelectAll, valueField, displayField, descriptionField, noMatchedMsg,
                itemTouchTapHandle, disableTouchRipple, onTriggerMouseOver, onTriggerMouseOut, popupChildren,

                ...restProps

            } = this.props,
            {value, filter, popupVisible} = this.state,

            isMultiSelect = mode === List.Mode.CHECKBOX,

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
                }
            }],

            triggerClassName = (popupVisible ? ' activated' : '')
                + (value ? '' : ' empty'),
            triggerValue = value ?
                (
                    isMultiSelect ?
                        (
                            value.length > 0 ?
                                value.length + ' selected'
                                :
                                placeholder
                        )
                        :
                        Util.getTextByDisplayField(value, displayField, valueField)
                )
                :
                placeholder,

            listData = this.filterData();

        return (
            <div ref="dropdownSelect"
                 className={'dropdown-select' + (className ? ' ' + className : '')}
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
                          className={'dropdown-select-trigger' + triggerClassName}
                          popupClassName={'dropdown-select-popup' + (popupClassName ? ' ' + popupClassName : '')}
                          popupTheme={popupTheme}
                          triggerValue={triggerValue}>

                    <div className="dropdown-select-popup-fixed">

                        {
                            useFilter ?
                                <TextField className="dropdown-select-filter"
                                           value={filter}
                                           rightIconCls="fa fa-search"
                                           onChange={this.filterChangeHandler}/>
                                :
                                null
                        }

                        {
                            isMultiSelect && useSelectAll ?
                                <div className="list-item dropdown-select-all-wrapper"
                                     onTouchTap={this.selectAllTouchTapHandler}>
                                    <Checkbox className="list-item-checkbox"
                                              value={data && value && value.length === data.length}
                                              indeterminate={data && value && value.length > 0 && value.length < data.length}/>
                                    Select All
                                </div>
                                :
                                null
                        }

                    </div>

                    <div className="dropdown-select-list-scroller"
                         onWheel={this.wheelHandler}>

                        {
                            useFilter ?
                                <div className="dropdown-select-filter-placeholder"></div>
                                :
                                null
                        }

                        {
                            isMultiSelect && useSelectAll ?
                                <div className="dropdown-select-all-placeholder"></div>
                                :
                                null
                        }

                        <List className="dropdown-select-list"
                              theme={popupTheme}
                              mode={mode}
                              data={listData.length < 1 ? emptyEl : listData}
                              value={value}
                              valueField={valueField}
                              displayField={displayField}
                              descriptionField={descriptionField}
                              onItemTouchTap={itemTouchTapHandle}
                              onChange={this.changeHandler}/>

                    </div>

                    {popupChildren}

                </Dropdown>

            </div>
        );

    }
};

DropdownSelect.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

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

    rightIconCls: PropTypes.string,

    /**
     * The options data.
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
            renderer: PropTypes.func,

            /**
             * Callback function fired when a list item touch-tapped.
             */
            onTouchTap: PropTypes.func

        }), PropTypes.string, PropTypes.number])),

        // grouped
        PropTypes.array

    ]).isRequired,

    /**
     * The invalid message of dropDownSelect.
     */
    invalidMsg: PropTypes.string,

    /**
     * If true,the dropDownSelect will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * The mode of listItem.Can be normal,checkbox.
     */
    mode: PropTypes.oneOf(Util.enumerateValue(List.Mode)),

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

    /**
     * If true,the drop-down box will have search input.
     */
    useFilter: PropTypes.bool,

    useSelectAll: PropTypes.bool,

    /**
     * The message of no matching option.
     */
    noMatchedMsg: PropTypes.string,

    shouldPreventContainerScroll: PropTypes.bool,

    popupChildren: PropTypes.any,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onItemTouchTap: PropTypes.func,

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
    onTriggerMouseOver: PropTypes.func,
    onTriggerMouseOut: PropTypes.func

};

DropdownSelect.defaultProps = {

    className: null,
    popupClassName: null,
    style: null,
    popupStyle: null,
    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    name: null,
    value: null,
    placeholder: 'Please select ...',
    rightIconCls: 'fa fa-angle-down',
    data: [],
    invalidMsg: null,
    disabled: false,
    mode: List.Mode.NORMAL,

    valueField: 'value',
    displayField: 'text',
    descriptionField: 'desc',

    infoMsg: null,
    autoClose: true,
    useFilter: false,
    useSelectAll: false,
    noMatchedMsg: null,

    shouldPreventContainerScroll: true,

    popupChildren: null

};
/**
 * @file MaterialDropdown component
 * @author wendy(wendy.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MaterialFieldSeparator from '../_MaterialFieldSeparator';
import Theme from '../Theme';
import Dropdown from '../Dropdown';

import Util from '../_vendors/Util';

export default class MaterialDropdown extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            isFocus: false,
            isHover: false
        };

        this.triggerFocusHandler = ::this.triggerFocusHandler;
        this.triggerBlurHandler = ::this.triggerBlurHandler;
        this.triggerMouseOverHandler = ::this.triggerMouseOverHandler;
        this.triggerMouseOutHandler = ::this.triggerMouseOutHandler;

    }

    triggerFocusHandler(...args) {
        this.setState({
            isFocus: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus(...args);
        });
    }

    triggerBlurHandler(...args) {
        this.setState({
            isFocus: false
        }, () => {
            const {onBlur} = this.props;
            onBlur && onBlur(...args);
        });
    }

    triggerMouseOverHandler(...args) {
        this.setState({
            isHover: true
        }, () => {
            const {onMouseOver} = this.props;
            onMouseOver && onMouseOver(...args);
        });
    }

    triggerMouseOutHandler(...args) {
        this.setState({
            isHover: false
        }, () => {
            const {onMouseOut} = this.props;
            onMouseOut && onMouseOut(...args);
        });
    }

    render() {

        const {
                className, style, theme,
                ...restProps
            } = this.props,
            {isFocus, isHover} = this.state,

            wrapperClassName = (isFocus ? ' focused' : '') + (className ? ' ' + className : '');

        return (
            <div className={'material-dropdown' + wrapperClassName}
                 style={style}>

                <Dropdown {...restProps}
                          className="material-dropdown-content"
                          onFocus={this.triggerFocusHandler}
                          onBlur={this.triggerBlurHandler}
                          onTriggerMouseOut={this.triggerMouseOutHandler}
                          onTriggerMouseOver={this.triggerMouseOverHandler}/>

                <MaterialFieldSeparator theme={theme}
                                        isHover={isHover}
                                        isFocus={isFocus}/>
            </div>
        );

    }
};

MaterialDropdown.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The class name of the trigger element.
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
     * Override the styles of the trigger element.
     */
    triggerStyle: PropTypes.object,

    /**
     * Override the styles of the popup element.
     */
    popupStyle: PropTypes.object,

    /**
     * The theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popup theme.
     */
    popupTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The value of the dropDown trigger.
     */
    triggerValue: PropTypes.any,

    /**
     * The placeholder of the dropDown trigger.
     */
    placeholder: PropTypes.string,

    rightIconCls: PropTypes.string,

    /**
     * If true, the dropDown will be disabled.
     */
    disabled: PropTypes.bool,

    disableTouchRipple: PropTypes.bool,

    /**
     * If true,the dropdown box automatically closed after selection.
     */
    autoClose: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * Callback function fired when the popup is closed.
     */
    onClosePopup: PropTypes.func,

    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onTriggerMouseOver: PropTypes.func,
    onTriggerMouseOut: PropTypes.func,
    onTriggerTouchTap: PropTypes.func

};

MaterialDropdown.defaultProps = {

    className: null,
    triggerClassName: null,
    popupClassName: null,
    style: null,
    triggerStyle: null,
    popupStyle: null,
    theme: Theme.DEFAULT,
    popupTheme: Theme.DEFAULT,

    triggerValue: null,
    placeholder: 'Please select ...',
    rightIconCls: 'fa fa-angle-down',
    disabled: false,
    disableTouchRipple: false,
    autoClose: true,

    shouldPreventContainerScroll: true

};
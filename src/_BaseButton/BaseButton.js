import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CircularLoading from '../CircularLoading';
import TipProvider from '../TipProvider';
import TouchRipple from '../TouchRipple';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './BaseButton.css';

export default class BaseButton extends Component {

    constructor(props) {

        super(props);

        this.state = {
            focused: false
        };

        this.touchTapHandler = this::this.touchTapHandler;
        this.focusHandler = this::this.focusHandler;
        this.blurHandler = this::this.blurHandler;
        this.startRipple = this::this.startRipple;
        this.endRipple = this::this.endRipple;

    }

    touchTapHandler(e) {
        e.preventDefault();
        const {disabled, isLoading, onTouchTap} = this.props;
        !disabled && !isLoading && onTouchTap && onTouchTap(e);
    }

    focusHandler(e) {
        this.setState({
            focused: true
        }, () => {
            const {onFocus} = this.props;
            onFocus && onFocus(e);
        });
    }

    blurHandler(e) {
        this.setState({
            focused: false
        }, () => {
            const {onBlur} = this.props;
            onBlur && onBlur(e);
        });
    }

    startRipple(e) {
        this.refs.touchRipple.addRipple(e);
    }

    endRipple() {
        this.refs.touchRipple.removeRipple();
    }

    render() {

        const {
                children, className, style, theme, isRounded, isCircular, disableTouchRipple,
                iconCls, rightIconCls, type, value, disabled, readOnly, isLoading, rippleDisplayCenter,
                tip, tipPosition, renderer, onMouseEnter, onMouseLeave
            } = this.props,
            {focused} = this.state,

            buttonClassName = (focused ? ' focused' : '') + (theme ? ` theme-${theme}` : '')
                + (isCircular ? ' button-circular' : (isRounded ? ' button-rounded' : ''))
                + (className ? ' ' + className : ''),

            loadingIconPosition = (rightIconCls && !iconCls) ? 'right' : 'left';

        return (
            <TipProvider text={tip}
                         position={tipPosition}>

                <button className={'base-button' + buttonClassName}
                        style={style}
                        type={type}
                        disabled={disabled || isLoading}
                        readOnly={readOnly}
                        onTouchTap={this.touchTapHandler}
                        onFocus={this.focusHandler}
                        onBlur={this.blurHandler}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>

                    {
                        isLoading && loadingIconPosition === 'left' ?
                            <CircularLoading className="button-icon button-icon-left button-loading-icon"
                                             size="small"/>
                            :
                            (
                                iconCls ?
                                    <i className={`button-icon button-icon-left ${iconCls}`}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            )
                    }

                    {
                        renderer && typeof renderer === 'function' ?
                            renderer(this.props)
                            :
                            <span className="base-button-value">{value}</span>
                    }

                    {
                        isLoading && loadingIconPosition === 'right' ?
                            <CircularLoading className="button-icon button-icon-right button-loading-icon"
                                             size="small"/>
                            :
                            (
                                rightIconCls ?
                                    <i className={`button-icon button-icon-right ${rightIconCls}`}
                                       aria-hidden="true"></i>
                                    :
                                    null
                            )
                    }

                    {children}

                    {
                        disableTouchRipple ?
                            null
                            :
                            <TouchRipple ref="touchRipple"
                                         className={disabled || isLoading ? 'hidden' : ''}
                                         displayCenter={rippleDisplayCenter}/>
                    }

                </button>

            </TipProvider>
        );

    }
};

BaseButton.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    isRounded: PropTypes.bool,
    isCircular: PropTypes.bool,

    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    isLoading: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,

    iconCls: PropTypes.string,
    rightIconCls: PropTypes.string,

    tip: PropTypes.string,
    tipPosition: PropTypes.string,

    rippleDisplayCenter: PropTypes.bool,

    renderer: PropTypes.func,
    onTouchTap: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func

};

BaseButton.defaultProps = {

    className: '',
    style: null,

    theme: Theme.DEFAULT,
    isRounded: false,
    isCircular: false,

    value: '',
    disabled: false,
    readOnly: false,
    type: 'button',
    isLoading: false,
    disableTouchRipple: false,

    rippleDisplayCenter: false,

    iconCls: '',
    rightIconCls: ''

};
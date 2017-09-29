/**
 * @file ButtonCheckbox component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';

export default class ButtonCheckbox extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: !!props.value
        };

        this.touchTapHandler = ::this.touchTapHandler;

    }

    touchTapHandler() {
        const value = !this.state.value;
        this.setState({
            value
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(value);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: !!nextProps.value
            });
        }
    }

    render() {

        const {className, style, text, disabled} = this.props;
        const {value} = this.state;

        return (
            <RaisedButton className={`button-checkbox ${value ? 'activated' : ''} ${className}`}
                          style={style}
                          value={text}
                          disabled={disabled}
                          isRounded={true}
                          theme={value ? Theme.HIGHLIGHT : Theme.DEFAULT}
                          onTouchTap={this.touchTapHandler}/>
        );

    }
};

ButtonCheckbox.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The name of the toggleButton.
     */
    // name: PropTypes.string,

    /**
     * The text of the button.
     */
    text: PropTypes.string,

    /**
     * If true,the button will be in active status.
     */
    value: PropTypes.bool,

    /**
     * Disables the button if set to true.
     */
    disabled: PropTypes.bool,

    /**
     * Callback function fired when the button is touch-tapped.
     */
    onChange: PropTypes.func

};

ButtonCheckbox.defaultProps = {

    className: '',
    style: null,

    name: '',
    text: '',
    value: false,
    disabled: false

};
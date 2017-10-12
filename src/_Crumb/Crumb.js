/**
 * @file Crumb component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'src/FlatButton';
import Theme from 'src/Theme';

import Util from 'src/_vendors/Util';

export default class Crumb extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style} = this.props,

            crumbClassName = (className ? ' ' + className : '');

        return (
            <FlatButton {...this.props}
                        className={'crumb' + crumbClassName}>

            </FlatButton>
        );

    }
};

Crumb.propTypes = {

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
     * The list item's display text. Type can be string, number or bool.
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The desc value of the list button. Type can be string or number.
     */
    desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * If true,the list item will be disabled.
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
     * The message of tip.
     */
    tip: PropTypes.string,

    /**
     * The position of tip.
     */
    tipPosition: PropTypes.oneOf(Util.enumerateValue(Tip.Position)),

    /**
     * If true,the item will have center displayed ripple effect.
     */
    rippleDisplayCenter: PropTypes.bool,

    /**
     * You can create a complicated renderer callback instead of value and desc prop.
     */
    itemRenderer: PropTypes.func,

    /**
     * Callback function fired when a list item touch-tapped.
     */
    onTouchTap: PropTypes.func

};

Crumb.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT

};
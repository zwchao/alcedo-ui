/**
 * @file ColorPicker component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

    }

    render() {

        const {className, style} = this.props;

        return (
            <div className={'color-picker' + (className ? ' ' + className : '')}
                 style={style}>

                <div className="color-picker-area">

                </div>

                <div className="color-picker-hue">
                    <i className="fa fa-caret-down color-picker-hue-pointer-top"></i>
                    <i className="fa fa-caret-up color-picker-hue-pointer-bottom"></i>
                </div>

            </div>
        );

    }
};

ColorPicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

ColorPicker.defaultProps = {

    className: null,
    style: null

};
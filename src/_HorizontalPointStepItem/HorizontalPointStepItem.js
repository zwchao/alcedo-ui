/**
 * @file HorizontalPointStepItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HorizontalPointStepItem extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.getRightBarClassName = ::this.getRightBarClassName;
        this.touchTapHandler = ::this.touchTapHandler;

    }

    getRightBarClassName() {

        const {activatedStep, finishedStep, index} = this.props;

        if (finishedStep > index || activatedStep > index) {
            return ' full';
        }

        if (activatedStep === index || finishedStep === index) {
            return '';
        }

        return ' hidden';

    }

    touchTapHandler(e) {
        e.preventDefault();
        const {activatedStep, finishedStep, index, disabled, onTouchTap} = this.props;
        !disabled && activatedStep !== index && finishedStep >= index && onTouchTap && onTouchTap(index, e);
    }

    render() {

        const {
                className, style, activatedStep, finishedStep, index, value, isFirst, isLast,
                showFinishedStepIcon, finishedStepIconCls, disabled
            } = this.props,

            itemClassName = (isFirst ? ' first' : '') + (isLast ? ' last' : '')
                + (activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : ''))
                + (disabled ? ' disabled' : '') + (className ? ' ' + className : '');

        return (
            <div className={'horizontal-point-step-item' + itemClassName}
                 style={style}>

                <div className="bg-bar"></div>

                {
                    !isFirst && (finishedStep >= index || activatedStep >= index) ?
                        <div className="top-bar"></div>
                        :
                        null
                }

                {
                    !isLast ?
                        <div className={'bottom-bar' + this.getRightBarClassName()}></div>
                        :
                        null
                }

                {/*<div className="bg-round"></div>*/}
                <div className="round"
                     onTouchTap={this.touchTapHandler}></div>

                <div className="title">
                    {value.title}
                </div>

            </div>
        );

    }
};

HorizontalPointStepItem.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    activatedStep: PropTypes.number,
    finishedStep: PropTypes.number,
    index: PropTypes.number,
    value: PropTypes.object,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    showFinishedStepIcon: PropTypes.bool,
    finishedStepIconCls: PropTypes.string,

    disabled: PropTypes.bool,

    onTouchTap: PropTypes.func

};

HorizontalPointStepItem.defaultProps = {

    className: '',
    style: null,

    activatedStep: 0,
    finishedStep: 0,
    index: 0,
    value: {},
    isFirst: true,
    isLast: false,

    showFinishedStepIcon: true,
    finishedStepIconCls: 'fa fa-check',

    disabled: false

};
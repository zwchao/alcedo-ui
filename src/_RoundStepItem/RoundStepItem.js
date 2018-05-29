/**
 * @file RoundStepItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class RoundStepItem extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getRightBarClassName = () => {

        const {activatedStep, finishedStep, index} = this.props;

        if (finishedStep > index || activatedStep > index) {
            return ' full';
        }

        if (activatedStep === index || finishedStep === index) {
            return '';
        }

        return ' hidden';

    };

    clickHandler = e => {
        e.preventDefault();
        const {activatedStep, finishedStep, index, disabled, onClick} = this.props;
        !disabled && activatedStep !== index && finishedStep >= index && onClick && onClick(index, e);
    };

    render() {

        const {
                className, style, activatedStep, finishedStep, index, value, isFirst, isLast,
                showFinishedStepIcon, finishedStepIconCls, disabled
            } = this.props,

            itemClassName = classNames('round-step-item',
                activatedStep == index ? ' activated' : (finishedStep >= index ? ' finished' : ''), {
                    first: isFirst,
                    last: isLast,
                    disabled: disabled,
                    [className]: className
                });

        return (
            <div className={itemClassName}
                 style={style}>

                <div className="bg-bar"></div>
                <div className="bg-round"></div>

                {
                    !isFirst && (finishedStep >= index || activatedStep >= index) ?
                        <div className="left-bar"></div>
                        :
                        null
                }

                {
                    !isLast ?
                        <div className={'right-bar' + this.getRightBarClassName()}></div>
                        :
                        null
                }

                <div className="round"
                     onClick={this.clickHandler}>
                    {
                        showFinishedStepIcon && finishedStep > index ?
                            <i className={finishedStepIconCls}
                               aria-hidden="true"></i>
                            :
                            (index + 1)
                    }
                </div>

                <div className="title">
                    {value.title}
                </div>

            </div>
        );

    }
}

RoundStepItem.propTypes = {

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

    onClick: PropTypes.func

};

RoundStepItem.defaultProps = {

    activatedStep: 0,
    finishedStep: 0,
    index: 0,
    value: {},
    isFirst: true,
    isLast: false,

    showFinishedStepIcon: true,
    finishedStepIconCls: 'fas fa-check',

    disabled: false

};

export default RoundStepItem;
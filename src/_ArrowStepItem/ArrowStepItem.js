/**
 * @file ArrowStepItem component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ArrowStepItem extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    touchTapHandler = e => {
        e.preventDefault();
        const {isActivatedStep, isFinishedStep, index, onClick} = this.props;
        !isActivatedStep && isFinishedStep && onClick && onClick(index, e);
    };

    render() {

        const {className, style, isActivatedStep, isFinishedStep, index, value, isFirst, isLast} = this.props,

            itemClassName = classNames('arrow-step-item',
                isActivatedStep ? 'activated' : (isFinishedStep ? 'finished' : ''), {
                    first: isFirst,
                    last: isLast,
                    [className]: className
                }),

            triangleClassName = isActivatedStep ? 'activated' : (isFinishedStep ? 'finished' : ''),
            triangleTopClassName = classNames('triangle-top', triangleClassName),
            triangleMiddleClassName = classNames('triangle-middle', triangleClassName),
            triangleBottomClassName = classNames('triangle-bottom', triangleClassName);

        return (
            <div className={itemClassName}
                 style={style}
                 onClick={this.touchTapHandler}>

                <div className="arrow-step-item-content">
                    <div className="number">
                        {index + 1}
                    </div>
                    <div className="title">
                        {value.title}
                    </div>
                </div>

                {
                    isFirst ?
                        null
                        :
                        <div className="triangle-wrapper triangle-wrapper-left">
                            <div className={triangleTopClassName}></div>
                            <div className={triangleBottomClassName}></div>
                        </div>
                }

                {
                    isLast ?
                        null
                        :
                        <div className="triangle-wrapper triangle-wrapper-right">
                            <div className={triangleMiddleClassName}></div>
                        </div>
                }

            </div>
        );

    }
}

ArrowStepItem.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    index: PropTypes.number,
    isActivatedStep: PropTypes.bool,
    isFinishedStep: PropTypes.bool,
    value: PropTypes.object,

    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,

    onClick: PropTypes.func

};

ArrowStepItem.defaultProps = {

    index: 0,
    isActivatedStep: false,
    isFinishedStep: false,

    isFirst: true,
    isLast: true

};

export default ArrowStepItem;
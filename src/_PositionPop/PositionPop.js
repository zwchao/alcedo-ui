/**
 * @file PositionPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Pop from '../_Pop';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Event from '../_vendors/Event';
import Util from '../_vendors/Util';
import PositionPopCalculation from '../_vendors/PositionPopCalculation';

class PositionPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * public
     */
    getEl = () => {
        return this.refs.pop && this.refs.pop.getEl();
    };

    resetPosition = transitionEl => {
        const {parentEl, position} = this.props;
        PositionPopCalculation.setStyle(parentEl, transitionEl, position);
    };

    render() {

        const {

                children,

                container, className, theme, position, isAnimated,

                // not passing down these props
                isEscClose, isBlurClose, shouldPreventContainerScroll,

                ...restProps

            } = this.props,

            popClassName = classNames('position-pop', {
                [`theme-${theme}`]: theme,
                [`position-pop-${position}`]: position,
                'position-pop-animated': isAnimated,
                [className]: className
            });

        return (
            <Pop {...restProps}
                 ref="pop"
                 className={popClassName}
                 container={container}
                 isAnimated={isAnimated}
                 onWheel={e => Event.wheelHandler(e, this.props)}
                 resetPosition={this.resetPosition}>
                {popEl => typeof children === 'function' ? children(popEl) : children}
            </Pop>
        );

    }

}

PositionPop.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true,the trigger pop is visible.
     */
    visible: PropTypes.bool,

    /**
     * The trigger pop theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

    /**
     * The trigger pop alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true,popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isBlurClose: PropTypes.bool,
    isEscClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,

    container: PropTypes.node,

    showModal: PropTypes.bool,
    modalClassName: PropTypes.string,

    /**
     * The function of popup render.
     */
    onRender: PropTypes.func,

    /**
     * The function of popup rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of popup destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of popup destroyed.
     */
    onDestroyed: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

PositionPop.defaultProps = {

    parentEl: document.body,
    depth: 6,

    visible: false,
    theme: Theme.DEFAULT,
    position: Position.CENTER,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,

    container: <div></div>,

    showModal: false

};

export default PositionPop;

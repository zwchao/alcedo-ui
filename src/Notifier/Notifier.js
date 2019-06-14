/**
 * @file Notifier component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import classNames from 'classnames';

import PositionPop from '../_PositionPop';
import Notification from '../_Notification';

import MsgType from '../_statics/MsgType';
import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class Notifier extends Component {

    static Type = MsgType;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.nextKey = 0;
        this.pop = createRef();
        this.popInstance = null;

        this.state = {
            visible: false,
            notifications: []
        };

    }

    isPositiveSequence = (position = this.props.position) => {
        return position !== Position.BOTTOM_LEFT && position !== Position.BOTTOM && position !== Position.BOTTOM_RIGHT;
    };

    /**
     * public
     * @param notification
     */
    addNotification = notification => {

        let notifications = this.state.notifications;

        if (this.isPositiveSequence()) {
            notifications.push({...notification, notificationId: this.nextKey++});
        } else {
            notifications.unshift({...notification, notificationId: this.nextKey++});
        }

        this.setState({
            notifications,
            visible: true
        }, () => {
            this.popInstance && this.popInstance.resetPosition();
        });

    };

    removeNotification = notificationId => {

        let {notifications} = this.state;

        if (!notifications || notifications.length < 1) {
            return;
        }

        notifications.splice(notifications.findIndex(item => item.notificationId === notificationId), 1);

        this.setState({
            notifications
        }, () => {
            if (notifications.length < 1) {
                this.setState({
                    visible: false
                }, () => {
                    this.popInstance && this.popInstance.resetPosition();
                });
            }
        });

    };

    componentDidMount() {
        this.popInstance = this.pop && this.pop.current;
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.notifications && nextProps.notifications.length > 0) {

            let notifications = cloneDeep(nextProps.notifications);
            for (let i = 0, len = notifications.length; i < len; i++) {
                if (typeof notifications[i] !== 'object') {
                    notifications[i] = {
                        message: notifications[i]
                    };
                }
                notifications[i].notificationId = this.nextKey++;
            }

            if (this.isPositiveSequence()) {
                notifications = [...this.state.notifications, ...notifications];
            } else {
                notifications = [...notifications.reverse(), ...this.state.notifications];
            }

            this.setState({
                notifications,
                visible: true
            }, () => {

                this.popInstance && this.popInstance.resetPosition();

                const {onNotificationPop} = this.props;
                onNotificationPop && onNotificationPop();

            });

        }

    }

    render() {

        const {

                className, position, duration, parentEl,

                // not passing down these props
                onNotificationPop,

                ...restProps

            } = this.props,
            {notifications, visible} = this.state;

        return (
            <PositionPop {...restProps}
                         ref={this.pop}
                         className={classNames('notifier', {
                             [`notifier-${position}`]: position,
                             [className]: className
                         })}
                         visible={visible}
                         position={position}
                         parentEl={parentEl}>
                {
                    notifications && notifications.map(options =>
                        <Notification {...options}
                                      key={options.notificationId}
                                      duration={'duration' in options ? options.duration : duration}
                                      onRequestClose={this.removeNotification}/>
                    )
                }
            </PositionPop>
        );

    }

}

Notifier.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    parentEl: PropTypes.object,

    /**
     * Children passed into the notifier.
     */
    notifications: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({

        /**
         * The CSS class name of notification.
         */
        className: PropTypes.string,

        /**
         * Override the styles of the notification.
         */
        style: PropTypes.object,

        /**
         * The type of notification.
         */
        type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

        /**
         * The title of notification.
         */
        title: PropTypes.string,

        /**
         * The message of notification.
         */
        message: PropTypes.string,

        /**
         * The icon class name of notification.
         */
        iconCls: PropTypes.string,

        /**
         * The duration of notification.
         */
        duration: PropTypes.number

    }), PropTypes.string, PropTypes.number])),

    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * The duration of notification.
     */
    duration: PropTypes.number,

    /**
     * Callback function fired when the notifier pop.
     */
    onNotificationPop: PropTypes.func

};

Notifier.defaultProps = {

    parentEl: document.body,

    position: Position.BOTTOM_RIGHT,
    duration: 0

};

export default Notifier;

import React, {Component, PropTypes} from 'react';

import FlatButton from '../FlatButton';
import RaisedButton from '../RaisedButton';

import './List.css';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, items} = this.props;

        return (
            <div className={`list ${className}`}
                 style={style}>

                {
                    items.length > 0
                        ? (
                        items.map((item, index) => {
                            return (
                                <RaisedButton {...item}
                                              key={index}
                                              className={`list-item ${item.className ? item.className : ''}`}/>
                            );
                        })
                    )
                        : null
                }

                {children}

            </div>
        );

    }
};

List.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    items: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,

        theme: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.bool,
        isLoading: PropTypes.bool,
        disableTouchRipple: PropTypes.bool,

        iconCls: PropTypes.string,
        iconPosition: PropTypes.string,

        onTouchTap: PropTypes.func

    })).isRequired

};

List.defaultProps = {

    className: '',
    style: null,

    items: []

};
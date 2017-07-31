import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TableHeaderSortIcon.css';

export default class TableHeaderSortIcon extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, sort} = this.props;

        return (
            <div className={'table-header-sort-icon-wrapper'}
                 style={style}>
                <i className={`table-header-sort-icon fa fa-angle-up up ${sort ? (className ? className : '') : ''}`}
                   aria-hidden="true"></i>
                <i className={`table-header-sort-icon fa fa-angle-down down ${sort ? (className ? className : '') : ''}`}
                   aria-hidden="true"></i>
            </div>
        );

    }
};

TableHeaderSortIcon.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    sort: PropTypes.object

};

TableHeaderSortIcon.defaultProps = {

    className: '',
    style: null,

    sort: null

};
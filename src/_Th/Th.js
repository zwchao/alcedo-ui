/**
 * @file Th component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ThSortIcon from '../_ThSortingIcon';
import Util from '../_vendors/Util';
import SortingType from '../_statics/SortingType';

class Th extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * handle th content render
     * @returns {*}
     */
    handleRender = () => {

        const {colIndex, data, renderer} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(data, colIndex);
            default:
                return renderer;
        }

    };

    /**
     * handle th click and trigger sorting callback
     */
    handleClick = () => {

        const {sortable, onSortChange} = this.props;

        if (!sortable || !onSortChange) {
            return;
        }

        const {sorting, defaultSortingType, sortingProp} = this.props,
            result = {};

        if (sorting && sorting.prop === sortingProp) {
            result.prop = sorting.prop;
            result.type = -sorting.type;
        } else {
            result.prop = sortingProp;
            result.type = defaultSortingType;
        }

        onSortChange && onSortChange(result);

    };

    render() {

        const {
            className, style, renderer,
            sortable, sortingProp, sorting, sortingAscIconCls, sortingDescIconCls
        } = this.props;

        return (
            <th className={classNames({
                sortable: sortable,
                [className]: className
            })}
                style={style}
                title={typeof renderer === 'string' ? renderer : null}
                onClick={this.handleClick}>

                <div className="th-inner">

                    {this.handleRender()}

                    {
                        sortable ?
                            <ThSortIcon sorting={sorting}
                                        sortingProp={sortingProp}
                                        sortingAscIconCls={sortingAscIconCls}
                                        sortingDescIconCls={sortingDescIconCls}/>
                            :
                            null
                    }

                </div>

            </th>
        );

    }
}

Th.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    colIndex: PropTypes.number,
    data: PropTypes.array,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),
    defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string,
    sortable: PropTypes.bool,
    sortingProp: PropTypes.string,

    onSortChange: PropTypes.func

};

Th.defaultProps = {

    colIndex: 0,

    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-angle-up',
    sortingDescIconCls: 'fas fa-angle-down',
    sortable: false

};

export default Th;
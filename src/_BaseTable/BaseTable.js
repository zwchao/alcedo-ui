/**
 * @file BaseTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Tfoot from '../_Tfoot';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortType from '../_statics/SortType';

import Util from '../_vendors/Util';

class BaseTable extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortType = SortType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    calSpan = (col, colIndex) => {
        return col.span && typeof col.span === 'function' ?
            col.span(this.props.rowIndex, colIndex)
            :
            null;
    };

    calColumns = () => {

        const {columns} = this.props,
            result = [];
        let spanFlag = 0;

        for (let i = 0, len = columns.length; i < len; i++) {

            if (spanFlag > 1) {
                spanFlag--;
                continue;
            }

            const col = columns[i],
                span = this.calSpan(columns[i], i);

            if (span && span > 1) {
                spanFlag = span;
            }

            result.push({
                col,
                span
            });

        }

        return result;

    };

    render() {

        const {
                className, style, columns, data, sort, disabled,
                sortAscIconCls, sortDescIconCls,
                onSort, onRowClick, onCellClick, onFootClick
            } = this.props,

            columnsWithSpan = this.calColumns(),

            tableClassName = classNames('base-table', {
                [className]: className
            });

        return (
            <div className={tableClassName}
                 style={style}>
                <table>

                    <Thead columns={columns}
                           data={data}
                           sort={sort}
                           sortAscIconCls={sortAscIconCls}
                           sortDescIconCls={sortDescIconCls}
                           onSort={onSort}/>

                    <Tbody columns={columns}
                           columnsWithSpan={columnsWithSpan}
                           data={data}
                           disabled={disabled}
                           onRowClick={onRowClick}
                           onCellClick={onCellClick}/>

                    <Tfoot columnsWithSpan={columnsWithSpan}
                           data={data}
                           disabled={disabled}
                           onFootClick={onFootClick}
                           onCellClick={onCellClick}/>

                </table>
            </div>
        );

    }
}

BaseTable.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        /**
         * The class name of header.
         */
        headerClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headerStyle: PropTypes.object,

        /**
         * The render content in header.
         * (1) string，example： 'id'
         * (2) callback，example：function (tableData, colIndex) {return colIndex;}
         */
        headerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * The class name of td.
         */
        cellClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        cellStyle: PropTypes.object,

        /**
         * The render content in table.
         * (1) data key，example： 'id'
         * (2) data key tamplate，example：'${id} - ${name}'
         * (3) callback，example：function (rowData, rowIndex, colIndex) {return rowData.id;}
         */
        cellRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * The class name of footer.
         */
        footerClassName: PropTypes.string,

        /**
         * Override the styles of footer.
         */
        footerStyle: PropTypes.object,

        /**
         * The render content in footer.
         * (1) string，example： 'id'
         * (2) callback，example：function (tableData, colIndex) {return colIndex;}
         */
        footerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sort field.
         */
        sortProp: PropTypes.string,

        defaultSortType: PropTypes.oneOf(Util.enumerateValue(SortType)),

        span: PropTypes.func

    })).isRequired,

    data: PropTypes.array,

    sort: PropTypes.shape({

        /**
         * Specify the sorting column.
         */
        prop: PropTypes.string,

        /**
         * If type equals 1,data will ascending ordered,else type equals -1,data will descending ordered.
         */
        type: PropTypes.oneOf([1, -1])

    }),

    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string,

    onSort: PropTypes.func

};

BaseTable.defaultProps = {
    sortAscIconCls: 'fas fa-angle-up',
    sortDescIconCls: 'fas fa-angle-down'
};

export default BaseTable;

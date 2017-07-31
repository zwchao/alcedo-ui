import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableCell from '../_TableCell';

import './TableRow.css';

export default class TableRow extends Component {

    constructor(props) {

        super(props);

        this.contentRenderer = this::this.contentRenderer;

    }

    stringContentRenderer(data, template) {

        if (!data) {
            return template;
        }

        if (/\$\{.+\}/.test(template)) { // 配置的 renderer 中包含 ${...}，用数据替换
            let result = template;
            for (let key in data) {
                result = result.replace(new RegExp('\\$\\{' + key + '\\}', 'g'), data[key]);
            }
            return result;
        } else { // 直接显示字段
            return data[template];
        }

    }

    contentRenderer(renderer, colIndex) {

        const {rowIndex, data} = this.props;

        switch (typeof renderer) {
            case 'string':
                return this.stringContentRenderer(data, renderer);
            case 'function':
                return renderer(data, rowIndex, colIndex);
            default:
                return renderer;
        }

    }

    render() {

        const {columns} = this.props;

        return (
            <tr className="table-row">

                {
                    columns.map((col, colIndex) => {
                        return <TableCell key={colIndex}
                                          className={col.cellClassName}
                                          style={col.cellStyle}
                                          data={this.contentRenderer(col.renderer, colIndex)}/>;
                    })
                }

            </tr>
        );

    }
};

TableRow.propTypes = {
    rowIndex: PropTypes.number,
    columns: PropTypes.array,
    data: PropTypes.object
};

TableRow.defaultProps = {
    rowIndex: 0,
    columns: [],
    data: {}
};
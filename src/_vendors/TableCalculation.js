/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import classnames from 'classnames';
import sum from 'lodash/sum';

import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';

function calcSpan(type, column, colIndex, rowIndex) {
    const span = column[`${type}Span`];
    return span && typeof span === 'function' ?
        span(colIndex, rowIndex)
        :
        +span;
}

function getColumnsWithSpan(type, columns, rowIndex) {

    if (!type) {
        return columns.map(column => ({
            column,
            span: 1
        }));
    }

    const result = [];
    let spanFlag = 0;

    for (let i = 0, len = columns.length; i < len; i++) {

        if (spanFlag > 1) {
            spanFlag--;
            continue;
        }

        const column = columns[i],
            span = calcSpan(type, columns[i], i, rowIndex);

        if (span && span > 1) {
            spanFlag = span;
        }

        result.push({
            column,
            span
        });

    }

    return result;

}

function sortTableData(data, sorting, sortFunc) {

    if (!sorting) {
        return data;
    }

    let copyData = data.slice();

    if (sortFunc) {
        copyData = sortFunc(copyData, sorting);
    } else {
        copyData.sort((a, b) => {
            if (!isNaN(a[sorting.prop]) && !isNaN(b[sorting.prop])) {
                return (Number(a[sorting.prop]) - Number(b[sorting.prop])) * sorting.type;
            } else {
                return (a[sorting.prop] + '').localeCompare(b[sorting.prop] + '') * sorting.type;
            }
        });
    }

    return copyData;

}

function hasFooterRenderer(columns) {
    return columns.some(item => item.footRenderer);
}

/**
 * calculate each head, body and foot column width
 * @returns {null|{[p: string]: *|*}}
 */
function getColumnsWidth(tableEl) {

    if (!tableEl) {
        return null;
    }

    return {
        [TableFragment.HEAD]: [].map.call(tableEl.querySelectorAll('thead th'),
            el => el.offsetWidth),
        [TableFragment.BODY]: [].map.call(tableEl.querySelector('tbody tr').querySelectorAll('td'),
            el => el.offsetWidth),
        [TableFragment.FOOT]: [].map.call(tableEl.querySelectorAll('tfoot td'),
            el => el.offsetWidth)
    };

}

/**
 * calculate each head, body and foot row height
 * @returns {null|{[p: string]: *|*}}
 */
function getRowsHeight(tableEl) {

    if (!tableEl) {
        return null;
    }

    return {
        [TableFragment.HEAD]: [].map.call(tableEl.querySelectorAll('thead tr'),
            el => el.offsetHeight),
        [TableFragment.BODY]: [].map.call(tableEl.querySelectorAll('tbody tr'),
            el => el.offsetHeight),
        [TableFragment.FOOT]: [].map.call(tableEl.querySelectorAll('tfoot tr'),
            el => el.offsetHeight)
    };

}

/**
 * calculate table body scroller height
 * @param headHeight
 * @param footHeight
 * @returns {{height: string}}
 */
function getbodyScollerHeight(headHeight, footHeight) {
    return `calc(100%${headHeight ? ` - ${sum(headHeight)}px` : ''}${footHeight ? ` - ${sum(footHeight)}px` : ''})`;
}

function handleFixedColumns(columns) {

    if (!columns) {
        return columns;
    }

    return columns.map(column => ({
        ...column,
        headClassName: classnames(column.headClassName, 'table-fixed-column'),
        bodyClassName: classnames(column.bodyClassName, 'table-fixed-column'),
        footClassName: classnames(column.footClassName, 'table-fixed-column')
    }));

}

function fixFragmentWidths(wrapperEl, columnsWidth, fixed, fragment, selector) {

    const el = wrapperEl.querySelector(`${selector} .scrollable-table-${fragment}`);

    if (el) {
        const cols = el.querySelectorAll('col');
        if (cols) {
            if (fixed === HorizontalAlign.RIGHT) {
                cols.forEach((el, index) => {
                    if (el) {
                        el.style.width = `${columnsWidth[fragment]
                            [columnsWidth[fragment].length - (cols.length - index)]}px`;
                    }
                });
            } else {
                cols.forEach((el, index) => {
                    if (el) {
                        el.style.width = `${columnsWidth[fragment][index]}px`;
                    }
                });
            }
        }
    }

}

function fixTableWidths(wrapperEl, columnsWidth, fixed, props) {

    if (!wrapperEl) {
        return;
    }

    const selector = `.table-content-${fixed || 'center'}`;

    /**
     * head
     */
    if (props && props.isHeadFixed) {
        fixFragmentWidths(wrapperEl, columnsWidth, fixed, TableFragment.HEAD, selector);
    }

    /**
     * body
     */
    if (fixed) {
        fixFragmentWidths(wrapperEl, columnsWidth, fixed, TableFragment.BODY, selector);
    }

    /**
     * foot
     */
    if (props && props.isHeadFixed) {
        fixFragmentWidths(wrapperEl, columnsWidth, fixed, TableFragment.FOOT, selector);
    }

}

function maskCenterBody(wrapperEl, tableEl, fixedHeadHeight) {
    const el = wrapperEl.querySelector('.table-content-center .scrollable-table-body');
    if (el) {
        el.style.height = `${tableEl.offsetHeight - fixedHeadHeight}px`;
        el.style.marginTop = `${-fixedHeadHeight}px`;
    }
}

function fixLayout(wrapperEl, props) {

    if (!wrapperEl) {
        return;
    }

    const tableEl = wrapperEl.querySelector('.table-content-center .scrollable-table-body > table');

    if (!tableEl) {
        return;
    }

    const columnsWidth = getColumnsWidth(tableEl),
        rowsHeight = getRowsHeight(tableEl),

        fixedHeadHeight = sum(rowsHeight[TableFragment.HEAD]) || 0,
        fixedFootHeight = sum(rowsHeight[TableFragment.FOOT]) || 0;

    /**
     * center
     */
    fixTableWidths(wrapperEl, columnsWidth, null, props);
    maskCenterBody(wrapperEl, tableEl, fixedHeadHeight);

    /**
     * left
     */
    fixTableWidths(wrapperEl, columnsWidth, HorizontalAlign.LEFT, props);

    /**
     * right
     */
    fixTableWidths(wrapperEl, columnsWidth, HorizontalAlign.RIGHT, props);

}

export default {
    calcSpan,
    getColumnsWithSpan,
    sortTableData,
    hasFooterRenderer,
    getColumnsWidth,
    getRowsHeight,
    getbodyScollerHeight,
    handleFixedColumns,
    fixLayout
};

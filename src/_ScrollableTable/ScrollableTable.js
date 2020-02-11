/**
 * @file ScrollableTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Statics
import TableFragment from '../_statics/TableFragment';

// Vendors
import Util from '../_vendors/Util';

class ScrollableTable extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();

        this.state = {
            wrapperEl: null
        };

    }

    getStyle = () => {

        const {style, scroll, overflowHidden, horizontalOverflowScroll} = this.props;

        if (overflowHidden) {
            return style;
        }

        const result = {
            ...style
        };

        if (scroll) {
            result.overflowX = horizontalOverflowScroll ? 'scroll' : scroll.width ? 'auto' : null;
            result.overflowY = scroll.height || scroll.maxHeight ? 'scroll' : null;
        }

        return result;

    };

    getChildren = () => {

        const {children} = this.props,
            {wrapperEl} = this.state;

        return (typeof children === 'function' ? children(wrapperEl) : children) || null;

    };

    componentDidMount() {
        this.setState({
            wrapperEl: this.wrapper && this.wrapper.current
        });
    }

    render() {

        const {

                style, scroll,

                // not passing down these props
                children: c, overflowHidden, horizontalOverflowScroll,
                useDynamicRender, scrollHeight, rowHeight, scrollBuffer,

                ...restProps

            } = this.props,
            children = this.getChildren();

        return style || scroll ?
            <div {...restProps}
                 ref={this.wrapper}
                 style={this.getStyle()}>
                {children}
            </div>
            :
            children;

    }
}

ScrollableTable.propTypes = {

    children: PropTypes.any,

    style: PropTypes.object,

    /**
     * scroll
     */
    scroll: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),

    fragment: PropTypes.oneOf(Util.enumerateValue(TableFragment)),
    overflowHidden: PropTypes.bool,
    horizontalOverflowScroll: PropTypes.bool,

    /**
     * Dynamic Render
     */
    useDynamicRender: PropTypes.bool,
    scrollHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    scrollBuffer: PropTypes.number

};

ScrollableTable.defaultProps = {

    overflowHidden: false,
    horizontalOverflowScroll: false,

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    scrollHeight: 500,
    rowHeight: 50,
    scrollBuffer: 8

};

export default ScrollableTable;

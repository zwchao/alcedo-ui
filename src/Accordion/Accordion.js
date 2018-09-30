/**
 * @file Accordion component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RaisedButton from '../RaisedButton';
import Theme from '../Theme';
import ComponentUtil from '../_vendors/ComponentUtil';

class Accordion extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            collapsed: props.collapsed,
            contentHeight: null
        };

    }

    /**
     * public
     */
    resetHeight = () => {

        if (this.state.collapsed) {
            return;
        }

        const el = this.refs.accordionContent;

        if (!el) {
            return;
        }

        const style = window.getComputedStyle(el);

        if (!style) {
            return;
        }

        this.setState({
            contentHeight: 'auto'
        }, () => {
            this.setState({
                contentHeight: el.clientHeight
            });
        });

    };

    clickHandler = () => {

        const {onCollpase, onExpand, onChange} = this.props;

        const collapsed = !this.state.collapsed;

        this.setState({
            collapsed
        }, () => {
            if (collapsed) {
                onCollpase && onCollpase();
                onChange && onChange(true);
            } else {
                onExpand && onExpand();
                onChange && onChange(false);
            }
        });

    };

    componentDidMount() {
        this.resetHeight();
    }

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            collapsed: ComponentUtil.getDerivedState(props, state, 'collapsed')
        };
    }

    render() {

        const {className, style, children, title, collapseIcon} = this.props,
            {collapsed, contentHeight} = this.state,

            wrapperClassName = classNames('accordion', {
                collapsed: collapsed,
                [className]: className
            });

        return (
            <div className={wrapperClassName}
                 style={style}>

                <RaisedButton className="accordion-title"
                              theme={Theme.SECONDARY}
                              value={title}
                              rightIconCls={collapseIcon}
                              onClick={this.clickHandler}/>

                <div ref="accordionContent"
                     className="accordion-content"
                     style={{height: contentHeight}}>
                    {children}
                </div>

            </div>
        );

    }
}

Accordion.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The accordion's title.
     */
    title: PropTypes.string,

    collapsed: PropTypes.bool,

    /**
     * Collapse icon.
     */
    collapseIcon: PropTypes.string,

    /**
     * Callback function fired when collpase the accordion.
     */
    onCollpase: PropTypes.func,

    /**
     * Callback function fired when expand the accordion.
     */
    onExpand: PropTypes.func,

    /**
     * Callback function fired when change the status of accordion.
     */
    onChange: PropTypes.func

};

Accordion.defaultProps = {
    title: 'title',
    collapsed: false,
    collapseIcon: 'fas fa-angle-down'
};

export default Accordion;

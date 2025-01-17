/**
 * @file Accordion component
 */

import React, {Component, createRef, cloneElement} from 'react';
import PropTypes from 'prop-types';

// Components
import RaisedButton from '../RaisedButton';

// Statics
import Theme from '../Theme';

// Vendors
import classNames from 'classnames';
import ComponentUtil from '../_vendors/ComponentUtil';

class Accordion extends Component {

    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            collapsed: ComponentUtil.getDerivedState(props, state, 'collapsed')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.accordionContent = createRef();

        this.state = {
            collapsed: props.collapsed,
            contentHeight: null
        };

    }

    componentDidMount() {
        this.init();
    }

    /**
     * public
     */
    resetHeight = callback => {

        const el = this.accordionContent?.current;
        if (this.state.collapsed || !el) {
            return;
        }

        this.setState({
            contentHeight: 'auto'
        }, () => this.setState({
            contentHeight: el.offsetHeight
        }, () => {
            callback?.();
            this.props.onResetHeight?.(el.offsetHeight);
        }));

    };

    /**
     * public
     */
    collpase = () => {
        this.setState({
            collapsed: true
        }, () => {
            this.props.onCollpase?.();
            this.props.onChange?.(true);
        });
    };

    /**
     * public
     */
    expand = () => {
        this.setState({
            collapsed: false
        }, () => {
            this.props.onExpand?.();
            this.props.onChange?.(false);
        });
    };

    handleClick = () => {
        this.state.collapsed ?
            this.expand()
            :
            this.collpase();
    };

    init = () => {
        if (!this.props.collapsed) {
            this.resetHeight();
        } else {
            setTimeout(() => {
                this.setState({
                    collapsed: false
                }, () => {
                    this.resetHeight(() => {
                        this.setState({
                            collapsed: this.props.collapsed
                        });
                    });
                });
            }, 0);
        }
    };

    render() {

        const {children, className, style, title, collapseIcon, titleRenderer} = this.props;
        const {collapsed, contentHeight} = this.state;

        return (
            <div className={classNames('accordion', {
                collapsed: collapsed,
                [className]: className
            })}
                 style={style}>

                {
                    titleRenderer ?
                        typeof titleRenderer === 'function' ?
                            titleRenderer(this.handleClick)
                            :
                            cloneElement(titleRenderer, {
                                onClick: this.handleClick
                            })
                        :
                        <RaisedButton className="accordion-title"
                                      theme={Theme.SECONDARY}
                                      value={title}
                                      rightIconCls={collapseIcon}
                                      onClick={this.handleClick}/>
                }

                <div ref={this.accordionContent}
                     className="accordion-content"
                     style={{height: contentHeight}}>
                    {children}
                </div>

            </div>
        );

    }
}

Accordion.propTypes = {

    children: PropTypes.any,

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
    title: PropTypes.any,

    collapsed: PropTypes.bool,

    titleRenderer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

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
    onChange: PropTypes.func,

    onResetHeight: PropTypes.func

};

Accordion.defaultProps = {
    title: 'title',
    collapsed: false,
    collapseIcon: 'fas fa-angle-down'
};

export default Accordion;

import React, {Component, PropTypes} from 'react';

import TouchRipple from 'components/ripple/TouchRipple';

import 'sass/components/container/Accordion.scss';

export default class Accordion extends Component {

    constructor(props) {

        super(props);

        this.state = {
            collapsed: false,
            contentHeight: null
        };

        this.titleMouseDownHandle = this::this.titleMouseDownHandle;
        this.resetHeight = this::this.resetHeight;

    }

    titleMouseDownHandle() {

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

    }

    resetHeight() {

        const height = this.refs.accordionContent.style.height;

        if (!height || height === 'auto') {
            this.setState({
                contentHeight: this.refs.accordionContent.offsetHeight
            });
        }

    }

    componentDidMount() {
        this.resetHeight();
    }

    render() {

        const {className, style, children, title, collapseIcon, expandIcon} = this.props;
        const {collapsed, contentHeight} = this.state;

        return (
            <div className={`accordion ${className}`}
                 style={style}>

                <div className="accordion-title"
                     onMouseDown={this.titleMouseDownHandle}>

                    {title}

                    {
                        collapsed ?
                            <i className={`${expandIcon}`}></i>
                            :
                            <i className={`${collapseIcon}`}></i>
                    }

                    <TouchRipple/>

                </div>

                <div ref="accordionContent"
                     className={`accordion-content ${collapsed ? 'collapsed' : ''}`}
                     style={{height: contentHeight}}>
                    {children}
                </div>

            </div>
        );

    }
};

Accordion.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    title: PropTypes.string,
    collapseIcon: PropTypes.string,
    expandIcon: PropTypes.string,

    onCollpase: PropTypes.func,
    onExpand: PropTypes.func,

    // 折叠发生变化时触发，参数为 collapsed
    onChange: PropTypes.func

};

Accordion.defaultProps = {

    className: '',
    style: null,

    title: 'title',
    collapseIcon: 'fa fa-angle-up',
    expandIcon: 'fa fa-angle-down'

};
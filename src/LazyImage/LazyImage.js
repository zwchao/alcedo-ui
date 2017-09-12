import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import CircularLoading from '../CircularLoading';

import Event from '../_vendors/Event';

import './LazyImage.css';

export default class LazyImage extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            imageState: 0
        };

        this.scrollHandle = ::this.scrollHandle;
        this.debounceScrollHandle = _.debounce(::this.debounceScrollHandle, 150);

    }

    debounceScrollHandle() {

        if (!this.wrapperEl) {
            return;
        }

        if (this.wrapperEl.getBoundingClientRect().top < window.innerHeight) {

            const {onImageLoadStart} = this.props;
            let result;

            if (onImageLoadStart) {
                result = onImageLoadStart();
            }

            if (result === false) {
                return;
            }

            this.setState({
                imageState: 1
            }, () => {

                const image = new Image();

                Event.addEvent(image, 'load', e => {
                    this.setState({
                        imageState: 2
                    }, () => {
                        const {onImageLoaded} = this.props;
                        onImageLoaded && onImageLoaded(e);
                    });
                });

                image.src = this.props.src;

            });

        }

    }

    scrollHandle(e) {

        if (this.state.imageState > 0) {
            return;
        }

        this.debounceScrollHandle(e);

    }

    componentDidMount() {

        this.wrapperEl = this.refs.wrapper;

        Event.addEvent(document, 'scroll', this.scrollHandle);

    }

    componentWillUnmount() {
        Event.removeEvent(document, 'scroll', this.scrollHandle);
    }

    render() {

        const {className, style, src, alt, loadingWidth, loadingHeight, width, height, placeholder} = this.props,
            {imageState} = this.state,

            lazyImageClassName = (className ? ' ' + className : ''),
            lazyImageStyle = {
                ...style,
                width: imageState === 2 ? width : loadingWidth,
                height: imageState === 2 ? height : loadingHeight
            };

        return (
            <div ref="wrapper"
                 className={'lazy-image' + lazyImageClassName}
                 style={lazyImageStyle}>

                <img className="lazy-image-img"
                     src={imageState === 2 ? src : ''}
                     alt={alt}
                     width={width}
                     height={height}/>

                <div className={'lazy-image-placeholder' + (imageState === 2 ? ' hidden' : '')}>
                    {
                        placeholder ?
                            {placeholder}
                            :
                            <CircularLoading className="lazy-image-loading"/>
                    }
                </div>

            </div>
        );

    }
};

LazyImage.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Image src url.
     */
    src: PropTypes.string.isRequired,

    /**
     * Image alt text.
     */
    alt: PropTypes.string,

    /**
     * Loading width.
     */
    loadingWidth: PropTypes.number,

    /**
     * Loading height.
     */
    loadingHeight: PropTypes.number,

    /**
     * Image width.
     */
    width: PropTypes.number,

    /**
     * Image height.
     */
    height: PropTypes.number,

    /**
     * Image placeholder.
     */
    placeholder: PropTypes.any,

    /**
     * Image load start callback.
     */
    onImageLoadStart: PropTypes.func,

    /**
     * Image load end callback.
     */
    onImageLoaded: PropTypes.func

};

LazyImage.defaultProps = {

    className: '',
    style: null,

    alt: '',

    loadingWidth: 100,
    loadingHeight: 100,

    placeholder: ''

};
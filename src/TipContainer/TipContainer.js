import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Tip from '../Tip';

import Util from '../_vendors/Util';

import './TipContainer.css';

export default class TipContainer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tipVisible: false,
            triggerEl: null
        };

        this.showTip = this::this.showTip;
        this.hideTip = this::this.hideTip;

    }

    showTip(e) {
        this.setState({
            tipVisible: true,
            triggerEl: e.currentTarget
        });
    }

    hideTip() {
        this.setState({
            tipVisible: false
        });
    }

    render() {

        const {children, text} = this.props;

        if (!text) {
            return children;
        }

        const {position} = this.props,
            {tipVisible, triggerEl} = this.state;

        return (
            <div className="tip-container">

                <div className="children-wrapper"
                     onMouseEnter={e => {
                         this.showTip(e);
                     }}>
                    {children}
                </div>

                <Tip text={text}
                     visible={tipVisible}
                     triggerEl={triggerEl}
                     position={position}
                     onRequestClose={this.hideTip}/>

            </div>
        );
    }

}

TipContainer.Position = Tip.Position;

TipContainer.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    text: PropTypes.string,

    /**
     * The position of Tip.Can be top,left,right,bottom,top-left,top-right,bottom-left,bottom-right.
     */
    position: PropTypes.oneOf(Util.enumerateValue(TipContainer.Position))

};

TipContainer.defaultProps = {

    className: '',
    style: null,

    text: '',

    position: TipContainer.Position.BOTTOM

};
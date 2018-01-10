import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from 'reduxes/actions';

import Paper from 'src/Paper';
import FlatButton from 'src/FlatButton';

import 'sass/containers/landing/sections/LandingExamples.scss';

class LandingExamples extends Component {

    constructor(props) {

        super(props);

        this.goToDemo = ::this.goToDemo;

    }

    goToDemo() {
        this.props.routerPush('/components');
    }

    render() {
        return (
            <section id="landing-examples"
                     className="landing-section">

                <div className="landing-section-inner">

                    <div className="landing-section-title">Examples</div>

                    <FlatButton className="ghost-button"
                                value="Go to Demo"
                                onTouchTap={this.goToDemo}/>

                    <Paper className="landing-examples-demo"
                           depth={4}>
                        <div className="window-header">
                            <div className="window-header-dot"></div>
                            <div className="window-header-dot"></div>
                            <div className="window-header-dot"></div>
                        </div>
                        <img className="landing-examples-demo-img"
                             src={require('assets/images/example.jpg')}/>
                    </Paper>

                </div>

            </section>
        );
    }
}

LandingExamples.propTypes = {
    routerPush: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingExamples);
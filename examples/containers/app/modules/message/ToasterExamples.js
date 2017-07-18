import React, {Component} from 'react';

import RadioGroup from 'dist/RadioGroup';
import TextField from 'dist/TextField';
import RaisedButton from 'dist/RaisedButton';
import Toaster from 'dist/Toaster';
import Theme from 'dist/Theme';

import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ToasterDoc from 'assets/propTypes/Toaster.json';

import 'sass/containers/app/modules/message/ToasterExamples.scss';

export default class ToasterExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            type: 'info',
            title: 'Title',
            message: 'Message',
            toasts: []
        };

        this.updateField = this::this.updateField;
        this.addToast = this::this.addToast;
        this.toastPopHandle = this::this.toastPopHandle;

    }

    updateField(key, value) {
        let state = {};
        state[key] = value;
        this.setState(state);
    }

    addToast() {

        const {type, title, message} = this.state;

        let toasts = this.state.toasts;
        toasts.push({
            type,
            title,
            message
        });

        this.setState({
            toasts
        });

    }

    toastPopHandle() {
        this.setState({
            toasts: []
        });
    }

    render() {

        const {type, title, message, toasts} = this.state;

        return (
            <div className="example toaster-examples">

                <h2 className="example-title">Toaster</h2>

                <p>
                    <span>Toaster</span> is a global display notification alert information .
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Toaster</code> example with RadioGroup and TextField.You can select different
                                    radio button to show different theme toaster,also input different title and message
                                    to use this component.</p>

                                <div className="field-group">
                                    <label className="text-field-label">Type</label>
                                    <RadioGroup data={[{
                                        label: 'Info',
                                        value: 'info'
                                    }, {
                                        label: 'Success',
                                        value: 'success'
                                    }, {
                                        label: 'Warning',
                                        value: 'warning'
                                    }, {
                                        label: 'Error',
                                        value: 'error'
                                    }]}
                                                value={type}
                                                onChange={(value) => {
                                                    this.updateField('type', value);
                                                }}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Title</label>
                                    <TextField value={title}
                                               onChange={(value) => {
                                                   this.updateField('title', value);
                                               }}/>
                                </div>

                                <div className="field-group">
                                    <label className="text-field-label">Message</label>
                                    <TextField value={message}
                                               onChange={(value) => {
                                                   this.updateField('message', value);
                                               }}/>
                                </div>

                                <RaisedButton className="show-toast-button"
                                              value="Show Toaster"
                                              style={{width: '120px'}}
                                              buttonStyle={Theme.PRIMARY}
                                              onTouchTap={this.addToast}/>

                                <Toaster toasts={toasts}
                                         onToastPop={this.toastPopHandle}/>

                            </div>

                        </div>
                    </div>

                </Widget>


                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ToasterDoc}/>

            </div>
        );
    }
};
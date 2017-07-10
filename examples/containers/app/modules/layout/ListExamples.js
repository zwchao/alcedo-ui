import React, {Component} from 'react';

import Paper from 'dist/Paper';
import List from 'dist/List';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import ListDoc from 'assets/propTypes/List.json';

import 'sass/containers/app/modules/layout/ListExamples.scss';

export default class ListExamples extends Component {

    constructor(props) {

        super(props);

        this.listData = [{
            iconCls: 'fa fa-facebook',
            text: 'Facebook'
        }, {
            iconCls: 'fa fa-twitter',
            text: 'Twitter'
        }, {
            iconCls: 'fa fa-google-plus',
            text: 'Google+'
        }];

        this.disabledListData = [{
            iconCls: 'fa fa-firefox',
            text: 'Firefox',
            disabled: true
        }, {
            iconCls: 'fa fa-chrome',
            text: 'Chrome'
        }, {
            iconCls: 'fa fa-safari',
            text: 'Safari',
            disabled: true
        }];

        this.themeListData = [{
            text: 'Success',
            theme: 'success',
            rightIconCls: 'fa fa-check-circle'
        }, {
            text: 'Error',
            theme: 'error',
            rightIconCls: 'fa fa-times-circle-o'
        }, {
            text: 'Warning',
            theme: 'warning',
            rightIconCls: 'fa fa-exclamation-triangle'
        }, {
            text: 'Primary',
            theme: 'primary',
            rightIconCls: 'fa fa-gratipay'
        }];

        this.descListData = [{
            iconCls: 'fa fa-facebook',
            text: 'Facebook',
            desc: 'Here is a Facebook Desc.'
        }, {
            iconCls: 'fa fa-twitter',
            text: 'Twitter',
            desc: 'Here is a Twitter Desc.'
        }, {
            iconCls: 'fa fa-google-plus',
            text: 'Google+',
            desc: 'Here is a Google+ Desc.'
        }];

        this.groupedListData = [{
            name: 'socialNetwork',
            children: [{
                iconCls: 'fa fa-facebook',
                text: 'Facebook',
                desc: 'Here is a Facebook Desc.'
            }, {
                iconCls: 'fa fa-twitter',
                text: 'Twitter',
                desc: 'Here is a Twitter Desc.'
            }, {
                iconCls: 'fa fa-google-plus',
                text: 'Google+',
                desc: 'Here is a Google+ Desc.'
            }]
        }, {
            name: 'device',
            children: [{
                iconCls: 'fa fa-android',
                text: 'Android',
                desc: 'Here is a Android Desc.'
            }, {
                iconCls: 'fa fa-apple',
                text: 'Apple',
                desc: 'Here is a Apple Desc.'
            }, {
                iconCls: 'fa fa-windows',
                text: 'Windows',
                desc: 'Here is a Windows Desc.'
            }]
        }];

        this.changeHandle = this::this.changeHandle;

    }

    changeHandle(value) {
        console.log(value);
    }

    render() {
        return (
            <div className="example list-examples">

                <h2 className="example-title">List</h2>

                <p>
                    <span>List</span> Lists are used to present multiple items vertically as a single continuous
                    element. They can be configured for many uses such as a contacts list, nested lists, etc.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="List Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A simple List with left icons.</p>

                                <Paper>
                                    <List items={this.listData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="List Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A simple List with disabled item.Set the disabled property to true for disabled
                                    items.</p>

                                <Paper>
                                    <List items={this.disabledListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="List Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>A simple List with right icons and different themes.Set the theme property to
                                    "success","error","warning","primary" and set the iconPosition property to different
                                    icon class.</p>

                                <Paper>
                                    <List items={this.themeListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="List Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple List with desc.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          items={this.descListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With Radio"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple List with desc.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          mode={List.Mode.RADIO}
                                          items={this.descListData}
                                          onChange={this.changeHandle}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With Checkbox"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple List with desc.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          mode={List.Mode.CHECKBOX}
                                          items={this.descListData}
                                          onChange={this.changeHandle}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Grouped List"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple grouped List.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          mode={List.Mode.RADIO}
                                          isGrouped={true}
                                          items={this.groupedListData}
                                          onChange={this.changeHandle}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Grouped List"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple grouped List.
                                </p>

                                <Paper style={{width: 240}}>
                                    <List style={{width: 240}}
                                          mode={List.Mode.CHECKBOX}
                                          isGrouped={true}
                                          items={this.groupedListData}
                                          onChange={this.changeHandle}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={ListDoc}/>

            </div>
        );
    }
};
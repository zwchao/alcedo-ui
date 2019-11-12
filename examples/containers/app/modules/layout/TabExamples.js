import React, {Component} from 'react';

import Tab from 'src/Tab';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';
import Toaster from 'src/Toaster';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Tab.json';

class TabExamples extends Component {

    constructor(props) {

        super(props);

        this.state = {
            toasts: []
        };

    }

    activeHandler = tab => {

        const {toasts} = this.state;

        toasts.push({
            type: Toaster.Type.INFO,
            message: `${tab.value} Activated`
        });

        this.setState({
            toasts
        });

    };

    toastPopHandler = () => {
        this.setState({
            toasts: []
        });
    };

    render() {

        const {toasts} = this.state;

        return (
            <div className="example tab-examples">

                <h2 className="example-title">Tabs</h2>

                <p>
                    <span>Tabs</span>
                    make it easy to explore and switch between different views or functional aspects
                    of an app or to browse categorized data sets.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Full Width Tabs Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A simple example of Tabs. The third tab demonstrates the onActive property of Tab.
                                </p>

                                <Tab tabs={[{
                                    value: 'Tab 1',
                                    renderer: <h1>Tab 1</h1>
                                }, {
                                    value: 'Tab 2',
                                    renderer: <h1>Tab 2</h1>
                                }, {
                                    value: 'Tab 3',
                                    renderer: <h1>onActive</h1>,
                                    onActive: this.activeHandler
                                }, {
                                    value: 'Tab 4',
                                    disabled: true
                                }]}
                                     activatedIndex={1}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Tabs Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Tabs use full container width by default.Set the isTabFullWidth property to false
                                    for partial width.
                                </p>

                                <Tab tabs={[{
                                    value: 'Tab 1',
                                    renderer: <h1>Tab 1</h1>
                                }, {
                                    value: 'Tab 2',
                                    renderer: <h1>Tab 2</h1>
                                }, {
                                    value: 'Tab 3',
                                    renderer: <h1>onActive</h1>,
                                    onActive: this.activeHandler
                                }, {
                                    value: 'Tab 4',
                                    disabled: true
                                }]}
                                     isTabFullWidth={false}
                                     isAnimated={false}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Tabs Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    Tabs without icons by default.Set the iconCls property for left icons.
                                </p>

                                <Tab tabs={[{
                                    value: 'Bicycle',
                                    iconCls: 'fas fa-bicycle',
                                    renderer: <h1>Bicycle</h1>
                                }, {
                                    value: 'Taxi',
                                    iconCls: 'fas fa-taxi',
                                    renderer: <h1>Taxi</h1>
                                }, {
                                    value: 'Plane',
                                    iconCls: 'fas fa-plane',
                                    renderer: <h1>Plane</h1>
                                }, {
                                    value: 'Rocket',
                                    iconCls: 'fas fa-rocket',
                                    renderer: <h1>Rocket</h1>
                                }]}
                                     isTabFullWidth={false}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Toaster toasts={toasts}
                         onToastPop={this.toastPopHandler}/>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
}

export default TabExamples;

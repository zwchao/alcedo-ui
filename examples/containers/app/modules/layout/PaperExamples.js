import React, {Component} from 'react';

import Paper from 'dist/Paper';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import PaperDoc from 'docs/Paper.json';

import 'sass/containers/app/modules/layout/PaperExamples.scss';

export default class CheckboxExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example paper-examples">

                <h2 className="example-title">Paper</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Paper Simple Example"/>

                    <div className="widget-content">

                        <div className="example-content">
                            <div className="examples-wrapper">

                                <Paper depth={0}/>
                                <Paper depth={1}/>
                                <Paper depth={2}/>
                                <Paper depth={3}/>
                                <Paper depth={4}/>
                                <Paper depth={5}/>
                                <Paper depth={6}/>
                                <Paper depth={7}/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Non-Rounded Paper Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">

                                <Paper depth={0}
                                       nonRounded={true}/>
                                <Paper depth={1}
                                       nonRounded={true}/>
                                <Paper depth={2}
                                       nonRounded={true}/>
                                <Paper depth={3}
                                       nonRounded={true}/>
                                <Paper depth={4}
                                       nonRounded={true}/>
                                <Paper depth={5}
                                       nonRounded={true}/>
                                <Paper depth={6}
                                       nonRounded={true}/>
                                <Paper depth={7}
                                       nonRounded={true}/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Circular Paper Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">
                            <div className="examples-wrapper">

                                <Paper depth={0}
                                       isCircular={true}/>
                                <Paper depth={1}
                                       isCircular={true}/>
                                <Paper depth={2}
                                       isCircular={true}/>
                                <Paper depth={3}
                                       isCircular={true}/>
                                <Paper depth={4}
                                       isCircular={true}/>
                                <Paper depth={5}
                                       isCircular={true}/>
                                <Paper depth={6}
                                       isCircular={true}/>
                                <Paper depth={7}
                                       isCircular={true}/>

                            </div>
                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={PaperDoc}/>

            </div>
        );
    }
};
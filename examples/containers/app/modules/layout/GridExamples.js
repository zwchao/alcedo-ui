import React, {Component} from 'react';

import Paper from 'src/Paper';
import Grid from 'src/Grid';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import doc from 'assets/propTypes/Grid.json';

import 'sass/containers/app/modules/layout/GridExamples.scss';

export default class GridExamples extends Component {

    constructor(props) {

        super(props);

        this.descListData = [{
            iconCls: 'fa fa-facebook',
            text: 'Facebook',
            desc: 'Here is a Facebook Desc.',
            tip: 'Facebook'
        }, {
            iconCls: 'fa fa-twitter',
            text: 'Twitter',
            desc: 'Here is a Twitter Desc.'
        }, {
            iconCls: 'fa fa-google-plus',
            text: 'Google+',
            desc: 'Here is a Google+ Desc.'
        }];

    }

    changeHandler(value) {
        console.log('changed::', value);
    }

    itemTouchTapHandler(item) {
        console.log('touchtapd::', item);
    }

    itemSelectHandler(value) {
        console.log('selected::', value);
    }

    itemDeselectHandler(value) {
        console.log('deselected::', value);
    }

    render() {
        return (
            <div className="example grid-examples">

                <h2 className="example-title">Grid</h2>

                <p>
                    <span>Grid</span> system.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="With desc"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Grid</code> with desc.
                                </p>

                                <Paper>
                                    <Grid data={this.descListData}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="Select Mode"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    A <code>Grid</code> with select mode.Can
                                    be <code>SINGLE_SELECT</code>, <code>MULTI_SELECT</code>.
                                </p>

                                <Paper>
                                    <Grid selectMode={Grid.SelectMode.MULTI_SELECT}
                                          data={this.descListData}
                                          onChange={this.changeHandler}
                                          onItemTouchTap={this.itemTouchTapHandler}
                                          onItemSelect={this.itemSelectHandler}
                                          onItemDeselect={this.itemDeselectHandler}/>
                                </Paper>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={doc}/>

            </div>
        );
    }
};
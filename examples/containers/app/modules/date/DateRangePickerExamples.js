/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DateRangePicker from 'dist/DateRangePicker';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DateRangePickerDoc from 'assets/propTypes/DateRangePicker.json';

import 'sass/containers/app/modules/date/DateRangePickerExamples.scss';


export default class DateRangePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example time-range-picker-example">

                <h2 className="example-title">Date Range Picker</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Date Range Picker Simple Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">
                                <DateRangePicker/>
                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DateRangePickerDoc}/>

            </div>
        );
    }
};

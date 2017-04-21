/**
 * Created by Administrator on 2017/4/10.
 */
import React, {Component, PropTypes} from 'react';

import DateTimePicker from 'dist/DateTimePicker';
import 'sass/containers/app/modules/date/DateTimePickerExamples.scss';


export default class DateTimePickerExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example time-picker-example">
                <div className="examples">
                    <div className="examples-title">Date Time Picker</div>
                    <div className="examples-wrapper">
                        <DateTimePicker
                            value='2017-04-21 12:23:10'
                            maxValue="2017-09-12 12:23:00"
                            minValue='2017-01-01 12:55:55'
                        />
                    </div>
                </div>
            </div>
        );
    }
};

DateTimePickerExamples.propTypes = {};
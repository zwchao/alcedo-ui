/**
 * @file DatePicker component
 * @author sunday(sunday.wei@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

import TextField from '../TextField';
import DayPicker from '../_DayPicker';
import MonthPicker from '../_MonthPicker';
import YearPicker from '../_YearPicker';

import Dom from '../_vendors/Dom';
import Event from '../_vendors/Event';

export default class DatePicker extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value,
            popupVisible: false,
            year: moment(props.value).format('YYYY'),
            month: moment(props.value).format('MM'),
            day: moment(props.value).format('DD'),
            datePickerLevel: 'day',
            marginLeft: 0
        };

        this.textFieldChangeHandle = ::this.textFieldChangeHandle;
        this.mousedownHandle = ::this.mousedownHandle;
        this.resizeHandle = ::this.resizeHandle;
        this.datePickerChangeHandle = ::this.datePickerChangeHandle;
        this.yearPickerChangeHandle = ::this.yearPickerChangeHandle;
        this.monthPickerChangeHandle = ::this.monthPickerChangeHandle;
        this.dayPickerChangeHandle = ::this.dayPickerChangeHandle;
        this.todayHandle = ::this.todayHandle;

    }

    datePickerChangeHandle(selectLevel) {
        this.setState({
            datePickerLevel: selectLevel
        });
    }

    textFieldChangeHandle(text) {
        const {minValue, maxValue, dateFormat} = this.props;
        if (text && text.length) {
            const flag = moment(text, this.props.dateFormat, true).isValid();
            if (flag) {
                if (minValue && moment(text).isAfter(minValue) && maxValue && moment(text).isBefore(maxValue)) {
                    const year = moment(text).format('YYYY'),
                        month = moment(text).format('MM'),
                        day = moment(text).format('DD');
                    this.setState({
                        value: moment(text, dateFormat),
                        year: year,
                        month: month,
                        day: day
                    });
                }
            }
        } else {
            this.setState({
                value: moment(text, dateFormat)
            });
        }
    }

    dayPickerChangeHandle(date) {
        const {autoClose, dateFormat} = this.props;
        let state = _.cloneDeep(this.state);
        state.value = moment(date.time, dateFormat);
        state.year = date.year;
        state.month = date.month;
        state.day = date.day;
        state.popupVisible = !autoClose;
        this.setState(state);
    }

    monthPickerChangeHandle(date) {
        this.setState({
            datePickerLevel: 'day',
            year: date.year,
            month: date.month
        });
    }

    yearPickerChangeHandle(year) {
        this.setState({
            datePickerLevel: 'month',
            year: year
        });
    }

    todayHandle() {
        const {dateFormat} = this.props;
        const year = moment().format('YYYY'),
            month = moment().format('MM'),
            day = moment().format('DD');
        let timer = moment(moment(), dateFormat);
        this.setState({
            value: timer,
            year: year,
            month: month,
            day: day
        });
    }

    mousedownHandle(e) {
        const flag = Event.triggerPopupEventHandle(e.target, require('react-dom').findDOMNode(this.refs.trigger), this.refs.popup, this.state.popupVisible);
        if (flag) {
            !this.props.disabled && this.setState({
                popupVisible: flag
            });
        } else {
            !this.props.disabled && this.setState({
                popupVisible: flag,
                datePickerLevel: 0
            });
        }
    }

    resizeHandle() {
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        this.setState({
            marginLeft: marginLeft
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.dateFormat !== this.props.dateFormat) {
            this.setState({
                value: moment(nextProps.value, nextProps.dateFormat),
                dateFormat: nextProps.dateFormat,
                year: moment(nextProps.value).format('YYYY'),
                month: moment(nextProps.value).format('MM'),
                day: moment(nextProps.value).format('DD')
            });
        }
    }

    componentDidMount() {
        // debugger
        const {value, dateFormat} = this.props;
        let state = _.cloneDeep(this.state);
        const {left} = Dom.getOffset(this.refs.datePicker);
        const width = 300;
        const windowWidth = document.body.clientWidth;
        let marginLeft;
        if ((left + width) >= windowWidth) {
            marginLeft = (left + width) - windowWidth;
        } else {
            marginLeft = 0;
        }
        if (value) {
            const year = moment(value).format('YYYY'),
                month = moment(value).format('MM'),
                day = moment(value).format('DD');
            state.value = moment(value, dateFormat);
            state.year = year;
            state.month = month;
            state.day = day;
            if (marginLeft) {
                state.marginLeft = marginLeft;
            }
            this.setState(state);
        }
        Event.addEvent(window, 'mousedown', this.mousedownHandle);
        Event.addEvent(window, 'resize', this.resizeHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'mousedown', this.mousedownHandle);
        Event.removeEvent(window, 'resize', this.resizeHandle);
    }

    render() {

        const {className, style, name, placeholder, dateFormat, maxValue, minValue, isFooter} = this.props,
            {value, popupVisible, datePickerLevel, year, month, day, marginLeft} = this.state,

            popStyle = {
                left: '-' + marginLeft + 'px'
            };
        let textValue = moment(value).format(dateFormat);

        return (
            <div className={`date-picker ${className}`}
                 ref="datePicker"
                 style={style}>

                <TextField ref="trigger"
                           className="date-picker-field"
                           name={name}
                           placeholder={placeholder}
                           value={textValue}
                           iconCls="fa fa-calendar"
                           readOnly={true}
                           clearButtonVisible={false}/>

                <div ref="popup"
                     className={`date-picker-popup ${popupVisible ? '' : 'hidden'}`}
                     style={popStyle}>
                    <div className="calendar-date-input-wrap">
                        <TextField className='calendar-input'
                                   placeholder={'Select Date'}
                                   clearButtonVisible={true}
                                   value={textValue}
                                   onChange={this.textFieldChangeHandle}/>
                    </div>
                    {
                        datePickerLevel == 'day' ?
                            <DayPicker
                                value={value}
                                dateFormat={dateFormat}
                                year={year}
                                month={month}
                                day={day}
                                maxValue={maxValue}
                                minValue={minValue}
                                isFooter={isFooter}
                                onChange={this.dayPickerChangeHandle}
                                previousClick={this.datePickerChangeHandle}/>
                            : (
                            datePickerLevel == 'month' ?
                                <MonthPicker
                                    value={value}
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.monthPickerChangeHandle}
                                    previousClick={this.datePickerChangeHandle}/>
                                :
                                <YearPicker
                                    value={value}
                                    year={year}
                                    month={month}
                                    day={day}
                                    maxValue={maxValue}
                                    minValue={minValue}
                                    onChange={this.yearPickerChangeHandle}/>
                        )
                    }
                    {
                        isFooter ?
                            <div className="calendar-footer">
                                {
                                    (minValue && moment(this.props.value).isBefore(minValue)) || (maxValue && moment(maxValue).isBefore(this.props.value)) ?
                                        <a href="javascript:;">
                                            <span className="item-gray">Today</span>
                                        </a>
                                        :
                                        <a href="javascript:;" onClick={this.todayHandle}>
                                            Today
                                        </a>
                                }

                            </div>
                            :
                            null
                    }
                </div>

            </div>
        );
    }
};

DatePicker.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Date picker input name.
     */
    name: PropTypes.string,

    /**
     * This is the initial date value of the component.
     */
    value: PropTypes.any,

    /**
     * The ending of a range of valid dates. The range includes the endDate.
     */
    maxValue: PropTypes.any,

    /**
     * The beginning of a range of valid dates. The range includes the startDate.
     */
    minValue: PropTypes.any,

    /**
     * DatePicker textField element placeholder.
     */
    placeholder: PropTypes.string,

    /**
     * Date format.
     */
    dateFormat: PropTypes.string,

    /**
     * If true,hide date display.
     */
    autoClose: PropTypes.bool,

    /**
     * Callback function that is fired when the date value changes.
     */
    onChange: PropTypes.func

};

DatePicker.defaultProps = {
    className: '',
    style: null,
    name: '',
    maxValue: '',
    minValue: '',
    placeholder: 'Date',
    dateFormat: 'YYYY-MM-DD',
    autoClose: true,
    isFooter: true
};
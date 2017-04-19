/**
 * Created by Administrator on 2017/3/7.
 */
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

import TouchRipple from '../TouchRipple';

export default class _MonthPicker extends Component {

    constructor(props) {

        super(props);
        this.defaultTable = {
            row_number: 4,
            col_number: 3
        }
        const value = this.props.value;
        this.state = {
            selectYear: this.props.year,
            selectMonth: this.props.month,
            currentYear: moment(value).format('YYYY'),
            currentMonth: moment(value).format('MM'),
            selectDay: this.props.day
        }
        this.previousLevel = this::this.previousLevel;
        this.selectDate = this::this.selectDate;
        this.previousYear = this::this.previousYear;
        this.nextYear = this::this.nextYear;

    }

    previousLevel() {
        this.props.previousClick && this.props.previousClick(1)
    }

    selectDate(s_month) {
        let {selectYear} = this.state;
        this.setState({
            currentYear: selectYear,
            currentMonth: s_month,
            selectMonth: s_month
        }, ()=> {
            this.props.onChange && this.props.onChange({year: selectYear, month: s_month})
        });
    }

    previousYear() {
        let {currentYear, currentMonth, selectYear, selectMonth} = this.state;
        selectYear = +selectYear - 1;
        if (Number(currentYear) === Number(selectYear)) {
            selectMonth = currentMonth;
        } else {
            selectMonth = undefined;
        }
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth
        })
    }

    nextYear() {
        let {currentYear, currentMonth, selectYear, selectMonth}=this.state;
        selectYear = +selectYear + 1;

        if (Number(currentYear) === Number(selectYear)) {
            selectMonth = currentMonth;
        } else {
            selectMonth = undefined;
        }
        this.setState({
            selectYear: selectYear,
            selectMonth: selectMonth
        })
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.year !== this.props.year || nextProps.month !== this.props.month) {
            const value = nextProps.value;
            this.setState({
                selectYear: nextProps.year,
                selectMonth: nextProps.month,
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM')
            });
        }
    }

    componentDidMount() {
        const {value, year, month} = this.props;
        if (value && year && month) {
            this.setState({
                selectYear: year,
                selectMonth: month,
                currentYear: moment(value).format('YYYY'),
                currentMonth: moment(value).format('MM')
            })

        }
    }

    render() {

        const {className, maxValue, minValue} = this.props;

        let {selectYear, selectMonth, currentYear} = this.state;

        const {previousYear, nextYear, selectDate, previousLevel}=this;
        let current_months = [],
            ul_list = [];
        let MonthEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


        for (let i = 0; i < MonthEn.length; i++) {
            let Months = (
                <li className={`${(currentYear == selectYear) && (Number(selectMonth) == (i + 1)) ? 'active' : ''}
                                ${(maxValue && (moment(maxValue).format('YYYY') == selectYear) && (+(moment(maxValue).format('MM'))) < (i + 1)) ||
                (minValue && (moment(minValue).format('YYYY') == selectYear) && (+(moment(minValue).format('MM'))) > (i + 1)) ? 'item-gray' : 'current-years'}
                                `}
                    key={'current' + i}
                    onClick={()=> {
                        if ((maxValue && (moment(maxValue).format('YYYY') == selectYear) && (+(moment(maxValue).format('MM'))) < (i + 1)) ||
                            (minValue && (moment(minValue).format('YYYY') == selectYear) && (+(moment(minValue).format('MM'))) > (i + 1))) {
                            return
                        } else {
                            selectDate(i + 1)
                        }
                    }}>
                    <a href="javascript:;">
                        {MonthEn[i]}
                        <TouchRipple/>
                    </a>
                </li>);
            current_months.push(Months);
        }
        if (current_months.length > 0) {
            for (let i = 0; i < this.defaultTable.row_number; i++) {
                let li_list = [],
                    start_index = i * this.defaultTable.col_number,
                    end_index = (i + 1) * this.defaultTable.col_number;
                for (let j = start_index; j < end_index; j++) {
                    li_list.push(current_months[j]);
                }
                ul_list.push(li_list);
            }
        }
        selectYear = selectYear.toString();
        let leftNextYear = maxValue && (moment(maxValue).format('YYYY') <= +selectYear) ? true : false;

        let rightPreYear = minValue && (moment(minValue).format('YYYY') >= +selectYear) ? true : false;

        return (
            <div className={"calendar " + className}>
                <div className="calendar-header">
                    {
                        rightPreYear ?
                            null
                            :
                            <i className="fa fa-angle-double-left" onClick={previousYear}>
                                <TouchRipple/>
                            </i>
                    }

                    <span onClick={previousLevel}>{selectYear}</span>
                    {
                        leftNextYear ?
                            null :
                            <i className="fa fa-angle-double-right" onClick={nextYear}>
                                <TouchRipple/>
                            </i>
                    }

                </div>
                <div className="calendar-body  calendar-month-body">
                    <div className="c-body-content">
                        {
                            ul_list.map((item, key) => {
                                return (<ul key={'ul' + key} className="content-row month">{item}</ul>);
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

_MonthPicker.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    year: PropTypes.string || PropTypes.number,
    month: PropTypes.string || PropTypes.number,
    day: PropTypes.string || PropTypes.number,
    maxValue: PropTypes.string,
    minValue: PropTypes.string,
    onChange: PropTypes.func,
    previousClick: PropTypes.func
};

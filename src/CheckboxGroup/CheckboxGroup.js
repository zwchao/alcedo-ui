/**
 * @file CheckboxGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Checkbox from '../Checkbox';

export default class CheckboxGroup extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.changeHandle = ::this.changeHandle;

    }

    changeHandle(item) {

        let {value} = this.state,
            index = value.findIndex(v => v.value === item.value);

        if (index > -1) {
            value.splice(index, 1);
        } else {
            value.push(item);
        }

        const newValue = _.cloneDeep(value);

        this.setState({
            value: newValue
        }, () => {
            !this.props.disabled && this.props.onChange && this.props.onChange(newValue);
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {className, style, name, disabled, data, idProp} = this.props;
        const {value} = this.state;

        return (
            <div className={'checkbox-group' + (className ? ' ' + className : '')}
                 style={style}
                 disabled={disabled}>

                {
                    data.map((item, index) => {

                        const isChecked = value && value.findIndex(v => v.value === item.value) > -1;

                        return (
                            <Checkbox key={idProp in item ? item[idProp] : index}
                                      className={item.className ? item.className : ''}
                                      style={item.style}
                                      name={name}
                                      label={item.label}
                                      disabled={disabled}
                                      value={isChecked}
                                      onChange={() => {
                                          this.changeHandle(item);
                                      }}/>
                        );

                    })
                }

            </div>
        );

    }
};

CheckboxGroup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,

        label: PropTypes.any,
        value: PropTypes.any

    })).isRequired,
    value: PropTypes.array,
    disabled: PropTypes.bool,

    idProp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    onChange: PropTypes.func

};

CheckboxGroup.defaultProps = {

    className: '',
    style: null,

    name: '',
    data: [],
    value: [],
    disabled: false,
    idProp: 'id'

};
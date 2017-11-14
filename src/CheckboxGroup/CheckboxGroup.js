/**
 * @file CheckboxGroup component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Checkbox from '../Checkbox';
import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class CheckboxGroup extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            value: props.value
        };

        this.changeHandle = ::this.changeHandle;

    }

    changeHandle(item) {

        let value = _.cloneDeep(this.state.value);

        if (!value || !_.isArray(value)) {
            value = [item];
        } else {

            const index = value.findIndex(v => v.value === item.value);

            if (index > -1) {
                value.splice(index, 1);
            } else {
                value.push(item);
            }

        }

        this.setState({
            value
        }, () => {
            const {disabled, onChange} = this.props;
            !disabled && onChange && onChange(value);
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    render() {

        const {className, style, theme, name, disabled, data, idProp} = this.props,
            {value} = this.state;

        return data ? (
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
                                      theme={item.theme || theme}
                                      name={name}
                                      label={item.label}
                                      disabled={disabled || item.disabled}
                                      value={isChecked}
                                      onChange={() => {
                                          this.changeHandle(item);
                                      }}/>
                        );

                    })
                }

            </div>
        )
            :
            null;

    }
};

CheckboxGroup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    /**
     * The CheckboxGroup theme.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({

        className: PropTypes.string,
        style: PropTypes.object,
        theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

        label: PropTypes.any,
        value: PropTypes.any

    })).isRequired,
    value: PropTypes.array,
    disabled: PropTypes.bool,

    idProp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    onChange: PropTypes.func

};

CheckboxGroup.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DEFAULT,

    name: null,
    data: null,
    value: null,
    disabled: false,
    idProp: 'id'

};
import React, {Component} from 'react';

import DropdownSelect from 'dist/DropdownSelect';
import Widget from 'dist/Widget';
import WidgetHeader from 'dist/WidgetHeader';

import PropTypeDescTable from '../PropTypeDescTable';
import DropdownSelectDoc from 'assets/propTypes/DropdownSelect.json';

import 'sass/containers/app/modules/fields/DropdownSelectExamples.scss';

export default class DropdownSelectExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let data = [{
            value: '1',
            text: 'one',
            iconCls: 'fa fa-circle',
            disabled: true
        }, {
            value: '2',
            text: 'two',
            iconCls: 'fa fa-circle'
        }];

        return (
            <div className="example drop-down-select-examples">

                <h2 className="example-title">Dropdown Select</h2>

                <p>
                    <span>Dropdown Select</span> use to store operating elements. Click on the contact
                    and a drop-down menu will appear. You can select from the list and execute the appropriate command.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Dropdown Select Example"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>Dropdown Select simply example.</p>

                                <div className="field-group">

                                    {/*<label className="dropdown-select-label">Number</label>*/}
                                    <DropdownSelect data={data}
                                                    autoClose={false}/>

                                </div>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={DropdownSelectDoc}/>

            </div>
        );
    }
};
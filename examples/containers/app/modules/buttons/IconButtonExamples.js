import React, {Component} from 'react';

import IconButton from 'src/IconButton';
import Widget from 'src/Widget';
import WidgetHeader from 'src/WidgetHeader';

import PropTypeDescTable from 'components/PropTypeDescTable';
import IconButtonDoc from 'assets/propTypes/IconButton.json';

import 'sass/containers/app/modules/buttons/IconButtonExamples.scss';

export default class IconButtonExamples extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="example icon-button-examples">

                <h2 className="example-title">Icon Button</h2>

                <p>
                    An <span>Icon Button</span> generates a button element around an icon.Also,focus styles will happen
                    on click.
                </p>

                <h2 className="example-title">Examples</h2>

                <Widget>

                    <WidgetHeader className="example-header" title="Basic"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p>
                                    <code>Icon Button</code> using icon specified with the <code>iconCls</code> property
                                    example.
                                </p>

                                <IconButton iconCls="fa fa-plus"/>

                                <IconButton iconCls="fa fa-trash"/>

                                <IconButton iconCls="fa fa-wrench"
                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <Widget>

                    <WidgetHeader className="example-header" title="With theme"/>

                    <div className="widget-content">
                        <div className="example-content">

                            <div className="examples-wrapper">

                                <p><code>Icon Button</code> using different <code>theme</code> example.</p>

                                <IconButton iconCls="fa fa-plus"
                                            theme="success"/>

                                <IconButton iconCls="fa fa-trash"
                                            theme="error"/>

                                <IconButton iconCls="fa fa-wrench"
                                            disabled={true}/>

                            </div>

                        </div>
                    </div>

                </Widget>

                <h2 className="example-title">Properties</h2>

                <PropTypeDescTable data={IconButtonDoc}/>

            </div>
        );
    }
};
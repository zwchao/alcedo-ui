import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';

import Root from 'containers/Root';
import Landing from 'containers/landing/Landing';
import App from 'containers/app/App';

import RaisedButtonExamples from 'containers/app/modules/buttons/RaisedButtonExamples';
import FlatButtonExamples from 'containers/app/modules/buttons/FlatButtonExamples';
import IconButtonExamples from 'containers/app/modules/buttons/IconButtonExamples';
import IconAnchorExamples from 'containers/app/modules/buttons/IconAnchorExamples';

import TextFieldExamples from 'containers/app/modules/fields/TextFieldExamples';
import DropdownSelectExamples from 'containers/app/modules/fields/DropdownSelectExamples';
import MultipleSelectExamples from 'containers/app/modules/fields/MultipleSelectExamples';
import TreeSelectExamples from 'containers/app/modules/fields/TreeSelectExamples';
import CheckboxExamples from 'containers/app/modules/fields/CheckboxExamples';
import RadioExamples from 'containers/app/modules/fields/RadioExamples';
import ToggleButtonExamples from 'containers/app/modules/fields/ToggleButtonExamples';
import SwitcherExamples from 'containers/app/modules/fields/SwitcherExamples';
import SliderExamples from 'containers/app/modules/fields/SliderExamples';
import EditableFieldExamples from 'containers/app/modules/fields/EditableFieldExamples';

import DatePickerExamples from 'containers/app/modules/date/DatePickerExamples';
import DateRangePickerExamples from 'containers/app/modules/date/DateRangePickerExamples';
import TimePickerExamples from 'containers/app/modules/date/TimePickerExamples';
import DateTimePickerExamples from 'containers/app/modules/date/DateTimePickerExamples';

import DialogExamples from 'containers/app/modules/popup/DialogExamples';
import PopupExamples from 'containers/app/modules/popup/PopupExamples';

import CircularProgressExample from 'containers/app/modules/progress/CircularProgressExample';
import LinearProgressExample from 'containers/app/modules/progress/LinearProgressExample';

import PaperExamples from 'containers/app/modules/layout/PaperExamples';
import WidgetExamples from 'containers/app/modules/layout/WidgetExamples';
import ListExamples from 'containers/app/modules/layout/ListExamples';
import TabExamples from 'containers/app/modules/layout/TabExamples';
import AccordionExamples from 'containers/app/modules/layout/AccordionExamples';
import TableExamples from 'containers/app/modules/layout/TableExamples';

import ArrowStepExamples from 'containers/app/modules/stepper/ArrowStepExamples';
import RoundStepExamples from 'containers/app/modules/stepper/RoundStepExamples';

import ToasterExamples from 'containers/app/modules/message/ToasterExamples';

export default (
    <Route path="/" component={Root}>

        <IndexRoute component={Landing}/>

        <Route path="landing"
               component={Landing}/>

        <Redirect from="components" to="/components/RaisedButton"/>

        <Route path="components"
               component={App}>

            {/* buttons */}
            <Route path="RaisedButton"
                   component={RaisedButtonExamples}/>
            <Route path="FlatButton"
                   component={FlatButtonExamples}/>
            <Route path="IconButton"
                   component={IconButtonExamples}/>
            <Route path="IconAnchor"
                   component={IconAnchorExamples}/>

            {/* fields */}
            <Route path="TextField"
                   component={TextFieldExamples}/>
            <Route path="DatePicker"
                   component={DatePickerExamples}/>
            <Route path="DateRangePicker"
                   component={DateRangePickerExamples}/>
            <Route path="TimePicker"
                   component={TimePickerExamples}/>
            <Route path="DateTimePicker"
                   component={DateTimePickerExamples}/>
            <Route path="DropdownSelect"
                   component={DropdownSelectExamples}/>
            <Route path="MultipleSelect"
                   component={MultipleSelectExamples}/>
            <Route path="TreeSelect"
                   component={TreeSelectExamples}/>
            <Route path="Checkbox"
                   component={CheckboxExamples}/>
            <Route path="Radio"
                   component={RadioExamples}/>
            <Route path="ToggleButton"
                   component={ToggleButtonExamples}/>
            <Route path="Switcher"
                   component={SwitcherExamples}/>
            <Route path="Slider"
                   component={SliderExamples}/>
            <Route path="EditableField"
                   component={EditableFieldExamples}/>

            {/* popups */}
            <Route path="Dialog"
                   component={DialogExamples}/>
            <Route path="Popup"
                   component={PopupExamples}/>

            {/* progresses */}
            <Route path="CircularProgress"
                   component={CircularProgressExample}/>
            <Route path="LinearProgress"
                   component={LinearProgressExample}/>

            {/* layouts */}
            <Route path="Paper"
                   component={PaperExamples}/>
            <Route path="Widget"
                   component={WidgetExamples}/>
            <Route path="List"
                   component={ListExamples}/>
            <Route path="Tab"
                   component={TabExamples}/>
            <Route path="Accordion"
                   component={AccordionExamples}/>
            <Route path="Table"
                   component={TableExamples}/>

            {/* steppers */}
            <Route path="ArrowStep"
                   component={ArrowStepExamples}/>
            <Route path="RoundStep"
                   component={RoundStepExamples}/>

            {/* messages */}
            <Route path="Toaster"
                   component={ToasterExamples}/>

        </Route>

    </Route>
);
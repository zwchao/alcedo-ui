import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';

import * as types from 'reduxes/actionTypes';

import Root from 'containers/Root';
import Landing from 'containers/landing/Landing';
import App from 'containers/app/App';

import TextFieldExamples from 'containers/app/modules/fields/TextFieldExamples';
import TextAreaExamples from 'containers/app/modules/fields/TextAreaExamples';
import RemoteAutoCompleteExamples from 'containers/app/modules/fields/RemoteAutoCompleteExamples';
import LocalAutoCompleteExamples from 'containers/app/modules/fields/LocalAutoCompleteExamples';
import DropdownSelectExamples from 'containers/app/modules/fields/DropdownSelectExamples';
import MultipleSelectExamples from 'containers/app/modules/fields/MultipleSelectExamples';
import TreeSelectExamples from 'containers/app/modules/fields/TreeSelectExamples';
import TreeExamples from 'containers/app/modules/fields/TreeExamples';
import CheckboxExamples from 'containers/app/modules/fields/CheckboxExamples';
import RadioExamples from 'containers/app/modules/fields/RadioExamples';
import RadioGroupExamples from 'containers/app/modules/fields/RadioGroupExamples';
import ButtonCheckboxExamples from 'containers/app/modules/fields/ButtonCheckboxExamples';
import ButtonRadioGroupExamples from 'containers/app/modules/fields/ButtonRadioGroupExamples';
import SwitcherExamples from 'containers/app/modules/fields/SwitcherExamples';
import SliderExamples from 'containers/app/modules/fields/SliderExamples';
import EditableFieldExamples from 'containers/app/modules/fields/EditableFieldExamples';
import FlashNumberExamples from 'containers/app/modules/fields/FlashNumberExamples';
import TransferExamples from 'containers/app/modules/fields/TransferExamples';

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
import WaterfallExamples from 'containers/app/modules/layout/WaterfallExamples';

import ArrowStepExamples from 'containers/app/modules/stepper/ArrowStepExamples';
import RoundStepExamples from 'containers/app/modules/stepper/RoundStepExamples';
import ListStepExamples from 'containers/app/modules/stepper/ListStepExamples';

import ToasterExamples from 'containers/app/modules/message/ToasterExamples';
import TipExamples from 'containers/app/modules/message/TipExamples';

import TimeLineExamples from 'containers/app/modules/TimeLine/TimeLineExamples';
import SpanLoadingExamples from 'containers/app/modules/loading/SpanLoadingExamples';
import CircularLoadingExamples from 'containers/app/modules/loading/CircularLoadingExamples';
import RateExamples from 'containers/app/modules/Rate/RateExamples';

import CascaderExamples from 'containers/app/modules/Cascader/CascaderExamples';


export default function configureRoute(store) {

    function loadStartCallback() {
        store.dispatch({type: types.LOAD_COMPONENT_START});
    }

    function loadCompleteCallback() {
        store.dispatch({type: types.LOAD_COMPONENT_COMPLETE});
    }

    return <Route path="/" component={Root}>

        <IndexRoute component={Landing}/>

        <Route path="landing"
               component={Landing}/>

        <Redirect from="components" to="/components/RaisedButton"/>

        <Route path="components"
               component={App}>

            {/* buttons */}
            <Route path="RaisedButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/RaisedButtonExamples').default);
                           loadCompleteCallback();
                       }, 'RaisedButtonExamples');
                   }}/>
            <Route path="FlatButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/FlatButtonExamples').default);
                           loadCompleteCallback();
                       }, 'FlatButtonExamples');
                   }}/>
            <Route path="GhostButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/GhostButtonExamples').default);
                           loadCompleteCallback();
                       }, 'GhostButtonExamples');
                   }}/>
            <Route path="IconButton"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/IconButtonExamples').default);
                           loadCompleteCallback();
                       }, 'IconButtonExamples');
                   }}/>
            <Route path="IconAnchor"
                   getComponent={(nextState, cb) => {
                       loadStartCallback();
                       require.ensure([], (require) => {
                           cb(null, require('containers/app/modules/buttons/IconAnchorExamples').default);
                           loadCompleteCallback();
                       }, 'IconAnchorExamples');
                   }}/>

            {/* fields */}
            <Route path="TextField"
                   component={TextFieldExamples}/>
            <Route path="TextArea"
                   component={TextAreaExamples}/>
            <Route path="RemoteAutoComplete"
                   component={RemoteAutoCompleteExamples}/>
            <Route path="LocalAutoComplete"
                   component={LocalAutoCompleteExamples}/>
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
            <Route path="Tree"
                   component={TreeExamples}/>
            <Route path="Checkbox"
                   component={CheckboxExamples}/>
            <Route path="Radio"
                   component={RadioExamples}/>
            <Route path="RadioGroup"
                   component={RadioGroupExamples}/>
            <Route path="ButtonCheckbox"
                   component={ButtonCheckboxExamples}/>
            <Route path="ButtonRadioGroup"
                   component={ButtonRadioGroupExamples}/>
            <Route path="Switcher"
                   component={SwitcherExamples}/>
            <Route path="Slider"
                   component={SliderExamples}/>
            <Route path="EditableField"
                   component={EditableFieldExamples}/>
            <Route path="FlashNumber"
                   component={FlashNumberExamples}/>
            <Route path="Transfer"
                   component={TransferExamples}/>

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
            <Route path="Waterfall"
                   component={WaterfallExamples}/>

            {/* steppers */}
            <Route path="ArrowStep"
                   component={ArrowStepExamples}/>
            <Route path="RoundStep"
                   component={RoundStepExamples}/>
            <Route path="ListStep"
                   component={ListStepExamples}/>

            {/* messages */}
            <Route path="Toaster"
                   component={ToasterExamples}/>
            <Route path="Tip"
                   component={TipExamples}/>

            {/* timeLine */}
            <Route path="TimeLine"
                   component={TimeLineExamples}/>

            {/* loading */}
            <Route path="SpanLoading"
                   component={SpanLoadingExamples}/>
            <Route path="CircularLoading"
                   component={CircularLoadingExamples}/>

            {/* rate */}
            <Route path="Rate"
                   component={RateExamples}/>

            {/* cascader */}
            <Route path="Cascader"
                   component={CascaderExamples}/>

        </Route>

    </Route>;

};
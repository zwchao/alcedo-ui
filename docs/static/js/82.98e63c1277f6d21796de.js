(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{475:function(e,t,a){(e.exports=a(83)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},476:function(e,t,a){var n=a(475);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(82)(n,i);n.locals&&(e.exports=n.locals)},477:function(e,t,a){"use strict";var n=a(4),i=a.n(n),l=a(12),o=a.n(l),s=a(7),r=a.n(s),d=a(11),p=a.n(d),c=a(5),u=a.n(c),h=a(6),f=a.n(h),m=a(1),v=a.n(m),E=a(0),b=a.n(E),y=a(478),g=(a(476),function(e){function t(e){r()(this,t);var a=u()(this,(t.__proto__||o()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return f()(t,e),p()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(m.Component));g.propTypes={data:b.a.object},g.defaultProps={data:null},t.a=g},504:function(e,t,a){"use strict";var n,i=a(8),l=a.n(i),o=a(12),s=a.n(o),r=a(7),d=a.n(r),p=a(11),c=a.n(p),u=a(5),h=a.n(u),f=a(6),m=a.n(f),v=a(1),E=a.n(v),b=a(0),y=a.n(b),g=a(9),T=a.n(g),x=a(173),w=a(38),k=a(14),C=a(18),P=Object(k.a)(n=function(e){function t(e){var a;d()(this,t);for(var n=arguments.length,i=Array(n>1?n-1:0),l=1;l<n;l++)i[l-1]=arguments[l];var o=h()(this,(a=t.__proto__||s()(t)).call.apply(a,[this,e].concat(i)));return o.state={hide:!0,text:e.value,changeText:e.value},o.onInputChange=o.onInputChange.bind(o),o.showInput=o.showInput.bind(o),o.downHandle=o.downHandle.bind(o),o.triggerElement=o.triggerElement.bind(o),o.keyDownHandle=o.keyDownHandle.bind(o),o.finishEdit=o.finishEdit.bind(o),o}return m()(t,e),c()(t,[{key:"triggerElement",value:function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}},{key:"onInputChange",value:function(e){this.setState({changeText:e})}},{key:"showInput",value:function(e){var t=this;this.setState({hide:!1},function(){t.refs.textField.refs.input.focus(),t.props.onEditStart&&t.props.onEditStart(e)})}},{key:"downHandle",value:function(e){var t=e||event;!1!==this.state.hide||this.triggerElement(t.target,this.refs.editableField)||this.finishEdit(e)}},{key:"finishEdit",value:function(e){var t=this,a=this.state.text!==this.state.changeText;a&&this.props.beforeChange&&!1===this.props.beforeChange(this.state.changeText)?e.preventDefault():this.setState({hide:!0,text:this.state.changeText},function(){t.props.onEditEnd&&t.props.onEditEnd(e),a&&t.props.onChange&&t.props.onChange(t.state.text)})}},{key:"keyDownHandle",value:function(e){var t=this.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&this.finishEdit(e),!0)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},function(){t.props.onEditEnd&&t.props.onEditEnd()})}},{key:"componentDidMount",value:function(){C.a.addEvent(document,"mousedown",this.downHandle),C.a.addEvent(document,"keydown",this.keyDownHandle)}},{key:"componentWillUnmount",value:function(){C.a.removeEvent(document,"mousedown",this.downHandle),C.a.removeEvent(document,"keydown",this.keyDownHandle)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,i=e.name,o=e.disabled,s=e.tip,r=e.tipPosition,d=e.title,p=e.onMouseDown,c=e.onTouchTap,u=e.showModal,h=e.maxLength,f=T()("editable-field",l()({},a,a));return E.a.createElement(w.a,{text:s,position:r},E.a.createElement("div",{ref:"editableField",className:f,style:n,title:""+(o?"":d),onMouseDown:p,onTouchTap:c},E.a.createElement("span",{className:"editable-field-text",disabled:o},this.state.text),!0===this.state.hide?E.a.createElement("span",{className:"editable-field-span",onTouchTap:this.showInput},this.state.text,E.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):E.a.createElement(x.a,{ref:"textField",className:"editable-field-input",maxLength:h,value:this.state.changeText,onChange:this.onInputChange}),E.a.createElement("input",{type:"hidden",value:this.state.text,readOnly:!0,name:i}),u&&!this.state.hide?E.a.createElement("div",{className:"editable-modal",ref:"editableModal",onTouchTap:this.finishEdit}):null,t))}}]),t}(v.Component))||n;P.propTypes={className:y.a.string,style:y.a.object,value:y.a.string,name:y.a.string,title:y.a.string,maxLength:y.a.number,tip:y.a.string,tipPosition:y.a.string,regExp:y.a.object,disabled:y.a.bool,showModal:y.a.bool,onMouseDown:y.a.func,onTouchTap:y.a.func,onBlur:y.a.func,onChange:y.a.func,onEditStart:y.a.func,onEditEnd:y.a.func,beforeChange:y.a.func},P.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1};var N=P;a.d(t,"a",function(){return N})},736:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},value:{type:"PropTypes.string",desc:"The value of the editableField.",default:"text"},name:{type:"PropTypes.string",desc:"The name of the editableField.",default:""},title:{type:"PropTypes.string",desc:"The title of the editableField.",default:""},maxLength:{type:"PropTypes.number",desc:"The maximum length of editableField to enter."},tip:{type:"PropTypes.string",desc:"The tip of the editableField."},tipPosition:{type:"PropTypes.string",desc:"The tipPosition of the editableField."},regExp:{type:"PropTypes.object",desc:"The regular expression of the input."},disabled:{type:"PropTypes.bool",desc:"If true, the input is disabled.",default:"false"},showModal:{type:"PropTypes.bool",desc:"If true, the shadow is under the input.",default:"false"},onMouseDown:{type:"PropTypes.func"},onTouchTap:{type:"PropTypes.func",desc:"Callback function when touch the editableField."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when the editableField blur."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the editableField change."},onEditStart:{type:"PropTypes.func",desc:"Callback function fired when start editableField change."},onEditEnd:{type:"PropTypes.func",desc:"Callback function fired when end editableField change."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired when before editableField change."}}},886:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});var n=a(12),i=a.n(n),l=a(7),o=a.n(l),s=a(11),r=a.n(s),d=a(5),p=a.n(d),c=a(6),u=a.n(c),h=a(1),f=a.n(h),m=a(504),v=a(480),E=a(479),b=a(477),y=a(736),g=function(e){function t(e){o()(this,t);var a=p()(this,(t.__proto__||i()(t)).call(this,e));return a.state={value:"text",disabled:!1},a.onChange=a.onChange.bind(a),a.onEditEnd=a.onEditEnd.bind(a),a.onEditStart=a.onEditStart.bind(a),a.beforeChange=a.beforeChange.bind(a),a.onTouchTap=a.onTouchTap.bind(a),a}return u()(t,e),r()(t,[{key:"onTouchTap",value:function(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0}},{key:"onChange",value:function(e){console.log(e),"123"===e&&this.setState({disabled:!0,value:"text111"})}},{key:"onEditEnd",value:function(){console.log("end")}},{key:"onEditStart",value:function(e){console.log("start")}},{key:"beforeChange",value:function(e){return"123"!=e}},{key:"render",value:function(){return f.a.createElement("div",{className:"example editable-field-examples"},f.a.createElement("h2",{className:"example-title"},"Editable Field"),f.a.createElement("p",null,"An ",f.a.createElement("span",null,"Editable Field")," is an editable text display area."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Field")," simple example."),f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,disabled:!0,title:"Click to edit"}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,disabled:this.state.disabled,onChange:this.onChange,onEditStart:this.onEditStart,beforeChange:this.beforeChange,onTouchTap:this.onTouchTap,showModal:!0}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,title:"Click to edit"}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,onEditStart:this.onEditStart,onEditEnd:this.onEditEnd}))))),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Tip"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Field")," simple example."),f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,maxLength:5,tip:"this is a tip"}))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(b.a,{data:y}))}}]),t}(h.Component)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{434:function(e,t,a){(e.exports=a(218)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},435:function(e,t,a){var n=a(434);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(217)(n,i);n.locals&&(e.exports=n.locals)},436:function(e,t,a){"use strict";var n=a(1),i=a.n(n),l=a(9),o=a.n(l),s=a(5),r=a.n(s),d=a(8),u=a.n(d),p=a(3),c=a.n(p),h=a(4),f=a.n(h),m=a(0),v=a.n(m),b=a(437),E=(a(435),function(e){function t(e){r()(this,t);var a=c()(this,(t.__proto__||o()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return f()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(m.Component));E.defaultProps={data:null},t.a=E},464:function(e,t,a){"use strict";var n=a(2),i=a.n(n),l=a(9),o=a.n(l),s=a(5),r=a.n(s),d=a(8),u=a.n(d),p=a(3),c=a.n(p),h=a(4),f=a.n(h),m=a(0),v=a.n(m),b=a(7),E=a.n(b),y=a(427),g=a.n(y),T=a(152),x=a(32),w=a(13),k=function(e){function t(e){var a;r()(this,t);for(var n=arguments.length,i=Array(n>1?n-1:0),l=1;l<n;l++)i[l-1]=arguments[l];var s=c()(this,(a=t.__proto__||o()(t)).call.apply(a,[this,e].concat(i)));return s.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},s.onInputChange=s.onInputChange.bind(s),s.showInput=s.showInput.bind(s),s.downHandle=s.downHandle.bind(s),s.triggerElement=s.triggerElement.bind(s),s.keyDownHandle=s.keyDownHandle.bind(s),s.finishEdit=s.finishEdit.bind(s),s}return f()(t,e),u()(t,[{key:"triggerElement",value:function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}},{key:"onInputChange",value:function(e){this.setState({changeText:e})}},{key:"showInput",value:function(e){var t=this;this.setState({hide:!1},function(){t.refs.textField.refs.input.focus(),t.props.onEditStart&&t.props.onEditStart(e)})}},{key:"downHandle",value:function(e){var t=e||event;!1!==this.state.hide||this.triggerElement(t.target,this.refs.editableField)||this.finishEdit(e)}},{key:"finishEdit",value:function(e){var t=this,a=this.state.text!==this.state.changeText;a&&this.props.beforeChange&&!1===this.props.beforeChange(this.state.changeText)?e.preventDefault():this.setState({hide:!0,text:g()(this.state.changeText),changeText:g()(this.state.changeText)},function(){t.props.onEditEnd&&t.props.onEditEnd(e),a&&t.props.onChange&&t.props.onChange(t.state.text)})}},{key:"keyDownHandle",value:function(e){var t=this.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&this.finishEdit(e),!0)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},function(){t.props.onEditEnd&&t.props.onEditEnd()})}},{key:"componentDidMount",value:function(){w.a.addEvent(document,"mousedown",this.downHandle),w.a.addEvent(document,"keydown",this.keyDownHandle)}},{key:"componentWillUnmount",value:function(){w.a.removeEvent(document,"mousedown",this.downHandle),w.a.removeEvent(document,"keydown",this.keyDownHandle)}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.refs.editableFieldText&&this.refs.editableFieldText.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,l=e.name,o=e.disabled,s=e.tip,r=e.tipPosition,d=e.title,u=e.onMouseDown,p=e.onTouchTap,c=e.showModal,h=e.maxLength,f=e.autoWidth,m=this.state,b=m.changeText,y=m.text,g=m.hide,w=m.inputAutoWidth,k=E()("editable-field",i()({},a,a)),C=f&&"number"==typeof w?{width:parseInt(w)+42}:{};return v.a.createElement(x.a,{text:s,position:r},v.a.createElement("div",{ref:"editableField",className:k,style:n,title:""+(o?"":d),onMouseDown:u,onTouchTap:p},v.a.createElement("span",{className:"editable-field-hidden-text",ref:"editableFieldText",disabled:o},b),v.a.createElement("span",{className:"editable-field-text",disabled:o},y),!0===g?v.a.createElement("span",{className:"editable-field-span",onTouchTap:this.showInput},y,v.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):v.a.createElement(T.a,{ref:"textField",style:C,className:"editable-field-input",maxLength:h,value:b,onChange:this.onInputChange}),v.a.createElement("input",{type:"hidden",value:y,readOnly:!0,name:l}),c&&!g?v.a.createElement("div",{className:"editable-modal",ref:"editableModal",onTouchTap:this.finishEdit}):null,t))}}]),t}(m.Component);k.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var C=k;a.d(t,"a",function(){return C})},701:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},value:{type:"PropTypes.string",desc:"The value of the editableField.",default:"text"},name:{type:"PropTypes.string",desc:"The name of the editableField.",default:""},title:{type:"PropTypes.string",desc:"The title of the editableField.",default:""},maxLength:{type:"PropTypes.number",desc:"The maximum length of editableField to enter."},tip:{type:"PropTypes.string",desc:"The tip of the editableField."},tipPosition:{type:"PropTypes.string",desc:"The tipPosition of the editableField."},regExp:{type:"PropTypes.object",desc:"The regular expression of the input."},disabled:{type:"PropTypes.bool",desc:"If true, the input is disabled.",default:"false"},showModal:{type:"PropTypes.bool",desc:"If true, the shadow is under the input.",default:"false"},autoWidth:{type:"PropTypes.bool",desc:"If true, the input will be auto width.",default:"false"},onMouseDown:{type:"PropTypes.func"},onTouchTap:{type:"PropTypes.func",desc:"Callback function when touch the editableField."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when the editableField blur."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the editableField change."},onEditStart:{type:"PropTypes.func",desc:"Callback function fired when start editableField change."},onEditEnd:{type:"PropTypes.func",desc:"Callback function fired when end editableField change."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired when before editableField change."}}},869:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g});var n=a(9),i=a.n(n),l=a(5),o=a.n(l),s=a(8),r=a.n(s),d=a(3),u=a.n(d),p=a(4),c=a.n(p),h=a(0),f=a.n(h),m=a(464),v=a(438),b=a(439),E=a(436),y=a(701),g=function(e){function t(e){o()(this,t);var a=u()(this,(t.__proto__||i()(t)).call(this,e));return a.state={value:"text",disabled:!1},a.onChange=a.onChange.bind(a),a.onEditEnd=a.onEditEnd.bind(a),a.onEditStart=a.onEditStart.bind(a),a.beforeChange=a.beforeChange.bind(a),a.onTouchTap=a.onTouchTap.bind(a),a}return c()(t,e),r()(t,[{key:"onTouchTap",value:function(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0}},{key:"onChange",value:function(e){console.log(e),"123"===e&&this.setState({disabled:!0,value:"text111"})}},{key:"onEditEnd",value:function(){console.log("end")}},{key:"onEditStart",value:function(e){console.log("start")}},{key:"beforeChange",value:function(e){return"123"!=e}},{key:"render",value:function(){return f.a.createElement("div",{className:"example editable-field-examples"},f.a.createElement("h2",{className:"example-title"},"Editable Field"),f.a.createElement("p",null,"An ",f.a.createElement("span",null,"Editable Field")," is an editable text display area."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(v.a,null,f.a.createElement(b.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Field")," simple example."),f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,disabled:!0,title:"Click to edit"}),", ",f.a.createElement(m.a,{value:this.state.value,autoWidth:!0,onBlur:this.onBlur,disabled:this.state.disabled,onChange:this.onChange,onEditStart:this.onEditStart,beforeChange:this.beforeChange,onTouchTap:this.onTouchTap,showModal:!0}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,title:"Click to edit"}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,onEditStart:this.onEditStart,onEditEnd:this.onEditEnd}))))),f.a.createElement(v.a,null,f.a.createElement(b.a,{className:"example-header",title:"Tip"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Field")," simple example."),f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,maxLength:5,tip:"this is a tip"}))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(E.a,{data:y}))}}]),t}(h.Component)}}]);
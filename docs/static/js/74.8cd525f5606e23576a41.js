(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{439:function(e,t,a){(e.exports=a(216)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},440:function(e,t,a){var n=a(439);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(215)(n,l);n.locals&&(e.exports=n.locals)},441:function(e,t,a){"use strict";var n=a(1),l=a.n(n),i=a(9),s=a.n(i),o=a(5),r=a.n(o),d=a(8),c=a.n(d),p=a(3),u=a.n(p),h=a(4),f=a.n(h),m=a(0),v=a.n(m),E=a(442),b=(a(440),function(e){function t(e){r()(this,t);var a=u()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return f()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(l()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(m.Component));b.defaultProps={data:null},t.a=b},470:function(e,t,a){"use strict";var n=a(2),l=a.n(n),i=a(9),s=a.n(i),o=a(5),r=a.n(o),d=a(8),c=a.n(d),p=a(3),u=a.n(p),h=a(4),f=a.n(h),m=a(0),v=a.n(m),E=a(7),b=a.n(E),y=a(432),g=a.n(y),x=a(151),w=a(32),T=a(13),C=function(e){function t(e){var a;r()(this,t);for(var n=arguments.length,l=Array(n>1?n-1:0),i=1;i<n;i++)l[i-1]=arguments[i];var o=u()(this,(a=t.__proto__||s()(t)).call.apply(a,[this,e].concat(l)));return o.triggerElement=function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1},o.onInputChange=function(e){o.setState({changeText:e})},o.showInput=function(e){o.setState({hide:!1},function(){o.refs.textField.refs.input.focus(),o.props.onEditStart&&o.props.onEditStart(e)})},o.downHandle=function(e){var t=e||event;!1!==o.state.hide||o.triggerElement(t.target,o.refs.editableField)||o.finishEdit(e)},o.finishEdit=function(e){var t=o.state.text!==o.state.changeText;t&&o.props.beforeChange&&!1===o.props.beforeChange(o.state.changeText)?e.preventDefault():o.setState({hide:!0,text:g()(o.state.changeText),changeText:g()(o.state.changeText)},function(){o.props.onEditEnd&&o.props.onEditEnd(e),t&&o.props.onChange&&o.props.onChange(o.state.text)})},o.keyDownHandle=function(e){var t=o.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&o.finishEdit(e),!0)},o.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},o}return f()(t,e),c()(t,[{key:"componentDidMount",value:function(){T.a.addEvent(document,"mousedown",this.downHandle),T.a.addEvent(document,"keydown",this.keyDownHandle)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},function(){t.props.onEditEnd&&t.props.onEditEnd()})}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.refs.editableFieldText&&this.refs.editableFieldText.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){T.a.removeEvent(document,"mousedown",this.downHandle),T.a.removeEvent(document,"keydown",this.keyDownHandle)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,i=e.name,s=e.disabled,o=e.tip,r=e.tipPosition,d=e.title,c=e.onMouseDown,p=e.onClick,u=e.showModal,h=e.maxLength,f=e.autoWidth,m=this.state,E=m.changeText,y=m.text,g=m.hide,T=m.inputAutoWidth,C=b()("editable-field",l()({},a,a)),k=f&&"number"==typeof T?{width:parseInt(T)+42}:{};return v.a.createElement(w.a,{text:o,position:r},v.a.createElement("div",{ref:"editableField",className:C,style:n,title:""+(s?"":d),onMouseDown:c,onClick:p},v.a.createElement("span",{className:"editable-field-hidden-text",ref:"editableFieldText",disabled:s},E),v.a.createElement("span",{className:"editable-field-text",disabled:s},y),!0===g?v.a.createElement("span",{className:"editable-field-span",onClick:this.showInput},y,v.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):v.a.createElement(x.a,{ref:"textField",style:k,className:"editable-field-input",maxLength:h,value:E,onChange:this.onInputChange}),v.a.createElement("input",{type:"hidden",value:y,readOnly:!0,name:i}),u&&!g?v.a.createElement("div",{className:"editable-modal",ref:"editableModal",onClick:this.finishEdit}):null,t))}}]),t}(m.Component);C.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var k=C;a.d(t,"a",function(){return k})},706:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},value:{type:"PropTypes.string",desc:"The value of the editableField.",default:"text"},name:{type:"PropTypes.string",desc:"The name of the editableField.",default:""},title:{type:"PropTypes.string",desc:"The title of the editableField.",default:""},maxLength:{type:"PropTypes.number",desc:"The maximum length of editableField to enter."},tip:{type:"PropTypes.string",desc:"The tip of the editableField."},tipPosition:{type:"PropTypes.string",desc:"The tipPosition of the editableField."},regExp:{type:"PropTypes.object",desc:"The regular expression of the input."},disabled:{type:"PropTypes.bool",desc:"If true, the input is disabled.",default:"false"},showModal:{type:"PropTypes.bool",desc:"If true, the shadow is under the input.",default:"false"},autoWidth:{type:"PropTypes.bool",desc:"If true, the input will be auto width.",default:"false"},onMouseDown:{type:"PropTypes.func"},onClick:{type:"PropTypes.func",desc:"Callback function when touch the editableField."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when the editableField blur."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the editableField change."},onEditStart:{type:"PropTypes.func",desc:"Callback function fired when start editableField change."},onEditEnd:{type:"PropTypes.func",desc:"Callback function fired when end editableField change."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired when before editableField change."}}},874:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a.n(n),i=a(5),s=a.n(i),o=a(8),r=a.n(o),d=a(3),c=a.n(d),p=a(4),u=a.n(p),h=a(0),f=a.n(h),m=a(470),v=a(443),E=a(444),b=a(441),y=a(706),g=function(e){function t(e){s()(this,t);var a=c()(this,(t.__proto__||l()(t)).call(this,e));return a.onClick=function(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0},a.onChange=function(e){console.log(e),"123"===e&&a.setState({disabled:!0,value:"text111"})},a.onEditEnd=function(){console.log("end")},a.onEditStart=function(){console.log("start")},a.beforeChange=function(e){return"123"!=e},a.state={value:"text",disabled:!1},a}return u()(t,e),r()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"example editable-field-examples"},f.a.createElement("h2",{className:"example-title"},"Editable Field"),f.a.createElement("p",null,"An ",f.a.createElement("span",null,"Editable Field")," is an editable text display area."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Field")," simple example."),f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,disabled:!0,title:"Click to edit"}),", ",f.a.createElement(m.a,{value:this.state.value,autoWidth:!0,onBlur:this.onBlur,disabled:this.state.disabled,onChange:this.onChange,onEditStart:this.onEditStart,beforeChange:this.beforeChange,onClick:this.onClick,showModal:!0}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,title:"Click to edit"}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur}),", ",f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,onEditStart:this.onEditStart,onEditEnd:this.onEditEnd}))))),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Tip"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Field")," simple example."),f.a.createElement(m.a,{value:this.state.value,onBlur:this.onBlur,maxLength:5,tip:"this is a tip"}))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(b.a,{data:y}))}}]),t}(h.Component);t.default=g}}]);
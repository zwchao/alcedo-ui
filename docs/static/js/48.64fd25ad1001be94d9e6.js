(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{292:function(e,t,a){"use strict";var n=a(61),r=a.n(n),i=a(62),l=a.n(i),s=a(63),o=a.n(s),p=a(64),d=a.n(p),u=a(21),c=a.n(u),h=a(65),f=a.n(h),m=a(9),g=a.n(m),y=a(0),v=a.n(y),E=a(287),b=a.n(E),x=a(299);a(293);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach((function(t){g()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){function t(e){var a;return r()(this,t),a=o()(this,d()(t).call(this,e)),g()(c()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(T({name:t},a.props.data[t]));return e})),a}return f()(t,e),l()(t,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(x.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(y.Component);S.propTypes={data:b.a.object},t.a=S},293:function(e,t,a){var n=a(113),r=a(294);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(n(r,i),r.locals?r.locals:{});e.exports=l},294:function(e,t,a){(t=a(114)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},343:function(e,t,a){"use strict";var n=a(61),r=a.n(n),i=a(62),l=a.n(i),s=a(63),o=a.n(s),p=a(64),d=a.n(p),u=a(21),c=a.n(u),h=a(65),f=a.n(h),m=a(9),g=a.n(m),y=a(0),v=a.n(y),E=a(287),b=a.n(E),x=a(288),w=a.n(x),T=a(271),S=a.n(T),C=a(348),N=a(303),I=a(313),W=function(e){function t(e){var a,n;r()(this,t);for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return n=o()(this,(a=d()(t)).call.apply(a,[this,e].concat(l))),g()(c()(n),"triggerElement",(function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1})),g()(c()(n),"handleInputChange",(function(e){n.setState({changeText:e})})),g()(c()(n),"showInput",(function(e){n.setState({hide:!1},(function(){n.textField&&n.textField.current&&n.textField.current.focus(),n.props.onEditStart&&n.props.onEditStart(e)}))})),g()(c()(n),"handleDown",(function(e){var t=e||event;!1!==n.state.hide||n.triggerElement(t.target,n.editableFieldEl)||n.finishEdit(e)})),g()(c()(n),"finishEdit",(function(e){var t=n.state.text!==n.state.changeText;t&&n.props.beforeChange&&!1===n.props.beforeChange(n.state.changeText)?e.preventDefault():n.setState({hide:!0,text:S()(n.state.changeText),changeText:S()(n.state.changeText)},(function(){n.props.onEditEnd&&n.props.onEditEnd(e),t&&n.props.onChange&&n.props.onChange(n.state.text)}))})),g()(c()(n),"handleKeyDown",(function(e){var t=n.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&n.finishEdit(e),!0)})),n.editableField=Object(y.createRef)(),n.editableFieldEl=null,n.editableFieldText=Object(y.createRef)(),n.editableFieldTextEl=null,n.textField=Object(y.createRef)(),n.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},n}return f()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.editableFieldEl=this.editableField&&this.editableField.current,this.editableFieldTextEl=this.editableFieldText&&this.editableFieldText.current,I.a.addEvent(document,"mousedown",this.handleDown),I.a.addEvent(document,"keydown",this.handleKeyDown)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},(function(){t.props.onEditEnd&&t.props.onEditEnd()}))}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.editableFieldTextEl&&this.editableFieldTextEl.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){I.a.removeEvent(document,"mousedown",this.handleDown),I.a.removeEvent(document,"keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=e.name,i=e.disabled,l=e.tip,s=e.tipPosition,o=e.title,p=e.onMouseDown,d=e.onClick,u=e.showModal,c=e.maxLength,h=e.autoWidth,f=e.parentEl,m=this.state,y=m.changeText,E=m.text,b=m.hide,x=m.inputAutoWidth,T=h&&"number"==typeof x?{width:parseInt(x)+42}:{};return v.a.createElement(N.a,{tipContent:l,parentEl:f,position:s},v.a.createElement("div",{ref:this.editableField,className:w()("editable-field",g()({},a,a)),style:n,title:"".concat(i?"":o),onMouseDown:p,onClick:d},v.a.createElement("span",{className:"editable-field-hidden-text",ref:this.editableFieldText,disabled:i},y),v.a.createElement("span",{className:"editable-field-text",disabled:i},E),!0===b?v.a.createElement("span",{className:"editable-field-span",onClick:this.showInput},E,v.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):v.a.createElement(C.a,{ref:this.textField,style:T,className:"editable-field-input",maxLength:c,value:y,onChange:this.handleInputChange}),v.a.createElement("input",{type:"hidden",value:E,readOnly:!0,name:r}),u&&!b?v.a.createElement("div",{className:"editable-modal",onClick:this.finishEdit}):null,t))}}]),t}(y.Component);W.propTypes={children:b.a.any,className:b.a.string,style:b.a.object,value:b.a.string,name:b.a.string,title:b.a.string,maxLength:b.a.number,tip:b.a.string,tipPosition:b.a.string,regExp:b.a.object,disabled:b.a.bool,showModal:b.a.bool,autoWidth:b.a.bool,parentEl:b.a.object,onMouseDown:b.a.func,onClick:b.a.func,onBlur:b.a.func,onChange:b.a.func,onEditStart:b.a.func,onEditEnd:b.a.func,beforeChange:b.a.func},W.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var D=W;a.d(t,"a",(function(){return D}))},363:function(e,t,a){"use strict";var n={};function r(e,t){return e&&t?e in n?n[e]:(t.innerHTML=e.repeat(100),n[e]=t.getBoundingClientRect().width/100):0}t.a={calculateCharWidth:r,calculateStringWidth:function(e,t){if(!e||!t)return 0;var a=0,n=!0,i=!1,l=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){a+=r(s.value,t)}}catch(e){i=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw l}}return a}}},427:function(e,t,a){"use strict";var n=a(269),r=a.n(n),i=a(61),l=a.n(i),s=a(62),o=a.n(s),p=a(63),d=a.n(p),u=a(64),c=a.n(u),h=a(21),f=a.n(h),m=a(65),g=a.n(m),y=a(9),v=a.n(y),E=a(0),b=a.n(E),x=a(287),w=a.n(x),T=a(288),S=a.n(T),C=a(271),N=a.n(C),I=a(343),W=a(304),D=a(289),F=a(305),P=a(363),R=a(313),O=a(298),k=a(318),j=function(e){function t(e){var a,n;l()(this,t);for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return n=d()(this,(a=c()(t)).call.apply(a,[this,e].concat(s))),v()(f()(n),"getIndex",(function(){var e=n.props,t=e.data,a=e.listHeight,r=e.itemHeight,i=e.scrollBuffer,l=e.column,s=n.state.scrollTop;return k.a.displayIndexByScrollTopMulColumns(t,a,r,l,s,i)})),v()(f()(n),"handleScroll",(function(e){n.setState({scrollTop:n.wrapperEl?n.wrapperEl.scrollTop:0},(function(){var t=n.props.onScroll;t&&t(e)}))})),v()(f()(n),"getSeparators",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators;return e&&e.length>0?e:DEFAULT_SEPARATORS})),v()(f()(n),"generateSeparatorReg",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators,t=n.getSeparators(e);return new RegExp("\\s*".concat(t?t.map((function(e){return"\\".concat(e)})).join("|"):"","\\s*"),"g")})),v()(f()(n),"removeItem",(function(e){var t=n.state.data;t&&!(t.length<1)&&e in t&&(t.splice(e,1),n.setState({data:t},(function(){var e=n.props.onChange;e&&e(t)})))})),v()(f()(n),"handleMouseDown",(function(e){if(!(n.props.disabled||F.a.findParentByClassName(e.target,"tag-field-item-wrapper")||F.a.hasClass(e.target,"tag-field-input"))){var t=function(e){var t=this;return function(){if(t.state.itemEditing||t.wrapperEl&&F.a.findParentByClassName(e.target,"dynamic-tag-field")!=t.wrapperEl)t.setState({inputIndex:t.state.data.length});else{var a=e.clientX,n=e.clientY;if(a&&n)F.a.getOffset(t.wrapperEl)&&setTimeout((function(){t.inputEl&&t.inputEl.focus()}),0)}}}.bind(f()(n))(e);n.state.inputValue?n.insertInputValue(t):t()}})),v()(f()(n),"handleInputChange",(function(e){if(!n.props.disabled){var t=e.target.value,a=t?t.replace(/\r?\n/gm,""):t;n.setState({inputValue:a},(function(){var e=n.props.onInputChange,t=P.a.calculateStringWidth(a,n.testEl);n.inputWrapperEl&&(n.inputWrapperEl.style.width="".concat(t+9,"px")),n.inputEl&&(n.inputEl.style.height=Math.max(n.inputEl.scrollHeight,24)+"px"),e&&e(a)}))}})),v()(f()(n),"handleInputKeyDown",(function(e){n.props.disabled||13===e.keyCode&&n.insertInputValue()})),v()(f()(n),"insertInputValue",(function(e){if(!n.props.disabled){var t=n.state,a=t.data,i=t.inputValue,l=t.inputIndex;if(i){var s=N()(i).split(n.generateSeparatorReg()).filter((function(e){return!!e}));a.splice.apply(a,[l,0].concat(r()(s))),n.setState({data:a,inputValue:"",inputIndex:l+s.length},(function(){n.inputWrapperEl&&(n.inputWrapperEl.style.width="9px"),n.inputEl&&(n.inputEl.style.height="24px");var t=n.props.onChange;t&&t(a),e&&e()}))}}})),v()(f()(n),"handleItemChange",(function(e,t){if(!n.props.disabled){var a=n.state.data;if(e){var i=e.split(n.generateSeparatorReg()).filter((function(e){return e}));a.splice.apply(a,[t,1].concat(r()(i)))}else a.splice(t,1);n.setState({data:a},(function(){var e=n.props.onChange;e&&e(a)}))}})),v()(f()(n),"handleItemEditStart",(function(e){n.props.disabled||n.setState({itemEditing:!0,editingItemIndex:e})})),v()(f()(n),"handleItemEditEnd",(function(){n.props.disabled||n.setState({itemEditing:!1})})),n.inputSymbol=Symbol("input"),n.wrapper=Object(E.createRef)(),n.wrapperEl=null,n.inputWrapper=Object(E.createRef)(),n.inputWrapperEl=null,n.input=Object(E.createRef)(),n.inputEl=null,n.test=Object(E.createRef)(),n.testEl=null,n.state={scrollTop:0,wrapperWidth:"auto",data:e.data,inputValue:e.inputValue,inputIndex:e.data.length,itemEditing:!1,editingItemIndex:-1},n}return g()(t,e),o()(t,[{key:"componentDidMount",value:function(){R.a.addEvent(document,"mousedown",this.handleMouseDown),this.wrapperEl=this.wrapper&&this.wrapper.current,this.inputWrapperEl=this.inputWrapper&&this.inputWrapper.current,this.inputEl=this.input&&this.input.current,this.testEl=this.test&&this.test.current,this.setState({wrapperWidth:this.wrapperEl?this.wrapperEl.clientWidth:"auto"})}},{key:"componentWillUnmount",value:function(){R.a.removeEvent(document,"mousedown",this.handleMouseDown)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,r=t.valueField,i=t.displayField,l=t.disabled,s=t.placeholder,o=t.isTagAutoWidth,p=t.tagRemoveIconCls,d=t.itemHeight,u=t.column,c=this.state,h=c.wrapperWidth,f=c.data,m=c.inputValue,g=c.inputIndex,y=this.getIndex(),E=f&&y?f.slice(y.startWithBuffer,y.stopWithBuffer+1):f,x=D.a.genIndexArray(E.length);return x.splice(g,0,this.inputSymbol),b.a.createElement("div",{ref:this.wrapper,className:S()("dynamic-tag-field",v()({},a,a)),style:n,disabled:l,onScroll:this.handleScroll},b.a.createElement("div",{className:"dynamic-render-list-scroller",style:{height:Math.ceil(f.length/u)*d}},b.a.createElement("div",{className:"dynamic-render-tag-field-transform",style:{transform:"translateY(".concat(y.startWithBuffer*d/u,"px)"),height:x.length>1?"auto":"108px"}},x&&x.map((function(t){return t===e.inputSymbol?null:b.a.createElement("span",{key:t,"data-index":t,className:S()("tag-field-item-wrapper",v()({},E[t].className,E[t].className))},b.a.createElement(I.a,{className:"tag-field-item-field",value:D.a.getTextByDisplayField(E[t],i,r),autoWidth:o,onChange:function(a){return e.handleItemChange(a,t+y.startWithBuffer)},onEditStart:function(){return e.handleItemEditStart(t+y.startWithBuffer)},onEditEnd:e.handleItemEditEnd},b.a.createElement(W.a,{className:"tag-field-item-field-delete-button",iconCls:p,onClick:function(){return e.removeItem(t+y.startWithBuffer)}})))})))),b.a.createElement("div",{key:"input",ref:this.inputWrapper,className:"tag-field-input-wrapper"},b.a.createElement("textarea",{ref:this.input,className:"tag-field-input",style:{width:h},autoFocus:!0,value:m,placeholder:E.length<1&&s?s:"",onChange:this.handleInputChange,onKeyDown:this.handleInputKeyDown})),b.a.createElement("div",{ref:this.test,className:"tag-field-test-container"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,data:O.a.getDerivedState(e,t,"data"),inputValue:O.a.getDerivedState(e,t,"inputValue")}}}]),t}(E.Component);v()(j,"DEFAULT_SEPARATORS",[","]),j.propTypes={className:w.a.string,style:w.a.object,listHeight:w.a.number,itemHeight:w.a.number,scrollBuffer:w.a.number,column:w.a.number,data:w.a.array,inputValue:w.a.oneOfType([w.a.string,w.a.number]),valueField:w.a.string,displayField:w.a.string,separators:w.a.array,disabled:w.a.bool,placeholder:w.a.string,isTagAutoWidth:w.a.bool,tagRemoveIconCls:w.a.string,onChange:w.a.func,onInputChange:w.a.func,onScroll:w.a.func},j.defaultProps={data:[],inputValue:"",valueField:"value",displayField:"text",separators:j.DEFAULT_SEPARATORS,disabled:!1,placeholder:"",isTagAutoWidth:!0,tagRemoveIconCls:"fas fa-times",listHeight:200,itemHeight:34,scrollBuffer:24,column:4};var A=j;a.d(t,"a",(function(){return A}))},453:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"data":{"type":"PropTypes.array","default":"[]"},"inputValue":{"type":"PropTypes.number","default":""},"valueField":{"type":"PropTypes.string","default":"value"},"displayField":{"type":"PropTypes.string","default":"text"},"separators":{"type":"PropTypes.array","default":"TagField.DEFAULT_SEPARATORS"},"disabled":{"type":"PropTypes.bool","default":"false"},"placeholder":{"type":"PropTypes.string","default":""},"isTagAutoWidth":{"type":"PropTypes.bool","default":"true"},"tagRemoveIconCls":{"type":"PropTypes.string","default":"fas fa-times"},"onChange":{"type":"PropTypes.func"},"onInputChange":{"type":"PropTypes.func"}}')},589:function(e,t,a){var n=a(113),r=a(590);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},l=(n(r,i),r.locals?r.locals:{});e.exports=l},590:function(e,t,a){(t=a(114)(!1)).push([e.i,".dynamic-render-tag-field-examples .tag-field-item-wrapper.duplicate .editable-field-text {\n  color: #2196f3; }\n\n.dynamic-render-tag-field-examples .tag-field-item-wrapper.unfound .editable-field-text {\n  color: #d8534e; }\n",""]),e.exports=t},795:function(e,t,a){"use strict";a.r(t);var n=a(61),r=a.n(n),i=a(62),l=a.n(i),s=a(63),o=a.n(s),p=a(64),d=a.n(p),u=a(65),c=a.n(u),h=a(0),f=a.n(h),m=a(427),g=a(296),y=a(297),v=a(292),E=a(453),b=(a(589),function(e){function t(e){var a;return r()(this,t),(a=o()(this,d()(t).call(this,e))).data=[{text:"Hotelcode1"},{text:"Hotelcode2"},{className:"duplicate",text:"Hotelcode3"},{className:"duplicate",text:"Hotelcode4"},{text:"Hotelcode5"},{className:"unfound",text:"Hotelcode6"},{className:"unfound",value:"Hotelcode7"}],a}return c()(t,e),l()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"example dynamic-render-tag-field-examples"},f.a.createElement("h2",{className:"example-title"},"DynamicRenderTagField"),f.a.createElement("p",null,f.a.createElement("span",null,"DynamicRenderTagField")," allow users to input text."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(g.a,null,f.a.createElement(y.a,{className:"example-header",title:"With type"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"DynamicRenderTagField")),f.a.createElement(m.a,{style:{height:100},data:[],placeholder:"Please input ...",separators:[",",";","|"],onChange:function(e){return console.log(e)}}))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(v.a,{data:E}))}}]),t}(h.Component));t.default=b}}]);
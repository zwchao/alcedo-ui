(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{240:function(e,t,n){"use strict";var a=n(50),r=n.n(a),i=n(51),l=n.n(i),o=n(19),s=n.n(o),u=n(52),c=n.n(u),p=n(53),d=n.n(p),f=n(36),h=n.n(f),m=n(9),y=n.n(m),g=n(0),v=n.n(g),E=n(98),b=n.n(E),x=n(247);n(241);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var R=function(e){c()(n,e);var t=T(n);function n(e){var a;return r()(this,n),a=t.call(this,e),y()(s()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(S({name:t},a.props.data[t]));return e})),a}return l()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(x.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),n}(g.Component);R.propTypes={data:b.a.object},t.a=R},241:function(e,t,n){var a=n(99),r=n(242);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},242:function(e,t,n){(t=n(100)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(50),r=n.n(a),i=n(51),l=n.n(i),o=n(19),s=n.n(o),u=n(52),c=n.n(u),p=n(53),d=n.n(p),f=n(36),h=n.n(f),m=n(9),y=n.n(m),g=n(0),v=n.n(g),E=n(98),b=n.n(E),x=n(236),w=n.n(x),S=n(222),T=n.n(S),R=n(298),C=n(251),D=n(260);function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var r=h()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var N=function(e){c()(n,e);var t=I(n);function n(e){var a;r()(this,n);for(var i=arguments.length,l=new Array(i>1?i-1:0),o=1;o<i;o++)l[o-1]=arguments[o];return a=t.call.apply(t,[this,e].concat(l)),y()(s()(a),"triggerElement",(function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1})),y()(s()(a),"handleInputChange",(function(e){a.setState({changeText:e})})),y()(s()(a),"showInput",(function(e){a.setState({hide:!1},(function(){a.textField&&a.textField.current&&a.textField.current.focus(),a.props.onEditStart&&a.props.onEditStart(e)}))})),y()(s()(a),"handleDown",(function(e){var t=e||event;!1!==a.state.hide||a.triggerElement(t.target,a.editableFieldEl)||a.finishEdit(e)})),y()(s()(a),"finishEdit",(function(e){var t=a.state.text!==a.state.changeText;t&&a.props.beforeChange&&!1===a.props.beforeChange(a.state.changeText)?e.preventDefault():a.setState({hide:!0,text:T()(a.state.changeText),changeText:T()(a.state.changeText)},(function(){a.props.onEditEnd&&a.props.onEditEnd(e),t&&a.props.onChange&&a.props.onChange(a.state.text)}))})),y()(s()(a),"handleKeyDown",(function(e){var t=a.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&a.finishEdit(e),!0)})),a.editableField=Object(g.createRef)(),a.editableFieldEl=null,a.editableFieldText=Object(g.createRef)(),a.editableFieldTextEl=null,a.textField=Object(g.createRef)(),a.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},a}return l()(n,[{key:"componentDidMount",value:function(){this.editableFieldEl=this.editableField&&this.editableField.current,this.editableFieldTextEl=this.editableFieldText&&this.editableFieldText.current,D.a.addEvent(document,"mousedown",this.handleDown),D.a.addEvent(document,"keydown",this.handleKeyDown)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},(function(){t.props.onEditEnd&&t.props.onEditEnd()}))}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.editableFieldTextEl&&this.editableFieldTextEl.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){D.a.removeEvent(document,"mousedown",this.handleDown),D.a.removeEvent(document,"keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=e.name,i=e.disabled,l=e.tip,o=e.tipPosition,s=e.title,u=e.onMouseDown,c=e.onClick,p=e.showModal,d=e.maxLength,f=e.autoWidth,h=e.parentEl,m=this.state,g=m.changeText,E=m.text,b=m.hide,x=m.inputAutoWidth,S=f&&"number"==typeof x?{width:parseInt(x)+42}:{};return v.a.createElement(C.a,{tipContent:l,parentEl:h,position:o},v.a.createElement("div",{ref:this.editableField,className:w()("editable-field",y()({},n,n)),style:a,title:"".concat(i?"":s),onMouseDown:u,onClick:c},v.a.createElement("span",{className:"editable-field-hidden-text",ref:this.editableFieldText,disabled:i},g),v.a.createElement("span",{className:"editable-field-text",disabled:i},E),!0===b?v.a.createElement("span",{className:"editable-field-span",onClick:this.showInput},E,v.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):v.a.createElement(R.a,{ref:this.textField,style:S,className:"editable-field-input",maxLength:d,value:g,onChange:this.handleInputChange}),v.a.createElement("input",{type:"hidden",value:E,readOnly:!0,name:r}),p&&!b?v.a.createElement("div",{className:"editable-modal",onClick:this.finishEdit}):null,t))}}]),n}(g.Component);N.propTypes={children:b.a.any,className:b.a.string,style:b.a.object,value:b.a.string,name:b.a.string,title:b.a.string,maxLength:b.a.number,tip:b.a.string,tipPosition:b.a.string,regExp:b.a.object,disabled:b.a.bool,showModal:b.a.bool,autoWidth:b.a.bool,parentEl:b.a.object,onMouseDown:b.a.func,onClick:b.a.func,onBlur:b.a.func,onChange:b.a.func,onEditStart:b.a.func,onEditEnd:b.a.func,beforeChange:b.a.func},N.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var P=N},314:function(e,t,n){"use strict";function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw l}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var i={};function l(e,t){return e&&t?e in i?i[e]:(t.innerHTML=e.repeat(100),i[e]=t.getBoundingClientRect().width/100):0}t.a={calculateCharWidth:l,calculateStringWidth:function(e,t){if(!e||!t)return 0;var n,r=0,i=a(e);try{for(i.s();!(n=i.n()).done;){r+=l(n.value,t)}}catch(e){i.e(e)}finally{i.f()}return r}}},366:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var a=n(220),r=n.n(a),i=n(50),l=n.n(i),o=n(51),s=n.n(o),u=n(19),c=n.n(u),p=n(52),d=n.n(p),f=n(53),h=n.n(f),m=n(36),y=n.n(m),g=n(9),v=n.n(g),E=n(0),b=n.n(E),x=n(98),w=n.n(x),S=n(236),T=n.n(S),R=n(222),C=n.n(R),D=n(293),I=n(252),N=n(237),P=n(274),W=n(314),F=n(260),O=n(243),A=n(266);function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var r=y()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h()(this,n)}}var k=function(e){d()(n,e);var t=j(n);function n(e){var a;l()(this,n);for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return a=t.call.apply(t,[this,e].concat(o)),v()(c()(a),"getIndex",(function(){var e=a.props,t=e.data,n=e.listHeight,r=e.itemHeight,i=e.scrollBuffer,l=e.column,o=a.state.scrollTop;return A.a.displayIndexByScrollTopMulColumns(t,n,r,l,o,i)})),v()(c()(a),"handleScroll",(function(e){a.setState({scrollTop:a.wrapperEl?a.wrapperEl.scrollTop:0},(function(){var t=a.props.onScroll;t&&t(e)}))})),v()(c()(a),"getSeparators",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.separators;return e&&e.length>0?e:DEFAULT_SEPARATORS})),v()(c()(a),"generateSeparatorReg",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.separators,t=a.getSeparators(e);return new RegExp("\\s*".concat(t?t.map((function(e){return"\\".concat(e)})).join("|"):"","\\s*"),"g")})),v()(c()(a),"removeItem",(function(e){var t=a.state.data;t&&!(t.length<1)&&e in t&&(t.splice(e,1),a.setState({data:t},(function(){var e=a.props.onChange;e&&e(t)})))})),v()(c()(a),"handleMouseDown",(function(e){if(!(a.props.disabled||P.a.findParentByClassName(e.target,"tag-field-item-wrapper")||P.a.hasClass(e.target,"tag-field-input"))){var t=function(e){var t=this;return function(){if(t.state.itemEditing||t.wrapperEl&&P.a.findParentByClassName(e.target,"dynamic-tag-field")!=t.wrapperEl)t.setState({inputIndex:t.state.data.length});else{var n=e.clientX,a=e.clientY;if(n&&a)P.a.getOffset(t.wrapperEl)&&setTimeout((function(){t.inputEl&&t.inputEl.focus()}),0)}}}.bind(c()(a))(e);a.state.inputValue?a.insertInputValue(t):t()}})),v()(c()(a),"handleInputChange",(function(e){if(!a.props.disabled){var t=e.target.value,n=t?t.replace(/\r?\n/gm,""):t;a.setState({inputValue:n},(function(){var e=a.props.onInputChange,t=W.a.calculateStringWidth(n,a.testEl);a.inputWrapperEl&&(a.inputWrapperEl.style.width="".concat(t+9,"px")),a.inputEl&&(a.inputEl.style.height=Math.max(a.inputEl.scrollHeight,24)+"px"),e&&e(n)}))}})),v()(c()(a),"handleInputKeyDown",(function(e){a.props.disabled||13===e.keyCode&&a.insertInputValue()})),v()(c()(a),"insertInputValue",(function(e){if(!a.props.disabled){var t=a.state,n=t.data,i=t.inputValue,l=t.inputIndex;if(i){var o=C()(i).split(a.generateSeparatorReg()).filter((function(e){return!!e}));n.splice.apply(n,[l,0].concat(r()(o))),a.setState({data:n,inputValue:"",inputIndex:l+o.length},(function(){a.inputWrapperEl&&(a.inputWrapperEl.style.width="9px"),a.inputEl&&(a.inputEl.style.height="24px");var t=a.props.onChange;t&&t(n),e&&e()}))}}})),v()(c()(a),"handleItemChange",(function(e,t){if(!a.props.disabled){var n=a.state.data;if(e){var i=e.split(a.generateSeparatorReg()).filter((function(e){return e}));n.splice.apply(n,[t,1].concat(r()(i)))}else n.splice(t,1);a.setState({data:n},(function(){var e=a.props.onChange;e&&e(n)}))}})),v()(c()(a),"handleItemEditStart",(function(e){a.props.disabled||a.setState({itemEditing:!0,editingItemIndex:e})})),v()(c()(a),"handleItemEditEnd",(function(){a.props.disabled||a.setState({itemEditing:!1})})),a.inputSymbol=Symbol("input"),a.wrapper=Object(E.createRef)(),a.wrapperEl=null,a.inputWrapper=Object(E.createRef)(),a.inputWrapperEl=null,a.input=Object(E.createRef)(),a.inputEl=null,a.test=Object(E.createRef)(),a.testEl=null,a.state={scrollTop:0,wrapperWidth:"auto",data:e.data,inputValue:e.inputValue,inputIndex:e.data.length,itemEditing:!1,editingItemIndex:-1},a}return s()(n,[{key:"componentDidMount",value:function(){F.a.addEvent(document,"mousedown",this.handleMouseDown),this.wrapperEl=this.wrapper&&this.wrapper.current,this.inputWrapperEl=this.inputWrapper&&this.inputWrapper.current,this.inputEl=this.input&&this.input.current,this.testEl=this.test&&this.test.current,this.setState({wrapperWidth:this.wrapperEl?this.wrapperEl.clientWidth:"auto"})}},{key:"componentWillUnmount",value:function(){F.a.removeEvent(document,"mousedown",this.handleMouseDown)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.style,r=t.valueField,i=t.displayField,l=t.disabled,o=t.placeholder,s=t.isTagAutoWidth,u=t.tagRemoveIconCls,c=t.itemHeight,p=t.column,d=this.state,f=d.wrapperWidth,h=d.data,m=d.inputValue,y=d.inputIndex,g=this.getIndex(),E=h&&g?h.slice(g.startWithBuffer,g.stopWithBuffer+1):h,x=N.a.genIndexArray(E.length);return x.splice(y,0,this.inputSymbol),b.a.createElement("div",{ref:this.wrapper,className:T()("dynamic-tag-field",v()({},n,n)),style:a,disabled:l,onScroll:this.handleScroll},b.a.createElement("div",{className:"dynamic-render-list-scroller",style:{height:Math.ceil(h.length/p)*c}},b.a.createElement("div",{className:"dynamic-render-tag-field-transform",style:{transform:"translateY(".concat(g.startWithBuffer*c/p,"px)"),height:x.length>1?"auto":"108px"}},x&&x.map((function(t){return t===e.inputSymbol?null:b.a.createElement("span",{key:t,"data-index":t,className:T()("tag-field-item-wrapper",v()({},E[t].className,E[t].className))},b.a.createElement(D.a,{className:"tag-field-item-field",value:N.a.getTextByDisplayField(E[t],i,r),autoWidth:s,onChange:function(n){return e.handleItemChange(n,t+g.startWithBuffer)},onEditStart:function(){return e.handleItemEditStart(t+g.startWithBuffer)},onEditEnd:e.handleItemEditEnd},b.a.createElement(I.a,{className:"tag-field-item-field-delete-button",iconCls:u,onClick:function(){return e.removeItem(t+g.startWithBuffer)}})))})))),b.a.createElement("div",{key:"input",ref:this.inputWrapper,className:"tag-field-input-wrapper"},b.a.createElement("textarea",{ref:this.input,className:"tag-field-input",style:{width:f},autoFocus:!0,value:m,placeholder:E.length<1&&o?o:"",onChange:this.handleInputChange,onKeyDown:this.handleInputKeyDown})),b.a.createElement("div",{ref:this.test,className:"tag-field-test-container"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,data:O.a.getDerivedState(e,t,"data"),inputValue:O.a.getDerivedState(e,t,"inputValue")}}}]),n}(E.Component);v()(k,"DEFAULT_SEPARATORS",[","]),k.propTypes={className:w.a.string,style:w.a.object,listHeight:w.a.number,itemHeight:w.a.number,scrollBuffer:w.a.number,column:w.a.number,data:w.a.array,inputValue:w.a.oneOfType([w.a.string,w.a.number]),valueField:w.a.string,displayField:w.a.string,separators:w.a.array,disabled:w.a.bool,placeholder:w.a.string,isTagAutoWidth:w.a.bool,tagRemoveIconCls:w.a.string,onChange:w.a.func,onInputChange:w.a.func,onScroll:w.a.func},k.defaultProps={data:[],inputValue:"",valueField:"value",displayField:"text",separators:k.DEFAULT_SEPARATORS,disabled:!1,placeholder:"",isTagAutoWidth:!0,tagRemoveIconCls:"fas fa-times",listHeight:200,itemHeight:34,scrollBuffer:24,column:4};var M=k},400:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"data":{"type":"PropTypes.array","default":"[]"},"inputValue":{"type":"PropTypes.number","default":""},"valueField":{"type":"PropTypes.string","default":"value"},"displayField":{"type":"PropTypes.string","default":"text"},"separators":{"type":"PropTypes.array","default":"TagField.DEFAULT_SEPARATORS"},"disabled":{"type":"PropTypes.bool","default":"false"},"placeholder":{"type":"PropTypes.string","default":""},"isTagAutoWidth":{"type":"PropTypes.bool","default":"true"},"tagRemoveIconCls":{"type":"PropTypes.string","default":"fas fa-times"},"onChange":{"type":"PropTypes.func"},"onInputChange":{"type":"PropTypes.func"}}')},538:function(e,t,n){var a=n(99),r=n(539);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},539:function(e,t,n){(t=n(100)(!1)).push([e.i,".dynamic-render-tag-field-examples .tag-field-item-wrapper.duplicate .editable-field-text {\n  color: #2196f3; }\n\n.dynamic-render-tag-field-examples .tag-field-item-wrapper.unfound .editable-field-text {\n  color: #d8534e; }\n",""]),e.exports=t},744:function(e,t,n){"use strict";n.r(t);var a=n(50),r=n.n(a),i=n(51),l=n.n(i),o=n(52),s=n.n(o),u=n(53),c=n.n(u),p=n(36),d=n.n(p),f=n(0),h=n.n(f),m=n(366),y=n(245),g=n(246),v=n(240),E=n(400);n(538);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d()(e);if(t){var r=d()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c()(this,n)}}var x=function(e){s()(n,e);var t=b(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).data=[{text:"Hotelcode1"},{text:"Hotelcode2"},{className:"duplicate",text:"Hotelcode3"},{className:"duplicate",text:"Hotelcode4"},{text:"Hotelcode5"},{className:"unfound",text:"Hotelcode6"},{className:"unfound",value:"Hotelcode7"}],a}return l()(n,[{key:"render",value:function(){return h.a.createElement("div",{className:"example dynamic-render-tag-field-examples"},h.a.createElement("h2",{className:"example-title"},"DynamicRenderTagField"),h.a.createElement("p",null,h.a.createElement("span",null,"DynamicRenderTagField")," allow users to input text."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(y.a,null,h.a.createElement(g.a,{className:"example-header",title:"With type"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,h.a.createElement("code",null,"DynamicRenderTagField")),h.a.createElement(m.a,{style:{height:100},data:[],placeholder:"Please input ...",separators:[",",";","|"],onChange:function(e){return console.log(e)}}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(v.a,{data:E}))}}]),n}(f.Component);t.default=x}}]);
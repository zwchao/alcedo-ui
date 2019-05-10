(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{348:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(61),l=a.n(i),s=a(62),o=a.n(s),d=a(63),p=a.n(d),u=a(64),c=a.n(u),f=a(22),m=a.n(f),h=a(65),g=a.n(h),y=a(0),v=a.n(y),E=a(15),x=a.n(E),b=a(354),w=(a(349),function(e){function t(e){var a,n;return l()(this,t),(n=p()(this,c()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=m()(n),n.generateData).bind(a),n}return g()(t,e),o()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(y.Component));w.propTypes={data:x.a.object},w.defaultProps={data:null},t.a=w},349:function(e,t,a){var n=a(350);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(133)(n,r);n.locals&&(e.exports=n.locals)},350:function(e,t,a){(e.exports=a(132)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},398:function(e,t,a){"use strict";var n=a(61),r=a.n(n),i=a(62),l=a.n(i),s=a(63),o=a.n(s),d=a(64),p=a.n(d),u=a(22),c=a.n(u),f=a(65),m=a.n(f),h=a(23),g=a.n(h),y=a(0),v=a.n(y),E=a(15),x=a.n(E),b=a(343),w=a.n(b),T=a(333),C=a.n(T),S=a(401),N=a(358),I=a(361),H=function(e){function t(e){var a,n;r()(this,t);for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return n=o()(this,(a=p()(t)).call.apply(a,[this,e].concat(l))),g()(c()(n),"triggerElement",function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}),g()(c()(n),"onInputChange",function(e){n.setState({changeText:e})}),g()(c()(n),"showInput",function(e){n.setState({hide:!1},function(){n.refs.textField.refs.input.focus(),n.props.onEditStart&&n.props.onEditStart(e)})}),g()(c()(n),"downHandle",function(e){var t=e||event;!1!==n.state.hide||n.triggerElement(t.target,n.refs.editableField)||n.finishEdit(e)}),g()(c()(n),"finishEdit",function(e){var t=n.state.text!==n.state.changeText;t&&n.props.beforeChange&&!1===n.props.beforeChange(n.state.changeText)?e.preventDefault():n.setState({hide:!0,text:C()(n.state.changeText),changeText:C()(n.state.changeText)},function(){n.props.onEditEnd&&n.props.onEditEnd(e),t&&n.props.onChange&&n.props.onChange(n.state.text)})}),g()(c()(n),"keyDownHandle",function(e){var t=n.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&n.finishEdit(e),!0)}),n.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){I.a.addEvent(document,"mousedown",this.downHandle),I.a.addEvent(document,"keydown",this.keyDownHandle)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},function(){t.props.onEditEnd&&t.props.onEditEnd()})}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.refs.editableFieldText&&this.refs.editableFieldText.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){I.a.removeEvent(document,"mousedown",this.downHandle),I.a.removeEvent(document,"keydown",this.keyDownHandle)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=e.name,i=e.disabled,l=e.tip,s=e.tipPosition,o=e.title,d=e.onMouseDown,p=e.onClick,u=e.showModal,c=e.maxLength,f=e.autoWidth,m=e.parentEl,h=this.state,y=h.changeText,E=h.text,x=h.hide,b=h.inputAutoWidth,T=w()("editable-field",g()({},a,a)),C=f&&"number"==typeof b?{width:parseInt(b)+42}:{};return v.a.createElement(N.a,{tipContent:l,parentEl:m,position:s},v.a.createElement("div",{ref:"editableField",className:T,style:n,title:"".concat(i?"":o),onMouseDown:d,onClick:p},v.a.createElement("span",{className:"editable-field-hidden-text",ref:"editableFieldText",disabled:i},y),v.a.createElement("span",{className:"editable-field-text",disabled:i},E),!0===x?v.a.createElement("span",{className:"editable-field-span",onClick:this.showInput},E,v.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):v.a.createElement(S.a,{ref:"textField",style:C,className:"editable-field-input",maxLength:c,value:y,onChange:this.onInputChange}),v.a.createElement("input",{type:"hidden",value:E,readOnly:!0,name:r}),u&&!x?v.a.createElement("div",{className:"editable-modal",ref:"editableModal",onClick:this.finishEdit}):null,t))}}]),t}(y.Component);H.propTypes={className:x.a.string,style:x.a.object,value:x.a.string,name:x.a.string,title:x.a.string,maxLength:x.a.number,tip:x.a.string,tipPosition:x.a.string,regExp:x.a.object,disabled:x.a.bool,showModal:x.a.bool,autoWidth:x.a.bool,onMouseDown:x.a.func,onClick:x.a.func,onBlur:x.a.func,onChange:x.a.func,onEditStart:x.a.func,onEditEnd:x.a.func,beforeChange:x.a.func},H.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var W=H;a.d(t,"a",function(){return W})},414:function(e,t,a){"use strict";var n=100,r={};function i(e,t){return e&&t?e in r?r[e]:(t.innerHTML=e.repeat(n),r[e]=t.getBoundingClientRect().width/n):0}t.a={calculateCharWidth:i,calculateStringWidth:function(e,t){if(!e||!t)return 0;var a=0,n=!0,r=!1,l=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0)a+=i(s.value,t)}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}},483:function(e,t,a){"use strict";var n=a(332),r=a.n(n),i=a(61),l=a.n(i),s=a(62),o=a.n(s),d=a(63),p=a.n(d),u=a(64),c=a.n(u),f=a(22),m=a.n(f),h=a(65),g=a.n(h),y=a(23),v=a.n(y),E=a(0),x=a.n(E),b=a(15),w=a.n(b),T=a(343),C=a.n(T),S=a(333),N=a.n(S),I=a(398),H=a(359),W=a(344),D=a(362),P=a(414),k=a(361),F=a(360),A=a(375),R=function(e){function t(e){var a,n;l()(this,t);for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return n=p()(this,(a=c()(t)).call.apply(a,[this,e].concat(s))),v()(m()(n),"getIndex",function(){var e=n.props,t=e.data,a=e.listHeight,r=e.itemHeight,i=e.scrollBuffer,l=e.column,s=n.state.scrollTop;return n.displayIndex=A.a.displayIndexByScrollTopMulColumns(t,a,r,l,s,i)}),v()(m()(n),"scrollHandler",function(e){n.setState({scrollTop:n.wrapperEl.scrollTop},function(){var t=n.props.onScroll;t&&t(e)})}),v()(m()(n),"getSeparators",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators;return e&&e.length>0?e:DEFAULT_SEPARATORS}),v()(m()(n),"generateSeparatorReg",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators,t=n.getSeparators(e);return new RegExp("\\s*".concat(t?t.map(function(e){return"\\".concat(e)}).join("|"):"","\\s*"),"g")}),v()(m()(n),"removeItem",function(e){var t=n.state.data;t&&!(t.length<1)&&e in t&&(t.splice(e,1),n.setState({data:t},function(){var e=n.props.onChange;e&&e(t)}))}),v()(m()(n),"calInputIndex",function(e){for(var t=n.refs.wrapper,a=D.a.getOffset(t).left,r=a+t.getBoundingClientRect().width,i=e.clientX,l=e.clientY,s=-1;i>=a;){var o=document.elementFromPoint(i,l),d=D.a.findParentByClassName(o,"tag-field-item-wrapper");if(d){s=+d.dataset.index+1;break}i--}if(s<0)for(;i<=r;){var p=document.elementFromPoint(i,l),u=D.a.findParentByClassName(p,"tag-field-item-wrapper");if(u){s=+u.dataset.index;break}i++}return s<0?n.state.data.length:s}),v()(m()(n),"mouseDownHandler",function(e){if(!(n.props.disabled||D.a.findParentByClassName(e.target,"tag-field-item-wrapper")||D.a.hasClass(e.target,"tag-field-input"))){var t=function(e){var t=this;return function(){if(D.a.findParentByClassName(e.target,"dynamic-tag-field")!=t.refs.wrapper||t.state.itemEditing)t.setState({inputIndex:t.state.data.length});else{var a=e.clientX,n=e.clientY;if(a&&n){var r=t.refs.wrapper;if(D.a.getOffset(r)){t.calInputIndex(e);setTimeout(function(){t.refs.input.focus()},0)}}}}}.bind(m()(n))(e);n.state.inputValue?n.insertInputValue(t):t()}}),v()(m()(n),"inputChangeHandler",function(e){if(!n.props.disabled){var t=N()(e.target.value),a=t?t.replace(/\r?\n/gm,n.getSeparators()[0]):t;n.setState({inputValue:a},function(){var e=n.props.onInputChange,t=P.a.calculateStringWidth(a,n.refs.test),r=n.refs.inputWrapper,i=n.refs.input;r&&(r.style.width="".concat(t+9,"px")),i&&(i.style.height=Math.max(i.scrollHeight,24)+"px"),e&&e(a)})}}),v()(m()(n),"inputKeyDownHandler",function(e){n.props.disabled||13===e.keyCode&&n.insertInputValue()}),v()(m()(n),"insertInputValue",function(e){if(!n.props.disabled){var t=n.state,a=t.data,i=t.inputValue,l=t.inputIndex;if(i){var s=N()(i).split(n.generateSeparatorReg()).filter(function(e){return!!e});a.splice.apply(a,[l,0].concat(r()(s))),n.setState({data:a,inputValue:"",inputIndex:l+s.length},function(){n.refs.inputWrapper.style.width="9px",n.refs.input&&(n.refs.input.style.height="24px");var t=n.props.onChange;t&&t(a),e&&e()})}}}),v()(m()(n),"itemChangeHandler",function(e,t){if(!n.props.disabled){var a=n.state.data;if(e){var i=e.split(n.generateSeparatorReg()).filter(function(e){return e});a.splice.apply(a,[t,1].concat(r()(i)))}else a.splice(t,1);n.setState({data:a},function(){var e=n.props.onChange;e&&e(a)})}}),v()(m()(n),"itemEditStartHandler",function(e){n.props.disabled||n.setState({itemEditing:!0,editingItemIndex:e})}),v()(m()(n),"itemEditEndHandler",function(){n.props.disabled||n.setState({itemEditing:!1})}),n.inputSymbol=Symbol("input"),n.lastDisplayIndex=null,n.displayIndex=null,n.state={scrollTop:0,wrapperWidth:"auto",data:e.data,inputValue:e.inputValue,inputIndex:e.data.length,itemEditing:!1,editingItemIndex:-1},n}return g()(t,e),o()(t,[{key:"componentDidMount",value:function(){k.a.addEvent(document,"mousedown",this.mouseDownHandler),this.wrapperEl=this.refs.wrapper,this.setState({wrapperWidth:this.wrapperEl?this.wrapperEl.clientWidth:"auto"})}},{key:"componentWillUnmount",value:function(){k.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,r=t.valueField,i=t.displayField,l=t.disabled,s=t.placeholder,o=t.isTagAutoWidth,d=t.tagRemoveIconCls,p=t.itemHeight,u=t.column,c=this.state,f=c.wrapperWidth,m=c.data,h=c.inputValue,g=c.inputIndex,y=(c.itemEditing,c.editingItemIndex,C()("dynamic-tag-field",v()({},a,a))),E=this.getIndex(),b=m&&E?m.slice(E.startWithBuffer,E.stopWithBuffer+1):m,w=W.a.genIndexArray(b.length),T={height:Math.ceil(m.length/u)*p};return w.splice(g,0,this.inputSymbol),x.a.createElement("div",{ref:"wrapper",className:y,style:n,disabled:l,onScroll:this.scrollHandler,onWheel:function(t){return k.a.wheelHandler(t,e.props)}},x.a.createElement("div",{className:"dynamic-render-list-scroller",style:T},x.a.createElement("div",{className:"dynamic-render-tag-field-transform",style:{transform:"translateY(".concat(E.startWithBuffer*p/u,"px)"),height:w.length>1?"auto":"108px"}},w&&w.map(function(t){return t===e.inputSymbol?null:x.a.createElement("span",{key:t,"data-index":t,className:C()("tag-field-item-wrapper",v()({},b[t].className,b[t].className))},x.a.createElement(I.a,{className:"tag-field-item-field",value:W.a.getTextByDisplayField(b[t],i,r),autoWidth:o,onChange:function(a){return e.itemChangeHandler(a,t+E.startWithBuffer)},onEditStart:function(){return e.itemEditStartHandler(t+E.startWithBuffer)},onEditEnd:e.itemEditEndHandler},x.a.createElement(H.a,{className:"tag-field-item-field-delete-button",iconCls:d,onClick:function(){return e.removeItem(t+E.startWithBuffer)}})))}))),x.a.createElement("div",{key:"input",ref:"inputWrapper",className:"tag-field-input-wrapper"},x.a.createElement("textarea",{ref:"input",className:"tag-field-input",style:{width:f},autoFocus:"true",value:h,placeholder:b.length<1&&s?s:"",onChange:this.inputChangeHandler,onKeyDown:this.inputKeyDownHandler})),x.a.createElement("div",{ref:"test",className:"tag-field-test-container"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,data:F.a.getDerivedState(e,t,"data"),inputValue:F.a.getDerivedState(e,t,"inputValue")}}}]),t}(E.Component);v()(R,"DEFAULT_SEPARATORS",[","]),R.propTypes={className:w.a.string,style:w.a.object,listHeight:w.a.number,itemHeight:w.a.number,scrollBuffer:w.a.number,column:w.a.number,data:w.a.array,inputValue:w.a.oneOfType([w.a.string,w.a.number]),valueField:w.a.string,displayField:w.a.string,separators:w.a.array,disabled:w.a.bool,placeholder:w.a.string,isTagAutoWidth:w.a.bool,tagRemoveIconCls:w.a.string,onChange:w.a.func,onInputChange:w.a.func,onWheel:w.a.func},R.defaultProps={data:[],inputValue:"",valueField:"value",displayField:"text",separators:R.DEFAULT_SEPARATORS,disabled:!1,placeholder:"",isTagAutoWidth:!0,tagRemoveIconCls:"fas fa-times",listHeight:200,itemHeight:34,scrollBuffer:24,column:4};var B=R;a.d(t,"a",function(){return B})},503:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},data:{type:"PropTypes.array",default:"[]"},inputValue:{type:"PropTypes.number",default:""},valueField:{type:"PropTypes.string",default:"value"},displayField:{type:"PropTypes.string",default:"text"},separators:{type:"PropTypes.array",default:"TagField.DEFAULT_SEPARATORS"},disabled:{type:"PropTypes.bool",default:"false"},placeholder:{type:"PropTypes.string",default:""},isTagAutoWidth:{type:"PropTypes.bool",default:"true"},tagRemoveIconCls:{type:"PropTypes.string",default:"fas fa-times"},onChange:{type:"PropTypes.func"},onInputChange:{type:"PropTypes.func"},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},641:function(e,t,a){var n=a(642);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(133)(n,r);n.locals&&(e.exports=n.locals)},642:function(e,t,a){(e.exports=a(132)(!1)).push([e.i,".dynamic-render-tag-field-examples .tag-field-item-wrapper.duplicate .editable-field-text {\n  color: #2196f3; }\n\n.dynamic-render-tag-field-examples .tag-field-item-wrapper.unfound .editable-field-text {\n  color: #d8534e; }\n",""])},842:function(e,t,a){"use strict";a.r(t);var n=a(61),r=a.n(n),i=a(62),l=a.n(i),s=a(63),o=a.n(s),d=a(64),p=a.n(d),u=a(65),c=a.n(u),f=a(0),m=a.n(f),h=a(483),g=a(353),y=a(352),v=a(348),E=a(503),x=(a(641),function(e){function t(e){var a;return r()(this,t),(a=o()(this,p()(t).call(this,e))).data=[{text:"Hotelcode1"},{text:"Hotelcode2"},{className:"duplicate",text:"Hotelcode3"},{className:"duplicate",text:"Hotelcode4"},{text:"Hotelcode5"},{className:"unfound",text:"Hotelcode6"},{className:"unfound",value:"Hotelcode7"}],a}return c()(t,e),l()(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"example dynamic-render-tag-field-examples"},m.a.createElement("h2",{className:"example-title"},"DynamicRenderTagField"),m.a.createElement("p",null,m.a.createElement("span",null,"DynamicRenderTagField")," allow users to input text."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(g.a,null,m.a.createElement(y.a,{className:"example-header",title:"With type"}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("div",{className:"examples-wrapper"},m.a.createElement("p",null,m.a.createElement("code",null,"DynamicRenderTagField")),m.a.createElement(h.a,{style:{height:100},data:[],placeholder:"Please input ...",separators:[",",";","|"],onChange:function(e){return console.log(e)}}))))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(v.a,{data:E}))}}]),t}(f.Component));t.default=x}}]);
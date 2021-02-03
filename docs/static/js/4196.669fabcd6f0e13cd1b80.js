(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[4196],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const o=a},32180:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""]);const o=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(34575),a=n.n(r),o=n(93913),i=n.n(o),l=n(81506),s=n.n(l),c=n(2205),u=n.n(c),p=n(78585),h=n.n(p),f=n(29754),d=n.n(f),m=n(59713),g=n.n(m),y=n(37699),v=n(45697),b=n.n(v),E=n(82996),C=n(93379),P=n.n(C),x=n(29250);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}P()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;var D=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var a=d()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return h()(this,e)});function o(e){var t;return a()(this,o),t=r.call(this,e),g()(s()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(N({name:n},t.props.data[n]));return e})),t}return i()(o,[{key:"render",value:function(){return y.createElement("div",{className:"prop-type-desc-table-wrapper"},y.createElement(E.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),o}(y.Component);D.propTypes={data:b().object};const w=D},79561:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>T});var r=n(34575),a=n.n(r),o=n(93913),i=n.n(o),l=n(81506),s=n.n(l),c=n(2205),u=n.n(c),p=n(78585),h=n.n(p),f=n(29754),d=n.n(f),m=n(59713),g=n.n(m),y=n(37699),v=n(37838),b=n(24471),E=n(50704),C=n(22944),P=n(65460),x=(n(79958),n(22356));const R=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"value":{"type":"PropTypes.string","desc":"The value of input.","default":""},"data":{"type":"PropTypes.array","desc":"The options data.","default":"[]"},"loading":{"type":"PropTypes.bool","desc":"If true, the list is loading.","default":"false"},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of input."},"resetPopPositionWait":{"type":"PropTypes.number","default":"250"},"parentEl":{"type":"PropTypes.object"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when value change."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when input blur."},"onFocus":{"type":"PropTypes.func","desc":"Callback function fired when input focus."}}');var N=n(93379),D=n.n(N),w=n(32180);D()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;const T=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var a=d()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return h()(this,e)});function o(e){var t;return a()(this,o),t=r.call(this,e),g()(s()(t),"show",(function(e){var n=t.state.RemoteAutoCompleteVisible;n[e]=!0,t.setState({RemoteAutoCompleteVisible:n})})),g()(s()(t),"hide",(function(e){var n=t.state.RemoteAutoCompleteVisible;n[e]=!1,t.setState({RemoteAutoCompleteVisible:n})})),g()(s()(t),"onChange",(function(e,n){t.timing&&clearTimeout(t.timing),e&&e.length>=t.searchLength&&n?t.timing=setTimeout((function(){var n=[];t.data.map((function(t){0===t.indexOf(e)&&n.push(t)})),t.setState({chooseData:n,text:e})}),2e3):t.setState({chooseData:[],text:e})})),g()(s()(t),"onBlur",(function(e){t.setState({chooseData:[],text:e})})),t.data=["test123456789123456789123456789123456789","test2","test3","derby1","derby2","derby3","test4","test5","test6","test7","test8","test9","test10","test11"],t.searchLength=2,t.state={chooseData:[],text:"",loading:!1,RemoteAutoCompleteVisible:{},triggerEl:{}},t}return i()(o,[{key:"render",value:function(){var e=this,t=this.state,n=t.chooseData,r=t.text,a=t.loading,o=t.RemoteAutoCompleteVisible,i=t.triggerEl;return y.createElement("div",{className:"example auto-complete-examples"},y.createElement("h2",{className:"example-title"},"Remote Auto Complete"),y.createElement("p",null,"A ",y.createElement("span",null,"Remote Auto Complete")," is an interface to help users to complete their input."),y.createElement("h2",{className:"example-title"},"Examples"),y.createElement(b.Z,null,y.createElement(E.Z,{className:"example-header",title:"In Dialog"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("div",{className:"examples-wrapper"},y.createElement("p",null,"Remote Auto Complete simple default example."),y.createElement(C.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),y.createElement(P.Z,{visible:o[1],onRequestClose:function(){return e.hide(1)}},(function(t){return y.createElement("div",{className:"popover-dialog-content-scroller"},y.createElement(v.Z,{data:n,onChange:e.onChange,value:r,parentEl:t,triggerEl:i,onBlur:e.onBlur,loading:a}))})))))),y.createElement("h2",{className:"example-title"},"Properties"),y.createElement(x.Z,{data:R}))}}]),o}(y.Component)},37838:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(34575),a=n.n(r),o=n(93913),i=n.n(o),l=n(81506),s=n.n(l),c=n(2205),u=n.n(c),p=n(78585),h=n.n(p),f=n(29754),d=n.n(f),m=n(59713),g=n.n(m),y=n(37699),v=n(45697),b=n.n(v),E=n(79958),C=n(23279),P=n.n(C),x=n(41844),R=n.n(x),N=n(58776),D=n(53024),w=n(23046),T=n(72),S=n(19605);var O=function(e){u()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var a=d()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return h()(this,e)});function o(e){var t;a()(this,o);for(var n=arguments.length,i=new Array(n>1?n-1:0),l=1;l<n;l++)i[l-1]=arguments[l];return t=r.call.apply(r,[this,e].concat(i)),g()(s()(t),"getClassName",(function(e){for(var t=e.className,n=e.offsetParent;null!==n;)t+=n.className,n=n.offsetParent;return t})),g()(s()(t),"changeText",(function(e){t.setState({value:e},(function(){t.setState({loading:!0},(function(){var n=t.props.onChange;n&&n(e,!0)}))}))})),g()(s()(t),"handleChange",P()((function(e){t.changeText(e)}),250)),g()(s()(t),"handleFocus",(function(){t.setState({focus:!0},(function(){var e=t.props.onFocus;e&&e()}))})),g()(s()(t),"handleClick",(function(e){var n=t.props.onBlur,r=t.getClassName(e.target);if(r.indexOf("auto-complete-li")>-1){var a=e.srcElement?e.srcElement:e.target;t.setState({focus:!0},(function(){var e=t.props.onChange;e&&e(a.innerText,!1)}))}else{if(r.indexOf("text-field")>-1)return!1;t.setState({focus:!1},(function(){n&&n(t.state.value)}))}})),t.liHeight=40,t.maxHeight=401,t.inputHeight=50,t.borderWidth=1,t.trigger=(0,y.createRef)(),t.triggerEl=null,t.state={value:e.value,focus:!1,loading:e.loading},t}return i()(o,[{key:"componentDidMount",value:function(){this.triggerEl=this.trigger&&this.trigger.current&&(0,E.findDOMNode)(this.trigger.current),T.Z.addEvent(document,"click",this.handleClick)}},{key:"componentWillUnmount",value:function(){T.Z.removeEvent(document,"click",this.handleClick),this.handleChange&&this.handleChange.cancel()}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.className,a=t.style,o=t.placeholder,i=t.resetPopPositionWait,l=t.parentEl,s=this.state,c=s.value,u=s.focus,p=s.loading,h=p?50:n.length>0?n.length*this.liHeight+this.borderWidth:0;return y.createElement("div",{className:R()("remote-auto-complete",g()({},r,r)),style:a},y.createElement("div",{className:R()("auto-complete-inner",{focused:u}),style:{height:this.inputHeight}},y.createElement(N.Z,{ref:this.trigger,style:{height:this.inputHeight},value:c,onFocus:this.handleFocus,placeholder:o,onChange:this.handleChange}),y.createElement(w.Z,{visible:u,triggerEl:this.triggerEl,parentEl:l,hasTriangle:!1,style:{width:this.triggerEl&&getComputedStyle(this.triggerEl).width},resetPositionWait:i},y.createElement("ul",{className:"auto-complete-list",style:{height:h>this.maxHeight?this.maxHeight:h}},p?y.createElement("li",{className:"auto-complete-li-loading"},y.createElement(D.Z,{className:"loading",size:D.Z.Size.DEFAULT})):n&&n.map((function(t){return y.createElement("li",{key:t,className:"auto-complete-li",style:{height:e.liHeight,lineHeight:e.liHeight+"px"},title:t},t)}))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:S.Z.getDerivedState(e,t,"value"),loading:S.Z.getDerivedState(e,t,"loading")}}}]),o}(y.Component);O.propTypes={className:b().string,style:b().object,value:b().string,data:b().array,loading:b().bool,placeholder:b().string,resetPopPositionWait:b().number,parentEl:b().object,onChange:b().func,onBlur:b().func,onFocus:b().func},O.defaultProps={value:"",data:[],searchLength:1,loading:!1,resetPopPositionWait:250};const Z=O}}]);
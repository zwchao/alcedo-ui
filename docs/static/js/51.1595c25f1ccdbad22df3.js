(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{236:function(e,t,a){"use strict";var n=a(54),r=a.n(n),l=a(55),i=a.n(l),u=a(19),s=a.n(u),c=a(56),o=a.n(c),p=a(57),m=a.n(p),f=a(38),d=a.n(f),h=a(9),v=a.n(h),y=a(0),b=a.n(y),E=a(58),w=a.n(E),g=a(242),D=a(59),N=a.n(D),R=a(237),V={insert:"head",singleton:!1};N()(R.a,V),R.a.locals;function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}var T=function(e){o()(a,e);var t=P(a);function a(e){var n;return r()(this,a),n=t.call(this,e),v()(s()(n),"generateData",(function(){var e=[];if(!n.props.data)return[];for(var t in n.props.data)e.push(O({name:t},n.props.data[t]));return e})),n}return i()(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"prop-type-desc-table-wrapper"},b.a.createElement(g.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(y.Component);T.propTypes={data:w.a.object};t.a=T},237:function(e,t,a){"use strict";var n=a(60),r=a.n(n)()(!1);r.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),t.a=r},362:function(e,t,a){"use strict";a.d(t,"a",(function(){return V}));var n=a(54),r=a.n(n),l=a(55),i=a.n(l),u=a(19),s=a.n(u),c=a(56),o=a.n(c),p=a(57),m=a.n(p),f=a(38),d=a.n(f),h=a(9),v=a.n(h),y=a(0),b=a.n(y),E=a(58),w=a.n(E),g=a(213),D=a.n(g);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}var R=function(e){o()(a,e);var t=N(a);function a(e){var n;r()(this,a);for(var l=arguments.length,i=new Array(l>1?l-1:0),u=1;u<l;u++)i[u-1]=arguments[u];return n=t.call.apply(t,[this,e].concat(i)),v()(s()(n),"init",(function(){n.animationFrameId&&cancelAnimationFrame(n.animationFrameId),n.startTime=void 0,n.initValue=n.currentValue})),v()(s()(n),"step",(function(e){if(n.startTime){if(n.wrapperEl){var t=n.initValue+Math.round((n.props.value-n.initValue)*(e-n.startTime)/n.flashDuration);n.props.value<n.initValue?n.wrapperEl.innerHTML=n.currentValue=t>n.props.value?t:n.props.value:n.props.value>n.initValue&&(n.wrapperEl.innerHTML=n.currentValue=t<n.props.value?t:n.props.value)}}else n.startTime=e;n.currentValue!=n.props.value?n.animationFrameId=requestAnimationFrame(n.step):n.animationFrameId=void 0})),n.flashDuration=e.flashDuration,n.startTime,n.initValue=e.initValue,n.animationFrameId,n.currentValue=0,n.wrapper=Object(y.createRef)(),n.wrapperEl=null,n}return i()(a,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.props.value!=this.initValue&&(this.animationFrameId=requestAnimationFrame(this.step))}},{key:"componentDidUpdate",value:function(e,t,a){e.value!==this.props.value&&(this.init(),this.animationFrameId=requestAnimationFrame(this.step)),e.flashDuration!==this.flashDuration&&(this.flashDuration=this.props.flashDuration)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style;return(b.a.createElement("span",{ref:this.wrapper,className:D()("flash-number",v()({},t,t)),style:a},this.currentValue))}}]),a}(y.Component);R.propTypes={className:w.a.string,style:w.a.object,initValue:w.a.number,value:w.a.number,flashDuration:w.a.number},R.defaultProps={initValue:0,value:0,flashDuration:450};var V=R},489:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"initValue":{"type":"PropTypes.number","desc":"Initial result value.","default":"0"},"value":{"type":"PropTypes.number","desc":"Result value.","default":"0"},"flashDuration":{"type":"PropTypes.number","desc":"Animation execution time.","default":"450"}}')},490:function(e,t,a){"use strict";var n=a(60),r=a.n(n)()(!1);r.push([e.i,".flash-number-examples .field-group > * {\n  display: inline-block;\n  vertical-align: middle; }\n",""]),t.a=r},666:function(e,t,a){"use strict";a.r(t);var n=a(54),r=a.n(n),l=a(55),i=a.n(l),u=a(19),s=a.n(u),c=a(56),o=a.n(c),p=a(57),m=a.n(p),f=a(38),d=a.n(f),h=a(9),v=a.n(h),y=a(0),b=a.n(y),E=a(251),w=a(362),g=a(240),D=a(241),N=a(236),R=a(489),V=a(59),x=a.n(V),O=a(490),P={insert:"head",singleton:!1};x()(O.a,P),O.a.locals;function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=d()(e);if(t){var r=d()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return m()(this,a)}}var j=function(e){o()(a,e);var t=T(a);function a(e){var n;return r()(this,a),n=t.call(this,e),v()(s()(n),"changeHandleValue1",(function(e){n.setState({value1:e})})),v()(s()(n),"changeHandleValue2",(function(e){n.setState({value2:e})})),n.state={value1:"",value2:""},n}return i()(a,[{key:"render",value:function(){var e=this.state,t=e.value1,a=e.value2;return(b.a.createElement("div",{className:"example flash-number-examples"},b.a.createElement("h2",{className:"example-title"},"FlashNumber"),b.a.createElement("p",null,"A ",b.a.createElement("span",null,"FlashNumber")," is a numerical calculation animation."),b.a.createElement("h2",{className:"example-title"},"Examples"),b.a.createElement(g.a,null,b.a.createElement(D.a,{className:"example-header",title:"Basic"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("div",{className:"examples-wrapper"},b.a.createElement("p",null,b.a.createElement("code",null,"FlashNumber")," simple example."),b.a.createElement("div",{className:"field-group"},b.a.createElement(E.a,{type:"number",value:t,onChange:this.changeHandleValue1}),b.a.createElement("span",null,"  X 2 = "),b.a.createElement(w.a,{initValue:0,value:2*t})))))),b.a.createElement(g.a,null,b.a.createElement(D.a,{className:"example-header",title:"With flashTime"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("div",{className:"examples-wrapper"},b.a.createElement("p",null,"Set the ",b.a.createElement("code",null,"flashTime")," property to reset animation execution time."),b.a.createElement("div",{className:"field-group"},b.a.createElement(E.a,{type:"number",value:a,onChange:this.changeHandleValue2}),b.a.createElement("span",null,"  X 3 = "),b.a.createElement(w.a,{initValue:0,flashTime:1e3,value:3*a})))))),b.a.createElement("h2",{className:"example-title"},"Properties"),b.a.createElement(N.a,{data:R})))}}]),a}(y.Component);t.default=j}}]);
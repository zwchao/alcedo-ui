(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{292:function(e,a,t){"use strict";var n=t(61),r=t.n(n),l=t(62),i=t.n(l),s=t(63),u=t.n(s),o=t(64),p=t.n(o),c=t(21),m=t.n(c),d=t(65),h=t.n(d),f=t(9),v=t.n(f),y=t(0),b=t.n(y),E=t(287),w=t.n(E),g=t(299);t(293);function N(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function V(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?N(Object(t),!0).forEach((function(a){v()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var x=function(e){function a(e){var t;return r()(this,a),t=u()(this,p()(a).call(this,e)),v()(m()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(V({name:a},t.props.data[a]));return e})),t}return h()(a,e),i()(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"prop-type-desc-table-wrapper"},b.a.createElement(g.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(y.Component);x.propTypes={data:w.a.object},a.a=x},293:function(e,a,t){var n=t(294);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};t(114)(n,r);n.locals&&(e.exports=n.locals)},294:function(e,a,t){var n=t(113);(e.exports=n(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},430:function(e,a,t){"use strict";var n=t(61),r=t.n(n),l=t(62),i=t.n(l),s=t(63),u=t.n(s),o=t(64),p=t.n(o),c=t(21),m=t.n(c),d=t(65),h=t.n(d),f=t(9),v=t.n(f),y=t(0),b=t.n(y),E=t(287),w=t.n(E),g=t(288),N=t.n(g),V=function(e){function a(e){var t,n;r()(this,a);for(var l=arguments.length,i=new Array(l>1?l-1:0),s=1;s<l;s++)i[s-1]=arguments[s];return n=u()(this,(t=p()(a)).call.apply(t,[this,e].concat(i))),v()(m()(n),"init",(function(){n.animationFrameId&&cancelAnimationFrame(n.animationFrameId),n.startTime=void 0,n.initValue=n.currentValue})),v()(m()(n),"step",(function(e){if(n.startTime){if(n.wrapperEl){var a=n.initValue+Math.round((n.props.value-n.initValue)*(e-n.startTime)/n.flashDuration);n.props.value<n.initValue?n.wrapperEl.innerHTML=n.currentValue=a>n.props.value?a:n.props.value:n.props.value>n.initValue&&(n.wrapperEl.innerHTML=n.currentValue=a<n.props.value?a:n.props.value)}}else n.startTime=e;n.currentValue!=n.props.value?n.animationFrameId=requestAnimationFrame(n.step):n.animationFrameId=void 0})),n.flashDuration=e.flashDuration,n.startTime,n.initValue=e.initValue,n.animationFrameId,n.currentValue=0,n.wrapper=Object(y.createRef)(),n.wrapperEl=null,n}return h()(a,e),i()(a,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.props.value!=this.initValue&&(this.animationFrameId=requestAnimationFrame(this.step))}},{key:"componentDidUpdate",value:function(e,a,t){e.value!==this.props.value&&(this.init(),this.animationFrameId=requestAnimationFrame(this.step)),e.flashDuration!==this.flashDuration&&(this.flashDuration=this.props.flashDuration)}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style;return b.a.createElement("span",{ref:this.wrapper,className:N()("flash-number",v()({},a,a)),style:t},this.currentValue)}}]),a}(y.Component);V.propTypes={className:w.a.string,style:w.a.object,initValue:w.a.number,value:w.a.number,flashDuration:w.a.number},V.defaultProps={initValue:0,value:0,flashDuration:450};var x=V;t.d(a,"a",(function(){return x}))},581:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"initValue":{"type":"PropTypes.number","desc":"Initial result value.","default":"0"},"value":{"type":"PropTypes.number","desc":"Result value.","default":"0"},"flashDuration":{"type":"PropTypes.number","desc":"Animation execution time.","default":"450"}}')},582:function(e,a,t){var n=t(583);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};t(114)(n,r);n.locals&&(e.exports=n.locals)},583:function(e,a,t){var n=t(113);(e.exports=n(!1)).push([e.i,".flash-number-examples .field-group > * {\n  display: inline-block;\n  vertical-align: middle; }\n",""])},792:function(e,a,t){"use strict";t.r(a);var n=t(61),r=t.n(n),l=t(62),i=t.n(l),s=t(63),u=t.n(s),o=t(64),p=t.n(o),c=t(21),m=t.n(c),d=t(65),h=t.n(d),f=t(9),v=t.n(f),y=t(0),b=t.n(y),E=t(309),w=t(430),g=t(296),N=t(297),V=t(292),x=t(581),D=(t(582),function(e){function a(e){var t;return r()(this,a),t=u()(this,p()(a).call(this,e)),v()(m()(t),"changeHandleValue1",(function(e){t.setState({value1:e})})),v()(m()(t),"changeHandleValue2",(function(e){t.setState({value2:e})})),t.state={value1:"",value2:""},t}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.state,a=e.value1,t=e.value2;return b.a.createElement("div",{className:"example flash-number-examples"},b.a.createElement("h2",{className:"example-title"},"FlashNumber"),b.a.createElement("p",null,"A ",b.a.createElement("span",null,"FlashNumber")," is a numerical calculation animation."),b.a.createElement("h2",{className:"example-title"},"Examples"),b.a.createElement(g.a,null,b.a.createElement(N.a,{className:"example-header",title:"Basic"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("div",{className:"examples-wrapper"},b.a.createElement("p",null,b.a.createElement("code",null,"FlashNumber")," simple example."),b.a.createElement("div",{className:"field-group"},b.a.createElement(E.a,{type:"number",value:a,onChange:this.changeHandleValue1}),b.a.createElement("span",null,"  X 2 = "),b.a.createElement(w.a,{initValue:0,value:2*a})))))),b.a.createElement(g.a,null,b.a.createElement(N.a,{className:"example-header",title:"With flashTime"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("div",{className:"examples-wrapper"},b.a.createElement("p",null,"Set the ",b.a.createElement("code",null,"flashTime")," property to reset animation execution time."),b.a.createElement("div",{className:"field-group"},b.a.createElement(E.a,{type:"number",value:t,onChange:this.changeHandleValue2}),b.a.createElement("span",null,"  X 3 = "),b.a.createElement(w.a,{initValue:0,flashTime:1e3,value:3*t})))))),b.a.createElement("h2",{className:"example-title"},"Properties"),b.a.createElement(V.a,{data:x}))}}]),a}(y.Component));a.default=D}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{236:function(e,n,t){"use strict";var a=t(54),r=t.n(a),l=t(55),i=t.n(l),s=t(19),o=t.n(s),c=t(56),p=t.n(c),d=t(57),u=t.n(d),m=t(38),f=t.n(m),g=t(9),h=t.n(g),y=t(0),v=t.n(y),E=t(58),b=t.n(E),x=t(242),N=t(59),w=t.n(N),S=t(237),P={insert:"head",singleton:!1};w()(S.a,P),S.a.locals;function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){h()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=f()(e);if(n){var r=f()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return u()(this,t)}}var O=function(e){p()(t,e);var n=T(t);function t(e){var a;return r()(this,t),a=n.call(this,e),h()(o()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var n in a.props.data)e.push(L({name:n},a.props.data[n]));return e})),a}return i()(t,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(x.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(y.Component);O.propTypes={data:b.a.object};n.a=O},237:function(e,n,t){"use strict";var a=t(60),r=t.n(a)()((function(e){return e[1]}));r.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),n.a=r},298:function(e,n,t){"use strict";t.d(n,"a",(function(){return V}));var a=t(214),r=t.n(a),l=t(215),i=t.n(l),s=t(54),o=t.n(s),c=t(55),p=t.n(c),d=t(19),u=t.n(d),m=t(56),f=t.n(m),g=t(57),h=t.n(g),y=t(38),v=t.n(y),E=t(9),b=t.n(E),x=t(0),N=t.n(x),w=t(58),S=t.n(w),P=t(213),R=t.n(P),L=t(247),T=t(266),O=t(246),D=t(234),k=t(235),z=t(233),C=t(238);function j(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=v()(e);if(n){var r=v()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return h()(this,t)}}var A=function(e){f()(t,e);var n=j(t);function t(e){var a;o()(this,t);for(var r=arguments.length,l=new Array(r>1?r-1:0),i=1;i<r;i++)l[i-1]=arguments[i];return a=n.call.apply(n,[this,e].concat(l)),b()(u()(a),"handleClick",(function(e){var n=a.props,t=n.disabled,r=n.isLoading,l=n.beforeChange,i=n.onClick;if(!t&&!r){i&&i(e);var s=!a.state.value,o=function(){a.setState({value:s},(function(){var n=a.props.onChange;n&&n(s,e)}))};l?!1!==l(s)&&o():o()}})),a.state={value:!!e.value},a}return p()(t,[{key:"render",value:function(){var e,n=this.props,a=n.className,l=n.style,s=n.theme,o=n.disabled,c=n.isLoading,p=n.size,d=n.labelVisible,u=n.tip,m=n.triggerEl,f=n.parentEl,g=n.tipPosition,h=(n.beforeChange,i()(n,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),y=this.state.value;return N.a.createElement(O.a,{tipContent:u,triggerEl:m,parentEl:f,position:g},N.a.createElement("div",r()({},h,{className:R()("switcher",(e={activated:y,small:p===t.Size.SMALL},b()(e,"theme-".concat(s),s),b()(e,a,a),e)),style:l,disabled:o||c,onClick:this.handleClick}),d?N.a.createElement("div",{className:"switcher-label"}):null,N.a.createElement(L.a,{className:"switcher-slider-wrapper",disableTouchRipple:o||c},N.a.createElement("div",{className:"switcher-slider"},c?N.a.createElement(T.a,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return{prevProps:e,value:C.a.getDerivedState(e,n,"value")}}}]),t}(x.Component);b()(A,"Size",{DEFAULT:"",SMALL:"small"}),b()(A,"Theme",D.a),A.propTypes={className:S.a.string,style:S.a.object,theme:S.a.oneOf(z.a.enumerateValue(D.a)),value:S.a.bool,disabled:S.a.bool,isLoading:S.a.bool,labelVisible:S.a.bool,size:S.a.oneOf(z.a.enumerateValue(A.Size)),tip:S.a.string,tipPosition:S.a.oneOf(z.a.enumerateValue(k.a)),triggerEl:S.a.object,parentEl:S.a.object,onClick:S.a.func,beforeChange:S.a.func,onChange:S.a.func},A.defaultProps={theme:D.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:A.Size.DEFAULT,tipPosition:k.a.BOTTOM};var V=A},389:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var a=t(9),r=t.n(a),l=t(54),i=t.n(l),s=t(55),o=t.n(s),c=t(56),p=t.n(c),d=t(57),u=t.n(d),m=t(38),f=t.n(m),g=t(0),h=t.n(g),y=t(58),v=t.n(y),E=t(213),b=t.n(E);function x(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=f()(e);if(n){var r=f()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return u()(this,t)}}var N=function(e){p()(t,e);var n=x(t);function t(e){var a;i()(this,t);for(var r=arguments.length,l=new Array(r>1?r-1:0),s=1;s<r;s++)l[s-1]=arguments[s];return(a=n.call.apply(n,[this,e].concat(l))).state={spanning:e.spanning},a}return o()(t,[{key:"componentWillReceiveProps",value:function(e){var n=this,t=e.spanning,a=this.props.delay;t&&a&&!isNaN(Number(a))?this.delayTimeout=setTimeout((function(){return n.setState({spanning:t})}),a):this.setState({spanning:t})}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"render",value:function(){var e,n=this.props,t=n.className,a=n.style,l=n.description,i=n.size,s=n.children,o=this.state.spanning;return h.a.createElement("div",{className:b()("span-loading",(e={},r()(e,"span-loading-".concat(i),i),r()(e,t,t),e)),style:a},o?h.a.createElement("span",{className:"span-loading-dot ".concat(i||"")},h.a.createElement("i",null),h.a.createElement("i",null),h.a.createElement("i",null),h.a.createElement("i",null)):null,s,l?h.a.createElement("div",{className:"span-loading-text"},l):null)}}]),t}(g.Component);N.propTypes={children:v.a.any,className:v.a.string,style:v.a.object,spanning:v.a.bool,tip:v.a.string,size:v.a.string,delay:v.a.number,description:v.a.any},N.defaultProps={spanning:!0,tip:"",type:""};var w=N},606:function(e){e.exports=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"spanning":{"type":"PropTypes.bool","desc":"If true,will show a span loading animation.","default":"true"},"tip":{"type":"PropTypes.string","desc":"Set the tip text,there will be a description under the loading.","default":""},"size":{"type":"PropTypes.string","desc":"Set the size of loading,can use small or large."},"delay":{"type":"PropTypes.number","desc":"Set the delay time of loading animation."},"description":{"type":"PropTypes.any"}}')},607:function(e,n,t){"use strict";var a=t(60),r=t.n(a)()((function(e){return e[1]}));r.push([e.i,".span-loading-examples .example-span-loading {\n  text-align: center;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  padding: 30px 50px;\n  margin: 20px 0;\n  position: relative; }\n\n.span-loading-examples .span-loading-nested {\n  width: 100%; }\n  .span-loading-examples .span-loading-nested .span-loading-dot {\n    position: absolute;\n    top: calc(50% - 10px);\n    left: calc(50% - 10px);\n    z-index: 60; }\n\n.span-loading-examples .span-loading-info {\n  border: 1px solid #7eccf2;\n  background-color: white;\n  padding: 20px 0;\n  position: relative;\n  width: 100%; }\n  .span-loading-examples .span-loading-info.span-loading-blur {\n    overflow: hidden;\n    opacity: .7;\n    -webkit-filter: blur(0.5px);\n            filter: blur(0.5px); }\n  .span-loading-examples .span-loading-info .span-loading-message {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.55);\n    display: block;\n    margin-bottom: 10px; }\n  .span-loading-examples .span-loading-info .span-loading-content {\n    display: block; }\n\n.span-loading-examples .switcher-con {\n  padding: 30px 0 20px 10px; }\n  .span-loading-examples .switcher-con span {\n    float: left; }\n  .span-loading-examples .switcher-con .switcher {\n    float: left;\n    margin-left: 20px; }\n",""]),n.a=r},719:function(e,n,t){"use strict";t.r(n);var a=t(54),r=t.n(a),l=t(55),i=t.n(l),s=t(19),o=t.n(s),c=t(56),p=t.n(c),d=t(57),u=t.n(d),m=t(38),f=t.n(m),g=t(9),h=t.n(g),y=t(0),v=t.n(y),E=t(389),b=t(240),x=t(241),N=t(298),w=t(236),S=t(606),P=t(59),R=t.n(P),L=t(607),T={insert:"head",singleton:!1};R()(L.a,T),L.a.locals;function O(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=f()(e);if(n){var r=f()(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return u()(this,t)}}var D=function(e){p()(t,e);var n=O(t);function t(e){var a;return r()(this,t),a=n.call(this,e),h()(o()(a),"toggle",(function(e,n){a.setState(h()({},"loading".concat(n),!a.state["loading".concat(n)]))})),a.state={loading1:!1,loading2:!1},a}return i()(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.loading1,a=n.loading2;return v.a.createElement("div",{className:"example span-loading-examples"},v.a.createElement("h2",{className:"example-title"},"SpanLoading"),v.a.createElement("p",null,v.a.createElement("span",null,"SpanLoading")," use to show pages and blocks loading status."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"A simple SpanLoading example."),v.a.createElement(E.a,{spanning:!0})))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"With description"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"description")," property to add a description for SpanLoading."),v.a.createElement(E.a,{spanning:!0,description:"Loading..."})))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"With size"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"size")," property to small or large for different size SpanLoading."),v.a.createElement(E.a,{spanning:!0,size:"small"}),v.a.createElement(E.a,{spanning:!0}),v.a.createElement(E.a,{spanning:!0,size:"large"})))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading Inside Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Put SpanLoading inside a container."),v.a.createElement("div",{className:"example-span-loading"},v.a.createElement(E.a,{spanning:!0}))))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading nested Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"You can embed the contents directly into SpanLoading and change the existing containers to loaded states."),v.a.createElement(E.a,{spanning:t,className:"span-loading-nested"},v.a.createElement("div",{className:"span-loading-info ".concat(t?"span-loading-blur":"")},v.a.createElement("span",{className:"span-loading-message"},"Alert message title"),v.a.createElement("span",{className:"span-loading-description"},"Further details about the context of this alert."))),v.a.createElement("div",{className:"switcher-con"},v.a.createElement("span",null,"Loading state："),v.a.createElement(N.a,{value:t,onChange:function(n){e.toggle(n,1)}}))))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"With delay"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"delay")," property to delay the loading animation."),v.a.createElement(E.a,{spanning:a,delay:1e3,className:"span-loading-nested"},v.a.createElement("div",{className:"span-loading-info ".concat(a?"span-loading-blur":"")},v.a.createElement("span",{className:"span-loading-description"},"Delay the loading animation."))),v.a.createElement("div",{className:"switcher-con"},v.a.createElement("span",null,"Loading state："),v.a.createElement(N.a,{value:a,onChange:function(n){e.toggle(n,2)}}))))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(w.a,{data:S}))}}]),t}(y.Component);n.default=D}}]);
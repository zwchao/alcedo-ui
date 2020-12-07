(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5390],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(23645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=r},63417:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(23645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,".span-loading-examples .example-span-loading {\n  text-align: center;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  padding: 30px 50px;\n  margin: 20px 0;\n  position: relative; }\n\n.span-loading-examples .span-loading-nested {\n  width: 100%; }\n  .span-loading-examples .span-loading-nested .span-loading-dot {\n    position: absolute;\n    top: calc(50% - 10px);\n    left: calc(50% - 10px);\n    z-index: 60; }\n\n.span-loading-examples .span-loading-info {\n  border: 1px solid #7eccf2;\n  background-color: white;\n  padding: 20px 0;\n  position: relative;\n  width: 100%; }\n  .span-loading-examples .span-loading-info.span-loading-blur {\n    overflow: hidden;\n    opacity: .7;\n    -webkit-filter: blur(0.5px);\n            filter: blur(0.5px); }\n  .span-loading-examples .span-loading-info .span-loading-message {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.55);\n    display: block;\n    margin-bottom: 10px; }\n  .span-loading-examples .span-loading-info .span-loading-content {\n    display: block; }\n\n.span-loading-examples .switcher-con {\n  padding: 30px 0 20px 10px; }\n  .span-loading-examples .switcher-con span {\n    float: left; }\n  .span-loading-examples .switcher-con .switcher {\n    float: left;\n    margin-left: 20px; }\n",""]);const l=r},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var a=n(34575),r=n.n(a),l=n(93913),i=n.n(l),s=n(81506),o=n.n(s),c=n(2205),p=n.n(c),d=n(78585),u=n.n(d),m=n(29754),f=n.n(m),g=n(59713),h=n.n(g),y=n(37699),v=n(45697),E=n.n(v),b=n(21940),x=n(93379),N=n.n(x),Z=n(29250);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}N()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals;var P=function(e){p()(l,e);var t,n,a=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=f()(t);if(n){var r=f()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return u()(this,e)});function l(e){var t;return r()(this,l),t=a.call(this,e),h()(o()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(S({name:n},t.props.data[n]));return e})),t}return i()(l,[{key:"render",value:function(){return y.createElement("div",{className:"prop-type-desc-table-wrapper"},y.createElement(b.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),l}(y.Component);P.propTypes={data:E().object};const R=P},18238:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var a=n(34575),r=n.n(a),l=n(93913),i=n.n(l),s=n(81506),o=n.n(s),c=n(2205),p=n.n(c),d=n(78585),u=n.n(d),m=n(29754),f=n.n(m),g=n(59713),h=n.n(g),y=n(37699),v=n(92653),E=n(24471),b=n(50704),x=n(54084),N=n(22356);const Z=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"spanning":{"type":"PropTypes.bool","desc":"If true,will show a span loading animation.","default":"true"},"tip":{"type":"PropTypes.string","desc":"Set the tip text,there will be a description under the loading.","default":""},"size":{"type":"PropTypes.string","desc":"Set the size of loading,can use small or large."},"description":{"type":"PropTypes.any"}}');var w=n(93379),S=n.n(w),P=n(63417);S()(P.Z,{insert:"head",singleton:!1}),P.Z.locals;const R=function(e){p()(l,e);var t,n,a=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=f()(t);if(n){var r=f()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return u()(this,e)});function l(e){var t;return r()(this,l),t=a.call(this,e),h()(o()(t),"toggle",(function(e,n){t.setState(h()({},"loading".concat(n),!t.state["loading".concat(n)]))})),t.state={loading1:!1,loading2:!1},t}return i()(l,[{key:"render",value:function(){var e=this,t=this.state,n=t.loading1;return t.loading2,y.createElement("div",{className:"example span-loading-examples"},y.createElement("h2",{className:"example-title"},"SpanLoading"),y.createElement("p",null,y.createElement("span",null,"SpanLoading")," use to show pages and blocks loading status."),y.createElement("h2",{className:"example-title"},"Examples"),y.createElement(E.Z,null,y.createElement(b.Z,{className:"example-header",title:"SpanLoading Example"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"A simple SpanLoading example."),y.createElement(v.Z,{spanning:!0})))),y.createElement(E.Z,null,y.createElement(b.Z,{className:"example-header",title:"With description"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"Set the ",y.createElement("code",null,"description")," property to add a description for SpanLoading."),y.createElement(v.Z,{spanning:!0,description:"Loading..."})))),y.createElement(E.Z,null,y.createElement(b.Z,{className:"example-header",title:"With size"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"Set the ",y.createElement("code",null,"size")," property to small or large for different size SpanLoading."),y.createElement(v.Z,{spanning:!0,size:"small"}),y.createElement(v.Z,{spanning:!0}),y.createElement(v.Z,{spanning:!0,size:"large"})))),y.createElement(E.Z,null,y.createElement(b.Z,{className:"example-header",title:"SpanLoading Inside Example"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"Put SpanLoading inside a container."),y.createElement("div",{className:"example-span-loading"},y.createElement(v.Z,{spanning:!0}))))),y.createElement(E.Z,null,y.createElement(b.Z,{className:"example-header",title:"SpanLoading nested Example"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"You can embed the contents directly into SpanLoading and change the existing containers to loaded states."),y.createElement(v.Z,{spanning:n,className:"span-loading-nested"},y.createElement("div",{className:"span-loading-info ".concat(n?"span-loading-blur":"")},y.createElement("span",{className:"span-loading-message"},"Alert message title"),y.createElement("span",{className:"span-loading-description"},"Further details about the context of this alert."))),y.createElement("div",{className:"switcher-con"},y.createElement("span",null,"Loading state："),y.createElement(x.Z,{value:n,onChange:function(t){e.toggle(t,1)}}))))),y.createElement("h2",{className:"example-title"},"Properties"),y.createElement(N.Z,{data:Z}))}}]),l}(y.Component)},92653:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var a=n(59713),r=n.n(a),l=n(34575),i=n.n(l),s=n(93913),o=n.n(s),c=n(2205),p=n.n(c),d=n(78585),u=n.n(d),m=n(29754),f=n.n(m),g=n(37699),h=n(45697),y=n.n(h),v=n(41844),E=n.n(v),b=n(19605);var x=function(e){p()(l,e);var t,n,a=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=f()(t);if(n){var r=f()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return u()(this,e)});function l(e){var t;i()(this,l);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return(t=a.call.apply(a,[this,e].concat(r))).state={spanning:e.spanning},t}return o()(l,null,[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,spanning:b.Z.getDerivedState(e,t,"spanning")}}}]),o()(l,[{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.style,l=t.description,i=t.size,s=t.children,o=this.state.spanning;return g.createElement("div",{className:E()("span-loading",(e={},r()(e,"span-loading-".concat(i),i),r()(e,n,n),e)),style:a},o?g.createElement("span",{className:"span-loading-dot ".concat(i||"")},g.createElement("i",null),g.createElement("i",null),g.createElement("i",null),g.createElement("i",null)):null,s,l?g.createElement("div",{className:"span-loading-text"},l):null)}}]),l}(g.Component);x.propTypes={children:y().any,className:y().string,style:y().object,spanning:y().bool,tip:y().string,size:y().string,description:y().any},x.defaultProps={spanning:!0,tip:"",type:""};const N=x},54084:(e,t,n)=>{"use strict";n.d(t,{Z:()=>T});var a=n(67154),r=n.n(a),l=n(6479),i=n.n(l),s=n(34575),o=n.n(s),c=n(93913),p=n.n(c),d=n(81506),u=n.n(d),m=n(2205),f=n.n(m),g=n(78585),h=n.n(g),y=n(29754),v=n.n(y),E=n(59713),b=n.n(E),x=n(37699),N=n(45697),Z=n.n(N),w=n(41844),S=n.n(w),P=n(96453),R=n(65059),L=n(88787),O=n(87712),D=n(65248),k=n(81540),C=n(19605);var z=function(e){f()(l,e);var t,n,a=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=v()(t);if(n){var r=v()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return h()(this,e)});function l(e){var t;o()(this,l);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t=a.call.apply(a,[this,e].concat(r)),b()(u()(t),"handleClick",(function(e){var n=t.props,a=n.disabled,r=n.isLoading,l=n.beforeChange,i=n.onClick;if(!a&&!r){i&&i(e);var s=!t.state.value,o=function(){t.setState({value:s},(function(){var n=t.props.onChange;n&&n(s,e)}))};l?!1!==l(s)&&o():o()}})),t.state={value:!!e.value},t}return p()(l,[{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.style,s=t.theme,o=t.disabled,c=t.isLoading,p=t.size,d=t.labelVisible,u=t.tip,m=t.triggerEl,f=t.parentEl,g=t.tipPosition,h=(t.beforeChange,i()(t,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),y=this.state.value;return x.createElement(L.Z,{tipContent:u,triggerEl:m,parentEl:f,position:g},x.createElement("div",r()({},h,{className:S()("switcher",(e={activated:y,small:p===l.Size.SMALL},b()(e,"theme-".concat(s),s),b()(e,n,n),e)),style:a,disabled:o||c,onClick:this.handleClick}),d?x.createElement("div",{className:"switcher-label"}):null,x.createElement(P.Z,{className:"switcher-slider-wrapper",disableTouchRipple:o||c},x.createElement("div",{className:"switcher-slider"},c?x.createElement(R.Z,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:C.Z.getDerivedState(e,t,"value")}}}]),l}(x.Component);b()(z,"Size",{DEFAULT:"",SMALL:"small"}),b()(z,"Theme",O.Z),z.propTypes={className:Z().string,style:Z().object,theme:Z().oneOf(k.Z.enumerateValue(O.Z)),value:Z().bool,disabled:Z().bool,isLoading:Z().bool,labelVisible:Z().bool,size:Z().oneOf(k.Z.enumerateValue(z.Size)),tip:Z().string,tipPosition:Z().oneOf(k.Z.enumerateValue(D.Z)),triggerEl:Z().object,parentEl:Z().object,onClick:Z().func,beforeChange:Z().func,onChange:Z().func},z.defaultProps={theme:O.Z.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:z.Size.DEFAULT,tipPosition:D.Z.BOTTOM};const T=z}}]);
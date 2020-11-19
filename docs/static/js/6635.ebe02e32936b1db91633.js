(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6635],{29250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=a},51522:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,'.switcher-examples .field-group {\n  float: none; }\n  .switcher-examples .field-group::before, .switcher-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .switcher-examples .field-group::after {\n    clear: both; }\n\n.switcher-examples .switcher-ctrl {\n  margin: 16px 16px 0 0; }\n',""]);const l=a},22356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(34575),a=r.n(n),l=r(93913),s=r.n(l),c=r(81506),i=r.n(c),o=r(2205),p=r.n(o),u=r(78585),f=r.n(u),d=r(29754),m=r.n(d),h=r(59713),y=r.n(h),v=r(37699),b=r(45697),E=r.n(b),g=r(21940),w=r(93379),Z=r.n(w),T=r(29250);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Z()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;var N=function(e){p()(l,e);var t,r,n=(t=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(r){var a=m()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function l(e){var t;return a()(this,l),t=n.call(this,e),y()(i()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(S({name:r},t.props.data[r]));return e})),t}return s()(l,[{key:"render",value:function(){return v.createElement("div",{className:"prop-type-desc-table-wrapper"},v.createElement(g.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),l}(v.Component);N.propTypes={data:E().object};const x=N},64299:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(34575),a=r.n(n),l=r(93913),s=r.n(l),c=r(81506),i=r.n(c),o=r(2205),p=r.n(o),u=r(78585),f=r.n(u),d=r(29754),m=r.n(d),h=r(59713),y=r.n(h),v=r(37699),b=r(54084),E=r(24471),g=r(50704),w=r(22944),Z=r(22356);const T=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The Switcher theme.","default":"Theme.DEFAULT"},"value":{"type":"PropTypes.bool","desc":"If true,the switcher will be in active status.","default":"false"},"disabled":{"type":"PropTypes.bool","desc":"Disables the switcher if set to true.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true,the switcher will be have loading effect.","default":"false"},"labelVisible":{"type":"PropTypes.bool","default":"false"},"size":{"type":"PropTypes.oneOf","desc":"The size of switcher.The value can be small or default.","default":"Switcher.Size.DEFAULT"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"Position.BOTTOM"},"triggerEl":{"type":"PropTypes.object"},"parentEl":{"type":"PropTypes.object"},"onClick":{"type":"PropTypes.func","desc":"Callback function fired when the switcher touch-tapped."},"beforeChange":{"type":"PropTypes.func","desc":"Callback function fired before the switcher touch-tapped."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the switcher touch-tapped."}}');var P=r(93379),S=r.n(P),N=r(51522);S()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;const x=function(e){p()(l,e);var t,r,n=(t=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(r){var a=m()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function l(e){var t;return a()(this,l),t=n.call(this,e),y()(i()(t),"updateValue",(function(e){t.setState({value:e})})),y()(i()(t),"setActive",(function(){t.setState({value:!0})})),y()(i()(t),"setInactive",(function(){t.setState({value:!1})})),t.state={value:!0},t}return s()(l,[{key:"render",value:function(){var e=this.state.value;return v.createElement("div",{className:"example switcher-examples"},v.createElement("h2",{className:"example-title"},"Switcher"),v.createElement("p",null,"A ",v.createElement("span",null,"Switcher")," is used as an on/off control."),v.createElement("h2",{className:"example-title"},"Examples"),v.createElement(E.Z,null,v.createElement(g.Z,{className:"example-header",title:"Switcher Example"}),v.createElement("div",{className:"widget-content"},v.createElement("div",{className:"example-content"},v.createElement("div",{className:"examples-wrapper"},v.createElement("p",null,"Switcher simple example.Set the value property to true for active status."),v.createElement(b.Z,{value:e,onChange:this.updateValue}),v.createElement("br",null),v.createElement(w.Z,{className:"switcher-ctrl",value:"On",onClick:this.setActive}),v.createElement(w.Z,{className:"switcher-ctrl",value:"Off",onClick:this.setInactive}))))),v.createElement(E.Z,null,v.createElement(g.Z,{className:"example-header",title:"Switcher Size Example"}),v.createElement("div",{className:"widget-content"},v.createElement("div",{className:"example-content"},v.createElement("div",{className:"examples-wrapper"},v.createElement("p",null,"Set the size property to small for small size switcher."),v.createElement(b.Z,{theme:b.Z.Theme.HIGHLIGHT,size:b.Z.Size.SMALL}))))),v.createElement(E.Z,null,v.createElement(g.Z,{className:"example-header",title:"Other Config"}),v.createElement("div",{className:"widget-content"},v.createElement("div",{className:"example-content"},v.createElement("div",{className:"examples-wrapper"},v.createElement("p",null,"Display a hint icon."),v.createElement(b.Z,{theme:b.Z.Theme.HIGHLIGHT,labelVisible:!0}))))),v.createElement(E.Z,null,v.createElement(g.Z,{className:"example-header",title:"Switcher Disabled Example"}),v.createElement("div",{className:"widget-content"},v.createElement("div",{className:"example-content"},v.createElement("div",{className:"examples-wrapper"},v.createElement("p",null,"Set the disabled property to true for disabled props applied."),v.createElement(b.Z,{disabled:!0,tip:"Disabled"}),v.createElement("br",null),v.createElement(b.Z,{value:!0,disabled:!0,tip:"Disabled"}))))),v.createElement("h2",{className:"example-title"},"Properties"),v.createElement(Z.Z,{data:T}))}}]),l}(v.Component)},54084:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(67154),a=r.n(n),l=r(6479),s=r.n(l),c=r(34575),i=r.n(c),o=r(93913),p=r.n(o),u=r(81506),f=r.n(u),d=r(2205),m=r.n(d),h=r(78585),y=r.n(h),v=r(29754),b=r.n(v),E=r(59713),g=r.n(E),w=r(37699),Z=r(45697),T=r.n(Z),P=r(41844),S=r.n(P),N=r(96453),x=r(65059),O=r(88787),C=r(87712),D=r(65248),R=r(81540),k=r(19605);var L=function(e){m()(l,e);var t,r,n=(t=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=b()(t);if(r){var a=b()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return y()(this,e)});function l(e){var t;i()(this,l);for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return t=n.call.apply(n,[this,e].concat(a)),g()(f()(t),"handleClick",(function(e){var r=t.props,n=r.disabled,a=r.isLoading,l=r.beforeChange,s=r.onClick;if(!n&&!a){s&&s(e);var c=!t.state.value,i=function(){t.setState({value:c},(function(){var r=t.props.onChange;r&&r(c,e)}))};l?!1!==l(c)&&i():i()}})),t.state={value:!!e.value},t}return p()(l,[{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.style,c=t.theme,i=t.disabled,o=t.isLoading,p=t.size,u=t.labelVisible,f=t.tip,d=t.triggerEl,m=t.parentEl,h=t.tipPosition,y=(t.beforeChange,s()(t,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),v=this.state.value;return w.createElement(O.Z,{tipContent:f,triggerEl:d,parentEl:m,position:h},w.createElement("div",a()({},y,{className:S()("switcher",(e={activated:v,small:p===l.Size.SMALL},g()(e,"theme-".concat(c),c),g()(e,r,r),e)),style:n,disabled:i||o,onClick:this.handleClick}),u?w.createElement("div",{className:"switcher-label"}):null,w.createElement(N.Z,{className:"switcher-slider-wrapper",disableTouchRipple:i||o},w.createElement("div",{className:"switcher-slider"},o?w.createElement(x.Z,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:k.Z.getDerivedState(e,t,"value")}}}]),l}(w.Component);g()(L,"Size",{DEFAULT:"",SMALL:"small"}),g()(L,"Theme",C.Z),L.propTypes={className:T().string,style:T().object,theme:T().oneOf(R.Z.enumerateValue(C.Z)),value:T().bool,disabled:T().bool,isLoading:T().bool,labelVisible:T().bool,size:T().oneOf(R.Z.enumerateValue(L.Size)),tip:T().string,tipPosition:T().oneOf(R.Z.enumerateValue(D.Z)),triggerEl:T().object,parentEl:T().object,onClick:T().func,beforeChange:T().func,onChange:T().func},L.defaultProps={theme:C.Z.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:L.Size.DEFAULT,tipPosition:D.Z.BOTTOM};const j=L}}]);
"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5295],{59141:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const s=a},41052:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".arrow-step-examples .step-ctrls{margin:30px 0 10px 0}.arrow-step-examples .step-ctrls .raised-button{margin-right:30px}",""]);const s=a},1116:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(6610),a=r(5991),s=r(63349),i=r(10379),c=r(46070),o=r(77608),l=r(96156),p=r(37699),u=r(45697),f=r.n(u),d=r(82996),h=r(93379),v=r.n(h),m=r(7795),y=r.n(m),b=r(90569),S=r.n(b),g=r(3565),Z=r.n(g),O=r(19216),w=r.n(O),P=r(44589),E=r.n(P),j=r(59141),N={};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}N.styleTagTransform=E(),N.setAttributes=Z(),N.insert=S().bind(null,"head"),N.domAPI=y(),N.insertStyleElement=w(),v()(j.Z,N),j.Z&&j.Z.locals&&j.Z.locals;var C=function(e){(0,i.Z)(f,e);var t,r,u=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,n.Z)(this,f),t=u.call(this,e),(0,l.Z)((0,s.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(R({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(f,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(p.Component);C.propTypes={data:f().object};const k=C},75933:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(6610),a=r(5991),s=r(63349),i=r(10379),c=r(46070),o=r(77608),l=r(96156),p=r(37699),u=r(9131),f=r(22944),d=r(24471),h=r(50704),v=r(1116);const m=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"steps":{"type":"PropTypes.array","desc":"The render content of step.","default":"[]"},"activatedStep":{"type":"PropTypes.number","desc":"Sets the step as active.","default":"0"},"finishedStep":{"type":"PropTypes.number","desc":"The final step.","default":"0"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when step change."}}');var y=r(93379),b=r.n(y),S=r(7795),g=r.n(S),Z=r(90569),O=r.n(Z),w=r(3565),P=r.n(w),E=r(19216),j=r.n(E),N=r(44589),x=r.n(N),R=r(41052),C={};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}C.styleTagTransform=x(),C.setAttributes=P(),C.insert=O().bind(null,"head"),C.domAPI=g(),C.insertStyleElement=j(),b()(R.Z,C),R.Z&&R.Z.locals&&R.Z.locals;const D=function(e){(0,i.Z)(b,e);var t,r,y=(t=b,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function b(e){var t;return(0,n.Z)(this,b),t=y.call(this,e),(0,l.Z)((0,s.Z)(t),"updateStep",(function(e){t.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))})),(0,l.Z)((0,s.Z)(t),"prev",(function(){t.setState({activatedStep:t.state.activatedStep-1})})),(0,l.Z)((0,s.Z)(t),"next",(function(){var e=t.state.activatedStep+1,r=t.state.finishedStep>e?t.state.finishedStep:e;t.setState({activatedStep:e,finishedStep:r})})),(0,l.Z)((0,s.Z)(t),"reset",(function(){t.setState({activatedStep:0,finishedStep:0})})),t.state={activatedStep:0,finishedStep:0},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this.state,t=e.activatedStep,r=e.finishedStep,n=[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4"}];return p.createElement("div",{className:"example arrow-step-examples"},p.createElement("h2",{className:"example-title"},"ArrowStep"),p.createElement("p",null,"A ",p.createElement("span",null,"ArrowStep")," is an interface for users to show numbered steps or for navigation. It just provides views, not handling logic (when the step is active, or when the step is completed, or how to move to the next step)."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(d.Z,null,p.createElement(h.Z,{className:"example-header",title:"ArrowStep Example"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("p",null,"A simple ",p.createElement("code",null,"ArrowStep")," example."),p.createElement(u.Z,{steps:n,activatedStep:t,finishedStep:r,onChange:this.updateStep}),p.createElement("div",{className:"step-ctrls"},p.createElement(f.Z,{value:"Prev",iconCls:"fas fa-angle-left",disabled:t<=0,onClick:this.prev}),p.createElement(f.Z,{value:t<n.length-1?"Next":"Finish",rightIconCls:t<n.length-1?"fas fa-angle-right":"",disabled:t>=n.length,onClick:this.next}),p.createElement(f.Z,{value:"Reset",iconCls:"fas fa-undo",onClick:this.reset}))))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(v.Z,{data:m}))}}]),b}(p.Component)},9131:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(6610),a=r(5991),s=r(63349),i=r(10379),c=r(46070),o=r(77608),l=r(96156),p=r(37699),u=r(45697),f=r.n(u),d=r(41844),h=r.n(d);var v=function(e){(0,i.Z)(f,e);var t,r,u=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,n.Z)(this,f);for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return t=u.call.apply(u,[this,e].concat(a)),(0,l.Z)((0,s.Z)(t),"handleClick",(function(e){var r=t.props,n=r.isActivatedStep,a=r.isFinishedStep,s=r.index,i=r.onClick;!n&&a&&i&&i(s,e)})),t}return(0,a.Z)(f,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,n=e.isActivatedStep,a=e.isFinishedStep,s=e.index,i=e.value,c=e.isFirst,o=e.isLast,u=n?"activated":a?"finished":"";return p.createElement("div",{className:h()("arrow-step-item",n?"activated":a?"finished":"",(0,l.Z)({first:c,last:o},t,t)),style:r,onClick:this.handleClick},p.createElement("div",{className:"arrow-step-item-content"},p.createElement("div",{className:"number"},s+1),p.createElement("div",{className:"title"},i.title)),c?null:p.createElement("div",{className:"triangle-wrapper triangle-wrapper-left"},p.createElement("div",{className:h()("triangle-top",u)}),p.createElement("div",{className:h()("triangle-bottom",u)})),o?null:p.createElement("div",{className:"triangle-wrapper triangle-wrapper-right"},p.createElement("div",{className:h()("triangle-middle",u)})))}}]),f}(p.Component);v.propTypes={className:f().string,style:f().object,index:f().number,isActivatedStep:f().bool,isFinishedStep:f().bool,value:f().object,isFirst:f().bool,isLast:f().bool,onClick:f().func},v.defaultProps={index:0,isActivatedStep:!1,isFinishedStep:!1,isFirst:!0,isLast:!0};const m=v;var y=r(19605);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){(0,i.Z)(f,e);var t,r,u=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,n.Z)(this,f);for(var r=arguments.length,a=new Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return t=u.call.apply(u,[this,e].concat(a)),(0,l.Z)((0,s.Z)(t),"handleClick",(function(e){var r=t.props.onChange;t.setState({activatedStep:e},(function(){r&&r({activatedStep:e,finishedStep:t.state.finishedStep})}))})),t.state={activatedStep:e.activatedStep,finishedStep:e.finishedStep},t}return(0,a.Z)(f,[{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.style,a=t.steps,s=this.state,i=s.activatedStep,c=s.finishedStep;return p.createElement("div",{className:h()("arrow-step",(0,l.Z)({},r,r)),style:n},a&&a.map((function(t,r){return p.createElement(m,{key:r,index:r,className:t.className,style:S(S({},t.style),{},{width:"".concat(100/a.length,"%"),zIndex:a.length-r}),isActivatedStep:i===r,isFinishedStep:c>=r,value:t,isFirst:0===r,isLast:r===a.length-1,onClick:e.handleClick})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,activatedStep:y.Z.getDerivedState(e,t,"activatedStep"),finishedStep:y.Z.getDerivedState(e,t,"finishedStep")}}}]),f}(p.Component);g.propTypes={className:f().string,style:f().object,steps:f().arrayOf(f().shape({className:f().string,style:f().object,title:f().string})).isRequired,activatedStep:f().number,finishedStep:f().number,onChange:f().func},g.defaultProps={steps:[],activatedStep:0,finishedStep:0};const Z=g}}]);
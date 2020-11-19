(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[8905],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const i=a},27503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".horizontal-point-step-examples .step-ctrls {\n  margin: 30px 0 10px 0; }\n  .horizontal-point-step-examples .step-ctrls .raised-button {\n    margin-right: 30px; }\n",""]);const i=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(34575),a=n.n(r),i=n(93913),s=n.n(i),c=n(81506),o=n.n(c),l=n(2205),p=n.n(l),u=n(78585),d=n.n(u),f=n(29754),h=n.n(f),v=n(59713),m=n.n(v),y=n(37699),S=n(45697),b=n.n(S),g=n(21940),P=n(93379),O=n.n(P),E=n(29250);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}O()(E.Z,{insert:"head",singleton:!1}),E.Z.locals;var j=function(e){p()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function i(e){var t;return a()(this,i),t=r.call(this,e),m()(o()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(x({name:n},t.props.data[n]));return e})),t}return s()(i,[{key:"render",value:function(){return y.createElement("div",{className:"prop-type-desc-table-wrapper"},y.createElement(g.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),i}(y.Component);j.propTypes={data:b().object};const w=j},61905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(34575),a=n.n(r),i=n(93913),s=n.n(i),c=n(81506),o=n.n(c),l=n(2205),p=n.n(l),u=n(78585),d=n.n(u),f=n(29754),h=n.n(f),v=n(59713),m=n.n(v),y=n(37699),S=n(69929),b=n(22944),g=n(24471),P=n(50704),O=n(22356);const E=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"steps":{"type":"PropTypes.array","desc":"The render content of step."},"activatedStep":{"type":"PropTypes.number","desc":"Sets the step as active.","default":"0"},"finishedStep":{"type":"PropTypes.number","desc":"The final step.","default":"0"},"disabled":{"type":"PropTypes.bool","default":"false"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when step change."}}');var R=n(93379),x=n.n(R),j=n(27503);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}x()(j.Z,{insert:"head",singleton:!1}),j.Z.locals;const N=function(e){p()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function i(e){var t;return a()(this,i),t=r.call(this,e),m()(o()(t),"updateStep",(function(e){t.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))})),m()(o()(t),"prev",(function(){t.setState({activatedStep:t.state.activatedStep-1})})),m()(o()(t),"next",(function(){var e=t.state.activatedStep+1,n=t.state.finishedStep>e?t.state.finishedStep:e;t.setState({activatedStep:e,finishedStep:n})})),m()(o()(t),"reset",(function(){t.setState({activatedStep:0,finishedStep:0})})),t.state={activatedStep:0,finishedStep:0},t}return s()(i,[{key:"render",value:function(){var e=this.state,t=e.activatedStep,n=e.finishedStep,r=[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4"}];return y.createElement("div",{className:"example horizontal-point-step-examples"},y.createElement("h2",{className:"example-title"},"VerticalPointStep"),y.createElement("p",null,"A ",y.createElement("span",null,"VerticalPointStep")," is an interface for users to show linear steps or for navigation.It just provides views, not handling logic (when the step is active, or when the step is completed, or how to move to the next step)."),y.createElement("h2",{className:"example-title"},"Examples"),y.createElement(g.Z,null,y.createElement(P.Z,{className:"example-header",title:"VerticalPointStep Example"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("p",null,"A simple ",y.createElement("code",null,"VerticalPointStep")," example."),y.createElement(S.Z,{steps:r,activatedStep:t,finishedStep:n,onChange:this.updateStep}),y.createElement("div",{className:"step-ctrls"},y.createElement(b.Z,{value:"Prev",iconCls:"fas fa-angle-left",disabled:t<=0,onClick:this.prev}),y.createElement(b.Z,{value:t<r.length-1?"Next":"Finish",rightIconCls:t<r.length-1?"fas fa-angle-right":"",disabled:t>=r.length,onClick:this.next}),y.createElement(b.Z,{value:"Reset",iconCls:"fas fa-undo",onClick:this.reset}))))),y.createElement("h2",{className:"example-title"},"Properties"),y.createElement(O.Z,{data:E}))}}]),i}(y.Component)},69929:(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=n(34575),a=n.n(r),i=n(81506),s=n.n(i),c=n(93913),o=n.n(c),l=n(2205),p=n.n(l),u=n(78585),d=n.n(u),f=n(29754),h=n.n(f),v=n(59713),m=n.n(v),y=n(37699),S=n(45697),b=n.n(S),g=n(41844),P=n.n(g);var O=function(e){p()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function i(e){var t;a()(this,i);for(var n=arguments.length,c=new Array(n>1?n-1:0),o=1;o<n;o++)c[o-1]=arguments[o];return t=r.call.apply(r,[this,e].concat(c)),m()(s()(t),"getRightBarClassName",(function(){var e=t.props,n=e.activatedStep,r=e.finishedStep,a=e.index;return r>a||n>a?" full":n===a||r===a?"":" hidden"})),m()(s()(t),"handleClick",(function(e){var n=t.props,r=n.activatedStep,a=n.finishedStep,i=n.index,s=n.disabled,c=n.onClick;!s&&r!==i&&a>=i&&c&&c(i,e)})),t}return o()(i,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.activatedStep,a=e.finishedStep,i=e.index,s=e.value,c=e.isFirst,o=e.isLast,l=e.disabled;return y.createElement("div",{className:P()("vertical-point-step-item",r==i?" activated":a>=i?" finished":"",m()({first:c,last:o,disabled:l},t,t)),style:n},y.createElement("div",{className:"bg-bar"}),y.createElement("div",{className:"bg-round"},y.createElement("div",{className:"round",onClick:this.handleClick})),y.createElement("div",{className:"title"},s.title))}}]),i}(y.Component);O.propTypes={className:b().string,style:b().object,activatedStep:b().number,finishedStep:b().number,index:b().number,value:b().object,isFirst:b().bool,isLast:b().bool,disabled:b().bool,onClick:b().func},O.defaultProps={activatedStep:0,finishedStep:0,index:0,value:{},isFirst:!0,isLast:!1,disabled:!1};const E=O;var R=n(19605);var x=function(e){p()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function i(e){var t;a()(this,i);for(var n=arguments.length,c=new Array(n>1?n-1:0),o=1;o<n;o++)c[o-1]=arguments[o];return t=r.call.apply(r,[this,e].concat(c)),m()(s()(t),"handleClick",(function(e){var n=t.props.onChange;t.setState({activatedStep:e},(function(){n&&n({activatedStep:e,finishedStep:t.state.finishedStep})}))})),t.state={activatedStep:e.activatedStep,finishedStep:e.finishedStep},t}return o()(i,null,[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,activatedStep:R.Z.getDerivedState(e,t,"activatedStep"),finishedStep:R.Z.getDerivedState(e,t,"finishedStep")}}}]),o()(i,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,a=t.steps,i=t.disabled,s=this.state,c=s.activatedStep,o=s.finishedStep;return y.createElement("div",{className:P()("vertical-point-step",m()({},n,n)),style:r},a&&a.map((function(t,n){return y.createElement(E,{key:n,index:n,className:t.className,style:t.style,activatedStep:c,finishedStep:o,value:t,isFirst:0===n,isLast:n===a.length-1,disabled:i,onClick:e.handleClick})})))}}]),i}(y.Component);x.propTypes={className:b().string,style:b().object,steps:b().arrayOf(b().shape({className:b().string,style:b().object,title:b().string})).isRequired,activatedStep:b().number,finishedStep:b().number,disabled:b().bool,onChange:b().func},x.defaultProps={activatedStep:0,finishedStep:0,disabled:!1};const j=x}}]);
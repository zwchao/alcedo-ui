(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[3883],{29250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(23645),c=r.n(n)()((function(e){return e[1]}));c.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const a=c},77273:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(23645),c=r.n(n)()((function(e){return e[1]}));c.push([e.id,".circular-progress-examples .example-content {\n  overflow: hidden; }\n  .circular-progress-examples .example-content > div {\n    float: left;\n    margin-top: 10px;\n    margin-left: 50px; }\n",""]);const a=c},22356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(34575),c=r.n(n),a=r(93913),o=r.n(a),s=r(81506),l=r.n(s),i=r(2205),u=r.n(i),p=r(78585),f=r.n(p),m=r(29754),d=r.n(m),y=r(59713),h=r.n(y),b=r(37699),g=r(45697),v=r.n(g),w=r(21940),O=r(93379),E=r.n(O),P=r(29250);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}E()(P.Z,{insert:"head",singleton:!1}),P.Z.locals;var N=function(e){u()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d()(t);if(r){var c=d()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return f()(this,e)});function a(e){var t;return c()(this,a),t=n.call(this,e),h()(l()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(x({name:r},t.props.data[r]));return e})),t}return o()(a,[{key:"render",value:function(){return b.createElement("div",{className:"prop-type-desc-table-wrapper"},b.createElement(w.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(b.Component);N.propTypes={data:v().object};const S=N},53492:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var n=r(34575),c=r.n(n),a=r(93913),o=r.n(a),s=r(81506),l=r.n(s),i=r(2205),u=r.n(i),p=r(78585),f=r.n(p),m=r(29754),d=r.n(m),y=r(59713),h=r.n(y),b=r(37699),g=r(50811),v=r(24471),w=r(50704),O=r(22356);const E=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"percentStyle":{"type":"PropTypes.object","desc":"The style of the percent text description.","default":"{}"},"r":{"type":"PropTypes.number","desc":"The radius of the progress in pixels.","default":"48"},"width":{"type":"PropTypes.number","desc":"Stroke width in pixels.","default":"2"},"// rgba":{"type":"PropTypes.string","desc":"Override the progress\'s color.","default":"rgb(0, 188, 212)"},"percent":{"type":"PropTypes.number","desc":"The value of progress.","default":"0"},"word":{"type":"PropTypes.bool","desc":"If true,there will have a text description.","default":"true"}}');var P=r(93379),j=r.n(P),x=r(77273);j()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;const N=function(e){u()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d()(t);if(r){var c=d()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return f()(this,e)});function a(e){var t;return c()(this,a),t=n.call(this,e),h()(l()(t),"progress",(function(e){if(e>=90)t.setState({percent:100});else{var r=parseInt((10*Math.random()).toFixed(0));t.setState({percent:e+r}),t.timer=setTimeout((function(){return t.progress(e+r)}),1e3)}})),t.state={percent:0},t}return o()(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout((function(){return e.progress(0)}),1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){return b.createElement("div",{className:"example circular-progress-examples"},b.createElement("h2",{className:"example-title"},"Circular Progress"),b.createElement("p",null,b.createElement("span",null,"Circular Progress")," will rotate to show the progress of a task or that there is a wait for a task to complete."),b.createElement("h2",{className:"example-title"},"Examples"),b.createElement(v.Z,null,b.createElement(w.Z,{className:"example-header",title:"Circular Progress Example"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("p",null,"Circular Progress without percentage and text description."),b.createElement(g.Z,{r:50,width:10,rgba:"#38b1eb",percent:this.state.percent,word:!1},b.createElement("span",null,"百分比："))))),b.createElement(v.Z,null,b.createElement(w.Z,{className:"example-header",title:"Circular Progress Example"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("p",null,"Circular Progress without percentage description by default.Set the word property to true for percentage description."),b.createElement(g.Z,{r:20,width:3,rgba:"#38b1eb",percent:this.state.percent,word:!0})))),b.createElement(v.Z,null,b.createElement(w.Z,{className:"example-header",title:"Circular Progress Example"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("p",null,'Set the word property to true and include a "span" element in this component for percentage and text description.'),b.createElement(g.Z,{r:100,width:15,rgba:"#38b1eb",percent:this.state.percent,word:!0,percentStyle:{color:"#03a9f4"}},b.createElement("span",null,"已完成："))))),b.createElement("h2",{className:"example-title"},"Properties"),b.createElement(O.Z,{data:E}))}}]),a}(b.Component)},50811:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(59713),c=r.n(n),a=r(34575),o=r.n(a),s=r(93913),l=r.n(s),i=r(2205),u=r.n(i),p=r(78585),f=r.n(p),m=r(29754),d=r.n(m),y=r(37699),h=r(45697),b=r.n(h),g=r(41844),v=r.n(g),w=r(32043);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){u()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d()(t);if(r){var c=d()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return f()(this,e)});function a(e){var t;o()(this,a);for(var r=arguments.length,c=new Array(r>1?r-1:0),s=1;s<r;s++)c[s-1]=arguments[s];return(t=n.call.apply(n,[this,e].concat(c))).state={percent:[0,0]},t}return l()(a,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.style,a=e.r,o=e.width,s=e.word,l=e.percent,i=e.percentStyle,u=2*a*Math.PI,p=E(E({},n),{},{width:2*(a+o),height:2*(a+o)});return y.createElement("div",{className:v()("circular-progress",c()({},r,r)),style:p},y.createElement("svg",{className:"circular-progress-svg"},y.createElement("circle",{className:"circular-progress-circle",cx:a+o,cy:a+o,r:a,strokeWidth:o,fill:"none",style:{strokeDasharray:l/100*u+","+u}})),s?y.createElement(w.Z,{endNum:l,style:i},t):null)}}]),a}(y.Component);P.propTypes={children:b().any,className:b().string,style:b().object,percentStyle:b().object,r:b().number,width:b().number,percent:b().number,word:b().bool},P.defaultProps={percentStyle:{},r:48,width:2,percent:0,word:!0};const j=P},32043:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(34575),c=r.n(n),a=r(93913),o=r.n(a),s=r(81506),l=r.n(s),i=r(2205),u=r.n(i),p=r(78585),f=r.n(p),m=r(29754),d=r.n(m),y=r(59713),h=r.n(y),b=r(37699),g=r(45697),v=r.n(g),w=r(41844),O=r.n(w);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e){u()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=d()(t);if(r){var c=d()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return f()(this,e)});function a(e){var t;c()(this,a);for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return t=n.call.apply(n,[this,e].concat(o)),h()(l()(t),"numberChange",(function(){if(t.state.percent<100){if(t.state.percent<t.props.endNum){t.setState({percent:t.state.percent+1});var e=300/(t.props.endNum-t.state.percent);return void(t.timer=setTimeout((function(){return t.numberChange()}),e))}t.timer=setTimeout((function(){return t.numberChange()}),30)}})),t.state={percent:0},t}return o()(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout((function(){return e.numberChange()}),30)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.style,c=t.move,a=t.endNum,o=t.status,s=t.showIcon,l=t.successIcon,i=t.failureIcon,u=this.state.percent;return b.createElement("div",{className:O()("circular-progress-percent",(e={},h()(e,r,r),h()(e,o,o),e)),style:!0===c?P({width:a+"%",textAlign:"right"},n):n},b.Children.map(this.props.children,(function(e){return b.createElement("span",null,e)})),"loading"===o?b.createElement("span",null,u,"%"):null,s&&"success"===o?b.createElement("i",{className:l||"fa fa-check-circle"}):null,s&&"failure"===o?b.createElement("i",{className:i||"fa fa-times-circle"}):null)}}]),a}(b.Component);h()(j,"Status",{LOADING:"loading",SUCCESS:"success",FAILURE:"failure"}),j.propTypes={children:v().any,className:v().string,style:v().object,status:v().oneOf(Object.keys(j.Status).map((function(e){return j.Status[e]}))),endNum:v().number,move:v().bool,showIcon:v().string,successIcon:v().string,failureIcon:v().string},j.defaultProps={endNum:100,move:!1};const x=j}}]);
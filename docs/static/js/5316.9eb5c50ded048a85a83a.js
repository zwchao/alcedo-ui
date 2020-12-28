(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5316],{29250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const s=a},60900:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".linear-progress-examples .example-box {\n  margin: 50px;\n  padding: 0 0 20px;\n  overflow: hidden;\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px; }\n  .linear-progress-examples .example-box > h3 {\n    font-size: 16px;\n    color: #758697;\n    background-color: #e3eaf3;\n    margin: 0;\n    padding: 15px 20px; }\n  .linear-progress-examples .example-box > p {\n    margin-left: 20px;\n    font-size: 14px;\n    color: #4c637b; }\n",""]);const s=a},22356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>I});var n=r(34575),a=r.n(n),s=r(93913),o=r.n(s),c=r(81506),i=r.n(c),l=r(2205),p=r.n(l),u=r(78585),f=r.n(u),d=r(29754),h=r.n(d),m=r(59713),y=r.n(m),g=r(37699),v=r(45697),w=r.n(v),b=r(82996),x=r(93379),E=r.n(x),O=r(29250);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}E()(O.Z,{insert:"head",singleton:!1}),O.Z.locals;var S=function(e){p()(s,e);var t,r,n=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=h()(t);if(r){var a=h()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function s(e){var t;return a()(this,s),t=n.call(this,e),y()(i()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(P({name:r},t.props.data[r]));return e})),t}return o()(s,[{key:"render",value:function(){return g.createElement("div",{className:"prop-type-desc-table-wrapper"},g.createElement(b.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),s}(g.Component);S.propTypes={data:w().object};const I=S},30282:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var n=r(34575),a=r.n(n),s=r(93913),o=r.n(s),c=r(2205),i=r.n(c),l=r(78585),p=r.n(l),u=r(29754),f=r.n(u),d=r(37699),h=r(93284),m=r(24471),y=r(50704),g=r(22356);const v=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element.","default":"{"},"theme":{"type":"PropTypes.oneOf","desc":"The progress theme.Can be primary,highlight,success,warning,error."},"highlightWidth":{"type":"PropTypes.string","desc":"The highlight width of linearProgress.","default":"50%"},"word":{"type":"PropTypes.bool","desc":"If true,there will have a text description.","default":"false"},"wordStyle":{"type":"PropTypes.oneOf","desc":"The percent text location.Desirable values include front,middle,follow.","default":"LinearProgress.WordStyle.FRONT"},"animation":{"type":"PropTypes.bool","desc":"If true, the linearProgress will have animation.","default":"false"}}');var w=r(93379),b=r.n(w),x=r(60900);b()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;const E=function(e){i()(s,e);var t,r,n=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=f()(t);if(r){var a=f()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return p()(this,e)});function s(e){var t;return a()(this,s),(t=n.call(this,e)).state={percent:0},t}return o()(s,[{key:"progress",value:function(e){var t=this;if(e>=90)this.setState({percent:100});else{var r=parseInt((10*Math.random()).toFixed(0));this.setState({percent:e+r}),this.timer=setTimeout((function(){return t.progress(e+r)}),1e3)}}},{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout((function(){return e.progress(0)}),1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e={marginBottom:"20px"};return d.createElement("div",{className:"example linear-progress-examples"},d.createElement("h2",{className:"example-title"},"Linear Progress"),d.createElement("p",null,d.createElement("span",null,"Linear Progress")," bars fill from 0% to 100% to show the progress of a task. It also will animate to show there is a task waiting to be done."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(m.Z,null,d.createElement(y.Z,{className:"example-header",title:"Linear Progress Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"Linear Progress without percentage description."),d.createElement("div",{style:e},d.createElement(h.Z,{highlightWidth:this.state.percent+"%",style:{width:"300px",height:"30px",lineHeight:"30px",margin:"30px 0 0 20px"},showIcon:!0,status:"success",successIcon:"fa fa-thumbs-up",failureIcon:"fa fa-tags",word:!0,wordStyle:h.Z.WordStyle.END,theme:"warning"}))))),d.createElement(m.Z,null,d.createElement(y.Z,{className:"example-header",title:"Linear Progress Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"Linear Progress without percentage description by default.Set the word property to true and wordStyle property to middle for percentage description stay at middle."),d.createElement("div",{style:e},d.createElement(h.Z,{highlightWidth:this.state.percent+"%",style:{width:"80%",height:"30px",lineHeight:"30px",margin:"30px 0 0 20px"},word:!0,wordStyle:h.Z.WordStyle.END,theme:"success"}))))),d.createElement(m.Z,null,d.createElement(y.Z,{className:"example-header",title:"Linear Progress Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"Linear Progress without percentage description by default.Set the word property to true and wordStyle property to follow for percentage description stay at end."),d.createElement("div",{style:e},d.createElement(h.Z,{highlightWidth:this.state.percent+"%",style:{width:"calc(100% - 40px)",height:"30px",lineHeight:"30px",margin:"30px 0 0 20px"},word:!0,wordStyle:h.Z.WordStyle.FOLLOW,theme:"error",animation:!0}))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(g.Z,{data:v}))}}]),s}(d.Component)},93284:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(34575),a=r.n(n),s=r(93913),o=r.n(s),c=r(81506),i=r.n(c),l=r(2205),p=r.n(l),u=r(78585),f=r.n(u),d=r(29754),h=r.n(d),m=r(59713),y=r.n(m),g=r(37699),v=r(45697),w=r.n(v),b=r(41844),x=r.n(b),E=r(87712),O=r(32043),N=r(81540);var P=function(e){p()(s,e);var t,r,n=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=h()(t);if(r){var a=h()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function s(e){var t;a()(this,s);for(var r=arguments.length,o=new Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return t=n.call.apply(n,[this,e].concat(o)),y()(i()(t),"getProgressWidth",(function(){return t.wrapperEl?parseInt(t.wrapperEl.offsetWidth)/2:0})),t.wrapper=(0,g.createRef)(),t.wrapperEl=null,t}return o()(s,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current}},{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.highlightWidth,a=t.style,o=t.word,c=t.wordStyle,i=t.theme,l=t.animation,p=t.status,u=t.showIcon,f=t.successIcon,d=t.failureIcon;return g.createElement("div",{ref:this.wrapper,className:x()("linear-progress",(e={},y()(e,c,c),y()(e,"theme-".concat(i),i),y()(e,r,r),y()(e,p,p),e)),style:a},o&&c===s.WordStyle.FOLLOW?g.createElement(O.Z,{endNum:parseInt(n),status:p,showIcon:u,successIcon:f,failureIcon:d,move:!0}):null,o&&c===s.WordStyle.FRONT?g.createElement(O.Z,{endNum:parseInt(n),status:p,showIcon:u,successIcon:f,failureIcon:d}):null,g.createElement("div",{className:"linear-progress-background"},g.createElement("div",{className:x()("linear-progress-highlight",{"linear-progress-animate":l}),style:{width:n}},c===s.WordStyle.MIDDLE?g.createElement(O.Z,{className:"linear-progress-word",style:{marginLeft:this.getProgressWidth()},status:p,showIcon:u,successIcon:f,failureIcon:d,endNum:parseInt(n)}):null)),o&&c===s.WordStyle.END?g.createElement(O.Z,{endNum:parseInt(n),status:p,showIcon:u,successIcon:f,failureIcon:d}):null)}}]),s}(g.Component);y()(P,"WordStyle",{FRONT:"linear-progress-one",MIDDLE:"linear-progress-two",FOLLOW:"linear-progress-three",END:"linear-progress-four"}),y()(P,"Theme",E.Z),P.propTypes={className:w().string,style:w().object,theme:w().oneOf(N.Z.enumerateValue(E.Z)),highlightWidth:w().string,word:w().bool,wordStyle:w().oneOf(Object.keys(P.WordStyle).map((function(e){return P.WordStyle[e]}))),animation:w().bool},P.defaultProps={style:{width:"200px",height:"2px"},highlightWidth:"50%",word:!1,wordStyle:P.WordStyle.FRONT,animation:!1};const S=P},32043:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(34575),a=r.n(n),s=r(93913),o=r.n(s),c=r(81506),i=r.n(c),l=r(2205),p=r.n(l),u=r(78585),f=r.n(u),d=r(29754),h=r.n(d),m=r(59713),y=r.n(m),g=r(37699),v=r(45697),w=r.n(v),b=r(41844),x=r.n(b);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){p()(s,e);var t,r,n=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=h()(t);if(r){var a=h()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return f()(this,e)});function s(e){var t;a()(this,s);for(var r=arguments.length,o=new Array(r>1?r-1:0),c=1;c<r;c++)o[c-1]=arguments[c];return t=n.call.apply(n,[this,e].concat(o)),y()(i()(t),"numberChange",(function(){if(t.state.percent<100){if(t.state.percent<t.props.endNum){t.setState({percent:t.state.percent+1});var e=300/(t.props.endNum-t.state.percent);return void(t.timer=setTimeout((function(){return t.numberChange()}),e))}t.timer=setTimeout((function(){return t.numberChange()}),30)}})),t.state={percent:0},t}return o()(s,[{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout((function(){return e.numberChange()}),30)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.style,a=t.move,s=t.endNum,o=t.status,c=t.showIcon,i=t.successIcon,l=t.failureIcon,p=this.state.percent;return g.createElement("div",{className:x()("circular-progress-percent",(e={},y()(e,r,r),y()(e,o,o),e)),style:!0===a?O({width:s+"%",textAlign:"right"},n):n},g.Children.map(this.props.children,(function(e){return g.createElement("span",null,e)})),"loading"===o?g.createElement("span",null,p,"%"):null,c&&"success"===o?g.createElement("i",{className:i||"fa fa-check-circle"}):null,c&&"failure"===o?g.createElement("i",{className:l||"fa fa-times-circle"}):null)}}]),s}(g.Component);y()(N,"Status",{LOADING:"loading",SUCCESS:"success",FAILURE:"failure"}),N.propTypes={children:w().any,className:w().string,style:w().object,status:w().oneOf(Object.keys(N.Status).map((function(e){return N.Status[e]}))),endNum:w().number,move:w().bool,showIcon:w().string,successIcon:w().string,failureIcon:w().string},N.defaultProps={endNum:100,move:!1};const P=N}}]);
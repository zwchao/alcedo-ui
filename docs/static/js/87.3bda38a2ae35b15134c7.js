(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{241:function(e,t,n){"use strict";var a=n(50),r=n.n(a),i=n(51),o=n.n(i),s=n(19),l=n.n(s),c=n(52),u=n.n(c),p=n(53),d=n.n(p),f=n(37),m=n.n(f),g=n(9),h=n.n(g),y=n(0),v=n.n(y),b=n(98),w=n.n(b),E=n(248);n(242);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var N=function(e){u()(n,e);var t=S(n);function n(e){var a;return r()(this,n),a=t.call(this,e),h()(l()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(x({name:t},a.props.data[t]));return e})),a}return o()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),n}(y.Component);N.propTypes={data:w.a.object},t.a=N},242:function(e,t,n){var a=n(99),r=n(243);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},243:function(e,t,n){(t=n(100)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a=n(50),r=n.n(a),i=n(51),o=n.n(i),s=n(19),l=n.n(s),c=n(52),u=n.n(c),p=n(53),d=n.n(p),f=n(37),m=n.n(f),g=n(9),h=n.n(g),y=n(0),v=n.n(y),b=n(98),w=n.n(b),E=n(237),P=n.n(E),x=n(333);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var N=function(e){u()(n,e);var t=S(n);function n(e){var a;r()(this,n);for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return a=t.call.apply(t,[this,e].concat(o)),h()(l()(a),"setLoading",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.loadingProgress,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e[t],r=n.width,i=n.timeout,o={};o.width=r+"%",o.transition="width "+i+"ms linear 0ms",a.setState({highlightStyle:o},(function(){t<e.length-1&&(a.clearProgress(),a.progressTimeout=setTimeout((function(){a.setLoading(e,t+1)}),100===r?0:i))}))})),h()(l()(a),"clearProgress",(function(){a.progressTimeout&&clearTimeout(a.progressTimeout)})),h()(l()(a),"handleEnter",(function(){a.clearProgress(),a.setState({highlightStyle:a.defaultHighlightStyle},(function(){a.setLoading()}))})),h()(l()(a),"handleExit",(function(){a.clearProgress(),a.setLoading([{width:100,timeout:a.props.finishDuration}])})),a.progressTimeout=null,a.defaultHighlightStyle={width:0,transition:"width 0s"},a.state={highlightStyle:a.defaultHighlightStyle},a}return o()(n,[{key:"componentWillUnmount",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=e.visible,r=e.duration,i=e.finishDuration,o=e.showStripes,s=this.state.highlightStyle;return(v.a.createElement(x.default,{in:a,timeout:{exit:r+i},classNames:"page-loading",onEnter:this.handleEnter,onExit:this.handleExit},v.a.createElement("div",{className:P()("page-loading",h()({striped:o},t,t)),style:n},v.a.createElement("div",{className:"page-loading-bar",style:s}))))}}]),n}(y.Component);N.propTypes={className:w.a.string,style:w.a.object,visible:w.a.bool,duration:w.a.number,finishDuration:w.a.number,showStripes:w.a.bool,loadingProgress:w.a.arrayOf(w.a.shape({width:w.a.number,timeout:w.a.number}))},N.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var R=N},709:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string"},"style":{"type":"PropTypes.object"},"visible":{"type":"PropTypes.bool","default":"false"},"duration":{"type":"PropTypes.number","default":"250"},"finishDuration":{"type":"PropTypes.number","default":"100"},"showStripes":{"type":"PropTypes.bool","default":"true"}}')},710:function(e,t,n){var a=n(99),r=n(711);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};a(r,i);e.exports=r.locals||{}},711:function(e,t,n){(t=n(100)(!1)).push([e.i,".page-loading-examples .example-content {\n  position: relative;\n  padding-left: 0; }\n  .page-loading-examples .example-content > p {\n    margin-left: 30px; }\n  .page-loading-examples .example-content .raised-button {\n    margin-left: 30px; }\n",""]),e.exports=t},817:function(e,t,n){"use strict";n.r(t);var a=n(50),r=n.n(a),i=n(51),o=n.n(i),s=n(19),l=n.n(s),c=n(52),u=n.n(c),p=n(53),d=n.n(p),f=n(37),m=n.n(f),g=n(9),h=n.n(g),y=n(0),v=n.n(y),b=n(325),w=n(246),E=n(247),P=n(245),x=n(241),S=n(709);n(710);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return d()(this,n)}}var R=function(e){u()(n,e);var t=N(n);function n(e){var a;return r()(this,n),a=t.call(this,e),h()(l()(a),"showLoading",(function(e){a.setState(h()({},e,!0),(function(){setTimeout((function(){a.setState(h()({},e,!1))}),2e3)}))})),a.loadingProgress=[{width:0,timeout:0},{width:80,timeout:200},{width:99,timeout:2e3}],a.state={visible1:!1,visible2:!1,visible3:!1},a}return o()(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.visible1,a=t.visible2,r=t.visible3;return v.a.createElement("div",{className:"example page-loading-examples"},v.a.createElement("h2",{className:"example-title"},"PageLoading"),v.a.createElement("p",null,v.a.createElement("span",null,"PageLoading")," use to show pages and blocks loading status."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(w.a,null,v.a.createElement(E.a,{className:"example-header",title:"PageLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"A simple PageLoading example."),v.a.createElement(P.a,{value:"loading",onClick:function(){e.showLoading("visible1")}}),v.a.createElement(b.a,{visible:n,showStripes:!1})))),v.a.createElement(w.a,null,v.a.createElement(E.a,{className:"example-header",title:"Self Progress PageLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set self loading progress on PageLoading."),v.a.createElement(P.a,{value:"loading",onClick:function(){e.showLoading("visible2")}}),v.a.createElement(b.a,{visible:a,showStripes:!1,loadingProgress:this.loadingProgress})))),v.a.createElement(w.a,null,v.a.createElement(E.a,{className:"example-header",title:"Striped PageLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"A striped pageLoading example."),v.a.createElement(P.a,{value:"loading",onClick:function(){e.showLoading("visible3")}}),v.a.createElement(b.a,{visible:r,showStripes:!0})))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(x.a,{data:S}))}}]),n}(y.Component);t.default=R}}]);
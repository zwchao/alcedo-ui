(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{321:function(e,t,a){"use strict";var n=a(55),i=a.n(n),r=a(56),o=a.n(r),s=a(57),l=a.n(s),p=a(58),c=a.n(p),u=a(19),d=a.n(u),m=a(59),g=a.n(m),h=a(6),f=a.n(h),v=a(0),y=a.n(v),b=a(315),w=a.n(b),E=a(328);a(322);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=function(e){function t(e){var a;return i()(this,t),a=l()(this,c()(t).call(this,e)),f()(d()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(x({name:t},a.props.data[t]));return e})),a}return g()(t,e),o()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(v.Component);S.propTypes={data:w.a.object},t.a=S},322:function(e,t,a){var n=a(323);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};a(124)(n,i);n.locals&&(e.exports=n.locals)},323:function(e,t,a){(e.exports=a(123)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},396:function(e,t,a){"use strict";var n=a(55),i=a.n(n),r=a(56),o=a.n(r),s=a(57),l=a.n(s),p=a(58),c=a.n(p),u=a(19),d=a.n(u),m=a(59),g=a.n(m),h=a(6),f=a.n(h),v=a(0),y=a.n(v),b=a(315),w=a.n(b),E=a(316),P=a.n(E),x=a(410),S=function(e){function t(e){var a,n;i()(this,t);for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return n=l()(this,(a=c()(t)).call.apply(a,[this,e].concat(o))),f()(d()(n),"setLoading",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.loadingProgress,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e[t],i=a.width,r=a.timeout,o={};o.width=i+"%",o.transition="width "+r+"ms linear 0ms",n.setState({highlightStyle:o},(function(){t<e.length-1&&(n.clearProgress(),n.progressTimeout=setTimeout((function(){n.setLoading(e,t+1)}),100===i?0:r))}))})),f()(d()(n),"clearProgress",(function(){n.progressTimeout&&clearTimeout(n.progressTimeout)})),f()(d()(n),"handleEnter",(function(){n.clearProgress(),n.setState({highlightStyle:n.defaultHighlightStyle},(function(){n.setLoading()}))})),f()(d()(n),"handleExit",(function(){n.clearProgress(),n.setLoading([{width:100,timeout:n.props.finishDuration}])})),n.progressTimeout=null,n.defaultHighlightStyle={width:0,transition:"width 0s"},n.state={highlightStyle:n.defaultHighlightStyle},n}return g()(t,e),o()(t,[{key:"componentWillUnmount",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.visible,i=e.duration,r=e.finishDuration,o=e.showStripes,s=this.state.highlightStyle;return y.a.createElement(x.default,{in:n,timeout:{exit:i+r},classNames:"page-loading",onEnter:this.handleEnter,onExit:this.handleExit},y.a.createElement("div",{className:P()("page-loading",f()({striped:o},t,t)),style:a},y.a.createElement("div",{className:"page-loading-bar",style:s})))}}]),t}(v.Component);S.propTypes={className:w.a.string,style:w.a.object,visible:w.a.bool,duration:w.a.number,finishDuration:w.a.number,showStripes:w.a.bool,loadingProgress:w.a.arrayOf(w.a.shape({width:w.a.number,timeout:w.a.number}))},S.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var N=S;a.d(t,"a",(function(){return N}))},781:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string"},"style":{"type":"PropTypes.object"},"visible":{"type":"PropTypes.bool","default":"false"},"duration":{"type":"PropTypes.number","default":"250"},"finishDuration":{"type":"PropTypes.number","default":"100"},"showStripes":{"type":"PropTypes.bool","default":"true"}}')},782:function(e,t,a){var n=a(783);"string"==typeof n&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};a(124)(n,i);n.locals&&(e.exports=n.locals)},783:function(e,t,a){(e.exports=a(123)(!1)).push([e.i,".page-loading-examples .example-content {\n  position: relative;\n  padding-left: 0; }\n  .page-loading-examples .example-content > p {\n    margin-left: 30px; }\n  .page-loading-examples .example-content .raised-button {\n    margin-left: 30px; }\n",""])},889:function(e,t,a){"use strict";a.r(t);var n=a(55),i=a.n(n),r=a(56),o=a.n(r),s=a(57),l=a.n(s),p=a(58),c=a.n(p),u=a(19),d=a.n(u),m=a(59),g=a.n(m),h=a(6),f=a.n(h),v=a(0),y=a.n(v),b=a(396),w=a(326),E=a(325),P=a(324),x=a(321),S=a(781),N=(a(782),function(e){function t(e){var a;return i()(this,t),a=l()(this,c()(t).call(this,e)),f()(d()(a),"showLoading",(function(e){a.setState(f()({},e,!0),(function(){setTimeout((function(){a.setState(f()({},e,!1))}),2e3)}))})),a.loadingProgress=[{width:0,timeout:0},{width:80,timeout:200},{width:99,timeout:2e3}],a.state={visible1:!1,visible2:!1,visible3:!1},a}return g()(t,e),o()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.visible1,n=t.visible2,i=t.visible3;return y.a.createElement("div",{className:"example page-loading-examples"},y.a.createElement("h2",{className:"example-title"},"PageLoading"),y.a.createElement("p",null,y.a.createElement("span",null,"PageLoading")," use to show pages and blocks loading status."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(w.a,null,y.a.createElement(E.a,{className:"example-header",title:"PageLoading Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"A simple PageLoading example."),y.a.createElement(P.a,{value:"loading",onClick:function(){e.showLoading("visible1")}}),y.a.createElement(b.a,{visible:a,showStripes:!1})))),y.a.createElement(w.a,null,y.a.createElement(E.a,{className:"example-header",title:"Self Progress PageLoading Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"Set self loading progress on PageLoading."),y.a.createElement(P.a,{value:"loading",onClick:function(){e.showLoading("visible2")}}),y.a.createElement(b.a,{visible:n,showStripes:!1,loadingProgress:this.loadingProgress})))),y.a.createElement(w.a,null,y.a.createElement(E.a,{className:"example-header",title:"Striped PageLoading Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"A striped pageLoading example."),y.a.createElement(P.a,{value:"loading",onClick:function(){e.showLoading("visible3")}}),y.a.createElement(b.a,{visible:i,showStripes:!0})))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(x.a,{data:S}))}}]),t}(v.Component));t.default=N}}]);
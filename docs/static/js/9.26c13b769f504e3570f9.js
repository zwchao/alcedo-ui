webpackJsonp([9],{831:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),c=n(d),p=a(377),u=n(p),f=a(353),m=n(f),g=a(354),h=n(g),x=a(356),y=n(x),E=a(841),b=n(E),v=a(965),w=n(v);a(922);var N=function(e){function t(e){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loading1:!1,loading2:!1},a.toggle=a.toggle.bind(a),a}return i(t,e),s(t,[{key:"toggle",value:function(e,t){this.setState(l({},"loading"+t,!this.state["loading"+t]))}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading1,n=t.loading2;return c.default.createElement("div",{className:"example span-loading-examples"},c.default.createElement("h2",{className:"example-title"},"SpanLoading"),c.default.createElement("p",null,c.default.createElement("span",null,"SpanLoading")," use to show pages and blocks loading status."),c.default.createElement("h2",{className:"example-title"},"Examples"),c.default.createElement(m.default,null,c.default.createElement(h.default,{className:"example-header",title:"SpanLoading Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"A simple SpanLoading example."),c.default.createElement(u.default,{spanning:!0})))),c.default.createElement(m.default,null,c.default.createElement(h.default,{className:"example-header",title:"With description"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"Set the ",c.default.createElement("code",null,"description")," property to add a description for SpanLoading."),c.default.createElement(u.default,{spanning:!0,description:"Loading..."})))),c.default.createElement(m.default,null,c.default.createElement(h.default,{className:"example-header",title:"With size"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"Set the ",c.default.createElement("code",null,"size")," property to small or large for different size SpanLoading."),c.default.createElement(u.default,{spanning:!0,size:"small"}),c.default.createElement(u.default,{spanning:!0}),c.default.createElement(u.default,{spanning:!0,size:"large"})))),c.default.createElement(m.default,null,c.default.createElement(h.default,{className:"example-header",title:"SpanLoading Inside Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"Put SpanLoading inside a container."),c.default.createElement("div",{className:"example-span-loading"},c.default.createElement(u.default,{spanning:!0}))))),c.default.createElement(m.default,null,c.default.createElement(h.default,{className:"example-header",title:"SpanLoading nested Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"You can embed the contents directly into SpanLoading and change the existing containers to loaded states."),c.default.createElement(u.default,{spanning:a,className:"span-loading-nested"},c.default.createElement("div",{className:"span-loading-info "+(a?"span-loading-blur":"")},c.default.createElement("span",{className:"span-loading-message"},"Alert message title"),c.default.createElement("span",{className:"span-loading-description"},"Further details about the context of this alert."))),c.default.createElement("div",{className:"switcher-con"},c.default.createElement("span",null,"Loading state："),c.default.createElement(y.default,{value:a,onChange:function(t){e.toggle(t,1)}}))))),c.default.createElement(m.default,null,c.default.createElement(h.default,{className:"example-header",title:"With delay"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"Set the ",c.default.createElement("code",null,"delay")," property to delay the loading animation."),c.default.createElement(u.default,{spanning:n,delay:1e3,className:"span-loading-nested"},c.default.createElement("div",{className:"span-loading-info "+(n?"span-loading-blur":"")},c.default.createElement("span",{className:"span-loading-description"},"Delay the loading animation."))),c.default.createElement("div",{className:"switcher-con"},c.default.createElement("span",null,"Loading state："),c.default.createElement(y.default,{value:n,onChange:function(t){e.toggle(t,2)}}))))),c.default.createElement("h2",{className:"example-title"},"Properties"),c.default.createElement(b.default,{data:w.default}))}}]),t}(d.Component);t.default=N},841:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),c=n(d),p=a(2),u=n(p),f=a(352),m=n(f);a(843);var g=function(e){function t(e){l(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return r(t,e),s(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return c.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isAdaptiveHeight:!0})}}]),t}(d.Component);t.default=g,g.propTypes={data:u.default.object},g.defaultProps={data:""}},842:function(e,t,a){t=e.exports=a(791)(),t.push([e.i,"",""])},843:function(e,t,a){var n=a(842);"string"==typeof n&&(n=[[e.i,n,""]]);a(792)(n,{});n.locals&&(e.exports=n.locals)},881:function(e,t,a){t=e.exports=a(791)(),t.push([e.i,".span-loading-examples .example-content .example-span-loading {\n  text-align: center;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  padding: 30px 50px;\n  margin: 20px 0;\n  position: relative; }\n\n.span-loading-examples .example-content .span-loading-nested {\n  width: 100%; }\n  .span-loading-examples .example-content .span-loading-nested .span-loading-dot {\n    position: absolute;\n    top: calc(50% - 10px);\n    left: calc(50% - 10px);\n    z-index: 60; }\n\n.span-loading-examples .example-content .span-loading-info {\n  border: 1px solid #7eccf2;\n  background-color: #def4ff;\n  padding: 20px 0;\n  position: relative;\n  width: 100%; }\n  .span-loading-examples .example-content .span-loading-info.span-loading-blur {\n    overflow: hidden;\n    opacity: .7;\n    filter: blur(0.5px); }\n  .span-loading-examples .example-content .span-loading-info .span-loading-message {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.55);\n    display: block;\n    margin-bottom: 10px; }\n  .span-loading-examples .example-content .span-loading-info .span-loading-content {\n    display: block; }\n\n.span-loading-examples .example-content .switcher-con {\n  padding: 30px 0 20px 10px; }\n  .span-loading-examples .example-content .switcher-con span {\n    float: left; }\n  .span-loading-examples .example-content .switcher-con .switcher {\n    float: left;\n    margin-left: 20px; }\n",""])},922:function(e,t,a){var n=a(881);"string"==typeof n&&(n=[[e.i,n,""]]);a(792)(n,{});n.locals&&(e.exports=n.locals)},965:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},spanning:{type:"PropTypes.bool",desc:"If true,will show a span loading animation.",default:"true"},tip:{type:"PropTypes.string",desc:"Set the tip text,there will be a description under the loading.",default:""},size:{type:"PropTypes.string",desc:"Set the size of loading,can use small or large."},delay:{type:"PropTypes.number",desc:"Set the delay time of loading animation."}}}});
webpackJsonp([12],{1016:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),c=a(i),s=n(27),f=a(s),p=n(416),d=a(p),m=n(417),h=a(m),y=n(1029),b=a(y),v=n(1174),g=a(v);n(1113);var w=function(e){function t(e){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"example widget-examples"},c.default.createElement("h2",{className:"example-title"},"Widget"),c.default.createElement("p",null,"A ",c.default.createElement("span",null,"Widget")," element is a basic container that can give a title."),c.default.createElement("h2",{className:"example-title"},"Examples"),c.default.createElement(d.default,null,c.default.createElement(h.default,{className:"example-header",title:"Widget Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("div",{className:"examples-wrapper"},c.default.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),c.default.createElement(d.default,null,c.default.createElement(h.default,{title:"Title"},c.default.createElement(f.default,{iconCls:"fa fa-thumbs-up"}),c.default.createElement(f.default,{iconCls:"fa fa-trash"})),c.default.createElement("div",{className:"widget-content"},"widget content")))))),c.default.createElement("h2",{className:"example-title"},"Properties"),c.default.createElement(b.default,{data:g.default}))}}]),t}(i.Component);t.default=w},1029:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),s=a(c),f=n(2),p=a(f),d=n(415),m=a(d);n(1031);var h=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=n.generateData.bind(n),n}return o(t,e),i(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(u({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return s.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isAdaptiveHeight:!0})}}]),t}(c.Component);t.default=h,h.propTypes={data:p.default.object},h.defaultProps={data:""}},1030:function(e,t,n){t=e.exports=n(976)(),t.push([e.i,"",""])},1031:function(e,t,n){var a=n(1030);"string"==typeof a&&(a=[[e.i,a,""]]);n(977)(a,{});a.locals&&(e.exports=a.locals)},1071:function(e,t,n){t=e.exports=n(976)(),t.push([e.i,".widget-examples .examples-wrapper .widget .widget-content {\n  padding: 20px; }\n",""])},1113:function(e,t,n){var a=n(1071);"string"==typeof a&&(a=[[e.i,a,""]]);n(977)(a,{});a.locals&&(e.exports=a.locals)},1174:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},depth:{type:"PropTypes.number",desc:"This number represents the zDepth of the root element shadow.",default:"1"}}}});
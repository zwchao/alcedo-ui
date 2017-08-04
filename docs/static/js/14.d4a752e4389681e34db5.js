webpackJsonp([14],{1e3:function(e,t,a){var n=a(999);"string"==typeof n&&(n=[[e.i,n,""]]);a(946)(n,{});n.locals&&(e.exports=n.locals)},1043:function(e,t,a){t=e.exports=a(945)(),t.push([e.i,".waterfall-examples .examples-wrapper .buttons {\n  text-align: center;\n  margin-bottom: 20px; }\n  .waterfall-examples .examples-wrapper .buttons .column-button {\n    width: auto;\n    margin-right: 20px; }\n",""])},1085:function(e,t,a){var n=a(1043);"string"==typeof n&&(n=[[e.i,n,""]]);a(946)(n,{});n.locals&&(e.exports=n.locals)},1146:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},column:{type:"PropTypes.number",desc:"Column count of waterfall.",default:"3"},separator:{type:"PropTypes.number",desc:"horizontal separator between items for calculation and display.",default:"10"}}},984:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(0),c=n(s),i=a(398),f=n(i),p=a(399),d=n(p),m=a(437),h=n(m),y=a(53),b=n(y),v=a(403),g=n(v),E=a(998),w=n(E),x=a(1146),_=n(x);a(1085);var O=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.data=[{label:"One Column",value:1},{label:"Two Columns",value:2},{label:"Three Column",value:3},{label:"Four Column",value:4}],a.state={column:3},a.columnChangeHandle=a.columnChangeHandle.bind(a),a}return o(t,e),u(t,[{key:"columnChangeHandle",value:function(e){this.setState({column:e})}},{key:"render",value:function(){var e=this.state.column;return c.default.createElement("div",{className:"example waterfall-examples"},c.default.createElement("h2",{className:"example-title"},"Waterfall"),c.default.createElement("p",null,"A ",c.default.createElement("span",null,"Waterfall")," is a container that can display items in multi columns."),c.default.createElement("h2",{className:"example-title"},"Examples"),c.default.createElement(f.default,null,c.default.createElement(d.default,{className:"example-header",title:"Waterfall Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("div",{className:"examples-wrapper"},c.default.createElement("div",{className:"buttons"},c.default.createElement(g.default,{data:this.data,value:e,onChange:this.columnChangeHandle})),c.default.createElement(h.default,{column:e},c.default.createElement(b.default,{style:{height:20}}),c.default.createElement(b.default,{style:{height:90}}),c.default.createElement(b.default,{style:{height:30}}),c.default.createElement(b.default,{style:{height:40}}),c.default.createElement(b.default,{style:{height:80}}),c.default.createElement(b.default,{style:{height:50}}),c.default.createElement(b.default,{style:{height:60}}),c.default.createElement(b.default,{style:{height:20}}),c.default.createElement(b.default,{style:{height:70}})))))),c.default.createElement("h2",{className:"example-title"},"Properties"),c.default.createElement(w.default,{data:_.default}))}}]),t}(s.Component);t.default=O},998:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),i=n(c),f=a(2),p=n(f),d=a(397),m=n(d);a(1e3);var h=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return o(t,e),s(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(u({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return i.default.createElement("div",{className:"prop-type-desc-table-wrapper"},i.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(c.Component);t.default=h,h.propTypes={data:p.default.object},h.defaultProps={data:""}},999:function(e,t,a){t=e.exports=a(945)(),t.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n",""])}});
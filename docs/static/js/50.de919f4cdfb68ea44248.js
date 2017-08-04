webpackJsonp([50],{1e3:function(e,t,a){var r=a(999);"string"==typeof r&&(r=[[e.i,r,""]]);a(946)(r,{});r.locals&&(e.exports=r.locals)},1137:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},cols:{type:"PropTypes.number",desc:"The number of cols.",default:"50"},rows:{type:"PropTypes.number",desc:"The number of rows.",default:"3"},initialHeight:{type:"PropTypes.number",desc:"The initial height of textArea.",default:"30"},initialWidth:{type:"PropTypes.number",desc:"The initial height of textArea.",default:"200"},value:{type:"PropTypes.string",desc:"The value of textArea.",default:""},maxHeight:{type:"PropTypes.number",desc:"The max height of textArea.",default:"100"},maxWidth:{type:"PropTypes.number",desc:"The max width of textArea.",default:"500"},autoSize:{type:"PropTypes.bool",desc:"If true, the textArea will change its size by words.",default:"true"},autoFocus:{type:"PropTypes.bool",desc:"If true,the textField will autoFocus.",default:"false"},placeholder:{type:"PropTypes.string",desc:"The placeholder of textArea.",default:"Please input something."},onChange:{type:"PropTypes.func",desc:"When the value of textArea change, it will execute."},onBlur:{type:"PropTypes.func",desc:"When the textArea onBlur, it will execute."},onFocus:{type:"PropTypes.func",desc:"When the textArea onFocus, it will execute."}}},974:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),i=a(0),s=r(i),c=a(430),p=r(c),f=a(398),d=r(f),h=a(399),m=r(h),y=a(998),b=r(y),x=a(1137),v=r(x),T=function(e){function t(e){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return o(t,e),u(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"example"},s.default.createElement("h2",{className:"example-title"},"TextArea"),s.default.createElement("p",null,"A ",s.default.createElement("span",null,"TextArea")," is an interface for users to input a value in a range. TextArea can be continuous or discrete."),s.default.createElement("h2",{className:"example-title"},"Examples"),s.default.createElement(d.default,null,s.default.createElement(m.default,{className:"example-header",title:"TextArea Example"}),s.default.createElement("div",{className:"widget-content"},s.default.createElement("div",{className:"example-content"},s.default.createElement("p",null,"TextArea with auto size."),s.default.createElement(p.default,{autoSize:!0})))),s.default.createElement(d.default,null,s.default.createElement(m.default,{className:"example-header",title:"TextArea Example"}),s.default.createElement("div",{className:"widget-content"},s.default.createElement("div",{className:"example-content"},s.default.createElement("p",null,"TextArea with regular size."),s.default.createElement(p.default,{autoSize:!1,initialHeight:100})))),s.default.createElement("h2",{className:"example-title"},"Properties"),s.default.createElement(b.default,{data:v.default}))}}]),t}(i.Component);t.default=T},998:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),s=a(0),c=r(s),p=a(2),f=r(p),d=a(397),h=r(d);a(1e3);var m=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return o(t,e),i(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(u({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return c.default.createElement("div",{className:"prop-type-desc-table-wrapper"},c.default.createElement(h.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(s.Component);t.default=m,m.propTypes={data:f.default.object},m.defaultProps={data:""}},999:function(e,t,a){t=e.exports=a(945)(),t.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n",""])}});
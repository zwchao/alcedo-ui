webpackJsonp([22],{1001:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=a(0),u=r(f),i=a(2),c=r(i),d=a(399),m=r(d);a(1003);var y=function(e){function t(e){n(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return o(t,e),p(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return u.default.createElement("div",{className:"prop-type-desc-table-wrapper"},u.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component);t.default=y,y.propTypes={data:c.default.object},y.defaultProps={data:""}},1002:function(e,t,a){t=e.exports=a(948)(),t.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n",""])},1003:function(e,t,a){var r=a(1002);"string"==typeof r&&(r=[[e.i,r,""]]);a(949)(r,{});r.locals&&(e.exports=r.locals)},1038:function(e,t,a){t=e.exports=a(948)(),t.push([e.i,'.transfer-examples .examples-wrapper .field-group {\n  margin: 10px auto;\n  float: none; }\n  .transfer-examples .examples-wrapper .field-group::before, .transfer-examples .examples-wrapper .field-group::after {\n    display: table;\n    content: ""; }\n  .transfer-examples .examples-wrapper .field-group::after {\n    clear: both; }\n  .transfer-examples .examples-wrapper .field-group .transfer-label,\n  .transfer-examples .examples-wrapper .field-group .text-field {\n    float: left; }\n  .transfer-examples .examples-wrapper .field-group .transfer-label {\n    font-size: 14px;\n    line-height: 50px;\n    margin-right: 20px;\n    width: 60px; }\n',""])},1080:function(e,t,a){var r=a(1038);"string"==typeof r&&(r=[[e.i,r,""]]);a(949)(r,{});r.locals&&(e.exports=r.locals)},1146:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},leftData:{type:"PropTypes.array",desc:"The data of left select field.",default:"[]"},rightData:{type:"PropTypes.array",desc:"The data of left select field.",default:"[]"},leftSelected:{type:"PropTypes.array",desc:"The left-selected data items.",default:"[]"},rightSelected:{type:"PropTypes.array",desc:"The left-selected data items.",default:"[]"},onChange:{type:"PropTypes.func",desc:"Callback function fired when select item changed."}}},979:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),p=a(0),f=r(p),u=a(400),i=r(u),c=a(401),d=r(c),m=a(1001),y=r(m),h=a(437),b=r(h),x=a(1146),v=r(x);a(1080);var g=function(e){function t(e){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),s(t,[{key:"render",value:function(){for(var e=[],t=[],a=0;a<30;a++){var r={text:"item"+(a+1),id:a};a%2==0&&(r.disabled=!0),2*Math.random()>1?e.push(r):t.push(r)}return f.default.createElement("div",{className:"example transfer-examples"},f.default.createElement("h2",{className:"example-title"},"Transfer"),f.default.createElement("p",null,f.default.createElement("span",null,"Transfer")," double column shuttle selection box."),f.default.createElement("h2",{className:"example-title"},"Examples"),f.default.createElement(i.default,null,f.default.createElement(d.default,{className:"example-header",title:"Basic"}),f.default.createElement("div",{className:"widget-content"},f.default.createElement("div",{className:"example-content"},f.default.createElement("div",{className:"examples-wrapper"},f.default.createElement("p",null,f.default.createElement("code",null,"Transfer")," simple example."),f.default.createElement("div",{className:"field-group"},f.default.createElement(b.default,{leftData:e,rightData:t})))))),f.default.createElement("h2",{className:"example-title"},"Properties"),f.default.createElement(y.default,{data:v.default}))}}]),t}(p.Component);t.default=g}});
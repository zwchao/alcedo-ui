webpackJsonp([4],{1024:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),u=r(0),c=a(u),i=r(426),p=a(i),f=r(416),d=a(f),m=r(417),h=a(m),y=r(1029),b=a(y),g=r(1131),v=a(g);r(1119);var w=function(e){function t(e){n(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.state={percent:0},r}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout(function(){return e.progress(0)},1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"progress",value:function(e){var t=this;if(e>=90)this.setState({percent:100});else{var r=parseInt((10*Math.random()).toFixed(0));this.setState({percent:e+r}),this.timer=setTimeout(function(){return t.progress(e+r)},1e3)}}},{key:"render",value:function(){return c.default.createElement("div",{className:"example circular-progress-examples"},c.default.createElement("h2",{className:"example-title"},"Circular Progress"),c.default.createElement("p",null,c.default.createElement("span",null,"Circular Progress")," will rotate to show the progress of a task or that there is a wait for a task to complete."),c.default.createElement("h2",{className:"example-title"},"Examples"),c.default.createElement(d.default,null,c.default.createElement(h.default,{className:"example-header",title:"Circular Progress Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"Circular Progress without percentage and text description."),c.default.createElement(p.default,{r:50,width:10,rgba:"#38b1eb",percent:this.state.percent,word:!1},c.default.createElement("span",null,"百分比："))))),c.default.createElement(d.default,null,c.default.createElement(h.default,{className:"example-header",title:"Circular Progress Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"Circular Progress without percentage description by default.Set the word property to true for percentage description."),c.default.createElement(p.default,{r:20,width:3,rgba:"#38b1eb",percent:this.state.percent,word:!0})))),c.default.createElement(d.default,null,c.default.createElement(h.default,{className:"example-header",title:"Circular Progress Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,'Set the word property to true and include a "span" element in this component for percentage and text description.'),c.default.createElement(p.default,{r:100,width:15,rgba:"#38b1eb",percent:this.state.percent,word:!0,percentStyle:{color:"#03a9f4"}},c.default.createElement("span",null,"已完成："))))),c.default.createElement("h2",{className:"example-title"},"Properties"),c.default.createElement(b.default,{data:v.default}))}}]),t}(u.Component);t.default=w},1029:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=r(0),i=a(c),p=r(2),f=a(p),d=r(415),m=a(d);r(1031);var h=function(e){function t(e){n(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],r.generateData=r.generateData.bind(r),r}return o(t,e),u(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return i.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isAdaptiveHeight:!0})}}]),t}(c.Component);t.default=h,h.propTypes={data:f.default.object},h.defaultProps={data:""}},1030:function(e,t,r){t=e.exports=r(976)(),t.push([e.i,"",""])},1031:function(e,t,r){var a=r(1030);"string"==typeof a&&(a=[[e.i,a,""]]);r(977)(a,{});a.locals&&(e.exports=a.locals)},1077:function(e,t,r){t=e.exports=r(976)(),t.push([e.i,".circular-progress-examples .example-content {\n  overflow: hidden; }\n  .circular-progress-examples .example-content > div {\n    float: left;\n    margin-top: 10px;\n    margin-left: 50px; }\n",""])},1119:function(e,t,r){var a=r(1077);"string"==typeof a&&(a=[[e.i,a,""]]);r(977)(a,{});a.locals&&(e.exports=a.locals)},1131:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"{}"},percentStyle:{type:"PropTypes.object",desc:"The style of the percent text description.",default:"{}"},r:{type:"PropTypes.number",desc:"The radius of the progress in pixels.",default:"48"},width:{type:"PropTypes.number",desc:"Stroke width in pixels.",default:"2"},rgba:{type:"PropTypes.string",desc:"Override the progress's color.",default:"rgb(0, 188, 212)"},percent:{type:"PropTypes.number",desc:"The value of progress.",default:"0"},word:{type:"PropTypes.bool",desc:"If true,there will have a text description.",default:"true"}}}});
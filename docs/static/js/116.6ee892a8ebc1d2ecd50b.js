(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{292:function(e,t,n){"use strict";var a=n(61),r=n.n(a),o=n(62),l=n.n(o),s=n(63),c=n.n(s),p=n(64),i=n.n(p),d=n(21),u=n.n(d),m=n(65),f=n.n(m),h=n(9),y=n.n(h),b=n(0),g=n.n(b),v=n(287),w=n.n(v),E=n(299);n(293);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(e){var n;return r()(this,t),n=c()(this,i()(t).call(this,e)),y()(u()(n),"generateData",(function(){var e=[];if(!n.props.data)return[];for(var t in n.props.data)e.push(O({name:t},n.props.data[t]));return e})),n}return f()(t,e),l()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(b.Component);N.propTypes={data:w.a.object},t.a=N},293:function(e,t,n){var a=n(113),r=n(294);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(a(r,o),r.locals?r.locals:{});e.exports=l},294:function(e,t,n){(t=n(114)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},673:function(e){e.exports=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"depth":{"type":"PropTypes.number","desc":"This number represents the zDepth of the root element shadow.","default":"1"}}')},674:function(e,t,n){var a=n(113),r=n(675);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(a(r,o),r.locals?r.locals:{});e.exports=l},675:function(e,t,n){(t=n(114)(!1)).push([e.i,".widget-examples .widget .widget-content {\n  padding: 20px; }\n",""]),e.exports=t},833:function(e,t,n){"use strict";n.r(t);var a=n(61),r=n.n(a),o=n(62),l=n.n(o),s=n(63),c=n.n(s),p=n(64),i=n.n(p),d=n(65),u=n.n(d),m=n(0),f=n.n(m),h=n(304),y=n(296),b=n(297),g=n(292),v=n(673),w=(n(674),function(e){function t(e){return r()(this,t),c()(this,i()(t).call(this,e))}return u()(t,e),l()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"example widget-examples"},f.a.createElement("h2",{className:"example-title"},"Widget"),f.a.createElement("p",null,"A ",f.a.createElement("span",null,"Widget")," element is a basic container that can give a title."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(y.a,null,f.a.createElement(b.a,{className:"example-header",title:"Widget Example"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),f.a.createElement(y.a,null,f.a.createElement(b.a,{title:"Title"},f.a.createElement(h.a,{iconCls:"far fa-thumbs-up"}),f.a.createElement(h.a,{iconCls:"fas fa-trash-alt"})),f.a.createElement("div",{className:"widget-content"},"widget content")))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(g.a,{data:v}))}}]),t}(m.Component));t.default=w}}]);
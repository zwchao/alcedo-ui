(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{230:function(e,t,n){"use strict";var r=n(50),a=n.n(r),o=n(51),c=n.n(o),l=n(19),i=n.n(l),u=n(52),s=n.n(u),d=n(53),f=n.n(d),p=n(35),m=n.n(p),h=n(9),y=n.n(h),v=n(0),w=n.n(v),b=n(90),g=n.n(b),R=n(237);n(231);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f()(this,n)}}var O=function(e){s()(n,e);var t=D(n);function n(e){var r;return a()(this,n),r=t.call(this,e),y()(i()(r),"generateData",(function(){var e=[];if(!r.props.data)return[];for(var t in r.props.data)e.push(x({name:t},r.props.data[t]));return e})),r}return c()(n,[{key:"render",value:function(){return w.a.createElement("div",{className:"prop-type-desc-table-wrapper"},w.a.createElement(R.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),n}(v.Component);O.propTypes={data:g.a.object},t.a=O},231:function(e,t,n){var r=n(91),a=n(232);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},232:function(e,t,n){(t=n(92)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(50),a=n.n(r),o=n(51),c=n.n(o),l=n(19),i=n.n(l),u=n(52),s=n.n(u),d=n(53),f=n.n(d),p=n(35),m=n.n(p),h=n(9),y=n.n(h),v=n(0),w=n.n(v),b=n(90),g=n.n(b);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f()(this,n)}}var E=function(e){s()(n,e);var t=R(n);function n(e){var r;a()(this,n);for(var o=arguments.length,c=new Array(o>1?o-1:0),l=1;l<o;l++)c[l-1]=arguments[l];return r=t.call.apply(t,[this,e].concat(c)),y()(i()(r),"download",(function(){r.setState({downloading:!0})})),y()(i()(r),"handleLoaded",(function(e){r.setState({downloading:!1},(function(){var t=r.props.onLoad,n=r.iframe&&r.iframe.current;n&&t&&t(e,n.contentDocument?n.contentDocument.body.innerText:void 0)}))})),r.iframe=Object(v.createRef)(),r.state={downloading:!1},r}return c()(n,[{key:"shouldComponentUpdate",value:function(e,t){return t.downloading!==this.state.downloading}},{key:"render",value:function(){var e=this.props.url,t=this.state.downloading;return t?w.a.createElement("iframe",{ref:this.iframe,className:"download-field",onLoad:this.handleLoaded,onError:this.handleLoaded,src:t?e:null}):null}}]),n}(v.Component);E.propTypes={url:g.a.string,onLoad:g.a.func},E.defaultProps={url:null};var x=E},550:function(e){e.exports=JSON.parse('{"url":{"type":"PropTypes.string","desc":"Download url.","default":"null"},"onLoad":{"type":"PropTypes.func","desc":"Loaded callback."}}')},551:function(e,t,n){var r=n(91),a=n(552);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},552:function(e,t,n){(t=n(92)(!1)).push([e.i,".download-field-examples .raised-button {\n  width: auto; }\n",""]),e.exports=t},743:function(e,t,n){"use strict";n.r(t);var r=n(50),a=n.n(r),o=n(51),c=n.n(o),l=n(19),i=n.n(l),u=n(52),s=n.n(u),d=n(53),f=n.n(d),p=n(35),m=n.n(p),h=n(9),y=n.n(h),v=n(0),w=n.n(v),b=n(234),g=n(388),R=n(236),E=n(235),x=n(230),D=n(550);n(551);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f()(this,n)}}var P=function(e){s()(n,e);var t=O(n);function n(e){var r;return a()(this,n),r=t.call(this,e),y()(i()(r),"downloadFieldRef",Object(v.createRef)()),y()(i()(r),"download",(function(){r.downloadFieldRef.current.download()})),r}return c()(n,[{key:"render",value:function(){return w.a.createElement("div",{className:"example download-field-examples"},w.a.createElement("h2",{className:"example-title"},"DownloadField"),w.a.createElement("p",null,w.a.createElement("span",null,"DownloadField")," allow users to download a file."),w.a.createElement("h2",{className:"example-title"},"Examples"),w.a.createElement(R.a,null,w.a.createElement(E.a,{className:"example-header",title:"Basic"}),w.a.createElement("div",{className:"widget-content"},w.a.createElement("div",{className:"example-content"},w.a.createElement("div",{className:"examples-wrapper"},w.a.createElement(g.a,{ref:this.downloadFieldRef,url:"https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg",onLoad:function(e,t){console.log(e,t)}}),w.a.createElement(b.a,{value:"Download NodeJs",theme:b.a.Theme.PRIMARY,onClick:this.download}))))),w.a.createElement("h2",{className:"example-title"},"Properties"),w.a.createElement(x.a,{data:D}))}}]),n}(v.Component);t.default=P}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{236:function(e,t,n){"use strict";var r=n(54),a=n.n(r),o=n(55),c=n.n(o),l=n(19),i=n.n(l),u=n(56),s=n.n(u),d=n(57),f=n.n(d),p=n(38),m=n.n(p),h=n(9),y=n.n(h),v=n(0),w=n.n(v),b=n(58),R=n.n(b),g=n(242),E=n(59),D=n.n(E),O=n(237),P={insert:"head",singleton:!1};D()(O.a,P),O.a.locals;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f()(this,n)}}var k=function(e){s()(n,e);var t=N(n);function n(e){var r;return a()(this,n),r=t.call(this,e),y()(i()(r),"generateData",(function(){var e=[];if(!r.props.data)return[];for(var t in r.props.data)e.push(j({name:t},r.props.data[t]));return e})),r}return c()(n,[{key:"render",value:function(){return w.a.createElement("div",{className:"prop-type-desc-table-wrapper"},w.a.createElement(g.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),n}(v.Component);k.propTypes={data:R.a.object};t.a=k},237:function(e,t,n){"use strict";var r=n(60),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),t.a=a},359:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=n(54),a=n.n(r),o=n(55),c=n.n(o),l=n(19),i=n.n(l),u=n(56),s=n.n(u),d=n(57),f=n.n(d),p=n(38),m=n.n(p),h=n(9),y=n.n(h),v=n(0),w=n.n(v),b=n(58),R=n.n(b);function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f()(this,n)}}var E=function(e){s()(n,e);var t=g(n);function n(e){var r;a()(this,n);for(var o=arguments.length,c=new Array(o>1?o-1:0),l=1;l<o;l++)c[l-1]=arguments[l];return r=t.call.apply(t,[this,e].concat(c)),y()(i()(r),"download",(function(){r.setState({downloading:!0})})),y()(i()(r),"handleLoaded",(function(e){r.setState({downloading:!1},(function(){var t=r.props.onLoad,n=r.iframe&&r.iframe.current;n&&t&&t(e,n.contentDocument?n.contentDocument.body.innerText:void 0)}))})),r.iframe=Object(v.createRef)(),r.state={downloading:!1},r}return c()(n,[{key:"shouldComponentUpdate",value:function(e,t){return t.downloading!==this.state.downloading}},{key:"render",value:function(){var e=this.props.url,t=this.state.downloading;return t?w.a.createElement("iframe",{ref:this.iframe,className:"download-field",onLoad:this.handleLoaded,onError:this.handleLoaded,src:t?e:null}):null}}]),n}(v.Component);E.propTypes={url:R.a.string,onLoad:R.a.func},E.defaultProps={url:null};var D=E},510:function(e){e.exports=JSON.parse('{"url":{"type":"PropTypes.string","desc":"Download url.","default":"null"},"onLoad":{"type":"PropTypes.func","desc":"Loaded callback."}}')},511:function(e,t,n){"use strict";var r=n(60),a=n.n(r)()((function(e){return e[1]}));a.push([e.i,".download-field-examples .raised-button {\n  width: auto; }\n",""]),t.a=a},677:function(e,t,n){"use strict";n.r(t);var r=n(54),a=n.n(r),o=n(55),c=n.n(o),l=n(19),i=n.n(l),u=n(56),s=n.n(u),d=n(57),f=n.n(d),p=n(38),m=n.n(p),h=n(9),y=n.n(h),v=n(0),w=n.n(v),b=n(239),R=n(359),g=n(240),E=n(241),D=n(236),O=n(510),P=n(59),x=n.n(P),j=n(511),N={insert:"head",singleton:!1};x()(j.a,N),j.a.locals;function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f()(this,n)}}var L=function(e){s()(n,e);var t=k(n);function n(e){var r;return a()(this,n),r=t.call(this,e),y()(i()(r),"downloadFieldRef",Object(v.createRef)()),y()(i()(r),"download",(function(){r.downloadFieldRef.current.download()})),r}return c()(n,[{key:"render",value:function(){return w.a.createElement("div",{className:"example download-field-examples"},w.a.createElement("h2",{className:"example-title"},"DownloadField"),w.a.createElement("p",null,w.a.createElement("span",null,"DownloadField")," allow users to download a file."),w.a.createElement("h2",{className:"example-title"},"Examples"),w.a.createElement(g.a,null,w.a.createElement(E.a,{className:"example-header",title:"Basic"}),w.a.createElement("div",{className:"widget-content"},w.a.createElement("div",{className:"example-content"},w.a.createElement("div",{className:"examples-wrapper"},w.a.createElement(R.a,{ref:this.downloadFieldRef,url:"https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg",onLoad:function(e,t){console.log(e,t)}}),w.a.createElement(b.a,{value:"Download NodeJs",theme:b.a.Theme.PRIMARY,onClick:this.download}))))),w.a.createElement("h2",{className:"example-title"},"Properties"),w.a.createElement(D.a,{data:O}))}}]),n}(v.Component);t.default=L}}]);
(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[4618],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const a=o},12024:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".download-field-examples .raised-button {\n  width: auto; }\n",""]);const a=o},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(6610),o=n(5991),a=n(63349),c=n(10379),l=n(46070),s=n(77608),u=n(96156),i=n(37699),d=n(45697),f=n.n(d),p=n(82996),m=n(93379),h=n.n(m),y=n(29250);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var w=function(e){(0,c.Z)(f,e);var t,n,d=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),t=d.call(this,e),(0,u.Z)((0,a.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(Z({name:n},t.props.data[n]));return e})),t}return(0,o.Z)(f,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(p.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(i.Component);w.propTypes={data:f().object};const b=w},68267:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var r=n(6610),o=n(5991),a=n(63349),c=n(10379),l=n(46070),s=n(77608),u=n(96156),i=n(37699),d=n(22944),f=n(33658),p=n(24471),m=n(50704),h=n(22356);const y=JSON.parse('{"url":{"type":"PropTypes.string","desc":"Download url.","default":"null"},"onLoad":{"type":"PropTypes.func","desc":"Loaded callback."}}');var v=n(93379),Z=n.n(v),w=n(12024);Z()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;const b=function(e){(0,c.Z)(Z,e);var t,n,v=(t=Z,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function Z(e){var t;return(0,r.Z)(this,Z),t=v.call(this,e),(0,u.Z)((0,a.Z)(t),"downloadFieldRef",(0,i.createRef)()),(0,u.Z)((0,a.Z)(t),"download",(function(){t.downloadFieldRef.current.download()})),t}return(0,o.Z)(Z,[{key:"render",value:function(){return i.createElement("div",{className:"example download-field-examples"},i.createElement("h2",{className:"example-title"},"DownloadField"),i.createElement("p",null,i.createElement("span",null,"DownloadField")," allow users to download a file."),i.createElement("h2",{className:"example-title"},"Examples"),i.createElement(p.Z,null,i.createElement(m.Z,{className:"example-header",title:"Basic"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("div",{className:"examples-wrapper"},i.createElement(f.Z,{ref:this.downloadFieldRef,url:"https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg",onLoad:function(e,t){console.log(e,t)}}),i.createElement(d.Z,{value:"Download NodeJs",theme:d.Z.Theme.PRIMARY,onClick:this.download}))))),i.createElement("h2",{className:"example-title"},"Properties"),i.createElement(h.Z,{data:y}))}}]),Z}(i.Component)},33658:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(6610),o=n(5991),a=n(63349),c=n(10379),l=n(46070),s=n(77608),u=n(96156),i=n(37699),d=n(45697),f=n.n(d);var p=function(e){(0,c.Z)(f,e);var t,n,d=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var o=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function f(e){var t;(0,r.Z)(this,f);for(var n=arguments.length,o=new Array(n>1?n-1:0),c=1;c<n;c++)o[c-1]=arguments[c];return t=d.call.apply(d,[this,e].concat(o)),(0,u.Z)((0,a.Z)(t),"download",(function(){t.setState({downloading:!0})})),(0,u.Z)((0,a.Z)(t),"handleLoaded",(function(e){t.setState({downloading:!1},(function(){var n=t.props.onLoad,r=t.iframe&&t.iframe.current;r&&n&&n(e,r.contentDocument?r.contentDocument.body.innerText:void 0)}))})),t.iframe=(0,i.createRef)(),t.state={downloading:!1},t}return(0,o.Z)(f,[{key:"shouldComponentUpdate",value:function(e,t){return t.downloading!==this.state.downloading}},{key:"render",value:function(){var e=this.props.url,t=this.state.downloading;return t?i.createElement("iframe",{ref:this.iframe,className:"download-field",onLoad:this.handleLoaded,onError:this.handleLoaded,src:t?e:null}):null}}]),f}(i.Component);p.propTypes={url:f().string,onLoad:f().func},p.defaultProps={url:null};const m=p}}]);
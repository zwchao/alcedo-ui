(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5686],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=a},73839:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".circular-loading-examples .circular-loading {\n  margin-right: 25px; }\n",""]);const l=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(34575),a=n.n(r),l=n(93913),c=n.n(l),i=n(81506),s=n.n(i),o=n(2205),p=n.n(o),u=n(78585),m=n.n(u),d=n(29754),f=n.n(d),h=n(59713),g=n.n(h),y=n(37699),E=n(45697),v=n.n(E),Z=n(21940),b=n(93379),x=n.n(b),w=n(29250);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}x()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;var C=function(e){p()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var a=f()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return m()(this,e)});function l(e){var t;return a()(this,l),t=r.call(this,e),g()(s()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(R({name:n},t.props.data[n]));return e})),t}return c()(l,[{key:"render",value:function(){return y.createElement("div",{className:"prop-type-desc-table-wrapper"},y.createElement(Z.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),l}(y.Component);C.propTypes={data:v().object};const O=C},60626:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(34575),a=n.n(r),l=n(93913),c=n.n(l),i=n(2205),s=n.n(i),o=n(78585),p=n.n(o),u=n(29754),m=n.n(u),d=n(37699),f=n(65059),h=n(24471),g=n(50704),y=n(22356);const E=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"size":{"type":"PropTypes.oneOf","desc":"Set the size of loading,can use small or large.","default":"CircularLoading.Size.DEFAULT"},"theme":{"type":"PropTypes.oneOf","desc":"Set the theme of loading,can use highlight,success,error,warning.","default":""},"weight":{"type":"PropTypes.number","desc":"Set the CircularLoading border-width."},"type":{"type":"PropTypes.string","desc":"Set the border style of CircularLoading,can use solid,dotted.","default":"solid"}}');var v=n(93379),Z=n.n(v),b=n(73839);Z()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;const x=function(e){s()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=m()(t);if(n){var a=m()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function l(e){return a()(this,l),r.call(this,e)}return c()(l,[{key:"render",value:function(){return d.createElement("div",{className:"example circular-loading-examples"},d.createElement("h2",{className:"example-title"},"CircularLoading"),d.createElement("p",null,d.createElement("span",null,"CircularLoading"),"use to show pages and blocks loading status."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(h.Z,null,d.createElement(g.Z,{className:"example-header",title:"CircularLoading Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"A simple CircularLoading example."),d.createElement(f.Z,{spanning:!0})))),d.createElement(h.Z,null,d.createElement(g.Z,{className:"example-header",title:"CircularLoading Size Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"Set the size property to small or large for different size CircularLoading."),d.createElement(f.Z,{spanning:!0,size:"small"}),d.createElement(f.Z,{spanning:!0}),d.createElement(f.Z,{spanning:!0,size:"large"})))),d.createElement(h.Z,null,d.createElement(g.Z,{className:"example-header",title:"CircularLoading Theme Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"Set the theme property for different theme CircularLoading."),d.createElement(f.Z,{spanning:!0}),d.createElement(f.Z,{spanning:!0,theme:f.Z.Theme.SUCCESS}),d.createElement(f.Z,{spanning:!0,theme:f.Z.Theme.ERROR}),d.createElement(f.Z,{spanning:!0,theme:f.Z.Theme.WARNING}),d.createElement(f.Z,{spanning:!0,theme:f.Z.Theme.HIGHLIGHT})))),d.createElement(h.Z,null,d.createElement(g.Z,{className:"example-header",title:"CircularLoading Type Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"Set the type property for different border-style CircularLoading."),d.createElement(f.Z,{spanning:!0}),d.createElement(f.Z,{spanning:!0,type:"dotted"})))),d.createElement(h.Z,null,d.createElement(g.Z,{className:"example-header",title:"CircularLoading Weight Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("p",null,"Set the weight property for different border-width CircularLoading."),d.createElement(f.Z,{spanning:!0,weight:4,size:f.Z.Size.LARGE}),d.createElement(f.Z,{spanning:!0,weight:2,type:"dotted"})))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(y.Z,{data:E}))}}]),l}(d.Component)}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{242:function(e,t,a){"use strict";var r=a(51),n=a.n(r),l=a(52),c=a.n(l),o=a(19),s=a.n(o),u=a(53),i=a.n(u),p=a(36),m=a.n(p),d=a(54),f=a.n(d),b=a(9),h=a.n(b),E=a(0),y=a.n(E),g=a(93),v=a.n(g),w=a(249);a(243);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var j=function(e){f()(r,e);var t,a=(t=r,function(){var e,a=m()(t);if(P()){var r=m()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return i()(this,e)});function r(e){var t;return n()(this,r),t=a.call(this,e),h()(s()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(N({name:a},t.props.data[a]));return e})),t}return c()(r,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(w.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),r}(E.Component);j.propTypes={data:v.a.object},t.a=j},243:function(e,t,a){var r=a(94),n=a(244);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1},c=(r(n,l),n.locals?n.locals:{});e.exports=c},244:function(e,t,a){(t=a(95)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},349:function(e,t,a){"use strict";a.d(t,"a",(function(){return T}));var r=a(51),n=a.n(r),l=a(52),c=a.n(l),o=a(19),s=a.n(o),u=a(53),i=a.n(u),p=a(36),m=a.n(p),d=a(54),f=a.n(d),b=a(9),h=a.n(b),E=a(0),y=a.n(E),g=a(93),v=a.n(g),w=a(98),O=a.n(w),N=a(238),P=a.n(N),j=a(273),I={PENDING:0,LOADING:1,FINISH:2},S=a(263);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var L=function(e){f()(r,e);var t,a=(t=r,function(){var e,a=m()(t);if(D()){var r=m()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return i()(this,e)});function r(e){var t;n()(this,r);for(var l=arguments.length,c=new Array(l>1?l-1:0),o=1;o<l;o++)c[o-1]=arguments[o];return t=a.call.apply(a,[this,e].concat(c)),h()(s()(t),"handleScroll",O()((function(){if(!(t.state.status>I.PENDING||!t.wrapperEl||t.wrapperEl.getBoundingClientRect().top>window.innerHeight)){var e,a=t.props.onImageLoadStart;a&&(e=a()),!1!==e&&t.setState({status:I.LOADING},(function(){var e=new Image;S.a.addEvent(e,"load",(function(e){t.setState({status:I.FINISH},(function(){var a=t.props.onImageLoaded;a&&a(e)}))})),e.src=t.props.src}))}}),250)),t.wrapper=Object(E.createRef)(),t.state={status:I.PENDING},t}return c()(r,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,S.a.addEvent(this.props.scrollEl,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){S.a.removeEvent(this.props.scrollEl,"scroll",this.handleScroll),this.handleScroll&&this.handleScroll.cancel()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,r=e.src,n=e.alt,l=e.loadingWidth,c=e.loadingHeight,o=e.width,s=e.height,u=e.placeholder,i=this.state.status===I.FINISH;return(y.a.createElement("div",{ref:this.wrapper,className:P()("lazy-image",h()({},t,t)),style:x({},a,{width:i?o:l,height:i?s:c})},y.a.createElement("img",{className:"lazy-image-img",src:i?r:"",alt:n,width:o,height:s}),y.a.createElement("div",{className:P()("lazy-image-placeholder",{hidden:i})},u||y.a.createElement(j.a,{className:"lazy-image-loading"}))))}}]),r}(E.Component);h()(L,"Status",I),L.propTypes={className:v.a.string,style:v.a.object,src:v.a.string.isRequired,alt:v.a.string,loadingWidth:v.a.number,loadingHeight:v.a.number,width:v.a.number,height:v.a.number,placeholder:v.a.any,scrollEl:v.a.object,onImageLoadStart:v.a.func,onImageLoaded:v.a.func},L.defaultProps={alt:"",placeholder:"",scrollEl:document,loadingWidth:100,loadingHeight:100};var T=L},708:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"src":{"type":"PropTypes.string","desc":"Image src url."},"alt":{"type":"PropTypes.string","desc":"Image alt text.","default":""},"loadingWidth":{"type":"PropTypes.number","desc":"Loading width.","default":"100"},"loadingHeight":{"type":"PropTypes.number","desc":"Loading height.","default":"100"},"width":{"type":"PropTypes.number","desc":"Image width."},"height":{"type":"PropTypes.number","desc":"Image height."},"placeholder":{"type":"PropTypes.any","desc":"Image placeholder.","default":""},"scrollEl":{"type":"PropTypes.object","default":"document"},"onImageLoadStart":{"type":"PropTypes.func","desc":"Image load start callback."},"onImageLoaded":{"type":"PropTypes.func","desc":"Image load end callback."}}')},814:function(e,t,a){"use strict";a.r(t);var r=a(51),n=a.n(r),l=a(52),c=a.n(l),o=a(53),s=a.n(o),u=a(36),i=a.n(u),p=a(54),m=a.n(p),d=a(0),f=a.n(d),b=a(247),h=a(246),E=a(349),y=a(242),g=a(708);function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var w=function(e){m()(r,e);var t,a=(t=r,function(){var e,a=i()(t);if(v()){var r=i()(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return s()(this,e)});function r(e){return n()(this,r),a.call(this,e)}return c()(r,[{key:"render",value:function(){var e="https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true";return(f.a.createElement("div",{className:"example lazy-image-examples"},f.a.createElement("h2",{className:"example-title"},"Lazy Image"),f.a.createElement("p",null,f.a.createElement("span",null,"Lazy Image"),"use for delayed loading of images."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(b.a,null,f.a.createElement(h.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,"Long",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"Article"),f.a.createElement(E.a,{src:"https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true"}))))),f.a.createElement(b.a,null,f.a.createElement(h.a,{className:"example-header",title:"Specified Size"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,"Long",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"Article"),f.a.createElement(E.a,{src:e,width:400}))))),f.a.createElement(b.a,null,f.a.createElement(h.a,{className:"example-header",title:"Prevent Load"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,"Long",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"...",f.a.createElement("br",null),"Article"),f.a.createElement(E.a,{src:e,onImageLoadStart:function(){return!1}}))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(y.a,{data:g})))}}]),r}(d.Component);t.default=w}}]);
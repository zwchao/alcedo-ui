(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{292:function(e,t,a){"use strict";var r=a(61),n=a.n(r),l=a(62),c=a.n(l),s=a(63),o=a.n(s),i=a(64),m=a.n(i),u=a(21),p=a.n(u),d=a(65),b=a.n(d),E=a(9),h=a.n(E),g=a(0),y=a.n(g),f=a(287),v=a.n(f),w=a(299);a(293);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){function t(e){var a;return n()(this,t),a=o()(this,m()(t).call(this,e)),h()(p()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(N({name:t},a.props.data[t]));return e})),a}return b()(t,e),c()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(w.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(g.Component);P.propTypes={data:v.a.object},t.a=P},293:function(e,t,a){var r=a(113),n=a(294);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1},c=(r(n,l),n.locals?n.locals:{});e.exports=c},294:function(e,t,a){(t=a(114)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},398:function(e,t,a){"use strict";var r=a(61),n=a.n(r),l=a(62),c=a.n(l),s=a(63),o=a.n(s),i=a(64),m=a.n(i),u=a(21),p=a.n(u),d=a(65),b=a.n(d),E=a(9),h=a.n(E),g=a(0),y=a.n(g),f=a(287),v=a.n(f),w=a(116),O=a.n(w),N=a(288),P=a.n(N),j=a(324),I={PENDING:0,LOADING:1,FINISH:2},S=a(313);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(Object(a),!0).forEach((function(t){h()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){function t(e){var a,r;n()(this,t);for(var l=arguments.length,c=new Array(l>1?l-1:0),s=1;s<l;s++)c[s-1]=arguments[s];return r=o()(this,(a=m()(t)).call.apply(a,[this,e].concat(c))),h()(p()(r),"handleScroll",O()((function(){if(!(r.state.status>I.PENDING||!r.wrapperEl||r.wrapperEl.getBoundingClientRect().top>window.innerHeight)){var e,t=r.props.onImageLoadStart;t&&(e=t()),!1!==e&&r.setState({status:I.LOADING},(function(){var e=new Image;S.a.addEvent(e,"load",(function(e){r.setState({status:I.FINISH},(function(){var t=r.props.onImageLoaded;t&&t(e)}))})),e.src=r.props.src}))}}),250)),r.wrapper=Object(g.createRef)(),r.state={status:I.PENDING},r}return b()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,S.a.addEvent(this.props.scrollEl,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){S.a.removeEvent(this.props.scrollEl,"scroll",this.handleScroll),this.handleScroll&&this.handleScroll.cancel()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,r=e.src,n=e.alt,l=e.loadingWidth,c=e.loadingHeight,s=e.width,o=e.height,i=e.placeholder,m=this.state.status===I.FINISH;return y.a.createElement("div",{ref:this.wrapper,className:P()("lazy-image",h()({},t,t)),style:D({},a,{width:m?s:l,height:m?o:c})},y.a.createElement("img",{className:"lazy-image-img",src:m?r:"",alt:n,width:s,height:o}),y.a.createElement("div",{className:P()("lazy-image-placeholder",{hidden:m})},i||y.a.createElement(j.a,{className:"lazy-image-loading"})))}}]),t}(g.Component);h()(L,"Status",I),L.propTypes={className:v.a.string,style:v.a.object,src:v.a.string.isRequired,alt:v.a.string,loadingWidth:v.a.number,loadingHeight:v.a.number,width:v.a.number,height:v.a.number,placeholder:v.a.any,scrollEl:v.a.object,onImageLoadStart:v.a.func,onImageLoaded:v.a.func},L.defaultProps={alt:"",placeholder:"",scrollEl:document,loadingWidth:100,loadingHeight:100};var T=L;a.d(t,"a",(function(){return T}))},758:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"src":{"type":"PropTypes.string","desc":"Image src url."},"alt":{"type":"PropTypes.string","desc":"Image alt text.","default":""},"loadingWidth":{"type":"PropTypes.number","desc":"Loading width.","default":"100"},"loadingHeight":{"type":"PropTypes.number","desc":"Loading height.","default":"100"},"width":{"type":"PropTypes.number","desc":"Image width."},"height":{"type":"PropTypes.number","desc":"Image height."},"placeholder":{"type":"PropTypes.any","desc":"Image placeholder.","default":""},"scrollEl":{"type":"PropTypes.object","default":"document"},"onImageLoadStart":{"type":"PropTypes.func","desc":"Image load start callback."},"onImageLoaded":{"type":"PropTypes.func","desc":"Image load end callback."}}')},864:function(e,t,a){"use strict";a.r(t);var r=a(61),n=a.n(r),l=a(62),c=a.n(l),s=a(63),o=a.n(s),i=a(64),m=a.n(i),u=a(65),p=a.n(u),d=a(0),b=a.n(d),E=a(296),h=a(297),g=a(398),y=a(292),f=a(758),v=function(e){function t(e){return n()(this,t),o()(this,m()(t).call(this,e))}return p()(t,e),c()(t,[{key:"render",value:function(){var e="https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true";return b.a.createElement("div",{className:"example lazy-image-examples"},b.a.createElement("h2",{className:"example-title"},"Lazy Image"),b.a.createElement("p",null,b.a.createElement("span",null,"Lazy Image"),"use for delayed loading of images."),b.a.createElement("h2",{className:"example-title"},"Examples"),b.a.createElement(E.a,null,b.a.createElement(h.a,{className:"example-header",title:"Basic"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("div",{className:"examples-wrapper"},b.a.createElement("p",null,"Long",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"Article"),b.a.createElement(g.a,{src:"https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true"}))))),b.a.createElement(E.a,null,b.a.createElement(h.a,{className:"example-header",title:"Specified Size"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("div",{className:"examples-wrapper"},b.a.createElement("p",null,"Long",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"Article"),b.a.createElement(g.a,{src:e,width:400}))))),b.a.createElement(E.a,null,b.a.createElement(h.a,{className:"example-header",title:"Prevent Load"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("div",{className:"examples-wrapper"},b.a.createElement("p",null,"Long",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"...",b.a.createElement("br",null),"Article"),b.a.createElement(g.a,{src:e,onImageLoadStart:function(){return!1}}))))),b.a.createElement("h2",{className:"example-title"},"Properties"),b.a.createElement(y.a,{data:f}))}}]),t}(d.Component);t.default=v}}]);
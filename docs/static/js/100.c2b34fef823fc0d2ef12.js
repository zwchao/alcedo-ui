(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{424:function(e,a,t){"use strict";var l=t(10),n=t.n(l),r=t(108),c=t.n(r),m=t(109),s=t.n(m),o=t(110),i=t.n(o),u=t(111),p=t.n(u),d=t(112),E=t.n(d),b=t(0),h=t.n(b),g=t(428),y=(t(425),function(e){function a(e){s()(this,a);var t=p()(this,(a.__proto__||c()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return E()(a,e),i()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return h.a.createElement("div",{className:"prop-type-desc-table-wrapper"},h.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(b.Component));y.defaultProps={data:null},a.a=y},425:function(e,a,t){var l=t(426);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(184)(l,n);l.locals&&(e.exports=l.locals)},426:function(e,a,t){(e.exports=t(183)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},528:function(e,a,t){"use strict";var l=t(10),n=t.n(l),r=t(405),c=t.n(r),m=t(108),s=t.n(m),o=t(109),i=t.n(o),u=t(110),p=t.n(u),d=t(111),E=t.n(d),b=t(112),h=t.n(b),g=t(0),y=t.n(g),f=t(409),v=t.n(f),w=t(421),N=t.n(w),x=t(444),I=t(431),P=function(e){function a(e){var t;i()(this,a);for(var l=arguments.length,n=Array(l>1?l-1:0),r=1;r<l;r++)n[r-1]=arguments[r];var c=E()(this,(t=a.__proto__||s()(a)).call.apply(t,[this,e].concat(n)));return c.scrollHandler=v()(function(){if(!(c.state.imageState>0)&&c.wrapperEl&&c.wrapperEl.getBoundingClientRect().top<window.innerHeight){var e=c.props.onImageLoadStart,a=void 0;if(e&&(a=e()),!1===a)return;c.setState({imageState:1},function(){var e=new Image;I.a.addEvent(e,"load",function(e){c.setState({imageState:2},function(){var a=c.props.onImageLoaded;a&&a(e)})}),e.src=c.props.src})}},250),c.state={imageState:0},c}return h()(a,e),p()(a,[{key:"componentDidMount",value:function(){this.wrapperEl=this.refs.wrapper,I.a.addEvent(document,"scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){I.a.removeEvent(document,"scroll",this.scrollHandler)}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,l=e.src,r=e.alt,m=e.loadingWidth,s=e.loadingHeight,o=e.width,i=e.height,u=e.placeholder,p=this.state.imageState,d=N()("lazy-image",c()({},a,a)),E=n()({},t,{width:2===p?o:m,height:2===p?i:s}),b=N()("lazy-image-placeholder",{hidden:2===p});return y.a.createElement("div",{ref:"wrapper",className:d,style:E},y.a.createElement("img",{className:"lazy-image-img",src:2===p?l:"",alt:r,width:o,height:i}),y.a.createElement("div",{className:b},u?{placeholder:u}:y.a.createElement(x.a,{className:"lazy-image-loading"})))}}]),a}(g.Component);P.defaultProps={alt:"",loadingWidth:100,loadingHeight:100,placeholder:""};var S=P;t.d(a,"a",function(){return S})},825:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},src:{type:"PropTypes.string",desc:"Image src url."},alt:{type:"PropTypes.string",desc:"Image alt text.",default:""},loadingWidth:{type:"PropTypes.number",desc:"Loading width.",default:"100"},loadingHeight:{type:"PropTypes.number",desc:"Loading height.",default:"100"},width:{type:"PropTypes.number",desc:"Image width."},height:{type:"PropTypes.number",desc:"Image height."},placeholder:{type:"PropTypes.any",desc:"Image placeholder.",default:""},onImageLoadStart:{type:"PropTypes.func",desc:"Image load start callback."},onImageLoaded:{type:"PropTypes.func",desc:"Image load end callback."}}},923:function(e,a,t){"use strict";t.r(a);var l=t(108),n=t.n(l),r=t(109),c=t.n(r),m=t(110),s=t.n(m),o=t(111),i=t.n(o),u=t(112),p=t.n(u),d=t(0),E=t.n(d),b=t(430),h=t(429),g=t(528),y=t(424),f=t(825),v=function(e){function a(e){return c()(this,a),i()(this,(a.__proto__||n()(a)).call(this,e))}return p()(a,e),s()(a,[{key:"render",value:function(){var e="https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true";return E.a.createElement("div",{className:"example lazy-image-examples"},E.a.createElement("h2",{className:"example-title"},"Lazy Image"),E.a.createElement("p",null,E.a.createElement("span",null,"Lazy Image"),"use for delayed loading of images."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:"https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true"}))))),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Specified Size"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:e,width:400}))))),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Prevent Load"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:e,onImageLoadStart:function(){return!1}}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(y.a,{data:f}))}}]),a}(d.Component);a.default=v}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{475:function(e,a,t){(e.exports=t(83)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},476:function(e,a,t){var l=t(475);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(82)(l,n);l.locals&&(e.exports=l.locals)},477:function(e,a,t){"use strict";var l=t(4),n=t.n(l),r=t(12),c=t.n(r),m=t(7),s=t.n(m),o=t(11),i=t.n(o),u=t(5),p=t.n(u),d=t(6),E=t.n(d),b=t(1),g=t.n(b),h=t(0),y=t.n(h),f=t(478),v=(t(476),function(e){function a(e){s()(this,a);var t=p()(this,(a.__proto__||c()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return E()(a,e),i()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(f.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(b.Component));v.propTypes={data:y.a.object},v.defaultProps={data:null},a.a=v},556:function(e,a,t){"use strict";var l,n=t(4),r=t.n(n),c=t(8),m=t.n(c),s=t(12),o=t.n(s),i=t(7),u=t.n(i),p=t(11),d=t.n(p),E=t(5),b=t.n(E),g=t(6),h=t.n(g),y=t(1),f=t.n(y),v=t(0),w=t.n(v),N=t(169),x=t.n(N),I=t(9),P=t.n(I),L=t(58),S=t(14),T=t(18),_=Object(S.a)(l=function(e){function a(e){var t;u()(this,a);for(var l=arguments.length,n=Array(l>1?l-1:0),r=1;r<l;r++)n[r-1]=arguments[r];var c=b()(this,(t=a.__proto__||o()(a)).call.apply(t,[this,e].concat(n)));return c.scrollHandler=x()(function(){if(!(c.state.imageState>0)&&c.wrapperEl&&c.wrapperEl.getBoundingClientRect().top<window.innerHeight){var e=c.props.onImageLoadStart,a=void 0;if(e&&(a=e()),!1===a)return;c.setState({imageState:1},function(){var e=new Image;T.a.addEvent(e,"load",function(e){c.setState({imageState:2},function(){var a=c.props.onImageLoaded;a&&a(e)})}),e.src=c.props.src})}},250),c.state={imageState:0},c.scrollHandler=c.scrollHandler.bind(c),c}return h()(a,e),d()(a,[{key:"componentDidMount",value:function(){this.wrapperEl=this.refs.wrapper,T.a.addEvent(document,"scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){T.a.removeEvent(document,"scroll",this.scrollHandler)}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,l=e.src,n=e.alt,c=e.loadingWidth,s=e.loadingHeight,o=e.width,i=e.height,u=e.placeholder,p=this.state.imageState,d=P()("lazy-image",m()({},a,a)),E=r()({},t,{width:2===p?o:c,height:2===p?i:s}),b=P()("lazy-image-placeholder",{hidden:2===p});return f.a.createElement("div",{ref:"wrapper",className:d,style:E},f.a.createElement("img",{className:"lazy-image-img",src:2===p?l:"",alt:n,width:o,height:i}),f.a.createElement("div",{className:b},u?{placeholder:u}:f.a.createElement(L.a,{className:"lazy-image-loading"})))}}]),a}(y.Component))||l;_.propTypes={className:w.a.string,style:w.a.object,src:w.a.string.isRequired,alt:w.a.string,loadingWidth:w.a.number,loadingHeight:w.a.number,width:w.a.number,height:w.a.number,placeholder:w.a.any,onImageLoadStart:w.a.func,onImageLoaded:w.a.func},_.defaultProps={alt:"",loadingWidth:100,loadingHeight:100,placeholder:""};var k=_;t.d(a,"a",function(){return k})},584:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},src:{type:"PropTypes.string",desc:"Image src url."},alt:{type:"PropTypes.string",desc:"Image alt text.",default:""},loadingWidth:{type:"PropTypes.number",desc:"Loading width.",default:"100"},loadingHeight:{type:"PropTypes.number",desc:"Loading height.",default:"100"},width:{type:"PropTypes.number",desc:"Image width."},height:{type:"PropTypes.number",desc:"Image height."},placeholder:{type:"PropTypes.any",desc:"Image placeholder.",default:""},onImageLoadStart:{type:"PropTypes.func",desc:"Image load start callback."},onImageLoaded:{type:"PropTypes.func",desc:"Image load end callback."}}},818:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return v});var l=t(12),n=t.n(l),r=t(7),c=t.n(r),m=t(11),s=t.n(m),o=t(5),i=t.n(o),u=t(6),p=t.n(u),d=t(1),E=t.n(d),b=t(480),g=t(479),h=t(556),y=t(477),f=t(584),v=function(e){function a(e){return c()(this,a),i()(this,(a.__proto__||n()(a)).call(this,e))}return p()(a,e),s()(a,[{key:"render",value:function(){var e="https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true";return E.a.createElement("div",{className:"example lazy-image-examples"},E.a.createElement("h2",{className:"example-title"},"Lazy Image"),E.a.createElement("p",null,E.a.createElement("span",null,"Lazy Image"),"use for delayed loading of images."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(b.a,null,E.a.createElement(g.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(h.a,{src:"https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true"}))))),E.a.createElement(b.a,null,E.a.createElement(g.a,{className:"example-header",title:"Specified Size"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(h.a,{src:e,width:400}))))),E.a.createElement(b.a,null,E.a.createElement(g.a,{className:"example-header",title:"Prevent Load"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(h.a,{src:e,onImageLoadStart:function(){return!1}}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(y.a,{data:f}))}}]),a}(d.Component)}}]);
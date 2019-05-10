(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{348:function(e,a,t){"use strict";var l=t(4),n=t.n(l),r=t(61),c=t.n(r),s=t(62),m=t.n(s),o=t(63),i=t.n(o),u=t(64),p=t.n(u),d=t(22),E=t.n(d),b=t(65),h=t.n(b),g=t(0),y=t.n(g),f=t(15),v=t.n(f),w=t(354),N=(t(349),function(e){function a(e){var t,l;return c()(this,a),(l=i()(this,p()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],l.generateData=(t=E()(l),l.generateData).bind(t),l}return h()(a,e),m()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(w.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(g.Component));N.propTypes={data:v.a.object},N.defaultProps={data:null},a.a=N},349:function(e,a,t){var l=t(350);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(133)(l,n);l.locals&&(e.exports=l.locals)},350:function(e,a,t){(e.exports=t(132)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},450:function(e,a,t){"use strict";var l=t(4),n=t.n(l),r=t(61),c=t.n(r),s=t(62),m=t.n(s),o=t(63),i=t.n(o),u=t(64),p=t.n(u),d=t(22),E=t.n(d),b=t(65),h=t.n(b),g=t(23),y=t.n(g),f=t(0),v=t.n(f),w=t(15),N=t.n(w),I=t(335),x=t.n(I),P=t(343),S=t.n(P),L=t(433),T=t.n(L),D=t(434),k=t.n(D),z=t(379),H={PENDING:0,LOADING:1,FINISH:2},j=t(361),A=function(e){function a(e){var t,l;c()(this,a);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return l=i()(this,(t=p()(a)).call.apply(t,[this,e].concat(r))),y()(E()(l),"handleScroll",x()(function(){if(!(l.state.status>H.PENDING||!l.wrapperEl||l.wrapperEl.getBoundingClientRect().top>window.innerHeight)){var e,a=l.props.onImageLoadStart;a&&(e=a()),!1!==e&&l.setState({status:H.LOADING},function(){var e=new Image;j.a.addEvent(e,"load",function(e){l.setState({status:H.FINISH},function(){var a=l.props.onImageLoaded;a&&a(e)})}),e.src=l.props.src})}},250)),l.wrapper=Object(f.createRef)(),l.state={status:H.PENDING},l}return h()(a,e),m()(a,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,T()(this.props.scrollEl,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){k()(this.props.scrollEl,"scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,l=e.src,r=e.alt,c=e.loadingWidth,s=e.loadingHeight,m=e.width,o=e.height,i=e.placeholder,u=this.state.status===H.FINISH;return v.a.createElement("div",{ref:this.wrapper,className:S()("lazy-image",y()({},a,a)),style:n()({},t,{width:u?m:c,height:u?o:s})},v.a.createElement("img",{className:"lazy-image-img",src:u?l:"",alt:r,width:m,height:o}),v.a.createElement("div",{className:S()("lazy-image-placeholder",{hidden:u})},i||v.a.createElement(z.a,{className:"lazy-image-loading"})))}}]),a}(f.Component);y()(A,"Status",H),A.propTypes={className:N.a.string,style:N.a.object,src:N.a.string.isRequired,alt:N.a.string,loadingWidth:N.a.number,loadingHeight:N.a.number,width:N.a.number,height:N.a.number,placeholder:N.a.any,scrollEl:N.a.object,onImageLoadStart:N.a.func,onImageLoaded:N.a.func},A.defaultProps={alt:"",placeholder:"",scrollEl:document,loadingWidth:100,loadingHeight:100};var C=A;t.d(a,"a",function(){return C})},805:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},src:{type:"PropTypes.string",desc:"Image src url."},alt:{type:"PropTypes.string",desc:"Image alt text.",default:""},loadingWidth:{type:"PropTypes.number",desc:"Loading width.",default:"100"},loadingHeight:{type:"PropTypes.number",desc:"Loading height.",default:"100"},width:{type:"PropTypes.number",desc:"Image width."},height:{type:"PropTypes.number",desc:"Image height."},placeholder:{type:"PropTypes.any",desc:"Image placeholder.",default:""},scrollEl:{type:"PropTypes.object",default:"document"},onImageLoadStart:{type:"PropTypes.func",desc:"Image load start callback."},onImageLoaded:{type:"PropTypes.func",desc:"Image load end callback."}}},910:function(e,a,t){"use strict";t.r(a);var l=t(61),n=t.n(l),r=t(62),c=t.n(r),s=t(63),m=t.n(s),o=t(64),i=t.n(o),u=t(65),p=t.n(u),d=t(0),E=t.n(d),b=t(353),h=t(352),g=t(450),y=t(348),f=t(805),v=function(e){function a(e){return n()(this,a),m()(this,i()(a).call(this,e))}return p()(a,e),c()(a,[{key:"render",value:function(){var e="https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true";return E.a.createElement("div",{className:"example lazy-image-examples"},E.a.createElement("h2",{className:"example-title"},"Lazy Image"),E.a.createElement("p",null,E.a.createElement("span",null,"Lazy Image"),"use for delayed loading of images."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:"https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true"}))))),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Specified Size"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:e,width:400}))))),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Prevent Load"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:e,onImageLoadStart:function(){return!1}}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(y.a,{data:f}))}}]),a}(d.Component);a.default=v}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{348:function(e,n,a){"use strict";var t=a(4),r=a.n(t),o=a(61),l=a.n(o),s=a(62),d=a.n(s),i=a(63),c=a.n(i),p=a(64),u=a.n(p),m=a(22),f=a.n(m),h=a(65),v=a.n(h),w=a(0),y=a.n(w),g=a(15),E=a.n(g),x=a(354),b=(a(349),function(e){function n(e){var a,t;return l()(this,n),(t=c()(this,u()(n).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=(a=f()(t),t.generateData).bind(a),t}return v()(n,e),d()(n,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var n in this.props.data)e.push(r()({name:n},this.props.data[n]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(x.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),n}(w.Component));b.propTypes={data:E.a.object},b.defaultProps={data:null},n.a=b},349:function(e,n,a){var t=a(350);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(133)(t,r);t.locals&&(e.exports=t.locals)},350:function(e,n,a){(e.exports=a(132)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},455:function(e,n,a){"use strict";var t=a(61),r=a.n(t),o=a(62),l=a.n(o),s=a(63),d=a.n(s),i=a(64),c=a.n(i),p=a(22),u=a.n(p),m=a(65),f=a.n(m),h=a(23),v=a.n(h),w=a(0),y=a.n(w),g=a(15),E=a.n(g),x=function(e){function n(e){var a,t;r()(this,n);for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return t=d()(this,(a=c()(n)).call.apply(a,[this,e].concat(l))),v()(u()(t),"download",function(){t.setState({downloading:!0})}),v()(u()(t),"loadedHandler",function(e){t.setState({downloading:!1},function(){var n=t.props.onLoad,a=t.refs.iframe;a&&n&&n(e,a.contentDocument?a.contentDocument.body.innerText:void 0)})}),t.state={downloading:!1},t}return f()(n,e),l()(n,[{key:"shouldComponentUpdate",value:function(e,n){return n.downloading!==this.state.downloading}},{key:"render",value:function(){var e=this.props.url,n=this.state.downloading;return n?y.a.createElement("iframe",{ref:"iframe",className:"download-field",onLoad:this.loadedHandler,onError:this.loadedHandler,src:n?e:null}):null}}]),n}(w.Component);x.propTypes={url:E.a.string,onLoad:E.a.func},x.defaultProps={url:null};var b=x;a.d(n,"a",function(){return b})},663:function(e){e.exports={url:{type:"PropTypes.string",desc:"Download url.",default:"null"},onLoad:{type:"PropTypes.func",desc:"Loaded callback."}}},664:function(e,n,a){var t=a(665);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(133)(t,r);t.locals&&(e.exports=t.locals)},665:function(e,n,a){(e.exports=a(132)(!1)).push([e.i,".download-field-examples .raised-button {\n  width: auto; }\n",""])},851:function(e,n,a){"use strict";a.r(n);var t=a(61),r=a.n(t),o=a(62),l=a.n(o),s=a(63),d=a.n(s),i=a(64),c=a.n(i),p=a(22),u=a.n(p),m=a(65),f=a.n(m),h=a(23),v=a.n(h),w=a(0),y=a.n(w),g=a(351),E=a(455),x=a(353),b=a(352),N=a(348),D=a(663),k=(a(664),function(e){function n(e){var a;return r()(this,n),a=d()(this,c()(n).call(this,e)),v()(u()(a),"downloadFieldRef",Object(w.createRef)()),v()(u()(a),"download",function(){a.downloadFieldRef.current.download()}),a}return f()(n,e),l()(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"example download-field-examples"},y.a.createElement("h2",{className:"example-title"},"DownloadField"),y.a.createElement("p",null,y.a.createElement("span",null,"DownloadField")," allow users to download a file."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(x.a,null,y.a.createElement(b.a,{className:"example-header",title:"Basic"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement(E.a,{ref:this.downloadFieldRef,url:"https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg",onLoad:function(e,n){console.log(e,n)}}),y.a.createElement(g.a,{value:"Download NodeJs",theme:g.a.Theme.PRIMARY,onClick:this.download}))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(N.a,{data:D}))}}]),n}(w.Component));n.default=k}}]);
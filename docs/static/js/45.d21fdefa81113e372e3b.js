(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{500:function(e,n,a){"use strict";a(466);var t=a(12),r=a.n(t),o=(a(470),a(126)),l=a.n(o),s=a(127),d=a.n(s),i=a(128),c=a.n(i),p=a(129),u=a.n(p),m=a(130),f=a.n(m),h=a(20),v=a.n(h),w=a(0),y=a.n(w),E=a(504),k=(a(501),function(e){function n(e){var a,t;return l()(this,n),(t=c()(this,u()(n).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=(a=v()(v()(t)),t.generateData).bind(a),t}return f()(n,e),d()(n,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var n in this.props.data)e.push(r()({name:n},this.props.data[n]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),n}(w.Component));k.defaultProps={data:null},n.a=k},501:function(e,n,a){var t=a(502);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(210)(t,r);t.locals&&(e.exports=t.locals)},502:function(e,n,a){(e.exports=a(209)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},643:function(e,n,a){"use strict";var t=a(126),r=a.n(t),o=a(127),l=a.n(o),s=a(128),d=a.n(s),i=a(129),c=a.n(i),p=a(130),u=a.n(p),m=a(20),f=a.n(m),h=a(40),v=a.n(h),w=a(0),y=a.n(w),E=function(e){function n(e){var a,t;r()(this,n);for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return t=d()(this,(a=c()(n)).call.apply(a,[this,e].concat(l))),v()(f()(f()(t)),"download",function(){t.setState({key:t.state.key+1})}),v()(f()(f()(t)),"loadedHandler",function(e){var n=t.props.onLoad,a=t.refs.iframe;a&&n&&n(e,a.contentDocument?a.contentDocument.body.innerText:void 0)}),t.state={key:0},t}return u()(n,e),l()(n,[{key:"shouldComponentUpdate",value:function(e,n){return n.key!==this.state.key}},{key:"render",value:function(){var e=this.props.url,n=this.state.key;return n>0?y.a.createElement("iframe",{key:n,ref:"iframe",className:"download-field",onLoad:this.loadedHandler,onError:this.loadedHandler,src:n>0?e:null}):null}}]),n}(w.Component);E.defaultProps={url:null};var k=E;a.d(n,"a",function(){return k})},781:function(e){e.exports={url:{type:"PropTypes.string",desc:"Download url.",default:"null"},onLoad:{type:"PropTypes.func",desc:"Loaded callback."}}},782:function(e,n,a){var t=a(783);"string"==typeof t&&(t=[[e.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(210)(t,r);t.locals&&(e.exports=t.locals)},783:function(e,n,a){(e.exports=a(209)(!1)).push([e.i,".download-field-examples .raised-button {\n  width: auto; }\n",""])},953:function(e,n,a){"use strict";a.r(n);var t=a(126),r=a.n(t),o=a(127),l=a.n(o),s=a(128),d=a.n(s),i=a(129),c=a.n(i),p=a(130),u=a.n(p),m=a(20),f=a.n(m),h=a(40),v=a.n(h),w=a(0),y=a.n(w),E=a(511),k=a(643),x=a(506),g=a(505),b=a(500),N=a(781),D=(a(782),function(e){function n(e){var a;return r()(this,n),a=d()(this,c()(n).call(this,e)),v()(f()(f()(a)),"downloadFieldRef",Object(w.createRef)()),v()(f()(f()(a)),"download",function(){a.downloadFieldRef.current.download()}),a}return u()(n,e),l()(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"example download-field-examples"},y.a.createElement("h2",{className:"example-title"},"DownloadField"),y.a.createElement("p",null,y.a.createElement("span",null,"DownloadField")," allow users to download a file."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(x.a,null,y.a.createElement(g.a,{className:"example-header",title:"Basic"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement(k.a,{ref:this.downloadFieldRef,url:"https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg",onLoad:function(e,n){console.log(e,n)}}),y.a.createElement(E.a,{value:"Download NodeJs",theme:E.a.Theme.PRIMARY,onClick:this.download}))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(b.a,{data:N}))}}]),n}(w.Component));n.default=D}}]);
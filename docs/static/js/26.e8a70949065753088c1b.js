(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{339:function(e,a,t){"use strict";var n=t(4),r=t.n(n),l=t(57),s=t.n(l),i=t(58),c=t.n(i),o=t(59),p=t.n(o),m=t(60),d=t.n(m),u=t(19),g=t.n(u),h=t(61),E=t.n(h),f=t(0),y=t.n(f),v=t(333),x=t.n(v),w=t(345),N=(t(340),function(e){function a(e){var t,n;return s()(this,a),(n=p()(this,d()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(t=g()(n),n.generateData).bind(t),n}return E()(a,e),c()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(r()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(w.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(f.Component));N.propTypes={data:x.a.object},N.defaultProps={data:null},a.a=N},340:function(e,a,t){var n=t(341);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(128)(n,r);n.locals&&(e.exports=n.locals)},341:function(e,a,t){(e.exports=t(127)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},790:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},size:{type:"PropTypes.oneOf",desc:"Set the size of loading,can use small or large.",default:"CircularLoading.Size.DEFAULT"},theme:{type:"PropTypes.string",desc:"Set the theme of loading,can use highlight,success,error,warning.",default:""},weight:{type:"PropTypes.number",desc:"Set the CircularLoading border-width."},type:{type:"PropTypes.string",desc:"Set the border style of CircularLoading,can use solid,dotted.",default:"solid"}}},791:function(e,a,t){var n=t(792);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(128)(n,r);n.locals&&(e.exports=n.locals)},792:function(e,a,t){(e.exports=t(127)(!1)).push([e.i,".circular-loading-examples .circular-loading {\n  margin-right: 25px; }\n",""])},899:function(e,a,t){"use strict";t.r(a);var n=t(57),r=t.n(n),l=t(58),s=t.n(l),i=t(59),c=t.n(i),o=t(60),p=t.n(o),m=t(61),d=t.n(m),u=t(0),g=t.n(u),h=t(370),E=t(344),f=t(343),y=t(339),v=t(790),x=(t(791),function(e){function a(e){return r()(this,a),c()(this,p()(a).call(this,e))}return d()(a,e),s()(a,[{key:"render",value:function(){return g.a.createElement("div",{className:"example circular-loading-examples"},g.a.createElement("h2",{className:"example-title"},"CircularLoading"),g.a.createElement("p",null,g.a.createElement("span",null,"CircularLoading")," use to show pages and blocks loading status."),g.a.createElement("h2",{className:"example-title"},"Examples"),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"A simple CircularLoading example."),g.a.createElement(h.a,{spanning:!0})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Size Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the size property to small or large for different size CircularLoading."),g.a.createElement(h.a,{spanning:!0,size:"small"}),g.a.createElement(h.a,{spanning:!0}),g.a.createElement(h.a,{spanning:!0,size:"large"})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Theme Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the theme property for different theme CircularLoading."),g.a.createElement(h.a,{spanning:!0}),g.a.createElement(h.a,{spanning:!0,theme:"success"}),g.a.createElement(h.a,{spanning:!0,theme:"error"}),g.a.createElement(h.a,{spanning:!0,theme:"warning"}),g.a.createElement(h.a,{spanning:!0,theme:"highlight"})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Type Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the type property for different border-style CircularLoading."),g.a.createElement(h.a,{spanning:!0}),g.a.createElement(h.a,{spanning:!0,type:"dotted"})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Weight Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the weight property for different border-width CircularLoading."),g.a.createElement(h.a,{spanning:!0,weight:5,size:"large"}),g.a.createElement(h.a,{spanning:!0,weight:2,type:"dotted"})))),g.a.createElement("h2",{className:"example-title"},"Properties"),g.a.createElement(y.a,{data:v}))}}]),a}(u.Component));a.default=x}}]);
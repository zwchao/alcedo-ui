(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{424:function(e,a,t){(e.exports=t(184)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},425:function(e,a,t){var n=t(424);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(183)(n,r);n.locals&&(e.exports=n.locals)},426:function(e,a,t){"use strict";var n=t(10),r=t.n(n),l=t(112),s=t.n(l),i=t(111),c=t.n(i),o=t(110),p=t.n(o),m=t(109),d=t.n(m),u=t(108),g=t.n(u),h=t(0),E=t.n(h),f=t(427),y=(t(425),function(e){function a(e){c()(this,a);var t=d()(this,(a.__proto__||s()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return g()(a,e),p()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(r()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return E.a.createElement("div",{className:"prop-type-desc-table-wrapper"},E.a.createElement(f.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(h.Component));y.defaultProps={data:null},a.a=y},581:function(e,a,t){(e.exports=t(184)(!1)).push([e.i,".circular-loading-examples .circular-loading{margin-right:25px}",""])},582:function(e,a,t){var n=t(581);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(183)(n,r);n.locals&&(e.exports=n.locals)},583:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},size:{type:"PropTypes.oneOf",desc:"Set the size of loading,can use small or large.",default:"CircularLoading.Size.DEFAULT"},theme:{type:"PropTypes.string",desc:"Set the theme of loading,can use highlight,success,error,warning.",default:""},weight:{type:"PropTypes.number",desc:"Set the CircularLoading border-width."},type:{type:"PropTypes.string",desc:"Set the border style of CircularLoading,can use solid,dotted.",default:"solid"}}},837:function(e,a,t){"use strict";t.r(a);var n=t(112),r=t.n(n),l=t(111),s=t.n(l),i=t(110),c=t.n(i),o=t(109),p=t.n(o),m=t(108),d=t.n(m),u=t(0),g=t.n(u),h=t(444),E=t(428),f=t(429),y=t(426),v=t(583),x=(t(582),function(e){function a(e){return s()(this,a),p()(this,(a.__proto__||r()(a)).call(this,e))}return d()(a,e),c()(a,[{key:"render",value:function(){return g.a.createElement("div",{className:"example circular-loading-examples"},g.a.createElement("h2",{className:"example-title"},"CircularLoading"),g.a.createElement("p",null,g.a.createElement("span",null,"CircularLoading")," use to show pages and blocks loading status."),g.a.createElement("h2",{className:"example-title"},"Examples"),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"A simple CircularLoading example."),g.a.createElement(h.a,{spanning:!0})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Size Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the size property to small or large for different size CircularLoading."),g.a.createElement(h.a,{spanning:!0,size:"small"}),g.a.createElement(h.a,{spanning:!0}),g.a.createElement(h.a,{spanning:!0,size:"large"})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Theme Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the theme property for different theme CircularLoading."),g.a.createElement(h.a,{spanning:!0}),g.a.createElement(h.a,{spanning:!0,theme:"success"}),g.a.createElement(h.a,{spanning:!0,theme:"error"}),g.a.createElement(h.a,{spanning:!0,theme:"warning"}),g.a.createElement(h.a,{spanning:!0,theme:"highlight"})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Type Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the type property for different border-style CircularLoading."),g.a.createElement(h.a,{spanning:!0}),g.a.createElement(h.a,{spanning:!0,type:"dotted"})))),g.a.createElement(E.a,null,g.a.createElement(f.a,{className:"example-header",title:"CircularLoading Weight Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("p",null,"Set the weight property for different border-width CircularLoading."),g.a.createElement(h.a,{spanning:!0,weight:5,size:"large"}),g.a.createElement(h.a,{spanning:!0,weight:2,type:"dotted"})))),g.a.createElement("h2",{className:"example-title"},"Properties"),g.a.createElement(y.a,{data:v}))}}]),a}(u.Component));a.default=x}}]);
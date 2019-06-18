(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{282:function(e,a,t){"use strict";var n=t(4),r=t.n(n),l=t(51),s=t.n(l),p=t(52),c=t.n(p),o=t(53),i=t.n(o),m=t(54),u=t.n(m),d=t(19),y=t.n(d),f=t(55),v=t.n(f),E=t(18),h=t.n(E),b=t(0),N=t.n(b),x=t(276),w=t.n(x),T=t(288),g=(t(283),function(e){function a(e){var t;return s()(this,a),t=i()(this,u()(a).call(this,e)),h()(y()(t),"generateData",function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(r()({name:a},t.props.data[a]));return e}),t}return v()(a,e),c()(a,[{key:"render",value:function(){return N.a.createElement("div",{className:"prop-type-desc-table-wrapper"},N.a.createElement(T.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(b.Component));g.propTypes={data:w.a.object},a.a=g},283:function(e,a,t){var n=t(284);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(107)(n,r);n.locals&&(e.exports=n.locals)},284:function(e,a,t){(e.exports=t(106)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},386:function(e,a,t){"use strict";var n=t(51),r=t.n(n),l=t(52),s=t.n(l),p=t(53),c=t.n(p),o=t(54),i=t.n(o),m=t(19),u=t.n(m),d=t(55),y=t.n(d),f=t(18),v=t.n(f),E=t(0),h=t.n(E),b=t(276),N=t.n(b),x=t(277),w=t.n(x),T={DOT:"dot",NUMBER:"number"},g=t(278),R=function(e){function a(e){var t,n;r()(this,a);for(var l=arguments.length,s=new Array(l>1?l-1:0),p=1;p<l;p++)s[p-1]=arguments[p];return n=c()(this,(t=i()(a)).call.apply(t,[this,e].concat(s))),v()(u()(n),"handleValue",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.value,a=n.props,t=a.type,r=a.overflowValue;return t!==T.NUMBER?null:null==r||e<=r?e:"".concat(r,"+")}),n}return y()(a,e),s()(a,[{key:"render",value:function(){var e=this.props,a=e.children,t=e.className,n=e.style,r=e.visible,l=e.type;return h.a.createElement("span",{className:w()("badge-wrapper",v()({"no-child":!a},t,t)),style:n},a,r?h.a.createElement("sup",{className:w()("badge","badge-".concat(l))},this.handleValue()):null)}}]),a}(E.Component);v()(R,"Type",T),R.propTypes={children:N.a.any,className:N.a.string,style:N.a.object,visible:N.a.bool,type:N.a.oneOf(g.a.enumerateValue(T)),value:N.a.number,overflowValue:N.a.number},R.defaultProps={visible:!0,type:T.DOT};var B=R;t.d(a,"a",function(){return B})},710:function(e){e.exports={children:{type:"PropTypes.any"},className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},visible:{type:"PropTypes.bool",default:"true"},type:{type:"PropTypes.oneOf",default:"BadgeType.DOT"},value:{type:"PropTypes.number"},overflowValue:{type:"PropTypes.number"}}},711:function(e,a,t){var n=t(712);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(107)(n,r);n.locals&&(e.exports=n.locals)},712:function(e,a,t){(e.exports=t(106)(!1)).push([e.i,".badge-examples .examples-wrapper .badge-wrapper {\n  margin-right: 16px; }\n\n.badge-examples .examples-wrapper .icon-button {\n  font-size: 20px; }\n",""])},840:function(e,a,t){"use strict";t.r(a);var n=t(51),r=t.n(n),l=t(52),s=t.n(l),p=t(53),c=t.n(p),o=t(54),i=t.n(o),m=t(55),u=t.n(m),d=t(0),y=t.n(d),f=t(386),v=t(294),E=t(287),h=t(286),b=t(282),N=t(710),x=(t(711),function(e){function a(e){return r()(this,a),c()(this,i()(a).call(this,e))}return u()(a,e),s()(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"example badge-examples"},y.a.createElement("h2",{className:"example-title"},"Badge"),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(E.a,null,y.a.createElement(h.a,{className:"example-header",title:"Dot"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement(f.a,null,y.a.createElement(v.a,{iconCls:"far fa-bell"})),y.a.createElement(f.a,null,y.a.createElement(v.a,{iconCls:"fas fa-bullhorn"})),y.a.createElement(f.a,null,y.a.createElement(v.a,{iconCls:"far fa-envelope"})),y.a.createElement(f.a,null,y.a.createElement(v.a,{iconCls:"fas fa-inbox"})),y.a.createElement(f.a,null,y.a.createElement(v.a,{iconCls:"fas fa-phone"})))))),y.a.createElement(E.a,null,y.a.createElement(h.a,{className:"example-header",title:"Number"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:0},y.a.createElement(v.a,{iconCls:"far fa-bell"})),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:9},y.a.createElement(v.a,{iconCls:"fas fa-bullhorn"})),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:99},y.a.createElement(v.a,{iconCls:"far fa-envelope"})),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:999},y.a.createElement(v.a,{iconCls:"fas fa-inbox"})),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:9999,overflowValue:999},y.a.createElement(v.a,{iconCls:"fas fa-phone"})))))),y.a.createElement(E.a,null,y.a.createElement(h.a,{className:"example-header",title:"Use Badge Only"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:0}),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:9}),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:99}),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:999}),y.a.createElement(f.a,{type:f.a.Type.NUMBER,value:9999,overflowValue:999}))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(b.a,{data:N}))}}]),a}(d.Component));a.default=x}}]);
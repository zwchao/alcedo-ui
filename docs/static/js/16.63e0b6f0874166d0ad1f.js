(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{449:function(e,t,a){"use strict";var n=a(10),i=a.n(n),l=a(112),o=a.n(l),s=a(113),r=a.n(s),c=a(114),p=a.n(c),h=a(115),u=a.n(h),m=a(116),d=a.n(m),f=a(0),b=a.n(f),g=a(453),y=(a(450),function(e){function t(e){r()(this,t);var a=u()(this,(t.__proto__||o()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return d()(t,e),p()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return b.a.createElement("div",{className:"prop-type-desc-table-wrapper"},b.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));y.defaultProps={data:null},t.a=y},450:function(e,t,a){var n=a(451);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(196)(n,i);n.locals&&(e.exports=n.locals)},451:function(e,t,a){(e.exports=a(195)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},499:function(e,t,a){"use strict";var n,i,l,o=a(10),s=a.n(o),r=a(429),c=a.n(r),p=a(430),h=a.n(p),u=a(112),m=a.n(u),d=a(113),f=a.n(d),b=a(114),g=a.n(b),y=a(115),E=a.n(y),v=a(116),N=a.n(v),T=a(0),x=a.n(T),w=a(446),C=a.n(w),P=a(503),_=a(532),k=a(448),R=a(463),z=(a(447),i=n=function(e){function t(e){var a;f()(this,t);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=E()(this,(a=t.__proto__||m()(t)).call.apply(a,[this,e].concat(i)));return l.call(s),s}return N()(t,e),g()(t,[{key:"render",value:function(){var e,t=this.props,a=t.className,n=t.theme,i=t.iconCls,l=t.disabled,o=t.isLoading,r=t.tip,p=t.tipPosition,u=t.disableTouchRipple,m=h()(t,["className","theme","iconCls","disabled","isLoading","tip","tipPosition","disableTouchRipple"]),d=C()("icon-anchor",(e={},c()(e,"theme-"+n,n),c()(e,a,a),e));return x.a.createElement(R.a,{text:r,position:p},x.a.createElement("a",s()({},m,{className:d,disabled:l||o,onClick:this.clickHandler}),o?x.a.createElement(P.a,{size:"small"}):i?x.a.createElement("i",{className:"icon-anchor-icon "+i,"aria-hidden":"true"}):null,u?null:x.a.createElement(_.a,{ref:"touchRipple",className:l||o?"hidden":"",displayCenter:!0})))}}]),t}(T.Component),n.Theme=k.a,l=function(){var e=this;this.startRipple=function(t,a){!e.props.disableTouchRipple&&e.refs.touchRipple&&e.refs.touchRipple.addRipple(t,a)},this.endRipple=function(){!e.props.disableTouchRipple&&e.refs.touchRipple&&e.refs.touchRipple.removeRipple()},this.triggerRipple=function(t,a){e.startRipple(t,a),setTimeout(function(){e.endRipple()},250)},this.clickHandler=function(t){var a=e.props,n=a.disabled,i=a.isLoading,l=a.onClick;!n&&!i&&l&&l(t)}},i);z.defaultProps={theme:k.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",disableTouchRipple:!1,tipPosition:R.a.Position.BOTTOM};var S=z;a.d(t,"a",function(){return S})},669:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The button theme.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},disabled:{type:"PropTypes.bool",desc:"Disables the button if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the button will be have loading effect.",default:"false"},iconCls:{type:"PropTypes.string",desc:"The icon within the IconAnchor is a Font Awesome component.This property is the className of the icon."},href:{type:"PropTypes.string",desc:"The URL to link to when the button is clicked.",default:"javascript:void(0)"},target:{type:"PropTypes.string",desc:"How to open the linked document.The value can be _blank,_self,_parent or _top.",default:"_blank"},alt:{type:"PropTypes.string"},disableTouchRipple:{type:"PropTypes.bool",default:"false"},tip:{type:"PropTypes.string"},tipPosition:{type:"PropTypes.oneOf",default:"TipProvider.Position.BOTTOM"},onClick:{type:"PropTypes.func",desc:"Callback function fired when the button is touch-tapped."}}},873:function(e,t,a){"use strict";a.r(t);var n=a(112),i=a.n(n),l=a(113),o=a.n(l),s=a(114),r=a.n(s),c=a(115),p=a.n(c),h=a(116),u=a.n(h),m=a(0),d=a.n(m),f=a(499),b=a(455),g=a(454),y=a(449),E=a(669),v=function(e){function t(e){return o()(this,t),p()(this,(t.__proto__||i()(t)).call(this,e))}return u()(t,e),r()(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"example icon-anchor-examples"},d.a.createElement("h2",{className:"example-title"},"Icon Anchor"),d.a.createElement("p",null,"An ",d.a.createElement("span",null,"Icon Anchor")," generates a button element around an icon.Also,Click the button to achieve href address jump."),d.a.createElement("h2",{className:"example-title"},"Examples"),d.a.createElement(b.a,null,d.a.createElement(g.a,{className:"example-header",title:"Basic"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"Icon Anchor")," using icon specified with the ",d.a.createElement("code",null,"iconCls")," property example."),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",disabled:!0}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),d.a.createElement(b.a,null,d.a.createElement(g.a,{className:"example-header",title:"With theme and style"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"Icon Anchor")," using the ",d.a.createElement("code",null,"style")," property to set size and the",d.a.createElement("code",null,"theme")," property to set different theme."),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},theme:"primary",className:"github-icon",disabled:!0}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},theme:"success",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},theme:"error",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",theme:"highlight",style:{fontSize:"28px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",theme:"warning",style:{fontSize:"32px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),d.a.createElement(b.a,null,d.a.createElement(g.a,{className:"example-header",title:"With target"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"Icon Anchor")," using the ",d.a.createElement("code",null,"target")," property to set where to open the connection href."),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",disabled:!0}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},className:"github-icon",target:"_parent",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},className:"github-icon",target:"_self",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),d.a.createElement("h2",{className:"example-title"},"Properties"),d.a.createElement(y.a,{data:E}))}}]),t}(m.Component);t.default=v}}]);
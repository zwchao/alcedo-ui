(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{407:function(e,t,a){(e.exports=a(172)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},408:function(e,t,a){var n=a(407);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(171)(n,l);n.locals&&(e.exports=n.locals)},409:function(e,t,a){"use strict";var n=a(8),l=a.n(n),r=a(106),s=a.n(r),o=a(105),i=a.n(o),c=a(104),p=a.n(c),u=a(103),m=a.n(u),d=a(102),h=a.n(d),f=a(0),E=a.n(f),y=a(410),v=(a(408),function(e){function t(e){i()(this,t);var a=m()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),p()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(l()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return E.a.createElement("div",{className:"prop-type-desc-table-wrapper"},E.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));v.defaultProps={data:null},t.a=v},437:function(e,t,a){"use strict";var n,l,r=a(8),s=a.n(r),o=a(388),i=a.n(o),c=a(389),p=a.n(c),u=a(106),m=a.n(u),d=a(105),h=a.n(d),f=a(104),E=a.n(f),y=a(103),v=a.n(y),b=a(102),T=a.n(b),g=a(0),R=a.n(g),N=a(404),C=a.n(N),P=a(441),x=a(421),w=a(406),I=a(413),S=(a(405),l=n=function(e){function t(e){var a;h()(this,t);for(var n=arguments.length,l=Array(n>1?n-1:0),r=1;r<n;r++)l[r-1]=arguments[r];var s=v()(this,(a=t.__proto__||m()(t)).call.apply(a,[this,e].concat(l)));return s.startRipple=function(e){s.refs.baseButton.startRipple(e)},s.endRipple=function(){s.refs.baseButton.endRipple()},s}return T()(t,e),E()(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=p()(e,["children","className"]),l=C()("flat-button",i()({},a,a));return R.a.createElement(P.a,s()({},n,{ref:"baseButton",className:l}),t)}}]),t}(g.Component),n.Theme=w.a,n.TipPosition=I.a,l);S.defaultProps={theme:w.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:x.a.Position.BOTTOM};var D=S;a.d(t,"a",function(){return D})},759:function(e,t,a){(e.exports=a(172)(!1)).push([e.i,".flat-button-examples .flat-button{margin:0 10px 10px 0}.flat-button-examples .flat-button.button-circular{width:60px;height:60px;padding:0;line-height:60px}",""])},760:function(e,t,a){var n=a(759);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(171)(n,l);n.locals&&(e.exports=n.locals)},761:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The button theme.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},isRounded:{type:"PropTypes.bool",desc:"If true,the button will have rounded corners.",default:"false"},isCircular:{type:"PropTypes.bool",desc:"If true,the button will be round.",default:"false"},title:{type:"PropTypes.string",desc:"The title of the button."},value:{type:"PropTypes.any",desc:"The text of the button.",default:""},type:{type:"PropTypes.string",desc:"The type of button.Can be reset,submit or button.",default:"button"},disabled:{type:"PropTypes.bool",desc:"Disables the button if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the button will be have loading effect.",default:"false"},disableTouchRipple:{type:"PropTypes.bool",desc:"If true,the element's ripple effect will be disabled.",default:"false"},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.It will display on the left."},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.It will display on the right."},rippleDisplayCenter:{type:"PropTypes.bool",desc:"If true,the ripple effect will be display centered.",default:"false"},tip:{type:"PropTypes.string"},tipPosition:{type:"PropTypes.oneOf",default:"TipProvider.Position.BOTTOM"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value prop."},onClick:{type:"PropTypes.func",desc:"Callback function fired when the button is touch-tapped."}}},907:function(e,t,a){"use strict";a.r(t);var n=a(106),l=a.n(n),r=a(105),s=a.n(r),o=a(104),i=a.n(o),c=a(103),p=a.n(c),u=a(102),m=a.n(u),d=a(0),h=a.n(d),f=a(437),E=a(411),y=a(412),v=a(409),b=a(761),T=(a(760),function(e){function t(e){return s()(this,t),p()(this,(t.__proto__||l()(t)).call(this,e))}return m()(t,e),i()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"example flat-button-examples"},h.a.createElement("h2",{className:"example-title"},"Flat Button"),h.a.createElement("p",null,h.a.createElement("span",null,"Flat Button")," are used for general functions and reduce the amount of layering on the screen, making it more readable."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(E.a,null,h.a.createElement(y.a,{className:"example-header",title:"Basic"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,h.a.createElement("code",null,"Flat Button")," with default theme, ",h.a.createElement("code",null,"success"),", ",h.a.createElement("code",null,"warning"),", ",h.a.createElement("code",null,"error")," and ",h.a.createElement("code",null,"disabled")," props applied."),h.a.createElement(f.a,{value:"Default"}),h.a.createElement(f.a,{value:"Primary",theme:f.a.Theme.PRIMARY}),h.a.createElement(f.a,{value:"Secondary",theme:f.a.Theme.SECONDARY}),h.a.createElement(f.a,{value:"Highlight",theme:f.a.Theme.HIGHLIGHT}),h.a.createElement(f.a,{value:"Info",theme:f.a.Theme.INFO}),h.a.createElement(f.a,{value:"Success",theme:f.a.Theme.SUCCESS}),h.a.createElement(f.a,{value:"Warning",theme:f.a.Theme.WARNING}),h.a.createElement(f.a,{value:"Error",theme:f.a.Theme.ERROR}),h.a.createElement(f.a,{value:"Disabled",disabled:!0}))))),h.a.createElement(E.a,null,h.a.createElement(y.a,{className:"example-header",title:"With border radius"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the ",h.a.createElement("code",null,"isRounded")," property to true for button round corner."),h.a.createElement(f.a,{value:"Default",isRounded:!0}),h.a.createElement(f.a,{value:"Primary",theme:f.a.Theme.PRIMARY,isRounded:!0}),h.a.createElement(f.a,{value:"Secondary",theme:f.a.Theme.SECONDARY,isRounded:!0}),h.a.createElement(f.a,{value:"Highlight",theme:f.a.Theme.HIGHLIGHT,isRounded:!0}),h.a.createElement(f.a,{value:"Info",theme:f.a.Theme.INFO,isRounded:!0}),h.a.createElement(f.a,{value:"Success",theme:f.a.Theme.SUCCESS,isRounded:!0}),h.a.createElement(f.a,{value:"Warning",theme:f.a.Theme.WARNING,isRounded:!0}),h.a.createElement(f.a,{value:"Error",theme:f.a.Theme.ERROR,isRounded:!0}),h.a.createElement(f.a,{value:"Disabled",disabled:!0,isRounded:!0}))))),h.a.createElement(E.a,null,h.a.createElement(y.a,{className:"example-header",title:"With icon"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the ",h.a.createElement("code",null,"iconCls")," property for button left icon.And set the",h.a.createElement("code",null,"rightIconCls")," property for button right icon."),h.a.createElement(f.a,{value:"Reset",iconCls:"fas fa-undo"}),h.a.createElement(f.a,{value:"Add",theme:f.a.Theme.SUCCESS,iconCls:"fas fa-plus"}),h.a.createElement(f.a,{value:"Delete",theme:f.a.Theme.ERROR,iconCls:"fas fa-trash-alt"}),h.a.createElement(f.a,{value:"Next",theme:f.a.Theme.PRIMARY,rightIconCls:"fas fa-angle-right"}))))),h.a.createElement(E.a,null,h.a.createElement(y.a,{className:"example-header",title:"Use circle shape"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the ",h.a.createElement("code",null,"isCircular")," property to true for circle shape flat button."),h.a.createElement(f.a,{value:"Primary",isCircular:!0}),h.a.createElement(f.a,{value:"Success",theme:f.a.Theme.SUCCESS,isCircular:!0}),h.a.createElement(f.a,{value:"Error",theme:f.a.Theme.ERROR,isCircular:!0}),h.a.createElement(f.a,{value:"Warning",theme:f.a.Theme.WARNING,isCircular:!0}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(v.a,{data:b}))}}]),t}(d.Component));t.default=T}}]);
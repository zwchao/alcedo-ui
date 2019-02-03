(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{367:function(e,t,a){"use strict";var n=a(6),o=a.n(n),l=a(79),i=a.n(l),s=a(80),c=a.n(s),r=a(81),u=a.n(r),p=a(82),d=a.n(p),h=a(83),m=a.n(h),f=a(11),b=a.n(f),g=a(0),C=a.n(g),E=a(1),y=a.n(E),v=a(374),T=(a(368),function(e){function t(e){var a,n;return i()(this,t),(n=u()(this,d()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=b()(b()(n)),n.generateData).bind(a),n}return m()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(o()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return C.a.createElement("div",{className:"prop-type-desc-table-wrapper"},C.a.createElement(v.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(g.Component));T.propTypes={data:y.a.object},T.defaultProps={data:null},t.a=T},368:function(e,t,a){var n=a(369);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,o);n.locals&&(e.exports=n.locals)},369:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},375:function(e,t,a){"use strict";var n=a(365),o=a.n(n),l=a(349),i=a.n(l),s=a(79),c=a.n(s),r=a(80),u=a.n(r),p=a(81),d=a.n(p),h=a(82),m=a.n(h),f=a(83),b=a.n(f),g=a(11),C=a.n(g),E=a(21),y=a.n(E),v=a(0),T=a.n(v),B=a(1),k=a.n(B),N=a(362),w=a.n(N),x=a(377),R=a(383),P=a(376),I=a(370),O=a(379),L=a(364),S=a(366),A=a(363),D=a(389),V=function(e){function t(e){var a,n;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return n=d()(this,(a=m()(t)).call.apply(a,[this,e].concat(l))),y()(C()(C()(n)),"getEl",function(){return n.refs.pop&&n.refs.pop.getEl()}),y()(C()(C()(n)),"okButtonClickHandler",function(){var e=n.props,t=e.visible,a=e.onOKButtonClick;t&&a&&a(function(){n.setState({visible:!1},function(){var e=n.props.onRequestClose;e&&e()})})}),y()(C()(C()(n)),"cancelButtonClickHandler",function(){var e=n.props,t=e.onCancelButtonClick,a=e.onRequestClose;t&&t(),n.setState({visible:!1},function(){a&&a()})}),y()(C()(C()(n)),"closeButtonClickHandler",function(){var e=n.props,t=e.onCloseButtonClick,a=e.onRequestClose;t&&t(),n.setState({visible:!1},function(){a&&a()})}),y()(C()(C()(n)),"renderHandler",function(){D.a.push(C()(C()(n)),{shouldLockBody:n.props.showModal});var e=n.props.onRender;e&&e.apply(void 0,arguments)}),y()(C()(C()(n)),"destroyHandler",function(){D.a.pop(C()(C()(n)));var e=n.props.onDestroy;e&&e.apply(void 0,arguments)}),n}return b()(t,e),u()(t,[{key:"componentWillUnmount",value:function(){D.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.className,l=t.modalClassName,s=t.position,c=t.disabled,r=t.showModal,u=t.title,p=t.buttons,d=t.isLoading,h=t.visible,m=t.okButtonVisible,f=t.okButtonText,b=t.okButtonIconCls,g=t.okButtonTheme,C=t.okButtonDisabled,E=t.okButtonIsLoading,B=t.cancelButtonVisible,k=t.cancelButtonText,N=t.cancelButtonIconCls,L=t.cancelButtonDisabled,S=t.cancelButtonIsLoading,A=t.cancelButtonTheme,D=t.closeButtonVisible,V=t.closeIconCls,H=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,i()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"])),z=w()("dialog",y()({},n,n));return T.a.createElement(x.a,o()({},H,{ref:"pop",className:z,position:s,visible:h,container:T.a.createElement(R.a,{depth:6}),showModal:r,modalClassName:l,onRender:this.renderHandler,onDestroy:this.destroyHandler}),function(t){return T.a.createElement(v.Fragment,null,T.a.createElement("div",{className:"dialog-title"},u,D?T.a.createElement(O.a,{className:"dialog-title-close-button",iconCls:V,disabled:c,onClick:e.closeButtonClickHandler}):null),T.a.createElement("div",{className:"dialog-content"},"function"==typeof a?a(t&&t.querySelector(".dialog-content"),t):a),T.a.createElement("div",{className:"dialog-buttons"},p?v.Children.map(p,function(e){return Object(v.cloneElement)(e,{isLoading:d,disabled:c})}):null,!p&&m?T.a.createElement(I.a,{className:"ok-button",value:f,iconCls:b,theme:g,disabled:C,isLoading:d||E,disableTouchRipple:!0,onClick:e.okButtonClickHandler}):null,!p&&B?T.a.createElement(P.a,{className:"cancel-button",value:k,iconCls:N,theme:A,disabled:L,isLoading:d||S,disableTouchRipple:!0,onClick:e.cancelButtonClickHandler}):null))})}}]),t}(v.Component);y()(V,"ButtonTheme",L.a),y()(V,"Position",S.a),V.propTypes={className:k.a.string,modalClassName:k.a.string,style:k.a.object,parentEl:k.a.object,position:k.a.oneOf(A.a.enumerateValue(S.a)),disabled:k.a.bool,visible:k.a.bool,showModal:k.a.bool,title:k.a.any,isBlurClose:k.a.bool,isLoading:k.a.bool,okButtonVisible:k.a.bool,okButtonText:k.a.string,okButtonIconCls:k.a.string,okButtonDisabled:k.a.bool,okButtonIsLoading:k.a.bool,okButtonTheme:k.a.oneOf(A.a.enumerateValue(L.a)),cancelButtonVisible:k.a.bool,cancelButtonText:k.a.string,cancelButtonIconCls:k.a.string,cancelButtonDisabled:k.a.bool,cancelButtonIsLoading:k.a.bool,cancelButtonTheme:k.a.oneOf(A.a.enumerateValue(L.a)),closeButtonVisible:k.a.bool,closeIconCls:k.a.string,isEscClose:k.a.bool,buttons:k.a.any,onRender:k.a.func,onRequestClose:k.a.func,onOKButtonClick:k.a.func,onCancelButtonClick:k.a.func,onCloseButtonClick:k.a.func},V.defaultProps={parentEl:document.body,position:S.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:L.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:L.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var H=V;a.d(t,"a",function(){return H})},376:function(e,t,a){"use strict";var n=a(365),o=a.n(n),l=a(349),i=a.n(l),s=a(79),c=a.n(s),r=a(80),u=a.n(r),p=a(81),d=a.n(p),h=a(82),m=a.n(h),f=a(83),b=a.n(f),g=a(11),C=a.n(g),E=a(21),y=a.n(E),v=a(0),T=a.n(v),B=a(1),k=a.n(B),N=a(362),w=a.n(N),x=a(385),R=a(378),P=a(364),I=a(366),O=a(363),L=function(e){function t(e){var a,n;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return n=d()(this,(a=m()(t)).call.apply(a,[this,e].concat(l))),y()(C()(C()(n)),"startRipple",function(e,t){n.refs.baseButton&&n.refs.baseButton.startRipple(e,t)}),y()(C()(C()(n)),"endRipple",function(){n.refs.baseButton&&n.refs.baseButton.endRipple()}),y()(C()(C()(n)),"triggerRipple",function(e,t){n.refs.baseButton&&n.refs.baseButton.triggerRipple(e,t)}),n}return b()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=i()(e,["children","className"]),l=w()("flat-button",y()({},a,a));return T.a.createElement(x.a,o()({},n,{ref:"baseButton",className:l}),t)}}]),t}(v.Component);y()(L,"Theme",P.a),y()(L,"TipPosition",I.a),L.propTypes={className:k.a.string,style:k.a.object,theme:k.a.oneOf(O.a.enumerateValue(P.a)),isRounded:k.a.bool,isCircular:k.a.bool,title:k.a.string,value:k.a.any,type:k.a.string,disabled:k.a.bool,isLoading:k.a.bool,disableTouchRipple:k.a.bool,iconCls:k.a.string,rightIconCls:k.a.string,rippleDisplayCenter:k.a.bool,tip:k.a.string,tipPosition:k.a.oneOf(O.a.enumerateValue(R.a.Position)),renderer:k.a.func,onClick:k.a.func},L.defaultProps={theme:P.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:R.a.Position.BOTTOM};var S=L;a.d(t,"a",function(){return S})},377:function(e,t,a){"use strict";var n=a(365),o=a.n(n),l=a(349),i=a.n(l),s=a(79),c=a.n(s),r=a(80),u=a.n(r),p=a(81),d=a.n(p),h=a(82),m=a.n(h),f=a(83),b=a.n(f),g=a(11),C=a.n(g),E=a(21),y=a.n(E),v=a(0),T=a.n(v),B=a(1),k=a.n(B),N=a(362),w=a.n(N),x=a(391),R=a(364),P=a(366),I=a(373),O=a(363);a(381);function L(e){return(window.innerWidth-e.offsetWidth)/2}function S(e){return(window.innerHeight-e.offsetHeight)/2}function A(e,t,a){if(t){var n={};switch(a){case P.a.TOP_LEFT:n.left=0,n.top=0;break;case P.a.TOP:n.left=L(t),n.top=0;break;case P.a.TOP_RIGHT:n.right=0,n.top=0;break;case P.a.BOTTOM_LEFT:n.left=0,n.bottom=0;break;case P.a.BOTTOM:n.left=L(t),n.bottom=0;break;case P.a.BOTTOM_RIGHT:n.right=0,n.bottom=0;break;case P.a.LEFT_TOP:n.left=0,n.top=0;break;case P.a.LEFT:n.left=0,n.top=S(t);break;case P.a.LEFT_BOTTOM:n.left=0,n.bottom=0;break;case P.a.RIGHT_TOP:n.right=0,n.top=0;break;case P.a.RIGHT:n.right=0,n.top=S(t);break;case P.a.RIGHT_BOTTOM:n.right=0,n.bottom=0;break;case P.a.CENTER:n.left=L(t),n.top=S(t)}return n}}var D={getStyle:A,setStyle:function(e,t,a){var n=A(0,t,a);if(n)for(var o in t.style.left=t.style.right=t.style.top=t.style.bottom=null,n)t.style[o]=n[o]+"px"}},V=function(e){function t(e){var a,n;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return n=d()(this,(a=m()(t)).call.apply(a,[this,e].concat(l))),y()(C()(C()(n)),"getEl",function(){return n.refs.pop&&n.refs.pop.getEl()}),y()(C()(C()(n)),"resetPosition",function(e){var t=n.props,a=t.parentEl,o=t.position;D.setStyle(a,e,o)}),n}return b()(t,e),u()(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.children,l=a.container,s=a.className,c=a.theme,r=a.position,u=a.isAnimated,p=(a.isEscClose,a.isBlurClose,a.shouldPreventContainerScroll,i()(a,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose","shouldPreventContainerScroll"])),d=w()("position-pop",(e={},y()(e,"theme-".concat(c),c),y()(e,"position-pop-".concat(r),r),y()(e,"position-pop-animated",u),y()(e,s,s),e));return T.a.createElement(x.a,o()({},p,{ref:"pop",className:d,container:l,isAnimated:u,onWheel:function(e){return I.a.wheelHandler(e,t.props)},resetPosition:this.resetPosition}),function(e){return"function"==typeof n?n(e):n})}}]),t}(v.Component);y()(V,"Position",P.a),y()(V,"Theme",R.a),V.propTypes={className:k.a.string,style:k.a.object,visible:k.a.bool,theme:k.a.oneOf(O.a.enumerateValue(R.a)),parentEl:k.a.object,position:k.a.oneOf(O.a.enumerateValue(P.a)),isAnimated:k.a.bool,depth:k.a.number,isBlurClose:k.a.bool,isEscClose:k.a.bool,shouldPreventContainerScroll:k.a.bool,container:k.a.node,showModal:k.a.bool,modalClassName:k.a.string,onRender:k.a.func,onRendered:k.a.func,onDestroy:k.a.func,onDestroyed:k.a.func,onWheel:k.a.func},V.defaultProps={parentEl:document.body,depth:6,visible:!1,theme:R.a.DEFAULT,position:P.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldPreventContainerScroll:!0,container:T.a.createElement("div",null),showModal:!1};var H=V;a.d(t,"a",function(){return H})},419:function(e,t,a){"use strict";var n=a(365),o=a.n(n),l=a(349),i=a.n(l),s=a(79),c=a.n(s),r=a(80),u=a.n(r),p=a(81),d=a.n(p),h=a(82),m=a.n(h),f=a(83),b=a.n(f),g=a(11),C=a.n(g),E=a(21),y=a.n(E),v=a(0),T=a.n(v),B=a(1),k=a.n(B),N=a(362),w=a.n(N),x=a(424),R=a(450),P=a(364),I=a(378),O=a(363),L=function(e){function t(e){var a,n;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return n=d()(this,(a=m()(t)).call.apply(a,[this,e].concat(l))),y()(C()(C()(n)),"startRipple",function(e,t){!n.props.disableTouchRipple&&n.refs.touchRipple&&n.refs.touchRipple.addRipple(e,t)}),y()(C()(C()(n)),"endRipple",function(){!n.props.disableTouchRipple&&n.refs.touchRipple&&n.refs.touchRipple.removeRipple()}),y()(C()(C()(n)),"triggerRipple",function(e,t){n.startRipple(e,t),setTimeout(function(){n.endRipple()},250)}),y()(C()(C()(n)),"clickHandler",function(e){var t=n.props,a=t.disabled,o=t.isLoading,l=t.onClick;!a&&!o&&l&&l(e)}),n}return b()(t,e),u()(t,[{key:"render",value:function(){var e,t=this.props,a=t.className,n=t.theme,l=t.iconCls,s=t.disabled,c=t.isLoading,r=t.tip,u=t.tipPosition,p=t.disableTouchRipple,d=t.parentEl,h=i()(t,["className","theme","iconCls","disabled","isLoading","tip","tipPosition","disableTouchRipple","parentEl"]),m=w()("icon-anchor",(e={},y()(e,"theme-".concat(n),n),y()(e,a,a),e));return T.a.createElement(I.a,{tipContent:r,parentEl:d,position:u},T.a.createElement("a",o()({},h,{className:m,disabled:s||c,onClick:this.clickHandler}),c?T.a.createElement(x.a,{size:"small"}):l?T.a.createElement("i",{className:"icon-anchor-icon ".concat(l),"aria-hidden":"true"}):null,p?null:T.a.createElement(R.a,{ref:"touchRipple",className:s||c?"hidden":"",displayCenter:!0})))}}]),t}(v.Component);y()(L,"Theme",P.a),L.propTypes={className:k.a.string,style:k.a.object,theme:k.a.oneOf(O.a.enumerateValue(P.a)),disabled:k.a.bool,isLoading:k.a.bool,iconCls:k.a.string.isRequired,href:k.a.string,target:k.a.string,alt:k.a.string,disableTouchRipple:k.a.bool,tip:k.a.string,tipPosition:k.a.oneOf(O.a.enumerateValue(I.a.Position)),onClick:k.a.func},L.defaultProps={theme:P.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",disableTouchRipple:!1,tipPosition:I.a.Position.BOTTOM};var S=L;a.d(t,"a",function(){return S})},604:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The button theme.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},disabled:{type:"PropTypes.bool",desc:"Disables the button if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the button will be have loading effect.",default:"false"},iconCls:{type:"PropTypes.string",desc:"The icon within the IconAnchor is a Font Awesome component.This property is the className of the icon."},href:{type:"PropTypes.string",desc:"The URL to link to when the button is clicked.",default:"javascript:void(0)"},target:{type:"PropTypes.string",desc:"How to open the linked document.The value can be _blank,_self,_parent or _top.",default:"_blank"},alt:{type:"PropTypes.string"},disableTouchRipple:{type:"PropTypes.bool",default:"false"},tip:{type:"PropTypes.string"},tipPosition:{type:"PropTypes.oneOf",default:"TipProvider.Position.BOTTOM"},onClick:{type:"PropTypes.func",desc:"Callback function fired when the button is touch-tapped."}}},605:function(e,t,a){var n=a(606);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,o);n.locals&&(e.exports=n.locals)},606:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""])},840:function(e,t,a){"use strict";a.r(t);var n=a(79),o=a.n(n),l=a(80),i=a.n(l),s=a(81),c=a.n(s),r=a(82),u=a.n(r),p=a(83),d=a.n(p),h=a(11),m=a.n(h),f=a(21),b=a.n(f),g=a(0),C=a.n(g),E=a(419),y=a(372),v=a(371),T=a(370),B=a(375),k=a(367),N=a(604),w=(a(605),function(e){function t(e){var a;return o()(this,t),a=c()(this,u()(t).call(this,e)),b()(m()(m()(a)),"show",function(e){var t=a.state.IncoAnchorVisible;t[e]=!0,a.setState({IncoAnchorVisible:t})}),b()(m()(m()(a)),"hide",function(e){var t=a.state.IncoAnchorVisible;t[e]=!1,a.setState({IncoAnchorVisible:t})}),a.state={IncoAnchorVisible:{}},a}return d()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.state.IncoAnchorVisible;return C.a.createElement("div",{className:"example icon-anchor-examples"},C.a.createElement("h2",{className:"example-title"},"Icon Anchor"),C.a.createElement("p",null,"An ",C.a.createElement("span",null,"Icon Anchor")," generates a button element around an icon.Also,Click the button to achieve href address jump."),C.a.createElement("h2",{className:"example-title"},"Examples"),C.a.createElement(y.a,null,C.a.createElement(v.a,{className:"example-header",title:"Basic"}),C.a.createElement("div",{className:"widget-content"},C.a.createElement("div",{className:"example-content"},C.a.createElement("div",{className:"examples-wrapper"},C.a.createElement("p",null,C.a.createElement("code",null,"Icon Anchor")," using icon specified with the ",C.a.createElement("code",null,"iconCls")," property example."),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",tip:"Github"}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",tip:"Github"}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",tip:"Github"}))))),C.a.createElement(y.a,null,C.a.createElement(v.a,{className:"example-header",title:"With theme and style"}),C.a.createElement("div",{className:"widget-content"},C.a.createElement("div",{className:"example-content"},C.a.createElement("div",{className:"examples-wrapper"},C.a.createElement("p",null,C.a.createElement("code",null,"Icon Anchor")," using the ",C.a.createElement("code",null,"style")," property to set size and the",C.a.createElement("code",null,"theme")," property to set different theme."),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},theme:"primary",className:"github-icon",disabled:!0}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},theme:"success",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},theme:"error",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),C.a.createElement(E.a,{iconCls:"fab fa-github",theme:"highlight",style:{fontSize:"28px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),C.a.createElement(E.a,{iconCls:"fab fa-github",theme:"warning",style:{fontSize:"32px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),C.a.createElement(y.a,null,C.a.createElement(v.a,{className:"example-header",title:"With target"}),C.a.createElement("div",{className:"widget-content"},C.a.createElement("div",{className:"example-content"},C.a.createElement("div",{className:"examples-wrapper"},C.a.createElement("p",null,C.a.createElement("code",null,"Icon Anchor")," using the ",C.a.createElement("code",null,"target")," property to set where to open the connection href."),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",disabled:!0}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},className:"github-icon",target:"_parent",href:"https://github.com/alcedo-ui/alcedo-ui"}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},className:"github-icon",target:"_self",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),C.a.createElement(y.a,null,C.a.createElement(v.a,{className:"example-header",title:"In Dialog"}),C.a.createElement("div",{className:"widget-content"},C.a.createElement("div",{className:"example-content"},C.a.createElement("div",{className:"examples-wrapper"},C.a.createElement("p",null,C.a.createElement("code",null,"Icon Anchor")," using icon specified with the ",C.a.createElement("code",null,"iconCls")," property example."),C.a.createElement(T.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),C.a.createElement(B.a,{visible:t[1],onRequestClose:function(){return e.hide(1)}},function(e){return C.a.createElement("div",{className:"popover-dialog-content-scroller"},C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",parentEl:e,tip:"Github"}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",parentEl:e,tip:"Github"}),C.a.createElement(E.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",parentEl:e,tip:"Github"}))}))))),C.a.createElement("h2",{className:"example-title"},"Properties"),C.a.createElement(k.a,{data:N}))}}]),t}(g.Component));t.default=w}}]);
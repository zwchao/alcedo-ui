(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{230:function(e,t,n){"use strict";var o=n(50),a=n.n(o),l=n(51),r=n.n(l),s=n(19),i=n.n(s),c=n(52),u=n.n(c),p=n(53),f=n.n(p),d=n(35),m=n.n(d),h=n(9),b=n.n(h),y=n(0),v=n.n(y),C=n(90),g=n.n(C),E=n(237);n(231);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return f()(this,n)}}var R=function(e){u()(n,e);var t=k(n);function n(e){var o;return a()(this,n),o=t.call(this,e),b()(i()(o),"generateData",(function(){var e=[];if(!o.props.data)return[];for(var t in o.props.data)e.push(T({name:t},o.props.data[t]));return e})),o}return r()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),n}(y.Component);R.propTypes={data:g.a.object},t.a=R},231:function(e,t,n){var o=n(91),a=n(232);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var l={insert:"head",singleton:!1};o(a,l);e.exports=a.locals||{}},232:function(e,t,n){(t=n(92)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var o=n(206),a=n.n(o),l=n(207),r=n.n(l),s=n(50),i=n.n(s),c=n(51),u=n.n(c),p=n(19),f=n.n(p),d=n(52),m=n.n(d),h=n(53),b=n.n(h),y=n(35),v=n.n(y),C=n(9),g=n.n(C),E=n(0),B=n.n(E),T=n(90),k=n.n(T),R=n(226),w=n.n(R),O=n(249),I=n(241),P=n(228),N=n(229),D=n(227);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return b()(this,n)}}var M=function(e){m()(n,e);var t=x(n);function n(e){var o;i()(this,n);for(var a=arguments.length,l=new Array(a>1?a-1:0),r=1;r<a;r++)l[r-1]=arguments[r];return o=t.call.apply(t,[this,e].concat(l)),g()(f()(o),"startRipple",(function(e,t){o.buttonInstance&&o.buttonInstance.startRipple(e,t)})),g()(f()(o),"endRipple",(function(){o.buttonInstance&&o.buttonInstance.endRipple()})),g()(f()(o),"triggerRipple",(function(e,t){o.buttonInstance&&o.buttonInstance.triggerRipple(e,t)})),o.button=Object(E.createRef)(),o.buttonInstance=null,o}return u()(n,[{key:"componentDidMount",value:function(){this.buttonInstance=this.button&&this.button.current}},{key:"render",value:function(){var e=this.props,t=e.className,n=r()(e,["className"]);return(B.a.createElement(O.a,a()({},n,{ref:this.button,className:w()("flat-button",g()({},t,t))})))}}]),n}(E.Component);g()(M,"Theme",P.a),g()(M,"TipPosition",N.a),M.propTypes={className:k.a.string,style:k.a.object,theme:k.a.oneOf(D.a.enumerateValue(P.a)),isRounded:k.a.bool,isCircular:k.a.bool,title:k.a.string,value:k.a.any,type:k.a.string,disabled:k.a.bool,isLoading:k.a.bool,disableTouchRipple:k.a.bool,iconCls:k.a.string,rightIconCls:k.a.string,rippleDisplayCenter:k.a.bool,tip:k.a.string,tipPosition:k.a.oneOf(D.a.enumerateValue(I.a.Position)),renderer:k.a.func,onClick:k.a.func},M.defaultProps={theme:P.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:I.a.Position.BOTTOM};var L=M},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var o=n(206),a=n.n(o),l=n(207),r=n.n(l),s=n(50),i=n.n(s),c=n(51),u=n.n(c),p=n(19),f=n.n(p),d=n(52),m=n.n(d),h=n(53),b=n.n(h),y=n(35),v=n.n(y),C=n(9),g=n.n(C),E=n(0),B=n.n(E),T=n(90),k=n.n(T),R=n(226),w=n.n(R),O=n(240),I=n(245),P=n(238),N=n(234),D=n(242),x=n(228),M=n(229),L=n(227),S=n(252);function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return b()(this,n)}}var j=function(e){m()(n,e);var t=V(n);function n(e){var o;i()(this,n);for(var a=arguments.length,l=new Array(a>1?a-1:0),r=1;r<a;r++)l[r-1]=arguments[r];return o=t.call.apply(t,[this,e].concat(l)),g()(f()(o),"getEl",(function(){return o.pop&&o.pop.current&&o.pop.current.getEl()})),g()(f()(o),"handleOkButtonClick",(function(){var e=o.props,t=e.visible,n=e.onOKButtonClick;t&&n&&n((function(){o.setState({visible:!1},(function(){var e=o.props.onRequestClose;e&&e()}))}))})),g()(f()(o),"handleCancelButtonClick",(function(){var e=o.props,t=e.onCancelButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},(function(){n&&n()}))})),g()(f()(o),"handleCloseButtonClick",(function(){var e=o.props,t=e.onCloseButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},(function(){n&&n()}))})),g()(f()(o),"handleRender",(function(){S.a.push(f()(o),{shouldLockBody:o.props.showModal});var e=o.props.onRender;e&&e.apply(void 0,arguments)})),g()(f()(o),"handleDestroy",(function(){S.a.pop(f()(o));var e=o.props.onDestroy;e&&e.apply(void 0,arguments)})),o.pop=Object(E.createRef)(),o}return u()(n,[{key:"componentWillUnmount",value:function(){S.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,l=t.modalClassName,s=t.position,i=t.disabled,c=t.showModal,u=t.title,p=t.buttons,f=t.isLoading,d=t.visible,m=t.okButtonVisible,h=t.okButtonText,b=t.okButtonIconCls,y=t.okButtonTheme,v=t.okButtonDisabled,C=t.okButtonIsLoading,T=t.cancelButtonVisible,k=t.cancelButtonText,R=t.cancelButtonIconCls,x=t.cancelButtonDisabled,M=t.cancelButtonIsLoading,L=t.cancelButtonTheme,S=t.closeButtonVisible,V=t.closeIconCls,j=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,r()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"]));return B.a.createElement(O.a,a()({},j,{ref:this.pop,className:w()("dialog",g()({},o,o)),position:s,visible:d,container:B.a.createElement(I.a,{depth:6}),showModal:c,modalClassName:l,onRender:this.handleRender,onDestroy:this.handleDestroy}),(function(t){return B.a.createElement(E.Fragment,null,B.a.createElement("div",{className:"dialog-title"},u,S?B.a.createElement(D.a,{className:"dialog-title-close-button",iconCls:V,disabled:i,onClick:e.handleCloseButtonClick}):null),B.a.createElement("div",{className:"dialog-content"},"function"==typeof n?n(t&&t.querySelector(".dialog-content"),t):n),B.a.createElement("div",{className:"dialog-buttons"},p?E.Children.map(p,(function(e){return Object(E.cloneElement)(e,{isLoading:f,disabled:i})})):null,!p&&m?B.a.createElement(N.a,{className:"ok-button",value:h,iconCls:b,theme:y,disabled:v,isLoading:f||C,disableTouchRipple:!0,onClick:e.handleOkButtonClick}):null,!p&&T?B.a.createElement(P.a,{className:"cancel-button",value:k,iconCls:R,theme:L,disabled:x,isLoading:f||M,disableTouchRipple:!0,onClick:e.handleCancelButtonClick}):null))}))}}]),n}(E.Component);g()(j,"ButtonTheme",x.a),g()(j,"Position",M.a),j.propTypes={children:k.a.any,className:k.a.string,modalClassName:k.a.string,style:k.a.object,parentEl:k.a.object,position:k.a.oneOf(L.a.enumerateValue(M.a)),disabled:k.a.bool,visible:k.a.bool,showModal:k.a.bool,title:k.a.any,isBlurClose:k.a.bool,isLoading:k.a.bool,okButtonVisible:k.a.bool,okButtonText:k.a.string,okButtonIconCls:k.a.string,okButtonDisabled:k.a.bool,okButtonIsLoading:k.a.bool,okButtonTheme:k.a.oneOf(L.a.enumerateValue(x.a)),cancelButtonVisible:k.a.bool,cancelButtonText:k.a.string,cancelButtonIconCls:k.a.string,cancelButtonDisabled:k.a.bool,cancelButtonIsLoading:k.a.bool,cancelButtonTheme:k.a.oneOf(L.a.enumerateValue(x.a)),closeButtonVisible:k.a.bool,closeIconCls:k.a.string,isEscClose:k.a.bool,buttons:k.a.any,onRender:k.a.func,onRequestClose:k.a.func,onOKButtonClick:k.a.func,onCancelButtonClick:k.a.func,onCloseButtonClick:k.a.func,onDestroy:k.a.func,onModalMouseDown:k.a.func,onModalMouseMove:k.a.func,onModalMouseUp:k.a.func,onModalMouseEnter:k.a.func,onModalMouseLeave:k.a.func,onModalClick:k.a.func},j.defaultProps={parentEl:document.body,position:M.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:x.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:x.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var A=j},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o=n(206),a=n.n(o),l=n(207),r=n.n(l),s=n(50),i=n.n(s),c=n(51),u=n.n(c),p=n(19),f=n.n(p),d=n(52),m=n.n(d),h=n(53),b=n.n(h),y=n(35),v=n.n(y),C=n(9),g=n.n(C),E=n(0),B=n.n(E),T=n(90),k=n.n(T),R=n(226),w=n.n(R),O=n(254),I=n(228),P=n(229),N=n(227);n(244);function D(e){return(window.innerWidth-e.offsetWidth)/2}function x(e){return(window.innerHeight-e.offsetHeight)/2}function M(e,t,n){if(t){var o={};switch(n){case P.a.TOP_LEFT:o.left=0,o.top=0;break;case P.a.TOP:o.left=D(t),o.top=0;break;case P.a.TOP_RIGHT:o.right=0,o.top=0;break;case P.a.BOTTOM_LEFT:o.left=0,o.bottom=0;break;case P.a.BOTTOM:o.left=D(t),o.bottom=0;break;case P.a.BOTTOM_RIGHT:o.right=0,o.bottom=0;break;case P.a.LEFT_TOP:o.left=0,o.top=0;break;case P.a.LEFT:o.left=0,o.top=x(t);break;case P.a.LEFT_BOTTOM:o.left=0,o.bottom=0;break;case P.a.RIGHT_TOP:o.right=0,o.top=0;break;case P.a.RIGHT:o.right=0,o.top=x(t);break;case P.a.RIGHT_BOTTOM:o.right=0,o.bottom=0;break;case P.a.CENTER:o.left=D(t),o.top=x(t)}return o}}var L={getStyle:M,setStyle:function(e,t,n){var o=M(0,t,n);if(o)for(var a in t.style.left=t.style.right=t.style.top=t.style.bottom=null,o)t.style[a]=o[a]+"px"}};function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v()(e);if(t){var a=v()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return b()(this,n)}}var V=function(e){m()(n,e);var t=S(n);function n(e){var o;i()(this,n);for(var a=arguments.length,l=new Array(a>1?a-1:0),r=1;r<a;r++)l[r-1]=arguments[r];return o=t.call.apply(t,[this,e].concat(l)),g()(f()(o),"getEl",(function(){return o.pop&&o.pop.current&&o.pop.current.getEl()})),g()(f()(o),"resetPosition",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.getEl(),t=o.props,n=t.parentEl,a=t.position;L.setStyle(n,e,a)})),o.pop=Object(E.createRef)(),o}return u()(n,[{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.container,l=t.className,s=t.theme,i=t.position,c=t.isAnimated,u=(t.isEscClose,t.isBlurClose,r()(t,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose"]));return B.a.createElement(O.a,a()({},u,{ref:this.pop,className:w()("position-pop",(e={},g()(e,"theme-".concat(s),s),g()(e,"position-pop-".concat(i),i),g()(e,"position-pop-animated",c),g()(e,l,l),e)),container:o,isAnimated:c,position:i,resetPosition:this.resetPosition}),(function(e){return"function"==typeof n?n(e):n}))}}]),n}(E.Component);g()(V,"Position",P.a),g()(V,"Theme",I.a),V.propTypes={children:k.a.any,className:k.a.string,style:k.a.object,visible:k.a.bool,theme:k.a.oneOf(N.a.enumerateValue(I.a)),parentEl:k.a.object,position:k.a.oneOf(N.a.enumerateValue(P.a)),isAnimated:k.a.bool,depth:k.a.number,isBlurClose:k.a.bool,isEscClose:k.a.bool,container:k.a.node,showModal:k.a.bool,modalClassName:k.a.string,onRender:k.a.func,onRendered:k.a.func,onDestroy:k.a.func,onDestroyed:k.a.func,onWheel:k.a.func,onModalMouseDown:k.a.func,onModalMouseMove:k.a.func,onModalMouseUp:k.a.func,onModalMouseEnter:k.a.func,onModalMouseLeave:k.a.func,onModalClick:k.a.func},V.defaultProps={parentEl:document.body,depth:2,visible:!1,theme:I.a.DEFAULT,position:P.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,container:B.a.createElement("div",null),showModal:!1};var j=V},463:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The button theme.Can be primary,highlight,success,warning,error.","default":"Theme.DEFAULT"},"isRounded":{"type":"PropTypes.bool","desc":"If true,the button will have rounded corners.","default":"false"},"isCircular":{"type":"PropTypes.bool","desc":"If true,the button will be round.","default":"true"},"title":{"type":"PropTypes.string","desc":"The title of the button."},"type":{"type":"PropTypes.string","desc":"The type of button.Can be reset,submit or button.","default":"button"},"disabled":{"type":"PropTypes.bool","desc":"Disables the button if set to true.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true,the button will be have loading effect.","default":"false"},"disableTouchRipple":{"type":"PropTypes.bool","desc":"If true,the element\'s ripple effect will be disabled.","default":"false"},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.It will display on the left."},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.It will display on the right."},"rippleDisplayCenter":{"type":"PropTypes.bool","desc":"If true,the ripple effect will be display centered.","default":"false"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"TipProvider.Position.BOTTOM"},"onClick":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."}}')},464:function(e,t,n){var o=n(91),a=n(465);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var l={insert:"head",singleton:!1};o(a,l);e.exports=a.locals||{}},465:function(e,t,n){(t=n(92)(!1)).push([e.i,".icon-button-examples .icon-button {\n  margin: 0 10px 10px 0; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""]),e.exports=t},710:function(e,t,n){"use strict";n.r(t);var o=n(50),a=n.n(o),l=n(51),r=n.n(l),s=n(19),i=n.n(s),c=n(52),u=n.n(c),p=n(53),f=n.n(p),d=n(35),m=n.n(d),h=n(9),b=n.n(h),y=n(0),v=n.n(y),C=n(242),g=n(236),E=n(235),B=n(234),T=n(239),k=n(230),R=n(463);n(464);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m()(e);if(t){var a=m()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return f()(this,n)}}var O=function(e){u()(n,e);var t=w(n);function n(e){var o;return a()(this,n),o=t.call(this,e),b()(i()(o),"show",(function(e){var t=o.state.IcontButtonVisible;t[e]=!0,o.setState({IcontButtonVisible:t})})),b()(i()(o),"hide",(function(e){var t=o.state.IcontButtonVisible;t[e]=!1,o.setState({IcontButtonVisible:t})})),o.state={IcontButtonVisible:{}},o}return r()(n,[{key:"render",value:function(){var e=this,t=this.state.IcontButtonVisible;return v.a.createElement("div",{className:"example icon-button-examples"},v.a.createElement("h2",{className:"example-title"},"Icon Button"),v.a.createElement("p",null,"An ",v.a.createElement("span",null,"Icon Button")," generates a button element around an icon.Also,focus styles will happen on click."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(g.a,null,v.a.createElement(E.a,{className:"example-header",title:"Basic"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,v.a.createElement("code",null,"Icon Button")," using icon specified with the ",v.a.createElement("code",null,"iconCls")," property example."),v.a.createElement(C.a,{iconCls:"fas fa-plus",tip:"Add"}),v.a.createElement(C.a,{iconCls:"fas fa-trash-alt",tip:"Delete"}),v.a.createElement(C.a,{iconCls:"fas fa-wrench",tip:"Tool"}))))),v.a.createElement(g.a,null,v.a.createElement(E.a,{className:"example-header",title:"With theme"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,v.a.createElement("code",null,"Icon Button")," using different ",v.a.createElement("code",null,"theme")," example."),v.a.createElement(C.a,{iconCls:"fas fa-plus",theme:C.a.Theme.SUCCESS}),v.a.createElement(C.a,{iconCls:"fas fa-trash-alt",theme:C.a.Theme.ERROR}),v.a.createElement(C.a,{iconCls:"fas fa-wrench",disabled:!0}))))),v.a.createElement(g.a,null,v.a.createElement(E.a,{className:"example-header",title:"In Dialog"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,v.a.createElement("code",null,"Icon Button")," using icon specified with the ",v.a.createElement("code",null,"iconCls")," property example."),v.a.createElement(B.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),v.a.createElement(T.a,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(e){return v.a.createElement("div",{className:"popover-dialog-content-scroller"},v.a.createElement(C.a,{iconCls:"fas fa-plus",parentEl:e,tip:"Add"}),v.a.createElement(C.a,{iconCls:"fas fa-trash-alt",parentEl:e,tip:"Delete"}),v.a.createElement(C.a,{iconCls:"fas fa-wrench",parentEl:e,tip:"Tool"}))})))))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(k.a,{data:R}))}}]),n}(y.Component);t.default=O}}]);
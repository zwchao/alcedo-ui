(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{482:function(e,a,t){"use strict";var n,i=t(4),o=t.n(i),s=t(8),r=t.n(s),l=t(17),u=t.n(l),c=t(12),d=t.n(c),p=t(7),h=t.n(p),f=t(11),m=t.n(f),v=t(5),b=t.n(v),y=t(6),g=t.n(y),T=t(1),C=t.n(T),N=t(0),E=t.n(N),O=t(9),H=t.n(O),k=t(163),P=t(2),R=t(14),_=t(3),S=Object(R.a)(n=function(e){function a(e){var t;h()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=b()(this,(t=a.__proto__||d()(a)).call.apply(t,[this,e].concat(i)));return s.state={isHover:!1,isFocus:!1},s.setFocused=s.setFocused.bind(s),s.setHovered=s.setHovered.bind(s),s}return g()(a,e),m()(a,[{key:"setFocused",value:function(e){this.setState({isFocus:e})}},{key:"setHovered",value:function(e){this.setState({isHover:e})}},{key:"render",value:function(){var e=this,a=this.props,t=a.children,n=a.className,i=a.theme,s=a.label,l=a.isLabelAnimate,c=a.hasValue,d=a.disabled,p=a.required,h=a.useSeparator,f=u()(a,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),m=this.state,v=m.isHover,b=m.isFocus,y=H()("material-provider",r()({"has-label":s,"has-value":c,"has-separator":h,animated:l,focused:b},n,n));return C.a.createElement("div",o()({},f,{className:y,disabled:d}),C.a.createElement("div",{className:"material-provider-label-wrapper"},C.a.createElement("span",{className:"material-provider-label"},s),p?C.a.createElement("div",{className:"material-provider-required-dot"}):null),T.Children.map(t,function(a){var t=a.props,n=t.triggerClassName,i=t.placeholderClassName,s=u()(t,["triggerClassName","placeholderClassName"]),l=o()({},s,{className:H()("material-provider-field",r()({},s.className,s.className)),onFocus:function(){s.onFocus&&s.onFocus.apply(s,arguments),e.setFocused(!0)},onBlur:function(){s.onBlur&&s.onBlur.apply(s,arguments),e.setFocused(!1)},onMouseOver:function(){s.onMouseOver&&s.onMouseOver.apply(s,arguments),e.setHovered(!0)},onMouseOut:function(){s.onMouseOut&&s.onMouseOut.apply(s,arguments),e.setHovered(!1)}});return"string"!=typeof a.type&&(l.triggerClassName=H()("material-provider-field-trigger",r()({},n,n)),l.placeholderClassName=H()("material-provider-field-placeholder",r()({},i,i))),Object(T.cloneElement)(a,l)}),h?C.a.createElement(k.a,{theme:i,isHover:v,isFocus:b,disabled:d}):null)}}]),a}(T.Component))||n;S.propTypes={className:E.a.string,style:E.a.object,theme:E.a.oneOf(_.a.enumerateValue(P.a)),label:E.a.string,isLabelAnimate:E.a.bool,hasValue:E.a.bool,disabled:E.a.bool,required:E.a.bool,useSeparator:E.a.bool},S.defaultProps={theme:P.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var V=S;t.d(a,"a",function(){return V})},487:function(e,a,t){"use strict";var n=t(4),i=t.n(n),o=t(8),s=t.n(o),r=t(17),l=t.n(r),u=t(12),c=t.n(u),d=t(7),p=t.n(d),h=t(11),f=t.n(h),m=t(5),v=t.n(m),b=t(6),y=t.n(b),g=t(1),T=t.n(g),C=t(0),N=t.n(C),E=t(169),O=t.n(E),H=t(116),k=t.n(H),P=t(9),R=t.n(P),_=t(170),S=t(2),V=t(13),I=t(18),B=t(3);function A(e){return(window.innerWidth-e.offsetWidth)/2}function F(e){return(window.innerHeight-e.offsetHeight)/2}function M(e,a){if(e){var t={};switch(a){case V.a.TOP_LEFT:t.left=0,t.top=0;break;case V.a.TOP:t.left=A(e),t.top=0;break;case V.a.TOP_RIGHT:t.right=0,t.top=0;break;case V.a.BOTTOM_LEFT:t.left=0,t.bottom=0;break;case V.a.BOTTOM:t.left=A(e),t.bottom=0;break;case V.a.BOTTOM_RIGHT:t.right=0,t.bottom=0;break;case V.a.LEFT_TOP:t.left=0,t.top=0;break;case V.a.LEFT:t.left=0,t.top=F(e);break;case V.a.LEFT_BOTTOM:t.left=0,t.bottom=0;break;case V.a.RIGHT_TOP:t.right=0,t.top=0;break;case V.a.RIGHT:t.right=0,t.top=F(e);break;case V.a.RIGHT_BOTTOM:t.right=0,t.bottom=0;break;case V.a.CENTER:t.left=A(e),t.top=F(e)}return t}}var w,x,L={getStyle:M,setStyle:function(e,a){var t=M(e,a);if(t)for(var n in e.style.left=e.style.right=e.style.top=e.style.bottom=null,t)e.style[n]=t[n]+"px"}},q=(x=w=function(e){function a(e){var t;p()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=v()(this,(t=a.__proto__||c()(a)).call.apply(t,[this,e].concat(i)));return s.resizeHandler=O()(function(){s.resetPosition()},250),s.state={enter:!1,exited:!0},s.enterHandler=s.enterHandler.bind(s),s.enteredHandler=s.enteredHandler.bind(s),s.exitHandler=s.exitHandler.bind(s),s.exitedHandler=s.exitedHandler.bind(s),s.resizeHandler=s.resizeHandler.bind(s),s.getEl=s.getEl.bind(s),s.resetPosition=s.resetPosition.bind(s),s}return y()(a,e),f()(a,[{key:"enterHandler",value:function(e){var a=this;this.transitionEl=e,this.resetPosition(),this.setState({enter:!0},function(){var t=a.props.onRender;t&&t(e)})}},{key:"enteredHandler",value:function(e){var a=this.props.onRendered;a&&a(e)}},{key:"exitHandler",value:function(e){var a=this;this.setState({enter:!1},function(){var t=a.props.onDestroy;t&&t(e)})}},{key:"exitedHandler",value:function(e){var a=this;this.setState({exited:!0},function(){var t=a.props.onDestroyed;t&&t(e)})}},{key:"getEl",value:function(){return this.transitionEl}},{key:"resetPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;L.setStyle(this.transitionEl,e.position)}},{key:"componentDidMount",value:function(){I.a.addEvent(window,"resize",this.resizeHandler)}},{key:"componentWillReceiveProps",value:function(e){e.visible&&this.setState({exited:!e.visible}),e.position!==this.props.position&&this.resetPosition(e)}},{key:"componentWillUnmount",value:function(){I.a.removeEvent(window,"resize",this.resizeHandler)}},{key:"render",value:function(){var e,a=this,t=this.props,n=t.className,o=t.theme,r=t.position,u=t.isAnimated,c=t.visible,d=t.container,p=t.showModal,h=t.modalClassName,f=(t.isEscClose,t.isBlurClose,t.shouldPreventContainerScroll,t.onRender,t.onRendered,t.onDestroy,t.onDestroyed,l()(t,["className","theme","position","isAnimated","visible","container","showModal","modalClassName","isEscClose","isBlurClose","shouldPreventContainerScroll","onRender","onRendered","onDestroy","onDestroyed"])),m=this.state,v=m.enter,b=m.exited,y=R()("position-pop-modal",s()({hidden:!v,"position-pop-modal-animated":u},h,h)),C=R()("position-pop",(e={hidden:!v},s()(e,"theme-"+o,o),s()(e,"position-pop-"+r,r),s()(e,"position-pop-animated",u),s()(e,n,n),e));return T.a.createElement(_.a,{visible:!b},p?T.a.createElement(k.a,{appear:!0,in:c,timeout:250},T.a.createElement("div",{className:y})):null,T.a.createElement(k.a,{appear:!0,in:c,timeout:250,onEnter:this.enterHandler,onEntered:this.enteredHandler,onExit:this.exitHandler,onExited:this.exitedHandler},Object(g.cloneElement)(d,i()({},f,{className:C,onWheel:function(e){I.a.wheelHandler(e,a.props)}}))))}}]),a}(g.Component),w.Position=V.a,w.Theme=S.a,x);q.propTypes={className:N.a.string,style:N.a.object,visible:N.a.bool,theme:N.a.oneOf(B.a.enumerateValue(S.a)),position:N.a.oneOf(B.a.enumerateValue(V.a)),isAnimated:N.a.bool,depth:N.a.number,isBlurClose:N.a.bool,isEscClose:N.a.bool,shouldPreventContainerScroll:N.a.bool,container:N.a.node,showModal:N.a.bool,modalClassName:N.a.string,onRender:N.a.func,onRendered:N.a.func,onDestroy:N.a.func,onDestroyed:N.a.func,onWheel:N.a.func},q.defaultProps={depth:6,visible:!1,theme:S.a.DEFAULT,position:V.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldPreventContainerScroll:!0,container:T.a.createElement("div",null),showModal:!1};var D=q;t.d(a,"a",function(){return D})},490:function(e,a,t){"use strict";var n,i,o=t(8),s=t.n(o),r=t(12),l=t.n(r),u=t(7),c=t.n(u),d=t(11),p=t.n(d),h=t(5),f=t.n(h),m=t(6),v=t.n(m),b=t(1),y=t.n(b),g=t(0),T=t.n(g),C=t(9),N=t.n(C),E=t(481),O=t(2),H=t(3),k=(i=n=function(e){function a(e){var t;c()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=f()(this,(t=a.__proto__||l()(a)).call.apply(t,[this,e].concat(i)));return s.touchTapHandler=s.touchTapHandler.bind(s),s}return v()(a,e),p()(a,[{key:"touchTapHandler",value:function(){var e=this.props,a=e.data,t=e.onTouchTap;t&&t(a)}},{key:"render",value:function(){var e=this.props,a=e.theme,t=e.data,n=e.disabled,i=e.isChecked,o=N()("button-radio",s()({activated:i},t.className,t.className));return y.a.createElement(E.a,{className:o,theme:a,value:t.label,disabled:n,onTouchTap:this.touchTapHandler})}}]),a}(b.Component),n.Theme=O.a,i);k.propTypes={theme:T.a.oneOf(H.a.enumerateValue(O.a)),data:T.a.shape({className:T.a.string,style:T.a.object,label:T.a.any,value:T.a.any,disabled:T.a.bool}).isRequired,disabled:T.a.bool,isChecked:T.a.bool,onTouchTap:T.a.func},k.defaultProps={disabled:!1,isChecked:!1};var P=k;t.d(a,"a",function(){return P})},494:function(e,a,t){"use strict";var n,i,o,s=t(8),r=t.n(s),l=t(12),u=t.n(l),c=t(7),d=t.n(c),p=t(11),h=t.n(p),f=t(5),m=t.n(f),v=t(6),b=t.n(v),y=t(1),g=t.n(y),T=t(0),C=t.n(T),N=t(9),E=t.n(N),O=t(490),H=t(2),k=t(14),P=t(3),R=Object(k.a)((o=i=function(e){function a(e){var t;d()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=m()(this,(t=a.__proto__||u()(a)).call.apply(t,[this,e].concat(i)));return s.state={value:e.value},s.changeHandler=s.changeHandler.bind(s),s}return b()(a,e),h()(a,[{key:"changeHandler",value:function(e){var a=this;this.setState({value:e.value},function(){!a.props.disabled&&a.props.onChange&&a.props.onChange(e.value)})}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:!!e.value})}},{key:"render",value:function(){var e=this,a=this.props,t=a.className,n=a.style,i=a.theme,o=a.activatedTheme,s=a.name,l=a.disabled,u=a.data,c=this.state.value,d=E()("button-radio-group",r()({},t,t));return g.a.createElement("div",{className:d,style:n,disabled:l},s?g.a.createElement("input",{type:"hidden",name:s,value:c}):null,u.map(function(a,t){var n=a.value==c;return g.a.createElement(O.a,{key:t,theme:n?o:i,data:a,disabled:l||a.disabled,isChecked:n,onTouchTap:e.changeHandler})}))}}]),a}(y.Component),i.Theme=H.a,n=o))||n;R.propTypes={className:C.a.string,style:C.a.object,theme:C.a.oneOf(P.a.enumerateValue(H.a)),activatedTheme:C.a.oneOf(P.a.enumerateValue(H.a)),name:C.a.string,data:C.a.arrayOf(C.a.shape({className:C.a.string,style:C.a.object,label:C.a.any,value:C.a.any,disabled:C.a.bool})).isRequired,value:C.a.any,disabled:C.a.bool,onChange:C.a.func},R.defaultProps={theme:H.a.DEFAULT,activatedTheme:H.a.PRIMARY,value:"",disabled:!1};var _=R;t.d(a,"a",function(){return _})},497:function(e,a,t){"use strict";var n,i,o,s=t(4),r=t.n(s),l=t(8),u=t.n(l),c=t(17),d=t.n(c),p=t(12),h=t.n(p),f=t(7),m=t.n(f),v=t(11),b=t.n(v),y=t(5),g=t.n(y),T=t(6),C=t.n(T),N=t(1),E=t.n(N),O=t(0),H=t.n(O),k=t(9),P=t.n(k),R=t(161),_=t(482),S=t(2),V=t(14),I=t(3),B=Object(V.a)((o=i=function(e){function a(e){var t;m()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=g()(this,(t=a.__proto__||h()(a)).call.apply(t,[this,e].concat(i)));return s.state={value:e.value},s.triggerChangeHandler=s.triggerChangeHandler.bind(s),s}return C()(a,e),b()(a,[{key:"triggerChangeHandler",value:function(e){var a=this;this.setState({value:e},function(){var t=a.props.onChange;t&&t(e)})}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,n=e.theme,i=e.label,o=e.isLabelAnimate,s=e.disabled,l=e.required,c=d()(e,["className","style","theme","label","isLabelAnimate","disabled","required"]),p=this.state.value,h=P()("material-text-field",u()({},a,a));return E.a.createElement(_.a,{className:h,style:t,theme:n,label:i,isLabelAnimate:o,hasValue:!!p,disabled:s,required:l},E.a.createElement(R.a,r()({},c,{theme:n,value:p,disabled:s,required:l,onChange:this.triggerChangeHandler})))}}]),a}(N.Component),i.Type=R.a.Type,i.Theme=S.a,n=o))||n;B.propTypes={className:H.a.string,style:H.a.object,theme:H.a.oneOf(I.a.enumerateValue(S.a)),type:H.a.oneOf(I.a.enumerateValue(R.a.Type)),name:H.a.string,label:H.a.any,isLabelAnimate:H.a.bool,placeholder:H.a.string,value:H.a.oneOfType([H.a.number,H.a.string]),iconCls:H.a.string,disabled:H.a.bool,readOnly:H.a.bool,autoFocus:H.a.bool,infoMsg:H.a.string,clearButtonVisible:H.a.bool,rightIconCls:H.a.string,passwordButtonVisible:H.a.bool,required:H.a.bool,maxLength:H.a.number,max:H.a.number,min:H.a.number,pattern:H.a.object,patternInvalidMsg:H.a.string,autoComplete:H.a.string,autoCorrect:H.a.string,autoCapitalize:H.a.string,spellCheck:H.a.string,onChange:H.a.func,onPressEnter:H.a.func,onValid:H.a.func,onInvalid:H.a.func,onFocus:H.a.func,onBlur:H.a.func,onClear:H.a.func,onPasswordVisible:H.a.func,onPasswordInvisible:H.a.func,onMouseOver:H.a.func,onMouseOut:H.a.func},B.defaultProps={theme:S.a.DEFAULT,type:"text",name:"",label:"",isLabelAnimate:!0,placeholder:"",value:"",iconCls:"",disabled:!1,readOnly:!1,autoFocus:!1,infoMsg:"",clearButtonVisible:!0,passwordButtonVisible:!0,required:!1,patternInvalidMsg:"",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",fieldMsgVisible:!1};var A=B;t.d(a,"a",function(){return A})},506:function(e,a,t){"use strict";var n,i,o,s=t(4),r=t.n(s),l=t(8),u=t.n(l),c=t(17),d=t.n(c),p=t(12),h=t.n(p),f=t(7),m=t.n(f),v=t(11),b=t.n(v),y=t(5),g=t.n(y),T=t(6),C=t.n(T),N=t(1),E=t.n(N),O=t(0),H=t.n(O),k=t(9),P=t.n(k),R=t(168),_=t(38),S=t(2),V=t(13),I=t(14),B=t(3),A=Object(I.a)((o=i=function(e){function a(e){var t;m()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=g()(this,(t=a.__proto__||h()(a)).call.apply(t,[this,e].concat(i)));return s.startRipple=s.startRipple.bind(s),s.endRipple=s.endRipple.bind(s),s}return C()(a,e),b()(a,[{key:"startRipple",value:function(e){this.refs.baseButton.startRipple(e)}},{key:"endRipple",value:function(){this.refs.baseButton.endRipple()}},{key:"render",value:function(){var e=this.props,a=e.children,t=e.className,n=d()(e,["children","className"]),i=P()("anchor-button",u()({},t,t));return E.a.createElement(R.a,r()({},n,{ref:"baseButton",className:i}),a)}}]),a}(N.Component),i.Theme=S.a,i.TipPosition=V.a,n=o))||n;A.propTypes={className:H.a.string,style:H.a.object,theme:H.a.oneOf(B.a.enumerateValue(S.a)),isRounded:H.a.bool,isCircular:H.a.bool,value:H.a.any,type:H.a.string,disabled:H.a.bool,isLoading:H.a.bool,disableTouchRipple:H.a.bool,iconCls:H.a.string,rightIconCls:H.a.string,rippleDisplayCenter:H.a.bool,tip:H.a.string,tipPosition:H.a.oneOf(B.a.enumerateValue(_.a.Position)),renderer:H.a.func,onTouchTap:H.a.func},A.defaultProps={theme:S.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:_.a.Position.BOTTOM};var F=A;t.d(a,"a",function(){return F})},571:function(e,a,t){"use strict";var n,i,o,s=t(8),r=t.n(s),l=t(17),u=t.n(l),c=t(114),d=t.n(c),p=t(36),h=t.n(p),f=t(4),m=t.n(f),v=t(12),b=t.n(v),y=t(7),g=t.n(y),T=t(11),C=t.n(T),N=t(5),E=t.n(N),O=t(6),H=t.n(O),k=t(1),P=t.n(k),R=t(0),_=t.n(R),S=t(466),V=t.n(S),I=t(9),B=t.n(I),A=t(487),F=t(39),M=t(506),w=t(14),x=t(3),L=t(86),q=Object(w.a)((o=i=function(e){function a(e){var t;g()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=E()(this,(t=a.__proto__||b()(a)).call.apply(t,[this,e].concat(i)));return s.unrenderTimeout=null,s.state={hidden:!0,leave:!1},s.getIconCls=s.getIconCls.bind(s),s.touchTapHandler=s.touchTapHandler.bind(s),s}return H()(a,e),C()(a,[{key:"getIconCls",value:function(){switch(this.props.type){case L.a.SUCCESS:return"fas fa-check-circle";case L.a.WARNING:return"fas fa-exclamation-triangle";case L.a.ERROR:return"fas fa-times-circle";default:return"fas fa-info-circle"}}},{key:"touchTapHandler",value:function(e){e.preventDefault();var a=this.props,t=a.notificationId,n=a.onRequestClose;this.setState({hidden:!0,leave:!0},function(){setTimeout(function(){n&&n(t)},500)})}},{key:"componentDidMount",value:function(){var e=this,a=this.props,t=a.notificationId,n=a.duration,i=a.onRequestClose,o=this.refs.notification;o.style.height=o.clientHeight+"px",o.style.width=o.clientWidth+"px",n>0&&(this.unrenderTimeout=setTimeout(function(){e.setState({hidden:!0,leave:!0},function(){setTimeout(function(){i&&i(t)},500)})},n)),setTimeout(function(){e.setState({hidden:!1})},0)}},{key:"componentWillUnmount",value:function(){this.unrenderTimeout&&clearTimeout(this.unrenderTimeout)}},{key:"render",value:function(){var e,a=this.props,t=a.className,n=a.style,i=a.type,o=a.title,s=a.message,l=a.iconCls,u=a.closeIconVisible,c=a.closeButtonVisible,d=a.closeButtonValue,p=this.state,h=p.hidden,f=p.leave,m=B()("notification",(e={"theme-default":i===L.a.DEFAULT},r()(e,"theme-"+i,i!==L.a.DEFAULT),r()(e,"hidden",h),r()(e,"leave",f),r()(e,"has-close-button",c),r()(e,t,t),e));return P.a.createElement("div",{ref:"notification",className:m,style:n},i===L.a.DEFAULT?null:P.a.createElement("i",{className:(l||this.getIconCls())+" notification-icon"}),P.a.createElement("div",{className:"notification-title"},o),P.a.createElement("div",{className:"notification-message"},s),u?P.a.createElement(F.a,{className:"notification-close-icon",iconCls:"fas fa-times",onTouchTap:this.touchTapHandler}):null,c?P.a.createElement(M.a,{className:"notification-close-Button",value:d,onTouchTap:this.touchTapHandler}):null)}}]),a}(k.Component),i.Type=L.a,n=o))||n;q.propTypes={className:_.a.string,style:_.a.object,notificationId:_.a.number,type:_.a.oneOf(x.a.enumerateValue(L.a)),title:_.a.any,message:_.a.any,iconCls:_.a.string,duration:_.a.number,closeIconVisible:_.a.bool,closeButtonVisible:_.a.bool,closeButtonValue:_.a.string,onRequestClose:_.a.func},q.defaultProps={notificationId:0,type:L.a.INFO,title:"message",message:"",iconCls:"",duration:0,closeIconVisible:!1,closeButtonVisible:!0,closeButtonValue:"Close"};var D,j,W=q,U=t(13),z=(j=D=function(e){function a(e){var t;g()(this,a);for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var s=E()(this,(t=a.__proto__||b()(a)).call.apply(t,[this,e].concat(i)));return s.nextKey=0,s.state={visible:!1,notifications:[]},s.isPositiveSequence=s.isPositiveSequence.bind(s),s.addNotification=s.addNotification.bind(s),s.removeNotification=s.removeNotification.bind(s),s}return H()(a,e),C()(a,[{key:"isPositiveSequence",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.position;return e!==U.a.BOTTOM_LEFT&&e!==U.a.BOTTOM&&e!==U.a.BOTTOM_RIGHT}},{key:"addNotification",value:function(e){var a=this,t=this.state.notifications;this.isPositiveSequence()?t.push(m()({},e,{notificationId:this.nextKey++})):t.unshift(m()({},e,{notificationId:this.nextKey++})),this.setState({notifications:t,visible:!0},function(){a.refs.notifier.resetPosition()})}},{key:"removeNotification",value:function(e){var a=this,t=this.state.notifications;t.splice(t.findIndex(function(a){return a.notificationId===e}),1),this.setState({notifications:t},function(){t.length<1&&a.setState({visible:!1},function(){a.refs.notifier.resetPosition()})})}},{key:"componentWillReceiveProps",value:function(e){var a=this;if(e.notifications&&e.notifications.length>0){for(var t=V()(e.notifications),n=0,i=t.length;n<i;n++)"object"!==h()(t[n])&&(t[n]={message:t[n]}),t[n].notificationId=this.nextKey++;t=this.isPositiveSequence()?[].concat(d()(this.state.notifications),d()(t)):[].concat(d()(t.reverse()),d()(this.state.notifications)),this.setState({notifications:t,visible:!0},function(){a.refs.notifier.resetPosition();var e=a.props.onNotificationPop;e&&e()})}}},{key:"render",value:function(){var e,a=this,t=this.props,n=t.className,i=t.position,o=t.duration,s=(t.onNotificationPop,u()(t,["className","position","duration","onNotificationPop"])),l=this.state,c=l.notifications,d=l.visible,p=B()("notifier",(e={},r()(e,"notifier-"+i,i),r()(e,n,n),e));return P.a.createElement(A.a,m()({},s,{ref:"notifier",className:p,visible:d,position:i}),c.map(function(e){return P.a.createElement(W,m()({},e,{key:e.notificationId,duration:"duration"in e?e.duration:o,onRequestClose:a.removeNotification}))}))}}]),a}(k.Component),D.Type=L.a,D.Position=U.a,j);z.propTypes={className:_.a.string,style:_.a.object,notifications:_.a.arrayOf(_.a.oneOfType([_.a.shape({className:_.a.string,style:_.a.object,type:_.a.oneOf(x.a.enumerateValue(L.a)),title:_.a.string,message:_.a.string,iconCls:_.a.string,duration:_.a.number}),_.a.string,_.a.number])),position:_.a.oneOf(x.a.enumerateValue(U.a)),duration:_.a.number,onNotificationPop:_.a.func},z.defaultProps={position:U.a.BOTTOM_RIGHT,duration:0};var G=z;t.d(a,"a",function(){return G})}}]);
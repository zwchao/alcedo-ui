(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{367:function(e,t,a){"use strict";var n=a(6),s=a.n(n),l=a(79),o=a.n(l),r=a(80),i=a.n(r),c=a(81),u=a.n(c),p=a(82),d=a.n(p),h=a(20),f=a.n(h),m=a(83),g=a.n(m),y=a(0),b=a.n(y),v=a(1),x=a.n(v),T=a(374),w=(a(368),function(e){function t(e){var a,n;return o()(this,t),(n=u()(this,d()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=f()(n),n.generateData).bind(a),n}return g()(t,e),i()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return b.a.createElement("div",{className:"prop-type-desc-table-wrapper"},b.a.createElement(T.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(y.Component));w.propTypes={data:x.a.object},w.defaultProps={data:null},t.a=w},368:function(e,t,a){var n=a(369);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,s);n.locals&&(e.exports=n.locals)},369:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},428:function(e,t,a){"use strict";var n=a(365),s=a.n(n),l=a(349),o=a.n(l),r=a(79),i=a.n(r),c=a(80),u=a.n(c),p=a(81),d=a.n(p),h=a(82),f=a.n(h),m=a(20),g=a.n(m),y=a(83),b=a.n(y),v=a(21),x=a.n(v),T=a(0),w=a.n(T),C=a(1),P=a.n(C),E=a(50),V=a(362),I=a.n(V),k=a(379),F=a(446),M=a(364),N=a(448),S=a(363),H=a(399),O=a(380),A=function(e){function t(e){var a,n;i()(this,t);for(var s=arguments.length,l=new Array(s>1?s-1:0),o=1;o<s;o++)l[o-1]=arguments[o];return n=d()(this,(a=f()(t)).call.apply(a,[this,e].concat(l))),x()(g()(n),"focus",function(){n.refs.input.focus()}),x()(g()(n),"blur",function(){n.refs.input.blur()}),x()(g()(n),"resetHeight",function(){n.props.autoHeight&&n.inputEl&&(n.inputEl.style.height="1px",n.inputEl.style.height=Math.max(n.inputEl.scrollHeight,n.inputElInitHeight)+"px")}),x()(g()(n),"changeHandler",function(e){var t=n.props,a=t.onValid,s=t.onInvalid,l=e.target.value,o=H.a.fieldValid(l,n.props);n.resetHeight(),n.setState({invalidMsgs:o,value:l},function(){n.props.onChange&&n.props.onChange(l,e),o.length>0?s&&s():a&&a()})}),x()(g()(n),"keyDownHandler",function(e){if(13===e.keyCode){var t=n.props.onPressEnter,a=n.state.value;t&&t(e,a)}}),x()(g()(n),"clearValue",function(){var e=n.props,t=e.disabled,a=e.clearButtonVisible,s=e.onClear,l=e.onChange,o=e.onValid,r=e.onInvalid,i=H.a.fieldValid("",n.props);!t&&a&&n.setState({invalidMsgs:i,value:""},function(){n.focus(),s&&s(),l&&l(""),i.length>0?r&&r():o&&o()})}),x()(g()(n),"togglePasswordVisible",function(){var e=n.props,t=e.disabled,a=e.passwordButtonVisible,s=e.onPasswordVisible,l=e.onPasswordInvisible,o=!n.state.passwordVisible;!t&&a&&n.setState({passwordVisible:o},function(){n.focus(),o?s&&s():l&&l()})}),x()(g()(n),"mouseOverHandler",function(e){n.setState({infoVisible:!0,errorVisible:!0},function(){var t=n.props.onMouseOver,a=n.state.value;t&&t(e,a)})}),x()(g()(n),"mouseOutHandler",function(e){n.setState({infoVisible:!1,errorVisible:!1},function(){var t=n.props.onMouseOut,a=n.state.value;t&&t(e,a)})}),x()(g()(n),"focusHandler",function(e){n.setState({isFocused:!0},function(){var t=n.props,a=t.isFocusedSelectAll,s=t.onFocus,l=n.state.value;s&&s(e,l),a&&n.refs.input.setSelectionRange(0,l?l.length:0)})}),x()(g()(n),"blurHandler",function(e){e.relatedTarget!=n.clearButtonEl&&n.setState({isFocused:!1},function(){var t=n.props.onBlur,a=n.state.value;t&&t(e,a)})}),x()(g()(n),"rightIconClickHandler",function(e){var t=n.props.onRightIconClick,a=n.state.value;t&&t(e,a)}),n.state={value:e.value,isFocused:!!e.autoFocus,passwordVisible:!1,infoVisible:!1,errorVisible:!1,invalidMsgs:""},n}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.inputEl=this.refs.input,this.inputElInitHeight=parseInt(this.inputEl.offsetHeight),this.clearButtonEl=Object(E.findDOMNode)(this.refs.clearButton),this.resetHeight(),!0===this.props.autoFocus&&this.inputEl&&this.focus()}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.triggerClassName,l=e.placeholderClassName,r=e.style,i=e.theme,c=e.type,u=e.iconCls,p=e.disabled,d=e.infoMsg,h=e.autoHeight,f=e.wordCountVisible,m=e.placeholder,g=e.clearButtonVisible,y=e.rightIconCls,b=e.passwordButtonVisible,v=e.fieldMsgVisible,T=e.maxLength,C=e.isStrictMaxLength,P=e.onIconClick,E=e.onRightIconClick,V=(e.value,e.autoFocus,e.pattern,e.patternInvalidMsg,e.isFocusedSelectAll,e.onPressEnter,e.onValid,e.onInvalid,e.onClear,e.onPasswordVisible,e.onPasswordInvisible,o()(e,["children","className","triggerClassName","placeholderClassName","style","theme","type","iconCls","disabled","infoMsg","autoHeight","wordCountVisible","placeholder","clearButtonVisible","rightIconCls","passwordButtonVisible","fieldMsgVisible","maxLength","isStrictMaxLength","onIconClick","onRightIconClick","value","autoFocus","pattern","patternInvalidMsg","isFocusedSelectAll","onPressEnter","onValid","onInvalid","onClear","onPasswordVisible","onPasswordInvisible"])),M=this.state,S=M.value,O=M.isFocused,A=M.passwordVisible,B=M.infoVisible,D=M.errorVisible,L=M.invalidMsgs,R=c===N.a.PASSWORD,j=(!S||S.length,I()("text-area",!S||S.length<=0?"empty":"not-empty",L.length>0?"theme-error":i?"theme-".concat(i):"",x()({password:R,"has-icon":u,"auto-height":h,focused:O,"has-right-icon":y,"has-word-count":f,"has-clear-button":g},a,a))),q=I()("text-area-left-icon",{deactivated:!P}),U=I()("text-area-placeholder",x()({},l,l)),W=I()("text-area-input",x()({},n,n)),z=I()("password-visible-icon",{hidden:!R||!b}),J=I()("clear-icon",{hidden:!g||!S||S.length<1}),K=I()("text-area-right-icon",{deactivated:!E}),X=I()("text-area-word-count",{error:S.length>T}),G=c;return G===N.a.PASSWORD?G=A?N.a.TEXT:N.a.PASSWORD:H.a.isNumberType(c)&&(G="text"),w.a.createElement("div",{className:j,style:r,disabled:p},u?w.a.createElement(k.a,{className:q,iconCls:u,disableTouchRipple:!P,onClick:P}):null,!m||S||O?null:w.a.createElement("textarea",{className:U,value:m,disabled:!0}),w.a.createElement("textarea",s()({},V,{ref:"input",className:W,type:G,value:S,maxLength:C?T:null,onChange:this.changeHandler,onKeyDown:this.keyDownHandler,onMouseOver:this.mouseOverHandler,onMouseOut:this.mouseOutHandler,onFocus:this.focusHandler,onBlur:this.blurHandler,disabled:p})),w.a.createElement(k.a,{className:z,iconCls:A?"fas fa-eye":"far fa-eye-slash",onClick:this.togglePasswordVisible}),w.a.createElement(k.a,{ref:"clearButton",className:J,iconCls:"fas fa-times-circle",onClick:this.clearValue}),y?w.a.createElement(k.a,{className:K,rightIconCls:y,disableTouchRipple:!E,onClick:this.rightIconClickHandler}):null,w.a.createElement("div",{className:X},w.a.createElement("div",{className:"text-area-word-count-separator"}),f?"".concat(S?S.length:0).concat(T?" / ".concat(T):""):null),v&&B&&d?w.a.createElement(F.a,{type:"info",msg:d}):null,v&&D&&L.length>0?w.a.createElement(F.a,{type:"error",msg:L.join(", ")}):null,t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:O.a.getDerivedState(e,t,"value")}}}]),t}(T.Component);x()(A,"Type",N.a),x()(A,"Theme",M.a),A.propTypes={className:P.a.string,triggerClassName:P.a.string,placeholderClassName:P.a.string,style:P.a.object,theme:P.a.oneOf(S.a.enumerateValue(M.a)),type:P.a.oneOf(S.a.enumerateValue(N.a)),name:P.a.string,placeholder:P.a.string,value:P.a.oneOfType([P.a.number,P.a.string]),iconCls:P.a.string,disabled:P.a.bool,readOnly:P.a.bool,autoFocus:P.a.bool,infoMsg:P.a.string,clearButtonVisible:P.a.bool,rightIconCls:P.a.string,passwordButtonVisible:P.a.bool,autoHeight:P.a.bool,wordCountVisible:P.a.bool,isStrictMaxLength:P.a.bool,isFocusedSelectAll:P.a.bool,required:P.a.bool,maxLength:P.a.number,max:P.a.number,min:P.a.number,pattern:P.a.object,patternInvalidMsg:P.a.string,fieldMsgVisible:P.a.bool,onChange:P.a.func,onPressEnter:P.a.func,onValid:P.a.func,onInvalid:P.a.func,onFocus:P.a.func,onBlur:P.a.func,onClear:P.a.func,onPasswordVisible:P.a.func,onPasswordInvisible:P.a.func,onIconClick:P.a.func,onRightIconClick:P.a.func,onMouseOver:P.a.func,onMouseOut:P.a.func},A.defaultProps={theme:M.a.DEFAULT,type:"text",name:"",placeholder:"",value:"",iconCls:"",rightIconCls:"",disabled:!1,readOnly:!1,autoFocus:!1,infoMsg:"",autoHeight:!1,wordCountVisible:!1,isStrictMaxLength:!1,isFocusedSelectAll:!1,clearButtonVisible:!1,passwordButtonVisible:!1,required:!1,patternInvalidMsg:"",fieldMsgVisible:!1};var B=A;a.d(t,"a",function(){return B})},616:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},triggerClassName:{type:"PropTypes.string",desc:"The CSS class name of the input element."},placeholderClassName:{type:"PropTypes.string",desc:"The CSS class name of the placeholder element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The TextArea theme.",default:"Theme.DEFAULT"},type:{type:"PropTypes.oneOf",desc:'Specifies the type of input to display such as "password" or "text".',default:"text"},name:{type:"PropTypes.string",desc:"The name of the text area.",default:""},placeholder:{type:"PropTypes.string",desc:"The placeholder of the text area.",default:""},value:{type:"PropTypes.number",desc:"The value of the TextArea.Type can be string or number.",default:""},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},disabled:{type:"PropTypes.bool",desc:"Disables the textField if set to true.",default:"false"},readOnly:{type:"PropTypes.bool",desc:"If true,the textField will can't editable.",default:"false"},autoFocus:{type:"PropTypes.bool",desc:"If true,the textField will autoFocus.",default:"false"},infoMsg:{type:"PropTypes.string",desc:"The message of the textField.",default:""},clearButtonVisible:{type:"PropTypes.bool",desc:"If true,clearButton will display when the textField is not empty.",default:"false"},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},passwordButtonVisible:{type:"PropTypes.bool",desc:"If true, passwordButton will display.",default:"false"},autoHeight:{type:"PropTypes.bool",default:"false"},wordCountVisible:{type:"PropTypes.bool",default:"false"},isStrictMaxLength:{type:"PropTypes.bool",default:"false"},isFocusedSelectAll:{type:"PropTypes.bool",default:"false"},required:{type:"PropTypes.bool",desc:"If true,the textField must be required.",default:"false"},maxLength:{type:"PropTypes.number",desc:"The maximum length of textField to enter."},max:{type:"PropTypes.number",desc:"Maximum number of textField that can be entered."},min:{type:"PropTypes.number",desc:"Minimum number of textField that can be entered."},pattern:{type:"PropTypes.object",desc:"The matching rule of textField."},patternInvalidMsg:{type:"PropTypes.string",desc:"The invalid message of textField.",default:""},fieldMsgVisible:{type:"PropTypes.bool",default:"false"},onChange:{type:"PropTypes.func",desc:"Callback function fired when the textField is changed."},onPressEnter:{type:"PropTypes.func",desc:"Callback function fired when the press enter."},onValid:{type:"PropTypes.func",desc:"Callback function fired when textField valid."},onInvalid:{type:"PropTypes.func",desc:"Callback function fired when textField invalid."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when textField focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when textField blur."},onClear:{type:"PropTypes.func",desc:"Callback function fired when textField clear."},onPasswordVisible:{type:"PropTypes.func",desc:"Callback function fired when password visible."},onPasswordInvisible:{type:"PropTypes.func",desc:"Callback function fired when password invisible."},onIconClick:{type:"PropTypes.func"},onRightIconClick:{type:"PropTypes.func"},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},844:function(e,t,a){"use strict";a.r(t);var n=a(79),s=a.n(n),l=a(80),o=a.n(l),r=a(81),i=a.n(r),c=a(82),u=a.n(c),p=a(20),d=a.n(p),h=a(83),f=a.n(h),m=a(21),g=a.n(m),y=a(0),b=a.n(y),v=a(428),x=a(372),T=a(371),w=a(367),C=a(616),P=function(e){function t(e){var a;return s()(this,t),a=i()(this,u()(t).call(this,e)),g()(d()(a),"changeHandler",function(e){console.log(e)}),a}return f()(t,e),o()(t,[{key:"render",value:function(){return b.a.createElement("div",{className:"example"},b.a.createElement("h2",{className:"example-title"},"TextArea"),b.a.createElement("p",null,"A ",b.a.createElement("span",null,"TextArea")," is an interface for users to input a value in a range. TextArea can be continuous or discrete."),b.a.createElement("h2",{className:"example-title"},"Examples"),b.a.createElement(x.a,null,b.a.createElement(T.a,{className:"example-header",title:"TextArea Example"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("p",null,"TextArea with auto size."),b.a.createElement(v.a,{placeholder:"placeholder",autoHeight:!0,value:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",onChange:this.changeHandler})))),b.a.createElement(x.a,null,b.a.createElement(T.a,{className:"example-header",title:"TextArea Example"}),b.a.createElement("div",{className:"widget-content"},b.a.createElement("div",{className:"example-content"},b.a.createElement("p",null,"TextArea with regular size."),b.a.createElement(v.a,{placeholder:"placeholder",autoHeight:!1,wordCountVisible:!0,maxLength:100,isStrictMaxLength:!0,onChange:this.changeHandler})))),b.a.createElement("h2",{className:"example-title"},"Properties"),b.a.createElement(w.a,{data:C}))}}]),t}(y.Component);t.default=P}}]);
(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[1989],{38845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(18719),i=n(68670),a=n(83816),o=n(36678),l=n(13180),s=n(26086),u=n(4656),c=n(94949),p=n(37699),d=n(45697),g=n.n(d),h=n(79958),f=n(41844),v=n.n(f),m=n(11669),Z=n(23046),b=n(35720),y=n(62457),C=n(37489),F=n(87712),T=n(65248),O=n(81540),M=n(67243),P=n(19605);var E=function(e){(0,l.Z)(g,e);var t,n,d=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var i=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function g(e){var t;(0,i.Z)(this,g);for(var n=arguments.length,a=new Array(n>1?n-1:0),l=1;l<n;l++)a[l-1]=arguments[l];return t=d.call.apply(d,[this,e].concat(a)),(0,c.Z)((0,o.Z)(t),"handleChangeValue",(function(e){t.props.useFilter?t.setState({value:e,filter:e,listValue:""},(function(){var n=t.props.onChange;n&&n(e)})):t.setState({value:e,listValue:""},(function(){var n=t.props.onChange;n&&n(e)}))})),(0,c.Z)((0,o.Z)(t),"showPopup",(function(){t.setState({popupVisible:!0},(function(){t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onFocus&&t.props.onFocus()}))})),(0,c.Z)((0,o.Z)(t),"closePopup",(function(){t.setState({popupVisible:!1},(function(){t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onPopupClosed&&t.props.onPopupClosed()}))})),(0,c.Z)((0,o.Z)(t),"triggerHandler",(function(e,t,n,r,i){if(!t)return!0;for(;e;){if(e==n)return r;if(e==t)return!0;e=e.parentNode}return!i&&r})),(0,c.Z)((0,o.Z)(t),"filterData",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.filter,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.props.data;if(!e)return n;var i=t.props,a=i.displayField,o=i.isGrouped,l=function(t){return t.filter((function(t){return"object"===(0,r.Z)(t)&&t[a]?t[a].toString().toUpperCase().includes(e.toUpperCase()):t.toString().toUpperCase().includes(e.toUpperCase())}))};if(o)for(var s=Object.assign(n),u=0,c=s.length;u<c;u++){var p=s[u];p.children=l(p.children),p.children.length<1&&(s.splice(u,1),u--)}return l(n)})),(0,c.Z)((0,o.Z)(t),"handlePopupRender",(function(e){var n=M.Z.isAbove(t.wrapperEl,t.triggerEl,(0,h.findDOMNode)(e));n!==t.state.isAbove&&t.setState({isAbove:n})})),(0,c.Z)((0,o.Z)(t),"handleChange",(function(e){var n=t.props,i=n.valueField,a=n.renderer,o=a?a(e):"object"==(0,r.Z)(e)?e[i]:e,l=t.props.autoClose,s={value:o,listValue:e};l&&(s.popupVisible=!1),t.setState(s,(function(){var e=t.props.onChange;e&&e(o)}))})),t.wrapper=(0,p.createRef)(),t.wrapperEl=null,t.trigger=(0,p.createRef)(),t.triggerEl=null,t.state={value:e.value,listValue:e.value,filter:"",popupVisible:!1,isAbove:!1},t}return(0,a.Z)(g,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.triggerEl=this.trigger&&this.trigger.current&&(0,h.findDOMNode)(this.trigger.current)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.popupClassName,r=e.style,i=e.popupStyle,a=e.name,o=e.placeholder,l=e.disabled,s=e.valueField,u=e.descriptionField,d=e.position,g=e.rightIconCls,h=e.resetPopPositionWait,f=e.triggerTheme,F=e.isGrouped,O=e.onItemClick,M=e.renderer,P=e.noMatchedMsg,E=e.useDynamicRenderList,S=e.onMouseOver,N=e.onMouseOut,R=e.parentEl,k=this.state,V=k.value,w=k.listValue,I=k.popupVisible,A=k.isAbove,D=d===T.Z.TOP||d===T.Z.TOP_LEFT||d===T.Z.TOP_RIGHT||!d&&A,L=this.filterData();return p.createElement("div",{ref:this.wrapper,className:v()("editable-select",(0,c.Z)({},t,t)),style:r},a?p.createElement("input",{type:"hidden",name:a,value:V}):null,p.createElement(m.Z,{ref:this.trigger,className:v()("editable-select-trigger",D?"above":"blow",{activated:I,empty:!V}),value:V,rightIconCls:"".concat(g," editable-select-trigger-icon"),placeholder:o,disabled:l,theme:f,onMouseOver:S,onMouseOut:N,onChange:this.handleChangeValue,onFocus:this.showPopup}),p.createElement(Z.Z,{className:v()("editable-select-popup",D?"above":"blow",(0,c.Z)({},n,n)),style:Object.assign({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},i),visible:I,triggerEl:this.triggerEl,triggerHandler:this.triggerHandler,parentEl:R,hasTriangle:!1,position:d||(A?T.Z.TOP_LEFT:T.Z.BOTTOM_LEFT),resetPositionWait:h,onRender:this.handlePopupRender,onRequestClose:this.closePopup},L.length<1?p.createElement("div",{className:"no-matched"},P||p.createElement("span",null,p.createElement("i",{className:"fas fa-exclamation-triangle no-matched-icon"}),"No matched value.")):F?p.createElement(C.Z,{className:"editable-select-list",data:L,value:w,valueField:s,displayField:s,descriptionField:u,renderer:M,onItemClick:this.onItemClick,onChange:this.changeHandler}):E?p.createElement(y.Z,{className:"editable-select-list",data:L,value:w,valueField:s,displayField:s,descriptionField:u,renderer:M,onItemClick:O,onChange:this.handleChange}):p.createElement(b.Z,{className:"editable-select-list",data:L,valueField:s,value:w,displayField:s,descriptionField:u,renderer:M,onItemClick:O,onChange:this.handleChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:P.Z.getDerivedState(e,t,"value")}}}]),g}(p.Component);(0,c.Z)(E,"Theme",F.Z),(0,c.Z)(E,"Position",T.Z),E.propTypes={className:g().string,popupClassName:g().string,style:g().object,rightIconCls:g().string,popupStyle:g().object,position:g().oneOf(O.Z.enumerateValue(T.Z)),name:g().string,value:g().any,renderer:g().func,placeholder:g().string,data:g().oneOfType([g().arrayOf(g().oneOfType([g().shape({className:g().string,style:g().object,theme:g().oneOf(O.Z.enumerateValue(F.Z)),value:g().oneOfType([g().string,g().number]),desc:g().oneOfType([g().string,g().number]),disabled:g().bool,isLoading:g().bool,disableTouchRipple:g().bool,iconCls:g().string,rightIconCls:g().string,renderer:g().func,onClick:g().func}),g().string,g().number])),g().array]).isRequired,invalidMsg:g().string,disabled:g().bool,valueField:g().string,displayField:g().string,descriptionField:g().string,infoMsg:g().string,textFormat:g().func,autoClose:g().bool,useFilter:g().bool,triggerTheme:g().oneOf(O.Z.enumerateValue(F.Z)),isGrouped:g().bool,resetPopPositionWait:g().number,noMatchedMsg:g().string,useDynamicRenderList:g().bool,parentEl:g().object,onItemClick:g().func,onChange:g().func,onMouseOver:g().func,onMouseOut:g().func,onTriggerClick:g().func,onFocus:g().func,onPopupClosed:g().func},E.defaultProps={name:"",value:"",placeholder:"Please select ...",rightIconCls:"fas fa-angle-down",data:[],invalidMsg:"",disabled:!1,displayField:"text",descriptionField:"desc",infoMsg:"",autoClose:!0,useFilter:!1,useDynamicRenderList:!1,triggerTheme:F.Z.DEFAULT,isGrouped:!1,resetPopPositionWait:250};const S=E},31989:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(94786),i=n(60515),a=n(68670),o=n(83816),l=n(36678),s=n(13180),u=n(26086),c=n(4656),p=n(94949),d=n(37699),g=n(45697),h=n.n(g),f=n(41844),v=n.n(f),m=n(38845),Z=n(20645),b=n(87712),y=n(65248),C=n(81540),F=n(19605);var T=function(e){(0,s.Z)(h,e);var t,n,g=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var i=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function h(e){var t;(0,a.Z)(this,h);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t=g.call.apply(g,[this,e].concat(r)),(0,p.Z)((0,l.Z)(t),"handleTriggerFocus",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.setState({isFocus:!0},(function(){var e=t.props.onFocus;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,l.Z)(t),"handleTriggerBlur",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.setState({isFocus:!1},(function(){var e=t.props.onBlur;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,l.Z)(t),"handlePopupClosed",(function(){t.setState({isFocus:!1})})),(0,p.Z)((0,l.Z)(t),"handleTriggerFilterChange",(function(e){t.setState({filter:e},(function(){var n=t.props.onFilterChange;n&&n(e)}))})),(0,p.Z)((0,l.Z)(t),"handleTriggerChange",(function(e){t.setState({value:e},(function(){var n=t.props.onChange;n&&n(e)}))})),(0,p.Z)((0,l.Z)(t),"handleTriggerMouseOver",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.setState({isHover:!0},(function(){var e=t.props.onMouseOver;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,l.Z)(t),"handleTriggerMouseOut",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.setState({isHover:!1},(function(){var e=t.props.onMouseOut;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,l.Z)(t),"closePopup",(function(){t.editableSelectInstance&&t.editableSelectInstance.closePopup()})),t.editableSelect=(0,d.createRef)(),t.editableSelectInstance=null,t.state={value:"",filter:e.filterInitValue,isFocus:!1,isHover:!1},t}return(0,o.Z)(h,[{key:"componentDidMount",value:function(){this.editableSelectInstance=this.editableSelect&&this.editableSelect.current,this.setState({value:this.props.value})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=e.theme,o=e.label,l=e.isLabelAnimated,s=e.popupClassName,u=(0,i.Z)(e,["className","style","theme","label","isLabelAnimated","popupClassName"]),c=this.state,g=c.isFocus,h=c.isHover,f=c.value;return d.createElement("div",{className:v()("material-editable-select",(0,p.Z)({animated:l,"has-label":o,"has-value":f,focused:g},t,t)),style:n},o?d.createElement("div",{className:"material-editable-select-label"},o):null,d.createElement(m.Z,(0,r.Z)({},u,{ref:this.editableSelect,popupClassName:v()("material-editable-select-popup",(0,p.Z)({},s,s)),theme:a,value:f,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onPopupClosed:this.handlePopupClosed,onMouseOver:this.handleTriggerMouseOver,onMouseOut:this.handleTriggerMouseOut,onFilterChange:this.handleTriggerFilterChange,onChange:this.handleTriggerChange})),d.createElement(Z.Z,{theme:a,isHover:h,isFocus:g}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:F.Z.getDerivedState(e,t,"value")}}}]),h}(d.Component);(0,p.Z)(T,"Theme",b.Z),(0,p.Z)(T,"Position",y.Z),T.propTypes={className:h().string,popupClassName:h().string,style:h().object,theme:h().oneOf(C.Z.enumerateValue(b.Z)),rightIconCls:h().string,popupStyle:h().object,position:h().oneOf(C.Z.enumerateValue(y.Z)),label:h().any,isLabelAnimated:h().bool,name:h().string,value:h().any,renderer:h().func,placeholder:h().string,data:h().oneOfType([h().arrayOf(h().oneOfType([h().shape({className:h().string,style:h().object,theme:h().oneOf(C.Z.enumerateValue(b.Z)),value:h().oneOfType([h().string,h().number]),desc:h().oneOfType([h().string,h().number]),disabled:h().bool,isLoading:h().bool,disableTouchRipple:h().bool,iconCls:h().string,rightIconCls:h().string,renderer:h().func,onClick:h().func}),h().string,h().number])),h().array]).isRequired,invalidMsg:h().string,disabled:h().bool,valueField:h().string,descriptionField:h().string,infoMsg:h().string,textFormat:h().func,autoClose:h().bool,useFilter:h().bool,noMatchedMsg:h().string,triggerTheme:h().oneOf(C.Z.enumerateValue(b.Z)),isGrouped:h().bool,filterInitValue:h().string,onItemClick:h().func,onChange:h().func,onFocus:h().func,onBlur:h().func,onFilterChange:h().func,onMouseOver:h().func,onMouseOut:h().func},T.defaultProps={name:"",value:"",isLabelAnimated:!0,placeholder:"Please select ...",data:[],invalidMsg:"",disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",infoMsg:"",autoClose:!0,useFilter:!1,noMatchedMsg:"",triggerTheme:b.Z.DEFAULT,isGrouped:!1};const O=T}}]);
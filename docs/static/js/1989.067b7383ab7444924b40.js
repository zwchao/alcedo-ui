"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[1989],{38845:(e,t,n)=>{n.d(t,{Z:()=>S});var l=n(90484),r=n(6610),i=n(5991),o=n(63349),a=n(10379),s=n(46070),u=n(77608),c=n(96156),p=n(37699),d=n(45697),g=n.n(d),h=n(11669),f=n(23046),v=n(35720),m=n(62457),b=n(37489),Z=n(87712),C=n(65248),y=n(79958),F=n(41844),T=n.n(F),O=n(81540),P=n(67243),M=n(19605);var E=function(e){(0,a.Z)(g,e);var t,n,d=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(l,arguments,r)}else e=l.apply(this,arguments);return(0,s.Z)(this,e)});function g(e){var t;(0,r.Z)(this,g);for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return t=d.call.apply(d,[this,e].concat(i)),(0,c.Z)((0,o.Z)(t),"handleChangeValue",(function(e){var n=t.props,l=n.useFilter,r=n.onChange;t.setState({value:e,filter:l?e:t.state.filter,listValue:""},(function(){var n,l,i;r&&r(e),null===(n=t.popup)||void 0===n||null===(l=n.current)||void 0===l||null===(i=l.resetPosition)||void 0===i||i.call(l)}))})),(0,c.Z)((0,o.Z)(t),"showPopup",(function(){t.setState({popupVisible:!0},(function(){t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onFocus&&t.props.onFocus()}))})),(0,c.Z)((0,o.Z)(t),"closePopup",(function(){t.setState({popupVisible:!1},(function(){var e;null===(e=t.trigger)||void 0===e||e.current.blur(),t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onPopupClosed&&t.props.onPopupClosed()}))})),(0,c.Z)((0,o.Z)(t),"triggerHandler",(function(e,t,n,l,r){if(!t)return!0;for(;e;){if(e===n)return l;if(e===t)return!0;e=e.parentNode}return!r&&l})),(0,c.Z)((0,o.Z)(t),"filterData",(function(){var e=t.props,n=e.data,r=e.filterCallback,i=t.state.filter;if(!i)return n;if(r)return r(i,n);var o=t.props,a=o.displayField,s=function(e){return e.filter((function(e){return"object"===(0,l.Z)(e)&&e[a]?e[a].toString().toUpperCase().includes(i.toUpperCase()):e.toString().toUpperCase().includes(i.toUpperCase())}))};if(o.isGrouped)for(var u=Object.assign(n),c=0,p=u.length;c<p;c++){var d=u[c];d.children=s(d.children),d.children.length<1&&(u.splice(c,1),c--)}return s(n)})),(0,c.Z)((0,o.Z)(t),"handlePopupRender",(function(e){var n=P.Z.isAbove(t.wrapperEl,t.triggerEl,(0,y.findDOMNode)(e));n!==t.state.isAbove&&t.setState({isAbove:n})})),(0,c.Z)((0,o.Z)(t),"handleChange",(function(e){var n=t.props,r=n.valueField,i=n.autoClose,o=n.renderer,a=o?o(e):"object"===(0,l.Z)(e)?e[r]:e;i&&t.closePopup(),t.setState({value:a,listValue:e},(function(){var e=t.props.onChange;e&&e(a)}))})),t.wrapper=(0,p.createRef)(),t.wrapperEl=null,t.trigger=(0,p.createRef)(),t.triggerEl=null,t.popup=(0,p.createRef)(),t.popupEl=null,t.state={value:e.value,listValue:e.value,filter:"",popupVisible:!1,isAbove:!1},t}return(0,i.Z)(g,[{key:"componentDidMount",value:function(){var e,t,n;this.wrapperEl=null===(e=this.wrapper)||void 0===e?void 0:e.current,this.popupEl=null===(t=this.popup)||void 0===t?void 0:t.current,this.triggerEl=(0,y.findDOMNode)(null===(n=this.trigger)||void 0===n?void 0:n.current)}},{key:"componentDidUpdate",value:function(e,t,n){var l,r,i;this.state.popupVisible&&(null===(l=this.popup)||void 0===l||null===(r=l.current)||void 0===r||null===(i=r.resetPosition)||void 0===i||i.call(r))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.popupClassName,l=e.style,r=e.popupStyle,i=e.name,o=e.placeholder,a=e.disabled,s=e.valueField,u=e.displayField,d=e.clearButtonIconCls,g=e.clearButtonVisible,Z=e.descriptionField,y=e.position,F=e.rightIconCls,O=e.resetPopPositionWait,P=e.triggerTheme,M=e.isGrouped,E=e.onItemClick,S=e.renderer,V=e.noMatchedPopupVisible,N=e.noMatchedMsg,k=e.useDynamicRenderList,R=e.onMouseOver,I=e.onMouseOut,w=e.parentEl,B=this.state,A=B.value,D=B.listValue,L=B.popupVisible,j=B.isAbove,H=y===C.Z.TOP||y===C.Z.TOP_LEFT||y===C.Z.TOP_RIGHT||!y&&j,x=this.filterData();return p.createElement("div",{ref:this.wrapper,className:T()("editable-select",(0,c.Z)({},t,t)),style:l},i?p.createElement("input",{type:"hidden",name:i,value:A}):null,p.createElement(h.Z,{ref:this.trigger,className:T()("editable-select-trigger",H?"above":"blow",{activated:L&&((null==x?void 0:x.length)>0||V),empty:!A}),value:A,rightIconCls:"".concat(F," editable-select-trigger-icon"),placeholder:o,disabled:a,theme:P,onMouseOver:R,onMouseOut:I,clearButtonVisible:g,clearButtonIconCls:d,onChange:this.handleChangeValue,onFocus:this.showPopup}),!V&&(null==x?void 0:x.length)<1?null:p.createElement(f.Z,{className:T()("editable-select-popup",H?"above":"blow",(0,c.Z)({"no-matched-popup":(null==x?void 0:x.length)<1},n,n)),style:Object.assign({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},r),visible:L,triggerEl:this.triggerEl,triggerHandler:this.triggerHandler,parentEl:w,ref:this.popup,hasTriangle:!1,position:y||(j?C.Z.TOP_LEFT:C.Z.BOTTOM_LEFT),resetPositionWait:O,onRender:this.handlePopupRender,onRequestClose:this.closePopup},(null==x?void 0:x.length)<1?p.createElement("div",{className:"no-matched"},N||p.createElement("span",null,p.createElement("i",{className:"fas fa-exclamation-triangle no-matched-icon"}),"No matched value.")):M?p.createElement(b.Z,{className:"editable-select-list",data:x,value:D,valueField:s,displayField:u,descriptionField:Z,renderer:S,onItemClick:E,onChange:this.handleChange}):k?p.createElement(m.Z,{className:"editable-select-list",data:x,value:D,valueField:s,displayField:u,descriptionField:Z,renderer:S,onItemClick:E,onChange:this.handleChange}):p.createElement(v.Z,{className:"editable-select-list",data:x,valueField:s,value:D,displayField:u,descriptionField:Z,renderer:S,onItemClick:E,onChange:this.handleChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:M.Z.getDerivedState(e,t,"value")}}}]),g}(p.Component);(0,c.Z)(E,"Theme",Z.Z),(0,c.Z)(E,"Position",C.Z),E.propTypes={className:g().string,popupClassName:g().string,style:g().object,rightIconCls:g().string,popupStyle:g().object,position:g().oneOf(O.Z.enumerateValue(C.Z)),name:g().string,value:g().any,renderer:g().func,placeholder:g().string,data:g().oneOfType([g().arrayOf(g().oneOfType([g().shape({className:g().string,style:g().object,theme:g().oneOf(O.Z.enumerateValue(Z.Z)),value:g().oneOfType([g().string,g().number]),desc:g().oneOfType([g().string,g().number]),disabled:g().bool,isLoading:g().bool,disableTouchRipple:g().bool,iconCls:g().string,rightIconCls:g().string,renderer:g().func,onClick:g().func}),g().string,g().number])),g().array]).isRequired,invalidMsg:g().string,disabled:g().bool,noMatchedPopupVisible:g().bool,clearButtonVisible:g().bool,clearButtonIconCls:g().string,valueField:g().string,displayField:g().string,descriptionField:g().string,infoMsg:g().string,textFormat:g().func,autoClose:g().bool,useFilter:g().bool,triggerTheme:g().oneOf(O.Z.enumerateValue(Z.Z)),isGrouped:g().bool,resetPopPositionWait:g().number,noMatchedMsg:g().string,useDynamicRenderList:g().bool,parentEl:g().object,onItemClick:g().func,filterCallback:g().func,onChange:g().func,onMouseOver:g().func,onMouseOut:g().func,onTriggerClick:g().func,onFocus:g().func,onPopupClosed:g().func},E.defaultProps={name:"",value:"",placeholder:"Please select ...",rightIconCls:"fas fa-angle-down",data:[],invalidMsg:"",disabled:!1,displayField:"text",descriptionField:"desc",infoMsg:"",autoClose:!0,useFilter:!1,useDynamicRenderList:!1,noMatchedPopupVisible:!0,clearButtonVisible:!0,clearButtonIconCls:"fas fa-times-circle",triggerTheme:Z.Z.DEFAULT,isGrouped:!1,resetPopPositionWait:250};const S=E},31989:(e,t,n)=>{n.d(t,{Z:()=>P});var l=n(22122),r=n(81253),i=n(6610),o=n(5991),a=n(63349),s=n(10379),u=n(46070),c=n(77608),p=n(96156),d=n(37699),g=n(45697),h=n.n(g),f=n(41844),v=n.n(f),m=n(38845),b=n(20645),Z=n(87712),C=n(65248),y=n(81540),F=n(19605),T=["className","style","theme","label","isLabelAnimated","popupClassName"];var O=function(e){(0,s.Z)(h,e);var t,n,g=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,c.Z)(t);if(n){var r=(0,c.Z)(this).constructor;e=Reflect.construct(l,arguments,r)}else e=l.apply(this,arguments);return(0,u.Z)(this,e)});function h(e){var t;(0,i.Z)(this,h);for(var n=arguments.length,l=new Array(n>1?n-1:0),r=1;r<n;r++)l[r-1]=arguments[r];return t=g.call.apply(g,[this,e].concat(l)),(0,p.Z)((0,a.Z)(t),"handleTriggerFocus",(function(){for(var e=arguments.length,n=new Array(e),l=0;l<e;l++)n[l]=arguments[l];t.setState({isFocus:!0},(function(){var e=t.props.onFocus;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,a.Z)(t),"handleTriggerBlur",(function(){for(var e=arguments.length,n=new Array(e),l=0;l<e;l++)n[l]=arguments[l];t.setState({isFocus:!1},(function(){var e=t.props.onBlur;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,a.Z)(t),"handlePopupClosed",(function(){t.setState({isFocus:!1})})),(0,p.Z)((0,a.Z)(t),"handleTriggerFilterChange",(function(e){t.setState({filter:e},(function(){var n=t.props.onFilterChange;n&&n(e)}))})),(0,p.Z)((0,a.Z)(t),"handleTriggerChange",(function(e){t.setState({value:e},(function(){var n=t.props.onChange;n&&n(e)}))})),(0,p.Z)((0,a.Z)(t),"handleTriggerMouseOver",(function(){for(var e=arguments.length,n=new Array(e),l=0;l<e;l++)n[l]=arguments[l];t.setState({isHover:!0},(function(){var e=t.props.onMouseOver;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,a.Z)(t),"handleTriggerMouseOut",(function(){for(var e=arguments.length,n=new Array(e),l=0;l<e;l++)n[l]=arguments[l];t.setState({isHover:!1},(function(){var e=t.props.onMouseOut;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,a.Z)(t),"closePopup",(function(){t.editableSelectInstance&&t.editableSelectInstance.closePopup()})),t.editableSelect=(0,d.createRef)(),t.editableSelectInstance=null,t.state={value:"",filter:e.filterInitValue,isFocus:!1,isHover:!1},t}return(0,o.Z)(h,[{key:"componentDidMount",value:function(){this.editableSelectInstance=this.editableSelect&&this.editableSelect.current,this.setState({value:this.props.value})}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,i=e.theme,o=e.label,a=e.isLabelAnimated,s=e.popupClassName,u=(0,r.Z)(e,T),c=this.state,g=c.isFocus,h=c.isHover,f=c.value;return d.createElement("div",{className:v()("material-editable-select",(0,p.Z)({animated:a,"has-label":o,"has-value":f,focused:g},t,t)),style:n},o?d.createElement("div",{className:"material-editable-select-label"},o):null,d.createElement(m.Z,(0,l.Z)({},u,{ref:this.editableSelect,popupClassName:v()("material-editable-select-popup",(0,p.Z)({},s,s)),theme:i,value:f,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onPopupClosed:this.handlePopupClosed,onMouseOver:this.handleTriggerMouseOver,onMouseOut:this.handleTriggerMouseOut,onFilterChange:this.handleTriggerFilterChange,onChange:this.handleTriggerChange})),d.createElement(b.Z,{theme:i,isHover:h,isFocus:g}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:F.Z.getDerivedState(e,t,"value")}}}]),h}(d.Component);(0,p.Z)(O,"Theme",Z.Z),(0,p.Z)(O,"Position",C.Z),O.propTypes={className:h().string,popupClassName:h().string,style:h().object,theme:h().oneOf(y.Z.enumerateValue(Z.Z)),rightIconCls:h().string,popupStyle:h().object,position:h().oneOf(y.Z.enumerateValue(C.Z)),label:h().any,isLabelAnimated:h().bool,name:h().string,value:h().any,renderer:h().func,placeholder:h().string,data:h().oneOfType([h().arrayOf(h().oneOfType([h().shape({className:h().string,style:h().object,theme:h().oneOf(y.Z.enumerateValue(Z.Z)),value:h().oneOfType([h().string,h().number]),desc:h().oneOfType([h().string,h().number]),disabled:h().bool,isLoading:h().bool,disableTouchRipple:h().bool,iconCls:h().string,rightIconCls:h().string,renderer:h().func,onClick:h().func}),h().string,h().number])),h().array]).isRequired,invalidMsg:h().string,disabled:h().bool,valueField:h().string,descriptionField:h().string,infoMsg:h().string,textFormat:h().func,autoClose:h().bool,useFilter:h().bool,noMatchedMsg:h().string,triggerTheme:h().oneOf(y.Z.enumerateValue(Z.Z)),isGrouped:h().bool,filterInitValue:h().string,onItemClick:h().func,onChange:h().func,onFocus:h().func,onBlur:h().func,onFilterChange:h().func,onMouseOver:h().func,onMouseOut:h().func},O.defaultProps={name:"",value:"",isLabelAnimated:!0,placeholder:"Please select ...",data:[],invalidMsg:"",disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",infoMsg:"",autoClose:!0,useFilter:!1,noMatchedMsg:"",triggerTheme:Z.Z.DEFAULT,isGrouped:!1};const P=O}}]);
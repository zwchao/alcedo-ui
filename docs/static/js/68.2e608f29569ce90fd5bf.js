(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{423:function(e,t,a){(e.exports=a(215)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},424:function(e,t,a){var l=a(423);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(214)(l,r);l.locals&&(e.exports=l.locals)},425:function(e,t,a){"use strict";var l=a(1),r=a.n(l),n=a(9),s=a.n(n),i=a(5),o=a.n(i),p=a(8),u=a.n(p),d=a(3),c=a.n(d),h=a(4),f=a.n(h),m=a(0),v=a.n(m),y=a(426),g=(a(424),function(e){function t(e){o()(this,t);var a=c()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return f()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(m.Component));g.defaultProps={data:null},t.a=g},430:function(e,t,a){"use strict";var l=a(1),r=a.n(l),n=a(2),s=a.n(n),i=a(12),o=a.n(i),p=a(9),u=a.n(p),d=a(5),c=a.n(d),h=a(8),f=a.n(h),m=a(3),v=a.n(m),y=a(4),g=a.n(y),b=a(0),C=a.n(b),T=a(7),F=a.n(T),P=a(142),H=a(6),E=(a(11),function(e){function t(e){var a;c()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=v()(this,(a=t.__proto__||u()(t)).call.apply(a,[this,e].concat(r)));return s.state={isHover:!1,isFocus:!1},s.setFocused=s.setFocused.bind(s),s.setHovered=s.setHovered.bind(s),s}return g()(t,e),f()(t,[{key:"setFocused",value:function(e){this.setState({isFocus:e})}},{key:"setHovered",value:function(e){this.setState({isHover:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,l=t.className,n=t.theme,i=t.label,p=t.isLabelAnimate,u=t.hasValue,d=t.disabled,c=t.required,h=t.useSeparator,f=o()(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),m=this.state,v=m.isHover,y=m.isFocus,g=F()("material-provider",s()({"has-label":i,"has-value":u,"has-separator":h,animated:p,focused:y},l,l));return C.a.createElement("div",r()({},f,{className:g,disabled:d}),C.a.createElement("div",{className:"material-provider-label-wrapper"},C.a.createElement("span",{className:"material-provider-label"},i),c?C.a.createElement("div",{className:"material-provider-required-dot"}):null),b.Children.map(a,function(t){var a=t.props,l=a.triggerClassName,n=a.placeholderClassName,i=o()(a,["triggerClassName","placeholderClassName"]),p=r()({},i,{className:F()("material-provider-field",s()({},i.className,i.className)),onFocus:function(){i.onFocus&&i.onFocus.apply(i,arguments),e.setFocused(!0)},onBlur:function(){i.onBlur&&i.onBlur.apply(i,arguments),e.setFocused(!1)},onMouseOver:function(){i.onMouseOver&&i.onMouseOver.apply(i,arguments),e.setHovered(!0)},onMouseOut:function(){i.onMouseOut&&i.onMouseOut.apply(i,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(p.triggerClassName=F()("material-provider-field-trigger",s()({},l,l)),p.placeholderClassName=F()("material-provider-field-placeholder",s()({},n,n))),Object(b.cloneElement)(t,p)}),h?C.a.createElement(P.a,{theme:n,isHover:v,isFocus:y,disabled:d}):null)}}]),t}(b.Component));E.defaultProps={theme:H.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var N=E;a.d(t,"a",function(){return N})},450:function(e,t,a){"use strict";var l,r,n=a(55),s=a.n(n),i=a(2),o=a.n(i),p=a(27),u=a.n(p),d=a(9),c=a.n(d),h=a(5),f=a.n(h),m=a(8),v=a.n(m),y=a(3),g=a.n(y),b=a(4),C=a.n(b),T=a(0),F=a.n(T),P=a(24),H=a(7),E=a.n(H),N=a(46),D=a.n(N),w=a(140),k=a(68),S=a(54),A=a(146),x=a(6),I=a(11),L=a(15),M=a(145),O=a(13),V=a(22),_=(r=l=function(e){function t(e){var a;f()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=g()(this,(a=t.__proto__||c()(t)).call.apply(a,[this,e].concat(r)));return s.triggerEl=null,s.state={tempSelectIndex:null,value:e.value,filter:e.filterInitValue,filterFocused:!1,popupVisible:!1,isAbove:!1,listData:e.data},s.filterData=s.filterData.bind(s),s.filterFocusHandler=s.filterFocusHandler.bind(s),s.filterBlurHandler=s.filterBlurHandler.bind(s),s.filterKeyDownHandler=s.filterKeyDownHandler.bind(s),s.filterPressEnterHandler=s.filterPressEnterHandler.bind(s),s.filterChangeHandler=s.filterChangeHandler.bind(s),s.closePopup=s.closePopup.bind(s),s.popupRenderHandler=s.popupRenderHandler.bind(s),s.itemTouchTapHandler=s.itemTouchTapHandler.bind(s),s.update=s.update.bind(s),s.mouseDownHandler=s.mouseDownHandler.bind(s),s}return C()(t,e),v()(t,[{key:"filterData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.filter,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.data;if(!e)return t;var a=this.props,l=a.valueField,r=a.displayField,n=a.renderer,s=a.filterCallback;return s?s(e,t):t.filter(function(t){if(!t)return!1;if(n)return n(t).toString().toUpperCase().includes(e.toUpperCase());if("object"===(void 0===t?"undefined":u()(t))){var a=I.a.getTextByDisplayField(t,r,l);if(a)return a.toString().toUpperCase().includes(e.toUpperCase())}return t.toString().toUpperCase().includes(e.toUpperCase())})}},{key:"filterFocusHandler",value:function(){if(!this.props.disabled){var e=this.props.onFocus,t=this.state,a=t.filter,l=t.listData,r={filterFocused:!0};e&&e.apply(void 0,arguments),a&&(r.popupVisible=!0,r.tempSelectIndex=l.length>0?0:null),this.setState(r)}}},{key:"filterBlurHandler",value:function(){for(var e=this,t=arguments.length,a=Array(t),l=0;l<t;l++)a[l]=arguments[l];this.setState({filterFocused:!1},function(){var t=e.props.onBlur;t&&t.apply(void 0,a)})}},{key:"filterKeyDownHandler",value:function(e){var t=this,a=this.props.useDynamicRenderList,l=this.state,r=l.tempSelectIndex,n=l.listData,s=a?this.refs.dynamicRenderList:this.refs.list,i=r;38===e.keyCode?i--:40===e.keyCode&&i++;var o=L.a.range(i,0,n.length-1);this.setState({tempSelectIndex:o},function(){var a=t.props.onFilterKeyDown;a&&a(e),s&&s.adjustScroll()})}},{key:"filterPressEnterHandler",value:function(e,t){var a=this,l={};this.props.autoClose&&(l.popupVisible=!1),this.setState(l,function(){var e=a.props.onFilterPressEnter;e&&e(t),a.update()})}},{key:"filterChangeHandler",value:function(e){var t=this,a=this.props.data,l={filter:e,popupVisible:!!e};e?(l.listData=this.filterData(e),l.tempSelectIndex=l.listData.length>0?0:null):(l.listData=a,l.value=null,l.tempSelectIndex=null),this.setState(l,function(){var a=t.props.onFilterChange;a&&a(e)})}},{key:"closePopup",value:function(){var e=this;this.setState({popupVisible:!1},function(){var t=e.props.onPopupClosed;t&&t()})}},{key:"popupRenderHandler",value:function(e){var t=M.a.isAbove(this.localAutoCompleteEl,this.triggerEl,Object(P.findDOMNode)(e));t!==this.state.isAbove&&this.setState({isAbove:t})}},{key:"itemTouchTapHandler",value:function(e){var t=this,a=this.props,l=a.autoClose,r=a.valueField,n=a.displayField,s=a.renderer,i=s?s(e):I.a.getTextByDisplayField(e,n,r),o={tempSelectIndex:null,value:e,filter:i,listData:this.filterData(i)},p=this.state.value!=e;l&&(o.popupVisible=!1),this.setState(o,function(){var a=t.props,l=a.onItemTouchTap,r=a.onChange;l&&l(e),p&&r&&r(e)})}},{key:"update",value:function(){var e=this,t=this.props,a=t.displayField,l=t.valueField,r=t.renderer,n=this.state,s=n.filter,i=n.tempSelectIndex,o=n.listData,p=null;if(s&&o&&o.length>0){p={};var u=D()(i)?i:0;p.value=o[u],p.filter=r?r(p.value):I.a.getTextByDisplayField(p.value,a,l),p.listData=this.filterData(p.filter)}this.setState(p,function(){if(p){var t=e.props,a=t.onFilterChange,l=t.onChange;a&&a(p.filter),l&&l(p.value),e.refs.trigger.blur()}})}},{key:"mouseDownHandler",value:function(e){!this.state.filterFocused||V.a.isParent(e.target,this.localAutoCompleteEl)||V.a.isParent(e.target,Object(P.findDOMNode)(this.refs.popup))||this.update()}},{key:"componentDidMount",value:function(){this.localAutoCompleteEl=this.refs.localAutoComplete,this.triggerEl=Object(P.findDOMNode)(this.refs.trigger),O.a.addEvent(document,"mousedown",this.mouseDownHandler)}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){O.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.triggerClassName,l=e.popupClassName,r=e.style,n=e.popupStyle,i=e.theme,p=e.popupTheme,u=e.name,d=e.placeholder,c=e.disabled,h=e.iconCls,f=e.rightIconCls,m=e.valueField,v=e.displayField,y=e.descriptionField,g=e.noMatchedPopupVisible,b=e.noMatchedMsg,C=e.popupChildren,T=e.renderer,P=e.useDynamicRenderList,H=e.listHeight,N=e.itemHeight,D=e.scrollBuffer,x=e.onFilterClear,L=e.onMouseOver,M=e.onMouseOut,O=this.state,V=O.isAbove,_=O.tempSelectIndex,B=O.value,R=O.filter,U=O.popupVisible,q=O.listData,j=[{itemRenderer:function(){return F.a.createElement("div",{className:"no-matched-list-item"},b||F.a.createElement("span",null,F.a.createElement("i",{className:"fas fa-exclamation-triangle no-matched-list-item-icon"}),"No matched value."))},disableTouchRipple:!0}],K=q.length<1,G=E()("local-auto-complete",o()({},t,t)),W=E()("local-auto-complete-trigger",K&&!g?"":U?" activated":"",V?" above":" blow",o()({},a,a)),J=E()("local-auto-complete-popup",V?" above":" blow",o()({},l,l)),Y=s()({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},n);return F.a.createElement("div",{ref:"localAutoComplete",className:G,style:r},u?F.a.createElement("input",{type:"hidden",name:u,value:I.a.getValueByValueField(B,m,v)}):null,F.a.createElement(w.a,{ref:"trigger",className:W,theme:i,value:R,placeholder:d,disabled:c,iconCls:h,rightIconCls:f,onFocus:this.filterFocusHandler,onBlur:this.filterBlurHandler,onMouseOver:L,onMouseOut:M,onChange:this.filterChangeHandler,onKeyDown:this.filterKeyDownHandler,onPressEnter:this.filterPressEnterHandler,onClear:x,onRightIconTouchTap:this.filterPressEnterHandler}),K&&!g?null:F.a.createElement(k.a,{ref:"popup",className:J,style:Y,theme:p,visible:U,triggerEl:this.triggerEl,hasTriangle:!1,position:V?k.a.Position.TOP_LEFT:k.a.Position.BOTTOM_LEFT,onRender:this.popupRenderHandler,onRequestClose:this.closePopup},K?F.a.createElement(S.a,{className:"local-auto-complete-list",theme:p,data:j}):P?F.a.createElement(A.a,{ref:"dynamicRenderList",className:"local-auto-complete-list",theme:p,data:q,value:q[_],valueField:m,displayField:v,descriptionField:y,renderer:T,listHeight:H,itemHeight:N,scrollBuffer:D,onItemTouchTap:this.itemTouchTapHandler}):F.a.createElement(S.a,{ref:"list",className:"local-auto-complete-list",theme:p,data:q,value:q[_],valueField:m,displayField:v,descriptionField:y,renderer:T,onItemTouchTap:this.itemTouchTapHandler}),C))}}]),t}(T.Component),l.Theme=x.a,r);_.defaultProps={theme:x.a.DEFAULT,popupTheme:x.a.DEFAULT,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!0,rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,filterInitValue:"",useDynamicRenderList:!1};var B=_;a.d(t,"a",function(){return B})},471:function(e,t,a){"use strict";var l,r,n=a(1),s=a.n(n),i=a(2),o=a.n(i),p=a(12),u=a.n(p),d=a(9),c=a.n(d),h=a(5),f=a.n(h),m=a(8),v=a.n(m),y=a(3),g=a.n(y),b=a(4),C=a.n(b),T=a(0),F=a.n(T),P=a(7),H=a.n(P),E=a(450),N=a(430),D=a(6),w=(a(11),r=l=function(e){function t(e){var a;f()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=g()(this,(a=t.__proto__||c()(t)).call.apply(a,[this,e].concat(r)));return s.state={value:e.value,filter:e.filterInitValue},s.triggerFilterChangeHandler=s.triggerFilterChangeHandler.bind(s),s.triggerChangeHandler=s.triggerChangeHandler.bind(s),s.closePopup=s.closePopup.bind(s),s}return C()(t,e),v()(t,[{key:"triggerFilterChangeHandler",value:function(e){var t=this;this.setState({filter:e},function(){var a=t.props.onFilterChange;a&&a(e)})}},{key:"triggerChangeHandler",value:function(e){var t=this;this.setState({value:e},function(){var a=t.props.onChange;a&&a(e)})}},{key:"closePopup",value:function(){this.refs.localAutoComplete&&this.refs.localAutoComplete.closePopup()}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,l=e.theme,r=e.label,n=e.isLabelAnimate,i=e.popupClassName,p=e.disabled,d=e.required,c=u()(e,["className","style","theme","label","isLabelAnimate","popupClassName","disabled","required"]),h=this.state,f=h.value,m=h.filter,v=H()("material-local-auto-complete",o()({},t,t)),y=H()("material-local-auto-complete-popup",o()({},i,i));return F.a.createElement(N.a,{className:v,style:a,theme:l,label:r,isLabelAnimate:n,hasValue:!!m,disabled:p,required:d},F.a.createElement(E.a,s()({},c,{ref:"localAutoComplete",popupClassName:y,theme:l,value:f,disabled:p,onFilterChange:this.triggerFilterChangeHandler,onChange:this.triggerChangeHandler})))}}]),t}(T.Component),l.Theme=D.a,r);w.defaultProps={theme:D.a.DEFAULT,name:"",placeholder:"",label:"",isLabelAnimate:!0,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!1,iconCls:"",rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,noMatchedMsg:"",isGrouped:!1,required:!1,filterInitValue:""};var k=w;a.d(t,"a",function(){return k})},672:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},name:{type:"PropTypes.string",desc:"The name of the auto complete.",default:""},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field.",default:""},label:{type:"PropTypes.any",default:""},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"false"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value.",default:""},isGrouped:{type:"PropTypes.bool",desc:"If true,the list data will be grouped.",default:"false"},required:{type:"PropTypes.bool",default:"false"},isLabelAnimate:{type:"PropTypes.bool",default:"true"},filterInitValue:{type:"PropTypes.string",default:""},popupChildren:{type:"PropTypes.any"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemTouchTap:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},850:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return C});var l=a(9),r=a.n(l),n=a(5),s=a.n(n),i=a(8),o=a.n(i),p=a(3),u=a.n(p),d=a(4),c=a.n(d),h=a(0),f=a.n(h),m=a(471),v=a(427),y=a(428),g=a(425),b=a(672),C=function(e){function t(e){s()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onTouchTap:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onTouchTap:function(){console.log("test6 selected!")}},"test7","test8","test9"],a.onChange=a.onChange.bind(a),a.filterPressEnterHandle=a.filterPressEnterHandle.bind(a),a.filterClearHandle=a.filterClearHandle.bind(a),a}return c()(t,e),o()(t,[{key:"onChange",value:function(e){console.log("select item: ",e)}},{key:"filterPressEnterHandle",value:function(e){console.log("filter value: ",e)}},{key:"filterClearHandle",value:function(){console.log("filter cleared")}},{key:"render",value:function(){return f.a.createElement("div",{className:"example auto-complete-examples"},f.a.createElement("h2",{className:"example-title"},"LocalAutoComplete"),f.a.createElement("p",null,"A ",f.a.createElement("span",null,"LocalAutoComplete")," is an interface to help users to complete their input."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(v.a,null,f.a.createElement(y.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"LocalAutoComplete")," simple example."),f.a.createElement(m.a,{theme:m.a.Theme.HIGHLIGHT,filterInitValue:"test",data:this.data,label:"Label",placeholder:"Please select ...",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandle,onFilterClear:this.filterClearHandle}))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(g.a,{data:b}))}}]),t}(h.Component)}}]);
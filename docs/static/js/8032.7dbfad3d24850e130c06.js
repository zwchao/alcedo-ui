(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[8032],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const a=l},78882:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(23645),l=n.n(r)()((function(e){return e[1]}));l.push([e.id,".editable-select-examples .editable-select {\n  width: 300px; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .popover-dialog-content-scroller .editable-select {\n    width: 300px; }\n",""]);const a=l},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(6610),l=n(5991),a=n(63349),o=n(10379),s=n(46070),i=n(77608),c=n(96156),p=n(37699),u=n(45697),d=n.n(u),f=n(82996),h=n(93379),m=n.n(h),g=n(29250);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}m()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;var b=function(e){(0,o.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var l=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),t=u.call(this,e),(0,c.Z)((0,a.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(y({name:n},t.props.data[n]));return e})),t}return(0,l.Z)(d,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(p.Component);b.propTypes={data:d().object};const E=b},39039:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(6610),l=n(5991),a=n(63349),o=n(10379),s=n(46070),i=n(77608),c=n(96156),p=n(37699),u=n(38845),d=n(24471),f=n(50704),h=n(22944),m=n(65460),g=n(22356);const v=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"popupClassName":{"type":"PropTypes.string","desc":"The class name of the popup element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"rightIconCls":{"type":"PropTypes.string","default":"fas fa-angle-down"},"popupStyle":{"type":"PropTypes.object","desc":"Override the styles of the popup element."},"position":{"type":"PropTypes.oneOf"},"name":{"type":"PropTypes.string","desc":"The name of the editableSelect.","default":""},"value":{"type":"PropTypes.any","desc":"The value of the editableSelect.","default":""},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the editableSelect.","default":"Please select ..."},"data":{"type":"PropTypes.oneOf","desc":"The options data.","default":"[]"},"invalidMsg":{"type":"PropTypes.string","desc":"The invalid message of editableSelect.","default":""},"disabled":{"type":"PropTypes.bool","desc":"If true,the editableSelect will be disabled.","default":"false"},"noMatchedPopupVisible":{"type":"PropTypes.bool","desc":"The visiblity of no matched popup.","default":"true"},"clearButtonVisible":{"type":"PropTypes.bool","desc":"If true,clearButton will display when the textField is not empty.","default":"true"},"clearButtonIconCls":{"type":"PropTypes.string","default":"fas fa-times-circle"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")"},"displayField":{"type":"PropTypes.string","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"infoMsg":{"type":"PropTypes.string","desc":"The message of the editableSelect.","default":""},"textFormat":{"type":"PropTypes.func","desc":"Use this function to format the options\'s text."},"autoClose":{"type":"PropTypes.bool","desc":"If true,the drop-down box automatically closed after selection.","default":"true"},"useFilter":{"type":"PropTypes.bool","desc":"If true,the drop-down box will have search input.","default":"false"},"triggerTheme":{"type":"PropTypes.oneOf","desc":"The theme of editableSelect.Can be primary,highlight,success,warning,error.","default":"Theme.DEFAULT"},"isGrouped":{"type":"PropTypes.bool","desc":"If true,the drop-down box will be have group selection.","default":"false"},"resetPopPositionWait":{"type":"PropTypes.number","default":"250"},"noMatchedMsg":{"type":"PropTypes.string"},"useDynamicRenderList":{"type":"PropTypes.bool","default":"false"},"parentEl":{"type":"PropTypes.object"},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when a menu item is selected."},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"},"onTriggerClick":{"type":"PropTypes.func"},"onFocus":{"type":"PropTypes.func"},"onPopupClosed":{"type":"PropTypes.func"}}');var y=n(12771),b=n(93379),E=n.n(b),Z=n(78882);E()(Z.Z,{insert:"head",singleton:!1}),Z.Z.locals;const P=function(e){(0,o.Z)(E,e);var t,n,b=(t=E,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var l=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function E(e){var t;return(0,r.Z)(this,E),t=b.call(this,e),(0,c.Z)((0,a.Z)(t),"show",(function(e){var n=t.state.EditableSelectVisible;n[e]=!0,t.setState({EditableSelectVisible:n})})),(0,c.Z)((0,a.Z)(t),"hide",(function(e){var n=t.state.EditableSelectVisible;n[e]=!1,t.setState({EditableSelectVisible:n})})),(0,c.Z)((0,a.Z)(t),"onChange",(function(e){console.log(e)})),(0,c.Z)((0,a.Z)(t),"handleScrollStart",(function(){var e;null===(e=t.selectRef)||void 0===e||e.current.closePopup()})),t.selectRef=p.createRef(),t.data=[{value:0,text:"test0"},{value:1,text:"test1"},{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},{value:3,text:"test3"},{value:4,text:"test4"},{value:5,text:"test5"},{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},{value:6,text:"test6"},{value:7,text:"test7"},{value:17,text:"test17"},{value:27,text:"test27"},{value:37,text:"test37"},{value:28,text:"test8"}],t.groupedData=[{name:"socialNetwork",children:[{iconCls:"fab fa-facebook",text:"Facebook",desc:"Here is a Facebook Desc."},{iconCls:"fab fa-twitter",text:"Twitter",desc:"Here is a Twitter Desc."},{iconCls:"fab fa-google-plus-g",text:"Google+",desc:"Here is a Google+ Desc."}]},{name:"device",children:[{iconCls:"fab fa-android",text:"Android",desc:"Here is a Android Desc."},{iconCls:"fab fa-apple",text:"Apple",desc:"Here is a Apple Desc."},{iconCls:"fab fa-windows",text:"Windows",desc:"Here is a Windows Desc."}]}],t.state={EditableSelectVisible:{}},t}return(0,l.Z)(E,[{key:"componentDidMount",value:function(){y.Z.addEvent(document,"scroll",this.handleScrollStart)}},{key:"componentWillUnmount",value:function(){y.Z.removeEvent(document,"scroll",this.handleScrollStart)}},{key:"render",value:function(){var e=this,t=this.state.EditableSelectVisible;return p.createElement("div",{className:"example editable-select-examples"},p.createElement("h2",{className:"example-title"},"Editable Select"),p.createElement("p",null,p.createElement("span",null,"Editable Select")," use to store operating elements. Click on the contact and a drop-down menu will appear. You can select from the list and execute the appropriate command."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(d.Z,null,p.createElement(f.Z,{className:"example-header",title:"Basic"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"Editable Select")," simple example."),p.createElement("div",{className:"field-group"},p.createElement(u.Z,{data:this.data,ref:this.selectRef,onChange:this.onChange,useFilter:!0,noMatchedPopupVisible:!1,renderer:function(e){return e?"[".concat(e.value,"] ").concat(e.text):null}})))))),p.createElement(d.Z,null,p.createElement(f.Z,{className:"example-header",title:"Basic"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"Editable Select")," simple example."),p.createElement("div",{className:"field-group"},p.createElement(u.Z,{data:this.data,onChange:this.onChange,valueField:"text",useFilter:!0})))))),p.createElement(d.Z,null,p.createElement(f.Z,{className:"example-header",title:"In Dialog"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"Editable Select")," simple example."),p.createElement(h.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),p.createElement(m.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return p.createElement("div",{className:"popover-dialog-content-scroller"},p.createElement("div",{className:"field-group"},p.createElement(u.Z,{data:e.data,onChange:e.onChange,valueField:"text",parentEl:t,useFilter:!0})))})))))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(g.Z,{data:v}))}}]),E}(p.Component)},12771:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={addEvent:function(e,t,n){"function"==typeof window.addEventListener?e.addEventListener(t,n,!1):"function"==typeof document.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n},removeEvent:function(e,t,n){"function"==typeof window.removeEventListener?e.removeEventListener(t,n,!1):"function"==typeof document.detachEvent?e.detachEvent("on".concat(t),n):e["on".concat(t)]=null},triggerPopupEventHandle:function(e,t,n,r){for(;e;){if(e==n)return r;if(e==t)return!r;e=e.parentNode}return!1},preventContainerScroll:function(e){var t=e.currentTarget,n=e.deltaY,r=t.clientHeight,l=t.scrollHeight,a=t.scrollTop;l>r&&(n<0&&a<=0||n>0&&a>=l-r)&&e.preventDefault()}}},38845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var r=n(90484),l=n(6610),a=n(5991),o=n(63349),s=n(10379),i=n(46070),c=n(77608),p=n(96156),u=n(37699),d=n(45697),f=n.n(d),h=n(79958),m=n(41844),g=n.n(m),v=n(11669),y=n(23046),b=n(35720),E=n(62457),Z=n(37489),P=n(87712),T=n(65248),C=n(81540),w=n(67243),x=n(19605);var O=function(e){(0,s.Z)(f,e);var t,n,d=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var l=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)});function f(e){var t;(0,l.Z)(this,f);for(var n=arguments.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];return t=d.call.apply(d,[this,e].concat(a)),(0,p.Z)((0,o.Z)(t),"handleChangeValue",(function(e){var n=t.props,r=n.useFilter,l=n.onChange;t.setState({value:e,filter:r?e:t.state.filter,listValue:""},(function(){var n,r,a;l&&l(e),null===(n=t.popup)||void 0===n||null===(r=n.current)||void 0===r||null===(a=r.resetPosition)||void 0===a||a.call(r)}))})),(0,p.Z)((0,o.Z)(t),"showPopup",(function(){t.setState({popupVisible:!0},(function(){t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onFocus&&t.props.onFocus()}))})),(0,p.Z)((0,o.Z)(t),"closePopup",(function(){t.setState({popupVisible:!1},(function(){var e;null===(e=t.trigger)||void 0===e||e.current.blur(),t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onPopupClosed&&t.props.onPopupClosed()}))})),(0,p.Z)((0,o.Z)(t),"triggerHandler",(function(e,t,n,r,l){if(!t)return!0;for(;e;){if(e==n)return r;if(e==t)return!0;e=e.parentNode}return!l&&r})),(0,p.Z)((0,o.Z)(t),"filterData",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.filter,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.props.data;if(!e)return n;var l=t.props,a=l.displayField,o=l.isGrouped,s=function(t){return t.filter((function(t){return"object"===(0,r.Z)(t)&&t[a]?t[a].toString().toUpperCase().includes(e.toUpperCase()):t.toString().toUpperCase().includes(e.toUpperCase())}))};if(o)for(var i=Object.assign(n),c=0,p=i.length;c<p;c++){var u=i[c];u.children=s(u.children),u.children.length<1&&(i.splice(c,1),c--)}return s(n)})),(0,p.Z)((0,o.Z)(t),"handlePopupRender",(function(e){var n=w.Z.isAbove(t.wrapperEl,t.triggerEl,(0,h.findDOMNode)(e));n!==t.state.isAbove&&t.setState({isAbove:n})})),(0,p.Z)((0,o.Z)(t),"handleChange",(function(e){var n=t.props,l=n.valueField,a=n.renderer,o=a?a(e):"object"==(0,r.Z)(e)?e[l]:e,s=t.props.autoClose,i={value:o,listValue:e};s&&(i.popupVisible=!1),t.setState(i,(function(){var e=t.props.onChange;e&&e(o)}))})),t.wrapper=(0,u.createRef)(),t.wrapperEl=null,t.trigger=(0,u.createRef)(),t.triggerEl=null,t.popup=(0,u.createRef)(),t.popupEl=null,t.state={value:e.value,listValue:e.value,filter:"",popupVisible:!1,isAbove:!1},t}return(0,a.Z)(f,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.popupEl=this.popup&&this.popup.current,this.triggerEl=this.trigger&&this.trigger.current&&(0,h.findDOMNode)(this.trigger.current)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.popupClassName,r=e.style,l=e.popupStyle,a=e.name,o=e.placeholder,s=e.disabled,i=e.valueField,c=e.displayField,d=e.clearButtonIconCls,f=e.clearButtonVisible,h=e.descriptionField,m=e.position,P=e.rightIconCls,C=e.resetPopPositionWait,w=e.triggerTheme,x=e.isGrouped,O=e.onItemClick,F=e.renderer,N=e.noMatchedPopupVisible,S=e.noMatchedMsg,R=e.useDynamicRenderList,k=e.onMouseOver,D=e.onMouseOut,V=e.parentEl,M=this.state,I=M.value,j=M.listValue,B=M.popupVisible,H=M.isAbove,L=m===T.Z.TOP||m===T.Z.TOP_LEFT||m===T.Z.TOP_RIGHT||!m&&H,A=this.filterData();return u.createElement("div",{ref:this.wrapper,className:g()("editable-select",(0,p.Z)({},t,t)),style:r},a?u.createElement("input",{type:"hidden",name:a,value:I}):null,u.createElement(v.Z,{ref:this.trigger,className:g()("editable-select-trigger",L?"above":"blow",{activated:B&&(A.length>0||N),empty:!I}),value:I,rightIconCls:"".concat(P," editable-select-trigger-icon"),placeholder:o,disabled:s,theme:w,onMouseOver:k,onMouseOut:D,clearButtonVisible:f,clearButtonIconCls:d,onChange:this.handleChangeValue,onFocus:this.showPopup}),!N&&A.length<1?null:u.createElement(y.Z,{className:g()("editable-select-popup",L?"above":"blow",(0,p.Z)({"no-matched-popup":A.length<1},n,n)),style:Object.assign({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},l),visible:B,triggerEl:this.triggerEl,triggerHandler:this.triggerHandler,parentEl:V,ref:this.popup,hasTriangle:!1,position:m||(H?T.Z.TOP_LEFT:T.Z.BOTTOM_LEFT),resetPositionWait:C,onRender:this.handlePopupRender,onRequestClose:this.closePopup},A.length<1?u.createElement("div",{className:"no-matched"},S||u.createElement("span",null,u.createElement("i",{className:"fas fa-exclamation-triangle no-matched-icon"}),"No matched value.")):x?u.createElement(Z.Z,{className:"editable-select-list",data:A,value:j,valueField:i,displayField:c,descriptionField:h,renderer:F,onItemClick:this.onItemClick,onChange:this.changeHandler}):R?u.createElement(E.Z,{className:"editable-select-list",data:A,value:j,valueField:i,displayField:c,descriptionField:h,renderer:F,onItemClick:O,onChange:this.handleChange}):u.createElement(b.Z,{className:"editable-select-list",data:A,valueField:i,value:j,displayField:c,descriptionField:h,renderer:F,onItemClick:O,onChange:this.handleChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:x.Z.getDerivedState(e,t,"value")}}}]),f}(u.Component);(0,p.Z)(O,"Theme",P.Z),(0,p.Z)(O,"Position",T.Z),O.propTypes={className:f().string,popupClassName:f().string,style:f().object,rightIconCls:f().string,popupStyle:f().object,position:f().oneOf(C.Z.enumerateValue(T.Z)),name:f().string,value:f().any,renderer:f().func,placeholder:f().string,data:f().oneOfType([f().arrayOf(f().oneOfType([f().shape({className:f().string,style:f().object,theme:f().oneOf(C.Z.enumerateValue(P.Z)),value:f().oneOfType([f().string,f().number]),desc:f().oneOfType([f().string,f().number]),disabled:f().bool,isLoading:f().bool,disableTouchRipple:f().bool,iconCls:f().string,rightIconCls:f().string,renderer:f().func,onClick:f().func}),f().string,f().number])),f().array]).isRequired,invalidMsg:f().string,disabled:f().bool,noMatchedPopupVisible:f().bool,clearButtonVisible:f().bool,clearButtonIconCls:f().string,valueField:f().string,displayField:f().string,descriptionField:f().string,infoMsg:f().string,textFormat:f().func,autoClose:f().bool,useFilter:f().bool,triggerTheme:f().oneOf(C.Z.enumerateValue(P.Z)),isGrouped:f().bool,resetPopPositionWait:f().number,noMatchedMsg:f().string,useDynamicRenderList:f().bool,parentEl:f().object,onItemClick:f().func,onChange:f().func,onMouseOver:f().func,onMouseOut:f().func,onTriggerClick:f().func,onFocus:f().func,onPopupClosed:f().func},O.defaultProps={name:"",value:"",placeholder:"Please select ...",rightIconCls:"fas fa-angle-down",data:[],invalidMsg:"",disabled:!1,displayField:"text",descriptionField:"desc",infoMsg:"",autoClose:!0,useFilter:!1,useDynamicRenderList:!1,noMatchedPopupVisible:!0,clearButtonVisible:!0,clearButtonIconCls:"fas fa-times-circle",triggerTheme:P.Z.DEFAULT,isGrouped:!1,resetPopPositionWait:250};const F=O}}]);
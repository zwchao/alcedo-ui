(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[8032],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=a},78882:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".editable-select-examples .editable-select {\n  width: 300px; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .popover-dialog-content-scroller .editable-select {\n    width: 300px; }\n",""]);const l=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var r=n(34575),a=n.n(r),l=n(93913),s=n.n(l),o=n(81506),i=n.n(o),c=n(2205),p=n.n(c),u=n(78585),d=n.n(u),f=n(29754),h=n.n(f),m=n(59713),g=n.n(m),y=n(37699),b=n(45697),v=n.n(b),E=n(82996),C=n(93379),T=n.n(C),P=n(29250);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){g()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}T()(P.Z,{insert:"head",singleton:!1}),P.Z.locals;var O=function(e){p()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function l(e){var t;return a()(this,l),t=r.call(this,e),g()(i()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(x({name:n},t.props.data[n]));return e})),t}return s()(l,[{key:"render",value:function(){return y.createElement("div",{className:"prop-type-desc-table-wrapper"},y.createElement(E.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),l}(y.Component);O.propTypes={data:v().object};const F=O},39039:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(34575),a=n.n(r),l=n(93913),s=n.n(l),o=n(81506),i=n.n(o),c=n(2205),p=n.n(c),u=n(78585),d=n.n(u),f=n(29754),h=n.n(f),m=n(59713),g=n.n(m),y=n(37699),b=n(38845),v=n(24471),E=n(50704),C=n(22944),T=n(65460),P=n(22356);const w=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"popupClassName":{"type":"PropTypes.string","desc":"The class name of the popup element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"rightIconCls":{"type":"PropTypes.string","default":"fas fa-angle-down"},"popupStyle":{"type":"PropTypes.object","desc":"Override the styles of the popup element."},"position":{"type":"PropTypes.oneOf"},"name":{"type":"PropTypes.string","desc":"The name of the editableSelect.","default":""},"value":{"type":"PropTypes.any","desc":"The value of the editableSelect.","default":""},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the editableSelect.","default":"Please select ..."},"data":{"type":"PropTypes.oneOf","desc":"The options data.","default":"[]"},"invalidMsg":{"type":"PropTypes.string","desc":"The invalid message of editableSelect.","default":""},"disabled":{"type":"PropTypes.bool","desc":"If true,the editableSelect will be disabled.","default":"false"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")"},"displayField":{"type":"PropTypes.string","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"infoMsg":{"type":"PropTypes.string","desc":"The message of the editableSelect.","default":""},"textFormat":{"type":"PropTypes.func","desc":"Use this function to format the options\'s text."},"autoClose":{"type":"PropTypes.bool","desc":"If true,the drop-down box automatically closed after selection.","default":"true"},"useFilter":{"type":"PropTypes.bool","desc":"If true,the drop-down box will have search input.","default":"false"},"triggerTheme":{"type":"PropTypes.oneOf","desc":"The theme of editableSelect.Can be primary,highlight,success,warning,error.","default":"Theme.DEFAULT"},"isGrouped":{"type":"PropTypes.bool","desc":"If true,the drop-down box will be have group selection.","default":"false"},"resetPopPositionWait":{"type":"PropTypes.number","default":"250"},"noMatchedMsg":{"type":"PropTypes.string"},"useDynamicRenderList":{"type":"PropTypes.bool","default":"false"},"parentEl":{"type":"PropTypes.object"},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when a menu item is selected."},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"},"onTriggerClick":{"type":"PropTypes.func"},"onFocus":{"type":"PropTypes.func"},"onPopupClosed":{"type":"PropTypes.func"}}');var x=n(93379),O=n.n(x),F=n(78882);O()(F.Z,{insert:"head",singleton:!1}),F.Z.locals;const N=function(e){p()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return d()(this,e)});function l(e){var t;return a()(this,l),t=r.call(this,e),g()(i()(t),"show",(function(e){var n=t.state.EditableSelectVisible;n[e]=!0,t.setState({EditableSelectVisible:n})})),g()(i()(t),"hide",(function(e){var n=t.state.EditableSelectVisible;n[e]=!1,t.setState({EditableSelectVisible:n})})),g()(i()(t),"onChange",(function(e){console.log(e)})),t.data=[{value:0,text:"test0"},{value:1,text:"test1"},{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},{value:3,text:"test3"},{value:4,text:"test4"},{value:5,text:"test5"},{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},{value:6,text:"test6"},{value:7,text:"test7"},{value:8,text:"test8"}],t.groupedData=[{name:"socialNetwork",children:[{iconCls:"fab fa-facebook",text:"Facebook",desc:"Here is a Facebook Desc."},{iconCls:"fab fa-twitter",text:"Twitter",desc:"Here is a Twitter Desc."},{iconCls:"fab fa-google-plus-g",text:"Google+",desc:"Here is a Google+ Desc."}]},{name:"device",children:[{iconCls:"fab fa-android",text:"Android",desc:"Here is a Android Desc."},{iconCls:"fab fa-apple",text:"Apple",desc:"Here is a Apple Desc."},{iconCls:"fab fa-windows",text:"Windows",desc:"Here is a Windows Desc."}]}],t.state={EditableSelectVisible:{}},t}return s()(l,[{key:"render",value:function(){var e=this,t=this.state.EditableSelectVisible;return y.createElement("div",{className:"example editable-select-examples"},y.createElement("h2",{className:"example-title"},"Editable Select"),y.createElement("p",null,y.createElement("span",null,"Editable Select")," use to store operating elements. Click on the contact and a drop-down menu will appear. You can select from the list and execute the appropriate command."),y.createElement("h2",{className:"example-title"},"Examples"),y.createElement(v.Z,null,y.createElement(E.Z,{className:"example-header",title:"Basic"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("div",{className:"examples-wrapper"},y.createElement("p",null,y.createElement("code",null,"Editable Select")," simple example."),y.createElement("div",{className:"field-group"},y.createElement(b.Z,{data:this.data,onChange:this.onChange,useDynamicRenderList:!0,useFilter:!0,renderer:function(e){return e?"[".concat(e.value,"] ").concat(e.text):null}})))))),y.createElement(v.Z,null,y.createElement(E.Z,{className:"example-header",title:"Basic"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("div",{className:"examples-wrapper"},y.createElement("p",null,y.createElement("code",null,"Editable Select")," simple example."),y.createElement("div",{className:"field-group"},y.createElement(b.Z,{data:[],onChange:this.onChange,valueField:"text",useFilter:!0})))))),y.createElement(v.Z,null,y.createElement(E.Z,{className:"example-header",title:"In Dialog"}),y.createElement("div",{className:"widget-content"},y.createElement("div",{className:"example-content"},y.createElement("div",{className:"examples-wrapper"},y.createElement("p",null,y.createElement("code",null,"Editable Select")," simple example."),y.createElement(C.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),y.createElement(T.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return y.createElement("div",{className:"popover-dialog-content-scroller"},y.createElement("div",{className:"field-group"},y.createElement(b.Z,{data:[],onChange:e.onChange,valueField:"text",parentEl:t,useFilter:!0})))})))))),y.createElement("h2",{className:"example-title"},"Properties"),y.createElement(P.Z,{data:w}))}}]),l}(y.Component)},38845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>V});var r=n(50008),a=n.n(r),l=n(34575),s=n.n(l),o=n(93913),i=n.n(o),c=n(81506),p=n.n(c),u=n(2205),d=n.n(u),f=n(78585),h=n.n(f),m=n(29754),g=n.n(m),y=n(59713),b=n.n(y),v=n(37699),E=n(45697),C=n.n(E),T=n(79958),P=n(41844),w=n.n(P),x=n(11669),O=n(23046),F=n(35720),N=n(62457),S=n(37489),Z=n(87712),R=n(65248),D=n(81540),k=n(67243),M=n(19605);var j=function(e){d()(l,e);var t,n,r=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=g()(t);if(n){var a=g()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return h()(this,e)});function l(e){var t;s()(this,l);for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t=r.call.apply(r,[this,e].concat(o)),b()(p()(t),"handleChangeValue",(function(e){t.props.useFilter?t.setState({value:e,filter:e,listValue:""},(function(){var n=t.props.onChange;n&&n(e)})):t.setState({value:e,listValue:""},(function(){var n=t.props.onChange;n&&n(e)}))})),b()(p()(t),"showPopup",(function(){t.setState({popupVisible:!0},(function(){t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onFocus&&t.props.onFocus()}))})),b()(p()(t),"closePopup",(function(){t.setState({popupVisible:!1},(function(){t.props.onTriggerClick&&t.props.onTriggerClick(t.state.popupVisible),t.props.onPopupClosed&&t.props.onPopupClosed()}))})),b()(p()(t),"triggerHandler",(function(e,t,n,r,a){if(!t)return!0;for(;e;){if(e==n)return r;if(e==t)return!0;e=e.parentNode}return!a&&r})),b()(p()(t),"filterData",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.filter,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.props.data;if(!e)return n;var r=t.props,l=r.displayField,s=r.isGrouped,o=function(t){return t.filter((function(t){return"object"===a()(t)&&t[l]?t[l].toString().toUpperCase().includes(e.toUpperCase()):t.toString().toUpperCase().includes(e.toUpperCase())}))};if(s)for(var i=Object.assign(n),c=0,p=i.length;c<p;c++){var u=i[c];u.children=o(u.children),u.children.length<1&&(i.splice(c,1),c--)}return o(n)})),b()(p()(t),"handlePopupRender",(function(e){var n=k.Z.isAbove(t.wrapperEl,t.triggerEl,(0,T.findDOMNode)(e));n!==t.state.isAbove&&t.setState({isAbove:n})})),b()(p()(t),"handleChange",(function(e){var n=t.props,r=n.valueField,l=n.renderer,s=l?l(e):"object"==a()(e)?e[r]:e,o=t.props.autoClose,i={value:s,listValue:e};o&&(i.popupVisible=!1),t.setState(i,(function(){var e=t.props.onChange;e&&e(s)}))})),t.wrapper=(0,v.createRef)(),t.wrapperEl=null,t.trigger=(0,v.createRef)(),t.triggerEl=null,t.state={value:e.value,listValue:e.value,filter:"",popupVisible:!1,isAbove:!1},t}return i()(l,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.triggerEl=this.trigger&&this.trigger.current&&(0,T.findDOMNode)(this.trigger.current)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.popupClassName,r=e.style,a=e.popupStyle,l=e.name,s=e.placeholder,o=e.disabled,i=e.valueField,c=e.descriptionField,p=e.position,u=e.rightIconCls,d=e.resetPopPositionWait,f=e.triggerTheme,h=e.isGrouped,m=e.onItemClick,g=e.renderer,y=e.noMatchedMsg,E=e.useDynamicRenderList,C=e.onMouseOver,T=e.onMouseOut,P=e.parentEl,Z=this.state,D=Z.value,k=Z.listValue,M=Z.popupVisible,j=Z.isAbove,V=p===R.Z.TOP||p===R.Z.TOP_LEFT||p===R.Z.TOP_RIGHT||!p&&j,I=this.filterData();return v.createElement("div",{ref:this.wrapper,className:w()("editable-select",b()({},t,t)),style:r},l?v.createElement("input",{type:"hidden",name:l,value:D}):null,v.createElement(x.Z,{ref:this.trigger,className:w()("editable-select-trigger",V?"above":"blow",{activated:M,empty:!D}),value:D,rightIconCls:"".concat(u," editable-select-trigger-icon"),placeholder:s,disabled:o,theme:f,onMouseOver:C,onMouseOut:T,onChange:this.handleChangeValue,onFocus:this.showPopup}),v.createElement(O.Z,{className:w()("editable-select-popup",V?"above":"blow",b()({},n,n)),style:Object.assign({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},a),visible:M,triggerEl:this.triggerEl,triggerHandler:this.triggerHandler,parentEl:P,hasTriangle:!1,position:p||(j?R.Z.TOP_LEFT:R.Z.BOTTOM_LEFT),resetPositionWait:d,onRender:this.handlePopupRender,onRequestClose:this.closePopup},I.length<1?v.createElement("div",{className:"no-matched"},y||v.createElement("span",null,v.createElement("i",{className:"fas fa-exclamation-triangle no-matched-icon"}),"No matched value.")):h?v.createElement(S.Z,{className:"editable-select-list",data:I,value:k,valueField:i,displayField:i,descriptionField:c,renderer:g,onItemClick:this.onItemClick,onChange:this.changeHandler}):E?v.createElement(N.Z,{className:"editable-select-list",data:I,value:k,valueField:i,displayField:i,descriptionField:c,renderer:g,onItemClick:m,onChange:this.handleChange}):v.createElement(F.Z,{className:"editable-select-list",data:I,valueField:i,value:k,displayField:i,descriptionField:c,renderer:g,onItemClick:m,onChange:this.handleChange})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:M.Z.getDerivedState(e,t,"value")}}}]),l}(v.Component);b()(j,"Theme",Z.Z),b()(j,"Position",R.Z),j.propTypes={className:C().string,popupClassName:C().string,style:C().object,rightIconCls:C().string,popupStyle:C().object,position:C().oneOf(D.Z.enumerateValue(R.Z)),name:C().string,value:C().any,renderer:C().func,placeholder:C().string,data:C().oneOfType([C().arrayOf(C().oneOfType([C().shape({className:C().string,style:C().object,theme:C().oneOf(D.Z.enumerateValue(Z.Z)),value:C().oneOfType([C().string,C().number]),desc:C().oneOfType([C().string,C().number]),disabled:C().bool,isLoading:C().bool,disableTouchRipple:C().bool,iconCls:C().string,rightIconCls:C().string,renderer:C().func,onClick:C().func}),C().string,C().number])),C().array]).isRequired,invalidMsg:C().string,disabled:C().bool,valueField:C().string,displayField:C().string,descriptionField:C().string,infoMsg:C().string,textFormat:C().func,autoClose:C().bool,useFilter:C().bool,triggerTheme:C().oneOf(D.Z.enumerateValue(Z.Z)),isGrouped:C().bool,resetPopPositionWait:C().number,noMatchedMsg:C().string,useDynamicRenderList:C().bool,parentEl:C().object,onItemClick:C().func,onChange:C().func,onMouseOver:C().func,onMouseOut:C().func,onTriggerClick:C().func,onFocus:C().func,onPopupClosed:C().func},j.defaultProps={name:"",value:"",placeholder:"Please select ...",rightIconCls:"fas fa-angle-down",data:[],invalidMsg:"",disabled:!1,displayField:"text",descriptionField:"desc",infoMsg:"",autoClose:!0,useFilter:!1,useDynamicRenderList:!1,triggerTheme:Z.Z.DEFAULT,isGrouped:!1,resetPopPositionWait:250};const V=j}}]);
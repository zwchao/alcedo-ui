(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[3924],{29250:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});var n=l(23645),o=l.n(n)()((function(e){return e[1]}));o.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const a=o},98963:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});var n=l(23645),o=l.n(n)()((function(e){return e[1]}));o.push([e.id,'.dropdown-select-examples .field-group {\n  float: none; }\n  .dropdown-select-examples .field-group::before, .dropdown-select-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .dropdown-select-examples .field-group::after {\n    clear: both; }\n  .dropdown-select-examples .field-group .dropdown-select-label,\n  .dropdown-select-examples .field-group .dropdown-select {\n    float: left; }\n  .dropdown-select-examples .field-group .dropdown-select-label {\n    font-size: 14px;\n    line-height: 50px;\n    margin-right: 20px;\n    width: 60px; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .popover-dialog-content-scroller .field-group {\n    margin-bottom: 16px; }\n',""]);const a=o},22356:(e,t,l)=>{"use strict";l.d(t,{Z:()=>w});var n=l(6610),o=l(5991),a=l(63349),r=l(10379),s=l(46070),c=l(77608),p=l(96156),i=l(37699),d=l(45697),u=l.n(d),m=l(82996),f=l(93379),h=l.n(f),y=l(29250);function g(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function v(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?g(Object(l),!0).forEach((function(t){(0,p.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):g(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}h()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var T=function(e){(0,r.Z)(u,e);var t,l,d=(t=u,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(l){var o=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;return(0,n.Z)(this,u),t=d.call(this,e),(0,p.Z)((0,a.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var l in t.props.data)e.push(v({name:l},t.props.data[l]));return e})),t}return(0,o.Z)(u,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(i.Component);T.propTypes={data:u().object};const w=T},82091:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>x});var n=l(90484),o=l(6610),a=l(5991),r=l(63349),s=l(10379),c=l(46070),p=l(77608),i=l(96156),d=l(37699),u=l(7675),m=l(24471),f=l(50704),h=l(22944),y=l(65460),g=l(87712),v=l(22356);const T=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"triggerClassName":{"type":"PropTypes.string","desc":"The CSS class name of the trigger element."},"popupClassName":{"type":"PropTypes.string","desc":"The class name of the popup element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"popupStyle":{"type":"PropTypes.object","desc":"Override the styles of the popup element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"popupTheme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"position":{"type":"PropTypes.oneOf"},"name":{"type":"PropTypes.string","desc":"The name of the dropDownSelect."},"value":{"type":"PropTypes.any","desc":"The value of the dropDownSelect."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the dropDownSelect.","default":"Please select ..."},"title":{"type":"PropTypes.string"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"Position.BOTTOM"},"triggerRenderer":{"type":"PropTypes.func"},"rightIconCls":{"type":"PropTypes.string","default":"fas fa-angle-down"},"data":{"type":"PropTypes.oneOf","desc":"The options data.","default":"[]"},"invalidMsg":{"type":"PropTypes.string","desc":"The invalid message of dropDownSelect."},"disabled":{"type":"PropTypes.bool","desc":"If true,the dropDownSelect will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true,the dropDownSelect will be loading.","default":"false"},"itemDisabled":{"type":"PropTypes.bool","desc":"List item disabled callback.","default":"false"},"selectMode":{"type":"PropTypes.oneOf","desc":"The select mode of listItem.Can be normal,checkbox.","default":"SelectMode.SINGLE_SELECT"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"infoMsg":{"type":"PropTypes.string","desc":"The message of the dropDownSelect."},"textFormat":{"type":"PropTypes.func","desc":"Use this function to format the options\'s text."},"autoClose":{"type":"PropTypes.bool","desc":"If true, the drop-down box automatically closed after selection.","default":"true"},"isBlurClose":{"type":"PropTypes.bool","desc":"If true, the drop-down box automatically closed when blur.","default":"true"},"useFilter":{"type":"PropTypes.bool","desc":"If true,the drop-down box will have search input.","default":"false"},"isGrouped":{"type":"PropTypes.bool","desc":"If true,the dropDownSelect will be grouped.","default":"false"},"filterIconCls":{"type":"PropTypes.string","default":"fas fa-search"},"filterPlaceholder":{"type":"PropTypes.string","default":"Search ..."},"useSelectAll":{"type":"PropTypes.bool","default":"false"},"selectAllText":{"type":"PropTypes.string","default":"Select All"},"isHiddenInputFilter":{"type":"PropTypes.bool","default":"false"},"clearHiddenInputFilterInterval":{"type":"PropTypes.number","default":"1000"},"noMatchedMsg":{"type":"PropTypes.string","desc":"The message of no matching option."},"popupChildren":{"type":"PropTypes.any"},"useDynamicRenderList":{"type":"PropTypes.bool","default":"false"},"listHeight":{"type":"PropTypes.number","default":"200"},"itemHeight":{"type":"PropTypes.number","default":"40"},"scrollBuffer":{"type":"PropTypes.number","default":"8"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string"},"checkboxCheckedIconCls":{"type":"PropTypes.string"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string"},"resetPopPositionWait":{"type":"PropTypes.number","default":"250"},"autoPopupWidth":{"type":"PropTypes.bool","default":"true"},"shouldFollowScroll":{"type":"PropTypes.bool"},"renderer":{"type":"PropTypes.func"},"listItemRenderer":{"type":"PropTypes.func"},"filterCallback":{"type":"PropTypes.func"},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."},"onOpenPopup":{"type":"PropTypes.func","desc":"Callback function fired when the popup is open."},"onClosePopup":{"type":"PropTypes.func","desc":"Callback function fired when the popup is close."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when a menu item is selected."},"onBeforeChange":{"type":"PropTypes.func"},"onFocus":{"type":"PropTypes.func"},"onBlur":{"type":"PropTypes.func"},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"}}');var w=l(93379),E=l.n(w),b=l(98963);E()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;const x=function(e){(0,s.Z)(E,e);var t,l,w=(t=E,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,p.Z)(t);if(l){var o=(0,p.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function E(e){var t;return(0,o.Z)(this,E),t=w.call(this,e),(0,i.Z)((0,r.Z)(t),"show",(function(e){var l=t.state.DropdownSelectVisible;l[e]=!0,t.setState({DropdownSelectVisible:l})})),(0,i.Z)((0,r.Z)(t),"hide",(function(e){var l=t.state.DropdownSelectVisible;l[e]=!1,t.setState({DropdownSelectVisible:l})})),(0,i.Z)((0,r.Z)(t),"onChange",(function(e){console.log(e)})),t.data=["test0",{text:"test1",value:1,children:[{text:"test111",value:11}]},{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],t.groupData=[{name:"test0",children:[{text:"test001",value:1},{text:"test002",value:2},{text:"test003",value:3},{text:"test004",value:4}]},{name:"test1",children:[{text:"test111",value:11}]},{name:"test2",children:[{text:"test221",value:221},{text:"test222",value:222},{text:"test223",value:223},{text:"test224",value:224}]},{name:"test3",children:[{text:"test331",value:331},{text:"test332",value:332},{text:"test333",value:333},{text:"test334",value:334}]}],t.state={DropdownSelectVisible:{}},t}return(0,a.Z)(E,[{key:"render",value:function(){var e=this,t=this.state.DropdownSelectVisible,l=["a000","booo",{text:"c000",value:2,desc:"Here is test2."},"dtest3","etest4","ftest5",{text:"test6",value:6},"hhhh","yywe","people"];return d.createElement("div",{className:"example drop-down-select-examples"},d.createElement("h2",{className:"example-title"},"Dropdown Select"),d.createElement("p",null,d.createElement("span",null,"Dropdown Select"),"use to store operating elements. Click on the contact and a drop-down menu will appear. You can select from the list and execute the appropriate command."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"Basic"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"Dropdown Select")," simple example."),d.createElement("div",{className:"field-group"},d.createElement(u.Z,{data:this.data,renderer:function(e){return e&&"object"===(0,n.Z)(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},listItemRenderer:function(e){return e.text||e},onChange:this.onChange})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"Group"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"Dropdown Select")," group example."),d.createElement("div",{className:"field-group"},d.createElement(u.Z,{data:this.groupData,useFilter:!0,isGrouped:!0,displayField:"text",valueField:"value",onChange:this.onChange})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"Self defined theme"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Set the ",d.createElement("code",null,"autoClose")," property to false,the select list will not close when choose one item."),d.createElement("div",{className:"field-group"},d.createElement(u.Z,{theme:g.Z.PRIMARY,popupTheme:g.Z.PRIMARY,data:this.data,onChange:this.onChange})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"With Filter"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("div",{className:"field-group"},d.createElement("p",null,"Set the ",d.createElement("code",null,"filter")," property to true,the DropdownSelect will have user search input."),d.createElement(u.Z,{data:this.data,useFilter:!0,useSelectAll:!0,selectAllText:"All Example Items",selectMode:u.Z.SelectMode.MULTI_SELECT,autoClose:!1,checkboxUncheckedIconCls:"far fa-window-close",checkboxCheckedIconCls:"fas fa-window-close",onChange:this.onChange})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"With multi"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("div",{className:"field-group"},d.createElement("p",null,"Set the ",d.createElement("code",null,"mod")," property to",d.createElement("code",null,"DropdownSelect.SelectMode.MULTI_SELECT"),", the DropdownSelect can be Multiselect."),d.createElement(u.Z,{data:this.data,autoClose:!1,selectMode:u.Z.SelectMode.MULTI_SELECT,onChange:this.onChange})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"Self defined theme"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Set the ",d.createElement("code",null,"autoClose")," property to false,the select list will not close when choose one item."),d.createElement("div",{className:"field-group"},d.createElement(u.Z,{data:l,isHiddenInputFilter:!0,tip:"DropdownSelect Example",onChange:this.onChange})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"In Dialog"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Set the ",d.createElement("code",null,"autoClose")," property to false,the select list will not close when choose one item."),d.createElement(h.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),d.createElement(y.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return d.createElement("div",{className:"popover-dialog-content-scroller"},d.createElement("div",{className:"field-group"},d.createElement(u.Z,{data:l,isHiddenInputFilter:!0,parentEl:t,tip:"DropdownSelect Example",onChange:e.onChange})),d.createElement("div",{className:"field-group"},d.createElement(u.Z,{data:l,isHiddenInputFilter:!0,tip:"DropdownSelect Example",shouldFollowScroll:!0,onChange:e.onChange})))})))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(v.Z,{data:T}))}}]),E}(d.Component)}}]);
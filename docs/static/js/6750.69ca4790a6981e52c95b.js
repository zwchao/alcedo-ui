(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6750],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const c=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var r=n(34575),a=n.n(r),c=n(93913),l=n.n(c),o=n(81506),s=n.n(o),i=n(2205),p=n.n(i),d=n(78585),u=n.n(d),f=n(29754),h=n.n(f),y=n(59713),m=n.n(y),g=n(37699),b=n(45697),T=n.n(b),P=n(82996),v=n(93379),E=n.n(v),C=n(29250);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}E()(C.Z,{insert:"head",singleton:!1}),C.Z.locals;var x=function(e){p()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return u()(this,e)});function c(e){var t;return a()(this,c),t=r.call(this,e),m()(s()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(k({name:n},t.props.data[n]));return e})),t}return l()(c,[{key:"render",value:function(){return g.createElement("div",{className:"prop-type-desc-table-wrapper"},g.createElement(P.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),c}(g.Component);x.propTypes={data:T().object};const D=x},39653:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(34575),a=n.n(r),c=n(93913),l=n.n(c),o=n(81506),s=n.n(o),i=n(2205),p=n.n(i),d=n(78585),u=n.n(d),f=n(29754),h=n.n(f),y=n(59713),m=n.n(y),g=n(37699),b=n(38626),T=n(57865),P=n(1949),v=n(24471),E=n(50704),C=n(22356);const w=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the grid item.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the grid item select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.array","desc":"Children passed into the GridItem."},"value":{"type":"PropTypes.any"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the grid will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the grid will be at loading status."},"scrollSpeed":{"type":"PropTypes.number","desc":"The speed of scroll bar.","default":"20"},"scrollBuffer":{"type":"PropTypes.number","desc":"The number of overflows.","default":"40"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"col":{"type":"PropTypes.number","default":"3"},"itemHeight":{"type":"PropTypes.number"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item touch tap."},"onItemSelect":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item select."},"onItemDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item deselect."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the grid changed."},"onSequenceChange":{"type":"PropTypes.func","desc":"Callback function fired when select item sequence changed."}}');const k=function(e){p()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var a=h()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return u()(this,e)});function c(e){var t;return a()(this,c),t=r.call(this,e),m()(s()(t),"sequenceChangeHandler",(function(e){console.log("Sequence Changed:",e)})),m()(s()(t),"changeHandler",(function(e){console.log("Value Changed:",e)})),t.gridData=[{iconCls:"fab fa-facebook",text:"Facebook",tip:"Facebook"},{iconCls:"fab fa-twitter",text:"Twitter",tip:"Twitter"},{iconCls:"fab fa-google-plus-g",text:"Google+",tip:"Google+"}],t.largeListData=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],t}return l()(c,[{key:"render",value:function(){return g.createElement("div",{className:"example list-examples"},g.createElement("h2",{className:"example-title"},"DraggableGrid"),g.createElement("p",null,g.createElement("span",null,"DraggableGrid"),"used to move the draggable object by clicking the mouse and dragging it in the viewport."),g.createElement("h2",{className:"example-title"},"Examples"),g.createElement(b.W,{backend:T.PD},g.createElement(v.Z,null,g.createElement(E.Z,{className:"example-header",title:"DraggableGrid"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,"A multiple-choice",g.createElement("code",null," DraggableGrid")," example."),g.createElement(P.Z,{selectMode:P.Z.SelectMode.MULTI_SELECT,data:this.gridData,onSequenceChange:this.sequenceChangeHandler,onChange:this.changeHandler}))))),g.createElement(v.Z,null,g.createElement(E.Z,{className:"example-header",title:"Draggable Group"}),g.createElement("div",{className:"widget-content"},g.createElement("div",{className:"example-content"},g.createElement("div",{className:"examples-wrapper"},g.createElement("p",null,"A ",g.createElement("code",null,"DraggableGrid")," simple example."),g.createElement(P.Z,{style:{height:120},data:this.largeListData,col:5,onSequenceChange:this.sequenceChangeHandler,onChange:this.changeHandler})))))),g.createElement("h2",{className:"example-title"},"Properties"),g.createElement(C.Z,{data:w}))}}]),c}(g.Component)}}]);
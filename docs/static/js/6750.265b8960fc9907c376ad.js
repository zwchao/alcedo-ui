(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6750],{29250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const c=a},22356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(68670),a=r(83816),c=r(36678),l=r(13180),o=r(26086),s=r(4656),i=r(94949),p=r(37699),d=r(45697),u=r.n(d),f=r(82996),h=r(93379),y=r.n(h),m=r(29250);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}y()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;var T=function(e){(0,l.Z)(u,e);var t,r,d=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function u(e){var t;return(0,n.Z)(this,u),t=d.call(this,e),(0,i.Z)((0,c.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(b({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(u,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(p.Component);T.propTypes={data:u().object};const v=T},39653:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(68670),a=r(83816),c=r(36678),l=r(13180),o=r(26086),s=r(4656),i=r(94949),p=r(37699),d=r(17698),u=r(57865),f=r(1949),h=r(24471),y=r(50704),m=r(22356);const g=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the grid item.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the grid item select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.array","desc":"Children passed into the GridItem."},"value":{"type":"PropTypes.any"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the grid will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the grid will be at loading status."},"scrollSpeed":{"type":"PropTypes.number","desc":"The speed of scroll bar.","default":"20"},"scrollBuffer":{"type":"PropTypes.number","desc":"The number of overflows.","default":"40"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"col":{"type":"PropTypes.number","default":"3"},"itemHeight":{"type":"PropTypes.number"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item touch tap."},"onItemSelect":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item select."},"onItemDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the grid-item deselect."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the grid changed."},"onSequenceChange":{"type":"PropTypes.func","desc":"Callback function fired when select item sequence changed."}}');const b=function(e){(0,l.Z)(T,e);var t,r,b=(t=T,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function T(e){var t;return(0,n.Z)(this,T),t=b.call(this,e),(0,i.Z)((0,c.Z)(t),"sequenceChangeHandler",(function(e){console.log("Sequence Changed:",e)})),(0,i.Z)((0,c.Z)(t),"changeHandler",(function(e){console.log("Value Changed:",e)})),t.gridData=[{iconCls:"fab fa-facebook",text:"Facebook",tip:"Facebook"},{iconCls:"fab fa-twitter",text:"Twitter",tip:"Twitter"},{iconCls:"fab fa-google-plus-g",text:"Google+",tip:"Google+"}],t.largeListData=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],t}return(0,a.Z)(T,[{key:"render",value:function(){return p.createElement("div",{className:"example list-examples"},p.createElement("h2",{className:"example-title"},"DraggableGrid"),p.createElement("p",null,p.createElement("span",null,"DraggableGrid"),"used to move the draggable object by clicking the mouse and dragging it in the viewport."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(d.W,{backend:u.PD},p.createElement(h.Z,null,p.createElement(y.Z,{className:"example-header",title:"DraggableGrid"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,"A multiple-choice",p.createElement("code",null," DraggableGrid")," example."),p.createElement(f.Z,{selectMode:f.Z.SelectMode.MULTI_SELECT,data:this.gridData,onSequenceChange:this.sequenceChangeHandler,onChange:this.changeHandler}))))),p.createElement(h.Z,null,p.createElement(y.Z,{className:"example-header",title:"Draggable Group"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,"A ",p.createElement("code",null,"DraggableGrid")," simple example."),p.createElement(f.Z,{style:{height:120},data:this.largeListData,col:5,onSequenceChange:this.sequenceChangeHandler,onChange:this.changeHandler})))))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(m.Z,{data:g}))}}]),T}(p.Component)}}]);
webpackJsonp([28],{811:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(1),d=l(c),u=a(371),i=l(u),p=a(353),f=l(p),m=a(354),h=l(m),y=a(841),g=l(y),b=a(954),E=l(b);a(905);var v=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onTouchTap:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onTouchTap:function(){console.log("test6 selected!")}},"test7","test8","test9"],a.groupedData=[{name:"socialNetwork",children:[{iconCls:"fa fa-facebook",text:"Facebook",desc:"Here is a Facebook Desc."},{iconCls:"fa fa-twitter",text:"Twitter",desc:"Here is a Twitter Desc."},{iconCls:"fa fa-google-plus",text:"Google+",desc:"Here is a Google+ Desc."}]},{name:"device",children:[{iconCls:"fa fa-android",text:"Android",desc:"Here is a Android Desc."},{iconCls:"fa fa-apple",text:"Apple",desc:"Here is a Apple Desc."},{iconCls:"fa fa-windows",text:"Windows",desc:"Here is a Windows Desc."}]}],a.onChange=a.onChange.bind(a),a.filterPressEnterHandle=a.filterPressEnterHandle.bind(a),a.filterClearHandle=a.filterClearHandle.bind(a),a}return r(t,e),s(t,[{key:"onChange",value:function(e){console.log("select item: ",e)}},{key:"filterPressEnterHandle",value:function(e){console.log("filter value: ",e)}},{key:"filterClearHandle",value:function(){console.log("filter cleared")}},{key:"render",value:function(){return d.default.createElement("div",{className:"example auto-complete-examples"},d.default.createElement("h2",{className:"example-title"},"LocalAutoComplete"),d.default.createElement("p",null,"A ",d.default.createElement("span",null,"LocalAutoComplete")," is an interface to help users to complete their input."),d.default.createElement("h2",{className:"example-title"},"Examples"),d.default.createElement(f.default,null,d.default.createElement(h.default,{className:"example-header",title:"Basic"}),d.default.createElement("div",{className:"widget-content"},d.default.createElement("div",{className:"example-content"},d.default.createElement("div",{className:"examples-wrapper"},d.default.createElement("p",null,d.default.createElement("code",null,"LocalAutoComplete")," simple example."),d.default.createElement(i.default,{data:this.data,placeholder:"Please select ...",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandle,onFilterClear:this.filterClearHandle}))))),d.default.createElement(f.default,null,d.default.createElement(h.default,{className:"example-header",title:"With isGrouped"}),d.default.createElement("div",{className:"widget-content"},d.default.createElement("div",{className:"example-content"},d.default.createElement("div",{className:"examples-wrapper"},d.default.createElement("p",null,"Set the ",d.default.createElement("code",null,"isGrouped")," property to true,the ",d.default.createElement("code",null,"LocalAutoComplete"),"will have groupedData."),d.default.createElement(i.default,{popupStyle:{maxHeight:300},isGrouped:!0,data:this.groupedData,placeholder:"Please select ...",onChange:this.onChange}))))),d.default.createElement(f.default,null,d.default.createElement(h.default,{className:"example-header",title:"With mode"}),d.default.createElement("div",{className:"widget-content"},d.default.createElement("div",{className:"example-content"},d.default.createElement("div",{className:"examples-wrapper"},d.default.createElement("p",null,d.default.createElement("code",null,"LocalAutoComplete")," with default mode,",d.default.createElement("code",null,"normal"),",",d.default.createElement("code",null,"checkbox"),",",d.default.createElement("code",null,"radio"),"applied."),d.default.createElement(i.default,{popupStyle:{maxHeight:300},mode:"checkbox",isGrouped:!0,data:this.groupedData,placeholder:"Please select ...",onChange:this.onChange}))))),d.default.createElement(f.default,null,d.default.createElement(h.default,{className:"example-header",title:"With mode"}),d.default.createElement("div",{className:"widget-content"},d.default.createElement("div",{className:"example-content"},d.default.createElement("div",{className:"examples-wrapper"},d.default.createElement("p",null,"Set the ",d.default.createElement("code",null,"disabled")," property to true,the ",d.default.createElement("code",null,"LocalAutoComplete"),"will disabled."),d.default.createElement(i.default,{popupStyle:{maxHeight:300},disabled:!0,data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),d.default.createElement(f.default,null,d.default.createElement(h.default,{className:"example-header",title:"With mode"}),d.default.createElement("div",{className:"widget-content"},d.default.createElement("div",{className:"example-content"},d.default.createElement("div",{className:"examples-wrapper"},d.default.createElement("p",null,"Set the ",d.default.createElement("code",null,"noMatchedMsg")," property for no matched message."),d.default.createElement(i.default,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),d.default.createElement("h2",{className:"example-title"},"Properties"),d.default.createElement(g.default,{data:E.default}))}}]),t}(c.Component);t.default=v},841:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=a(1),u=l(d),i=a(2),p=l(i),f=a(352),m=l(f);a(843);var h=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return r(t,e),c(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return u.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isAdaptiveHeight:!0})}}]),t}(d.Component);t.default=h,h.propTypes={data:p.default.object},h.defaultProps={data:""}},842:function(e,t,a){t=e.exports=a(791)(),t.push([e.i,"",""])},843:function(e,t,a){var l=a(842);"string"==typeof l&&(l=[[e.i,l,""]]);a(792)(l,{});l.locals&&(e.exports=l.locals)},864:function(e,t,a){t=e.exports=a(791)(),t.push([e.i,"",""])},905:function(e,t,a){var l=a(864);"string"==typeof l&&(l=[[e.i,l,""]]);a(792)(l,{});l.locals&&(e.exports=l.locals)},954:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element.",default:"null"},name:{type:"PropTypes.string",desc:"The name of the auto complete.",default:""},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field.",default:""},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"false"},mode:{type:"PropTypes.oneOf",desc:"The type of dropDown list,can be normal,checkbox,radio."},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value.",default:""},isGrouped:{type:"PropTypes.bool",desc:"If true,the list data will be grouped.",default:"false"},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemTouchTap:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."}}}});
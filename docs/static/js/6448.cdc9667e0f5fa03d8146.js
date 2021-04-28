(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6448],{59141:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(23645),l=a.n(n)()((function(e){return e[1]}));l.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}\n",""]);const o=l},32501:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(23645),l=a.n(n)()((function(e){return e[1]}));l.push([e.id,'.table-examples .example-table-wrapper{overflow:auto}.table-examples .dynamic-width-cell-block{box-sizing:border-box;height:24px;line-height:16px;padding:4px 8px;background:#edf0f3;border-radius:12px}.table-examples .toolbar{margin-bottom:16px}.table-examples .toolbar::before,.table-examples .toolbar::after{display:table;content:""}.table-examples .toolbar::after{clear:both}.table-examples .toolbar .action-button{float:left;width:auto;margin:17px 16px 0 0}.table-examples .toolbar .filter{float:right;background:transparent}.table-examples .table.example-table .table-action{width:auto;margin:16px 16px 0 0}.table-examples .table.example-table.head-hidden .scroll-table-body-scroller{border-top:1px solid #e4eaf2}.table-examples .table.example-table.foot-hidden .scroll-table-body-scroller{border-bottom:1px solid #e4eaf2}.table-examples .table.example-table.foot-hidden .scroll-table-body-scroller tbody tr:last-child td{border-bottom:none}.table-examples .loading-table-wrapper{position:relative;min-height:200px}.table-examples .loading-table-wrapper .loading-table-loading{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}\n',""]);const o=l},1116:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(6610),l=a(5991),o=a(63349),r=a(10379),s=a(46070),i=a(77608),c=a(96156),d=a(37699),p=a(45697),u=a.n(p),h=a(82996),f=a(93379),m=a.n(f),g=a(59141);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}m()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;var C=function(e){(0,r.Z)(u,e);var t,a,p=(t=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var l=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;return(0,n.Z)(this,u),t=p.call(this,e),(0,c.Z)((0,o.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(b({name:a},t.props.data[a]));return e})),t}return(0,l.Z)(u,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(h.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(d.Component);C.propTypes={data:u().object};const E=C},71478:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>W});var n=a(87329),l=a(6610),o=a(5991),r=a(63349),s=a(10379),i=a(46070),c=a(77608),d=a(96156),p=a(37699),u=a(82996),h=a(54084),f=a(96453),m=a(24471),g=a(50704),y=a(65059),b=a(22944),C=a(59501),E=a(88787),P=a(1116);const Z=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"columns":{"type":"PropTypes.array","desc":"Children passed into table header."},"columnKeyField":{"type":"PropTypes.string","default":"key"},"data":{"type":"PropTypes.array"},"footData":{"type":"PropTypes.array"},"value":{"type":"PropTypes.array"},"idField":{"type":"PropTypes.string","default":"id"},"disabled":{"type":"PropTypes.bool","default":"false"},"noDataText":{"type":"PropTypes.string","default":"No Data"},"canBeExpanded":{"type":"PropTypes.bool","desc":"expand"},"expandRows":{"type":"PropTypes.array","default":"[]"},"expandIconCls":{"type":"PropTypes.string","default":"fas fa-chevron-right"},"selectTheme":{"type":"PropTypes.oneOf","desc":"multi select"},"selectMode":{"type":"PropTypes.oneOf","default":"SelectMode.SINGLE_SELECT"},"selectAllMode":{"type":"PropTypes.oneOf","default":"SelectAllMode.CURRENT_PAGE"},"isSelectAllDisabled":{"type":"PropTypes.bool"},"isSelectRecursive":{"type":"PropTypes.bool","default":"false"},"selectUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"selectCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"selectIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"sorting":{"type":"PropTypes.shape","desc":"sorting"},"defaultSortingType":{"type":"PropTypes.oneOf","default":"SortingType.ASC"},"sortingAscIconCls":{"type":"PropTypes.string","default":"fas fa-sort-up"},"sortingDescIconCls":{"type":"PropTypes.string","default":"fas fa-sort-down"},"autoSorting":{"type":"PropTypes.bool","default":"true"},"isClickSorting":{"type":"PropTypes.bool","default":"true"},"sortingFunc":{"type":"PropTypes.func"},"pageSizeClassName":{"type":"PropTypes.string","desc":"pagination"},"pageSizeTriggerClassName":{"type":"PropTypes.string"},"pageSizePopupClassName":{"type":"PropTypes.string"},"isPaginated":{"type":"PropTypes.bool","default":"true"},"page":{"type":"PropTypes.number","default":"0"},"pageSize":{"type":"PropTypes.number","default":"10"},"pageSizes":{"type":"PropTypes.array","default":"[5, 10, 15, 20]"},"pageSizeValueField":{"type":"PropTypes.string","default":"value"},"pageSizeDisplayField":{"type":"PropTypes.string","default":"text"},"paginationParentEl":{"type":"PropTypes.object"},"useFullPagination":{"type":"PropTypes.bool","default":"false"},"paginationSelectionVisible":{"type":"PropTypes.bool","default":"false"},"paginationTotalVisible":{"type":"PropTypes.bool","default":"true"},"paginationPageVisible":{"type":"PropTypes.bool","default":"true"},"paginationPageSizeVisible":{"type":"PropTypes.bool","default":"true"},"paginationPageSizeRightIconCls":{"type":"PropTypes.string","default":"fas fa-angle-down"},"paginationPrevIconCls":{"type":"PropTypes.string","default":"fas fa-angle-left"},"paginationNextIconCls":{"type":"PropTypes.string","default":"fas fa-angle-right"},"paginationFirstIconCls":{"type":"PropTypes.string","default":"fas fa-angle-double-left"},"paginationLastIconCls":{"type":"PropTypes.string","default":"fas fa-angle-double-right"},"paginationSelectionRenderer":{"type":"PropTypes.func"},"paginationTotalRenderer":{"type":"PropTypes.func"},"isHeadHidden":{"type":"PropTypes.bool","desc":"hidden","default":"false"},"isFootHidden":{"type":"PropTypes.bool","default":"false"},"isLayoutFixed":{"type":"PropTypes.bool","desc":"fixed","default":"true"},"isHeadFixed":{"type":"PropTypes.bool","default":"false"},"isFootFixed":{"type":"PropTypes.bool","default":"false"},"scroll":{"type":"PropTypes.shape","desc":"scroll"},"disableScrollingRender":{"type":"PropTypes.bool","default":"false"},"useDynamicRender":{"type":"PropTypes.bool","desc":"Dynamic Render","default":"false"},"scrollHeight":{"type":"PropTypes.number","default":"500"},"rowHeight":{"type":"PropTypes.number","default":"50"},"scrollBuffer":{"type":"PropTypes.number","default":"8"},"defaultColumnWidth":{"type":"PropTypes.number","desc":"column resizable","default":"100"},"minColumnWidth":{"type":"PropTypes.number","default":"64"},"maxColumnWidth":{"type":"PropTypes.number","default":"Infinity"},"onChange":{"type":"PropTypes.func","desc":"callback"},"onSelect":{"type":"PropTypes.func"},"onDeselect":{"type":"PropTypes.func"},"onSelectAll":{"type":"PropTypes.func"},"onDeselectAll":{"type":"PropTypes.func"},"onExpand":{"type":"PropTypes.func"},"onCollapse":{"type":"PropTypes.func"},"onExpandChange":{"type":"PropTypes.func"},"onSortChange":{"type":"PropTypes.func"},"onDataUpdate":{"type":"PropTypes.func"},"onPaginationChange":{"type":"PropTypes.func"},"onPageChange":{"type":"PropTypes.func"},"onPageSizeChange":{"type":"PropTypes.func"},"onScrollStart":{"type":"PropTypes.func"},"onScrollEnd":{"type":"PropTypes.func"},"onScrollChange":{"type":"PropTypes.func"},"onResizeStart":{"type":"PropTypes.func"},"onResizeEnd":{"type":"PropTypes.func"},"onResizeChange":{"type":"PropTypes.func"},"onColumnsWidthChange":{"type":"PropTypes.func"},"onColumnResizeStart":{"type":"PropTypes.func"},"onColumnResizeEnd":{"type":"PropTypes.func"}}');var T=a(41844),v=a.n(T),x=a(59854),S=a.n(x),N=a(50361),R=a.n(N),w=a(19396),D=a(93379),A=a.n(D),O=a(32501);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){(0,d.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}A()(O.Z,{insert:"head",singleton:!1}),O.Z.locals;var z=Symbol("LOADING_SYMBOL");const W=function(e){(0,s.Z)(x,e);var t,a,T=(t=x,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(a){var l=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function x(e){var t;(0,l.Z)(this,x),t=T.call(this,e),(0,d.Z)((0,r.Z)(t),"getFixedColumns",(function(){return t.columns.map((function(e){return["id","name"].includes(e.key)?k(k({},e),{},{fixed:u.Z.Fixed.LEFT}):["status","action"].includes(e.key)?k(k({},e),{},{fixed:u.Z.Fixed.RIGHT}):e}))})),(0,d.Z)((0,r.Z)(t),"getResizableColumns",(function(){var e=R()(t.columns);return w.Z.preOrderTraverse({children:e},(function(e){["name","age","otherColumn1","otherColumn2","otherColumn3","otherColumn4","functionWidth"].includes(e.key)&&(e.resizable=!0)})),e})),(0,d.Z)((0,r.Z)(t),"generateData",(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=[],n=0;n<e;n++){var l="".concat(t?"".concat(t,"-"):"").concat(n);a.push({id:l,firstName:"firstName".concat(l),lastName:"lastName".concat(l),age:Math.floor(100*Math.random()),functionWidth:100+5*n,other:"Other Content"})}return a})),(0,d.Z)((0,r.Z)(t),"getFootData",(function(e){return[{age:S()(e.reduce((function(e,t){return e+t.age}),0)/e.length,0),functionWidth:e.reduce((function(e,t){return S()(e+t.functionWidth)}),0)}]})),(0,d.Z)((0,r.Z)(t),"deleteRow",(function(e){var a=t.state.data.filter((function(t){return t.id!==e}));t.setState({data:a})})),(0,d.Z)((0,r.Z)(t),"handleSortChange",(function(e){t.setState({sorting:e}),console.log("Sort Change Value: ",e)})),(0,d.Z)((0,r.Z)(t),"handlePaginationChange",(function(e){var t=e.page,a=e.pageSize;console.log("page: ".concat(t,", pageSize: ").concat(a))})),(0,d.Z)((0,r.Z)(t),"handleSelect",(function(e,t,a){console.log("Select Value: ",e)})),(0,d.Z)((0,r.Z)(t),"handleDeselect",(function(e,t,a){console.log("Deselect Value: ",e)})),(0,d.Z)((0,r.Z)(t),"handleSelectAll",(function(e){console.log("Select All Value: ",e)})),(0,d.Z)((0,r.Z)(t),"handleSeselectAll",(function(e){console.log("Deselect All Value: ",e)})),(0,d.Z)((0,r.Z)(t),"handleChange",(function(e){console.log("Changed Value: ",e),t.setState({value:e})})),(0,d.Z)((0,r.Z)(t),"handleExpand",(function(e){console.log("Expand: ",e)})),(0,d.Z)((0,r.Z)(t),"handleCollapse",(function(e){console.log("Collapse: ",e)})),(0,d.Z)((0,r.Z)(t),"collapseAllRows",(function(){var e,a,n;null===(e=t.tableRef)||void 0===e||null===(a=e.current)||void 0===a||null===(n=a.collapseAllRows)||void 0===n||n.call(a)})),(0,d.Z)((0,r.Z)(t),"toggleHead",(function(){t.setState({headVisible:!t.state.headVisible})})),(0,d.Z)((0,r.Z)(t),"toggleFoot",(function(){t.setState({footVisible:!t.state.footVisible})})),(0,d.Z)((0,r.Z)(t),"handleFilter",(function(e){t.setState({filter:e})})),(0,d.Z)((0,r.Z)(t),"filterData",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.data,a=t.state.filter;return a&&e?e.filter((function(e){return e&&(e.firstName&&e.firstName.toUpperCase().includes(a.toUpperCase())||e.lastName&&e.lastName.toUpperCase().includes(a.toUpperCase()))})):e})),(0,d.Z)((0,r.Z)(t),"handleColumnsWidthChange",(function(e,t,a){console.log("column::",e),console.log("width::",t),console.log("nextColumns::",a)})),t.tableRef=(0,p.createRef)();var a=t.generateData();return a[0].children=t.generateData(10,"0"),t.state={data:a,value:[],sorting:null,filter:"",headVisible:!0,footVisible:!0},t.columns=[{key:"id",width:128,noWrap:!0,headRenderer:"ID",bodyRenderer:function(e){return e[z]?p.createElement(y.Z,null):e.id},footRenderer:"Total",sortable:!0,sortingProp:"id"},{key:"name",width:"20%",minWidth:64,noWrap:!0,headRenderer:"Name (Percentage Width)",bodyRenderer:function(e){return e.firstName&&e.lastName?"".concat(e.firstName," ").concat(e.lastName):null},bodyTitle:function(e){return e.firstName&&e.lastName?"".concat(e.firstName," ").concat(e.lastName):null},sortable:!0,sortingProp:"firstName"},{key:"age",width:64,align:u.Z.Align.RIGHT,noWrap:!0,headRenderer:"Age",bodyRenderer:function(e){return e.age},footRenderer:t.state.data&&t.state.data.length>0?function(){return p.createElement(p.Fragment,null,p.createElement("div",null,"Average"),p.createElement("div",null,S()(t.state.data.reduce((function(e,t){return e+t.age}),0)/t.state.data.length,0)))}:null,sortable:!0,sortingProp:"age"},{key:"otherColumn",headRenderer:"Other Column",headAlign:u.Z.Align.CENTER,children:[{key:"otherColumn1",width:120,noWrap:!0,headRenderer:"Other Column 1",bodyRenderer:function(e){return e.other?"".concat(e.other," 1"):""}},{key:"otherColumn2",width:120,noWrap:!0,headRenderer:"Other Column 2",bodyRenderer:function(e){return e.other?"".concat(e.other," 2"):""}},{key:"otherColumn3",width:120,noWrap:!0,headRenderer:"Other Column 3",bodyRenderer:function(e){return e.other?"".concat(e.other," 3"):""}},{key:"otherColumn4",width:120,noWrap:!0,headRenderer:"Other Column 4",bodyRenderer:function(e){return e.other?"".concat(e.other," 4"):""}}]},{key:"functionWidth",width:function(e){return e&&e.length>0?Math.max.apply(Math,(0,n.Z)(e.map((function(e){return e.functionWidth}))))+16:120},align:u.Z.Align.RIGHT,noWrap:!0,headRenderer:"Function Width",bodyRenderer:function(e){return e?p.createElement("div",{className:"dynamic-width-cell-block",style:{width:e.functionWidth||null}},e.functionWidth?"Width: ".concat(e.functionWidth,"px"):""):null},footRenderer:t.state.data&&t.state.data.length>0?function(){return p.createElement(p.Fragment,null,p.createElement("div",null,"Sum"),p.createElement("div",null,t.state.data.reduce((function(e,t){return S()(e+t.functionWidth)}),0)))}:null,sortable:!0,sortingProp:"functionWidth"},{key:"status",width:64,align:u.Z.Align.CENTER,headRenderer:"Status",bodyRenderer:function(e){return e[z]?null:p.createElement(h.Z,{style:{display:"inline-block",verticalAlign:"middle"},value:!e.disabled,size:"small",onClick:function(e){return e.stopPropagation()}})}},{key:"action",width:64,align:u.Z.Align.CENTER,headRenderer:"Action",bodyRenderer:function(e){return e[z]?null:p.createElement(f.Z,{iconCls:"fas fa-trash-alt",onClick:function(){return t.deleteRow(e.id)}})}}],t.pageSizes=[{value:10,text:"10 / page"},{value:20,text:"20 / page"},{value:30,text:"30 / page"},{value:40,text:"40 / page"},{value:50,text:"50 / page"}],t}return(0,o.Z)(x,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.value,n=e.sorting,l=e.filter,o=e.headVisible,r=e.footVisible,s=this.filterData(t),i=this.getFootData(t);return p.createElement("div",{className:"example table-examples"},p.createElement("h2",{className:"example-title"},"Table"),p.createElement("p",null,p.createElement("span",null,"Table")," are used to display data and to organize it."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"Normal"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("p",null,"A simple ",p.createElement("code",null,"Table")," example."),p.createElement("div",{className:"example-table-wrapper"},p.createElement(u.Z,{className:"example-table",columns:this.columns,data:t,value:a,footData:i,canBeExpanded:!0,selectMode:u.Z.SelectMode.MULTI_SELECT,isSelectRecursive:!0,scroll:{width:1200},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange}))))),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"Multi Select"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"example-table-wrapper"},p.createElement(u.Z,{className:"example-table",columns:this.columns,data:t.map((function(e){return k(k({},e),{},{disabled:(null==e?void 0:e.id)%4==0})})),footData:i,selectMode:u.Z.SelectMode.MULTI_SELECT,selectColumn:{bodyRenderer:function(e,t){return t.disabled?p.createElement(E.Z,{tipContent:"Disabled"},p.createElement("i",{className:"fas fa-ban"})):e}},scroll:{width:1200},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll}))))),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"Fix Head & Foot"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("p",null,"You can config ",p.createElement("code",null,"isHeadFixed")," to fix the Head,  and config ",p.createElement("code",null,"isFootFixed")," to fix the Foot."),p.createElement(u.Z,{className:"example-table",columns:this.columns,data:t,footData:i,isHeadFixed:!0,isFootFixed:!0,scroll:{width:1200,maxHeight:320},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll})))),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"Fix Columns"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("p",null,"You can config ",p.createElement("code",null,"fixed")," in columns to fix the column ",p.createElement("code",null,"Left")," or ",p.createElement("code",null,"Right"),"."),p.createElement(u.Z,{className:"example-table",columns:this.getFixedColumns(),data:t,footData:i,scroll:{width:1200},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll})))),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"Fix Head, Foot and Columns"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"toolbar"},p.createElement(b.Z,{className:"action-button",value:"Collapse All Rows",onClick:this.collapseAllRows}),p.createElement(b.Z,{className:"action-button",value:"Toggle Table Head",onClick:this.toggleHead}),p.createElement(b.Z,{className:"action-button",value:"Toggle Table Foot",onClick:this.toggleFoot}),p.createElement(C.Z,{className:"filter",label:"Filter",value:l,onChange:this.handleFilter})),p.createElement("div",{className:"loading-table-wrapper"},s?p.createElement(u.Z,{ref:this.tableRef,className:v()("example-table",{"head-hidden":!o,"foot-hidden":!r||!s||s.length<1}),data:s,footData:i,columns:this.getFixedColumns(),sorting:n,selectMode:u.Z.SelectMode.MULTI_SELECT,isHeadFixed:!0,isFootFixed:!0,isHeadHidden:!o,isFootHidden:!r||!s||s.length<1,scroll:{width:1200,height:(null==s?void 0:s.length)>0?320:0},useFullPagination:!0,paginationTotalRenderer:function(e){return p.createElement("span",null,"Self Defined Total: ",e)},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll}):p.createElement(y.Z,{className:"loading-table-loading"}))))),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"Dynamic Render"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"loading-table-wrapper"},p.createElement(u.Z,{ref:this.tableRef,className:"example-table",data:this.generateData(1e3),footData:i,columns:this.columns,sorting:n,selectMode:u.Z.SelectMode.MULTI_SELECT,isHeadFixed:!0,isFootFixed:!0,isPaginated:!1,useDynamicRender:!0,scroll:{width:1200},onSortChange:this.handleSortChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll}))))),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"Resize Column Width"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement(u.Z,{className:"example-table border-collapse",columns:this.getResizableColumns(),data:t,footData:i,scroll:{width:1200},onSortChange:this.handleSortChange,onPaginationChange:this.handlePaginationChange,onExpand:this.handleExpand,onCollapse:this.handleCollapse,onChange:this.handleChange,onSelect:this.handleSelect,onSelectAll:this.handleSelectAll,onDeselect:this.handleDeselect,onDeselectAll:this.handleSeselectAll,onColumnsWidthChange:this.handleColumnsWidthChange})))),p.createElement(m.Z,null,p.createElement(g.Z,{className:"example-header",title:"No Data"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("p",null,"No Data ",p.createElement("code",null,"Table")," example."),p.createElement(u.Z,{className:"example-table",data:[],footData:null,columns:this.columns,selectMode:u.Z.SelectMode.MULTI_SELECT,isFootHidden:!0,scroll:{width:1200}})))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(P.Z,{data:Z}))}}]),x}(p.Component)},54084:(e,t,a)=>{"use strict";a.d(t,{Z:()=>x});var n=a(22122),l=a(81253),o=a(6610),r=a(5991),s=a(63349),i=a(10379),c=a(46070),d=a(77608),p=a(96156),u=a(37699),h=a(45697),f=a.n(h),m=a(41844),g=a.n(m),y=a(96453),b=a(65059),C=a(88787),E=a(87712),P=a(65248),Z=a(81540),T=a(19605);var v=function(e){(0,i.Z)(f,e);var t,a,h=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,d.Z)(t);if(a){var l=(0,d.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,o.Z)(this,f);for(var a=arguments.length,n=new Array(a>1?a-1:0),l=1;l<a;l++)n[l-1]=arguments[l];return t=h.call.apply(h,[this,e].concat(n)),(0,p.Z)((0,s.Z)(t),"handleClick",(function(e){var a=t.props,n=a.disabled,l=a.isLoading,o=a.beforeChange,r=a.onClick;if(!n&&!l){r&&r(e);var s=!t.state.value,i=function(){t.setState({value:s},(function(){var a=t.props.onChange;a&&a(s,e)}))};o?!1!==o(s)&&i():i()}})),t.state={value:!!e.value},t}return(0,r.Z)(f,[{key:"render",value:function(){var e,t=this.props,a=t.className,o=t.style,r=t.theme,s=t.disabled,i=t.isLoading,c=t.size,d=t.labelVisible,h=t.tip,m=t.triggerEl,E=t.parentEl,P=t.tipPosition,Z=(t.beforeChange,(0,l.Z)(t,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),T=this.state.value;return u.createElement(C.Z,{tipContent:h,triggerEl:m,parentEl:E,position:P},u.createElement("div",(0,n.Z)({},Z,{className:g()("switcher",(e={activated:T,small:c===f.Size.SMALL},(0,p.Z)(e,"theme-".concat(r),r),(0,p.Z)(e,a,a),e)),style:o,disabled:s||i,onClick:this.handleClick}),d?u.createElement("div",{className:"switcher-label"}):null,u.createElement(y.Z,{className:"switcher-slider-wrapper",disableTouchRipple:s||i},u.createElement("div",{className:"switcher-slider"},i?u.createElement(b.Z,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:T.Z.getDerivedState(e,t,"value")}}}]),f}(u.Component);(0,p.Z)(v,"Size",{DEFAULT:"",SMALL:"small"}),(0,p.Z)(v,"Theme",E.Z),v.propTypes={className:f().string,style:f().object,theme:f().oneOf(Z.Z.enumerateValue(E.Z)),value:f().bool,disabled:f().bool,isLoading:f().bool,labelVisible:f().bool,size:f().oneOf(Z.Z.enumerateValue(v.Size)),tip:f().string,tipPosition:f().oneOf(Z.Z.enumerateValue(P.Z)),triggerEl:f().object,parentEl:f().object,onClick:f().func,beforeChange:f().func,onChange:f().func},v.defaultProps={theme:E.Z.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:v.Size.DEFAULT,tipPosition:P.Z.BOTTOM};const x=v}}]);
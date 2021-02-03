(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[8053],{29250:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const i=r},96185:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""]);const i=r},22356:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var n=a(34575),r=a.n(n),i=a(93913),o=a.n(i),l=a(81506),s=a.n(l),c=a(2205),p=a.n(c),u=a(78585),g=a.n(u),d=a(29754),f=a.n(d),h=a(59713),y=a.n(h),m=a(37699),v=a(45697),P=a.n(v),b=a(82996),S=a(93379),E=a.n(S),x=a(29250);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){y()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}E()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;var w=function(e){p()(i,e);var t,a,n=(t=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=f()(t);if(a){var r=f()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return g()(this,e)});function i(e){var t;return r()(this,i),t=n.call(this,e),y()(s()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(T({name:a},t.props.data[a]));return e})),t}return o()(i,[{key:"render",value:function(){return m.createElement("div",{className:"prop-type-desc-table-wrapper"},m.createElement(b.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),i}(m.Component);w.propTypes={data:P().object};const C=w},14647:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>D});var n=a(34575),r=a.n(n),i=a(93913),o=a.n(i),l=a(81506),s=a.n(l),c=a(2205),p=a.n(c),u=a(78585),g=a.n(u),d=a(29754),f=a.n(d),h=a(59713),y=a.n(h),m=a(37699),v=a(48093),P=a(24471),b=a(50704),S=a(25681),E=a(22944),x=a(65460),z=a(22356);const T=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"total":{"type":"PropTypes.number","desc":"The total of data.","default":"0"},"page":{"type":"PropTypes.number","desc":"The valid page.","default":"0"},"pageSize":{"type":"PropTypes.number","desc":"The number of per page.","default":"10"},"pageSizes":{"type":"PropTypes.array","desc":"The array of pageSize.","default":"[5, 10, 15, 20]"},"pageSizeValueField":{"type":"PropTypes.string","desc":"The value field name of PageSize. (default: \\"value\\")","default":"value"},"pageSizeDisplayField":{"type":"PropTypes.string","desc":"The display field name of PageSize. (default: \\"text\\")","default":"text"},"selectedCount":{"type":"PropTypes.number","desc":"The total count of selected.","default":"0"},"selectionVisible":{"type":"PropTypes.bool","desc":"If true, the selectedCount will show.","default":"false"},"totalVisible":{"type":"PropTypes.bool","desc":"If true, the total will show.","default":"true"},"pageSizeVisible":{"type":"PropTypes.bool","desc":"If false, the pageSize choice box will not show.","default":"true"},"pageSizeRightIconCls":{"type":"PropTypes.string","desc":"Use this property to set page size right icon.","default":"fas fa-angle-down"},"prevIconCls":{"type":"PropTypes.string","desc":"Use this property to set prev button icon.","default":"fas fa-angle-left"},"nextIconCls":{"type":"PropTypes.string","desc":"Use this property to set next button icon.","default":"fas fa-angle-right"},"selectionRenderer":{"type":"PropTypes.func"},"totalRenderer":{"type":"PropTypes.func"},"parentEl":{"type":"PropTypes.object"},"onChange":{"type":"PropTypes.func"},"onPageChange":{"type":"PropTypes.func"},"onPageSizeChange":{"type":"PropTypes.func"}}');var w=a(93379),C=a.n(w),R=a(96185);C()(R.Z,{insert:"head",singleton:!1}),R.Z.locals;const D=function(e){p()(i,e);var t,a,n=(t=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=f()(t);if(a){var r=f()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return g()(this,e)});function i(e){var t;return r()(this,i),t=n.call(this,e),y()(s()(t),"show",(function(e){var a=t.state.BriefPaginationVisible;a[e]=!0,t.setState({BriefPaginationVisible:a})})),y()(s()(t),"hide",(function(e){var a=t.state.BriefPaginationVisible;a[e]=!1,t.setState({BriefPaginationVisible:a})})),y()(s()(t),"generateData",(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],a=0;a<e;a++)t.push({id:a,name:"firstName".concat(a)});return t.length})),y()(s()(t),"handlePageChange",(function(e){console.log("Page Changed::",e),t.setState({page:e},(function(){t.resetPage(t.generateData(100),e,t.state.pageSize.value)}))})),y()(s()(t),"handlePageSizeChange",(function(e){console.log("Page Size Changed::",e),t.setState({pageSize:e},(function(){t.resetPage(t.generateData(100),t.state.page,e.value)}))})),y()(s()(t),"resetPage",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.generateData(100),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.page,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.state.pageSize,r=Math.ceil(e/n);a+1>r&&t.setState({pagging:{pageSize:n,page:S.Z.range(r-1,0)}})})),t.pageSizes=[{value:10,text:"10"},{value:20,text:"20"},{value:30,text:"30"},{value:40,text:"40"},{value:50,text:"50"}],t.state={page:0,pageSize:10,BriefPaginationVisible:{}},t}return o()(i,[{key:"render",value:function(){var e=this,t=this.state,a=t.page,n=t.pageSize,r=t.BriefPaginationVisible;return m.createElement("div",{className:"example brief-pagging-examples"},m.createElement("h2",{className:"example-title"},"BriefPagination"),m.createElement("p",null,"A ",m.createElement("span",null,"BriefPagination")," element used for dividing long list, each time only loads a page."),m.createElement("h2",{className:"example-title"},"Examples"),m.createElement(P.Z,null,m.createElement(b.Z,{className:"example-header",title:"With countVisible"}),m.createElement("div",{className:"widget-content"},m.createElement("div",{className:"example-content"},m.createElement("div",{className:"examples-wrapper"},m.createElement("p",null,"A simple ",m.createElement("code",null,"BriefPagination")," example."),m.createElement(v.Z,{countVisible:!0,page:a,total:this.generateData(),pageSize:n.value,pageSizes:this.pageSizes,onPageChange:this.handlePageChange,onPageSizeChange:this.handlePageSizeChange}))))),m.createElement(P.Z,null,m.createElement(b.Z,{className:"example-header",title:"In Dialog"}),m.createElement("div",{className:"widget-content"},m.createElement("div",{className:"example-content"},m.createElement("div",{className:"examples-wrapper"},m.createElement("p",null,"A simple ",m.createElement("code",null,"BriefPagination")," example."),m.createElement(E.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),m.createElement(x.Z,{visible:r[1],onRequestClose:function(){return e.hide(1)}},(function(t){return m.createElement("div",{className:"popover-dialog-content-scroller"},m.createElement(v.Z,{countVisible:!0,parentEl:t,page:a,total:e.generateData(),pageSize:n.value,pageSizes:e.pageSizes,onPageChange:e.handlePageChange,onPageSizeChange:e.handlePageSizeChange}))})))))),m.createElement("h2",{className:"example-title"},"Properties"),m.createElement(z.Z,{data:T}))}}]),i}(m.Component)}}]);
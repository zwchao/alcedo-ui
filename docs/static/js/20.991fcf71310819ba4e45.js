(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{230:function(e,t,n){"use strict";var a=n(50),o=n.n(a),i=n(51),l=n.n(i),r=n(19),s=n.n(r),c=n(52),u=n.n(c),p=n(53),f=n.n(p),d=n(35),h=n.n(d),g=n(9),m=n.n(g),b=n(0),y=n.n(b),v=n(90),C=n.n(v),B=n(237);n(231);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return f()(this,n)}}var k=function(e){u()(n,e);var t=E(n);function n(e){var a;return o()(this,n),a=t.call(this,e),m()(s()(a),"generateData",(function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(P({name:t},a.props.data[t]));return e})),a}return l()(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(B.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),n}(b.Component);k.propTypes={data:C.a.object},t.a=k},231:function(e,t,n){var a=n(91),o=n(232);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);e.exports=o.locals||{}},232:function(e,t,n){(t=n(92)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},238:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var a=n(206),o=n.n(a),i=n(207),l=n.n(i),r=n(50),s=n.n(r),c=n(51),u=n.n(c),p=n(19),f=n.n(p),d=n(52),h=n.n(d),g=n(53),m=n.n(g),b=n(35),y=n.n(b),v=n(9),C=n.n(v),B=n(0),T=n.n(B),P=n(90),E=n.n(P),k=n(226),R=n.n(k),S=n(249),O=n(241),w=n(228),D=n(229),x=n(227);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return m()(this,n)}}var M=function(e){h()(n,e);var t=N(n);function n(e){var a;s()(this,n);for(var o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return a=t.call.apply(t,[this,e].concat(i)),C()(f()(a),"startRipple",(function(e,t){a.buttonInstance&&a.buttonInstance.startRipple(e,t)})),C()(f()(a),"endRipple",(function(){a.buttonInstance&&a.buttonInstance.endRipple()})),C()(f()(a),"triggerRipple",(function(e,t){a.buttonInstance&&a.buttonInstance.triggerRipple(e,t)})),a.button=Object(B.createRef)(),a.buttonInstance=null,a}return u()(n,[{key:"componentDidMount",value:function(){this.buttonInstance=this.button&&this.button.current}},{key:"render",value:function(){var e=this.props,t=e.className,n=l()(e,["className"]);return(T.a.createElement(S.a,o()({},n,{ref:this.button,className:R()("flat-button",C()({},t,t))})))}}]),n}(B.Component);C()(M,"Theme",w.a),C()(M,"TipPosition",D.a),M.propTypes={className:E.a.string,style:E.a.object,theme:E.a.oneOf(x.a.enumerateValue(w.a)),isRounded:E.a.bool,isCircular:E.a.bool,title:E.a.string,value:E.a.any,type:E.a.string,disabled:E.a.bool,isLoading:E.a.bool,disableTouchRipple:E.a.bool,iconCls:E.a.string,rightIconCls:E.a.string,rippleDisplayCenter:E.a.bool,tip:E.a.string,tipPosition:E.a.oneOf(x.a.enumerateValue(O.a.Position)),renderer:E.a.func,onClick:E.a.func},M.defaultProps={theme:w.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:O.a.Position.BOTTOM};var I=M},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(206),o=n.n(a),i=n(207),l=n.n(i),r=n(50),s=n.n(r),c=n(51),u=n.n(c),p=n(19),f=n.n(p),d=n(52),h=n.n(d),g=n(53),m=n.n(g),b=n(35),y=n.n(b),v=n(9),C=n.n(v),B=n(0),T=n.n(B),P=n(90),E=n.n(P),k=n(226),R=n.n(k),S=n(240),O=n(245),w=n(238),D=n(234),x=n(242),N=n(228),M=n(229),I=n(227),V=n(252);function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return m()(this,n)}}var L=function(e){h()(n,e);var t=z(n);function n(e){var a;s()(this,n);for(var o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return a=t.call.apply(t,[this,e].concat(i)),C()(f()(a),"getEl",(function(){return a.pop&&a.pop.current&&a.pop.current.getEl()})),C()(f()(a),"handleOkButtonClick",(function(){var e=a.props,t=e.visible,n=e.onOKButtonClick;t&&n&&n((function(){a.setState({visible:!1},(function(){var e=a.props.onRequestClose;e&&e()}))}))})),C()(f()(a),"handleCancelButtonClick",(function(){var e=a.props,t=e.onCancelButtonClick,n=e.onRequestClose;t&&t(),a.setState({visible:!1},(function(){n&&n()}))})),C()(f()(a),"handleCloseButtonClick",(function(){var e=a.props,t=e.onCloseButtonClick,n=e.onRequestClose;t&&t(),a.setState({visible:!1},(function(){n&&n()}))})),C()(f()(a),"handleRender",(function(){V.a.push(f()(a),{shouldLockBody:a.props.showModal});var e=a.props.onRender;e&&e.apply(void 0,arguments)})),C()(f()(a),"handleDestroy",(function(){V.a.pop(f()(a));var e=a.props.onDestroy;e&&e.apply(void 0,arguments)})),a.pop=Object(B.createRef)(),a}return u()(n,[{key:"componentWillUnmount",value:function(){V.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.className,i=t.modalClassName,r=t.position,s=t.disabled,c=t.showModal,u=t.title,p=t.buttons,f=t.isLoading,d=t.visible,h=t.okButtonVisible,g=t.okButtonText,m=t.okButtonIconCls,b=t.okButtonTheme,y=t.okButtonDisabled,v=t.okButtonIsLoading,P=t.cancelButtonVisible,E=t.cancelButtonText,k=t.cancelButtonIconCls,N=t.cancelButtonDisabled,M=t.cancelButtonIsLoading,I=t.cancelButtonTheme,V=t.closeButtonVisible,z=t.closeIconCls,L=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,l()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"]));return T.a.createElement(S.a,o()({},L,{ref:this.pop,className:R()("dialog",C()({},a,a)),position:r,visible:d,container:T.a.createElement(O.a,{depth:6}),showModal:c,modalClassName:i,onRender:this.handleRender,onDestroy:this.handleDestroy}),(function(t){return T.a.createElement(B.Fragment,null,T.a.createElement("div",{className:"dialog-title"},u,V?T.a.createElement(x.a,{className:"dialog-title-close-button",iconCls:z,disabled:s,onClick:e.handleCloseButtonClick}):null),T.a.createElement("div",{className:"dialog-content"},"function"==typeof n?n(t&&t.querySelector(".dialog-content"),t):n),T.a.createElement("div",{className:"dialog-buttons"},p?B.Children.map(p,(function(e){return Object(B.cloneElement)(e,{isLoading:f,disabled:s})})):null,!p&&h?T.a.createElement(D.a,{className:"ok-button",value:g,iconCls:m,theme:b,disabled:y,isLoading:f||v,disableTouchRipple:!0,onClick:e.handleOkButtonClick}):null,!p&&P?T.a.createElement(w.a,{className:"cancel-button",value:E,iconCls:k,theme:I,disabled:N,isLoading:f||M,disableTouchRipple:!0,onClick:e.handleCancelButtonClick}):null))}))}}]),n}(B.Component);C()(L,"ButtonTheme",N.a),C()(L,"Position",M.a),L.propTypes={children:E.a.any,className:E.a.string,modalClassName:E.a.string,style:E.a.object,parentEl:E.a.object,position:E.a.oneOf(I.a.enumerateValue(M.a)),disabled:E.a.bool,visible:E.a.bool,showModal:E.a.bool,title:E.a.any,isBlurClose:E.a.bool,isLoading:E.a.bool,okButtonVisible:E.a.bool,okButtonText:E.a.string,okButtonIconCls:E.a.string,okButtonDisabled:E.a.bool,okButtonIsLoading:E.a.bool,okButtonTheme:E.a.oneOf(I.a.enumerateValue(N.a)),cancelButtonVisible:E.a.bool,cancelButtonText:E.a.string,cancelButtonIconCls:E.a.string,cancelButtonDisabled:E.a.bool,cancelButtonIsLoading:E.a.bool,cancelButtonTheme:E.a.oneOf(I.a.enumerateValue(N.a)),closeButtonVisible:E.a.bool,closeIconCls:E.a.string,isEscClose:E.a.bool,buttons:E.a.any,onRender:E.a.func,onRequestClose:E.a.func,onOKButtonClick:E.a.func,onCancelButtonClick:E.a.func,onCloseButtonClick:E.a.func,onDestroy:E.a.func,onModalMouseDown:E.a.func,onModalMouseMove:E.a.func,onModalMouseUp:E.a.func,onModalMouseEnter:E.a.func,onModalMouseLeave:E.a.func,onModalClick:E.a.func},L.defaultProps={parentEl:document.body,position:M.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:N.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:N.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var j=L},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n(206),o=n.n(a),i=n(207),l=n.n(i),r=n(50),s=n.n(r),c=n(51),u=n.n(c),p=n(19),f=n.n(p),d=n(52),h=n.n(d),g=n(53),m=n.n(g),b=n(35),y=n.n(b),v=n(9),C=n.n(v),B=n(0),T=n.n(B),P=n(90),E=n.n(P),k=n(226),R=n.n(k),S=n(254),O=n(228),w=n(229),D=n(227);n(244);function x(e){return(window.innerWidth-e.offsetWidth)/2}function N(e){return(window.innerHeight-e.offsetHeight)/2}function M(e,t,n){if(t){var a={};switch(n){case w.a.TOP_LEFT:a.left=0,a.top=0;break;case w.a.TOP:a.left=x(t),a.top=0;break;case w.a.TOP_RIGHT:a.right=0,a.top=0;break;case w.a.BOTTOM_LEFT:a.left=0,a.bottom=0;break;case w.a.BOTTOM:a.left=x(t),a.bottom=0;break;case w.a.BOTTOM_RIGHT:a.right=0,a.bottom=0;break;case w.a.LEFT_TOP:a.left=0,a.top=0;break;case w.a.LEFT:a.left=0,a.top=N(t);break;case w.a.LEFT_BOTTOM:a.left=0,a.bottom=0;break;case w.a.RIGHT_TOP:a.right=0,a.top=0;break;case w.a.RIGHT:a.right=0,a.top=N(t);break;case w.a.RIGHT_BOTTOM:a.right=0,a.bottom=0;break;case w.a.CENTER:a.left=x(t),a.top=N(t)}return a}}var I={getStyle:M,setStyle:function(e,t,n){var a=M(0,t,n);if(a)for(var o in t.style.left=t.style.right=t.style.top=t.style.bottom=null,a)t.style[o]=a[o]+"px"}};function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return m()(this,n)}}var z=function(e){h()(n,e);var t=V(n);function n(e){var a;s()(this,n);for(var o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];return a=t.call.apply(t,[this,e].concat(i)),C()(f()(a),"getEl",(function(){return a.pop&&a.pop.current&&a.pop.current.getEl()})),C()(f()(a),"resetPosition",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.getEl(),t=a.props,n=t.parentEl,o=t.position;I.setStyle(n,e,o)})),a.pop=Object(B.createRef)(),a}return u()(n,[{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.container,i=t.className,r=t.theme,s=t.position,c=t.isAnimated,u=(t.isEscClose,t.isBlurClose,l()(t,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose"]));return T.a.createElement(S.a,o()({},u,{ref:this.pop,className:R()("position-pop",(e={},C()(e,"theme-".concat(r),r),C()(e,"position-pop-".concat(s),s),C()(e,"position-pop-animated",c),C()(e,i,i),e)),container:a,isAnimated:c,position:s,resetPosition:this.resetPosition}),(function(e){return"function"==typeof n?n(e):n}))}}]),n}(B.Component);C()(z,"Position",w.a),C()(z,"Theme",O.a),z.propTypes={children:E.a.any,className:E.a.string,style:E.a.object,visible:E.a.bool,theme:E.a.oneOf(D.a.enumerateValue(O.a)),parentEl:E.a.object,position:E.a.oneOf(D.a.enumerateValue(w.a)),isAnimated:E.a.bool,depth:E.a.number,isBlurClose:E.a.bool,isEscClose:E.a.bool,container:E.a.node,showModal:E.a.bool,modalClassName:E.a.string,onRender:E.a.func,onRendered:E.a.func,onDestroy:E.a.func,onDestroyed:E.a.func,onWheel:E.a.func,onModalMouseDown:E.a.func,onModalMouseMove:E.a.func,onModalMouseUp:E.a.func,onModalMouseEnter:E.a.func,onModalMouseLeave:E.a.func,onModalClick:E.a.func},z.defaultProps={parentEl:document.body,depth:2,visible:!1,theme:O.a.DEFAULT,position:w.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,container:T.a.createElement("div",null),showModal:!1};var L=z},655:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"total":{"type":"PropTypes.number","desc":"The total of data.","default":"0"},"page":{"type":"PropTypes.number","desc":"The valid page.","default":"0"},"pageSize":{"type":"PropTypes.number","desc":"The number of per page.","default":"10"},"pageSizes":{"type":"PropTypes.array","desc":"The array of pageSize.","default":"[5, 10, 15, 20]"},"pageSizeValueField":{"type":"PropTypes.string","desc":"The value field name of PageSize. (default: \\"value\\")","default":"value"},"pageSizeDisplayField":{"type":"PropTypes.string","desc":"The display field name of PageSize. (default: \\"text\\")","default":"text"},"selectedCount":{"type":"PropTypes.number","desc":"The total count of selected.","default":"0"},"selectionVisible":{"type":"PropTypes.bool","desc":"If true, the selectedCount will show.","default":"false"},"totalVisible":{"type":"PropTypes.bool","desc":"If true, the total will show.","default":"true"},"pageSizeVisible":{"type":"PropTypes.bool","desc":"If false, the pageSize choice box will not show.","default":"true"},"pageSizeRightIconCls":{"type":"PropTypes.string","desc":"Use this property to set page size right icon.","default":"fas fa-angle-down"},"prevIconCls":{"type":"PropTypes.string","desc":"Use this property to set prev button icon.","default":"fas fa-angle-left"},"nextIconCls":{"type":"PropTypes.string","desc":"Use this property to set next button icon.","default":"fas fa-angle-right"},"selectionRenderer":{"type":"PropTypes.func"},"totalRenderer":{"type":"PropTypes.func"},"parentEl":{"type":"PropTypes.object"},"onChange":{"type":"PropTypes.func"},"onPageChange":{"type":"PropTypes.func"},"onPageSizeChange":{"type":"PropTypes.func"}}')},656:function(e,t,n){var a=n(91),o=n(657);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);e.exports=o.locals||{}},657:function(e,t,n){(t=n(92)(!1)).push([e.i,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""]),e.exports=t},787:function(e,t,n){"use strict";n.r(t);var a=n(50),o=n.n(a),i=n(51),l=n.n(i),r=n(19),s=n.n(r),c=n(52),u=n.n(c),p=n(53),f=n.n(p),d=n(35),h=n.n(d),g=n(9),m=n.n(g),b=n(0),y=n.n(b),v=n(342),C=n(236),B=n(235),T=n(261),P=n(234),E=n(239),k=n(230),R=n(655);n(656);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h()(e);if(t){var o=h()(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return f()(this,n)}}var O=function(e){u()(n,e);var t=S(n);function n(e){var a;return o()(this,n),a=t.call(this,e),m()(s()(a),"show",(function(e){var t=a.state.BriefPaginationVisible;t[e]=!0,a.setState({BriefPaginationVisible:t})})),m()(s()(a),"hide",(function(e){var t=a.state.BriefPaginationVisible;t[e]=!1,a.setState({BriefPaginationVisible:t})})),m()(s()(a),"generateData",(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],n=0;n<e;n++)t.push({id:n,name:"firstName".concat(n)});return t.length})),m()(s()(a),"handlePageChange",(function(e){console.log("Page Changed::",e),a.setState({page:e},(function(){a.resetPage(a.generateData(100),e,a.state.pageSize.value)}))})),m()(s()(a),"handlePageSizeChange",(function(e){console.log("Page Size Changed::",e),a.setState({pageSize:e},(function(){a.resetPage(a.generateData(100),a.state.page,e.value)}))})),m()(s()(a),"resetPage",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.generateData(100),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.page,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.state.pageSize,o=Math.ceil(e/n);t+1>o&&a.setState({pagging:{pageSize:n,page:T.a.range(o-1,0)}})})),a.pageSizes=[{value:10,text:"10"},{value:20,text:"20"},{value:30,text:"30"},{value:40,text:"40"},{value:50,text:"50"}],a.state={page:0,pageSize:10,BriefPaginationVisible:{}},a}return l()(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.page,a=t.pageSize,o=t.BriefPaginationVisible;return y.a.createElement("div",{className:"example brief-pagging-examples"},y.a.createElement("h2",{className:"example-title"},"BriefPagination"),y.a.createElement("p",null,"A ",y.a.createElement("span",null,"BriefPagination")," element used for dividing long list, each time only loads a page."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(C.a,null,y.a.createElement(B.a,{className:"example-header",title:"With countVisible"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"A simple ",y.a.createElement("code",null,"BriefPagination")," example."),y.a.createElement(v.a,{countVisible:!0,page:n,total:this.generateData(),pageSize:a.value,pageSizes:this.pageSizes,onPageChange:this.handlePageChange,onPageSizeChange:this.handlePageSizeChange}))))),y.a.createElement(C.a,null,y.a.createElement(B.a,{className:"example-header",title:"In Dialog"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"A simple ",y.a.createElement("code",null,"BriefPagination")," example."),y.a.createElement(P.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),y.a.createElement(E.a,{visible:o[1],onRequestClose:function(){return e.hide(1)}},(function(t){return y.a.createElement("div",{className:"popover-dialog-content-scroller"},y.a.createElement(v.a,{countVisible:!0,parentEl:t,page:n,total:e.generateData(),pageSize:a.value,pageSizes:e.pageSizes,onPageChange:e.handlePageChange,onPageSizeChange:e.handlePageSizeChange}))})))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(k.a,{data:R}))}}]),n}(b.Component);t.default=O}}]);
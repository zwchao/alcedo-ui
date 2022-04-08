"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5561],{18726:(t,e,n)=>{n.d(e,{Z:()=>F});var o=n(87462),a=n(45987),r=n(15671),l=n(43144),s=n(97326),i=n(60136),c=n(82963),u=n(61120),d=n(4942),f=n(37699),p=n(45697),b=n.n(p),h=n(2782),v=n(96453),g=n(47655),m=n(41844),y=n.n(m),Z=["className","style","index","isTabFullWidth","activated","draggable","data","activatedIndex"];var T=function(t){(0,i.Z)(b,t);var e,n,p=(e=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,u.Z)(e);if(n){var a=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function b(t){var e;(0,r.Z)(this,b);for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return e=p.call.apply(p,[this,t].concat(o)),(0,d.Z)((0,s.Z)(e),"handleMouseDown",(function(t){var n,o,a=e.props,r=a.data,l=a.index;null===(n=(o=e.props).onMouseDown)||void 0===n||n.call(o,r,l,t)})),(0,d.Z)((0,s.Z)(e),"handleMouseUp",(function(t){var n,o,a=e.props,r=a.data,l=a.index;null===(n=(o=e.props).onMouseUp)||void 0===n||n.call(o,r,l,t)})),(0,d.Z)((0,s.Z)(e),"handleClick",(function(t){var n,o,a=e.props,r=a.data,l=a.index;null===(n=(o=e.props).onClick)||void 0===n||n.call(o,r,l,t)})),e}return(0,l.Z)(b,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.style,r=t.index,l=t.isTabFullWidth,s=t.activated,i=t.draggable,c=(t.data,t.activatedIndex,(0,a.Z)(t,Z)),u=f.createElement(g.Z,(0,o.Z)({},c,{className:y()("tab-button",(0,d.Z)({activated:s},e,e)),style:n,container:f.createElement("div",null),disableTouchRipple:!0,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onClick:this.handleClick}));return l?u:f.createElement(h._l,{key:r,draggableId:""+r,index:r,isDragDisabled:!i},(function(t){return f.createElement("div",(0,o.Z)({ref:t.innerRef,className:"tab-button-wrapper",style:t.draggableStyle},t.draggableProps,t.dragHandleProps),u)}))}}]),b}(f.Component);T.propTypes={children:b().any,className:b().string,style:b().object,data:b().shape({value:b().oneOfType([b().string,b().number]),disabled:b().bool,isLoading:b().bool,disableTouchRipple:b().bool,iconCls:b().string,iconPosition:b().string,renderer:b().any,onActive:b().func}).isRequired,activatedIndex:b().number,index:b().number,activated:b().bool,isTabFullWidth:b().bool,draggable:b().bool,idField:b().string,onMouseDown:b().func,onMouseUp:b().func,onClick:b().func},T.defaultProps={activatedIndex:0,index:0,activated:!1,isTabFullWidth:!0,draggable:!1};const O=T;var R=n(65248),S=n(5705),C=n(23279),I=n.n(C),w=n(72),k=n(4798),E=n(25681),x=["style","value","renderer","tabButtonRenderer","tabContentRenderer","onActive"];function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){(0,d.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=function(t){(0,i.Z)(b,t);var e,n,p=(e=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,u.Z)(e);if(n){var a=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function b(t){var e;(0,r.Z)(this,b);for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return e=p.call.apply(p,[this,t].concat(o)),(0,d.Z)((0,s.Z)(e),"isTabsOverflow",(function(){if(!e.tabsEl)return!1;var t=e.tabsEl.querySelector(".tab-buttons-wrapper");return!!t&&Math.floor(e.tabsEl.offsetWidth)<Math.floor(t.offsetWidth)})),(0,d.Z)((0,s.Z)(e),"isScrollLeftButtonDisabled",(function(t){return t<=0})),(0,d.Z)((0,s.Z)(e),"isScrollRightButtonDisabled",(function(t){return!!e.tabsEl&&t>=e.tabsEl.scrollWidth-e.tabsEl.offsetWidth})),(0,d.Z)((0,s.Z)(e),"getScrollerStyle",(function(){var t=k.ZP.getSize(S.Z.HORIZONTAL);return!t||t<=0?null:{height:"calc(100% + ".concat(t,"px)"),marginBottom:-t}})),(0,d.Z)((0,s.Z)(e),"clearTabsScrollTimeout",(function(){e.tabsScrollTimeout&&clearTimeout(e.tabsScrollTimeout)})),(0,d.Z)((0,s.Z)(e),"handleOnTabsScroll",(function(t){e.setState({scrollLeft:t.target.scrollLeft})})),(0,d.Z)((0,s.Z)(e),"handleTabsScroll",(function(t,n){if(e.tabsEl){var o=e.props,a=o.scrollStep,r=o.scrollInterval,l=o.keepScrollingWait;e.tabsEl.scrollLeft+=(t===R.Z.LEFT?-1:1)*a,e.setState({scrollLeft:e.tabsEl.scrollLeft}),e.clearTabsScrollTimeout(),e.tabsScrollTimeout=setTimeout((function(){return e.handleTabsScroll(t,!0)}),!0===n?r:l)}})),(0,d.Z)((0,s.Z)(e),"tabsScrollLeft",(function(t){var n,o;e.handleTabsScroll(R.Z.LEFT),null===(n=(o=e.props).onScrollLeftButtonMouseDown)||void 0===n||n.call(o,t)})),(0,d.Z)((0,s.Z)(e),"tabsScrollRight",(function(t){var n,o;e.handleTabsScroll(R.Z.RIGHT),null===(n=(o=e.props).onScrollRightButtonMouseDown)||void 0===n||n.call(o,t)})),(0,d.Z)((0,s.Z)(e),"handleInkBarSizeChange",(function(){if(e.tabsEl){var t=e.tabsEl.querySelectorAll(".tab-buttons .tab-button");if(t&&!(t.length<1)){var n=t[E.ZP.range(e.props.activatedIndex,0,t.length-1)];n&&(n.offsetWidth!==e.state.inkBarWidth&&e.setState({inkBarWidth:n.offsetWidth}),n.offsetLeft!==e.state.inkBarOffsetLeft&&e.setState({inkBarOffsetLeft:n.offsetLeft}))}}})),(0,d.Z)((0,s.Z)(e),"handleTabsOverflowChange",(function(){var t,n,o=e.props.isTabsOverflow,a=e.isTabsOverflow();a!==o&&(a&&e.tabsEl&&e.setState({scrollLeft:e.tabsEl.scrollLeft}),null===(t=(n=e.props).onTabsOverflowChange)||void 0===t||t.call(n,!o))})),(0,d.Z)((0,s.Z)(e),"handleResize",I()((function(){e.handleInkBarSizeChange(),e.handleTabsOverflowChange()}),150)),e.tabs=(0,f.createRef)(),e.tabsEl=null,e.scrollLeftButton=(0,f.createRef)(),e.scrollRightButton=(0,f.createRef)(),e.tabsScrollTimeout=null,e.state={scrollLeft:0,inkBarWidth:0,inkBarOffsetLeft:0},e}return(0,l.Z)(b,[{key:"componentDidMount",value:function(){var t;this.tabsEl=null===(t=this.tabs)||void 0===t?void 0:t.current,w.Z.addEvent(window,"resize",this.handleResize),w.Z.addEvent(document,"mouseup",this.clearTabsScrollTimeout),this.handleInkBarSizeChange(),this.handleTabsOverflowChange()}},{key:"componentDidUpdate",value:function(t,e,n){this.handleInkBarSizeChange(),this.handleTabsOverflowChange()}},{key:"componentWillUnmount",value:function(){w.Z.removeEvent(window,"resize",this.handleResize),w.Z.removeEvent(document,"mouseup",this.clearTabsScrollTimeout)}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,r=t.style,l=t.isTabFullWidth,s=t.isInkBarHidden,i=t.data,c=t.activatedIndex,u=t.isTabsOverflow,p=t.draggable,b=t.idField,g=t.scrollLeftIconCls,m=t.scrollRightIconCls,Z=t.onTabMouseDown,T=t.onTabMouseUp,R=t.onTabClick,S=t.onTabButtonDragStart,C=t.onTabButtonDragEnd,I=this.state,w=I.scrollLeft,k=I.inkBarWidth,E=I.inkBarOffsetLeft,B=this.getScrollerStyle();return f.createElement(h.Z5,{onDragStart:S,onDragEnd:C},f.createElement("div",{className:y()("tabs",(0,d.Z)({"auto-width":!l},n,n)),style:r},f.createElement("div",{ref:this.tabs,className:"tabs-scroller",style:B,onScroll:this.handleOnTabsScroll},f.createElement(h.bK,{droppableId:"droppable",direction:"horizontal"},(function(t){return f.createElement("div",(0,o.Z)({className:"tab-buttons-wrapper",ref:t.innerRef},t.droppableProps),f.createElement("div",{className:"tab-buttons"},(null==i?void 0:i.map((function(t,e){var n=t.style,r=t.value,s=t.renderer,u=t.tabButtonRenderer,d=(t.tabContentRenderer,t.onActive,(0,a.Z)(t,x)),h=c===e,v=f.createElement(O,(0,o.Z)({},d,{key:b&&t[b]||e,style:D(D({},n),{},{width:l?"".concat(100/i.length,"%"):"auto"}),data:t,value:r,index:e,isTabFullWidth:l,activated:h,draggable:p,renderer:s&&"function"==typeof s?s.bind(null,r,h):s,onMouseDown:Z,onMouseUp:T,onClick:R}));return u?"function"==typeof u?u(r,h,v):u:v})))||null,t.placeholder))})),s?null:f.createElement("div",{className:"ink-bar",style:{bottom:B?0:20,width:k,transform:"translateX(".concat(E,"px)")}}),e),u?f.createElement(f.Fragment,null,f.createElement(v.Z,{ref:this.scrollLeftButton,className:"tab-button tab-scroll-left-button",iconCls:g,disabled:this.isScrollLeftButtonDisabled(w),onMouseDown:this.tabsScrollLeft}),f.createElement(v.Z,{ref:this.scrollRightButton,className:"tab-button tab-scroll-right-button",iconCls:m,disabled:this.isScrollRightButtonDisabled(w),onMouseDown:this.tabsScrollRight})):null))}}]),b}(f.Component);P.propTypes={children:b().any,className:b().string,style:b().object,data:b().arrayOf(b().shape({value:b().oneOfType([b().string,b().number]),disabled:b().bool,isLoading:b().bool,disableTouchRipple:b().bool,iconCls:b().string,iconPosition:b().string,renderer:b().any,tabButtonRenderer:b().any,tabContentRenderer:b().any,onActive:b().func})).isRequired,activatedIndex:b().number,isTabFullWidth:b().bool,isInkBarHidden:b().bool,isTabsOverflow:b().bool,draggable:b().bool,idField:b().string,scrollLeftIconCls:b().string,scrollRightIconCls:b().string,scrollStep:b().number,scrollInterval:b().number,keepScrollingWait:b().number,onTabClick:b().func,onTabMouseDown:b().func,onTabMouseUp:b().func,onTabsOverflowChange:b().func,onTabButtonDragStart:b().func,onTabButtonDragEnd:b().func,onScrollLeftButtonMouseDown:b().func,onScrollRightButtonMouseDown:b().func},P.defaultProps={data:[],activatedIndex:0,isTabFullWidth:!0,isInkBarHidden:!1,draggable:!1,scrollLeftIconCls:"fas fa-chevron-left",scrollRightIconCls:"fas fa-chevron-right",scrollStep:100,scrollInterval:100,keepScrollingWait:250};const L=P;var N=n(19605),M=n(81540),j=["children","tabsChildren","className","style","isAnimated"];var W=function(t){(0,i.Z)(b,t);var e,n,p=(e=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,u.Z)(e);if(n){var a=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return(0,c.Z)(this,t)});function b(t){var e;(0,r.Z)(this,b);for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return e=p.call.apply(p,[this,t].concat(o)),(0,d.Z)((0,s.Z)(e),"getRenderer",(function(t){return t&&t.tabContentRenderer?"function"==typeof t.tabContentRenderer?t.tabContentRenderer(t):t.tabContentRenderer:null})),(0,d.Z)((0,s.Z)(e),"handleTabClick",(function(t,n,o){var a,r,l,s;null===(a=(r=e.props).onTabClick)||void 0===a||a.call(r,t,n,o),n!==e.state.activatedIndex&&!1!==(null===(l=(s=e.props).beforeIndexChange)||void 0===l?void 0:l.call(s,n,t,o))&&e.setState({activatedIndex:n},(function(){var a,r,l;null===(a=t.onActive)||void 0===a||a.call(t,t,n,o),null===(r=(l=e.props).onIndexChange)||void 0===r||r.call(l,n,t,o)}))})),(0,d.Z)((0,s.Z)(e),"handleTabsOverflowChange",(function(t){e.setState({isTabsOverflow:t})})),(0,d.Z)((0,s.Z)(e),"handleTabButtonDragEnd",(function(t){if(t&&"draggableId"in t&&t.source&&"index"in t.source&&t.destination&&"index"in t.destination){var n=e.state.tabs;M.ZP.reorder(n,t.source.index,t.destination.index);var o=e.state.activatedIndex,a={tabs:n};o===t.source.index?a.activatedIndex=t.destination.index:o===t.destination.index?a.activatedIndex=t.source.index:o>t.source.index&&o<t.destination.index?a.activatedIndex=o-1:o<t.source.index&&o>t.destination.index&&(a.activatedIndex=o+1),e.setState(a,(function(){var o,a,r,l;null===(o=(a=e.props).onTabButtonDragEnd)||void 0===o||o.call(a,t),null===(r=(l=e.props).onTabsSequenceChange)||void 0===r||r.call(l,n)}))}})),e.state={tabs:t.tabs,activatedIndex:t.activatedIndex,isTabsOverflow:!1},e}return(0,l.Z)(b,[{key:"render",value:function(){var t=this,e=this.props,n=e.children,r=e.tabsChildren,l=e.className,s=e.style,i=e.isAnimated,c=(0,a.Z)(e,j),u=this.state,p=u.tabs,b=u.activatedIndex,h=u.isTabsOverflow,v=100/p.length;return f.createElement("div",{className:y()("tab",(0,d.Z)({animated:i,"tabs-overflow":h},l,l)),style:s},f.createElement(L,(0,o.Z)({},c,{data:p,activatedIndex:b,isTabsOverflow:h,onTabClick:this.handleTabClick,onTabsOverflowChange:this.handleTabsOverflowChange,onTabButtonDragEnd:this.handleTabButtonDragEnd}),r),f.createElement("div",{className:"tab-content-wrapper"},i?f.createElement("div",{className:"tab-content-scroller",style:{width:"".concat(100*p.length,"%"),transform:"translate(".concat(-b*v,"%, 0)")}},(null==p?void 0:p.map((function(e,n){return f.createElement("div",{key:n,className:"tab-content",style:{width:"".concat(v,"%")}},t.getRenderer(e))})))||null):f.createElement("div",{className:"tab-content"},p?this.getRenderer(p[b]):null)),n)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=N.Z.getDerivedState(t,e,"tabs");return{prevProps:t,tabs:n,activatedIndex:E.ZP.range(N.Z.getDerivedState(t,e,"activatedIndex"),0,n.length-1)}}}]),b}(f.Component);W.propTypes={children:b().any,tabsChildren:b().any,className:b().string,style:b().object,tabs:b().arrayOf(b().shape({className:b().string,style:b().object,value:b().oneOfType([b().string,b().number]),disabled:b().bool,isLoading:b().bool,disableTouchRipple:b().bool,iconCls:b().string,iconPosition:b().string,renderer:b().any,tabButtonRenderer:b().any,tabContentRenderer:b().any,onActive:b().func})).isRequired,activatedIndex:b().number,isTabFullWidth:b().bool,isInkBarHidden:b().bool,isAnimated:b().bool,draggable:b().bool,idField:b().string,scrollLeftIconCls:b().string,scrollRightIconCls:b().string,scrollStep:b().number,scrollInterval:b().number,keepScrollingWait:b().number,beforeIndexChange:b().func,onIndexChange:b().func,onTabClick:b().func,onTabMouseDown:b().func,onTabMouseUp:b().func,onTabButtonDragStart:b().func,onTabButtonDragEnd:b().func,onTabsSequenceChange:b().func,onScrollLeftButtonMouseDown:b().func,onScrollRightButtonMouseDown:b().func},W.defaultProps={tabs:[],activatedIndex:0,isTabFullWidth:!0,isInkBarHidden:!1,isAnimated:!0,draggable:!1,scrollLeftIconCls:"fas fa-chevron-left",scrollRightIconCls:"fas fa-chevron-right",scrollStep:100,scrollInterval:100,keepScrollingWait:250};const F=W},229:(t,e,n)=>{n.d(e,{Z:()=>M});var o=n(42982),a=n(71002),r=n(87462),l=n(45987),s=n(15671),i=n(43144),c=n(97326),u=n(60136),d=n(82963),f=n(61120),p=n(4942),b=n(37699),h=n(45697),v=n.n(h),g=n(26256),m=n(79958),y=n(41844),Z=n.n(y),T=n(22944),O=n(77538),R=n(81540);var S=function(t){(0,u.Z)(a,t);var e,n,o=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,f.Z)(e);if(n){var a=(0,f.Z)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return(0,d.Z)(this,t)});function a(t){var e;(0,s.Z)(this,a);for(var n=arguments.length,r=new Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];return e=o.call.apply(o,[this,t].concat(r)),(0,p.Z)((0,c.Z)(e),"getIconCls",(function(){switch(e.props.type){case O.Z.SUCCESS:return"fas fa-check-circle";case O.Z.WARNING:return"fas fa-exclamation-triangle";case O.Z.ERROR:return"fas fa-times-circle";default:return"fas fa-info-circle"}})),(0,p.Z)((0,c.Z)(e),"handleClick",(function(t){var n=e.props,o=n.onRequestClose,a=n.toastsId;o&&o(a)})),e.unrenderTimeout=null,e.toast=(0,b.createRef)(),e.state={hidden:!0,leave:!1},e}return(0,i.Z)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.toastsId,o=e.duration,a=e.onRequestClose;if(this.toast&&this.toast.current){var r=(0,m.findDOMNode)(this.toast.current);r.style.width=r.clientWidth+"px",r.style.height=r.clientHeight+"px"}o>0&&(this.unrenderTimeout=setTimeout((function(){t.setState({hidden:!0,leave:!0},(function(){setTimeout((function(){a&&a(n)}),500)}))}),o)),setTimeout((function(){t.setState({hidden:!1})}),0)}},{key:"componentWillUnmount",value:function(){this.unrenderTimeout&&clearTimeout(this.unrenderTimeout)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.style,o=t.type,a=t.message,r=t.iconCls,l=this.state,s=l.hidden,i=l.leave;return b.createElement(T.Z,{ref:this.toast,className:Z()("toast",(0,p.Z)({hidden:s,leave:i},e,e)),style:n,theme:o,iconCls:"".concat(r||this.getIconCls()," toast-icon"),value:a,onClick:this.handleClick})}}]),a}(b.Component);(0,p.Z)(S,"Type",O.Z),S.propTypes={className:v().string,style:v().object,toastsId:v().number,type:v().oneOf(R.ZP.enumerateValue(O.Z)),message:v().any,iconCls:v().string,duration:v().number,onRequestClose:v().func},S.defaultProps={toastsId:0,type:O.Z.INFO,duration:2500};const C=S;var I=n(65248),w=n(50361),k=n.n(w),E=0;const x=function(){return E++},B=function(t){return t!==I.Z.BOTTOM_LEFT&&t!==I.Z.BOTTOM&&t!==I.Z.BOTTOM_RIGHT};var D=["className","position","duration","onToastPop"];function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){(0,p.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var N=function(t){(0,u.Z)(v,t);var e,n,h=(e=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=(0,f.Z)(e);if(n){var a=(0,f.Z)(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return(0,d.Z)(this,t)});function v(t){var e;(0,s.Z)(this,v);for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return e=h.call.apply(h,[this,t].concat(o)),(0,p.Z)((0,c.Z)(e),"addToast",(function(t){var n=e.state.toasts;B(e.props.position)?n.push(L(L({},t),{},{toastsId:x()})):n.unshift(L(L({},t),{},{toastsId:x()})),e.setState({toasts:n,visible:!0},(function(){var t,n;return null===(t=e.popInstance)||void 0===t||null===(n=t.resetPosition)||void 0===n?void 0:n.call(t)}))})),(0,p.Z)((0,c.Z)(e),"removeToast",(function(t){var n=e.state.toasts;!n||n.length<1||(n.splice(n.findIndex((function(e){return e.toastsId===t})),1),e.setState({toasts:n},(function(){n.length<1&&e.setState({visible:!1},(function(){var t,n;return null===(t=e.popInstance)||void 0===t||null===(n=t.resetPosition)||void 0===n?void 0:n.call(t)}))})))})),e.pop=(0,b.createRef)(),e.popInstance=null,e.state={visible:!1,toasts:[]},e}return(0,i.Z)(v,[{key:"componentDidMount",value:function(){var t;this.popInstance=null===(t=this.pop)||void 0===t?void 0:t.current}},{key:"componentDidUpdate",value:function(t,e,n){var o,a,r,l;this.props.toasts&&this.props.toasts.length>0&&(null===(o=this.popInstance)||void 0===o||null===(a=o.resetPosition)||void 0===a||a.call(o),null===(r=(l=this.props).onToastPop)||void 0===r||r.call(l))}},{key:"render",value:function(){var t,e=this,n=this.props,o=n.className,a=n.position,s=n.duration,i=(n.onToastPop,(0,l.Z)(n,D)),c=this.state,u=c.toasts,d=c.visible;return b.createElement(g.Z,(0,r.Z)({},i,{ref:this.pop,className:Z()("toaster",(t={},(0,p.Z)(t,"toaster-".concat(a),a),(0,p.Z)(t,o,o),t)),visible:d,position:a}),(null==u?void 0:u.map((function(t){return b.createElement(C,(0,r.Z)({},t,{key:t.toastsId,duration:"duration"in t?t.duration:s,onRequestClose:e.removeToast}))})))||null)}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(!t.toasts||t.toasts.length<1)return null;for(var n=k()(t.toasts),r=0,l=n.length;r<l;r++)"object"!==(0,a.Z)(n[r])&&(n[r]={message:n[r]}),n[r].toastsId=x();return{prevProps:t,toasts:n=B(t.position)?[].concat((0,o.Z)(e.toasts),(0,o.Z)(n)):[].concat((0,o.Z)(n.reverse()),(0,o.Z)(e.toasts)),visible:!0}}}]),v}(b.Component);(0,p.Z)(N,"Type",O.Z),(0,p.Z)(N,"Position",I.Z),N.propTypes={className:v().string,style:v().object,parentEl:v().object,toasts:v().arrayOf(v().oneOfType([v().shape({className:v().string,style:v().object,type:v().oneOf(R.ZP.enumerateValue(O.Z)),message:v().string,iconCls:v().string,duration:v().number}),v().string,v().number])),position:v().oneOf(R.ZP.enumerateValue(I.Z)),duration:v().number,onToastPop:v().func},N.defaultProps={parentEl:document.body,position:I.Z.TOP,duration:2500};const M=N}}]);
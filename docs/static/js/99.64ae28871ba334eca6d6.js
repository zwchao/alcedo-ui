(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{110:function(e,n,t){e.exports=t(17)(104)},2:function(e,n,t){e.exports=t(17)(2)},450:function(e,n,t){"use strict";var a,o,i=t(0),r=t.n(i),l=t(387),u=t.n(l),s=t(388),c=t.n(s),p=t(109),m=t.n(p),d=t(10),v=t.n(d),f=t(108),h=t.n(f),g=t(7),x=t.n(g),b=t(9),y=t.n(b),k=t(1),w=t.n(k),E=t(402),M=t.n(E),N=t(471),C=t(482),_=t(404),z=t(419),H=(t(403),o=a=function(e){function n(e){var t;v()(this,n);for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var r=x()(this,(t=n.__proto__||m()(n)).call.apply(t,[this,e].concat(o)));return r.clickHandler=function(e){var n=r.props,t=n.disabled,a=n.isLoading,o=n.onClick;!t&&!a&&o&&o(e)},r.startRipple=function(e){r.refs.touchRipple.addRipple(e)},r.endRipple=function(){r.refs.touchRipple.removeRipple()},r}return y()(n,e),h()(n,[{key:"render",value:function(){var e,n=this.props,t=n.className,a=n.theme,o=n.iconCls,i=n.disabled,l=n.isLoading,s=n.tip,p=n.tipPosition,m=c()(n,["className","theme","iconCls","disabled","isLoading","tip","tipPosition"]),d=M()("icon-anchor",(e={},u()(e,"theme-"+a,a),u()(e,t,t),e));return w.a.createElement(z.a,{text:s,position:p},w.a.createElement("a",r()({},m,{className:d,disabled:i||l,onClick:this.clickHandler}),l?w.a.createElement(N.a,{size:"small"}):o?w.a.createElement("i",{className:"icon-anchor-icon "+o,"aria-hidden":"true"}):null,i||l?null:w.a.createElement(C.a,{ref:"touchRipple",className:i||l?"hidden":"",displayCenter:!0})))}}]),n}(k.Component),a.Theme=_.a,o);H.defaultProps={theme:_.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",tipPosition:z.a.Position.BOTTOM};var L=H;t.d(n,"a",function(){return L})},451:function(e,n,t){"use strict";var a=t(34),o=function(e){return function(n){n(Object(a.push)(e))}},i=function(e){return function(n){n(Object(a.replace)(e))}},r=function(e){return function(n){n(Object(a.go)(e))}},l=function(){return function(e){e(Object(a.goBack)())}},u=function(){return function(e){e(Object(a.goForward)())}},s=t(3),c=function(){return{type:s.g}},p=function(){return function(e){e({type:s.h}),e({type:s.a})}},m=function(){return{type:s.a}},d=function(){return{type:s.d}},v=function(){return{type:s.i}},f=function(e){return{type:s.c,menuName:e}},h=function(e){return{type:s.b,route:e}},g=function(e){return{type:s.k,filter:e}},x=function(e){return{type:s.j,activatedMenu:e}};t.d(n,"d",function(){return o}),t.d(n,!1,function(){return i}),t.d(n,!1,function(){return r}),t.d(n,!1,function(){return l}),t.d(n,!1,function(){return u}),t.d(n,"e",function(){return c}),t.d(n,"f",function(){return p}),t.d(n,"a",function(){return m}),t.d(n,!1,function(){return d}),t.d(n,"g",function(){return v}),t.d(n,"c",function(){return f}),t.d(n,"b",function(){return h}),t.d(n,"i",function(){return g}),t.d(n,"h",function(){return x})},475:function(e,n,t){"use strict";var a=t(387),o=t.n(a),i=t(109),r=t.n(i),l=t(10),u=t.n(l),s=t(108),c=t.n(s),p=t(7),m=t.n(p),d=t(9),v=t.n(d),f=t(1),h=t.n(f),g=t(402),x=t.n(g),b=t(547),y=t.n(b),k=function(e){function n(e){var t;u()(this,n);for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var l=m()(this,(t=n.__proto__||r()(n)).call.apply(t,[this,e].concat(o)));return l.setLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.props.loadingProgress,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=e[n],a=t.width,o=t.timeout,i={};i.width=a+"%",i.transition="width "+o+"ms linear 0ms",l.setState({highlightStyle:i},function(){n<e.length-1&&(l.clearProgress(),l.progressTimeout=setTimeout(function(){l.setLoading(e,n+1)},100===a?0:o))})},l.clearProgress=function(){l.progressTimeout&&clearTimeout(l.progressTimeout)},l.enterHandler=function(){l.clearProgress(),l.setState({highlightStyle:l.defaultHighlightStyle},function(){l.setLoading()})},l.exitHandler=function(){l.clearProgress(),l.setLoading([{width:100,timeout:l.finishDuration}])},l.progressTimeout=null,l.finishDuration=100,l.defaultHighlightStyle={width:0,transition:"width 0s"},l.state={highlightStyle:l.defaultHighlightStyle},l}return v()(n,e),c()(n,[{key:"componentWillUnmonut",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.style,a=e.visible,i=e.duration,r=e.showStripes,l=this.state.highlightStyle,u=x()("page-loading",o()({striped:r},n,n));return h.a.createElement(y.a,{in:a,timeout:{exit:i+this.finishDuration},classNames:"page-loading",onEnter:this.enterHandler,onExit:this.exitHandler},h.a.createElement("div",{className:u,style:t},h.a.createElement("div",{className:"page-loading-bar",style:l})))}}]),n}(f.Component);k.defaultProps={visible:!1,duration:250,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var w=k;t.d(n,"a",function(){return w})},481:function(e,n,t){e.exports=t(17)(350)},485:function(e,n,t){"use strict";n.a={addEvent:function(e,n,t){"function"==typeof window.addEventListener?e.addEventListener(n,t,!1):"function"==typeof document.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t},removeEvent:function(e,n,t){"function"==typeof window.removeEventListener?e.removeEventListener(n,t,!1):"function"==typeof document.detachEvent?e.detachEvent("on"+n,t):e["on"+n]=null},triggerPopupEventHandle:function(e,n,t,a){for(;e;){if(e==t)return a;if(e==n)return!a;e=e.parentNode}return!1},preventContainerScroll:function(e){var n=e.currentTarget,t=e.deltaY,a=n.clientHeight,o=n.scrollHeight,i=n.scrollTop;o>a&&(t<0&&i<=0||t>0&&i>=o-a)&&e.preventDefault()}}},546:function(e,n,t){e.exports=t.p+"static/img/alcedo-logo.fd3fc21.png"},764:function(e,n,t){(e.exports=t(169)(!1)).push([e.i,'.example{padding:20px 30px 30px}.example p{padding:0 0 10px;font-size:14px;line-height:24px}.example p span{color:#38b1eb}.example .example-title{font-size:18px;cursor:default;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.06)}.example .widget{margin-bottom:30px}.example .example-content{padding:30px}.example .example-content:after,.example .example-content:before{display:table;content:""}.example .example-content:after{clear:both}.example .example-content code{padding:5px;margin:0;background-color:rgba(0,0,0,.04);border-radius:3px;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace}.example .prop-type-desc-table tbody tr td:first-child{color:#38b1eb}.example .prop-type-desc-table tbody tr td:nth-child(2){color:#d8534e}.example .prop-type-desc-table thead tr th{color:#4c637b;font-size:15px;border:none}@media (max-width:767px){.example{padding:8px 16px 16px}.example .example-content{padding:16px}}',""])},765:function(e,n,t){var a=t(764);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(168)(a,o);a.locals&&(e.exports=a.locals)},766:function(e,n,t){(e.exports=t(169)(!1)).push([e.i,'.app .app-content{box-shadow:0 3px 1px rgba(0,0,0,.05),0 1px 1px rgba(0,0,0,.1);position:relative;background:#fff;box-sizing:border-box;min-height:100vh;padding:60px 0 0 250px;transition:all .25s ease-in-out;overflow:auto}.app .app-content .content-router-view{min-height:100%}.app .app-content .content-router-view:after,.app .app-content .content-router-view:before{display:table;content:""}.app .app-content .content-router-view:after{clear:both}.app .app-content .module-loading{position:absolute;left:50%;top:50%;margin:-24px}.app .app-content .app-content-modal{position:absolute;left:0;right:0;top:0;bottom:0}@media (max-width:767px){.app .app-content{padding-left:0;transform:translate3d(70%,0,0)}.app.collapsed .app-content{transform:translateZ(0)}}',""])},767:function(e,n,t){var a=t(766);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(168)(a,o);a.locals&&(e.exports=a.locals)},768:function(e,n,t){(e.exports=t(169)(!1)).push([e.i,".app-nav{height:60px;position:fixed;left:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:90}.app-nav .nav-collapse{box-shadow:0 3px 1px rgba(0,0,0,.05),0 1px 1px rgba(0,0,0,.1);width:calc(100% - 250px);background-color:#fff;position:absolute;right:0;margin-left:250px;height:60px;overflow:visible;box-sizing:border-box;transition:all .25s ease-in-out}.app-nav .nav-collapse .github-icon{position:absolute;right:10px;top:10px;font-size:24px}@media (max-width:767px){.app-nav .nav-collapse{width:0!important;margin-left:0!important;box-shadow:none;overflow:hidden}}",""])},769:function(e,n,t){var a=t(768);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(168)(a,o);a.locals&&(e.exports=a.locals)},770:function(e,n,t){var a=t(399);(e.exports=t(169)(!1)).push([e.i,".brand{position:absolute;left:0;top:0;width:250px;height:60px;font-size:14px;line-height:60px;text-align:left;cursor:default;transition:all .25s ease-in-out;overflow:visible;background:#506379;color:#b8c6d6}.brand .menu-toggle-button{position:absolute;left:10px;top:10px;display:none;z-index:1;line-height:0;font-size:16px;color:#b8c6d6}.brand .brand-name{margin-left:18px;box-sizing:border-box;overflow:hidden;height:60px;text-decoration:none;color:#b8c6d6;transition:color .25s ease-in-out}.brand .brand-name .brand-logo{display:inline-block;vertical-align:middle;border-radius:0;width:30px;height:30px;margin:15px 15px 15px 0;background-image:url("+a(t(546))+");background-size:30px 30px}.brand .brand-name:hover{color:#fff}.brand .github-icon{position:absolute;right:10px;top:10px;display:none;z-index:1;font-size:20px;color:#b8c6d6}@media (max-width:767px){.brand{background:#344c67!important;width:100%!important;text-align:center}.brand .menu-toggle-button{display:block}.brand .brand-name{text-align:center;margin-left:0}.brand .github-icon{display:block}}",""])},771:function(e,n,t){var a=t(770);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(168)(a,o);a.locals&&(e.exports=a.locals)},772:function(e,n,t){(e.exports=t(169)(!1)).push([e.i,".nav-menu{position:fixed;left:0;background:#506379;top:60px;width:250px;height:calc(100% - 60px);box-sizing:border-box;overflow:hidden;transition-property:width,opacity,transform!important;transition-duration:.25s!important;transition-timing-function:ease-in-out!important;z-index:70}.nav-menu .nav-menu-filter{width:100%;height:40px;border-radius:0;border:none;margin-bottom:10px;color:hsla(0,0%,100%,.7);background:#445467}.nav-menu .nav-menu-filter .icon-button{margin:0}.nav-menu .nav-menu-list{font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-x:hidden;overflow-y:auto;height:calc(100% - 50px)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item{position:relative;box-sizing:border-box;background:#48596d}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title{position:relative;display:block;height:50px;box-sizing:border-box;padding:0 15px;color:hsla(0,0%,100%,.7);cursor:pointer;text-decoration:none;overflow:hidden}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:hover,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:hover{color:#fff;background:rgba(0,0,0,.05)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:focus,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:focus{color:#fff;background:rgba(0,0,0,.08)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-name,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-name{opacity:1;display:block;height:50px;line-height:50px;float:left;transition:opacity 50ms ease-in-out .15s}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button{float:right;height:50px;line-height:50px;text-align:center;transition:all .25s ease-in-out}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button.collapsed,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button.collapsed{transform:rotate(-90deg)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link.router-link-active{padding:0 15px 0 12px;border-left:3px solid #38b1eb;color:#fff;background:rgba(0,0,0,.08)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-children{overflow:hidden;transition:all .25s ease-in-out}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.hasChildren{box-shadow:inset 0 3px 1px rgba(0,0,0,.05),inset 0 1px 1px rgba(0,0,0,.1),inset 0 -3px 1px rgba(0,0,0,.05),inset 0 -1px 1px rgba(0,0,0,.1)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed{background:transparent;box-shadow:none}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed .nav-menu-children{height:0!important}@media (max-width:767px){.app .nav-menu{top:0!important;bottom:0;width:70%;height:100%;padding-top:60px;z-index:60}.app.collapsed .nav-menu{transform:translate3d(-100%,0,0);opacity:0}}",""])},773:function(e,n,t){var a=t(772);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(168)(a,o);a.locals&&(e.exports=a.locals)},774:function(e,n,t){e.exports=t(17)(107)},813:function(e,n,t){"use strict";t.r(n);var a=t(109),o=t.n(a),i=t(10),r=t.n(i),l=t(108),u=t.n(l),s=t(7),c=t.n(s),p=t(9),m=t.n(p),d=t(1),v=t.n(d),f=t(35),h=t(13),g=t(774),x=t(111),b=t(394),y=t(401),k=t.n(y),w=t(402),E=t.n(w),M=t(451),N=t(414),C=t(481),_=t(437),z=function(e){function n(e){r()(this,n);var t=c()(this,(n.__proto__||o()(n)).call(this,e));return t.menuGroupClickHandler=function(){var e=t.props,n=e.expandMenuName,a=e.options,o=e.expandMenu;n===a.text?o(""):o(a.text)},t.menuClickHandler=function(){var e=t.props,n=e.options,a=e.depth,o=e.expandMenu,i=e.updateActivatedMenu;0===a&&o(""),i(n)},t.menuHeight=50,t.subMenuIndent=20,t}return m()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,t=e.expandMenuName,a=e.activatedMenu,o=e.options,i=e.depth,r=e.expandMenu,l=e.updateActivatedMenu,u=this.menuHeight,s=this.subMenuIndent,c=t!==o.text,p=o.children&&o.children.length>0,m=E()("nav-menu-item-link",{"router-link-active":a&&a.route===o.route});return v.a.createElement("div",{className:"nav-menu-item "+(c?"collapsed":"")+" "+(p?"hasChildren":"")},p?v.a.createElement("div",{className:"nav-menu-item-title",disabled:o.disabled,onClick:this.menuGroupClickHandler},v.a.createElement("div",{className:"nav-menu-item-name"},o.text),v.a.createElement("i",{className:"fas fa-angle-down nav-menu-item-collapse-button\n                                "+(c?"collapsed":""),"aria-hidden":"true"}),v.a.createElement(_.a,null)):v.a.createElement(C.Link,{className:m,to:o.route,disabled:o.disabled,onClick:this.menuClickHandler},v.a.createElement("div",{className:"nav-menu-item-name",style:{marginLeft:i*s}},o.text),v.a.createElement(_.a,null)),p?v.a.createElement("div",{className:"nav-menu-children",style:{height:o.children.length*u}},o&&o.children&&o.children.map(function(e,o){return v.a.createElement(n,{key:o,expandMenuName:t,activatedMenu:a,options:e,depth:i+1,expandMenu:r,updateActivatedMenu:l})})):null)}}]),n}(d.Component);z.defaultProps={expandMenuName:"",depth:0};var H,L=z,j=t(485),O=function(e){function n(e){return r()(this,n),c()(this,(n.__proto__||o()(n)).call(this,e))}return m()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.navMenu,t=e.expandMenuName,a=e.activatedMenu,o=e.expandMenu,i=e.updateActivatedMenu;return v.a.createElement("div",{className:"nav-menu-list",onWheel:j.a.preventContainerScroll},v.a.createElement("div",{className:"nav-menu-scroller"},n&&n.map(function(e,n){return v.a.createElement(L,{key:e&&e.text||n,expandMenuName:t,activatedMenu:a,options:e,expandMenu:o,updateActivatedMenu:i})})))}}]),n}(d.Component),A=Object(f.connect)(function(e){return{navMenu:e.navMenu.menu,expandMenuName:e.navMenu.expandMenuName,activatedMenu:e.navMenu.activatedMenu}},function(e){return Object(h.bindActionCreators)({expandMenu:M.c,updateActivatedMenu:M.h},e)})(O),P=(t(773),function(e){function n(e){return r()(this,n),c()(this,(n.__proto__||o()(n)).call(this,e))}return m()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.filter,t=e.updateFilter;return v.a.createElement("div",{className:"nav-menu"},v.a.createElement(N.a,{className:"nav-menu-filter",value:n,rightIconCls:"fas fa-search",onChange:t}),v.a.createElement(A,null))}}]),n}(d.Component)),S=Object(f.connect)(function(e){return{filter:e.navMenu.filter}},function(e){return Object(h.bindActionCreators)({updateFilter:M.i},e)})(P),T=t(421),D=t(450),R=(t(771),function(e){function n(e){r()(this,n);var t=c()(this,(n.__proto__||o()(n)).call(this,e));return t.mousedownHandler=function(e){e.stopPropagation(),t.props.toggleNavMenu()},t}return m()(n,e),u()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"brand"},v.a.createElement(T.a,{className:"menu-toggle-button",iconCls:"fas fa-bars",onClick:this.mousedownHandler}),v.a.createElement(C.Link,{className:"brand-name",to:"/"},v.a.createElement("i",{className:"brand-logo"}),"Alcedo-UI Examples"),v.a.createElement(D.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"}))}}]),n}(d.Component)),I=Object(f.connect)(function(e){return{}},function(e){return Object(h.bindActionCreators)({toggleNavMenu:M.g},e)})(R),F=(t(769),function(e){function n(e){return r()(this,n),c()(this,(n.__proto__||o()(n)).call(this,e))}return m()(n,e),u()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"app-nav"},v.a.createElement(I,null),v.a.createElement("div",{className:"nav-collapse floatfix"},v.a.createElement(D.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"})))}}]),n}(d.Component)),B=t(475),U=(t(767),t(765),Object(b.DragDropContext)(k.a)(H=function(e){function n(e){return r()(this,n),c()(this,(n.__proto__||o()(n)).call(this,e))}return m()(n,e),u()(n,[{key:"componentDidMount",value:function(){this.props.expandActivatedMenu(location.hash.slice(1))}},{key:"render",value:function(){var e=this.props,n=e.route,t=e.location,a=e.isDesktop,o=e.navMenuCollapsed,i=e.componentLoading,r=e.collapseNavMenu,l=E()("app",{collapsed:o});return v.a.createElement("div",{className:l},v.a.createElement(B.a,{visible:i}),v.a.createElement(S,null),v.a.createElement(F,null),v.a.createElement("div",{className:"app-content"},Object(x.renderRoutes)(n.routes),"/components"===t.pathname?v.a.createElement(g.Redirect,{from:"/components",to:"/components/RaisedButton"}):null,a||o?null:v.a.createElement("div",{className:"app-content-modal",onClick:r})))}}]),n}(d.Component))||H);n.default=Object(f.connect)(function(e){return{isDesktop:e.device.isDesktop,navMenuCollapsed:e.navMenu.navMenuCollapsed,componentLoading:e.loadComponent.loading}},function(e){return Object(h.bindActionCreators)({expandActivatedMenu:M.b,collapseNavMenu:M.a},e)})(U)}}]);
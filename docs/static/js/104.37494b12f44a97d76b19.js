(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{170:function(e,n,t){e.exports=t(29)(332)},24:function(e,n,t){e.exports=t(111)(10)},459:function(e,n,t){e.exports=t(29)(143)},486:function(e,n,t){"use strict";var a,o,i=t(4),r=t.n(i),l=t(8),s=t.n(l),u=t(16),p=t.n(u),c=t(12),d=t.n(c),m=t(7),v=t.n(m),h=t(11),g=t.n(h),f=t(5),b=t.n(f),x=t(6),y=t.n(x),w=t(1),M=t.n(w),k=t(0),N=t.n(k),E=t(9),T=t.n(E),C=t(168),_=t(171),H=t(2),z=t(37),P=t(3),L=(o=a=function(e){function n(e){var t;v()(this,n);for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var r=b()(this,(t=n.__proto__||d()(n)).call.apply(t,[this,e].concat(o)));return r.touchTapHandler=r.touchTapHandler.bind(r),r.startRipple=r.startRipple.bind(r),r.endRipple=r.endRipple.bind(r),r}return y()(n,e),g()(n,[{key:"touchTapHandler",value:function(e){e.preventDefault();var n=this.props,t=n.disabled,a=n.isLoading,o=n.onTouchTap;!t&&!a&&o&&o(e)}},{key:"startRipple",value:function(e){this.refs.touchRipple.addRipple(e)}},{key:"endRipple",value:function(){this.refs.touchRipple.removeRipple()}},{key:"render",value:function(){var e,n=this.props,t=n.className,a=n.theme,o=n.iconCls,i=n.disabled,l=n.isLoading,u=n.tip,c=n.tipPosition,d=p()(n,["className","theme","iconCls","disabled","isLoading","tip","tipPosition"]),m=T()("icon-anchor",(e={},s()(e,"theme-"+a,a),s()(e,t,t),e));return M.a.createElement(z.a,{text:u,position:c},M.a.createElement("a",r()({},d,{className:m,disabled:i||l,onTouchTap:this.touchTapHandler}),l?M.a.createElement(C.a,{size:"small"}):o?M.a.createElement("i",{className:"icon-anchor-icon "+o,"aria-hidden":"true"}):null,i||l?null:M.a.createElement(_.a,{ref:"touchRipple",className:i||l?"hidden":"",displayCenter:!0})))}}]),n}(w.Component),a.Theme=H.a,o);L.propTypes={className:N.a.string,style:N.a.object,theme:N.a.oneOf(P.a.enumerateValue(H.a)),disabled:N.a.bool,isLoading:N.a.bool,iconCls:N.a.string.isRequired,href:N.a.string,target:N.a.string,alt:N.a.string,tip:N.a.string,tipPosition:N.a.oneOf(P.a.enumerateValue(z.a.Position)),onTouchTap:N.a.func},L.defaultProps={theme:H.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",tipPosition:z.a.Position.BOTTOM};var $=L;t.d(n,"a",function(){return $})},501:function(e,n,t){"use strict";var a=t(8),o=t.n(a),i=t(12),r=t.n(i),l=t(7),s=t.n(l),u=t(11),p=t.n(u),c=t(5),d=t.n(c),m=t(6),v=t.n(m),h=t(1),g=t.n(h),f=t(0),b=t.n(f),x=t(9),y=t.n(x),w=t(175),M=t.n(w),k=function(e){function n(e){var t;s()(this,n);for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var l=d()(this,(t=n.__proto__||r()(n)).call.apply(t,[this,e].concat(o)));return l.progressTimeout=null,l.finishDuration=100,l.defaultHighlightStyle={width:0,transition:"width 0s"},l.state={highlightStyle:l.defaultHighlightStyle},l.setLoading=l.setLoading.bind(l),l.clearProgress=l.clearProgress.bind(l),l.enterHandler=l.enterHandler.bind(l),l.exitHandler=l.exitHandler.bind(l),l}return v()(n,e),p()(n,[{key:"setLoading",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.loadingProgress,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=n[t],o=a.width,i=a.timeout,r={};r.width=o+"%",r.transition="width "+i+"ms linear 0ms",this.setState({highlightStyle:r},function(){t<n.length-1&&(e.clearProgress(),e.progressTimeout=setTimeout(function(){e.setLoading(n,t+1)},100===o?0:i))})}},{key:"clearProgress",value:function(){this.progressTimeout&&clearTimeout(this.progressTimeout)}},{key:"enterHandler",value:function(){var e=this;this.clearProgress(),this.setState({highlightStyle:this.defaultHighlightStyle},function(){e.setLoading()})}},{key:"exitHandler",value:function(){this.clearProgress(),this.setLoading([{width:100,timeout:this.finishDuration}])}},{key:"componentWillUnmonut",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.style,a=e.visible,i=e.duration,r=e.showStripes,l=this.state.highlightStyle,s=y()("page-loading",o()({striped:r},n,n));return g.a.createElement(M.a,{in:a,timeout:{exit:i+this.finishDuration},classNames:"page-loading",onEnter:this.enterHandler,onExit:this.exitHandler},g.a.createElement("div",{className:s,style:t},g.a.createElement("div",{className:"page-loading-bar",style:l})))}}]),n}(h.Component);k.propTypes={className:b.a.string,style:b.a.object,visible:b.a.bool,duration:b.a.number,showStripes:b.a.bool,loadingProgress:b.a.arrayOf(b.a.shape({width:b.a.number,timeout:b.a.number}))},k.defaultProps={visible:!1,duration:250,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var N=k;t.d(n,"a",function(){return N})},566:function(e,n,t){e.exports=t.p+"static/img/alcedo-logo.fd3fc21.png"},775:function(e,n,t){(e.exports=t(80)(!1)).push([e.i,'.example{padding:20px 30px 30px}.example p{padding:0 0 10px;font-size:14px;line-height:24px}.example p span{color:#38b1eb}.example .example-title{font-size:18px;cursor:default;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.06)}.example .widget{margin-bottom:30px}.example .example-content{padding:30px}.example .example-content:after,.example .example-content:before{display:table;content:""}.example .example-content:after{clear:both}.example .example-content code{padding:5px;margin:0;background-color:rgba(0,0,0,.04);border-radius:3px;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace}.example .prop-type-desc-table tbody tr td:first-child{color:#38b1eb}.example .prop-type-desc-table tbody tr td:nth-child(2){color:#d8534e}.example .prop-type-desc-table thead tr th{color:#4c637b;font-size:15px;border:none}@media (max-width:767px){.example{padding:8px 16px 16px}.example .example-content{padding:16px}}',""])},776:function(e,n,t){var a=t(775);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(79)(a,o);a.locals&&(e.exports=a.locals)},777:function(e,n,t){(e.exports=t(80)(!1)).push([e.i,'.app .app-content{box-shadow:0 3px 1px rgba(0,0,0,.05),0 1px 1px rgba(0,0,0,.1);position:relative;background:#fff;box-sizing:border-box;min-height:100vh;padding:60px 0 0 250px;transition:all .25s ease-in-out;overflow:auto}.app .app-content .content-router-view{min-height:100%}.app .app-content .content-router-view:after,.app .app-content .content-router-view:before{display:table;content:""}.app .app-content .content-router-view:after{clear:both}.app .app-content .module-loading{position:absolute;left:50%;top:50%;margin:-24px}.app .app-content .app-content-modal{position:absolute;left:0;right:0;top:0;bottom:0}@media (max-width:767px){.app .app-content{padding-left:0;transform:translate3d(70%,0,0)}.app.collapsed .app-content{transform:translateZ(0)}}',""])},778:function(e,n,t){var a=t(777);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(79)(a,o);a.locals&&(e.exports=a.locals)},779:function(e,n,t){(e.exports=t(80)(!1)).push([e.i,".app-nav{height:60px;position:fixed;left:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:90}.app-nav .nav-collapse{box-shadow:0 3px 1px rgba(0,0,0,.05),0 1px 1px rgba(0,0,0,.1);width:calc(100% - 250px);background-color:#fff;position:absolute;right:0;margin-left:250px;height:60px;overflow:visible;box-sizing:border-box;transition:all .25s ease-in-out}.app-nav .nav-collapse .github-icon{position:absolute;right:10px;top:10px;font-size:24px}@media (max-width:767px){.app-nav .nav-collapse{width:0!important;margin-left:0!important;box-shadow:none;overflow:hidden}}",""])},780:function(e,n,t){var a=t(779);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(79)(a,o);a.locals&&(e.exports=a.locals)},781:function(e,n,t){var a=t(240);(e.exports=t(80)(!1)).push([e.i,".brand{position:absolute;left:0;top:0;width:250px;height:60px;font-size:14px;line-height:60px;text-align:left;cursor:default;transition:all .25s ease-in-out;overflow:visible;background:#506379;color:#b8c6d6}.brand .menu-toggle-button{position:absolute;left:10px;top:10px;display:none;z-index:1;line-height:0;font-size:16px;color:#b8c6d6}.brand .brand-name{margin-left:18px;box-sizing:border-box;overflow:hidden;height:60px;text-decoration:none;color:#b8c6d6;transition:color .25s ease-in-out}.brand .brand-name .brand-logo{display:inline-block;vertical-align:middle;border-radius:0;width:30px;height:30px;margin:15px 15px 15px 0;background-image:url("+a(t(566))+");background-size:30px 30px}.brand .brand-name:hover{color:#fff}.brand .github-icon{position:absolute;right:10px;top:10px;display:none;z-index:1;font-size:20px;color:#b8c6d6}@media (max-width:767px){.brand{background:#344c67!important;width:100%!important;text-align:center}.brand .menu-toggle-button{display:block}.brand .brand-name{text-align:center;margin-left:0}.brand .github-icon{display:block}}",""])},782:function(e,n,t){var a=t(781);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(79)(a,o);a.locals&&(e.exports=a.locals)},783:function(e,n,t){(e.exports=t(80)(!1)).push([e.i,".nav-menu{position:fixed;left:0;background:#506379;top:60px;width:250px;height:calc(100% - 60px);box-sizing:border-box;overflow:hidden;transition-property:width,opacity,transform!important;transition-duration:.25s!important;transition-timing-function:ease-in-out!important;z-index:70}.nav-menu .nav-menu-filter{width:100%;height:40px;border-radius:0;border:none;margin-bottom:10px;color:hsla(0,0%,100%,.7);background:#445467}.nav-menu .nav-menu-filter .icon-button{margin:0}.nav-menu .nav-menu-list{font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-x:hidden;overflow-y:auto;height:calc(100% - 50px)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item{position:relative;box-sizing:border-box;background:#48596d}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title{position:relative;display:block;height:50px;box-sizing:border-box;padding:0 15px;color:hsla(0,0%,100%,.7);cursor:pointer;text-decoration:none;overflow:hidden}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:hover,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:hover{color:#fff;background:rgba(0,0,0,.05)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:focus,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:focus{color:#fff;background:rgba(0,0,0,.08)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-name,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-name{opacity:1;display:block;height:50px;line-height:50px;float:left;transition:opacity 50ms ease-in-out .15s}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button{float:right;height:50px;line-height:50px;text-align:center;transition:all .25s ease-in-out}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button.collapsed,.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button.collapsed{transform:rotate(-90deg)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link.router-link-active{padding:0 15px 0 12px;border-left:3px solid #38b1eb;color:#fff;background:rgba(0,0,0,.08)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-children{overflow:hidden;transition:all .25s ease-in-out}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.hasChildren{box-shadow:inset 0 3px 1px rgba(0,0,0,.05),inset 0 1px 1px rgba(0,0,0,.1),inset 0 -3px 1px rgba(0,0,0,.05),inset 0 -1px 1px rgba(0,0,0,.1)}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed{background:transparent;box-shadow:none}.nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed .nav-menu-children{height:0!important}@media (max-width:767px){.app .nav-menu{top:0!important;bottom:0;width:70%;height:100%;padding-top:60px;z-index:60}.app.collapsed .nav-menu{transform:translate3d(-100%,0,0);opacity:0}}",""])},784:function(e,n,t){var a=t(783);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(79)(a,o);a.locals&&(e.exports=a.locals)},785:function(e,n,t){e.exports=t(29)(80)},805:function(e,n,t){"use strict";t.r(n);var a=t(12),o=t.n(a),i=t(7),r=t.n(i),l=t(11),s=t.n(l),u=t(5),p=t.n(u),c=t(6),d=t.n(c),m=t(1),v=t.n(m),h=t(0),g=t.n(h),f=t(46),b=t(41),x=t(785),y=t(104),w=t(458),M=t(462),k=t.n(M),N=t(167),E=t(157),T=t(173),C=t(82),_=function(e){function n(e){r()(this,n);var t=p()(this,(n.__proto__||o()(n)).call(this,e));return t.menuHeight=50,t.subMenuIndent=20,t.menuGroupMousedownHandle=t.menuGroupMousedownHandle.bind(t),t.menuMousedownHandle=t.menuMousedownHandle.bind(t),t}return d()(n,e),s()(n,[{key:"menuGroupMousedownHandle",value:function(){var e=this.props,n=e.expandMenuName,t=e.options,a=e.expandMenu;n===t.text?a(""):a(t.text)}},{key:"menuMousedownHandle",value:function(){var e=this.props,n=e.options,t=e.depth,a=e.expandMenu,o=e.updateActivatedMenu;0===t&&a(""),o(n)}},{key:"render",value:function(){var e=this.props,t=e.expandMenuName,a=e.activatedMenu,o=e.options,i=e.depth,r=e.expandMenu,l=e.updateActivatedMenu,s=this.menuHeight,u=this.subMenuIndent,p=t!==o.text,c=o.children&&o.children.length>0;return v.a.createElement("div",{className:"nav-menu-item "+(p?"collapsed":"")+" "+(c?"hasChildren":"")},c?v.a.createElement("div",{className:"nav-menu-item-title",disabled:o.disabled,onMouseDown:this.menuGroupMousedownHandle},v.a.createElement("div",{className:"nav-menu-item-name"},o.text),v.a.createElement("i",{className:"fas fa-angle-down nav-menu-item-collapse-button\n                                "+(p?"collapsed":""),"aria-hidden":"true"}),v.a.createElement(C.a,null)):v.a.createElement(T.Link,{className:"nav-menu-item-link"+(a&&a.route===o.route?" router-link-active":""),to:o.route,disabled:o.disabled,onClick:this.menuMousedownHandle},v.a.createElement("div",{className:"nav-menu-item-name",style:{marginLeft:i*u}},o.text),v.a.createElement(C.a,null)),c?v.a.createElement("div",{className:"nav-menu-children",style:{height:o.children.length*s}},o.children.map(function(e,o){return v.a.createElement(n,{key:o,expandMenuName:t,activatedMenu:a,options:e,depth:i+1,expandMenu:r,updateActivatedMenu:l})})):null)}}]),n}(m.Component);_.propTypes={expandMenuName:g.a.string,activatedMenu:g.a.object,options:g.a.object,depth:g.a.number,expandMenu:g.a.func,updateActivatedMenu:g.a.func},_.defaultProps={expandMenuName:"",activatedMenu:null,options:null,depth:0};var H=_,z=t(137),P=function(e){function n(e){return r()(this,n),p()(this,(n.__proto__||o()(n)).call(this,e))}return d()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.$navMenu,t=e.$expandMenuName,a=e.$activatedMenu,o=e.expandMenu,i=e.updateActivatedMenu;return v.a.createElement("div",{className:"nav-menu-list",onWheel:z.a.preventContainerScroll},v.a.createElement("div",{className:"nav-menu-scroller"},n.map(function(e,n){return v.a.createElement(H,{key:e&&e.text||n,expandMenuName:t,activatedMenu:a,options:e,expandMenu:o,updateActivatedMenu:i})})))}}]),n}(m.Component);P.propTypes={$navMenu:g.a.array,$expandMenuName:g.a.string,$activatedMenu:g.a.object,expandMenu:g.a.func,updateActivatedMenu:g.a.func};var L=Object(f.connect)(function(e,n){return{$navMenu:e.navMenu.menu,$expandMenuName:e.navMenu.expandMenuName,$activatedMenu:e.navMenu.activatedMenu}},function(e){return Object(b.bindActionCreators)(N,e)})(P),$=(t(784),function(e){function n(e){return r()(this,n),p()(this,(n.__proto__||o()(n)).call(this,e))}return d()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.filter,t=e.updateFilter;return v.a.createElement("div",{className:"nav-menu"},v.a.createElement(E.a,{className:"nav-menu-filter",value:n,rightIconCls:"fas fa-search",onChange:t}),v.a.createElement(L,null))}}]),n}(m.Component));$.propTypes={filter:g.a.string,updateFilter:g.a.func};var A=Object(f.connect)(function(e,n){return{filter:e.navMenu.filter}},function(e){return Object(b.bindActionCreators)(N,e)})($),j=t(38),O=t(486),R=(t(782),function(e){function n(e){r()(this,n);var t=p()(this,(n.__proto__||o()(n)).call(this,e));return t.menuToggleButtonMousedownHandle=t.menuToggleButtonMousedownHandle.bind(t),t}return d()(n,e),s()(n,[{key:"menuToggleButtonMousedownHandle",value:function(e){e.stopPropagation(),this.props.toggleNavMenu()}},{key:"render",value:function(){return v.a.createElement("div",{className:"brand"},v.a.createElement(j.a,{className:"menu-toggle-button",iconCls:"fas fa-bars",onTouchTap:this.menuToggleButtonMousedownHandle}),v.a.createElement(T.Link,{className:"brand-name",to:"/"},v.a.createElement("i",{className:"brand-logo"}),"Alcedo-UI Examples"),v.a.createElement(O.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"}))}}]),n}(m.Component));R.propTypes={toggleNavMenu:g.a.func};var D,S=Object(f.connect)(function(e,n){return{}},function(e){return Object(b.bindActionCreators)(N,e)})(R),I=(t(780),function(e){function n(e){return r()(this,n),p()(this,(n.__proto__||o()(n)).call(this,e))}return d()(n,e),s()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"app-nav"},v.a.createElement(S,null),v.a.createElement("div",{className:"nav-collapse floatfix"},v.a.createElement(O.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"})))}}]),n}(m.Component)),B=t(501),G=(t(778),t(776),Object(w.DragDropContext)(k.a)(D=function(e){function n(e){return r()(this,n),p()(this,(n.__proto__||o()(n)).call(this,e))}return d()(n,e),s()(n,[{key:"componentDidMount",value:function(){this.props.expandActivatedMenu(location.hash.slice(1))}},{key:"render",value:function(){var e=this.props,n=e.route,t=e.location,a=e.$isDesktop,o=e.$navMenuCollapsed,i=e.$componentLoading,r=e.collapseNavMenu;return v.a.createElement("div",{className:"app "+(o?"collapsed":"")},v.a.createElement(B.a,{visible:i}),v.a.createElement(A,null),v.a.createElement(I,null),v.a.createElement("div",{ref:"appContent",className:"app-content"},Object(y.renderRoutes)(n.routes),"/components"===t.pathname?v.a.createElement(x.Redirect,{from:"/components",to:"/components/RaisedButton"}):null,a||o?null:v.a.createElement("div",{className:"app-content-modal",onTouchTap:r})))}}]),n}(m.Component))||D);G.propTypes={$isDesktop:g.a.bool,$navMenuCollapsed:g.a.bool,$componentLoading:g.a.bool,expandActivatedMenu:g.a.func};n.default=Object(f.connect)(function(e,n){return{$isDesktop:e.device.isDesktop,$navMenuCollapsed:e.navMenu.navMenuCollapsed,$componentLoading:e.loadComponent.loading}},function(e){return Object(b.bindActionCreators)(N,e)})(G)}}]);
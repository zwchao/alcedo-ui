(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(n,e,t){"use strict";var a=t(16),i=function(n){return function(e){e(Object(a.push)(n))}},o=t(3),r=function(){return{type:o.g}},l=function(){return function(n){n({type:o.h}),n({type:o.a})}},s=function(){return{type:o.a}},u=function(){return{type:o.i}},c=function(n){return{type:o.c,menuName:n}},p=function(n){return{type:o.b,route:n}},m=function(n){return{type:o.k,filter:n}},d=function(n){return{type:o.j,activatedMenu:n}};t.d(e,"d",function(){return i}),t.d(e,"e",function(){return r}),t.d(e,"f",function(){return l}),t.d(e,"a",function(){return s}),t.d(e,"g",function(){return u}),t.d(e,"c",function(){return c}),t.d(e,"b",function(){return p}),t.d(e,"i",function(){return m}),t.d(e,"h",function(){return d})},409:function(n,e,t){"use strict";var a=t(360),i=t.n(a),o=t(342),r=t.n(o),l=t(77),s=t.n(l),u=t(78),c=t.n(u),p=t(79),m=t.n(p),d=t(80),v=t.n(d),h=t(81),f=t.n(h),b=t(11),g=t.n(b),x=t(20),y=t.n(x),w=t(0),k=t.n(w),M=t(1),E=t.n(M),N=t(354),C=t.n(N),T=t(414),z=t(442),R=t(356),L=t(373),H=t(355),A=function(n){function e(n){var t,a;s()(this,e);for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];return a=m()(this,(t=v()(e)).call.apply(t,[this,n].concat(o))),y()(g()(g()(a)),"startRipple",function(n,e){!a.props.disableTouchRipple&&a.refs.touchRipple&&a.refs.touchRipple.addRipple(n,e)}),y()(g()(g()(a)),"endRipple",function(){!a.props.disableTouchRipple&&a.refs.touchRipple&&a.refs.touchRipple.removeRipple()}),y()(g()(g()(a)),"triggerRipple",function(n,e){a.startRipple(n,e),setTimeout(function(){a.endRipple()},250)}),y()(g()(g()(a)),"clickHandler",function(n){var e=a.props,t=e.disabled,i=e.isLoading,o=e.onClick;!t&&!i&&o&&o(n)}),a}return f()(e,n),c()(e,[{key:"render",value:function(){var n,e=this.props,t=e.className,a=e.theme,o=e.iconCls,l=e.disabled,s=e.isLoading,u=e.tip,c=e.tipPosition,p=e.disableTouchRipple,m=r()(e,["className","theme","iconCls","disabled","isLoading","tip","tipPosition","disableTouchRipple"]),d=C()("icon-anchor",(n={},y()(n,"theme-".concat(a),a),y()(n,t,t),n));return k.a.createElement(L.a,{tipContent:u,position:c},k.a.createElement("a",i()({},m,{className:d,disabled:l||s,onClick:this.clickHandler}),s?k.a.createElement(T.a,{size:"small"}):o?k.a.createElement("i",{className:"icon-anchor-icon ".concat(o),"aria-hidden":"true"}):null,p?null:k.a.createElement(z.a,{ref:"touchRipple",className:l||s?"hidden":"",displayCenter:!0})))}}]),e}(w.Component);y()(A,"Theme",R.a),A.propTypes={className:E.a.string,style:E.a.object,theme:E.a.oneOf(H.a.enumerateValue(R.a)),disabled:E.a.bool,isLoading:E.a.bool,iconCls:E.a.string.isRequired,href:E.a.string,target:E.a.string,alt:E.a.string,disableTouchRipple:E.a.bool,tip:E.a.string,tipPosition:E.a.oneOf(H.a.enumerateValue(L.a.Position)),onClick:E.a.func},A.defaultProps={theme:R.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",disableTouchRipple:!1,tipPosition:L.a.Position.BOTTOM};var P=A;t.d(e,"a",function(){return P})},425:function(n,e,t){n.exports=t(12)(515)},437:function(n,e,t){"use strict";var a=t(77),i=t.n(a),o=t(78),r=t.n(o),l=t(79),s=t.n(l),u=t(80),c=t.n(u),p=t(81),m=t.n(p),d=t(11),v=t.n(d),h=t(20),f=t.n(h),b=t(0),g=t.n(b),x=t(1),y=t.n(x),w=t(354),k=t.n(w),M=t(443),E=t.n(M),N=function(n){function e(n){var t,a;i()(this,e);for(var o=arguments.length,r=new Array(o>1?o-1:0),l=1;l<o;l++)r[l-1]=arguments[l];return a=s()(this,(t=c()(e)).call.apply(t,[this,n].concat(r))),f()(v()(v()(a)),"setLoading",function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.loadingProgress,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n[e],i=t.width,o=t.timeout,r={};r.width=i+"%",r.transition="width "+o+"ms linear 0ms",a.setState({highlightStyle:r},function(){e<n.length-1&&(a.clearProgress(),a.progressTimeout=setTimeout(function(){a.setLoading(n,e+1)},100===i?0:o))})}),f()(v()(v()(a)),"clearProgress",function(){a.progressTimeout&&clearTimeout(a.progressTimeout)}),f()(v()(v()(a)),"enterHandler",function(){a.clearProgress(),a.setState({highlightStyle:a.defaultHighlightStyle},function(){a.setLoading()})}),f()(v()(v()(a)),"exitHandler",function(){a.clearProgress(),a.setLoading([{width:100,timeout:a.props.finishDuration}])}),a.progressTimeout=null,a.defaultHighlightStyle={width:0,transition:"width 0s"},a.state={highlightStyle:a.defaultHighlightStyle},a}return m()(e,n),r()(e,[{key:"componentWillUnmonut",value:function(){this.clearProgress()}},{key:"render",value:function(){var n=this.props,e=n.className,t=n.style,a=n.visible,i=n.duration,o=n.finishDuration,r=n.showStripes,l=this.state.highlightStyle,s=k()("page-loading",f()({striped:r},e,e));return g.a.createElement(E.a,{in:a,timeout:{exit:i+o},classNames:"page-loading",onEnter:this.enterHandler,onExit:this.exitHandler},g.a.createElement("div",{className:s,style:t},g.a.createElement("div",{className:"page-loading-bar",style:l})))}}]),e}(b.Component);N.propTypes={className:y.a.string,style:y.a.object,visible:y.a.bool,duration:y.a.number,finishDuration:y.a.number,showStripes:y.a.bool,loadingProgress:y.a.arrayOf(y.a.shape({width:y.a.number,timeout:y.a.number}))},N.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var C=N;t.d(e,"a",function(){return C})},439:function(n,e,t){"use strict";e.a={addEvent:function(n,e,t){"function"==typeof window.addEventListener?n.addEventListener(e,t,!1):"function"==typeof document.attachEvent?n.attachEvent("on".concat(e),t):n["on".concat(e)]=t},removeEvent:function(n,e,t){"function"==typeof window.removeEventListener?n.removeEventListener(e,t,!1):"function"==typeof document.detachEvent?n.detachEvent("on".concat(e),t):n["on".concat(e)]=null},triggerPopupEventHandle:function(n,e,t,a){for(;n;){if(n==t)return a;if(n==e)return!a;n=n.parentNode}return!1},preventContainerScroll:function(n){var e=n.currentTarget,t=n.deltaY,a=e.clientHeight,i=e.scrollHeight,o=e.scrollTop;i>a&&(t<0&&o<=0||t>0&&o>=i-a)&&n.preventDefault()}}},444:function(n,e,t){n.exports=t.p+"static/img/alcedo-logo.fd3fc21.png"},560:function(n,e,t){n.exports=t(12)(135)},561:function(n,e,t){var a=t(562);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(142)(a,i);a.locals&&(n.exports=a.locals)},562:function(n,e,t){(n.exports=t(141)(!1)).push([n.i,".nav-menu {\n  position: fixed;\n  left: 0;\n  background: #506379;\n  top: 60px;\n  width: 250px;\n  height: calc(100% - 60px);\n  box-sizing: border-box;\n  overflow: hidden;\n  transition-property: width, opacity, -webkit-transform !important;\n  transition-property: width, opacity, transform !important;\n  transition-property: width, opacity, transform, -webkit-transform !important;\n  transition-duration: 250ms !important;\n  transition-timing-function: ease-in-out !important;\n  z-index: 70; }\n  .nav-menu .nav-menu-filter {\n    width: 100%;\n    height: 40px;\n    border-radius: 0;\n    border: none;\n    margin-bottom: 10px;\n    color: rgba(255, 255, 255, 0.7);\n    background: #445467; }\n    .nav-menu .nav-menu-filter .icon-button {\n      margin: 0; }\n  .nav-menu .nav-menu-list {\n    font-size: 12px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: calc(100% - 50px); }\n    .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item {\n      position: relative;\n      box-sizing: border-box;\n      background: #48596d; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link {\n        position: relative;\n        display: block;\n        height: 50px;\n        box-sizing: border-box;\n        padding: 0 15px;\n        color: rgba(255, 255, 255, 0.7);\n        text-decoration: none;\n        cursor: pointer;\n        text-decoration: none;\n        overflow: hidden; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:hover, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:hover {\n          color: #fff;\n          background: rgba(0, 0, 0, 0.05); }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:focus, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:focus {\n          color: #fff;\n          background: rgba(0, 0, 0, 0.08); }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-name, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-name {\n          opacity: 1;\n          display: block;\n          height: 50px;\n          line-height: 50px;\n          float: left;\n          transition: opacity 50ms ease-in-out 150ms; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button {\n          float: right;\n          height: 50px;\n          line-height: 50px;\n          text-align: center;\n          transition: all 250ms ease-in-out; }\n          .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button.collapsed, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button.collapsed {\n            -webkit-transform: rotate(-90deg);\n                    transform: rotate(-90deg); }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link.router-link-active {\n        padding: 0 15px 0 12px;\n        border-left: 3px solid #38b1eb;\n        color: #fff;\n        background: rgba(0, 0, 0, 0.08); }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-children {\n        overflow: hidden;\n        transition: all 250ms ease-in-out; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.hasChildren {\n        box-shadow: inset rgba(0, 0, 0, 0.05) 0px 3px 1px, inset rgba(0, 0, 0, 0.1) 0px 1px 1px, inset rgba(0, 0, 0, 0.05) 0px -3px 1px, inset rgba(0, 0, 0, 0.1) 0px -1px 1px; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed {\n        background: transparent;\n        box-shadow: none; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed .nav-menu-children {\n          height: 0 !important; }\n\n@media (max-width: 767px) {\n  .app .nav-menu {\n    top: 0 !important;\n    bottom: 0;\n    width: 70%;\n    height: 100%;\n    padding-top: 60px;\n    z-index: 60; }\n  .app.collapsed .nav-menu {\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n    opacity: 0; } }\n",""])},563:function(n,e,t){var a=t(564);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(142)(a,i);a.locals&&(n.exports=a.locals)},564:function(n,e,t){e=n.exports=t(141)(!1);var a=t(348)(t(444));e.push([n.i,".brand {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 250px;\n  height: 60px;\n  font-size: 14px;\n  line-height: 60px;\n  text-align: left;\n  cursor: default;\n  transition: all 250ms ease-in-out;\n  overflow: visible;\n  background: #506379;\n  color: #b8c6d6; }\n  .brand .menu-toggle-button {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    display: none;\n    z-index: 1;\n    line-height: 0;\n    font-size: 16px;\n    color: #b8c6d6; }\n  .brand .brand-name {\n    margin-left: 18px;\n    box-sizing: border-box;\n    overflow: hidden;\n    height: 60px;\n    text-decoration: none;\n    color: #b8c6d6;\n    transition: color 250ms ease-in-out; }\n    .brand .brand-name .brand-logo {\n      display: inline-block;\n      vertical-align: middle;\n      border-radius: 0;\n      width: 30px;\n      height: 30px;\n      margin: 15px 15px 15px 0;\n      background-image: url("+a+");\n      background-size: 30px 30px; }\n    .brand .brand-name:hover {\n      color: #fff; }\n  .brand .github-icon {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    display: none;\n    z-index: 1;\n    font-size: 20px;\n    color: #b8c6d6; }\n\n@media (max-width: 767px) {\n  .brand {\n    background: #344c67 !important;\n    width: 100% !important;\n    text-align: center; }\n    .brand .menu-toggle-button {\n      display: block; }\n    .brand .brand-name {\n      text-align: center;\n      margin-left: 0; }\n    .brand .github-icon {\n      display: block; } }\n",""])},565:function(n,e,t){var a=t(566);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(142)(a,i);a.locals&&(n.exports=a.locals)},566:function(n,e,t){(n.exports=t(141)(!1)).push([n.i,".app-nav {\n  height: 60px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 90; }\n  .app-nav .nav-collapse {\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 1px, rgba(0, 0, 0, 0.1) 0px 1px 1px;\n    width: calc(100% - 250px);\n    background-color: #fff;\n    position: absolute;\n    right: 0;\n    margin-left: 250px;\n    height: 60px;\n    overflow: visible;\n    box-sizing: border-box;\n    transition: all 250ms ease-in-out; }\n    .app-nav .nav-collapse .github-icon {\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      font-size: 24px; }\n\n@media (max-width: 767px) {\n  .app-nav .nav-collapse {\n    width: 0 !important;\n    margin-left: 0 !important;\n    box-shadow: none;\n    overflow: hidden; } }\n",""])},567:function(n,e,t){var a=t(568);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(142)(a,i);a.locals&&(n.exports=a.locals)},568:function(n,e,t){(n.exports=t(141)(!1)).push([n.i,'.app .app-content {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 1px, rgba(0, 0, 0, 0.1) 0px 1px 1px;\n  position: relative;\n  background: #fff;\n  box-sizing: border-box;\n  min-height: 100vh;\n  padding: 60px 0 0 250px;\n  transition: all 250ms ease-in-out; }\n  .app .app-content .content-router-view {\n    min-height: 100%; }\n    .app .app-content .content-router-view::before, .app .app-content .content-router-view::after {\n      display: table;\n      content: ""; }\n    .app .app-content .content-router-view::after {\n      clear: both; }\n  .app .app-content .module-loading {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin: -24px; }\n  .app .app-content .app-content-modal {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0; }\n\n@media (max-width: 767px) {\n  .app .app-content {\n    padding-left: 0;\n    -webkit-transform: translate3d(70%, 0, 0);\n            transform: translate3d(70%, 0, 0); }\n  .app.collapsed .app-content {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n',""])},569:function(n,e,t){var a=t(570);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(142)(a,i);a.locals&&(n.exports=a.locals)},570:function(n,e,t){(n.exports=t(141)(!1)).push([n.i,'.example {\n  padding: 20px 30px 30px; }\n  .example p {\n    padding: 0 0 10px 0;\n    font-size: 14px;\n    line-height: 24px; }\n    .example p span {\n      color: #38b1eb; }\n  .example .example-title {\n    font-size: 18px;\n    cursor: default;\n    padding-bottom: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.06); }\n  .example .widget {\n    margin-bottom: 30px; }\n  .example .example-content {\n    padding: 30px; }\n    .example .example-content::before, .example .example-content::after {\n      display: table;\n      content: ""; }\n    .example .example-content::after {\n      clear: both; }\n    .example .example-content code {\n      padding: 5px;\n      margin: 0;\n      background-color: rgba(0, 0, 0, 0.04);\n      border-radius: 3px;\n      font-family: Consolas, Liberation Mono, Menlo, Courier, monospace; }\n  .example .prop-type-desc-table tbody tr td:first-child {\n    color: #38b1eb; }\n  .example .prop-type-desc-table tbody tr td:nth-child(2) {\n    color: #d8534e; }\n  .example .prop-type-desc-table thead tr th {\n    color: #4c637b;\n    font-size: 15px;\n    border: none; }\n\n@media (max-width: 767px) {\n  .example {\n    padding: 8px 16px 16px; }\n    .example .example-content {\n      padding: 16px; } }\n',""])},889:function(n,e,t){"use strict";t.r(e);var a=t(77),i=t.n(a),o=t(78),r=t.n(o),l=t(79),s=t.n(l),u=t(80),c=t.n(u),p=t(81),m=t.n(p),d=t(0),v=t.n(d),h=t(1),f=t.n(h),b=t(83),g=t(4),x=t(560),y=t(86),w=t(354),k=t.n(w),M=t(407),E=t(369),N=t(11),C=t.n(N),T=t(20),z=t.n(T),R=t(425),L=t(392),H=function(n){function e(n){var t;return i()(this,e),t=s()(this,c()(e).call(this,n)),z()(C()(C()(t)),"menuGroupClickHandler",function(){var n=t.props,e=n.expandMenuName,a=n.options,i=n.expandMenu;e===a.text?i(""):i(a.text)}),z()(C()(C()(t)),"menuClickHandler",function(){var n=t.props,e=n.options,a=n.depth,i=n.expandMenu,o=n.updateActivatedMenu;0===a&&i(""),o(e)}),t.menuHeight=50,t.subMenuIndent=20,t}return m()(e,n),r()(e,[{key:"render",value:function(){var n=this.props,t=n.expandMenuName,a=n.activatedMenu,i=n.options,o=n.depth,r=n.expandMenu,l=n.updateActivatedMenu,s=this.menuHeight,u=this.subMenuIndent,c=t!==i.text,p=i.children&&i.children.length>0,m=k()("nav-menu-item-link",{"router-link-active":a&&a.route===i.route});return v.a.createElement("div",{className:"nav-menu-item ".concat(c?"collapsed":""," ").concat(p?"hasChildren":"")},p?v.a.createElement("div",{className:"nav-menu-item-title",disabled:i.disabled,onClick:this.menuGroupClickHandler},v.a.createElement("div",{className:"nav-menu-item-name"},i.text),v.a.createElement("i",{className:"fas fa-angle-down nav-menu-item-collapse-button\n                                ".concat(c?"collapsed":""),"aria-hidden":"true"}),v.a.createElement(L.a,null)):v.a.createElement(R.Link,{className:m,to:i.route,disabled:i.disabled,onClick:this.menuClickHandler},v.a.createElement("div",{className:"nav-menu-item-name",style:{marginLeft:o*u}},i.text),v.a.createElement(L.a,null)),p?v.a.createElement("div",{className:"nav-menu-children",style:{height:i.children.length*s}},i&&i.children&&i.children.map(function(n,i){return v.a.createElement(e,{key:i,expandMenuName:t,activatedMenu:a,options:n,depth:o+1,expandMenu:r,updateActivatedMenu:l})})):null)}}]),e}(d.Component);H.propTypes={expandMenuName:f.a.string,activatedMenu:f.a.object,options:f.a.object,depth:f.a.number,expandMenu:f.a.func,updateActivatedMenu:f.a.func},H.defaultProps={expandMenuName:"",depth:0};var A=H,P=t(439),j=function(n){function e(n){return i()(this,e),s()(this,c()(e).call(this,n))}return m()(e,n),r()(e,[{key:"render",value:function(){var n=this.props,e=n.navMenu,t=n.expandMenuName,a=n.activatedMenu,i=n.expandMenu,o=n.updateActivatedMenu;return v.a.createElement("div",{className:"nav-menu-list",onWheel:P.a.preventContainerScroll},v.a.createElement("div",{className:"nav-menu-scroller"},e&&e.map(function(n,e){return v.a.createElement(A,{key:n&&n.text||e,expandMenuName:t,activatedMenu:a,options:n,expandMenu:i,updateActivatedMenu:o})})))}}]),e}(d.Component);j.propTypes={navMenu:f.a.array,expandMenuName:f.a.string,activatedMenu:f.a.object,expandMenu:f.a.func,updateActivatedMenu:f.a.func};var O=Object(b.connect)(function(n){return{navMenu:n.navMenu.menu,expandMenuName:n.navMenu.expandMenuName,activatedMenu:n.navMenu.activatedMenu}},function(n){return Object(g.bindActionCreators)({expandMenu:M.c,updateActivatedMenu:M.h},n)})(j),S=(t(561),function(n){function e(n){return i()(this,e),s()(this,c()(e).call(this,n))}return m()(e,n),r()(e,[{key:"render",value:function(){var n=this.props,e=n.filter,t=n.updateFilter;return v.a.createElement("div",{className:"nav-menu"},v.a.createElement(E.a,{className:"nav-menu-filter",value:e,rightIconCls:"fas fa-search",onChange:t}),v.a.createElement(O,null))}}]),e}(d.Component));S.propTypes={filter:f.a.string,updateFilter:f.a.func};var D=Object(b.connect)(function(n){return{filter:n.navMenu.filter}},function(n){return Object(g.bindActionCreators)({updateFilter:M.i},n)})(S),I=t(376),F=t(409),U=(t(563),function(n){function e(n){var t;return i()(this,e),t=s()(this,c()(e).call(this,n)),z()(C()(C()(t)),"mousedownHandler",function(n){n.stopPropagation(),t.props.toggleNavMenu()}),t}return m()(e,n),r()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"brand"},v.a.createElement(I.a,{className:"menu-toggle-button",iconCls:"fas fa-bars",onClick:this.mousedownHandler}),v.a.createElement(R.Link,{className:"brand-name",to:"/"},v.a.createElement("i",{className:"brand-logo"}),"Alcedo-UI Examples"),v.a.createElement(F.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"}))}}]),e}(d.Component));U.propTypes={toggleNavMenu:f.a.func};var B=Object(b.connect)(function(n){return{}},function(n){return Object(g.bindActionCreators)({toggleNavMenu:M.g},n)})(U),G=(t(565),function(n){function e(n){return i()(this,e),s()(this,c()(e).call(this,n))}return m()(e,n),r()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"app-nav"},v.a.createElement(B,null),v.a.createElement("div",{className:"nav-collapse floatfix"},v.a.createElement(F.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"})))}}]),e}(d.Component)),J=t(437),V=(t(567),t(569),function(n){function e(n){return i()(this,e),s()(this,c()(e).call(this,n))}return m()(e,n),r()(e,[{key:"componentDidMount",value:function(){this.props.expandActivatedMenu(location.hash.slice(1))}},{key:"render",value:function(){var n=this.props,e=n.route,t=n.location,a=n.isDesktop,i=n.navMenuCollapsed,o=n.componentLoading,r=n.collapseNavMenu,l=k()("app",{collapsed:i});return v.a.createElement("div",{className:l},v.a.createElement(J.a,{visible:o}),v.a.createElement(D,null),v.a.createElement(G,null),v.a.createElement("div",{className:"app-content"},Object(y.renderRoutes)(e.routes),"/components"===t.pathname?v.a.createElement(x.Redirect,{from:"/components",to:"/components/RaisedButton"}):null,a||i?null:v.a.createElement("div",{className:"app-content-modal",onClick:r})))}}]),e}(d.Component));V.propTypes={isDesktop:f.a.bool,navMenuCollapsed:f.a.bool,componentLoading:f.a.bool,expandActivatedMenu:f.a.func,collapseNavMenu:f.a.func};e.default=Object(b.connect)(function(n){return{isDesktop:n.device.isDesktop,navMenuCollapsed:n.navMenu.navMenuCollapsed,componentLoading:n.loadComponent.loading}},function(n){return Object(g.bindActionCreators)({expandActivatedMenu:M.b,collapseNavMenu:M.a},n)})(V)}}]);
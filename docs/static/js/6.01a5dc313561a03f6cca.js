webpackJsonp([6],{1022:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(0),p=l(s),f=n(24),d=l(f),c=n(437),m=l(c),g=n(54),b=l(g),h=n(15),E=l(h),v=n(416),M=l(v),y=n(417),T=l(y),w=n(1029),P=l(w),R=n(1148),x=l(R);n(1039);var O=function(e){function t(e){u(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={menuVisible1:!1,menuVisible2:!1,menuVisible3:!1,menuVisible4:!1,menuVisible5:!1,menuVisible6:!1,menuVisible7:!1,menuVisible8:!1,menuVisible9:!1,menuVisible10:!1,menuVisible11:!1,menuVisible12:!1,menuVisible13:!1,menuVisible14:!1,menuVisible15:!1,triggerEl1:null,triggerEl2:null,triggerEl3:null,triggerEl4:null,triggerEl5:null,triggerEl6:null,triggerEl7:null,triggerEl8:null,triggerEl9:null,triggerEl10:null,triggerEl11:null,triggerEl12:null,triggerEl13:null,triggerEl14:null,triggerEl15:null},n.showMenu=n.showMenu.bind(n),n.hideMenu=n.hideMenu.bind(n),n}return r(t,e),i(t,[{key:"showMenu",value:function(e,t){var n;this.setState((n={},o(n,"menuVisible"+t,!0),o(n,"triggerEl"+t,e.currentTarget),n))}},{key:"hideMenu",value:function(e){this.setState(o({},"menuVisible"+e,!1))}},{key:"render",value:function(){var e=this,t=this.state,n=t.menuVisible1,l=t.menuVisible3,o=t.menuVisible4,u=t.menuVisible5,a=t.menuVisible6,r=t.menuVisible7,i=t.menuVisible8,s=t.menuVisible9,f=t.menuVisible10,c=t.menuVisible11,g=t.menuVisible12,h=t.menuVisible13,v=t.menuVisible14,y=t.menuVisible15,w=t.triggerEl1,R=t.triggerEl3,O=t.triggerEl4,N=t.triggerEl5,_=t.triggerEl6,V=t.triggerEl7,C=t.triggerEl8,I=t.triggerEl9,j=t.triggerEl10,A=t.triggerEl11,q=t.triggerEl12,Y=t.triggerEl13,B=t.triggerEl14,L=t.triggerEl15,k=[{iconCls:"fa fa-facebook",text:"Facebook",theme:E.default.PRIMARY},{iconCls:"fa fa-twitter",text:"Twitter",theme:E.default.PRIMARY},{iconCls:"fa fa-google-plus",text:"Google+",theme:E.default.PRIMARY}];return p.default.createElement("div",{className:"example popup-examples"},p.default.createElement("h2",{className:"example-title"},"Menu"),p.default.createElement("p",null,"A ",p.default.createElement("span",null,"Menu")," can be used as an alternative to a Drop Down Menu that can contain elements inside."),p.default.createElement("h2",{className:"example-title"},"Examples"),p.default.createElement(M.default,null,p.default.createElement(T.default,{className:"example-header",title:"Basic"}),p.default.createElement("div",{className:"widget-content"},p.default.createElement("div",{className:"example-content"},p.default.createElement("div",{className:"popup-example-wrapper"},p.default.createElement("p",null,p.default.createElement("code",null,"Menu")," simple example."),p.default.createElement(d.default,{className:"trigger-button",value:"Toggle Menu",onMouseEnter:function(t){e.showMenu(t,1)}}),p.default.createElement(m.default,{visible:n,triggerEl:w,theme:E.default.PRIMARY,onRequestClose:function(){e.hideMenu(1)}},p.default.createElement(b.default,{items:k})))))),p.default.createElement(M.default,null,p.default.createElement(T.default,{className:"example-header",title:"Without triangle"}),p.default.createElement("div",{className:"widget-content"},p.default.createElement("div",{className:"example-content"},p.default.createElement("div",{className:"popup-example-wrapper"},p.default.createElement("p",null,"Set ",p.default.createElement("code",null,"hasTriangle")," to false,the popover will have no triangle on the top of the DOM element."),p.default.createElement(d.default,{className:"trigger-button",value:"Toggle Menu",onMouseEnter:function(t){e.showMenu(t,3)}}),p.default.createElement(m.default,{visible:l,triggerEl:R,hasTriangle:!1,onRequestClose:function(){e.hideMenu(3)}},p.default.createElement(b.default,{items:k})))))),p.default.createElement(M.default,null,p.default.createElement(T.default,{className:"example-header",title:"With value"}),p.default.createElement("div",{className:"widget-content"},p.default.createElement("div",{className:"example-content"},p.default.createElement("div",{className:"popup-example-wrapper"},p.default.createElement("p",null,"Set the ",p.default.createElement("code",null,"value")," property to show different position of ",p.default.createElement("code",null,"Menu"),"."),p.default.createElement("div",{className:"button-group-wrapper"},p.default.createElement("div",{className:"button-group top"},p.default.createElement(d.default,{className:"trigger-position-button",value:"Top Left",onMouseEnter:function(t){e.showMenu(t,7)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Top",onMouseEnter:function(t){e.showMenu(t,8)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Top right",onMouseEnter:function(t){e.showMenu(t,9)}})),p.default.createElement("div",{className:"button-group right"},p.default.createElement(d.default,{className:"trigger-position-button",value:"Right Top",onMouseEnter:function(t){e.showMenu(t,13)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Right",onMouseEnter:function(t){e.showMenu(t,14)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Right Bottom",onMouseEnter:function(t){e.showMenu(t,15)}})),p.default.createElement("div",{className:"button-group bottom"},p.default.createElement(d.default,{className:"trigger-position-button",value:"Bottom Left",onMouseEnter:function(t){e.showMenu(t,4)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Bottom",onMouseEnter:function(t){e.showMenu(t,5)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Bottom Right",onMouseEnter:function(t){e.showMenu(t,6)}})),p.default.createElement("div",{className:"button-group left"},p.default.createElement(d.default,{className:"trigger-position-button",value:"Left Top",onMouseEnter:function(t){e.showMenu(t,10)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Left",onMouseEnter:function(t){e.showMenu(t,11)}}),p.default.createElement(d.default,{className:"trigger-position-button",value:"Left Bottom",onMouseEnter:function(t){e.showMenu(t,12)}}))),p.default.createElement(m.default,{visible:o,triggerEl:O,theme:E.default.PRIMARY,position:m.default.Position.BOTTOM_LEFT,onRequestClose:function(){e.hideMenu(4)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:u,triggerEl:N,theme:E.default.PRIMARY,position:m.default.Position.BOTTOM,onRequestClose:function(){e.hideMenu(5)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:a,triggerEl:_,theme:E.default.PRIMARY,position:m.default.Position.BOTTOM_RIGHT,onRequestClose:function(){e.hideMenu(6)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:r,triggerEl:V,theme:E.default.PRIMARY,position:m.default.Position.TOP_LEFT,onRequestClose:function(){e.hideMenu(7)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:i,triggerEl:C,theme:E.default.PRIMARY,position:m.default.Position.TOP,onRequestClose:function(){e.hideMenu(8)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:s,triggerEl:I,theme:E.default.PRIMARY,position:m.default.Position.TOP_RIGHT,onRequestClose:function(){e.hideMenu(9)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:f,triggerEl:j,theme:E.default.PRIMARY,position:m.default.Position.LEFT_TOP,onRequestClose:function(){e.hideMenu(10)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:c,triggerEl:A,theme:E.default.PRIMARY,position:m.default.Position.LEFT,onRequestClose:function(){e.hideMenu(11)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:g,triggerEl:q,theme:E.default.PRIMARY,position:m.default.Position.LEFT_BOTTOM,onRequestClose:function(){e.hideMenu(12)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:h,triggerEl:Y,theme:E.default.PRIMARY,position:m.default.Position.RIGHT_TOP,onRequestClose:function(){e.hideMenu(13)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:v,triggerEl:B,theme:E.default.PRIMARY,position:m.default.Position.RIGHT,onRequestClose:function(){e.hideMenu(14)}},p.default.createElement(b.default,{items:k})),p.default.createElement(m.default,{visible:y,triggerEl:L,theme:E.default.PRIMARY,position:m.default.Position.RIGHT_BOTTOM,onRequestClose:function(){e.hideMenu(15)}},p.default.createElement(b.default,{items:k})))))),p.default.createElement("h2",{className:"example-title"},"Properties"),p.default.createElement(P.default,{data:x.default}))}}]),t}(s.Component);t.default=O},1029:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),s=n(0),p=l(s),f=n(2),d=l(f),c=n(415),m=l(c);n(1031);var g=function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=n.generateData.bind(n),n}return a(t,e),i(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return p.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isAdaptiveHeight:!0})}}]),t}(s.Component);t.default=g,g.propTypes={data:d.default.object},g.defaultProps={data:""}},1030:function(e,t,n){t=e.exports=n(976)(),t.push([e.i,"",""])},1031:function(e,t,n){var l=n(1030);"string"==typeof l&&(l=[[e.i,l,""]]);n(977)(l,{});l.locals&&(e.exports=l.locals)},1035:function(e,t,n){t=e.exports=n(976)(),t.push([e.i,".popup-examples .trigger-button {\n  width: 160px;\n  height: 50px;\n  margin: 0; }\n\n.popup-examples .button-group-wrapper {\n  position: relative;\n  width: 440px;\n  height: 280px; }\n  .popup-examples .button-group-wrapper .button-group .trigger-position-button {\n    width: 100px; }\n  .popup-examples .button-group-wrapper .button-group.top {\n    position: absolute;\n    left: 50px; }\n    .popup-examples .button-group-wrapper .button-group.top .trigger-position-button {\n      margin-left: 20px; }\n      .popup-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child {\n        margin-left: 0; }\n  .popup-examples .button-group-wrapper .button-group.left {\n    position: absolute;\n    top: 60px;\n    left: 0; }\n    .popup-examples .button-group-wrapper .button-group.left .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .popup-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child {\n        margin-top: 0; }\n  .popup-examples .button-group-wrapper .button-group.right {\n    position: absolute;\n    top: 60px;\n    right: 0; }\n    .popup-examples .button-group-wrapper .button-group.right .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .popup-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child {\n        margin-top: 0; }\n  .popup-examples .button-group-wrapper .button-group.bottom {\n    position: absolute;\n    left: 50px;\n    bottom: 0; }\n    .popup-examples .button-group-wrapper .button-group.bottom .trigger-position-button {\n      margin-left: 20px; }\n      .popup-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child {\n        margin-left: 0; }\n",""])},1039:function(e,t,n){var l=n(1035);"string"==typeof l&&(l=[[e.i,l,""]]);n(977)(l,{});l.locals&&(e.exports=l.locals)},1148:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},triggerEl:{type:"PropTypes.object",desc:"This is the DOM element that will be used to set the position of the popover.",default:"null"},visible:{type:"PropTypes.bool",desc:"If true,the popover is visible.",default:"false"},hasTriangle:{type:"PropTypes.bool",desc:"If true,the popover will have a triangle on the top of the DOM element.",default:"true"},theme:{type:"PropTypes.oneOf",desc:"The popover theme.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},position:{type:"PropTypes.oneOf",desc:"The popover alignment.The value can be Menu.Position.LEFT or Menu.Position.RIGHT.",default:"MenuBody.Position.BOTTOM_LEFT"},isAnimated:{type:"PropTypes.bool",desc:"If true, menu will have animation effects.",default:"true"},triggerMode:{type:"PropTypes.oneOf",desc:"The status of menu-triangle.Can be open or toggle.",default:"MenuBody.TriggerMode.TOGGLE"},depth:{type:"PropTypes.number",desc:"The depth of Paper component.",default:"4"},onRender:{type:"PropTypes.func",desc:"The function of menu render."},onRequestClose:{type:"PropTypes.func",desc:"Callback function fired when the popover is requested to be closed."}}}});
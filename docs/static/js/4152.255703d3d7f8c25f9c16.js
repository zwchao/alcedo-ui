(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[4152],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const i=o},97755:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".pop-examples .material-text-field {\n  margin-top: 24px; }\n\n.pop-examples .trigger-button {\n  width: 160px;\n  height: 50px;\n  margin: 0; }\n\n.pop-examples .button-group-wrapper {\n  position: relative;\n  width: 500px;\n  height: 280px;\n  margin-top: 32px; }\n  .pop-examples .button-group-wrapper .button-group .trigger-position-button {\n    width: 120px; }\n  .pop-examples .button-group-wrapper .button-group.top {\n    position: absolute;\n    left: 50px; }\n    .pop-examples .button-group-wrapper .button-group.top .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.left {\n    position: absolute;\n    top: 60px;\n    left: 0; }\n    .pop-examples .button-group-wrapper .button-group.left .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.right {\n    position: absolute;\n    top: 60px;\n    right: 0; }\n    .pop-examples .button-group-wrapper .button-group.right .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.bottom {\n    position: absolute;\n    left: 50px;\n    bottom: 0; }\n    .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.center {\n    position: absolute;\n    left: 190px;\n    top: 120px; }\n    .pop-examples .button-group-wrapper .button-group.center .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child {\n        margin-left: 0; }\n",""]);const i=o},94932:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".customized-tip .customized-tip-triangle {\n  position: relative;\n  top: -4px; }\n\n.customized-tip .tip-content {\n  border: 1px solid #e7e7e7; }\n\n.tip-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .tip-dialog-content-scroller .dialog-trigger-button {\n    display: block;\n    width: auto;\n    margin-bottom: 16px; }\n",""]);const i=o},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(34575),o=n.n(r),i=n(93913),p=n.n(i),s=n(81506),a=n.n(s),l=n(2205),u=n.n(l),c=n(78585),g=n.n(c),m=n(29754),f=n.n(m),d=n(59713),h=n.n(d),b=n(37699),v=n(45697),T=n.n(v),O=n(82996),E=n(93379),y=n.n(E),w=n(29250);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}y()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;var P=function(e){u()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var o=f()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return g()(this,e)});function i(e){var t;return o()(this,i),t=r.call(this,e),h()(a()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(N({name:n},t.props.data[n]));return e})),t}return p()(i,[{key:"render",value:function(){return b.createElement("div",{className:"prop-type-desc-table-wrapper"},b.createElement(O.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),i}(b.Component);P.propTypes={data:T().object};const x=P},17901:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var r=n(34575),o=n.n(r),i=n(93913),p=n.n(i),s=n(81506),a=n.n(s),l=n(2205),u=n.n(l),c=n(78585),g=n.n(c),m=n(29754),f=n.n(m),d=n(59713),h=n.n(d),b=n(37699),v=n(79958),T=n(22944),O=n(96509),E=n(88787),y=n(24471),w=n(50704),Z=n(87712),N=n(65460),P=n(22356);const x=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"contentClassName":{"type":"PropTypes.string","desc":"The CSS class name of the content element."},"modalClassName":{"type":"PropTypes.string"},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The popover theme.Can be primary,highlight,success,warning,error.","default":"Theme.DARK"},"parentEl":{"type":"PropTypes.object","default":"document.body"},"triggerEl":{"type":"PropTypes.object","desc":"This is the DOM element that will be used to set the position of the popover."},"visible":{"type":"PropTypes.bool","desc":"If true,the popover is visible.","default":"false"},"hasTriangle":{"type":"PropTypes.bool","desc":"If true,the popover will have a triangle on the top of the DOM element.","default":"true"},"triangle":{"type":"PropTypes.element"},"position":{"type":"PropTypes.oneOf","desc":"The popover alignment.","default":"Position.BOTTOM"},"isAnimated":{"type":"PropTypes.bool","desc":"If true, menu will have animation effects.","default":"true"},"depth":{"type":"PropTypes.number","desc":"The depth of Paper component."},"shouldFollowScroll":{"type":"PropTypes.bool","default":"false"},"scrollEl":{"type":"PropTypes.object"},"resetPositionWait":{"type":"PropTypes.number","default":"250"},"showModal":{"type":"PropTypes.bool","default":"false"},"onRender":{"type":"PropTypes.func","desc":"The function of tip render."},"onRendered":{"type":"PropTypes.func","desc":"The function of tip rendered."},"onDestroy":{"type":"PropTypes.func","desc":"The function of tip destroy."},"onDestroyed":{"type":"PropTypes.func","desc":"The function of tip destroyed."},"onWheel":{"type":"PropTypes.func","desc":"Callback function fired when wrapper wheeled."}}');n(64566);var M=n(93379),D=n.n(M),C=n(94932);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}D()(C.Z,{insert:"head",singleton:!1}),C.Z.locals;const S=function(e){u()(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var o=f()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return g()(this,e)});function i(e){var t;return o()(this,i),t=r.call(this,e),h()(a()(t),"show",(function(e){var n=j({},t.state.popVisible);n[e]=!0,t.setState({popVisible:n})})),h()(a()(t),"hide",(function(e){var n=j({},t.state.popVisible);n[e]=!1,t.setState({popVisible:n})})),t.state={popVisible:{}},t}return p()(i,[{key:"render",value:function(){var e=this,t=this.state.popVisible;return b.createElement("div",{className:"example pop-examples tip-examples"},b.createElement("h2",{className:"example-title"},"Tip"),b.createElement("p",null,"A ",b.createElement("span",null,"Tip")," can be used as an alternative to a Drop Down Tip that can contain elements inside."),b.createElement("h2",{className:"example-title"},"Examples"),b.createElement(y.Z,null,b.createElement(w.Z,{className:"example-header",title:"With value"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"popup-example-wrapper"},b.createElement("p",null,"Set the ",b.createElement("code",null,"value")," property to show different position of ",b.createElement("code",null,"Tip"),"."),b.createElement("div",{className:"button-group-wrapper"},b.createElement("div",{className:"button-group top"},b.createElement(T.Z,{ref:function(t){return e.trigger3=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Top Left",onMouseOver:function(){return e.show(3)},onMouseOut:function(){return e.hide(3)}}),b.createElement(T.Z,{ref:function(t){return e.trigger4=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Top",onMouseOver:function(){return e.show(4)},onMouseOut:function(){return e.hide(4)}}),b.createElement(T.Z,{ref:function(t){return e.trigger5=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Top right",onMouseOver:function(){return e.show(5)},onMouseOut:function(){return e.hide(5)}})),b.createElement("div",{className:"button-group right"},b.createElement(T.Z,{ref:function(t){return e.trigger9=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Right Top",onMouseOver:function(){return e.show(9)},onMouseOut:function(){return e.hide(9)}}),b.createElement(T.Z,{ref:function(t){return e.trigger10=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Right",onMouseOver:function(){return e.show(10)},onMouseOut:function(){return e.hide(10)}}),b.createElement(T.Z,{ref:function(t){return e.trigger11=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){return e.show(11)},onMouseOut:function(){return e.hide(11)}})),b.createElement("div",{className:"button-group bottom"},b.createElement(T.Z,{ref:function(t){return e.trigger0=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){return e.show(0)},onMouseOut:function(){return e.hide(0)}}),b.createElement(T.Z,{ref:function(t){return e.trigger1=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom",onMouseOver:function(){return e.show(1)},onMouseOut:function(){return e.hide(1)}}),b.createElement(T.Z,{ref:function(t){return e.trigger2=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){return e.show(2)},onMouseOut:function(){return e.hide(2)}})),b.createElement("div",{className:"button-group left"},b.createElement(T.Z,{ref:function(t){return e.trigger6=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Left Top",onMouseOver:function(){return e.show(6)},onMouseOut:function(){return e.hide(6)}}),b.createElement(T.Z,{ref:function(t){return e.trigger7=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Left",onMouseOver:function(){return e.show(7)},onMouseOut:function(){return e.hide(7)}}),b.createElement(T.Z,{ref:function(t){return e.trigger8=(0,v.findDOMNode)(t)},className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){return e.show(8)},onMouseOut:function(){return e.hide(8)}}))),b.createElement(O.Z,{visible:t[0],triggerEl:this.trigger0,position:O.Z.Position.BOTTOM_LEFT},"Tip Content"),b.createElement(O.Z,{visible:t[1],triggerEl:this.trigger1,position:O.Z.Position.BOTTOM},"Tip Content"),b.createElement(O.Z,{visible:t[2],triggerEl:this.trigger2,position:O.Z.Position.BOTTOM_RIGHT},"Tip Content"),b.createElement(O.Z,{visible:t[3],triggerEl:this.trigger3,position:O.Z.Position.TOP_LEFT},"Tip Content"),b.createElement(O.Z,{visible:t[4],triggerEl:this.trigger4,position:O.Z.Position.TOP},"Tip Content"),b.createElement(O.Z,{visible:t[5],triggerEl:this.trigger5,position:O.Z.Position.TOP_RIGHT},"Tip Content"),b.createElement(O.Z,{visible:t[6],triggerEl:this.trigger6,position:O.Z.Position.LEFT_TOP},"Tip Content"),b.createElement(O.Z,{visible:t[7],triggerEl:this.trigger7,position:O.Z.Position.LEFT},"Tip Content"),b.createElement(O.Z,{visible:t[8],triggerEl:this.trigger8,position:O.Z.Position.LEFT_BOTTOM},"Tip Content"),b.createElement(O.Z,{visible:t[9],triggerEl:this.trigger9,position:O.Z.Position.RIGHT_TOP},"Tip Content"),b.createElement(O.Z,{visible:t[10],triggerEl:this.trigger10,position:O.Z.Position.RIGHT},"Tip Content"),b.createElement(O.Z,{visible:t[11],triggerEl:this.trigger11,position:O.Z.Position.RIGHT_BOTTOM},"Tip Content"))))),b.createElement(y.Z,null,b.createElement(w.Z,{className:"example-header",title:"Customized Tip Triangle"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"popup-example-wrapper"},b.createElement(T.Z,{ref:function(t){return e.trigger12=(0,v.findDOMNode)(t)},className:"trigger-button",value:"Show Tip",onMouseOver:function(){return e.show(12)},onMouseOut:function(){return e.hide(12)}}),b.createElement(O.Z,{className:"customized-tip",theme:Z.Z.DEFAULT,visible:t[12],triggerEl:this.trigger12,triangle:b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-tip-triangle",width:"17",height:"7"},b.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}}))},"Tip Content"))))),b.createElement(y.Z,null,b.createElement(w.Z,{className:"example-header",title:"Use Tip Provider"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"popup-example-wrapper"},b.createElement(E.Z,{tipContent:"Tip Content"},b.createElement(T.Z,{className:"trigger-button",value:"Show Tip",onMouseOver:function(){return console.log("onMouseOver")},onMouseOut:function(){return console.log("onMouseOut")}})))))),b.createElement(y.Z,null,b.createElement(w.Z,{className:"example-header",title:"Tip in Dialog"}),b.createElement("div",{className:"widget-content"},b.createElement("div",{className:"example-content"},b.createElement("div",{className:"popup-example-wrapper"},b.createElement(T.Z,{className:"trigger-button",value:"Show Dialog",onClick:function(){return e.show(13)}}),b.createElement(N.Z,{visible:t[13],onRequestClose:function(){return e.hide(13)}},(function(n){return b.createElement("div",{className:"tip-dialog-content-scroller"},b.createElement(T.Z,{ref:function(t){return e.trigger14=(0,v.findDOMNode)(t)},className:"dialog-trigger-button",value:"Toggle Tip",onMouseOver:function(){return e.show(14)},onMouseOut:function(){return e.hide(14)}}),b.createElement(O.Z,{position:O.Z.Position.BOTTOM_LEFT,visible:t[14],triggerEl:e.trigger14,parentEl:n},"Tip Content"),b.createElement(E.Z,{tipContent:"Tip Content",parentEl:n,position:E.Z.Position.BOTTOM_LEFT},b.createElement(T.Z,{className:"dialog-trigger-button",value:"Toggle TipProvider"})),b.createElement(T.Z,{ref:function(t){return e.trigger15=(0,v.findDOMNode)(t)},className:"dialog-trigger-button",value:"Toggle Tip",onMouseOver:function(){return e.show(15)},onMouseOut:function(){return e.hide(15)}}),b.createElement(O.Z,{position:O.Z.Position.BOTTOM_LEFT,visible:t[15],triggerEl:e.trigger15,shouldFollowScroll:!0},"Tip Content"),b.createElement(E.Z,{tipContent:"Tip Content",position:E.Z.Position.BOTTOM_LEFT,shouldFollowScroll:!0},b.createElement(T.Z,{className:"dialog-trigger-button",value:"Toggle TipProvider"})))})))))),b.createElement("h2",{className:"example-title"},"Properties"),b.createElement(P.Z,{data:x}))}}]),i}(b.Component)},64566:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),i=n(97755);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals}}]);
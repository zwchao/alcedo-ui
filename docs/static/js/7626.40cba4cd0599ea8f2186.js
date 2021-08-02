"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[7626],{59141:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const c=a},87707:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".widget-examples .widget .widget-content{padding:20px}",""]);const c=a},1116:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(6610),a=n(5991),c=n(63349),l=n(10379),o=n(46070),s=n(77608),i=n(96156),p=n(37699),u=n(45697),d=n.n(u),f=n(82996),m=n(93379),h=n.n(m),y=n(7795),b=n.n(y),v=n(90569),Z=n.n(v),g=n(3565),E=n.n(g),w=n(19216),O=n.n(w),P=n(44589),R=n.n(P),x=n(59141),N={};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}N.styleTagTransform=R(),N.setAttributes=E(),N.insert=Z().bind(null,"head"),N.domAPI=b(),N.insertStyleElement=O(),h()(x.Z,N),x.Z&&x.Z.locals&&x.Z.locals;var D=function(e){(0,l.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),t=u.call(this,e),(0,i.Z)((0,c.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(j({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(d,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(p.Component);D.propTypes={data:d().object};const S=D},47408:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(6610),a=n(5991),c=n(10379),l=n(46070),o=n(77608),s=n(37699),i=n(96453),p=n(24471),u=n(50704),d=n(1116);const f=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"depth":{"type":"PropTypes.number","desc":"This number represents the zDepth of the root element shadow.","default":"1"}}');var m=n(93379),h=n.n(m),y=n(7795),b=n.n(y),v=n(90569),Z=n.n(v),g=n(3565),E=n.n(g),w=n(19216),O=n.n(w),P=n(44589),R=n.n(P),x=n(87707),N={};N.styleTagTransform=R(),N.setAttributes=E(),N.insert=Z().bind(null,"head"),N.domAPI=b(),N.insertStyleElement=O(),h()(x.Z,N),x.Z&&x.Z.locals&&x.Z.locals;const T=function(e){(0,c.Z)(h,e);var t,n,m=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function h(e){return(0,r.Z)(this,h),m.call(this,e)}return(0,a.Z)(h,[{key:"render",value:function(){return s.createElement("div",{className:"example widget-examples"},s.createElement("h2",{className:"example-title"},"Widget"),s.createElement("p",null,"A ",s.createElement("span",null,"Widget")," element is a basic container that can give a title."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(p.Z,null,s.createElement(u.Z,{className:"example-header",title:"Widget Example"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),s.createElement(p.Z,null,s.createElement(u.Z,{title:"Title"},s.createElement(i.Z,{iconCls:"far fa-thumbs-up"}),s.createElement(i.Z,{iconCls:"fas fa-trash-alt"})),s.createElement("div",{className:"widget-content"},"widget content")))))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(d.Z,{data:f}))}}]),h}(s.Component)}}]);
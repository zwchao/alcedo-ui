(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5693],{29250:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var c=n(23645),a=n.n(c)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const o=a},11760:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var c=n(23645),a=n.n(c)()((function(e){return e[1]}));a.push([e.id,".accordion-examples .accordion-content {\n  border: 1px solid #e4eaf2;\n  border-top: none; }\n  .accordion-examples .accordion-content .accordion-example-content {\n    padding: 20px; }\n\n.accordion-examples .update-content-button {\n  margin-top: 16px;\n  width: auto; }\n\n.accordion-examples .accordion-example-customized-title {\n  padding: 16px;\n  background: #506379;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  color: #fff;\n  cursor: pointer; }\n",""]);const o=a},22356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var c=n(6610),a=n(5991),o=n(63349),r=n(10379),l=n(46070),s=n(77608),i=n(96156),p=n(37699),d=n(45697),u=n.n(d),m=n(82996),f=n(93379),h=n.n(f),y=n(29250);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var E=function(e){(0,r.Z)(u,e);var t,n,d=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,c=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(c,arguments,a)}else e=c.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){var t;return(0,c.Z)(this,u),t=d.call(this,e),(0,i.Z)((0,o.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(Z({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(u,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(p.Component);E.propTypes={data:u().object};const g=E},91578:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var c=n(87329),a=n(6610),o=n(5991),r=n(63349),l=n(10379),s=n(46070),i=n(77608),p=n(96156),d=n(37699),u=n(11253),m=n(91e3),f=n(24471),h=n(50704),y=n(22944),v=n(22356);const Z=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"title":{"type":"PropTypes.any","desc":"The accordion\'s title.","default":"title"},"collapsed":{"type":"PropTypes.bool","default":"false"},"titleRenderer":{"type":"PropTypes.func"},"collapseIcon":{"type":"PropTypes.string","desc":"Collapse icon.","default":"fas fa-angle-down"},"onCollpase":{"type":"PropTypes.func","desc":"Callback function fired when collpase the accordion."},"onExpand":{"type":"PropTypes.func","desc":"Callback function fired when expand the accordion."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when change the status of accordion."}}');var E=n(93379),g=n.n(E),x=n(11760);g()(x.Z,{insert:"head",singleton:!1}),x.Z.locals;const b=function(e){(0,l.Z)(g,e);var t,n,E=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,c=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(c,arguments,a)}else e=c.apply(this,arguments);return(0,s.Z)(this,e)});function g(e){var t;return(0,a.Z)(this,g),t=E.call(this,e),(0,p.Z)((0,r.Z)(t),"clickHandler",(function(){t.setState({content:[].concat((0,c.Z)(t.state.content),(0,c.Z)(t.state.content))})})),t.state={content:[1,2,3]},t}return(0,o.Z)(g,[{key:"componentDidUpdate",value:function(e,t){t.content.length!==this.state.content.length&&this.refs.accordion&&this.refs.accordion.resetHeight()}},{key:"render",value:function(){var e=this.state.content;return d.createElement("div",{className:"example accordion-examples"},d.createElement("h2",{className:"example-title"},"Accordion"),d.createElement("p",null,d.createElement("span",null,"Accordion"),"is a folding list effect component.You can click title's row to show or hide the drop-down list."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(f.Z,null,d.createElement(h.Z,{className:"example-header",title:"Accordion Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Accordion simple example."),d.createElement(u.Z,null,d.createElement(m.Z,{ref:"accordion",collapsed:!0,title:"Title"},d.createElement("div",{className:"accordion-example-content"},"content"))))))),d.createElement(f.Z,null,d.createElement(h.Z,{className:"example-header",title:"Accordion Example"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Set collapseIcon and expandIcon properties to show different icons."),d.createElement(u.Z,null,d.createElement(m.Z,{title:"Title",collapseIcon:"fas fa-arrow-circle-down"},d.createElement("div",{className:"accordion-example-content"},"content"))))))),d.createElement(f.Z,null,d.createElement(h.Z,{className:"example-header",title:"Dynamic Content"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Update ",d.createElement("span",null,"Accordion")," content when height changed."),d.createElement(u.Z,null,d.createElement(m.Z,{ref:"accordion",title:"Title"},d.createElement("div",{className:"accordion-example-content"},e&&e.map((function(e,t){return d.createElement("div",{key:t},e)}))))),d.createElement(y.Z,{className:"update-content-button",value:"Update Content",onClick:this.clickHandler}))))),d.createElement(f.Z,null,d.createElement(h.Z,{className:"example-header",title:"Customized Title Accordion"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement(u.Z,null,d.createElement(m.Z,{collapseIcon:"fas fa-arrow-circle-down",titleRenderer:d.createElement("div",{className:"accordion-example-customized-title"},"Customized Element Title")},d.createElement("div",{className:"accordion-example-content"},"content"))),d.createElement(u.Z,{style:{marginTop:24}},d.createElement(m.Z,{collapseIcon:"fas fa-arrow-circle-down",titleRenderer:function(e){return d.createElement("div",{className:"accordion-example-customized-title",onClick:e},"Customized Function Title")}},d.createElement("div",{className:"accordion-example-content"},"content"))))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(v.Z,{data:Z}))}}]),g}(d.Component)},91e3:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var c=n(6610),a=n(5991),o=n(63349),r=n(10379),l=n(46070),s=n(77608),i=n(96156),p=n(37699),d=n(45697),u=n.n(d),m=n(41844),f=n.n(m),h=n(22944),y=n(87712),v=n(19605);var Z=function(e){(0,r.Z)(u,e);var t,n,d=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,c=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(c,arguments,a)}else e=c.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){var t;(0,c.Z)(this,u);for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return t=d.call.apply(d,[this,e].concat(a)),(0,i.Z)((0,o.Z)(t),"resetHeight",(function(e){var n=t.accordionContent&&t.accordionContent.current;!t.state.collapsed&&n&&window.getComputedStyle(n)&&t.setState({contentHeight:"auto"},(function(){t.setState({contentHeight:n.clientHeight},(function(){e&&e()}))}))})),(0,i.Z)((0,o.Z)(t),"collpase",(function(){t.setState({collapsed:!0},(function(){var e=t.props,n=e.onCollpase,c=e.onChange;n&&n(),c&&c(!0)}))})),(0,i.Z)((0,o.Z)(t),"expand",(function(){t.setState({collapsed:!1},(function(){var e=t.props,n=e.onExpand,c=e.onChange;n&&n(),c&&c(!1)}))})),(0,i.Z)((0,o.Z)(t),"handleClick",(function(){t.state.collapsed?t.expand():t.collpase()})),(0,i.Z)((0,o.Z)(t),"init",(function(){t.props.collapsed?setTimeout((function(){t.setState({collapsed:!1},(function(){t.resetHeight((function(){t.setState({collapsed:t.props.collapsed})}))}))}),0):t.resetHeight()})),t.accordionContent=(0,p.createRef)(),t.state={collapsed:e.collapsed,contentHeight:null},t}return(0,a.Z)(u,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,c=e.style,a=e.title,o=e.collapseIcon,r=e.titleRenderer,l=this.state,s=l.collapsed,d=l.contentHeight;return p.createElement("div",{className:f()("accordion",(0,i.Z)({collapsed:s},n,n)),style:c},r?"function"==typeof r?r(this.handleClick):(0,p.cloneElement)(r,{onClick:this.handleClick}):p.createElement(h.Z,{className:"accordion-title",theme:y.Z.SECONDARY,value:a,rightIconCls:o,onClick:this.handleClick}),p.createElement("div",{ref:this.accordionContent,className:"accordion-content",style:{height:d}},t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,collapsed:v.Z.getDerivedState(e,t,"collapsed")}}}]),u}(p.Component);(0,i.Z)(Z,"Theme",y.Z),Z.propTypes={children:u().any,className:u().string,style:u().object,title:u().any,collapsed:u().bool,titleRenderer:u().oneOfType([u().object,u().func]),collapseIcon:u().string,onCollpase:u().func,onExpand:u().func,onChange:u().func},Z.defaultProps={title:"title",collapsed:!1,collapseIcon:"fas fa-angle-down"};const E=Z}}]);
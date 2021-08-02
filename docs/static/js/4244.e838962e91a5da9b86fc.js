"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[4244],{59141:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const r=a},83970:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,'.text-field-examples .field-group{margin:10px auto;float:none}.text-field-examples .field-group::before,.text-field-examples .field-group::after{display:table;content:""}.text-field-examples .field-group::after{clear:both}.text-field-examples .field-group .text-field-label,.text-field-examples .field-group .text-field{float:left}.text-field-examples .field-group .text-field-label{font-size:14px;line-height:40px;margin-right:20px;width:80px}.example-content .dialog-button{width:120px}.popover-dialog-content-scroller{width:1000px;height:1000px}.popover-dialog-content-scroller .field-group{margin:10px auto}',""]);const r=a},1116:(e,t,n)=>{n.d(t,{Z:()=>O});var l=n(6610),a=n(5991),r=n(63349),c=n(10379),i=n(46070),s=n(77608),o=n(96156),p=n(37699),d=n(45697),u=n.n(d),m=n(82996),f=n(93379),h=n.n(f),y=n(7795),g=n.n(y),E=n(90569),v=n.n(E),b=n(3565),T=n.n(b),x=n(19216),N=n.n(x),Z=n(44589),P=n.n(Z),w=n(59141),C={};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}C.styleTagTransform=P(),C.setAttributes=T(),C.insert=v().bind(null,"head"),C.domAPI=g(),C.insertStyleElement=N(),h()(w.Z,C),w.Z&&w.Z.locals&&w.Z.locals;var M=function(e){(0,c.Z)(u,e);var t,n,d=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,i.Z)(this,e)});function u(e){var t;return(0,l.Z)(this,u),t=d.call(this,e),(0,o.Z)((0,r.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(R({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(u,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(p.Component);M.propTypes={data:u().object};const O=M},15666:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var l=n(6610),a=n(5991),r=n(63349),c=n(10379),i=n(46070),s=n(77608),o=n(96156),p=n(37699),d=n(11669),u=n(38075),m=n(24471),f=n(50704),h=n(22944),y=n(65460),g=n(1116);const E=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"triggerClassName":{"type":"PropTypes.string","desc":"The CSS class name of the input element."},"placeholderClassName":{"type":"PropTypes.string","desc":"The CSS class name of the placeholder element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The TextField theme.","default":"Theme.DEFAULT"},"type":{"type":"PropTypes.oneOf","desc":"Specifies the type of input to display such as \\"password\\" or \\"text\\".","default":"text"},"name":{"type":"PropTypes.string","desc":"The name of the text field."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the text field."},"value":{"type":"PropTypes.number","desc":"The value of the TextField.Type can be string or number."},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon."},"disabled":{"type":"PropTypes.bool","desc":"Disables the textField if set to true.","default":"false"},"readOnly":{"type":"PropTypes.bool","desc":"If true,the textField will can\'t editable.","default":"false"},"autoFocus":{"type":"PropTypes.bool","desc":"If true,the textField will autoFocus.","default":"false"},"infoMsg":{"type":"PropTypes.string","desc":"The message of the textField."},"isFocusedSelectAll":{"type":"PropTypes.bool","default":"false"},"clearButtonVisible":{"type":"PropTypes.bool","desc":"If true,clearButton will display when the textField is not empty.","default":"true"},"clearButtonIconCls":{"type":"PropTypes.string","default":"fas fa-times-circle"},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon."},"passwordButtonVisible":{"type":"PropTypes.bool","desc":"If true, passwordButton will display.","default":"true"},"required":{"type":"PropTypes.bool","desc":"If true,the textField must be required.","default":"false"},"maxLength":{"type":"PropTypes.number","desc":"The maximum length of textField to enter."},"max":{"type":"PropTypes.number","desc":"Maximum number of textField that can be entered."},"min":{"type":"PropTypes.number","desc":"Minimum number of textField that can be entered."},"pattern":{"type":"PropTypes.object","desc":"The matching rule of textField."},"patternInvalidMsg":{"type":"PropTypes.string","desc":"The invalid message of textField."},"isStrictMaxLength":{"type":"PropTypes.bool","default":"true"},"fieldMsgVisible":{"type":"PropTypes.bool","default":"false"},"parentEl":{"type":"PropTypes.object"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"Position.BOTTOM"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the textField is changed."},"onKeyDown":{"type":"PropTypes.func","desc":"Callback function fired when key down."},"onPressEnter":{"type":"PropTypes.func","desc":"Callback function fired when press enter."},"onValid":{"type":"PropTypes.func","desc":"Callback function fired when textField valid."},"onInvalid":{"type":"PropTypes.func","desc":"Callback function fired when textField invalid."},"onFocus":{"type":"PropTypes.func","desc":"Callback function fired when textField focus."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when textField blur."},"onClear":{"type":"PropTypes.func","desc":"Callback function fired when textField clear."},"onPasswordVisible":{"type":"PropTypes.func","desc":"Callback function fired when password visible."},"onPasswordInvisible":{"type":"PropTypes.func","desc":"Callback function fired when password invisible."},"onIconClick":{"type":"PropTypes.func"},"onRightIconClick":{"type":"PropTypes.func"},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"}}');var v=n(93379),b=n.n(v),T=n(7795),x=n.n(T),N=n(90569),Z=n.n(N),P=n(3565),w=n.n(P),C=n(19216),I=n.n(C),R=n(44589),M=n.n(R),O=n(83970),V={};V.styleTagTransform=M(),V.setAttributes=w(),V.insert=Z().bind(null,"head"),V.domAPI=x(),V.insertStyleElement=I(),b()(O.Z,V),O.Z&&O.Z.locals&&O.Z.locals;const F=function(e){(0,c.Z)(b,e);var t,n,v=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,i.Z)(this,e)});function b(e){var t;return(0,l.Z)(this,b),t=v.call(this,e),(0,o.Z)((0,r.Z)(t),"show",(function(e){var n=t.state.TextFieldVisible;n[e]=!0,t.setState({TextFieldVisible:n})})),(0,o.Z)((0,r.Z)(t),"hide",(function(e){var n=t.state.TextFieldVisible;n[e]=!1,t.setState({TextFieldVisible:n})})),(0,o.Z)((0,r.Z)(t),"changeHandler",(function(e,n){var l=t.state.value;l[n]=e,t.setState({value:l},(function(){console.log("value changed::",e)}))})),t.state={value:{},TextFieldVisible:{}},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,l=t.TextFieldVisible;return p.createElement("div",{className:"example text-field-examples"},p.createElement("h2",{className:"example-title"},"TextField"),p.createElement("p",null,p.createElement("span",null,"TextField"),"allow users to input text."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(m.Z,null,p.createElement(f.Z,{className:"example-header",title:"With type"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"TextField")," using the",p.createElement("code",null,"type"),' property to set the type of input to display such as "password" or "text".'),p.createElement("div",{className:"field-group"},p.createElement("label",{className:"text-field-label"},"Default"),p.createElement(d.Z,{value:n[0]||"",maxLength:20,onChange:function(t){return e.changeHandler(t,0)}})),p.createElement("div",{className:"field-group"},p.createElement("label",{className:"text-field-label"},"Password"),p.createElement(d.Z,{type:"password",rightIconCls:"fas fa-lock",value:n[1]||"",onChange:function(t){return e.changeHandler(t,1)}})))))),p.createElement(m.Z,null,p.createElement(f.Z,{className:"example-header",title:"With rightIconCls"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"TextField")," using the",p.createElement("code",null,"rightIconCls")," property to set a icon display at right."),p.createElement("div",{className:"field-group"},p.createElement("label",{className:"text-field-label"},"Search"),p.createElement(d.Z,{rightIconCls:"fas fa-search",theme:d.Z.Theme.PRIMARY,value:n[2]||"",onRightIconClick:function(){return console.log("Search Icon Clicked.")},onChange:function(t){return e.changeHandler(t,2)}})))))),p.createElement(m.Z,null,p.createElement(f.Z,{className:"example-header",title:"With icon"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"TextField")," using the",p.createElement("code",null,"iconCls")," property to set the icon of TextField to display at left."),p.createElement("div",{className:"field-group"},p.createElement("label",{className:"text-field-label"},"Username"),p.createElement(d.Z,{iconCls:"fas fa-user",theme:d.Z.Theme.HIGHLIGHT,value:n[3]||"",onChange:function(t){return e.changeHandler(t,3)}})),p.createElement("div",{className:"field-group"},p.createElement("label",{className:"text-field-label"},"Password"),p.createElement(d.Z,{iconCls:"fas fa-lock",type:"password",theme:d.Z.Theme.HIGHLIGHT,value:n[4]||"",onChange:function(t){return e.changeHandler(t,4)}})))))),p.createElement(m.Z,null,p.createElement(f.Z,{className:"example-header",title:"TextFieldGroup without label"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"TextFieldGroup")," without",p.createElement("code",null,"label")," element and",p.createElement("code",null,"disabled")," props applied."),p.createElement(u.Z,null,p.createElement(d.Z,{iconCls:"fas fa-user",placeholder:"username",value:n[5]||"",onChange:function(t){return e.changeHandler(t,5)}}),p.createElement(d.Z,{iconCls:"fas fa-lock",type:d.Z.Type.PASSWORD,placeholder:"password",value:n[6]||"",onChange:function(t){return e.changeHandler(t,6)}})))))),p.createElement(m.Z,null,p.createElement(f.Z,{className:"example-header",title:"Valid"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"TextField")," with",p.createElement("code",null,"pattern")," and",p.createElement("code",null,"patternInvalidMsg")," applied."),p.createElement("div",null,"Required"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{required:!0,clearButtonVisible:!1,fieldMsgVisible:!0,value:n[7]||"",onChange:function(t){return e.changeHandler(t,7)}})),p.createElement("div",null,"NUMBER"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NUMBER,fieldMsgVisible:!0,value:n[8]||"",onChange:function(t){return e.changeHandler(t,8)}})),p.createElement("div",null,"Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.INTEGER,fieldMsgVisible:!0,value:n[9]||"",onChange:function(t){return e.changeHandler(t,9)}})),p.createElement("div",null,"Positive Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.POSITIVE_INTEGER,fieldMsgVisible:!0,value:n[10]||"",onChange:function(t){return e.changeHandler(t,10)}})),p.createElement("div",null,"Nonnegative Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NONNEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[11]||"",onChange:function(t){return e.changeHandler(t,11)}})),p.createElement("div",null,"Negative Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[12]||"",onChange:function(t){return e.changeHandler(t,12)}})),p.createElement("div",null,"Nonpositive Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NONPOSITIVE_INTEGER,fieldMsgVisible:!0,value:n[13]||"",onChange:function(t){return e.changeHandler(t,13)}})),p.createElement("div",null,"Min / Max"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NUMBER,min:0,max:100,fieldMsgVisible:!0,value:n[14]||"",onChange:function(t){return e.changeHandler(t,14)}})),p.createElement("div",null,"Self Defined Pattern (Only a, b, c is allowed)"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{pattern:/^[abc]*$/,patternInvalidMsg:"Only a, b, c is allowed",fieldMsgVisible:!0,value:n[15]||"",onChange:function(t){return e.changeHandler(t,15)}})))))),p.createElement(m.Z,null,p.createElement(f.Z,{className:"example-header",title:"Disabled"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("div",{className:"field-group"},p.createElement(d.Z,{rightIconCls:"fas fa-search",value:"Disabled",theme:d.Z.Theme.PRIMARY,disabled:!0,onChange:function(t){return e.changeHandler(t,16)}})))))),p.createElement(m.Z,null,p.createElement(f.Z,{className:"example-header",title:"Valid In Dialog"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"examples-wrapper"},p.createElement("p",null,p.createElement("code",null,"TextField")," with",p.createElement("code",null,"pattern")," and",p.createElement("code",null,"patternInvalidMsg")," applied."),p.createElement(h.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),p.createElement(y.Z,{visible:l[1],onRequestClose:function(){return e.hide(1)}},(function(t){return p.createElement("div",{className:"popover-dialog-content-scroller"},p.createElement("div",null,"Required"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{required:!0,clearButtonVisible:!1,fieldMsgVisible:!0,value:n[7]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,7)}})),p.createElement("div",null,"NUMBER"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NUMBER,fieldMsgVisible:!0,value:n[8]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,8)}})),p.createElement("div",null,"Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.INTEGER,fieldMsgVisible:!0,value:n[9]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,9)}})),p.createElement("div",null,"Positive Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.POSITIVE_INTEGER,fieldMsgVisible:!0,value:n[10]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,10)}})),p.createElement("div",null,"Nonnegative Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NONNEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[11]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,11)}})),p.createElement("div",null,"Negative Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[12]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,12)}})),p.createElement("div",null,"Nonpositive Integer"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NONPOSITIVE_INTEGER,fieldMsgVisible:!0,value:n[13]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,13)}})),p.createElement("div",null,"Min / Max"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{type:d.Z.Type.NUMBER,min:0,max:100,fieldMsgVisible:!0,value:n[14]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,14)}})),p.createElement("div",null,"Self Defined Pattern (Only a, b, c is allowed)"),p.createElement("div",{className:"field-group"},p.createElement(d.Z,{pattern:/^[abc]*$/,patternInvalidMsg:"Only a, b, c is allowed",fieldMsgVisible:!0,value:n[15]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,15)}})))})))))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(g.Z,{data:E}))}}]),b}(p.Component)},38075:(e,t,n)=>{n.d(t,{Z:()=>h});var l=n(96156),a=n(6610),r=n(5991),c=n(10379),i=n(46070),s=n(77608),o=n(37699),p=n(45697),d=n.n(p),u=n(41844),m=n.n(u);var f=function(e){(0,c.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){(0,a.Z)(this,d);for(var t=arguments.length,n=new Array(t>1?t-1:0),l=1;l<t;l++)n[l-1]=arguments[l];return p.call.apply(p,[this,e].concat(n))}return(0,r.Z)(d,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style;return o.createElement("div",{className:m()("text-field-group",(0,l.Z)({},n,n)),style:a},t)}}]),d}(o.Component);f.propTypes={children:d().any,className:d().string,style:d().object};const h=f}}]);
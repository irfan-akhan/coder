(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"1OyB":function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return o}))},"1a93":function(e,t,a){e.exports={contactUs:"ContactForm_contactUs__2T1Wd",contact:"ContactForm_contact__1O4ft"}},"30+C":function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("kKAo"),s=a("H2TA"),d=r.forwardRef((function(e,t){var a=e.classes,s=e.className,d=e.raised,l=void 0!==d&&d,p=Object(n.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(o.a)({className:Object(i.a)(a.root,s),elevation:l?8:1,ref:t},p))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(d)},Ji7U:function(e,t,a){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}a.d(t,"a",(function(){return n}))},Z3vd:function(e,t,a){"use strict";var o=a("Ff2n"),n=a("wx14"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("ye/S"),d=a("VD++"),l=a("NqtD"),p=r.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,p=e.color,u=void 0===p?"default":p,b=e.component,m=void 0===b?"button":b,f=e.disabled,h=void 0!==f&&f,g=e.disableElevation,y=void 0!==g&&g,x=e.disableFocusRipple,j=void 0!==x&&x,v=e.endIcon,O=e.focusVisibleClassName,S=e.fullWidth,w=void 0!==S&&S,C=e.size,k=void 0===C?"medium":C,z=e.startIcon,R=e.type,N=void 0===R?"button":R,T=e.variant,_=void 0===T?"text":T,I=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),E=z&&r.createElement("span",{className:Object(i.a)(c.startIcon,c["iconSize".concat(Object(l.a)(k))])},z),U=v&&r.createElement("span",{className:Object(i.a)(c.endIcon,c["iconSize".concat(Object(l.a)(k))])},v);return r.createElement(d.a,Object(n.a)({className:Object(i.a)(c.root,c[_],s,"inherit"===u?c.colorInherit:"default"!==u&&c["".concat(_).concat(Object(l.a)(u))],"medium"!==k&&[c["".concat(_,"Size").concat(Object(l.a)(k))],c["size".concat(Object(l.a)(k))]],y&&c.disableElevation,h&&c.disabled,w&&c.fullWidth),component:m,disabled:h,focusRipple:!j,focusVisibleClassName:Object(i.a)(c.focusVisible,O),ref:t,type:N},I),r.createElement("span",{className:c.label},E,a,U))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},"b/0p":function(e,t,a){"use strict";var o=a("nKUr"),n=a("tRbT"),r=a("30+C"),i=a("wx14"),c=a("Ff2n"),s=a("q1tI"),d=a.n(s),l=(a("17x9"),a("iuhU")),p=a("H2TA"),u=["video","audio","picture","iframe","img"],b=s.forwardRef((function(e,t){var a=e.children,o=e.classes,n=e.className,r=e.component,d=void 0===r?"div":r,p=e.image,b=e.src,m=e.style,f=Object(c.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==u.indexOf(d),g=!h&&p?Object(i.a)({backgroundImage:'url("'.concat(p,'")')},m):m;return s.createElement(d,Object(i.a)({className:Object(l.a)(o.root,n,h&&o.media,-1!=="picture img".indexOf(d)&&o.img),ref:t,style:g,src:h?p||b:void 0},f),a)})),m=Object(p.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(b),f=a("oa/T"),h=a("ofer"),g=a("1OyB"),y=a("vuIU"),x=a("Ji7U"),j=a("md7G"),v=a("foSv"),O=a("Z3vd"),S=a("1a93"),w=a.n(S);function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=Object(v.a)(e);if(t){var n=Object(v.a)(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return Object(j.a)(this,a)}}var k=function(e){Object(x.a)(a,e);var t=C(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(n.a,{className:w.a.contactUs,style:{marginTop:"2rem"},children:[Object(o.jsx)(h.a,{variant:"h5",gutterBottom:!0,color:"secondary",children:"Contact Us"}),Object(o.jsxs)("form",{className:w.a.contact,children:[Object(o.jsx)("input",{type:"text",name:"",id:"",placeholder:"Full Name"}),Object(o.jsx)("input",{type:"email",name:"",id:"",placeholder:"Email Address"}),Object(o.jsx)("textarea",{name:"",id:"",cols:"22",rows:"5",placeholder:"Your massage"}),Object(o.jsx)(O.a,{variant:"contained",color:"primary",children:"Send.!"})]})]})}}]),a}(d.a.Component);t.a=function(){return Object(o.jsx)(n.a,{item:!0,xs:3,style:{padding:"1rem"},children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(m,{children:Object(o.jsx)("img",{src:"/assets/images/shuttle.png",alt:"logo",style:{width:"200px",marginTop:"10px"}})}),Object(o.jsxs)(f.a,{children:[Object(o.jsx)(h.a,{gutterBottom:!0,variant:"h5",color:"secondary",children:"About Shuttle lane"}),Object(o.jsx)(h.a,{variant:"body1",color:"textSecondary",gutterBottom:!0,children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}),Object(o.jsx)(k,{})]})]})})}},foSv:function(e,t,a){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return o}))},md7G:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var o=a("U8pU"),n=a("JX7q");function r(e,t){return!t||"object"!==Object(o.a)(t)&&"function"!==typeof t?Object(n.a)(e):t}},"oa/T":function(e,t,a){"use strict";var o=a("wx14"),n=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,d=void 0===s?"div":s,l=Object(n.a)(e,["classes","className","component"]);return r.createElement(d,Object(o.a)({className:Object(i.a)(a.root,c),ref:t},l))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)}}]);
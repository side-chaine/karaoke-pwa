(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2736)}])},2736:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return Home}});var a=t(5893),n=t(7294),r=t(9390),i=t(5861),l=t(3366),s=t(7462),d=t(512),c=t(5971),p=t(4780),u=t(2101),h=t(2433),v=t(6206),m=t(5845),x=t(2276),g=t(8216),b=t(1588),S=t(7621);function getButtonUtilityClass(e){return(0,S.ZP)("MuiButton",e)}let y=(0,b.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=n.createContext({}),z=n.createContext(void 0),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],useUtilityClasses=e=>{let{color:o,disableElevation:t,fullWidth:a,size:n,variant:r,classes:i}=e,l={root:["root",r,`${r}${(0,g.Z)(o)}`,`size${(0,g.Z)(n)}`,`${r}Size${(0,g.Z)(n)}`,`color${(0,g.Z)(o)}`,t&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,g.Z)(n)}`],endIcon:["icon","endIcon",`iconSize${(0,g.Z)(n)}`]},d=(0,p.Z)(l,getButtonUtilityClass,i);return(0,s.Z)({},i,d)},commonIconStyles=e=>(0,s.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),C=(0,h.ZP)(x.Z,{shouldForwardProp:e=>(0,v.Z)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,g.Z)(t.color)}`],o[`size${(0,g.Z)(t.size)}`],o[`${t.variant}Size${(0,g.Z)(t.size)}`],"inherit"===t.color&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})(({theme:e,ownerState:o})=>{var t,a;let n="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],r="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,s.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,s.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:`1px solid ${(e.vars||e).palette[o.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,u.Fq)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:r,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}),"&:active":(0,s.Z)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${y.focusVisible}`]:(0,s.Z)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${y.disabled}`]:(0,s.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===o.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${(0,u.Fq)(e.palette[o.color].main,.5)}`},"contained"===o.variant&&{color:e.vars?e.vars.palette.text.primary:null==(t=(a=e.palette).getContrastText)?void 0:t.call(a,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:n,boxShadow:(e.vars||e).shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}}),w=(0,h.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.startIcon,o[`iconSize${(0,g.Z)(t.size)}`]]}})(({ownerState:e})=>(0,s.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},commonIconStyles(e))),$=(0,h.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{let{ownerState:t}=e;return[o.endIcon,o[`iconSize${(0,g.Z)(t.size)}`]]}})(({ownerState:e})=>(0,s.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},commonIconStyles(e))),I=n.forwardRef(function(e,o){let t=n.useContext(f),r=n.useContext(z),i=(0,c.Z)(t,e),p=(0,m.i)({props:i,name:"MuiButton"}),{children:u,color:h="primary",component:v="button",className:x,disabled:g=!1,disableElevation:b=!1,disableFocusRipple:S=!1,endIcon:y,focusVisibleClassName:I,fullWidth:k=!1,size:R="medium",startIcon:E,type:B,variant:M="text"}=p,N=(0,l.Z)(p,Z),P=(0,s.Z)({},p,{color:h,component:v,disabled:g,disableElevation:b,disableFocusRipple:S,fullWidth:k,size:R,type:B,variant:M}),W=useUtilityClasses(P),_=E&&(0,a.jsx)(w,{className:W.startIcon,ownerState:P,children:E}),T=y&&(0,a.jsx)($,{className:W.endIcon,ownerState:P,children:y}),j=r||"";return(0,a.jsxs)(C,(0,s.Z)({ownerState:P,className:(0,d.Z)(t.className,W.root,x,j),component:v,disabled:g,focusRipple:!S,focusVisibleClassName:(0,d.Z)(W.focusVisible,I),ref:o,type:B},N,{classes:W,children:[_,u,T]}))});var k=t(1664),R=t.n(k);function Home(){return(0,a.jsxs)(r.Z,{maxWidth:"sm",children:[(0,a.jsx)(i.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"Добро пожаловать в 4ePoeM"}),(0,a.jsx)(i.Z,{variant:"body1",children:"Ваше любимое караоке-приложение теперь доступно онлайн!"}),(0,a.jsx)(R(),{href:"/queue",passHref:!0,children:(0,a.jsx)(I,{variant:"contained",color:"primary",children:"Начать петь"})})]})}}},function(e){e.O(0,[593,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
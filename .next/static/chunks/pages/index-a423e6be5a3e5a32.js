(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7135)}])},7135:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Home}});var i=t(5893),a=t(7294),s=t(9390),n=t(5861),o=t(9417),l=t(3366),c=t(7462),d=t(512),u=t(4780),h=t(917),f=t(8216),m=t(5845),v=t(2433),g=t(1588),p=t(7621);function getCircularProgressUtilityClass(e){return(0,p.ZP)("MuiCircularProgress",e)}(0,g.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let x=["className","color","disableShrink","size","style","thickness","value","variant"],_=e=>e,y,k,Z,C,P=(0,h.F4)(y||(y=_`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,h.F4)(k||(k=_`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),useUtilityClasses=e=>{let{classes:r,variant:t,color:i,disableShrink:a}=e,s={root:["root",t,`color${(0,f.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,f.Z)(t)}`,a&&"circleDisableShrink"]};return(0,u.Z)(s,getCircularProgressUtilityClass,r)},w=(0,v.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,f.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,c.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,h.iv)(Z||(Z=_`
      animation: ${0} 1.4s linear infinite;
    `),P)),S=(0,v.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),j=(0,v.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,f.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,c.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,h.iv)(C||(C=_`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)),N=a.forwardRef(function(e,r){let t=(0,m.i)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:n=!1,size:o=40,style:u,thickness:h=3.6,value:f=0,variant:v="indeterminate"}=t,g=(0,l.Z)(t,x),p=(0,c.Z)({},t,{color:s,disableShrink:n,size:o,thickness:h,value:f,variant:v}),y=useUtilityClasses(p),k={},Z={},C={};if("determinate"===v){let e=2*Math.PI*((44-h)/2);k.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(f),k.strokeDashoffset=`${((100-f)/100*e).toFixed(3)}px`,Z.transform="rotate(-90deg)"}return(0,i.jsx)(w,(0,c.Z)({className:(0,d.Z)(y.root,a),style:(0,c.Z)({width:o,height:o},Z,u),ownerState:p,ref:r,role:"progressbar"},C,g,{children:(0,i.jsx)(S,{className:y.svg,ownerState:p,viewBox:"22 22 44 44",children:(0,i.jsx)(j,{className:y.circle,style:k,ownerState:p,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})}))});var M=t(1664),D=t.n(M),$=t(3050),E=t(3670);function Home(){let{user:e}=(0,E.a)(),[r,t]=(0,a.useState)(!1),handleGoogleSignIn=async()=>{t(!0);try{await (0,$.qj)()}catch(e){alert("Ошибка входа: ".concat(e.message))}finally{t(!1)}};return(0,i.jsxs)(s.Z,{maxWidth:"sm",children:[(0,i.jsx)(n.Z,{variant:"h4",component:"h1",gutterBottom:!0,children:"Добро пожаловать в 4ePoeM"}),(0,i.jsx)(n.Z,{variant:"body1",children:"Ваше любимое караоке-приложение теперь доступно онлайн!"}),e?(0,i.jsxs)(n.Z,{variant:"body1",children:["Привет, ",e.displayName||e.email,"!"]}):(0,i.jsx)(o.Z,{variant:"contained",color:"primary",onClick:handleGoogleSignIn,disabled:r,children:r?(0,i.jsx)(N,{size:24}):"Войти через Google"}),(0,i.jsx)(D(),{href:"/queue",passHref:!0,legacyBehavior:!0,children:(0,i.jsx)(o.Z,{variant:"contained",color:"secondary",style:{marginLeft:"10px"},children:"Начать петь"})})]})}}},function(e){e.O(0,[510,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
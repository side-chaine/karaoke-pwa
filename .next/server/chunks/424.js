exports.id=424,exports.ids=[424],exports.modules={9487:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{H:()=>AuthProvider,a:()=>useAuth});var a=r(6689),i=r(9832),s=r(401),c=r(997),o=e([i,s]);[i,s]=o.then?(await o)():o;let d=(0,a.createContext)(),useAuth=()=>(0,a.useContext)(d),AuthProvider=({children:e})=>{let{0:t,1:r}=(0,a.useState)(null),{0:n,1:o}=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e=(0,s.onAuthStateChanged)(i.I,e=>{r(e),o(!1)});return e},[]),c.jsx(d.Provider,{value:{user:t,loading:n},children:!n&&e})};n()}catch(e){n(e)}})},9832:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{F:()=>l,I:()=>d});var a=r(3745),i=r(401),s=r(1208),c=e([a,i,s]);[a,i,s]=c.then?(await c)():c;let o=(0,a.initializeApp)({apiKey:"AIzaSyAw3hdoDMOo8_tNyJr0Qll-jIUhxFpNpQk",authDomain:"epoem-e9d6d.firebaseapp.com",projectId:"epoem-e9d6d",storageBucket:"epoem-e9d6d.appspot.com",messagingSenderId:"741768633751",appId:"1:741768633751:web:edb229519fa2bfa4d0f8d2",measurementId:"G-928H142ZPG"}),d=(0,i.getAuth)(o),l=(0,s.getDatabase)(o);n()}catch(e){n(e)}})},6424:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),r(6764);var a=r(9487),i=r(1664),s=r.n(i),c=r(968),o=r.n(c),d=r(997),l=e([a]);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}a=(l.then?(await l)():l)[0];let __WEBPACK_DEFAULT_EXPORT__=function({Component:e,pageProps:t}){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o(),{children:[d.jsx("title",{children:"4ePoeM - Караоке приложение"}),d.jsx("meta",{name:"description",content:"Ваше любимое караоке-приложение теперь доступно онлайн!"}),d.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,d.jsxs)(a.H,{children:[(0,d.jsxs)("nav",{style:{marginBottom:"20px",padding:"10px"},children:[d.jsx(s(),{href:"/",legacyBehavior:!0,children:d.jsx("a",{style:{marginRight:"10px"},children:"Главная"})}),d.jsx(s(),{href:"/queue",legacyBehavior:!0,children:d.jsx("a",{style:{marginRight:"10px"},children:"Очередь"})}),d.jsx(s(),{href:"/profile",legacyBehavior:!0,children:d.jsx("a",{children:"Профиль"})})]}),d.jsx(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},t))]})]})};n()}catch(e){n(e)}})},6764:()=>{}};
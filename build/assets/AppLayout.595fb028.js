import{u as Y,r as d,j as p,a as i,L as w,F as Q,H as ye}from"./app.944e8d8e.js";import{F as Z}from"./FlashMessage.f8f9d883.js";import{d as W}from"./date.helpers.37179c42.js";import{F as E,a as Te,T as I,b as Se,c as Oe,d as _e,e as Ae,g as je,h as we,i as Ne,j as ke,k as q,l as Ee,m as Pe,n as De,o as Ce,p as Re,q as Ie,r as Fe,s as Le,t as Me,u as Ue}from"./index.es.bbd55343.js";const $e=({heading:e,setNavState:t})=>{const{auth:n}=Y().props,[a,o]=d.exports.useState(W().utc().format("HH:mm")),[c,r]=d.exports.useState("UTC");return p("header",{className:"flex flex-row justify-between items-center header fixed bg-white shadow left-0 lg:left-64 right-0 py-4 px-4 z-20",children:[p("div",{className:"flex items-center",children:[i("div",{className:"lg:hidden mr-3 cursor-pointer",onClick:t,children:i(E,{icon:Te})}),i("h1",{children:e})]}),p("div",{className:"flex items-center",children:[i("div",{className:"mr-1 md:mr-4",children:p("span",{className:"nav-link cursor-pointer",onMouseOver:()=>{o(W().format("HH:mm")),r("local")},onMouseLeave:()=>{o(W().utc().format("HH:mm")),r("UTC")},children:[a," ",c]})}),i("div",{className:"hidden md:inline-block mr-4",children:p("div",{className:"flex items-center",children:[i("div",{className:"mx-1",children:i(I,{content:"My Finances",direction:"bottom",children:p(w,{href:"/my-finances",children:["$",n.user.balance.toLocaleString(navigator.language)]})})}),i("div",{className:"mx-1",children:i(I,{content:"My Logbook",direction:"bottom",children:p(w,{href:"/logbook",children:[n.user.points.toLocaleString(navigator.language)," XP"]})})}),i("div",{className:"mx-1",children:i(I,{content:"Current Airport",direction:"bottom",children:i(w,{href:`/airports/${n.user.current_airport_id}`,className:"ml-2 btn cursor-pointer",children:n.user.current_airport_id})})}),i("div",{className:"mx-1",children:i("a",{href:"https://bush-divers.releasenotes.io",target:"_blank",className:"rn-badge",rel:"noreferrer",children:i(E,{icon:Se})})})]})}),p("div",{className:"flex items-center mx-2",children:[i("img",{width:"60",className:"mr-3",src:n.user.rank.image}),i(I,{content:"Profile",direction:"bottom",children:i(w,{href:"/profile",children:p("span",{className:"flex flex-col",children:[i("span",{className:"font-semibold text-orange-500 tracking-wide leading-none",children:n.user.name}),p("span",{className:"text-gray-500 text-xs leading-none mt-1",children:[n.user.pilot_id," ",n.user.rank.name]})]})})})]})]})]})},m=({text:e,link:t,icon:n,numeric:a,nativeLink:o})=>i("li",{className:"my-px",children:o?p("a",{href:t,className:"flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100",children:[i("span",{className:"flex items-center justify-center text-lg text-gray-400",children:i(E,{icon:n})}),i("span",{className:"ml-3",children:e}),a>=0&&i("span",{className:"flex items-center justify-center text-xs text-orange-500 font-semibold bg-orange-100 h-6 px-2 rounded-full ml-auto",children:a})]}):p(w,{href:t,className:"flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-gray-100",children:[i("span",{className:"flex items-center justify-center text-lg text-gray-400",children:i(E,{icon:n})}),i("span",{className:"ml-3",children:e}),a>=0&&i("span",{className:"flex items-center justify-center text-xs text-orange-500 font-semibold bg-orange-100 h-6 px-2 rounded-full ml-auto",children:a})]})}),F=({name:e})=>i("li",{className:"my-px",children:i("span",{className:"flex font-medium text-sm text-gray-300 px-4 my-2 uppercase",children:e})}),He=({isNavVisible:e,setNavState:t})=>{const{auth:n}=Y().props;return p("aside",{className:`${e?"block":"hidden"} lg:block overflow-auto sidebar fixed top-0 bottom-0 min-h-screen w-64 lg:shadow transform md:translate-x-0 transition-transform duration-150 ease-in bg-white border-r-2 border-orange-500 z-20`,children:[p("div",{className:"sidebar-header flex items-center justify-between px-8 py-4",children:[i("div",{className:"inline-flex items-center",children:i(w,{href:"/",className:"inline-flex flex-row items-center justify-center",children:i("img",{className:"h-10 w-auto",src:"https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png",alt:"logo"})})}),i(E,{onClick:t,icon:Oe,className:"lg:hidden cursor-pointer ml-2"})]}),i("div",{className:"sidebar-content px-4 py-2",children:p("ul",{className:"flex flex-col w-full",children:[i(m,{link:"/dashboard",icon:_e,text:"Crew Page"}),i(m,{link:"/live-flights",icon:Ae,text:"Live Flights"}),i(m,{link:"/airports",icon:je,text:"Airports"}),i(F,{name:"HQ"}),i(m,{link:"/roster",icon:we,text:"Roster"}),i(m,{link:"/fleet-aircraft",icon:Ne,text:"Fleet"}),i(m,{link:"/finances",icon:ke,text:"Finances"}),i(m,{link:"https://storage.googleapis.com/bush-divers.appspot.com/BushTracker.zip",icon:q,text:"Bush Tracker",nativeLink:!0}),n.user.user_roles.includes("resource_manager")?i(m,{link:"/resources",icon:q,text:"Resources"}):i(Q,{}),i(F,{name:"Contracts"}),i(m,{link:"/available-contracts",icon:Ee,text:"Contracts",numeric:n.user.current_bids}),i(m,{link:"/contracts",icon:Pe,text:"Contract Search"}),i(m,{link:"/completed-contracts",icon:De,text:"Completed"}),i(m,{link:"/dispatch",icon:Ce,text:"Flight Dispatch"}),i(F,{name:"Pilot Area"}),i(m,{link:"/logbook",icon:Re,text:"Logbook"}),i(m,{link:"/my-finances",icon:Ie,text:"My Finances"}),i(m,{link:"/jumpseat",icon:Fe,text:"Jumpseat"}),i(m,{link:"/my-aircraft",icon:Le,text:"My Aircraft"}),i(m,{link:"/logout",icon:Me,text:"Sign Out"}),n.user.is_admin?p(Q,{children:[i(F,{name:"Admin"}),i(m,{link:"/admin/pireps",icon:Ue,text:"Pireps"}),i(m,{link:"/admin/resources",icon:q,text:"Resources"})]}):i(Q,{})]})})]})};let ze={data:""},Be=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ze,Ve=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Qe=/\/\*[^]*?\*\/|  +/g,G=/\n+/g,O=(e,t)=>{let n="",a="",o="";for(let c in e){let r=e[c];c[0]=="@"?c[1]=="i"?n=c+" "+r+";":a+=c[1]=="f"?O(r,c):c+"{"+O(r,c[1]=="k"?"":t)+"}":typeof r=="object"?a+=O(r,t?t.replace(/([^,])+/g,s=>c.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,s):s?s+" "+l:l)):c):r!=null&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=O.p?O.p(c,r):c+":"+r+";")}return n+(t&&o?t+"{"+o+"}":o)+a},k={},ee=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+ee(e[n]);return t}return e},We=(e,t,n,a,o)=>{let c=ee(e),r=k[c]||(k[c]=(s=>{let l=0,u=11;for(;l<s.length;)u=101*u+s.charCodeAt(l++)>>>0;return"go"+u})(c));if(!k[r]){let s=c!==e?e:(l=>{let u,y,b=[{}];for(;u=Ve.exec(l.replace(Qe,""));)u[4]?b.shift():u[3]?(y=u[3].replace(G," ").trim(),b.unshift(b[0][y]=b[0][y]||{})):b[0][u[1]]=u[2].replace(G," ").trim();return b[0]})(e);k[r]=O(o?{["@keyframes "+r]:s}:s,n?"":"."+r)}return((s,l,u)=>{l.data.indexOf(s)==-1&&(l.data=u?s+l.data:l.data+s)})(k[r],t,a),r},qe=(e,t,n)=>e.reduce((a,o,c)=>{let r=t[c];if(r&&r.call){let s=r(n),l=s&&s.props&&s.props.className||/^go/.test(s)&&s;r=l?"."+l:s&&typeof s=="object"?s.props?"":O(s,""):s===!1?"":s}return a+o+(r==null?"":r)},"");function z(e){let t=this||{},n=e.call?e(t.p):e;return We(n.unshift?n.raw?qe(n,[].slice.call(arguments,1),t.p):n.reduce((a,o)=>Object.assign(a,o&&o.call?o(t.p):o),{}):n,Be(t.target),t.g,t.o,t.k)}let te,J,X;z.bind({g:1});let S=z.bind({k:1});function Je(e,t,n,a){O.p=t,te=e,J=n,X=a}function _(e,t){let n=this||{};return function(){let a=arguments;function o(c,r){let s=Object.assign({},c),l=s.className||o.className;n.p=Object.assign({theme:J&&J()},s),n.o=/ *go\d+/.test(l),s.className=z.apply(n,a)+(l?" "+l:""),t&&(s.ref=r);let u=e;return e[0]&&(u=s.as||e,delete s.as),X&&u[0]&&X(s),te(u,s)}return t?t(o):o}}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function h(e,t){return t||(t=e.slice(0)),e.raw=t,e}var Xe=function(t){return typeof t=="function"},H=function(t,n){return Xe(t)?t(n):t},Ye=function(){var e=0;return function(){return(++e).toString()}}(),Ze=function(t){return function(n){n&&setTimeout(function(){var a=n.getBoundingClientRect();t(a)})}},ne=function(){var e=void 0;return function(){if(e===void 0&&typeof window!="undefined"){var t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}}(),Ge=20,v;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(v||(v={}));var M=new Map,K=function(t){if(!M.has(t)){var n=setTimeout(function(){M.delete(t),A({type:v.REMOVE_TOAST,toastId:t})},1e3);M.set(t,n)}},Ke=function(t){var n=M.get(t);n&&clearTimeout(n)},et=function e(t,n){switch(n.type){case v.ADD_TOAST:return f({},t,{toasts:[n.toast].concat(t.toasts).slice(0,Ge)});case v.UPDATE_TOAST:return n.toast.id&&Ke(n.toast.id),f({},t,{toasts:t.toasts.map(function(r){return r.id===n.toast.id?f({},r,n.toast):r})});case v.UPSERT_TOAST:var a=n.toast;return t.toasts.find(function(r){return r.id===a.id})?e(t,{type:v.UPDATE_TOAST,toast:a}):e(t,{type:v.ADD_TOAST,toast:a});case v.DISMISS_TOAST:var o=n.toastId;return o?K(o):t.toasts.forEach(function(r){K(r.id)}),f({},t,{toasts:t.toasts.map(function(r){return r.id===o||o===void 0?f({},r,{visible:!1}):r})});case v.REMOVE_TOAST:return n.toastId===void 0?f({},t,{toasts:[]}):f({},t,{toasts:t.toasts.filter(function(r){return r.id!==n.toastId})});case v.START_PAUSE:return f({},t,{pausedAt:n.time});case v.END_PAUSE:var c=n.time-(t.pausedAt||0);return f({},t,{pausedAt:void 0,toasts:t.toasts.map(function(r){return f({},r,{pauseDuration:r.pauseDuration+c})})})}},U=[],$={toasts:[],pausedAt:void 0},A=function(t){$=et($,t),U.forEach(function(n){n($)})},tt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},nt=function(t){t===void 0&&(t={});var n=d.exports.useState($),a=n[0],o=n[1];d.exports.useEffect(function(){return U.push(o),function(){var r=U.indexOf(o);r>-1&&U.splice(r,1)}},[a]);var c=a.toasts.map(function(r){var s,l,u;return f({},t,t[r.type],r,{duration:r.duration||((s=t[r.type])==null?void 0:s.duration)||((l=t)==null?void 0:l.duration)||tt[r.type],style:f({},t.style,(u=t[r.type])==null?void 0:u.style,r.style)})});return f({},a,{toasts:c})},rt=function(t,n,a){return n===void 0&&(n="blank"),f({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},a,{id:(a==null?void 0:a.id)||Ye()})},P=function(t){return function(n,a){var o=rt(n,t,a);return A({type:v.UPSERT_TOAST,toast:o}),o.id}},x=function(t,n){return P("blank")(t,n)};x.error=P("error");x.success=P("success");x.loading=P("loading");x.custom=P("custom");x.dismiss=function(e){A({type:v.DISMISS_TOAST,toastId:e})};x.remove=function(e){return A({type:v.REMOVE_TOAST,toastId:e})};x.promise=function(e,t,n){var a=x.loading(t.loading,f({},n,n==null?void 0:n.loading));return e.then(function(o){return x.success(H(t.success,o),f({id:a},n,n==null?void 0:n.success)),o}).catch(function(o){x.error(H(t.error,o),f({id:a},n,n==null?void 0:n.error))}),e};var at=function(t){var n=nt(t),a=n.toasts,o=n.pausedAt;d.exports.useEffect(function(){if(!o){var r=Date.now(),s=a.map(function(l){if(l.duration!==1/0){var u=(l.duration||0)+l.pauseDuration-(r-l.createdAt);if(u<0){l.visible&&x.dismiss(l.id);return}return setTimeout(function(){return x.dismiss(l.id)},u)}});return function(){s.forEach(function(l){return l&&clearTimeout(l)})}}},[a,o]);var c=d.exports.useMemo(function(){return{startPause:function(){A({type:v.START_PAUSE,time:Date.now()})},endPause:function(){o&&A({type:v.END_PAUSE,time:Date.now()})},updateHeight:function(s,l){return A({type:v.UPDATE_TOAST,toast:{id:s,height:l}})},calculateOffset:function(s,l){var u,y=l||{},b=y.reverseOrder,j=b===void 0?!1:b,g=y.gutter,D=g===void 0?8:g,C=y.defaultPosition,N=a.filter(function(T){return(T.position||C)===(s.position||C)&&T.height}),B=N.findIndex(function(T){return T.id===s.id}),R=N.filter(function(T,V){return V<B&&T.visible}).length,be=(u=N.filter(function(T){return T.visible})).slice.apply(u,j?[R+1]:[0,R]).reduce(function(T,V){return T+(V.height||0)+D},0);return be}}},[a,o]);return{toasts:a,handlers:c}};function re(){var e=h([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: `,`;
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: `,` 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`]);return re=function(){return e},e}function ae(){var e=h([`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`]);return ae=function(){return e},e}function ie(){var e=h([`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return ie=function(){return e},e}function oe(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`]);return oe=function(){return e},e}var it=S(oe()),ot=S(ie()),st=S(ae()),ct=_("div")(re(),function(e){return e.primary||"#ff4b4b"},it,ot,function(e){return e.secondary||"#fff"},st);function se(){var e=h([`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: `,`;
  border-right-color: `,`;
  animation: `,` 1s linear infinite;
`]);return se=function(){return e},e}function ce(){var e=h([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]);return ce=function(){return e},e}var lt=S(ce()),ut=_("div")(se(),function(e){return e.secondary||"#e0e0e0"},function(e){return e.primary||"#616161"},lt);function le(){var e=h([`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: `,`;
  position: relative;
  transform: rotate(45deg);

  animation: `,` 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: `,` 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: `,`;
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`]);return le=function(){return e},e}function ue(){var e=h([`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`]);return ue=function(){return e},e}function de(){var e=h([`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`]);return de=function(){return e},e}var dt=S(de()),ft=S(ue()),mt=_("div")(le(),function(e){return e.primary||"#61d345"},dt,ft,function(e){return e.secondary||"#fff"});function fe(){var e=h([`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: `,` 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`]);return fe=function(){return e},e}function me(){var e=h([`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`]);return me=function(){return e},e}function pe(){var e=h([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`]);return pe=function(){return e},e}function ve(){var e=h([`
  position: absolute;
`]);return ve=function(){return e},e}var pt=_("div")(ve()),vt=_("div")(pe()),ht=S(me()),gt=_("div")(fe(),ht),xt=function(t){var n=t.toast,a=n.icon,o=n.type,c=n.iconTheme;return a!==void 0?typeof a=="string"?d.exports.createElement(gt,null,a):a:o==="blank"?null:d.exports.createElement(vt,null,d.exports.createElement(ut,Object.assign({},c)),o!=="loading"&&d.exports.createElement(pt,null,o==="error"?d.exports.createElement(ct,Object.assign({},c)):d.exports.createElement(mt,Object.assign({},c))))};function he(){var e=h([`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`]);return he=function(){return e},e}function ge(){var e=h([`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`]);return ge=function(){return e},e}var bt=function(t){return`
0% {transform: translate3d(0,`+t*-200+`%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`},yt=function(t){return`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,`+t*-150+`%,-1px) scale(.6); opacity:0;}
`},Tt="0%{opacity:0;} 100%{opacity:1;}",St="0%{opacity:1;} 100%{opacity:0;}",Ot=_("div",d.exports.forwardRef)(ge()),_t=_("div")(he()),At=function(t,n){var a=t.includes("top"),o=a?1:-1,c=ne()?[Tt,St]:[bt(o),yt(o)],r=c[0],s=c[1];return{animation:n?S(r)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":S(s)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}},jt=d.exports.memo(function(e){var t=e.toast,n=e.position,a=e.style,o=e.children,c=t!=null&&t.height?At(t.position||n||"top-center",t.visible):{opacity:0},r=d.exports.createElement(xt,{toast:t}),s=d.exports.createElement(_t,Object.assign({},t.ariaProps),H(t.message,t));return d.exports.createElement(Ot,{className:t.className,style:f({},c,a,t.style)},typeof o=="function"?o({icon:r,message:s}):d.exports.createElement(d.exports.Fragment,null,r,s))});function xe(){var e=h([`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`]);return xe=function(){return e},e}Je(d.exports.createElement);var wt=function(t,n){var a=t.includes("top"),o=a?{top:0}:{bottom:0},c=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return f({left:0,right:0,display:"flex",position:"absolute",transition:ne()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+n*(a?1:-1)+"px)"},o,c)},Nt=z(xe()),L=16,kt=function(t){var n=t.reverseOrder,a=t.position,o=a===void 0?"top-center":a,c=t.toastOptions,r=t.gutter,s=t.children,l=t.containerStyle,u=t.containerClassName,y=at(c),b=y.toasts,j=y.handlers;return d.exports.createElement("div",{style:f({position:"fixed",zIndex:9999,top:L,left:L,right:L,bottom:L,pointerEvents:"none"},l),className:u,onMouseEnter:j.startPause,onMouseLeave:j.endPause},b.map(function(g){var D=g.position||o,C=j.calculateOffset(g,{reverseOrder:n,gutter:r,defaultPosition:o}),N=wt(D,C),B=g.height?void 0:Ze(function(R){j.updateHeight(g.id,R.height)});return d.exports.createElement("div",{ref:B,className:g.visible?Nt:"",key:g.id,style:N},g.type==="custom"?H(g.message,g):s?s(g):d.exports.createElement(jt,{toast:g,position:D}))}))};function Rt({children:e,title:t,heading:n}){const{flash:a}=Y().props,[o,c]=d.exports.useState(!1),r=()=>{c(!o)};return p("div",{className:"flex flex-row min-h-screen bg-gray-100 text-gray-800",children:[i(kt,{toastOptions:{style:{marginTop:"4rem"}}}),i(ye,{title:t}),i(He,{isNavVisible:o,setNavState:r}),p("main",{className:"main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in z-10",children:[i($e,{heading:n,setNavState:r}),p("div",{className:"main-content flex flex-col flex-grow relative ml-64 mt-16",children:[a.error&&i(Z,{type:"error",message:a.error}),a.success&&i(Z,{type:"success",message:a.success}),e]})]})]})}export{Rt as A,x as t};

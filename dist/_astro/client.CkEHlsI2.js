import{i as O,a as m,c as z,b as G,e as j,d as U,f as y,g as I,h as x,j as F,k as K,l as D,m as X,n as V,o as Z,p as J,q as h,S as Q}from"./runtime-core.esm-bundler.C8SZUrae.js";/**
* @vue/runtime-dom v3.5.6
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let A;const v=typeof window<"u"&&window.trustedTypes;if(v)try{A=v.createPolicy("vue",{createHTML:t=>t})}catch{}const $=A?t=>A.createHTML(t):t=>t,Y="http://www.w3.org/2000/svg",k="http://www.w3.org/1998/Math/MathML",l=typeof document<"u"?document:null,C=l&&l.createElement("template"),tt={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?l.createElementNS(Y,t):e==="mathml"?l.createElementNS(k,t):n?l.createElement(t,{is:n}):l.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,o){const r=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{C.innerHTML=$(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const c=C.content;if(s==="svg"||s==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},et=Symbol("_vtc");function nt(t,e,n){const s=t[et];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const E=Symbol("_vod"),st=Symbol("_vsh"),it=Symbol(""),rt=/(^|;)\s*display\s*:/;function ot(t,e,n){const s=t.style,i=m(n);let o=!1;if(n&&!i){if(e)if(m(e))for(const r of e.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&S(s,c,"")}else for(const r in e)n[r]==null&&S(s,r,"");for(const r in n)r==="display"&&(o=!0),S(s,r,n[r])}else if(i){if(e!==n){const r=s[it];r&&(n+=";"+r),s.cssText=n,o=rt.test(n)}}else e&&t.removeAttribute("style");E in t&&(t[E]=o?s.display:"",t[st]&&(s.display="none"))}const T=/\s*!important$/;function S(t,e,n){if(I(n))n.forEach(s=>S(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ct(t,e);T.test(n)?t.setProperty(x(s),n.replace(T,""),"important"):t[s]=n}}const w=["Webkit","Moz","ms"],g={};function ct(t,e){const n=g[e];if(n)return n;let s=F(e);if(s!=="filter"&&s in t)return g[e]=s;s=K(s);for(let i=0;i<w.length;i++){const o=w[i]+s;if(o in t)return g[e]=o}return e}const M="http://www.w3.org/1999/xlink";function N(t,e,n,s,i,o=V(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(M,e.slice(6,e.length)):t.setAttributeNS(M,e,n):n==null||o&&!D(n)?t.removeAttribute(e):t.setAttribute(e,o?"":X(n)?String(n):n)}function ft(t,e,n,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const r=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(r!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const r=typeof t[e];r==="boolean"?n=D(n):n==null&&r==="string"?(n="",o=!0):r==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function lt(t,e,n,s){t.addEventListener(e,n,s)}function at(t,e,n,s){t.removeEventListener(e,n,s)}const L=Symbol("_vei");function ut(t,e,n,s,i=null){const o=t[L]||(t[L]={}),r=o[e];if(s&&r)r.value=s;else{const[c,a]=pt(e);if(s){const f=o[e]=ht(s,i);lt(t,c,f,a)}else r&&(at(t,c,r,a),o[e]=void 0)}}const H=/(?:Once|Passive|Capture)$/;function pt(t){let e;if(H.test(t)){e={};let s;for(;s=t.match(H);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):x(t.slice(2)),e]}let b=0;const dt=Promise.resolve(),mt=()=>b||(dt.then(()=>b=0),b=Date.now());function ht(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Z(St(s,n.value),e,5,[s])};return n.value=t,n.attached=mt(),n}function St(t,e){if(I(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const _=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gt=(t,e,n,s,i,o)=>{const r=i==="svg";e==="class"?nt(t,s,r):e==="style"?ot(t,n,s):U(e)?y(e)||ut(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bt(t,e,s,r))?(ft(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&N(t,e,s,r,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),N(t,e,s,r))};function bt(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&_(e)&&O(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return _(e)&&m(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!m(n)))}const B=j({patchProp:gt},tt);let d,P=!1;function At(){return d||(d=z(B))}function vt(){return d=P?d:G(B),P=!0,d}const Ct=(...t)=>{const e=At().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=q(s);if(!i)return;const o=e._component;!O(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,!1,W(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},e},Et=(...t)=>{const e=vt().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=q(s);if(i)return n(i,!0,W(i))},e};function W(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function q(t){return m(t)?document.querySelector(t):t}const Tt=()=>{},wt=J({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:t,value:e,hydrate:n}){if(!e)return()=>null;let s=n?"astro-slot":"astro-static-slot";return()=>h(s,{name:t,innerHTML:e})}});let R=new WeakMap;const Lt=t=>async(e,n,s,{client:i})=>{if(!t.hasAttribute("ssr"))return;const o=e.name?`${e.name} Host`:void 0,r={};for(const[u,p]of Object.entries(s))r[u]=()=>h(wt,{value:p,name:u==="default"?void 0:u});const c=i!=="only",a=c?Et:Ct;let f=R.get(t);if(f)f.props=n,f.slots=r,f.component.$forceUpdate();else{f={props:n,slots:r};const u=a({name:o,render(){let p=h(e,f.props,f.slots);return f.component=this,Mt(e.setup)&&(p=h(Q,null,p)),p}});await Tt(),u.mount(t,c),R.set(t,f)}t.addEventListener("astro:unmount",()=>app.unmount(),{once:!0})};function Mt(t){const e=t?.constructor;return e&&e.name==="AsyncFunction"}export{Lt as default};
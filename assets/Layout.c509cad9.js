var d=Object.defineProperty;var m=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(o,e,a)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,i=(o,e)=>{for(var a in e||(e={}))c.call(e,a)&&u(o,a,e[a]);if(m)for(var a of m(e))v.call(e,a)&&u(o,a,e[a]);return o};import{g as p,h as s,T as f,n as g,i as b,p as y,q as h,s as D,r as n,t as S,v as L}from"./app.c103d7e9.js";import{S as P}from"./SkipLink.08581280.js";var B=p({name:"FadeSlideY",setup(o,{slots:e}){const a=g(),r=a.resolve,l=a.pending;return()=>s(f,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:r,onBeforeLeave:l},()=>{var t;return(t=e.default)==null?void 0:t.call(e)})}}),F=p({name:"Layout",setup(){const o=L(),e=b(),a=S(),r=y(),l=h(),t=D(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[s(P),s(n("CommonWrapper"),{},i(i({default:()=>r.value.home?s(n("HomePage")):s(B,()=>s(n("NormalPage"),{key:a.value.path}))},t.value!=="none"?{navScreenBottom:()=>s(n("BloggerInfo"))}:{}),!l.value&&t.value==="always"?{sidebar:()=>s(n("BloggerInfo"))}:{}))]}});export{F as default};

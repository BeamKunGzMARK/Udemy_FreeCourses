import{j as t,a as l,r as i,b as h,R as N,c as v}from"./vendor.ff5fefbe.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};y();const x=({posts:a,loading:r})=>(console.log(r),r?t("h2",{children:"Loading..."}):t("div",{className:"grid-container gap-4 grid-flow-col ",children:a.map(o=>l("div",{className:"max-w-sm rounded overflow-hidden shadow-lg bg_change",children:[t("img",{className:"w-full",src:o.picture,alt:o.name}),l("div",{className:"px-6 py-4",children:[t("a",{className:"font-bold text-xl mb-2 link",href:o.link,target:"_blank",children:o.name}),t("p",{className:"color_description text-base",children:o.name})]})]}))})),P=({postsPerPage:a,totalPosts:r,paginate:o})=>{const n=[];for(let e=1;e<=Math.ceil(r/a);e++)n.push(e);return t("nav",{children:t("ul",{className:"pagination",children:n.map(e=>t("li",{className:"page-item",children:t("a",{onClick:()=>o(e),href:"!#",className:"page-link",children:e})},e))})})};var b="/Udemy_FreeCourses/assets/logo.ecc203fb.svg";const w=()=>{const[a,r]=i.exports.useState([]),[o,n]=i.exports.useState(!1),[e,s]=i.exports.useState(1),[c]=i.exports.useState(9);i.exports.useEffect(()=>{(async()=>{n(!0);const g=await h.get("https://nodeserverwithcatcrypto.herokuapp.com/udemy");r(g.data),n(!1)})()},[]);const d=e*c,f=d-c,m=a.slice(f,d),p=u=>s(u);return console.log(a.length),l("div",{className:"App-header",children:[t("img",{src:b,className:"App-logo",alt:"logo"}),l("div",{className:"container mt-3",children:[t("h1",{className:"mb-3 h1",children:"Udemy Free Courses"}),t(x,{posts:m,loading:o})]}),t(P,{postsPerPage:c,totalPosts:a.length,paginate:p,className:"pagination"})]})};N.render(t(v.StrictMode,{children:t(w,{})}),document.getElementById("root"));
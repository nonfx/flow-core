import{_ as t}from"./iframe-8e7a49c7.js";import{C as r}from"./index-fa1bd678.js";const m={aws:async()=>(await t(()=>import("./index-431bd856-78c89a97.js"),["./index-431bd856-78c89a97.js","./index-fa1bd678.js"],import.meta.url)).default,gcp:async()=>(await t(()=>import("./index-7bd67e87-278bbdf0.js"),["./index-7bd67e87-278bbdf0.js","./index-fa1bd678.js"],import.meta.url)).default,product:async()=>(await t(()=>import("./index-67e7d234-47a8d93d.js"),["./index-67e7d234-47a8d93d.js","./index-fa1bd678.js"],import.meta.url)).default,system:async()=>(await t(()=>import("./index-7eb1bbbf-0aa352a4.js"),["./index-7eb1bbbf-0aa352a4.js","./index-fa1bd678.js"],import.meta.url)).default,policy:async()=>(await t(()=>import("./index-affcca0b-56160559.js"),["./index-affcca0b-56160559.js","./index-fa1bd678.js"],import.meta.url)).default,azure:async()=>(await t(()=>import("./index-0f263b69-d8b2a955.js"),["./index-0f263b69-d8b2a955.js","./index-fa1bd678.js"],import.meta.url)).default};async function p(o){const i=await Promise.all(o.map(async a=>({packName:a,pack:await m[a]()}))),_=i.reduce((a,{pack:e})=>({...a,...e}),{});return r.setConfig({iconPack:{...r.getConfig().iconPack,..._}}),i}export{p as s};

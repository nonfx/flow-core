import{_ as t}from"./iframe-7ed04fc7.js";import{C as o}from"./index-fa1bd678.js";const m={aws:async()=>(await t(()=>import("./index-ff9ca719-298bdeb1.js"),["./index-ff9ca719-298bdeb1.js","./index-fa1bd678.js"],import.meta.url)).default,gcp:async()=>(await t(()=>import("./index-66daa001-5589c567.js"),["./index-66daa001-5589c567.js","./index-fa1bd678.js"],import.meta.url)).default,product:async()=>(await t(()=>import("./index-1dbd5985-04f991ba.js"),["./index-1dbd5985-04f991ba.js","./index-fa1bd678.js"],import.meta.url)).default,system:async()=>(await t(()=>import("./index-f09bd1b9-e398889a.js"),["./index-f09bd1b9-e398889a.js","./index-fa1bd678.js"],import.meta.url)).default,policy:async()=>(await t(()=>import("./index-46a4f9d8-78875d41.js"),["./index-46a4f9d8-78875d41.js","./index-fa1bd678.js"],import.meta.url)).default};async function u(r){const i=await Promise.all(r.map(async a=>({packName:a,pack:await m[a]()}))),_=i.reduce((a,{pack:e})=>({...a,...e}),{});return o.setConfig({iconPack:{...o.getConfig().iconPack,..._}}),i}export{u as s};

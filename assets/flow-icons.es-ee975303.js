import{_ as a}from"./iframe-4cbbb895.js";import{C as r}from"./index-fa1bd678.js";const e="1.6.0",c={aws:async()=>(await a(()=>import("./index-95541b84-64bb5c2c.js"),["./index-95541b84-64bb5c2c.js","./index-fa1bd678.js"],import.meta.url)).default,gcp:async()=>(await a(()=>import("./index-e5af9c99-a97e26d2.js"),["./index-e5af9c99-a97e26d2.js","./index-fa1bd678.js"],import.meta.url)).default,product:async()=>(await a(()=>import("./index-db3b4893-e336108c.js"),["./index-db3b4893-e336108c.js","./index-fa1bd678.js"],import.meta.url)).default,system:async()=>(await a(()=>import("./index-90ecc58e-79a0355f.js"),["./index-90ecc58e-79a0355f.js","./index-fa1bd678.js"],import.meta.url)).default,policy:async()=>(await a(()=>import("./index-50169de7-da65ef62.js"),["./index-50169de7-da65ef62.js","./index-fa1bd678.js"],import.meta.url)).default,azure:async()=>(await a(()=>import("./index-8afeaf31-da57ba09.js"),["./index-8afeaf31-da57ba09.js","./index-fa1bd678.js"],import.meta.url)).default,nonfx:async()=>(await a(()=>import("./index-24ef0109-8633ec22.js"),["./index-24ef0109-8633ec22.js","./index-fa1bd678.js"],import.meta.url)).default};async function m(i){const o=await Promise.all(i.map(async t=>({packName:t,pack:await c[t]()}))),p=o.reduce((t,{pack:_})=>({...t,..._}),{});return r.setConfig({iconPack:{...r.getConfig().iconPack,...p}}),o}console.log(`%c@nonfx/flow-icons%cv${e}`,"background:#161616;color:white;padding:4px 6px 4px 6px;border-radius:4px 0px 0px 4px","background:#AAFF00;color:black;padding:4px 6px 4px 6px;border-radius:0px 4px 4px 0px;");export{m as s};

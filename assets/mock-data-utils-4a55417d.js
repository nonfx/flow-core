import{f as e}from"./index-3a83ac04.js";function x(r,o,i){const m=new Date().getTime(),f=[],l=i??150,c=o??e.number.int({min:1,max:3}),u=["#66c2ff","#ff6666","#99ff99","#ffb366","#cc99ff","#99ccff","#ffcc99","#66ff99","#ff99cc","#ccccff"],p=e.helpers.arrayElements(u,c);for(let t=0;t<c;t++){const b=r?r.getTime():m,s=[];for(let a=0;a<l;a++){const g=b+a*60*1e3;let n=Math.floor(e.number.float({min:0,max:1})*10)+50*(t+1);n<0&&(n*=-1),n%9===0&&(n=50*(t+1)*D(1,2));const h={date:g,value:+n.toFixed(0)};s.push(h)}f.push({seriesName:e.location.country(),points:s,color:p[t],type:e.helpers.arrayElement(["line","bar","area"])})}return f}function D(r,o){return e.number.int({min:r,max:o})}export{x as g};
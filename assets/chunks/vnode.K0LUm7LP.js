import{F as i}from"./framework.95PECLjQ.js";function l(e){return e===""?!0:!!e}function c(e,...r){const t=[...e],o=[];for(;t.length>0;){const n=t.shift();n.type===i&&Array.isArray(n.children)?t.push(...n.children):(r[0]==="*"||n.type&&r.includes(n.type.name))&&o.push(n)}return o}export{c as f,l as t};
import{m as s,b as i}from"./browser.8e0a2b31.js";function a(e="",r={}){const n=r.inline?s.parseInline(e):s.parse(e);return n&&!r.unsecure?i.sanitize(n):n}const u=(e,{value:r,modifiers:n})=>{e.innerHTML=a(r,{inline:n.inline,unsecure:n.unsecure})},t=u;export{u as p,t as v};
function f(o){return o!==null&&typeof o=="object"}function e(o,c,r=".",u){if(!f(c))return e(o,{},r,u);const t=Object.assign({},c);for(const n in o){if(n==="__proto__"||n==="constructor")continue;const i=o[n];i!=null&&(u&&u(t,n,i,r)||(Array.isArray(i)&&Array.isArray(t[n])?t[n]=[...i,...t[n]]:f(i)&&f(t[n])?t[n]=e(i,t[n],(r?`${r}.`:"")+n.toString(),u):t[n]=i))}return t}function s(o){return(...c)=>c.reduce((r,u)=>e(r,u,"",o),{})}const y=s();export{y as d};
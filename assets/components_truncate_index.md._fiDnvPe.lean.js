import{d as u,r as E,l as r,o as p,f as m,w as l,a8 as y,q as n,c as d,b as x,t as k,a2 as _,g as b,T as F,J as e,V as h,E as T}from"./chunks/framework.95PECLjQ.js";import{v as C}from"./chunks/index.arIZTdT8.js";import"./chunks/use-singleton.9DbSTscS.js";const v=["title"],o=u({__name:"Truncate",props:{text:{type:String,default:""},length:{type:[Number,String],default:100},omission:{type:String,default:"..."},expandable:{type:Boolean,default:!1},showMoreText:{type:String,default:"Show More"},showLessText:{type:String,default:"Show Less"},tooltip:{type:Boolean,default:!0}},setup(t){const i=t,a=E(!1),s=r(()=>Number.parseInt(`${i.length}`)),c=r(()=>a.value||Number.isNaN(s.value)||i.text.length<=s.value?i.text:`${i.text.slice(0,s.value-i.omission.length)}${i.omission}`);function g(){a.value=!a.value}return(P,D)=>(p(),m(F,{name:"fade",mode:"out-in"},{default:l(()=>[y((p(),d("span",{key:`${n(a)}`,class:"truncated","data-testid":"truncate",title:t.text},[x(k(n(c))+" ",1),t.expandable&&t.text.length>n(s)?(p(),d("a",{key:0,"data-testid":"truncate-expand",href:"javascript:void",onClick:_(g,["stop","prevent"])},k(n(a)?t.showLessText:t.showMoreText),1)):b("",!0)],8,v)),[[n(C),t.tooltip&&!t.expandable&&t.text.length>n(s)]])]),_:1}))}}),q=h("",4),f=h("",2),S=h("",2),B=h("",3),A=h("",8),I=JSON.parse('{"title":"Truncate · Components","description":"Limiting long text.","frontmatter":{"title":"Truncate · Components","description":"Limiting long text."},"headers":[],"relativePath":"components/truncate/index.md","filePath":"components/truncate/index.md"}'),w={name:"components/truncate/index.md"},M=Object.assign(w,{setup(t){return(i,a)=>{const s=T("preview");return p(),d("div",null,[q,e(s,null,{default:l(()=>[e(o,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30"})]),_:1}),f,e(s,null,{default:l(()=>[e(o,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",omission:" [...]"})]),_:1}),S,e(s,null,{default:l(()=>[e(o,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",expandable:""})]),_:1}),B,e(s,null,{default:l(()=>[e(o,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",expandable:"","show-more-text":"Lihat Selengkapnya","show-less-text":"Sembunyikan"})]),_:1}),A])}}});export{I as __pageData,M as default};
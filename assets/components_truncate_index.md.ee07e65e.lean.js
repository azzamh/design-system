import{m as F,r as y,c as d,_ as h,x as r,H as m,I as o,p as c,y as g,z as u,a5 as _,J as x,T as b,K as C,M as s,Y as l}from"./chunks/framework.91e0efa6.js";import"./chunks/Truncate.vue_vue_type_style_index_0_lang.4ed993c7.js";const T=F({props:{text:{type:String,default:""},length:{type:[Number,String],default:100},omission:{type:String,default:"..."},expandable:{type:Boolean,default:!1},showMoreText:{type:String,default:"Show More"},showLessText:{type:String,default:"Show Less"}},setup(t){const e=y(!1),n=d(()=>Number.parseInt(`${t.length}`)),a=d(()=>e.value||Number.isNaN(n.value)||t.text.length<=n.value?t.text:`${t.text.slice(0,n.value-t.omission.length)}${t.omission}`);function i(){e.value=!e.value}return{expand:e,viewText:a,toggle:i,maxLength:n}}});function q(t,e,n,a,i,P){return r(),m(b,{name:"fade",mode:"out-in"},{default:o(()=>[(r(),c("span",{key:`${t.expand}`,class:"truncate","data-testid":"truncate"},[g(u(t.viewText)+" ",1),t.expandable&&t.text.length>t.maxLength?(r(),c("a",{key:0,"data-testid":"truncate-expand",href:"#",onClick:e[0]||(e[0]=_((...D)=>t.toggle&&t.toggle(...D),["prevent"]))},u(t.expand?t.showLessText:t.showMoreText),1)):x("",!0)]))]),_:1})}const p=h(T,[["render",q]]),f=l("",4),A=l("",2),S=l("",2),v=l("",3),E=l("",8),L=JSON.parse('{"title":"Truncate · Components","description":"Limiting long text.","frontmatter":{"title":"Truncate · Components","description":"Limiting long text."},"headers":[],"relativePath":"components/truncate/index.md","filePath":"components/truncate/index.md"}'),w={name:"components/truncate/index.md"},N=Object.assign(w,{setup(t){return(e,n)=>{const a=C("preview");return r(),c("div",null,[f,s(a,null,{default:o(()=>[s(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30"})]),_:1}),A,s(a,null,{default:o(()=>[s(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",omission:" [...]"})]),_:1}),S,s(a,null,{default:o(()=>[s(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",expandable:""})]),_:1}),v,s(a,null,{default:o(()=>[s(p,{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.",length:"30",expandable:"","show-more-text":"Lihat Selengkapnya","show-less-text":"Sembunyikan"})]),_:1}),E])}}});export{L as __pageData,N as default};
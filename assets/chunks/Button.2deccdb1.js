import{I as r}from"./index.a3ecab28.js";import{m as f,V as o,c as i,_ as u,x as c,A as d,B as p,q as m,v as h,R as v}from"./framework.f14560cd.js";import"./Button.vue_vue_type_style_index_0_lang.4ed993c7.js";const y=Symbol("ButtonGroupSetting"),b=f({props:{variant:{type:String,default:"solid"},color:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},href:{type:[String,Object],default:void 0},type:{type:String,default:"button"}},setup(e){const a=o(r,void 0,!1),s=o(y,void 0,!1),l=i(()=>{const t=["btn"];return e.color&&t.push(`btn--${e.color}`),e.variant&&t.push(`btn--variant-${e.variant}`),a!=null&&a.size.value?t.push(`btn--${a==null?void 0:a.size.value}`):s!=null&&s.size.value?t.push(`btn--${s==null?void 0:s.size.value}`):e.size&&t.push(`btn--${e.size}`),e.icon&&t.push("btn--icon"),e.pill&&t.push("btn--pill"),t}),n=i(()=>e.href?"nuxt-link":"button");return{classNames:l,tagName:n}}});function $(e,a,s,l,n,t){return c(),d(v(e.tagName),{href:e.href,type:e.type,"data-testid":"btn",class:h(e.classNames)},{default:p(()=>[m(e.$slots,"default")]),_:3},8,["href","type","class"])}const T=u(b,[["render",$]]);export{y as B,T as p};
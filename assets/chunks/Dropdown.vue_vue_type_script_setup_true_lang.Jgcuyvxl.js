import{_ as R,o as l,c as y,p as $,d as I,a4 as L,P as X,r as h,l as C,I as G,z as M,a0 as F,f as b,w as k,q as i,a3 as V,a as v,K as z,g as S,b as j,t as H,L as J,T as K,ac as Q,A as Y,n as T,ab as Z,af as ee}from"./framework.kdG7p9fL.js";import{o as te,d as D}from"./index.IJQqav0q.js";import{_ as oe}from"./Button.vue_vue_type_script_setup_true_lang.f5vU9QSd.js";import"./Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_ as E,D as ne}from"./Dropdown.vue_vue_type_style_index_0_lang.X8dxwg20.js";import{u as ae}from"./use-focus.tCf7QHyd.js";import{a as se,c as le,f as de,s as ie,o as re,h as ue}from"./floating-ui.dom.1o3sBJnb.js";import{u as ce}from"./index.vndneDSt.js";import{I as fe}from"./20.3HYS_NWI.js";const pe={},ve={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",class:"persona-icon",viewBox:"0 0 16 16"},me=$("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.647 3.647a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .707l-4 4a.5.5 0 0 1-.708-.708L9.294 8 5.647 4.354a.5.5 0 0 1 0-.707","clip-rule":"evenodd"},null,-1),_e=[me];function we(t,g){return l(),y("svg",ve,_e)}const he=R(pe,[["render",we]]),be={},ye={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",class:"persona-icon",viewBox:"0 0 16 16"},ke=$("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.613 13.376a.444.444 0 0 1-.627-.012L2.124 8.308a.445.445 0 0 1 0-.616l4.862-5.056a.444.444 0 1 1 .64.617L3.487 7.556h10.068a.444.444 0 0 1 0 .888H3.488l4.137 4.303a.445.445 0 0 1-.012.629","clip-rule":"evenodd"},null,-1),$e=[ke];function ge(t,g){return l(),y("svg",ye,$e)}const Ce=R(be,[["render",ge]]),P=Symbol("DropdownTree"),Se=$("div",{class:"dropdown__group-content"},null,-1),Be={class:"dropdown__subitem__content"},xe=I({__name:"DropdownSubitem",props:{text:{type:String,default:""},noCaret:{type:Boolean,default:!1}},emits:["click"],setup(t,{expose:g,emit:r}){var w;const m=L(),c=r,n=X(P,void 0,!0),_=h("slide-left"),f=C(()=>n===void 0),a=(w=n==null?void 0:n.tree)!=null?w:G({_level:0,slots:m}),o=()=>{a.value={_level:a.value._level+1,prev:a.value,slots:m}},p=()=>{a.value.prev&&(a.value=a.value.prev)},B=C(()=>a.value.slots.default),x=C(()=>!!(f.value&&a.value.prev));M(a,(s,d)=>{_.value=s._level>d._level?"slide-left":"slide-right"}),f.value&&F(P,{tree:a,next:o,back:p});function O(){f.value&&(a.value={prev:void 0,_level:0,slots:m})}function A(){const s=new MouseEvent("click");c("click",s),s.defaultPrevented||o()}return g({reset:O,next:o,back:p}),(s,d)=>(l(),b(K,{name:i(_),mode:"out-in"},{default:k(()=>[(l(),y("div",{key:i(a)._level,"data-testid":"dropdown-subitem",class:"dropdown__subitem"},[i(x)?(l(),b(E,{key:"btn-back","data-testid":"dropdown-back",class:"dropdown__subitem__btn dropdown__subitem__btn--back",onClick:d[0]||(d[0]=V(e=>p(),["prevent"]))},{default:k(()=>[v(s.$slots,"button-back",{},()=>[z(Ce,{class:"dropdown__subitem__next"}),Se])]),_:3})):S("",!0),i(f)?(l(),b(J(i(B)),{key:2})):(l(),b(E,{key:"btn-next",class:"dropdown__subitem__btn",onClick:V(A,["prevent"])},{default:k(()=>[$("div",Be,[v(s.$slots,"button-content",{next:o,back:p},()=>[j(H(t.text),1)])]),t.noCaret?S("",!0):(l(),b(he,{key:0,"data-testid":"dropdown-subitem-next",class:"dropdown__subitem__next"}))]),_:3}))]))]),_:3},8,["name"]))}}),De={key:0,class:"drowdown__menu__prepend"},ze={key:1,class:"drowdown__menu__append"},Le=I({models:{prop:"modelValue",event:"update:modelValue"},__name:"Dropdown",props:{modelValue:{type:Boolean,default:!1},text:{type:String,default:""},placement:{type:String,default:"bottom-start"},variant:{type:String,default:"solid"},color:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},noCaret:{type:Boolean,default:!1},divider:{type:Boolean,default:!1},menuClass:{type:[String,Array,Object],default:void 0},buttonClass:{type:[String,Array,Object],default:void 0},menuSize:{type:String,default:"sm"},noAnimation:{type:Boolean,default:!1}},emits:["show","hide","update:modelValue"],setup(t,{expose:g}){const r=t,m=L(),c=h(),n=h(),_=h(),f=h(),a=Q(r,"placement"),o=ce(r),p=h(!1),{next:B,prev:x}=ae(_),O=C(()=>{const e=[""];return r.divider&&e.push("dropdown--divider"),r.menuSize&&e.push(`dropdown--menu-${r.menuSize}`),e}),A=C(()=>{const e=[""];return m.prepend&&e.push("dropdown__menu--has-prepend"),m.append&&e.push("dropdown__menu--has-append"),e});function w(){r.disabled||(o.value?d():s())}function s(){r.disabled||(o.value=!0)}function d(){r.disabled||(o.value=!1)}return te(n,()=>{o.value&&setTimeout(()=>{d()})},{ignore:[c]}),D("Escape",e=>{const u=e.target;o.value&&(d(),typeof u.blur=="function"&&u.blur())}),D(["ArrowUp"],e=>{o.value&&(e.preventDefault(),x())}),D(["ArrowDown"],e=>{o.value&&(e.preventDefault(),B())}),D(["Tab"],e=>{o.value&&(e.preventDefault(),e.shiftKey?x():B())}),Y(e=>{if(c.value&&n.value){const u=se(c.value,n.value,()=>{le(c.value,n.value,{strategy:"absolute",placement:a.value,middleware:[de(),ie(),re(8),ue()]}).then(({x:N,y:U,placement:W,middlewareData:q})=>{n.value&&(n.value.dataset.popperPlacement=W,n.value.style.left=`${N||0}px`,n.value.style.top=`${U||0}px`,p.value=q.hide.referenceHidden)})},{animationFrame:!0});e(u)}},{flush:"post"}),M(o,e=>{!e&&f.value&&f.value.reset()},{immediate:!0}),F(ne,{isOpen:o,toggle:w,open:s,close:d}),g({menuBody:_,menu:n,root:c,open:s,close:d}),(e,u)=>(l(),y("div",{ref_key:"root",ref:c,class:T(["dropdown",[{"dropdown--open":i(o),"dropdown--no-caret":t.noCaret},i(O)]]),"data-testid":"dropdown"},[v(e.$slots,"activator",{toggle:w,open:s,close:d,isOpen:i(o)},()=>[z(oe,{"data-testid":"dropdown-activator",class:T(["dropdown__activator",t.buttonClass]),variant:t.variant,color:t.color,size:t.size,icon:t.icon,pill:t.pill,disabled:t.disabled,onClick:V(w,["prevent"])},{default:k(()=>[v(e.$slots,"button-content",{},()=>[j(H(t.text),1)]),t.noCaret?S("",!0):(l(),b(fe,{key:0,class:"dropdown__caret","data-testid":"dropdown-caret"}))]),_:3},8,["class","variant","color","size","icon","pill","disabled"])]),z(K,{name:"fade",css:!t.noAnimation,onAfterEnter:u[0]||(u[0]=N=>e.$emit("show")),onAfterLeave:u[1]||(u[1]=N=>e.$emit("hide"))},{default:k(()=>[Z($("div",{ref_key:"menu",ref:n,"data-testid":"dropdown-menu",class:T(["dropdown__menu",[t.menuClass,i(A)]])},[e.$slots.prepend?(l(),y("div",De,[v(e.$slots,"prepend")])):S("",!0),$("div",{ref_key:"menuBody",ref:_,class:"dropdown__menu__body"},[z(xe,{ref_key:"wizard",ref:f,class:"dropdown__menu__container"},{default:k(()=>[v(e.$slots,"default")]),_:3},512)],512),e.$slots.append?(l(),y("div",ze,[v(e.$slots,"append")])):S("",!0)],2),[[ee,i(o)&&!i(p)]])]),_:3},8,["css"])],2))}});export{Le as _,xe as a};
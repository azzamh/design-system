import{_ as r}from"./Input.vue_vue_type_style_index_0_lang.57c717ef.js";import{_ as i,M as u,v as n,b as o,z as p,B as t,a4 as l,ah as m,F as c,V as $,a9 as f,y,a as b}from"./framework.0fccce8d.js";const _={key:0,class:"input__prepend"},k=["disabled","readonly"],C={key:1,class:"input__append"};function I(s,a,v,z,B,V){const d=u("IconClear");return n(),o("div",{class:b(["input",s.containerClass]),"data-testid":"input-container"},[s.$slots.prepend?(n(),o("span",_,[p(s.$slots,"prepend")])):t("",!0),l(c("input",$({"onUpdate:modelValue":a[0]||(a[0]=e=>s.model=e),class:["input__form",s.classNames],"data-testid":"input",disabled:s.disabled,readonly:s.readonly},s.$attrs,{onBeforeinput:a[1]||(a[1]=e=>s.checkOnInput(s.accept,e))}),null,16,k),[[m,s.model]]),l(y(d,{class:"input__clear","data-testid":"input-clear",onClick:s.clear},null,8,["onClick"]),[[f,s.clearable&&s.model]]),s.$slots.append?(n(),o("span",C,[p(s.$slots,"append")])):t("",!0)],2)}const M=i(r,[["render",I]]);export{M as p};
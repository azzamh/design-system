import{j as s,k as f,P as V,E as h}from"../app.b3e63b5e.js";import{v as d,i as r}from"./value.27565d8f.js";function c(e,a){return Array.isArray(e)?d(e,a):r(e,a)}function A(e){const{emit:a}=h(),t=e.value,i=e.uncheckedValue,n=s(c(e.modelValue,t)||e.checked),o=f({get(){return c(e.modelValue,t)||e.checked},set(u){const l=u?t:i;Array.isArray(e.modelValue)?u?d(e.modelValue,l)||a("update:modelValue",[...e.modelValue,l]):a("update:modelValue",e.modelValue.filter(m=>!r(m,t))):a("update:modelValue",l),a("change",u)}});return V(n,o),n}export{A as u};
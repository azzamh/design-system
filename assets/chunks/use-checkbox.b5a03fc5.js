import{s}from"./index.2ab2eff7.js";import{v as r,i as d}from"./value.b16f1ede.js";import{x as f,r as V,c as h}from"../app.58fe9cf7.js";function n(e,a){return Array.isArray(e)?r(e,a):d(e,a)}function g(e){const{emit:a}=f(),t=e.value,o=e.uncheckedValue,c=V(n(e.modelValue,t)||e.checked),i=h({get(){return n(e.modelValue,t)||e.checked},set(u){const l=u?t:o;Array.isArray(e.modelValue)?u?r(e.modelValue,l)||a("update:modelValue",[...e.modelValue,l]):a("update:modelValue",e.modelValue.filter(m=>!d(m,t))):a("update:modelValue",l),a("change",u)}});return s(c,i),c}export{g as u};
import{r,l as f,as as s,at as V}from"./framework.CUNsVCb6.js";import{v as d,i}from"./value.C5X7htjv.js";function n(e,a){return Array.isArray(e)?d(e,a):i(e,a)}function y(e){const{emit:a}=V(),u=r(n(e.modelValue,e.value)||e.checked),m=f({get(){return n(e.modelValue,e.value)||e.checked},set(t){const l=t?e.value:e.uncheckedValue;Array.isArray(e.modelValue)?t?d(e.modelValue,l)||a("update:modelValue",[...e.modelValue,l]):a("update:modelValue",e.modelValue.filter(c=>!i(c,e.value))):a("update:modelValue",l)}});return s(u,m,{immediate:!1}),u}export{y as u};
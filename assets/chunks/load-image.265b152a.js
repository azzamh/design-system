function E(r){return r?new Promise((s,i)=>{const e=new globalThis.Image,n=()=>{t(),s(e)},o=()=>{t(),i(new Error("ERR_FAILED_LOAD_IMAGE"))},t=()=>{e.removeEventListener("load",n),e.removeEventListener("error",o)};e.addEventListener("load",n),e.addEventListener("error",o),e.src=r}):Promise.reject(new Error("ERR_INVALID_IMAGE_SRC"))}export{E as l};
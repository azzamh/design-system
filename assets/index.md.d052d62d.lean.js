import{H as g}from"./chunks/Heading.f6e27baa.js";import{S as f}from"./chunks/Subheading.a382e119.js";import{B as h}from"./chunks/Badge.bd841624.js";import{B as v}from"./chunks/Button.a12072e3.js";import{i as x,ac as y,ad as b,f as B,r as o,o as d,c as l,h as e,a as t,w as n,e as i}from"./app.389f7721.js";import{I as w}from"./chunks/20.9d06ab5b.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.b8f2d2af.js";import"./chunks/utils-6ba05f5b.0e142142.js";const S=x({components:{Heading:g,Subheading:f,Badge:h,Button:v,IconGithub:w},setup(){const s=y();function a(){s.go(b("/docs/getting-started"))}function c(){window.open("https://github.com/privy-open-source/design-system","_blank")}return{gettingStarted:a,openGithub:c}}}),k="/design-system/assets/images/logo.svg",C="/design-system/assets/images/icon-privy.svg",G={class:"flex flex-col items-center justify-center pt-8"},H=e("img",{class:"py-7",src:k,alt:"icon privy",width:"150",height:"150"},null,-1),I={class:"flex h-full px-3"},$=e("div",{class:"px-3 border-r"},[e("img",{class:"min-w-[2rem]",src:C,alt:"icon privy"})],-1),N={class:"px-3"},V=e("span",{class:"text-primary-100"},"Persona",-1),j={class:"flex flex-col items-center justify-center pt-10 space-gap-2 md:flex-row"};function D(s,a,c,z,E,J){const _=o("Badge"),p=o("Heading"),m=o("Subheading"),r=o("Button"),u=o("IconGithub");return d(),l("div",G,[H,e("div",I,[$,e("div",N,[t(_,null,{default:n(()=>[i(" Official ")]),_:1}),t(p,{class:"mt-2"},{default:n(()=>[V,i(" Design System ")]),_:1}),t(m,null,{default:n(()=>[i(" By PrivyID ")]),_:1})])]),e("div",j,[t(r,{size:"lg",onClick:s.gettingStarted},{default:n(()=>[i(" Get Started ")]),_:1},8,["onClick"]),t(r,{size:"lg",variant:"ghost",onClick:s.openGithub},{default:n(()=>[i(" View on Github "),t(u)]),_:1},8,["onClick"])])])}const O=B(S,[["render",D]]),Q=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"index.md"}'),P={name:"index.md"},U=Object.assign(P,{setup(s){return(a,c)=>(d(),l("div",null,[t(O)]))}});export{Q as __pageData,U as default};
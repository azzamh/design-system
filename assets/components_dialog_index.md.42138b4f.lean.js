import{B as n}from"./chunks/Button.a12072e3.js";import{a as l,c as D}from"./chunks/index.fa97f5f4.js";import{o as i,c as F,h as o,a as p,w as e,b as s,e as t}from"./app.389f7721.js";import"./chunks/use-singleton.f088997c.js";import"./chunks/Modal.9894ea1e.js";import"./chunks/index.e289d1e8.js";import"./chunks/Heading.f6e27baa.js";import"./chunks/16.aa923887.js";import"./chunks/utils-6ba05f5b.0e142142.js";import"./chunks/index.73bda121.js";import"./chunks/defu.087119af.js";const y=s("",4),C={class:"flex mt-5"},A=s("",2),d={class:"flex mt-5"},_=s("",1),N=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Alert","slug":"alert","link":"#alert","children":[]},{"level":3,"title":"Confirm","slug":"confirm","link":"#confirm","children":[]}]}],"relativePath":"components/dialog/index.md"}'),h={name:"components/dialog/index.md"},P=Object.assign(h,{setup(m){function r(){l({title:"Dialog",text:"Hello This is Dialog"})}function c(){D({title:"Delete Confirmation",text:"Are you sure?",size:"sm"}).then(a=>{a===!0&&l({title:"Info",text:"Deleted"})})}return(a,u)=>(i(),F("div",null,[y,o("div",C,[p(n,{onClick:r},{default:e(()=>[t("Show Alert")]),_:1})]),A,o("div",d,[p(n,{onClick:c},{default:e(()=>[t("Show Confirm")]),_:1})]),_]))}});export{N as __pageData,P as default};
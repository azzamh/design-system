import{B as n}from"./chunks/Button.5dbd97c4.js";import{a as l,c as D}from"./chunks/index.780d2f50.js";import{o as i,c as F,h as o,a as p,w as e,b as s,e as t}from"./app.b3e63b5e.js";import"./chunks/use-singleton.e0088a57.js";import"./chunks/Modal.7024e98c.js";import"./chunks/index.cf7dc2f1.js";import"./chunks/Heading.cf061e19.js";import"./chunks/16.2961a999.js";import"./chunks/utils-6ba05f5b.c3f021ab.js";import"./chunks/index.a4efde5d.js";import"./chunks/defu.087119af.js";const y=s("",4),C={class:"flex mt-5"},A=s("",2),d={class:"flex mt-5"},_=s("",1),N=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Alert","slug":"alert","link":"#alert","children":[]},{"level":3,"title":"Confirm","slug":"confirm","link":"#confirm","children":[]}]}],"relativePath":"components/dialog/index.md"}'),h={name:"components/dialog/index.md"},P=Object.assign(h,{setup(m){function r(){l({title:"Dialog",text:"Hello This is Dialog"})}function c(){D({title:"Delete Confirmation",text:"Are you sure?",size:"sm"}).then(a=>{a===!0&&l({title:"Info",text:"Deleted"})})}return(a,u)=>(i(),F("div",null,[y,o("div",C,[p(n,{onClick:r},{default:e(()=>[t("Show Alert")]),_:1})]),A,o("div",d,[p(n,{onClick:c},{default:e(()=>[t("Show Confirm")]),_:1})]),_]))}});export{N as __pageData,P as default};
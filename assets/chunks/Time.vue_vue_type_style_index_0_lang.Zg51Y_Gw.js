var $e=Object.defineProperty;var Ge=(n,s,e)=>s in n?$e(n,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[s]=e;var i=(n,s,e)=>Ge(n,typeof s!="symbol"?s+"":s,e);import{_ as Xe}from"./Card.vue_vue_type_style_index_0_lang.ut1fupLe.js";import{r as R,a3 as ze,Z as Ue,p as L,d as _e,l as Q,y as De,al as ke,A as Ze,o as A,c as $,m as B,G as Ke,H as je,f as Me,n as Je,aT as Se,U as et,g as he,ao as tt,w as pe,a as rt,K as ye,aa as G,h as nt}from"./framework.6Y5hX2by.js";import{d as st}from"./defu.CMw4_7D2.js";import{u as Oe}from"./index.Dj1ejEfO.js";/* empty css                        */import{t as g,c as D,u as Pe,v as He,w as q,g as Ie,x as at,y as ot,n as Z,z as Ye,A as it,B as ut,a as Ee,C as Ne,k as ct,D as xe,E as lt,F as be,G as dt,f as C,l as qe,b as j,q as Le,r as Re,m as ft,i as ve}from"./set.C28jCa3G.js";import{s as Qe,S as wt,c as mt}from"./setToArray.p7lHUPtK.js";import{b as ht}from"./baseFindIndex.D7XfJLKM.js";import{S as X}from"./Set.LCbtRFY-.js";import{n as pt}from"./noop.DX6rZLP_.js";function yt(n){return n!==n}function xt(n,s,e){for(var r=e-1,t=n.length;++r<t;)if(n[r]===s)return r;return-1}function bt(n,s,e){return s===s?xt(n,s,e):ht(n,yt,e)}function vt(n,s){var e=n==null?0:n.length;return!!e&&bt(n,s,0)>-1}function Tt(n,s,e){for(var r=-1,t=n==null?0:n.length;++r<t;)if(e(s,n[r]))return!0;return!1}var gt=1/0,_t=X&&1/Qe(new X([,-0]))[1]==gt?function(n){return new X(n)}:pt,Dt=200;function kt(n,s,e){var r=-1,t=vt,a=n.length,o=!0,u=[],c=u;if(e)o=!1,t=Tt;else if(a>=Dt){var l=s?null:_t(n);if(l)return Qe(l);o=!1,t=mt,c=new wt}else c=s?[]:u;e:for(;++r<a;){var m=n[r],h=s?s(m):m;if(m=e||m!==0?m:0,o&&h===h){for(var M=c.length;M--;)if(c[M]===h)continue e;s&&c.push(h),u.push(m)}else t(c,h,e)||(c!==u&&c.push(h),u.push(m))}return u}function Ce(n){return n&&n.length?kt(n):[]}function Ae(n,s){const e=+g(n);return D(n,e+s)}function Mt(n,s){return Ae(n,s*Pe)}function Ot(n,s){return Ae(n,s*He)}function W(n){const s=g(n);return s.setHours(23,59,59,999),s}function Pt(n,s){var l;const e=g(n.start),r=g(n.end);let t=+e>+r;const a=t?+e:+r;let o=t?r:e;o.setMinutes(0,0,0);let u=(l=s==null?void 0:s.step)!=null?l:1;if(!u)return[];u<0&&(u=-u,t=!t);const c=[];for(;+o<=a;)c.push(g(o)),o=Mt(o,u);return t?c.reverse():c}function Ht(n){const s=g(n);return s.setSeconds(0,0),s}function It(n,s){var l;const e=Ht(g(n.start)),r=g(n.end);let t=+e>+r;const a=t?+e:+r;let o=t?r:e,u=(l=s==null?void 0:s.step)!=null?l:1;if(!u)return[];u<0&&(u=-u,t=!t);const c=[];for(;+o<=a;)c.push(g(o)),o=Ot(o,u);return t?c.reverse():c}function Yt(n){const s=g(n);return s.setMinutes(59,59,999),s}function Et(n,s){var l,m;const e=g(n);if(isNaN(e.getTime()))throw new RangeError("Invalid time value");const r=(l=s==null?void 0:s.format)!=null?l:"extended",t=(m=s==null?void 0:s.representation)!=null?m:"complete";let a="",o="";const u=r==="extended"?"-":"",c=r==="extended"?":":"";if(t!=="time"){const h=q(e.getDate(),2),M=q(e.getMonth()+1,2);a=`${q(e.getFullYear(),4)}${u}${M}${u}${h}`}if(t!=="date"){const h=e.getTimezoneOffset();if(h!==0){const O=Math.abs(h),f=q(Math.trunc(O/60),2),T=q(O%60,2);o=`${h<0?"+":"-"}${f}:${T}`}else o="Z";const M=q(e.getHours(),2),k=q(e.getMinutes(),2),P=q(e.getSeconds(),2),N=a===""?"":"T",H=[M,k,P].join(c);a=`${a}${N}${H}${o}`}return a}function Nt(){return Object.assign({},Ie())}function qt(n){let e=g(n).getDay();return e===0&&(e=7),e}function Lt(n,s){const e=s instanceof Date?D(s,0):new s(0);return e.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),e.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),e}const Rt=10;class Be{constructor(){i(this,"subPriority",0)}validate(s,e){return!0}}class Qt extends Be{constructor(s,e,r,t,a){super(),this.value=s,this.validateValue=e,this.setValue=r,this.priority=t,a&&(this.subPriority=a)}validate(s,e){return this.validateValue(s,this.value,e)}set(s,e,r){return this.setValue(s,e,this.value,r)}}class Ct extends Be{constructor(){super(...arguments);i(this,"priority",Rt);i(this,"subPriority",-1)}set(e,r){return r.timestampIsSet?e:D(e,Lt(e,Date))}}class w{run(s,e,r,t){const a=this.parse(s,e,r,t);return a?{setter:new Qt(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(s,e,r){return!0}}class At extends w{constructor(){super(...arguments);i(this,"priority",140);i(this,"incompatibleTokens",["R","u","t","T"])}parse(e,r,t){switch(r){case"G":case"GG":case"GGG":return t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"});case"GGGGG":return t.era(e,{width:"narrow"});case"GGGG":default:return t.era(e,{width:"wide"})||t.era(e,{width:"abbreviated"})||t.era(e,{width:"narrow"})}}set(e,r,t){return r.era=t,e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}const b={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},Y={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function v(n,s){return n&&{value:s(n.value),rest:n.rest}}function p(n,s){const e=s.match(n);return e?{value:parseInt(e[0],10),rest:s.slice(e[0].length)}:null}function E(n,s){const e=s.match(n);if(!e)return null;if(e[0]==="Z")return{value:0,rest:s.slice(1)};const r=e[1]==="+"?1:-1,t=e[2]?parseInt(e[2],10):0,a=e[3]?parseInt(e[3],10):0,o=e[5]?parseInt(e[5],10):0;return{value:r*(t*Pe+a*He+o*at),rest:s.slice(e[0].length)}}function We(n){return p(b.anyDigitsSigned,n)}function x(n,s){switch(n){case 1:return p(b.singleDigit,s);case 2:return p(b.twoDigits,s);case 3:return p(b.threeDigits,s);case 4:return p(b.fourDigits,s);default:return p(new RegExp("^\\d{1,"+n+"}"),s)}}function F(n,s){switch(n){case 1:return p(b.singleDigitSigned,s);case 2:return p(b.twoDigitsSigned,s);case 3:return p(b.threeDigitsSigned,s);case 4:return p(b.fourDigitsSigned,s);default:return p(new RegExp("^-?\\d{1,"+n+"}"),s)}}function J(n){switch(n){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Fe(n,s){const e=s>0,r=e?s:1-s;let t;if(r<=50)t=n||100;else{const a=r+50,o=Math.trunc(a/100)*100,u=n>=a%100;t=n+o-(u?100:0)}return e?t:1-t}function Ve(n){return n%400===0||n%4===0&&n%100!==0}class Bt extends w{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["Y","R","u","w","I","i","e","c","t","T"])}parse(e,r,t){const a=o=>({year:o,isTwoDigitYear:r==="yy"});switch(r){case"y":return v(x(4,e),a);case"yo":return v(t.ordinalNumber(e,{unit:"year"}),a);default:return v(x(r.length,e),a)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,t){const a=e.getFullYear();if(t.isTwoDigitYear){const u=Fe(t.year,a);return e.setFullYear(u,0,1),e.setHours(0,0,0,0),e}const o=!("era"in r)||r.era===1?t.year:1-t.year;return e.setFullYear(o,0,1),e.setHours(0,0,0,0),e}}class Wt extends w{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["y","R","u","Q","q","M","L","I","d","D","i","t","T"])}parse(e,r,t){const a=o=>({year:o,isTwoDigitYear:r==="YY"});switch(r){case"Y":return v(x(4,e),a);case"Yo":return v(t.ordinalNumber(e,{unit:"year"}),a);default:return v(x(r.length,e),a)}}validate(e,r){return r.isTwoDigitYear||r.year>0}set(e,r,t,a){const o=ot(e,a);if(t.isTwoDigitYear){const c=Fe(t.year,o);return e.setFullYear(c,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),Z(e,a)}const u=!("era"in r)||r.era===1?t.year:1-t.year;return e.setFullYear(u,0,a.firstWeekContainsDate),e.setHours(0,0,0,0),Z(e,a)}}class Ft extends w{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"])}parse(e,r){return F(r==="R"?4:r.length,e)}set(e,r,t){const a=D(e,0);return a.setFullYear(t,0,4),a.setHours(0,0,0,0),Ye(a)}}class Vt extends w{constructor(){super(...arguments);i(this,"priority",130);i(this,"incompatibleTokens",["G","y","Y","R","w","I","i","e","c","t","T"])}parse(e,r){return F(r==="u"?4:r.length,e)}set(e,r,t){return e.setFullYear(t,0,1),e.setHours(0,0,0,0),e}}class $t extends w{constructor(){super(...arguments);i(this,"priority",120);i(this,"incompatibleTokens",["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"Q":case"QQ":return x(r.length,e);case"Qo":return t.ordinalNumber(e,{unit:"quarter"});case"QQQ":return t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return t.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(e,{width:"wide",context:"formatting"})||t.quarter(e,{width:"abbreviated",context:"formatting"})||t.quarter(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=1&&r<=4}set(e,r,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class Gt extends w{constructor(){super(...arguments);i(this,"priority",120);i(this,"incompatibleTokens",["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"q":case"qq":return x(r.length,e);case"qo":return t.ordinalNumber(e,{unit:"quarter"});case"qqq":return t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return t.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(e,{width:"wide",context:"standalone"})||t.quarter(e,{width:"abbreviated",context:"standalone"})||t.quarter(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=1&&r<=4}set(e,r,t){return e.setMonth((t-1)*3,1),e.setHours(0,0,0,0),e}}class Xt extends w{constructor(){super(...arguments);i(this,"incompatibleTokens",["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]);i(this,"priority",110)}parse(e,r,t){const a=o=>o-1;switch(r){case"M":return v(p(b.month,e),a);case"MM":return v(x(2,e),a);case"Mo":return v(t.ordinalNumber(e,{unit:"month"}),a);case"MMM":return t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return t.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(e,{width:"wide",context:"formatting"})||t.month(e,{width:"abbreviated",context:"formatting"})||t.month(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}class zt extends w{constructor(){super(...arguments);i(this,"priority",110);i(this,"incompatibleTokens",["Y","R","q","Q","M","w","I","D","i","e","c","t","T"])}parse(e,r,t){const a=o=>o-1;switch(r){case"L":return v(p(b.month,e),a);case"LL":return v(x(2,e),a);case"Lo":return v(t.ordinalNumber(e,{unit:"month"}),a);case"LLL":return t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return t.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(e,{width:"wide",context:"standalone"})||t.month(e,{width:"abbreviated",context:"standalone"})||t.month(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.setMonth(t,1),e.setHours(0,0,0,0),e}}function Ut(n,s,e){const r=g(n),t=it(r,e)-s;return r.setDate(r.getDate()-t*7),r}class Zt extends w{constructor(){super(...arguments);i(this,"priority",100);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","i","t","T"])}parse(e,r,t){switch(r){case"w":return p(b.week,e);case"wo":return t.ordinalNumber(e,{unit:"week"});default:return x(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,t,a){return Z(Ut(e,t,a),a)}}function Kt(n,s){const e=g(n),r=ut(e)-s;return e.setDate(e.getDate()-r*7),e}class jt extends w{constructor(){super(...arguments);i(this,"priority",100);i(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"])}parse(e,r,t){switch(r){case"I":return p(b.week,e);case"Io":return t.ordinalNumber(e,{unit:"week"});default:return x(r.length,e)}}validate(e,r){return r>=1&&r<=53}set(e,r,t){return Ye(Kt(e,t))}}const Jt=[31,28,31,30,31,30,31,31,30,31,30,31],St=[31,29,31,30,31,30,31,31,30,31,30,31];class er extends w{constructor(){super(...arguments);i(this,"priority",90);i(this,"subPriority",1);i(this,"incompatibleTokens",["Y","R","q","Q","w","I","D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"d":return p(b.date,e);case"do":return t.ordinalNumber(e,{unit:"date"});default:return x(r.length,e)}}validate(e,r){const t=e.getFullYear(),a=Ve(t),o=e.getMonth();return a?r>=1&&r<=St[o]:r>=1&&r<=Jt[o]}set(e,r,t){return e.setDate(t),e.setHours(0,0,0,0),e}}class tr extends w{constructor(){super(...arguments);i(this,"priority",90);i(this,"subpriority",1);i(this,"incompatibleTokens",["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"])}parse(e,r,t){switch(r){case"D":case"DD":return p(b.dayOfYear,e);case"Do":return t.ordinalNumber(e,{unit:"date"});default:return x(r.length,e)}}validate(e,r){const t=e.getFullYear();return Ve(t)?r>=1&&r<=366:r>=1&&r<=365}set(e,r,t){return e.setMonth(0,t),e.setHours(0,0,0,0),e}}function S(n,s,e){var h,M,k,P,N,H,O,f;const r=Ie(),t=(f=(O=(P=(k=e==null?void 0:e.weekStartsOn)!=null?k:(M=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:M.weekStartsOn)!=null?P:r.weekStartsOn)!=null?O:(H=(N=r.locale)==null?void 0:N.options)==null?void 0:H.weekStartsOn)!=null?f:0,a=g(n),o=a.getDay(),c=(s%7+7)%7,l=7-t,m=s<0||s>6?s-(o+l)%7:(c+l)%7-(o+l)%7;return Ee(a,m)}class rr extends w{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["D","i","e","c","t","T"])}parse(e,r,t){switch(r){case"E":case"EE":case"EEE":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return t.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,a){return e=S(e,t,a),e.setHours(0,0,0,0),e}}class nr extends w{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"])}parse(e,r,t,a){const o=u=>{const c=Math.floor((u-1)/7)*7;return(u+a.weekStartsOn+6)%7+c};switch(r){case"e":case"ee":return v(x(r.length,e),o);case"eo":return v(t.ordinalNumber(e,{unit:"day"}),o);case"eee":return t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeeee":return t.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,a){return e=S(e,t,a),e.setHours(0,0,0,0),e}}class sr extends w{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"])}parse(e,r,t,a){const o=u=>{const c=Math.floor((u-1)/7)*7;return(u+a.weekStartsOn+6)%7+c};switch(r){case"c":case"cc":return v(x(r.length,e),o);case"co":return v(t.ordinalNumber(e,{unit:"day"}),o);case"ccc":return t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"ccccc":return t.day(e,{width:"narrow",context:"standalone"});case"cccccc":return t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return t.day(e,{width:"wide",context:"standalone"})||t.day(e,{width:"abbreviated",context:"standalone"})||t.day(e,{width:"short",context:"standalone"})||t.day(e,{width:"narrow",context:"standalone"})}}validate(e,r){return r>=0&&r<=6}set(e,r,t,a){return e=S(e,t,a),e.setHours(0,0,0,0),e}}function ar(n,s){const e=g(n),r=qt(e),t=s-r;return Ee(e,t)}class or extends w{constructor(){super(...arguments);i(this,"priority",90);i(this,"incompatibleTokens",["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"])}parse(e,r,t){const a=o=>o===0?7:o;switch(r){case"i":case"ii":return x(r.length,e);case"io":return t.ordinalNumber(e,{unit:"day"});case"iii":return v(t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a);case"iiiii":return v(t.day(e,{width:"narrow",context:"formatting"}),a);case"iiiiii":return v(t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a);case"iiii":default:return v(t.day(e,{width:"wide",context:"formatting"})||t.day(e,{width:"abbreviated",context:"formatting"})||t.day(e,{width:"short",context:"formatting"})||t.day(e,{width:"narrow",context:"formatting"}),a)}}validate(e,r){return r>=1&&r<=7}set(e,r,t){return e=ar(e,t),e.setHours(0,0,0,0),e}}class ir extends w{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["b","B","H","k","t","T"])}parse(e,r,t){switch(r){case"a":case"aa":case"aaa":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(J(t),0,0,0),e}}class ur extends w{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["a","B","H","k","t","T"])}parse(e,r,t){switch(r){case"b":case"bb":case"bbb":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(J(t),0,0,0),e}}class cr extends w{constructor(){super(...arguments);i(this,"priority",80);i(this,"incompatibleTokens",["a","b","t","T"])}parse(e,r,t){switch(r){case"B":case"BB":case"BBB":return t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return t.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(e,{width:"wide",context:"formatting"})||t.dayPeriod(e,{width:"abbreviated",context:"formatting"})||t.dayPeriod(e,{width:"narrow",context:"formatting"})}}set(e,r,t){return e.setHours(J(t),0,0,0),e}}class lr extends w{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["H","K","k","t","T"])}parse(e,r,t){switch(r){case"h":return p(b.hour12h,e);case"ho":return t.ordinalNumber(e,{unit:"hour"});default:return x(r.length,e)}}validate(e,r){return r>=1&&r<=12}set(e,r,t){const a=e.getHours()>=12;return a&&t<12?e.setHours(t+12,0,0,0):!a&&t===12?e.setHours(0,0,0,0):e.setHours(t,0,0,0),e}}class dr extends w{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["a","b","h","K","k","t","T"])}parse(e,r,t){switch(r){case"H":return p(b.hour23h,e);case"Ho":return t.ordinalNumber(e,{unit:"hour"});default:return x(r.length,e)}}validate(e,r){return r>=0&&r<=23}set(e,r,t){return e.setHours(t,0,0,0),e}}class fr extends w{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["h","H","k","t","T"])}parse(e,r,t){switch(r){case"K":return p(b.hour11h,e);case"Ko":return t.ordinalNumber(e,{unit:"hour"});default:return x(r.length,e)}}validate(e,r){return r>=0&&r<=11}set(e,r,t){return e.getHours()>=12&&t<12?e.setHours(t+12,0,0,0):e.setHours(t,0,0,0),e}}class wr extends w{constructor(){super(...arguments);i(this,"priority",70);i(this,"incompatibleTokens",["a","b","h","H","K","t","T"])}parse(e,r,t){switch(r){case"k":return p(b.hour24h,e);case"ko":return t.ordinalNumber(e,{unit:"hour"});default:return x(r.length,e)}}validate(e,r){return r>=1&&r<=24}set(e,r,t){const a=t<=24?t%24:t;return e.setHours(a,0,0,0),e}}class mr extends w{constructor(){super(...arguments);i(this,"priority",60);i(this,"incompatibleTokens",["t","T"])}parse(e,r,t){switch(r){case"m":return p(b.minute,e);case"mo":return t.ordinalNumber(e,{unit:"minute"});default:return x(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,t){return e.setMinutes(t,0,0),e}}class hr extends w{constructor(){super(...arguments);i(this,"priority",50);i(this,"incompatibleTokens",["t","T"])}parse(e,r,t){switch(r){case"s":return p(b.second,e);case"so":return t.ordinalNumber(e,{unit:"second"});default:return x(r.length,e)}}validate(e,r){return r>=0&&r<=59}set(e,r,t){return e.setSeconds(t,0),e}}class pr extends w{constructor(){super(...arguments);i(this,"priority",30);i(this,"incompatibleTokens",["t","T"])}parse(e,r){const t=a=>Math.trunc(a*Math.pow(10,-r.length+3));return v(x(r.length,e),t)}set(e,r,t){return e.setMilliseconds(t),e}}class yr extends w{constructor(){super(...arguments);i(this,"priority",10);i(this,"incompatibleTokens",["t","T","x"])}parse(e,r){switch(r){case"X":return E(Y.basicOptionalMinutes,e);case"XX":return E(Y.basic,e);case"XXXX":return E(Y.basicOptionalSeconds,e);case"XXXXX":return E(Y.extendedOptionalSeconds,e);case"XXX":default:return E(Y.extended,e)}}set(e,r,t){return r.timestampIsSet?e:D(e,e.getTime()-Ne(e)-t)}}class xr extends w{constructor(){super(...arguments);i(this,"priority",10);i(this,"incompatibleTokens",["t","T","X"])}parse(e,r){switch(r){case"x":return E(Y.basicOptionalMinutes,e);case"xx":return E(Y.basic,e);case"xxxx":return E(Y.basicOptionalSeconds,e);case"xxxxx":return E(Y.extendedOptionalSeconds,e);case"xxx":default:return E(Y.extended,e)}}set(e,r,t){return r.timestampIsSet?e:D(e,e.getTime()-Ne(e)-t)}}class br extends w{constructor(){super(...arguments);i(this,"priority",40);i(this,"incompatibleTokens","*")}parse(e){return We(e)}set(e,r,t){return[D(e,t*1e3),{timestampIsSet:!0}]}}class vr extends w{constructor(){super(...arguments);i(this,"priority",20);i(this,"incompatibleTokens","*")}parse(e){return We(e)}set(e,r,t){return[D(e,t),{timestampIsSet:!0}]}}const Tr={G:new At,y:new Bt,Y:new Wt,R:new Ft,u:new Vt,Q:new $t,q:new Gt,M:new Xt,L:new zt,w:new Zt,I:new jt,d:new er,D:new tr,E:new rr,e:new nr,c:new sr,i:new or,a:new ir,b:new ur,B:new cr,h:new lr,H:new dr,K:new fr,k:new wr,m:new mr,s:new hr,S:new pr,X:new yr,x:new xr,t:new br,T:new vr},gr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,_r=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Dr=/^'([^]*?)'?$/,kr=/''/g,Mr=/\S/,Or=/[a-zA-Z]/;function z(n,s,e,r){var N,H,O,f,T,_,ee,te,re,ne,se,ae,oe,ie,ue,ce,le,de;const t=Nt(),a=(H=(N=r==null?void 0:r.locale)!=null?N:t.locale)!=null?H:ct,o=(ne=(re=(_=(T=r==null?void 0:r.firstWeekContainsDate)!=null?T:(f=(O=r==null?void 0:r.locale)==null?void 0:O.options)==null?void 0:f.firstWeekContainsDate)!=null?_:t.firstWeekContainsDate)!=null?re:(te=(ee=t.locale)==null?void 0:ee.options)==null?void 0:te.firstWeekContainsDate)!=null?ne:1,u=(de=(le=(ie=(oe=r==null?void 0:r.weekStartsOn)!=null?oe:(ae=(se=r==null?void 0:r.locale)==null?void 0:se.options)==null?void 0:ae.weekStartsOn)!=null?ie:t.weekStartsOn)!=null?le:(ce=(ue=t.locale)==null?void 0:ue.options)==null?void 0:ce.weekStartsOn)!=null?de:0;if(s==="")return n===""?g(e):D(e,NaN);const c={firstWeekContainsDate:o,weekStartsOn:u,locale:a},l=[new Ct],m=s.match(_r).map(d=>{const y=d[0];if(y in xe){const I=xe[y];return I(d,a.formatLong)}return d}).join("").match(gr),h=[];for(let d of m){!(r!=null&&r.useAdditionalWeekYearTokens)&&lt(d)&&be(d,s,n),!(r!=null&&r.useAdditionalDayOfYearTokens)&&dt(d)&&be(d,s,n);const y=d[0],I=Tr[y];if(I){const{incompatibleTokens:fe}=I;if(Array.isArray(fe)){const we=h.find(me=>fe.includes(me.token)||me.token===y);if(we)throw new RangeError(`The format string mustn't contain \`${we.fullToken}\` and \`${d}\` at the same time`)}else if(I.incompatibleTokens==="*"&&h.length>0)throw new RangeError(`The format string mustn't contain \`${d}\` and any other token at the same time`);h.push({token:y,fullToken:d});const V=I.run(n,d,a.match,c);if(!V)return D(e,NaN);l.push(V.setter),n=V.rest}else{if(y.match(Or))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");if(d==="''"?d="'":y==="'"&&(d=Pr(d)),n.indexOf(d)===0)n=n.slice(d.length);else return D(e,NaN)}}if(n.length>0&&Mr.test(n))return D(e,NaN);const M=l.map(d=>d.priority).sort((d,y)=>y-d).filter((d,y,I)=>I.indexOf(d)===y).map(d=>l.filter(y=>y.priority===d).sort((y,I)=>I.subPriority-y.subPriority)).map(d=>d[0]);let k=g(e);if(isNaN(k.getTime()))return D(e,NaN);const P={};for(const d of M){if(!d.validate(k,c))return D(e,NaN);const y=d.set(k,P,c);Array.isArray(y)?(k=y[0],Object.assign(P,y[1])):k=y}return D(e,k)}function Pr(n){return n.match(Dr)[1].replace(kr,"'")}function K(n){const s=g(n);return s.setMinutes(0,0,0),s}function Te(n,s){const e=K(n),r=K(s);return+e==+r}function Hr(){const n=R(),s=R(1);async function e(o,u){const{Splide:c}=await Ue(async()=>{const{Splide:h}=await import("./splide.esm.BN734GL-.js");return{Splide:h}},[]),l=L(o),m=st(u,{direction:"ttb",height:"9rem",width:"100%",focus:"center",perPage:3,perMove:1,arrows:!1,wheel:!0,wheelSleep:150,isNavigation:!0,pagination:!1});n.value=new c(l,m),r()}function r(){n.value&&(n.value.on("mounted",t),n.value.on("move",a),n.value.mount())}function t(){n.value&&(s.value=n.value.index)}function a(o){s.value=o}return ze(()=>{var o;(o=n.value)==null||o.destroy()}),{splide:n,activeSplide:s,initSplide:e,initSplideEvent:r}}const Ir={class:"splide__track"},Yr={class:"splide__list"},U=_e({__name:"TimeItem",props:{modelValue:{type:String,default:"00"},timeType:{type:String,default:"hour"},options:{type:Array,default:()=>[]}},setup(n){const s=n,{splide:e,activeSplide:r,initSplide:t}=Hr(),a=Oe(s),o=R(),u=Q(()=>s.options);return De(r,c=>{a.value=s.options[c]}),ke(u,c=>{if(!e.value)return;const l={...e.value.options,clones:c.length===1?0:void 0};e.value.options=l,e.value.refresh(),c.includes(a.value)||(a.value=c[0])},{flush:"post",debounce:50}),Ze(async()=>{var c;if(o.value){const l={start:u.value.indexOf(a.value),type:s.timeType==="ampm"?"slide":"loop"};await t(o,l)}(c=e.value)==null||c.on("refresh",()=>{var m;const l=u.value.indexOf(a.value);(m=e.value)==null||m.go(l===-1?0:l)})}),(c,l)=>(A(),$("div",{ref_key:"container",ref:o,class:Je(["time__items splide",`time__times--${n.timeType}`])},[B("div",Ir,[B("div",Yr,[(A(!0),$(Ke,null,je(n.options,m=>(A(),$("div",{key:m,class:"time__item splide__slide"},Me(m),1))),128))])])],2))}});function Er(n,s,e=1,r,t){if(qe(t,r))return console.warn("`max` value should greater than `min` value and vice versa"),[];let a=j(new Date),o=W(new Date);r&&(a=Le([n,r])),t&&(o=Re([W(a),t]));const c=Pt({start:a,end:o},{step:e}).map(l=>s?C(l,"hh"):C(l,"HH"));return Ce(c)}function Nr(n,s,e=1,r,t){if(qe(t,r))return console.warn("`max` value should greater than `min` value and vice versa"),[];let a=j(new Date),o=W(new Date);r&&(a=Le([n,r])),t&&(o=Re([W(a),t]));const u=ft(a,{hours:s}),l=It({start:Te(u,a)?u:K(u),end:Te(u,o)?o:Yt(u)},{step:e}).map(m=>C(m,"mm"));return Ce(l)}function qr(n,s){const[e,r]=C(n,s).split(":"),t=C(n,"a");return{hh:e,mm:r.slice(0,2),a:t}}function ge(n,s,e=!1){let r=0,t=0;return n==="hour"?(r=1,t=e?12:24):n==="minute"&&(r=1,t=60),s>=r&&s<t}const Lr={class:"time__container"},Rr={class:"time__separator"},Qr={class:"time__action"},Zr=_e({__name:"Time",props:{modelValue:{type:[Date,Object],default:void 0},timeSeparator:{type:String,default:":"},is12Hour:{type:Boolean,default:!1},hourInterval:{type:Number,default:1,validator:(n,s)=>ge("hour",n,s.is12Hour)},minuteInterval:{type:Number,default:1,validator:n=>ge("minute",n)},min:{type:Date,default:void 0},max:{type:Date,default:void 0}},emits:["update:modelValue","context","change"],setup(n,{emit:s}){const e=n,r=s,t=Oe(e),a=R(j(new Date)),o=R("00"),u=R("00"),c=R("AM"),l=Q(()=>{const f=`${o.value}:${u.value}`;return e.is12Hour?`${f} ${c.value}`:f}),m=Q(()=>e.is12Hour?"hh:mm a":"HH:mm"),h=Q(()=>Er(a.value,e.is12Hour,e.hourInterval,e.min,e.max)),M=Q(()=>Nr(a.value,Number(o.value),e.minuteInterval,e.min,e.max)),k=Q(()=>["AM","PM"]);ke([o,u,c],()=>{const f=z(l.value,m.value,a.value);r("change",O(f))},{flush:"post",debounce:300}),De(t,P),Se(P);function P(){try{if(!t.value)return;if(ve(t.value)){a.value=new Date(t.value);const{hh:f,mm:T,a:_}=qr(a.value,m.value);H(f,T,_)}else{const{hh:f,mm:T,a:_}=t.value;H(f,T,_),a.value=z(l.value,m.value,new Date),!e.is12Hour&&_&&console.warn("Please provide is12Hour props to parse time to 12 Hour Format")}}catch(f){console.warn(f)}}function N(){try{a.value=z(l.value,m.value,a.value),t.value=ve(t.value)?new Date(a.value):{hh:o.value,mm:u.value,a:e.is12Hour?c.value:void 0},r("context",O(a.value))}catch(f){console.warn(f)}}async function H(f,T,_){o.value=f!=null?f:"00",u.value=T!=null?T:"00",c.value=_!=null?_:"AM",await et()}function O(f){return{time:C(f,m.value),date:f,dateISO:Et(f)}}return(f,T)=>(A(),he(Xe,{"data-testid":"time",class:"time",element:"div"},tt({default:pe(()=>[B("div",Lr,[ye(U,{modelValue:L(o),"onUpdate:modelValue":T[0]||(T[0]=_=>G(o)?o.value=_:null),options:L(h),"time-type":"hour",class:"time__items--hour"},null,8,["modelValue","options"]),B("div",Rr,Me(n.timeSeparator),1),ye(U,{modelValue:L(u),"onUpdate:modelValue":T[1]||(T[1]=_=>G(u)?u.value=_:null),options:L(M),"time-type":"minute",class:"time__items--minute"},null,8,["modelValue","options"]),n.is12Hour?(A(),he(U,{key:0,modelValue:L(c),"onUpdate:modelValue":T[2]||(T[2]=_=>G(c)?c.value=_:null),options:L(k),"time-type":"ampm",class:"time__items--ampm"},null,8,["modelValue","options"])):nt("",!0)])]),_:2},[f.$slots.default?{name:"footer",fn:pe(()=>[B("div",Qr,[rt(f.$slots,"default",{confirm:N})])]),key:"0"}:void 0]),1024))}});export{Zr as _,ge as v};
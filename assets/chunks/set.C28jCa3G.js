function c(n){const t=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&t==="[object Date]"?new n.constructor(+n):typeof n=="number"||t==="[object Number]"||typeof n=="string"||t==="[object String]"?new Date(n):new Date(NaN)}function M(n,t){return n instanceof Date?new n.constructor(t):new Date(t)}function oe(n,t){const e=c(n);return isNaN(t)?M(n,NaN):(t&&e.setDate(e.getDate()+t),e)}const Z=Math.pow(10,8)*24*60*60*1e3,ue=-Z,$=6048e5,tt=864e5,ce=6e4,de=36e5,fe=1e3;let et={};function N(){return et}function T(n,t){var u,d,f,l,h,w,y,b;const e=N(),r=(b=(y=(l=(f=t==null?void 0:t.weekStartsOn)!=null?f:(d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)!=null?l:e.weekStartsOn)!=null?y:(w=(h=e.locale)==null?void 0:h.options)==null?void 0:w.weekStartsOn)!=null?b:0,a=c(n),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function v(n){return T(n,{weekStartsOn:1})}function U(n){const t=c(n),e=t.getFullYear(),r=M(n,0);r.setFullYear(e+1,0,4),r.setHours(0,0,0,0);const a=v(r),i=M(n,0);i.setFullYear(e,0,4),i.setHours(0,0,0,0);const o=v(i);return t.getTime()>=a.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function G(n){const t=c(n);return t.setHours(0,0,0,0),t}function I(n){const t=c(n),e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),+n-+e}function nt(n,t){const e=G(n),r=G(t),a=+e-I(e),i=+r-I(r);return Math.round((a-i)/tt)}function rt(n){const t=U(n),e=M(n,0);return e.setFullYear(t,0,4),e.setHours(0,0,0,0),v(e)}function he(n){let t;return n.forEach(function(e){const r=c(e);(t===void 0||t<r||isNaN(Number(r)))&&(t=r)}),t||new Date(NaN)}function me(n){let t;return n.forEach(e=>{const r=c(e);(!t||t>r||isNaN(+r))&&(t=r)}),t||new Date(NaN)}function at(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function it(n){if(!at(n)&&typeof n!="number")return!1;const t=c(n);return!isNaN(Number(t))}function st(n){const t=c(n),e=M(n,0);return e.setFullYear(t.getFullYear(),0,1),e.setHours(0,0,0,0),e}const ot={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ut=(n,t,e)=>{let r;const a=ot[n];return typeof a=="string"?r=a:t===1?r=a.one:r=a.other.replace("{{count}}",t.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+r:r+" ago":r};function E(n){return(t={})=>{const e=t.width?String(t.width):n.defaultWidth;return n.formats[e]||n.formats[n.defaultWidth]}}const ct={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},dt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ft={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ht={date:E({formats:ct,defaultWidth:"full"}),time:E({formats:dt,defaultWidth:"full"}),dateTime:E({formats:ft,defaultWidth:"full"})},mt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lt=(n,t,e,r)=>mt[n];function Y(n){return(t,e)=>{const r=e!=null&&e.context?String(e.context):"standalone";let a;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,u=e!=null&&e.width?String(e.width):o;a=n.formattingValues[u]||n.formattingValues[o]}else{const o=n.defaultWidth,u=e!=null&&e.width?String(e.width):n.defaultWidth;a=n.values[u]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(t):t;return a[i]}}const gt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},yt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},bt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Mt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Pt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ot=(n,t)=>{const e=Number(n),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},Dt={ordinalNumber:Ot,era:Y({values:gt,defaultWidth:"wide"}),quarter:Y({values:wt,defaultWidth:"wide",argumentCallback:n=>n-1}),month:Y({values:yt,defaultWidth:"wide"}),day:Y({values:bt,defaultWidth:"wide"}),dayPeriod:Y({values:Mt,defaultWidth:"wide",formattingValues:Pt,defaultFormattingWidth:"wide"})};function S(n){return(t,e={})=>{const r=e.width,a=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=t.match(a);if(!i)return null;const o=i[0],u=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],d=Array.isArray(u)?xt(u,h=>h.test(o)):kt(u,h=>h.test(o));let f;f=n.valueCallback?n.valueCallback(d):d,f=e.valueCallback?e.valueCallback(f):f;const l=t.slice(o.length);return{value:f,rest:l}}}function kt(n,t){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)&&t(n[e]))return e}function xt(n,t){for(let e=0;e<n.length;e++)if(t(n[e]))return e}function Wt(n){return(t,e={})=>{const r=t.match(n.matchPattern);if(!r)return null;const a=r[0],i=t.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;const u=t.slice(a.length);return{value:o,rest:u}}}const Yt=/^(\d+)(th|st|nd|rd)?/i,St=/\d+/i,Tt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},vt={any:[/^b/i,/^(a|c)/i]},Nt={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ft={any:[/1/i,/2/i,/3/i,/4/i]},Et={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},pt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ct={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},qt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ht={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},_t={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Qt={ordinalNumber:Wt({matchPattern:Yt,parsePattern:St,valueCallback:n=>parseInt(n,10)}),era:S({matchPatterns:Tt,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any"}),quarter:S({matchPatterns:Nt,defaultMatchWidth:"wide",parsePatterns:Ft,defaultParseWidth:"any",valueCallback:n=>n+1}),month:S({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:pt,defaultParseWidth:"any"}),day:S({matchPatterns:Ct,defaultMatchWidth:"wide",parsePatterns:qt,defaultParseWidth:"any"}),dayPeriod:S({matchPatterns:Ht,defaultMatchWidth:"any",parsePatterns:_t,defaultParseWidth:"any"})},jt={code:"en-US",formatDistance:ut,formatLong:ht,formatRelative:lt,localize:Dt,match:Qt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Xt(n){const t=c(n);return nt(t,st(t))+1}function Lt(n){const t=c(n),e=+v(t)-+rt(t);return Math.round(e/$)+1}function z(n,t){var l,h,w,y,b,k,x,W;const e=c(n),r=e.getFullYear(),a=N(),i=(W=(x=(y=(w=t==null?void 0:t.firstWeekContainsDate)!=null?w:(h=(l=t==null?void 0:t.locale)==null?void 0:l.options)==null?void 0:h.firstWeekContainsDate)!=null?y:a.firstWeekContainsDate)!=null?x:(k=(b=a.locale)==null?void 0:b.options)==null?void 0:k.firstWeekContainsDate)!=null?W:1,o=M(n,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const u=T(o,t),d=M(n,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const f=T(d,t);return e.getTime()>=u.getTime()?r+1:e.getTime()>=f.getTime()?r:r-1}function Bt(n,t){var u,d,f,l,h,w,y,b;const e=N(),r=(b=(y=(l=(f=t==null?void 0:t.firstWeekContainsDate)!=null?f:(d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)!=null?l:e.firstWeekContainsDate)!=null?y:(w=(h=e.locale)==null?void 0:h.options)==null?void 0:w.firstWeekContainsDate)!=null?b:1,a=z(n,t),i=M(n,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),T(i,t)}function Gt(n,t){const e=c(n),r=+T(e,t)-+Bt(e,t);return Math.round(r/$)+1}function s(n,t){const e=n<0?"-":"",r=Math.abs(n).toString().padStart(t,"0");return e+r}const P={y(n,t){const e=n.getFullYear(),r=e>0?e:1-e;return s(t==="yy"?r%100:r,t.length)},M(n,t){const e=n.getMonth();return t==="M"?String(e+1):s(e+1,2)},d(n,t){return s(n.getDate(),t.length)},a(n,t){const e=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h(n,t){return s(n.getHours()%12||12,t.length)},H(n,t){return s(n.getHours(),t.length)},m(n,t){return s(n.getMinutes(),t.length)},s(n,t){return s(n.getSeconds(),t.length)},S(n,t){const e=t.length,r=n.getMilliseconds(),a=Math.trunc(r*Math.pow(10,e-3));return s(a,t.length)}},D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},R={G:function(n,t,e){const r=n.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});case"GGGG":default:return e.era(r,{width:"wide"})}},y:function(n,t,e){if(t==="yo"){const r=n.getFullYear(),a=r>0?r:1-r;return e.ordinalNumber(a,{unit:"year"})}return P.y(n,t)},Y:function(n,t,e,r){const a=z(n,r),i=a>0?a:1-a;if(t==="YY"){const o=i%100;return s(o,2)}return t==="Yo"?e.ordinalNumber(i,{unit:"year"}):s(i,t.length)},R:function(n,t){const e=U(n);return s(e,t.length)},u:function(n,t){const e=n.getFullYear();return s(e,t.length)},Q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return s(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,t,e){const r=Math.ceil((n.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return s(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,t,e){const r=n.getMonth();switch(t){case"M":case"MM":return P.M(n,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(n,t,e){const r=n.getMonth();switch(t){case"L":return String(r+1);case"LL":return s(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(n,t,e,r){const a=Gt(n,r);return t==="wo"?e.ordinalNumber(a,{unit:"week"}):s(a,t.length)},I:function(n,t,e){const r=Lt(n);return t==="Io"?e.ordinalNumber(r,{unit:"week"}):s(r,t.length)},d:function(n,t,e){return t==="do"?e.ordinalNumber(n.getDate(),{unit:"date"}):P.d(n,t)},D:function(n,t,e){const r=Xt(n);return t==="Do"?e.ordinalNumber(r,{unit:"dayOfYear"}):s(r,t.length)},E:function(n,t,e){const r=n.getDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});case"EEEE":default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(n,t,e,r){const a=n.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return s(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(a,{width:"short",context:"formatting"});case"eeee":default:return e.day(a,{width:"wide",context:"formatting"})}},c:function(n,t,e,r){const a=n.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return s(i,t.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(a,{width:"narrow",context:"standalone"});case"cccccc":return e.day(a,{width:"short",context:"standalone"});case"cccc":default:return e.day(a,{width:"wide",context:"standalone"})}},i:function(n,t,e){const r=n.getDay(),a=r===0?7:r;switch(t){case"i":return String(a);case"ii":return s(a,t.length);case"io":return e.ordinalNumber(a,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});case"iiii":default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(n,t,e){const a=n.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(n,t,e){const r=n.getHours();let a;switch(r===12?a=D.noon:r===0?a=D.midnight:a=r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(n,t,e){const r=n.getHours();let a;switch(r>=17?a=D.evening:r>=12?a=D.afternoon:r>=4?a=D.morning:a=D.night,t){case"B":case"BB":case"BBB":return e.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(n,t,e){if(t==="ho"){let r=n.getHours()%12;return r===0&&(r=12),e.ordinalNumber(r,{unit:"hour"})}return P.h(n,t)},H:function(n,t,e){return t==="Ho"?e.ordinalNumber(n.getHours(),{unit:"hour"}):P.H(n,t)},K:function(n,t,e){const r=n.getHours()%12;return t==="Ko"?e.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},k:function(n,t,e){let r=n.getHours();return r===0&&(r=24),t==="ko"?e.ordinalNumber(r,{unit:"hour"}):s(r,t.length)},m:function(n,t,e){return t==="mo"?e.ordinalNumber(n.getMinutes(),{unit:"minute"}):P.m(n,t)},s:function(n,t,e){return t==="so"?e.ordinalNumber(n.getSeconds(),{unit:"second"}):P.s(n,t)},S:function(n,t){return P.S(n,t)},X:function(n,t,e){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return V(r);case"XXXX":case"XX":return O(r);case"XXXXX":case"XXX":default:return O(r,":")}},x:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"x":return V(r);case"xxxx":case"xx":return O(r);case"xxxxx":case"xxx":default:return O(r,":")}},O:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+A(r,":");case"OOOO":default:return"GMT"+O(r,":")}},z:function(n,t,e){const r=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+A(r,":");case"zzzz":default:return"GMT"+O(r,":")}},t:function(n,t,e){const r=Math.trunc(n.getTime()/1e3);return s(r,t.length)},T:function(n,t,e){const r=n.getTime();return s(r,t.length)}};function A(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=Math.trunc(r/60),i=r%60;return i===0?e+String(a):e+String(a)+t+s(i,2)}function V(n,t){return n%60===0?(n>0?"-":"+")+s(Math.abs(n)/60,2):O(n,t)}function O(n,t=""){const e=n>0?"-":"+",r=Math.abs(n),a=s(Math.trunc(r/60),2),i=s(r%60,2);return e+a+t+i}const J=(n,t)=>{switch(n){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},K=(n,t)=>{switch(n){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},It=(n,t)=>{const e=n.match(/(P+)(p+)?/)||[],r=e[1],a=e[2];if(!a)return J(n,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",J(r,t)).replace("{{time}}",K(a,t))},Rt={p:K,P:It},At=/^D+$/,Vt=/^Y+$/,Jt=["D","DD","YY","YYYY"];function $t(n){return At.test(n)}function Ut(n){return Vt.test(n)}function zt(n,t,e){const r=Kt(n,t,e);if(console.warn(r),Jt.includes(n))throw new RangeError(r)}function Kt(n,t,e){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${t}\`) for formatting ${r} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Zt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ee=/^'([^]*?)'?$/,ne=/''/g,re=/[a-zA-Z]/;function le(n,t,e){var l,h,w,y,b,k,x,W,p,C,q,H,_,Q,j,X,L,B;const r=N(),a=(h=(l=e==null?void 0:e.locale)!=null?l:r.locale)!=null?h:jt,i=(C=(p=(k=(b=e==null?void 0:e.firstWeekContainsDate)!=null?b:(y=(w=e==null?void 0:e.locale)==null?void 0:w.options)==null?void 0:y.firstWeekContainsDate)!=null?k:r.firstWeekContainsDate)!=null?p:(W=(x=r.locale)==null?void 0:x.options)==null?void 0:W.firstWeekContainsDate)!=null?C:1,o=(B=(L=(Q=(_=e==null?void 0:e.weekStartsOn)!=null?_:(H=(q=e==null?void 0:e.locale)==null?void 0:q.options)==null?void 0:H.weekStartsOn)!=null?Q:r.weekStartsOn)!=null?L:(X=(j=r.locale)==null?void 0:j.options)==null?void 0:X.weekStartsOn)!=null?B:0,u=c(n);if(!it(u))throw new RangeError("Invalid time value");let d=t.match(te).map(g=>{const m=g[0];if(m==="p"||m==="P"){const F=Rt[m];return F(g,a.formatLong)}return g}).join("").match(Zt).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const m=g[0];if(m==="'")return{isToken:!1,value:ae(g)};if(R[m])return{isToken:!0,value:g};if(m.match(re))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:g}});a.localize.preprocessor&&(d=a.localize.preprocessor(u,d));const f={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return d.map(g=>{if(!g.isToken)return g.value;const m=g.value;(!(e!=null&&e.useAdditionalWeekYearTokens)&&Ut(m)||!(e!=null&&e.useAdditionalDayOfYearTokens)&&$t(m))&&zt(m,t,String(n));const F=R[m[0]];return F(u,m,a.localize,f)}).join("")}function ae(n){const t=n.match(ee);return t?t[1].replace(ne,"'"):n}function ie(n){const t=c(n),e=t.getFullYear(),r=t.getMonth(),a=M(n,0);return a.setFullYear(e,r+1,0),a.setHours(0,0,0,0),a.getDate()}function ge(n,t){const e=c(n),r=c(t);return+e<+r}function se(n,t){const e=c(n),r=e.getFullYear(),a=e.getDate(),i=M(n,0);i.setFullYear(r,t,15),i.setHours(0,0,0,0);const o=ie(i);return e.setMonth(t,Math.min(a,o)),e}function we(n,t){let e=c(n);return isNaN(+e)?M(n,NaN):(t.year!=null&&e.setFullYear(t.year),t.month!=null&&(e=se(e,t.month)),t.date!=null&&e.setDate(t.date),t.hours!=null&&e.setHours(t.hours),t.minutes!=null&&e.setMinutes(t.minutes),t.seconds!=null&&e.setSeconds(t.seconds),t.milliseconds!=null&&e.setMilliseconds(t.milliseconds),e)}export{Gt as A,Lt as B,I as C,Rt as D,Ut as E,zt as F,$t as G,oe as a,G as b,M as c,E as d,Y as e,le as f,N as g,Wt as h,at as i,S as j,jt as k,ge as l,we as m,T as n,ue as o,Z as p,he as q,me as r,st as s,c as t,de as u,ce as v,s as w,fe as x,z as y,v as z};
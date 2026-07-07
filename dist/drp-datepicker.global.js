var DRP=(()=>{var N=Object.defineProperty;var R=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var W=Object.prototype.hasOwnProperty;var z=(g,t)=>{for(var a in t)N(g,a,{get:t[a],enumerable:!0})},G=(g,t,a,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of V(t))!W.call(g,n)&&n!==a&&N(g,n,{get:()=>t[n],enumerable:!(e=R(t,n))||e.enumerable});return g};var K=g=>G(N({},"__esModule",{value:!0}),g);var Q={};z(Q,{DrpDatePicker:()=>$,DrpNepaliCalendar:()=>w,registerDrpDatePicker:()=>M});var C=[[2e3,30,32,31,32,31,30,30,30,29,30,29,31],[2001,31,31,32,31,31,31,30,29,30,29,30,30],[2002,31,31,32,32,31,30,30,29,30,29,30,30],[2003,31,32,31,32,31,30,30,30,29,29,30,31],[2004,30,32,31,32,31,30,30,30,29,30,29,31],[2005,31,31,32,31,31,31,30,29,30,29,30,30],[2006,31,31,32,32,31,30,30,29,30,29,30,30],[2007,31,32,31,32,31,30,30,30,29,29,30,31],[2008,31,31,31,32,31,31,29,30,30,29,29,31],[2009,31,31,32,31,31,31,30,29,30,29,30,30],[2010,31,31,32,32,31,30,30,29,30,29,30,30],[2011,31,32,31,32,31,30,30,30,29,29,30,31],[2012,31,31,31,32,31,31,29,30,30,29,30,30],[2013,31,31,32,31,31,31,30,29,30,29,30,30],[2014,31,31,32,32,31,30,30,29,30,29,30,30],[2015,31,32,31,32,31,30,30,30,29,29,30,31],[2016,31,31,31,32,31,31,29,30,30,29,30,30],[2017,31,31,32,31,31,31,30,29,30,29,30,30],[2018,31,32,31,32,31,30,30,29,30,29,30,30],[2019,31,32,31,32,31,30,30,30,29,30,29,31],[2020,31,31,31,32,31,31,30,29,30,29,30,30],[2021,31,31,32,31,31,31,30,29,30,29,30,30],[2022,31,32,31,32,31,30,30,30,29,29,30,30],[2023,31,32,31,32,31,30,30,30,29,30,29,31],[2024,31,31,31,32,31,31,30,29,30,29,30,30],[2025,31,31,32,31,31,31,30,29,30,29,30,30],[2026,31,32,31,32,31,30,30,30,29,29,30,31],[2027,30,32,31,32,31,30,30,30,29,30,29,31],[2028,31,31,32,31,31,31,30,29,30,29,30,30],[2029,31,31,32,31,32,30,30,29,30,29,30,30],[2030,31,32,31,32,31,30,30,30,29,29,30,31],[2031,30,32,31,32,31,30,30,30,29,30,29,31],[2032,31,31,32,31,31,31,30,29,30,29,30,30],[2033,31,31,32,32,31,30,30,29,30,29,30,30],[2034,31,32,31,32,31,30,30,30,29,29,30,31],[2035,30,32,31,32,31,31,29,30,30,29,29,31],[2036,31,31,32,31,31,31,30,29,30,29,30,30],[2037,31,31,32,32,31,30,30,29,30,29,30,30],[2038,31,32,31,32,31,30,30,30,29,29,30,31],[2039,31,31,31,32,31,31,29,30,30,29,30,30],[2040,31,31,32,31,31,31,30,29,30,29,30,30],[2041,31,31,32,32,31,30,30,29,30,29,30,30],[2042,31,32,31,32,31,30,30,30,29,29,30,31],[2043,31,31,31,32,31,31,29,30,30,29,30,30],[2044,31,31,32,31,31,31,30,29,30,29,30,30],[2045,31,32,31,32,31,30,30,29,30,29,30,30],[2046,31,32,31,32,31,30,30,30,29,29,30,31],[2047,31,31,31,32,31,31,30,29,30,29,30,30],[2048,31,31,32,31,31,31,30,29,30,29,30,30],[2049,31,32,31,32,31,30,30,30,29,29,30,30],[2050,31,32,31,32,31,30,30,30,29,30,29,31],[2051,31,31,31,32,31,31,30,29,30,29,30,30],[2052,31,31,32,31,31,31,30,29,30,29,30,30],[2053,31,32,31,32,31,30,30,30,29,29,30,30],[2054,31,32,31,32,31,30,30,30,29,30,29,31],[2055,31,31,32,31,31,31,30,29,30,29,30,30],[2056,31,31,32,31,32,30,30,29,30,29,30,30],[2057,31,32,31,32,31,30,30,30,29,29,30,31],[2058,30,32,31,32,31,30,30,30,29,30,29,31],[2059,31,31,32,31,31,31,30,29,30,29,30,30],[2060,31,31,32,32,31,30,30,29,30,29,30,30],[2061,31,32,31,32,31,30,30,30,29,29,30,31],[2062,30,32,31,32,31,31,29,30,29,30,29,31],[2063,31,31,32,31,31,31,30,29,30,29,30,30],[2064,31,31,32,32,31,30,30,29,30,29,30,30],[2065,31,32,31,32,31,30,30,30,29,29,30,31],[2066,31,31,31,32,31,31,29,30,30,29,29,31],[2067,31,31,32,31,31,31,30,29,30,29,30,30],[2068,31,31,32,32,31,30,30,29,30,29,30,30],[2069,31,32,31,32,31,30,30,30,29,29,30,31],[2070,31,31,31,32,31,31,29,30,30,29,30,30],[2071,31,31,32,31,31,31,30,29,30,29,30,30],[2072,31,32,31,32,31,30,30,29,30,29,30,30],[2073,31,32,31,32,31,30,30,30,29,29,30,31],[2074,31,31,31,32,31,31,30,29,30,29,30,30],[2075,31,31,32,31,31,31,30,29,30,29,30,30],[2076,31,32,31,32,31,30,30,30,29,29,30,30],[2077,31,32,31,32,31,30,30,30,29,30,29,31],[2078,31,31,31,32,31,31,30,29,30,29,30,30],[2079,31,31,32,31,31,31,30,29,30,29,30,30],[2080,31,32,31,32,31,30,30,30,29,29,30,30],[2081,31,32,31,32,31,30,30,30,29,30,29,31],[2082,31,31,32,31,31,31,30,29,30,29,30,30],[2083,31,31,32,31,31,30,30,30,29,30,30,30],[2084,31,31,32,31,31,30,30,30,29,30,30,30],[2085,31,32,31,32,30,31,30,30,29,30,30,30],[2086,30,32,31,32,31,30,30,30,29,30,30,30],[2087,31,31,32,31,31,31,30,30,29,30,30,30],[2088,30,31,32,32,30,31,30,30,29,30,30,30],[2089,30,32,31,32,31,30,30,30,29,30,30,30],[2090,30,32,31,32,31,30,30,30,29,30,30,30]],k=["","Baisakh","Jestha","Ashadh","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"],L=["","\u092C\u0948\u0936\u093E\u0916","\u091C\u0947\u0920","\u0905\u0938\u093E\u0930","\u0936\u094D\u0930\u093E\u0935\u0923","\u092D\u0926\u094C","\u0905\u0938\u094B\u091C","\u0915\u093E\u0930\u094D\u0924\u093F\u0915","\u092E\u0902\u0938\u093F\u0930","\u092A\u094C\u0937","\u092E\u093E\u0918","\u092B\u093E\u0932\u094D\u0917\u0941\u0928","\u091A\u0948\u0924"],A=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],D=["","January","February","March","April","May","June","July","August","September","October","November","December"],E=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],B=["Su","Mo","Tu","We","Th","Fr","Sa"],U=["\u0906","\u0938\u094B","\u092E\u0902","\u092C\u0941","\u092C\u093F","\u0936\u0941","\u0936"],H=["\u0966","\u0967","\u0968","\u0969","\u096A","\u096B","\u096C","\u096D","\u096E","\u096F"];var I=g=>String(g).padStart(2,"0"),_=(g,t,a)=>`${String(g).padStart(4,"0")}-${I(t)}-${I(a)}`,w=class{debug_info="";#a=C;is_leap_year(t){return t%100===0?t%400===0:t%4===0}#h(t){return k[t]||""}#t(t){return A[t]||""}#e(t){return E[t]||""}#r(t,a,e){return t<1944||t>2033?(this.debug_info="AD year out of range. Supported: 1944-2033.",!1):a<1||a>12?(this.debug_info="AD month must be 1-12.",!1):e<1||e>31?(this.debug_info="AD day must be 1-31.",!1):!0}#o(t,a,e){return t<2e3||t>2090?(this.debug_info="BS year out of range. Supported: 2000-2090.",!1):a<1||a>12?(this.debug_info="BS month must be 1-12.",!1):e<1||e>32?(this.debug_info="BS day must be 1-32.",!1):!0}#i(t){for(let a=0;a<this.#a.length;a++)if(this.#a[a][0]===t)return a;return!1}eng_to_nep(t,a,e){if(!this.#r(t,a,e))return!1;let n=[31,28,31,30,31,30,31,31,30,31,30,31],s=[31,29,31,30,31,30,31,31,30,31,30,31],r=1944,i=2e3,l=9,c=16,o=6,d=0;for(let m=0;m<t-r;m++){let v=this.is_leap_year(r+m)?s:n;for(let x of v)d+=x}let h=this.is_leap_year(t)?s:n;for(let m=0;m<a-1;m++)d+=h[m];d+=e;let p=0,y=l,f=c,u=l,b=i;for(;d!==0;){let m=this.#a[p][y];f++,o++,f>m&&(u++,f=1,y++),o>7&&(o=1),u>12&&(b++,u=1),y>12&&(y=1,p++),d--}return{year:b,month:u,date:f,day:this.#e(o),nmonth:this.#h(u),num_day:o}}eng_to_nep_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[a,e,n]=t.split("-").map(Number),s=new Date(Date.UTC(a,e-1,n));return s.getUTCFullYear()!==a||s.getUTCMonth()!==e-1||s.getUTCDate()!==n?!1:this.eng_to_nep(a,e,n)}nep_to_eng(t,a,e){if(!this.#o(t,a,e))return!1;let n=[0,31,28,31,30,31,30,31,31,30,31,30,31],s=[0,31,29,31,30,31,30,31,31,30,31,30,31],r=1943,i=4,l=13,c=2e3,o=3,d=0,h=0;for(let u=0;u<t-c;u++){for(let b=1;b<=12;b++)d+=this.#a[h][b];h++}for(let u=1;u<a;u++)d+=this.#a[h][u];d+=e;let p=l,y=i,f=r;for(;d!==0;){let u=this.is_leap_year(f)?s[y]:n[y];p++,o++,p>u&&(y++,p=1,y>12&&(f++,y=1)),o>7&&(o=1),d--}return{year:f,month:y,date:p,day:this.#e(o),emonth:this.#t(y),num_day:o}}nep_to_eng_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[a,e,n]=t.split("-").map(Number);return this.nep_to_eng(a,e,n)}get_month_dates_nep(t,a){let e=this.#i(t);if(e===!1)return this.debug_info=`BS year ${t} not found in table.`,!1;let n=this.#a[e][a];return{start_date:_(t,a,1),end_date:_(t,a,n),days:n}}get_month_dates_eng(t,a){let e=this.get_month_dates_nep(t,a);if(!e)return!1;let[n,s,r]=e.start_date.split("-").map(Number),[i,l,c]=e.end_date.split("-").map(Number),o=this.nep_to_eng(n,s,r),d=this.nep_to_eng(i,l,c);return!o||!d?!1:{start_date:_(o.year,o.month,o.date),end_date:_(d.year,d.month,d.date)}}get_date_nep(t,a){let[e,n,s]=t.split("-").map(Number),r=this.nep_to_eng(e,n,s);if(!r)return!1;let i=new Date(Date.UTC(r.year,r.month-1,r.date));i.setUTCDate(i.getUTCDate()+a);let l=this.eng_to_nep(i.getUTCFullYear(),i.getUTCMonth()+1,i.getUTCDate());return l?_(l.year,l.month,l.date):!1}get_months_dates_nep(t,a){let[e,n]=t.slice(0,7).split("-").map(Number),[s,r]=a.slice(0,7).split("-").map(Number),i=[];for(;e<s||e===s&&n<=r;){let l=this.get_month_dates_nep(e,n);l&&i.push(l),n++,n>12&&(n=1,e++)}return i}get_months_dates_eng(t,a){let e=this.get_months_dates_nep(t,a),n=[];for(let s of e){let[r,i,l]=s.start_date.split("-").map(Number),[c,o,d]=s.end_date.split("-").map(Number),h=this.nep_to_eng(r,i,l),p=this.nep_to_eng(c,o,d);h&&p&&n.push({start_date:_(h.year,h.month,h.date),end_date:_(p.year,p.month,p.date)})}return n}get_bs_month_range_with_point(t,a){let[e,n,s]=t.split("-").map(Number),r=this.nep_to_eng(e,n,s);if(!r)return[];let i=new Date(Date.UTC(r.year,r.month-1,r.date));i.setUTCDate(i.getUTCDate()+a);let l=this.eng_to_nep(i.getUTCFullYear(),i.getUTCMonth()+1,i.getUTCDate());if(!l)return[];let c,o;a>=0?(c={year:e,month:n,date:s},o=l):(c=l,o={year:e,month:n,date:s});let d=c.year,h=c.month,p=o.year,y=o.month,f=[];for(;d<p||d===p&&h<=y;){let u=this.get_month_dates_nep(d,h);if(u){let b=d===c.year&&h===c.month,m=d===o.year&&h===o.month,v;b?v=c.date:m?v=o.date:v=null,f.push({year:d,month:h,start_date:u.start_date,end_date:u.end_date,days:u.days,pointed_date:v})}h++,h>12&&(h=1,d++)}return f}get_bs_month_range_excluding_partial(t,a){let e=this.get_bs_months_touched(t,a),[n,s]=t.split("-").map(Number);return e.filter(r=>!(r.year===n&&r.month===s))}get_bs_months_touched(t,a){let[e,n,s]=t.split("-").map(Number),r=this.nep_to_eng(e,n,s);if(!r)return[];let i=new Date(Date.UTC(r.year,r.month-1,r.date));i.setUTCDate(i.getUTCDate()+a);let l=this.eng_to_nep(i.getUTCFullYear(),i.getUTCMonth()+1,i.getUTCDate());if(!l)return[];let c,o;a>=0?(c={year:e,month:n,date:s},o=l):(c=l,o={year:e,month:n,date:s});let d=c.year,h=c.month,p=o.year,y=o.month,f=[];for(;d<p||d===p&&h<=y;){let u=this.get_month_dates_nep(d,h);if(u){let b=d===c.year&&h===c.month,m=d===o.year&&h===o.month,v=b?c.date:1,x=m?o.date:u.days;f.push({year:d,month:h,month_name:this.#h(h),start_date:u.start_date,end_date:u.end_date,days:u.days,range_start:_(d,h,v),range_end:_(d,h,x),range_days:x-v+1,is_partial:b||m})}h++,h>12&&(h=1,d++)}return f}days_fiscal_wise(t,a){let e={};for(let n of this.#a){let s=n[0],r=n.slice(1);s<t||s>a||(s===t&&s===a?e[s]=[...r.slice(3),...r.slice(0,3)]:s===t?e[s]=r.slice(3):s===a?e[s]=r.slice(0,3):e[s]=r)}return e}#d(t){let a=t+1,e=_(t,4,1),n=this.#i(a);if(n===!1)return this.debug_info=`BS year ${a} not found in table.`,!1;let s=this.#a[n][3],r=_(a,3,s),i=this.nep_to_eng(t,4,1),l=this.nep_to_eng(a,3,s);if(!i||!l)return this.debug_info="AD conversion failed for fiscal year boundaries.",!1;let c=_(i.year,i.month,i.date),o=_(l.year,l.month,l.date),d=Date.UTC(i.year,i.month-1,i.date),h=Date.UTC(l.year,l.month-1,l.date),p=Math.round((h-d)/864e5)+1;return{fy_label:`${t}/${String(a).slice(2)}`,bs_start_date:e,bs_end_date:r,ad_start_date:c,ad_end_date:o,total_days:p}}get_fiscal_year(t,a=0){let[e,n]=t.split("-").map(Number),s=n<=3?e-1:e;return s+=a,this.#d(s)}get_fiscal_year_by_days(t,a){let e=this.get_date_nep(t,a);return e?this.get_fiscal_year(e,0):(this.debug_info="Day offset produced an out-of-range BS date.",!1)}get_current_fiscal_year(t=0){let a=new Date,e=this.eng_to_nep(a.getFullYear(),a.getMonth()+1,a.getDate());if(!e)return this.debug_info="Could not convert today's date to BS.",!1;let n=_(e.year,e.month,e.date);return this.get_fiscal_year(n,t)}get_nth_month_end_date(t,a){let[e,n]=t.split("-").map(Number),s=a>0?1:-1,r=Math.abs(a);n+=s,n>12&&(n=1,e++),n<1&&(n=12,e--);for(let l=1;l<r;l++)n+=s,n>12&&(n=1,e++),n<1&&(n=12,e--);let i=this.get_month_dates_nep(e,n);return i?i.end_date:(this.debug_info=`BS year ${e} month ${n} is outside the supported table.`,!1)}today_nep(){let t=new Date,a=this.eng_to_nep(t.getFullYear(),t.getMonth()+1,t.getDate());return a?_(a.year,a.month,a.date):!1}#l(t,a,e){if(typeof t=="string"){let[n,s]=t.split("-").map(Number);return{year:n,month:s,options:a||{}}}return{year:t,month:a,options:e||{}}}#c(t){let a=new Map;if(Array.isArray(t))for(let e of t)e&&e.date&&a.set(e.date,e.label||"");return a}get_calendar_month_nep(t,a,e){let{year:n,month:s,options:r}=this.#l(t,a,e),i=this.get_month_dates_nep(n,s);if(!i)return!1;let l=this.#c(r.holidays),c=this.today_nep(),o=this.nep_to_eng(n,s,1);if(!o)return!1;let d=o.num_day,h=Date.UTC(o.year,o.month-1,o.date),p=[];for(let f=1;f<=i.days;f++){let u=(d-1+(f-1))%7+1,b=new Date(h+(f-1)*864e5),m=b.getUTCFullYear(),v=b.getUTCMonth()+1,x=b.getUTCDate(),S=_(n,s,f);p.push({bs_date:S,bs_year:n,bs_month:s,bs_day:f,ad_date:_(m,v,x),ad_year:m,ad_month:v,ad_day:x,weekday:u,weekday_name:E[u],is_saturday:u===7,is_today:S===c,is_holiday:l.has(S),holiday_label:l.get(S)||null})}let y=this.get_month_dates_eng(n,s);return{system:"bs",year:n,month:s,month_name:k[s],month_name_ne:L[s],days_in_month:i.days,start_date_bs:i.start_date,end_date_bs:i.end_date,start_date_ad:y?y.start_date:null,end_date_ad:y?y.end_date:null,start_weekday:d,leading_blanks:d-1,days:p}}get_calendar_month_eng(t,a,e){let{year:n,month:s,options:r}=this.#l(t,a,e);if(!this.#r(n,s,1))return!1;let i=new Date(Date.UTC(n,s,0)).getUTCDate(),l=this.#c(r.holidays),c=this.today_nep(),o=this.eng_to_nep(n,s,1);if(!o)return!1;let d=o.num_day,h=o.year,p=o.month,y=o.date,f=this.get_month_dates_nep(h,p),u=[];for(let m=1;m<=i;m++){let v=(d-1+(m-1))%7+1,x=_(h,p,y),S=_(n,s,m);u.push({ad_date:S,ad_year:n,ad_month:s,ad_day:m,bs_date:x,bs_year:h,bs_month:p,bs_day:y,weekday:v,weekday_name:E[v],is_saturday:v===7,is_today:x===c,is_holiday:l.has(x),holiday_label:l.get(x)||null}),y++,y>f.days&&(y=1,p++,p>12&&(p=1,h++),f=this.get_month_dates_nep(h,p))}let b=this.eng_to_nep(n,s,i);return{system:"ad",year:n,month:s,month_name:D[s],month_name_short:A[s],days_in_month:i,start_date_ad:_(n,s,1),end_date_ad:_(n,s,i),start_date_bs:_(o.year,o.month,o.date),end_date_bs:b?_(b.year,b.month,b.date):null,start_weekday:d,leading_blanks:d-1,days:u}}};var q=g=>String(g).padStart(2,"0"),T=(g,t,a)=>`${String(g).padStart(4,"0")}-${q(t)}-${q(a)}`,J=g=>String(g).replace(/[0-9]/g,t=>H[Number(t)]),F=1944,P=2033,Y=2e3,j=2090,X=`
:host {
  --ndp-accent: #b3352b;
  --ndp-accent-soft: #f4ded9;
  --ndp-today: #1f4b7a;
  --ndp-bg: #fdfaf5;
  --ndp-panel-bg: #ffffff;
  --ndp-border: #e7dfd2;
  --ndp-text: #2a241d;
  --ndp-muted: #8c8272;
  --ndp-radius: 10px;
  --ndp-shadow: 0 12px 32px -8px rgba(40, 30, 10, 0.28), 0 2px 8px rgba(40, 30, 10, 0.08);
  --ndp-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, sans-serif;
  font-family: var(--ndp-font);
  position: relative;
  display: inline-block;
  color: var(--ndp-text);
}

* { box-sizing: border-box; }

.field {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--ndp-panel-bg);
  border: 1px solid var(--ndp-border);
  border-radius: var(--ndp-radius);
  padding: 7px 8px 7px 12px;
  min-width: 200px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.field:focus-within {
  border-color: var(--ndp-accent);
  box-shadow: 0 0 0 3px var(--ndp-accent-soft);
}

.field input {
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  color: var(--ndp-text);
  width: 100%;
  cursor: default;
}

.field input::placeholder { color: var(--ndp-muted); }

.trigger {
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--ndp-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  flex: none;
}
.trigger:hover { background: var(--ndp-accent-soft); }
.trigger svg { width: 16px; height: 16px; }

:host([disabled]) .field { opacity: 0.55; pointer-events: none; }

.panel {
  position: absolute;
  z-index: 60;
  margin-top: 6px;
  width: 300px;
  background: var(--ndp-panel-bg);
  border: 1px solid var(--ndp-border);
  border-radius: 14px;
  box-shadow: var(--ndp-shadow);
  padding: 14px;
  display: none;
}
.panel[data-open] { display: block; }
:host([inline]) .panel { position: static; display: block; box-shadow: none; margin-top: 10px; }
:host([inline]) .field { display: none; }

.panel-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 4px;
}

.nav-btn {
  border: none;
  background: transparent;
  color: var(--ndp-muted);
  width: 28px;
  height: 28px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}
.nav-btn:hover { background: var(--ndp-accent-soft); color: var(--ndp-accent); }
.nav-btn svg { width: 16px; height: 16px; }

.head-title {
  flex: 1;
  text-align: center;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  padding: 2px 4px;
  min-width: 0;
}
.head-title:hover { background: var(--ndp-accent-soft); }
.head-title .primary-label { font-weight: 700; font-size: 14.5px; letter-spacing: 0.01em; }
.head-title .secondary-label {
  display: block;
  font-size: 10.5px;
  color: var(--ndp-muted);
  margin-top: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 8px;
  margin-bottom: 2px;
}
.weekdays span {
  text-align: center;
  font-size: 10.5px;
  font-weight: 600;
  color: var(--ndp-muted);
  padding-bottom: 4px;
}
.weekdays span.sat { color: var(--ndp-accent); }

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.day {
  border: none;
  background: transparent;
  border-radius: 9px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.day:hover { background: var(--ndp-accent-soft); }
.day .primary-num { font-size: 13px; font-weight: 600; }
.day .secondary-num {
  position: absolute;
  right: 3px;
  bottom: 2px;
  font-size: 8px;
  line-height: 1;
  color: var(--ndp-muted);
}
.day.is-saturday .primary-num { color: var(--ndp-accent); }
.day.is-today { box-shadow: inset 0 0 0 1.5px var(--ndp-today); }
.day.is-selected { background: var(--ndp-accent); }
.day.is-selected .primary-num,
.day.is-selected .secondary-num { color: #fff; }
.day.is-holiday .primary-num { color: var(--ndp-accent); }
.day.is-holiday::after {
  content: '';
  position: absolute;
  top: 3px;
  right: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ndp-accent);
}
.day.is-selected.is-holiday::after { background: #fff; }
.day.is-outside { visibility: hidden; }
.day:disabled { opacity: 0.32; cursor: not-allowed; background: none; }

.panel-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid var(--ndp-border);
}

.foot-btn {
  border: none;
  background: transparent;
  color: var(--ndp-accent);
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 6px;
}
.foot-btn:hover { background: var(--ndp-accent-soft); }
.foot-btn.muted { color: var(--ndp-muted); }

.digit-toggle {
  border: 1px solid var(--ndp-border);
  background: transparent;
  color: var(--ndp-muted);
  font-size: 11px;
  font-weight: 600;
  border-radius: 6px;
  padding: 3px 7px;
  cursor: pointer;
}
.digit-toggle[data-active] { color: var(--ndp-accent); border-color: var(--ndp-accent); }

.yearpicker {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  max-height: 220px;
  overflow-y: auto;
  padding-right: 2px;
}
.yearpicker button, .monthpicker button {
  border: 1px solid var(--ndp-border);
  background: transparent;
  border-radius: 8px;
  padding: 8px 4px;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  color: var(--ndp-text);
}
.yearpicker button:hover, .monthpicker button:hover { border-color: var(--ndp-accent); color: var(--ndp-accent); }
.yearpicker button[data-active], .monthpicker button[data-active] { background: var(--ndp-accent); color: #fff; border-color: var(--ndp-accent); }
.monthpicker { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
`,O=document.createElement("template");O.innerHTML=`
<style>${X}</style>
<div class="field" part="field">
  <input part="input" type="text" readonly />
  <button class="trigger" part="trigger" type="button" aria-label="Open calendar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
  </button>
</div>
<div class="panel" part="panel"></div>
`;var $=class extends HTMLElement{static formAssociated=!0;static get observedAttributes(){return["value","min","max","placeholder","disabled","digits","mark-saturday","inline","type","required"]}#a=new w;#h=[];#t=null;#e=null;#r="days";#o="en";#i="bs";#d=!1;#l=null;#c=null;#f=null;#s=null;constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(O.content.cloneNode(!0)),this.$input=this.shadowRoot.querySelector("input"),this.$trigger=this.shadowRoot.querySelector(".trigger"),this.$panel=this.shadowRoot.querySelector(".panel");let t=typeof this.attachInternals=="function"?this.attachInternals():null;this.#s=t&&typeof t.setFormValue=="function"?t:null}connectedCallback(){this.#o=this.getAttribute("digits")==="ne"?"ne":"en",this.#i=this.getAttribute("type")==="ad"?"ad":"bs";let t=new Date,a=this.#a.eng_to_nep(t.getFullYear(),t.getMonth()+1,t.getDate());this.#c={year:a.year,month:a.month,date:a.date},this.#f={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate()},this.#t=this.#g(this.getAttribute("value")),this.#e=this.#y(),this.$trigger.addEventListener("click",()=>this.toggle()),this.$input.addEventListener("click",()=>this.toggle()),this.shadowRoot.addEventListener("keydown",e=>this.#D(e)),this.#u(),this.#n(),this.#_(),this.hasAttribute("inline")&&(this.#d=!0)}disconnectedCallback(){this.#b()}formResetCallback(){this.clear()}formDisabledCallback(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t){this.#e&&(t==="digits"&&(this.#o=this.getAttribute("digits")==="ne"?"ne":"en"),t==="type"&&(this.#i=this.getAttribute("type")==="ad"?"ad":"bs",this.#e=this.#y(),this.#u()),t==="value"&&(this.#t=this.#g(this.getAttribute("value")),this.#e=this.#y(),this.#u()),(t==="value"||t==="required"||t==="disabled")&&this.#_(),this.#n())}get holidays(){return this.#h}set holidays(t){this.#h=Array.isArray(t)?t:[],this.#n()}get type(){return this.#i}set type(t){this.setAttribute("type",t==="ad"?"ad":"bs")}get value(){return this.#i==="ad"?this.valueAD:this.valueBS}set value(t){t?this.setAttribute("value",t):this.removeAttribute("value")}get valueBS(){return this.#t?T(this.#t.year,this.#t.month,this.#t.date):""}get valueAD(){let t=this.getADDate();return t?T(t.year,t.month,t.date):""}get calendar(){return this.#a}get name(){return this.getAttribute("name")||""}set name(t){this.setAttribute("name",t)}get required(){return this.hasAttribute("required")}set required(t){this.toggleAttribute("required",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get validity(){return this.#s?this.#s.validity:void 0}get validationMessage(){return this.#s?this.#s.validationMessage:""}get willValidate(){return this.#s?this.#s.willValidate:!1}checkValidity(){return this.#s?this.#s.checkValidity():!0}reportValidity(){return this.#s?this.#s.reportValidity():!0}#_(){if(!this.#s)return;let t=this.value;this.#s.setFormValue(t||null),this.hasAttribute("required")&&!t?this.#s.setValidity({valueMissing:!0},"Please select a date.",this.$input):this.#s.setValidity({})}getADDate(){return this.#t?this.#a.nep_to_eng(this.#t.year,this.#t.month,this.#t.date):null}open(){this.hasAttribute("disabled")||this.#d||(this.#d=!0,this.#r="days",this.#n(),this.#$(),this.dispatchEvent(new CustomEvent("open")))}close(){this.hasAttribute("inline")||!this.#d||(this.#d=!1,this.#n(),this.#b(),this.dispatchEvent(new CustomEvent("close")))}toggle(){this.hasAttribute("disabled")||(this.#d?this.close():this.open())}clear(){this.#t=null,this.removeAttribute("value"),this.#u(),this.#n(),this.#m()}today(){this.#t={...this.#c},this.#e=this.#y(),this.setAttribute("value",this.value)}#g(t){if(!t||!/^\d{4}-\d{2}-\d{2}$/.test(t))return null;let[a,e,n]=t.split("-").map(Number);if(this.#i==="ad"){let s=this.#a.eng_to_nep(a,e,n);return s?{year:s.year,month:s.month,date:s.date}:null}return this.#a.nep_to_eng(a,e,n)?{year:a,month:e,date:n}:null}#y(){if(this.#i==="ad"){if(this.#t){let t=this.#a.nep_to_eng(this.#t.year,this.#t.month,this.#t.date);if(t)return{year:t.year,month:t.month}}return{year:this.#f.year,month:this.#f.month}}return this.#t?{year:this.#t.year,month:this.#t.month}:{year:this.#c.year,month:this.#c.month}}#p(t){return this.#o==="ne"?J(t):String(t)}#D(t){t.key==="Escape"&&this.close()}#$(){this.#l=t=>{t.composedPath().includes(this)||this.close()},document.addEventListener("mousedown",this.#l)}#b(){this.#l&&document.removeEventListener("mousedown",this.#l),this.#l=null}#u(){if(!this.#t){this.$input.value="",this.$input.placeholder=this.getAttribute("placeholder")||(this.#i==="ad"?"Select date (AD)":"Select date (BS)");return}if(this.#i==="ad"){let t=this.getADDate();this.$input.value=`${t.date} ${D[t.month]} ${t.year}`}else{let{year:t,month:a,date:e}=this.#t;this.$input.value=`${this.#p(e)} ${k[a]} ${this.#p(t)}`}}#m(){let t=this.getADDate();this.dispatchEvent(new CustomEvent("change",{detail:{bs:this.#t?{...this.#t,formatted:this.valueBS}:null,ad:t?{year:t.year,month:t.month,date:t.date,formatted:T(t.year,t.month,t.date)}:null},bubbles:!0}))}#E(t){let a=this.getAttribute("min"),e=this.getAttribute("max");return!!(a&&t<a||e&&t>e)}#n(){this.$panel.toggleAttribute("data-open",this.#d||this.hasAttribute("inline")),!(!this.#d&&!this.hasAttribute("inline"))&&(this.#r==="days"?this.#i==="ad"?this.#N():this.#M():this.#r==="months"?this.#T():this.#C())}#M(){let{year:t,month:a}=this.#e,e=this.#a.get_calendar_month_nep(t,a,{holidays:this.#h});if(!e)return;let n=this.getAttribute("mark-saturday")!=="false",s=e.days.map(i=>this.#v({key:i.bs_date,primaryHtml:this.#p(i.bs_day),secondaryHtml:String(i.ad_day),weekday:i.weekday,markSaturday:n,isToday:i.is_today,isSelected:!!(this.#t&&this.#t.year===i.bs_year&&this.#t.month===i.bs_month&&this.#t.date===i.bs_day),holidayLabel:i.is_holiday?i.holiday_label:void 0,onSelect:()=>{this.#t={year:i.bs_year,month:i.bs_month,date:i.bs_day}}})),r=e.start_date_ad?`${this.#k(e.start_date_ad)} \u2013 ${this.#k(e.end_date_ad)}`:"";this.#x({startWeekday:e.start_weekday,cells:s,primaryTitle:`${e.month_name} ${this.#p(t)}`,secondaryTitle:r,onPrev:()=>this.#w(-1),onNext:()=>this.#w(1)})}#N(){let{year:t,month:a}=this.#e,e=this.#a.get_calendar_month_eng(t,a,{holidays:this.#h});if(!e)return;let n=this.getAttribute("mark-saturday")!=="false",s=e.days.map(i=>this.#v({key:i.ad_date,primaryHtml:String(i.ad_day),secondaryHtml:this.#p(i.bs_day),weekday:i.weekday,markSaturday:n,isToday:i.is_today,isSelected:!!(this.#t&&this.#t.year===i.bs_year&&this.#t.month===i.bs_month&&this.#t.date===i.bs_day),holidayLabel:i.is_holiday?i.holiday_label:void 0,onSelect:()=>{this.#t={year:i.bs_year,month:i.bs_month,date:i.bs_day}}})),r=e.start_date_bs?`${this.#S(e.start_date_bs)} \u2013 ${this.#S(e.end_date_bs)}`:"";this.#x({startWeekday:e.start_weekday,cells:s,primaryTitle:`${e.month_name} ${t}`,secondaryTitle:r,onPrev:()=>this.#A(-1),onNext:()=>this.#A(1)})}#v({key:t,primaryHtml:a,secondaryHtml:e,weekday:n,markSaturday:s,isToday:r,isSelected:i,holidayLabel:l,onSelect:c}){let o=s&&n===7,d=l!==void 0,h=this.#E(t),p=["day"];r&&p.push("is-today"),i&&p.push("is-selected"),o&&p.push("is-saturday"),d&&p.push("is-holiday");let y=d&&l?` title="${l.replace(/"/g,"&quot;")}"`:"";return{html:`<button class="${p.join(" ")}" part="day" data-key="${t}" ${h?"disabled":""}${y}>
        <span class="primary-num">${a}</span>
        <span class="secondary-num">${e}</span>
      </button>`,onSelect:c}}#x({startWeekday:t,cells:a,primaryTitle:e,secondaryTitle:n,onPrev:s,onNext:r}){let i="";for(let c=1;c<t;c++)i+='<button class="day is-outside" tabindex="-1"></button>';i+=a.map(c=>c.html).join(""),this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-nav="-1" aria-label="Previous month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-months>
          <span class="primary-label">${e}</span>
          <span class="secondary-label">${n}</span>
        </div>
        <button class="nav-btn" data-nav="1" aria-label="Next month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div class="weekdays">
        ${(this.#o==="ne"?U:B).map((c,o)=>`<span class="${o===6?"sat":""}">${c}</span>`).join("")}
      </div>
      <div class="grid">${i}</div>
      <div class="panel-foot">
        <button class="foot-btn muted" data-clear type="button">Clear</button>
        <button class="digit-toggle" data-digits ${this.#o==="ne"?"data-active":""} type="button">${this.#o==="ne"?"\u0926\u0947\u0935":"123"}</button>
        <button class="foot-btn" data-today type="button">Today</button>
      </div>
    `,this.$panel.querySelector('[data-nav="-1"]').addEventListener("click",s),this.$panel.querySelector('[data-nav="1"]').addEventListener("click",r),this.$panel.querySelector("[data-open-months]").addEventListener("click",()=>{this.#r="months",this.#n()}),this.$panel.querySelector("[data-clear]").addEventListener("click",()=>this.clear()),this.$panel.querySelector("[data-today]").addEventListener("click",()=>{this.today(),this.#u(),this.#n(),this.#m(),this.close()}),this.$panel.querySelector("[data-digits]").addEventListener("click",()=>{this.#o=this.#o==="ne"?"en":"ne",this.#u(),this.#n()}),this.$panel.querySelectorAll(".day[data-key]").forEach((c,o)=>{c.addEventListener("click",()=>{a[o].onSelect(),this.setAttribute("value",this.value),this.#u(),this.#n(),this.#m(),this.hasAttribute("inline")||this.close()})})}#k(t){let[a,e,n]=t.split("-").map(Number);return`${A[e]} ${n}, ${a}`}#S(t){let[a,e,n]=t.split("-").map(Number);return`${k[e]} ${n}, ${a}`}#T(){let t=this.#i==="ad",a=t?D.slice(1):k.slice(1);this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-years><span class="primary-label">${t?this.#e.year:this.#p(this.#e.year)}</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="monthpicker">
        ${a.map((e,n)=>`<button data-month="${n+1}" ${this.#e.month===n+1?"data-active":""} type="button">${e}</button>`).join("")}
      </div>
    `,this.$panel.querySelector("[data-back]").addEventListener("click",()=>{this.#r="days",this.#n()}),this.$panel.querySelector("[data-open-years]").addEventListener("click",()=>{this.#r="years",this.#n()}),this.$panel.querySelectorAll("[data-month]").forEach(e=>{e.addEventListener("click",()=>{this.#e={year:this.#e.year,month:Number(e.dataset.month)},this.#r="days",this.#n()})})}#C(){let t=this.#i==="ad",a=t?F:Y,e=t?P:j,n=[];for(let r=a;r<=e;r++)n.push(r);this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title"><span class="primary-label">Select year</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="yearpicker">
        ${n.map(r=>`<button data-year="${r}" ${this.#e.year===r?"data-active":""} type="button">${t?r:this.#p(r)}</button>`).join("")}
      </div>
    `,this.$panel.querySelector("[data-back]").addEventListener("click",()=>{this.#r="months",this.#n()}),this.$panel.querySelectorAll("[data-year]").forEach(r=>{r.addEventListener("click",()=>{this.#e={year:Number(r.dataset.year),month:this.#e.month},this.#r="months",this.#n()})});let s=this.$panel.querySelector("[data-active]");s&&s.scrollIntoView({block:"center"})}#w(t){let{year:a,month:e}=this.#e;e+=t,e>12&&(e=1,a++),e<1&&(e=12,a--),!(a<Y||a>j)&&(this.#e={year:a,month:e},this.#n())}#A(t){let{year:a,month:e}=this.#e;e+=t,e>12&&(e=1,a++),e<1&&(e=12,a--),!(a<F||a>P)&&(this.#e={year:a,month:e},this.#n())}};function M(g="drp-datepicker"){customElements.get(g)||customElements.define(g,$)}typeof customElements<"u"&&M();return K(Q);})();
//# sourceMappingURL=drp-datepicker.global.js.map

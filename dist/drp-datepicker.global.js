var DRP=(()=>{var Y=Object.defineProperty;var K=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var G=Object.prototype.hasOwnProperty;var J=(_,t)=>{for(var e in t)Y(_,e,{get:t[e],enumerable:!0})},X=(_,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of W(t))!G.call(_,n)&&n!==e&&Y(_,n,{get:()=>t[n],enumerable:!(s=K(t,n))||s.enumerable});return _};var Z=_=>X(Y({},"__esModule",{value:!0}),_);var et={};J(et,{DrpDatePicker:()=>T,DrpNepaliCalendar:()=>$,registerDrpDatePicker:()=>I});var R=[[2e3,30,32,31,32,31,30,30,30,29,30,29,31],[2001,31,31,32,31,31,31,30,29,30,29,30,30],[2002,31,31,32,32,31,30,30,29,30,29,30,30],[2003,31,32,31,32,31,30,30,30,29,29,30,31],[2004,30,32,31,32,31,30,30,30,29,30,29,31],[2005,31,31,32,31,31,31,30,29,30,29,30,30],[2006,31,31,32,32,31,30,30,29,30,29,30,30],[2007,31,32,31,32,31,30,30,30,29,29,30,31],[2008,31,31,31,32,31,31,29,30,30,29,29,31],[2009,31,31,32,31,31,31,30,29,30,29,30,30],[2010,31,31,32,32,31,30,30,29,30,29,30,30],[2011,31,32,31,32,31,30,30,30,29,29,30,31],[2012,31,31,31,32,31,31,29,30,30,29,30,30],[2013,31,31,32,31,31,31,30,29,30,29,30,30],[2014,31,31,32,32,31,30,30,29,30,29,30,30],[2015,31,32,31,32,31,30,30,30,29,29,30,31],[2016,31,31,31,32,31,31,29,30,30,29,30,30],[2017,31,31,32,31,31,31,30,29,30,29,30,30],[2018,31,32,31,32,31,30,30,29,30,29,30,30],[2019,31,32,31,32,31,30,30,30,29,30,29,31],[2020,31,31,31,32,31,31,30,29,30,29,30,30],[2021,31,31,32,31,31,31,30,29,30,29,30,30],[2022,31,32,31,32,31,30,30,30,29,29,30,30],[2023,31,32,31,32,31,30,30,30,29,30,29,31],[2024,31,31,31,32,31,31,30,29,30,29,30,30],[2025,31,31,32,31,31,31,30,29,30,29,30,30],[2026,31,32,31,32,31,30,30,30,29,29,30,31],[2027,30,32,31,32,31,30,30,30,29,30,29,31],[2028,31,31,32,31,31,31,30,29,30,29,30,30],[2029,31,31,32,31,32,30,30,29,30,29,30,30],[2030,31,32,31,32,31,30,30,30,29,29,30,31],[2031,30,32,31,32,31,30,30,30,29,30,29,31],[2032,31,31,32,31,31,31,30,29,30,29,30,30],[2033,31,31,32,32,31,30,30,29,30,29,30,30],[2034,31,32,31,32,31,30,30,30,29,29,30,31],[2035,30,32,31,32,31,31,29,30,30,29,29,31],[2036,31,31,32,31,31,31,30,29,30,29,30,30],[2037,31,31,32,32,31,30,30,29,30,29,30,30],[2038,31,32,31,32,31,30,30,30,29,29,30,31],[2039,31,31,31,32,31,31,29,30,30,29,30,30],[2040,31,31,32,31,31,31,30,29,30,29,30,30],[2041,31,31,32,32,31,30,30,29,30,29,30,30],[2042,31,32,31,32,31,30,30,30,29,29,30,31],[2043,31,31,31,32,31,31,29,30,30,29,30,30],[2044,31,31,32,31,31,31,30,29,30,29,30,30],[2045,31,32,31,32,31,30,30,29,30,29,30,30],[2046,31,32,31,32,31,30,30,30,29,29,30,31],[2047,31,31,31,32,31,31,30,29,30,29,30,30],[2048,31,31,32,31,31,31,30,29,30,29,30,30],[2049,31,32,31,32,31,30,30,30,29,29,30,30],[2050,31,32,31,32,31,30,30,30,29,30,29,31],[2051,31,31,31,32,31,31,30,29,30,29,30,30],[2052,31,31,32,31,31,31,30,29,30,29,30,30],[2053,31,32,31,32,31,30,30,30,29,29,30,30],[2054,31,32,31,32,31,30,30,30,29,30,29,31],[2055,31,31,32,31,31,31,30,29,30,29,30,30],[2056,31,31,32,31,32,30,30,29,30,29,30,30],[2057,31,32,31,32,31,30,30,30,29,29,30,31],[2058,30,32,31,32,31,30,30,30,29,30,29,31],[2059,31,31,32,31,31,31,30,29,30,29,30,30],[2060,31,31,32,32,31,30,30,29,30,29,30,30],[2061,31,32,31,32,31,30,30,30,29,29,30,31],[2062,30,32,31,32,31,31,29,30,29,30,29,31],[2063,31,31,32,31,31,31,30,29,30,29,30,30],[2064,31,31,32,32,31,30,30,29,30,29,30,30],[2065,31,32,31,32,31,30,30,30,29,29,30,31],[2066,31,31,31,32,31,31,29,30,30,29,29,31],[2067,31,31,32,31,31,31,30,29,30,29,30,30],[2068,31,31,32,32,31,30,30,29,30,29,30,30],[2069,31,32,31,32,31,30,30,30,29,29,30,31],[2070,31,31,31,32,31,31,29,30,30,29,30,30],[2071,31,31,32,31,31,31,30,29,30,29,30,30],[2072,31,32,31,32,31,30,30,29,30,29,30,30],[2073,31,32,31,32,31,30,30,30,29,29,30,31],[2074,31,31,31,32,31,31,30,29,30,29,30,30],[2075,31,31,32,31,31,31,30,29,30,29,30,30],[2076,31,32,31,32,31,30,30,30,29,29,30,30],[2077,31,32,31,32,31,30,30,30,29,30,29,31],[2078,31,31,31,32,31,31,30,29,30,29,30,30],[2079,31,31,32,31,31,31,30,29,30,29,30,30],[2080,31,32,31,32,31,30,30,30,29,29,30,30],[2081,31,32,31,32,31,30,30,30,29,30,29,31],[2082,31,31,32,31,31,31,30,29,30,29,30,30],[2083,31,31,32,31,31,30,30,30,29,30,30,30],[2084,31,31,32,31,31,30,30,30,29,30,30,30],[2085,31,32,31,32,30,31,30,30,29,30,30,30],[2086,30,32,31,32,31,30,30,30,29,30,30,30],[2087,31,31,32,31,31,31,30,30,29,30,30,30],[2088,30,31,32,32,30,31,30,30,29,30,30,30],[2089,30,32,31,32,31,30,30,30,29,30,30,30],[2090,30,32,31,32,31,30,30,30,29,30,30,30],[2091,31,31,32,31,31,31,30,30,29,30,30,30],[2092,30,31,32,32,31,30,30,30,29,30,30,30],[2093,30,32,31,32,31,30,30,30,29,30,30,30],[2094,31,31,32,31,31,30,30,30,29,30,30,30],[2095,31,31,32,31,31,31,30,29,30,30,30,30],[2096,30,31,32,32,31,30,30,29,30,29,30,30],[2097,31,32,31,32,31,30,30,30,29,30,30,30],[2098,31,31,32,31,31,31,29,30,29,30,29,31]],D=["","Baisakh","Jestha","Ashadh","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"],P=["","\u092C\u0948\u0936\u093E\u0916","\u091C\u0947\u0920","\u0905\u0938\u093E\u0930","\u0936\u094D\u0930\u093E\u0935\u0923","\u092D\u0926\u094C","\u0905\u0938\u094B\u091C","\u0915\u093E\u0930\u094D\u0924\u093F\u0915","\u092E\u0902\u0938\u093F\u0930","\u092A\u094C\u0937","\u092E\u093E\u0918","\u092B\u093E\u0932\u094D\u0917\u0941\u0928","\u091A\u0948\u0924"],S=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],A=["","January","February","March","April","May","June","July","August","September","October","November","December"],C=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],q=["Su","Mo","Tu","We","Th","Fr","Sa"],O=["\u0906","\u0938\u094B","\u092E\u0902","\u092C\u0941","\u092C\u093F","\u0936\u0941","\u0936"],j=["\u0966","\u0967","\u0968","\u0969","\u096A","\u096B","\u096C","\u096D","\u096E","\u096F"];var L=_=>String(_).padStart(2,"0"),m=(_,t,e)=>`${String(_).padStart(4,"0")}-${L(t)}-${L(e)}`,$=class{debug_info="";#s=R;is_leap_year(t){return t%100===0?t%400===0:t%4===0}#y(t){return D[t]||""}#b(t){return S[t]||""}#_(t){return C[t]||""}#t(t,e,s){return t<1944||t>2041?(this.debug_info="AD year out of range. Supported: 1944-2041.",!1):e<1||e>12?(this.debug_info="AD month must be 1-12.",!1):s<1||s>31?(this.debug_info="AD day must be 1-31.",!1):!0}#e(t,e,s){return t<2e3||t>2098?(this.debug_info="BS year out of range. Supported: 2000-2098.",!1):e<1||e>12?(this.debug_info="BS month must be 1-12.",!1):s<1||s>32?(this.debug_info="BS day must be 1-32.",!1):!0}#o(t){for(let e=0;e<this.#s.length;e++)if(this.#s[e][0]===t)return e;return!1}eng_to_nep(t,e,s){if(!this.#t(t,e,s))return!1;let n=[31,28,31,30,31,30,31,31,30,31,30,31],a=[31,29,31,30,31,30,31,31,30,31,30,31],i=1944,r=2e3,l=9,h=16,o=6,d=0;for(let y=0;y<t-i;y++){let v=this.is_leap_year(i+y)?a:n;for(let x of v)d+=x}let c=this.is_leap_year(t)?a:n;for(let y=0;y<e-1;y++)d+=c[y];d+=s;let p=0,f=l,g=h,u=l,b=r;for(;d!==0;){let y=this.#s[p][f];g++,o++,g>y&&(u++,g=1,f++),o>7&&(o=1),u>12&&(b++,u=1),f>12&&(f=1,p++),d--}return{year:b,month:u,date:g,day:this.#_(o),nmonth:this.#y(u),num_day:o}}eng_to_nep_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,n]=t.split("-").map(Number),a=new Date(Date.UTC(e,s-1,n));return a.getUTCFullYear()!==e||a.getUTCMonth()!==s-1||a.getUTCDate()!==n?!1:this.eng_to_nep(e,s,n)}nep_to_eng(t,e,s){if(!this.#e(t,e,s))return!1;let n=[0,31,28,31,30,31,30,31,31,30,31,30,31],a=[0,31,29,31,30,31,30,31,31,30,31,30,31],i=1943,r=4,l=13,h=2e3,o=3,d=0,c=0;for(let u=0;u<t-h;u++){for(let b=1;b<=12;b++)d+=this.#s[c][b];c++}for(let u=1;u<e;u++)d+=this.#s[c][u];d+=s;let p=l,f=r,g=i;for(;d!==0;){let u=this.is_leap_year(g)?a[f]:n[f];p++,o++,p>u&&(f++,p=1,f>12&&(g++,f=1)),o>7&&(o=1),d--}return{year:g,month:f,date:p,day:this.#_(o),emonth:this.#b(f),num_day:o}}nep_to_eng_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,n]=t.split("-").map(Number);return this.nep_to_eng(e,s,n)}get_month_dates_nep(t,e){let s=this.#o(t);if(s===!1)return this.debug_info=`BS year ${t} not found in table.`,!1;let n=this.#s[s][e];return{start_date:m(t,e,1),end_date:m(t,e,n),days:n}}get_month_dates_eng(t,e){let s=this.get_month_dates_nep(t,e);if(!s)return!1;let[n,a,i]=s.start_date.split("-").map(Number),[r,l,h]=s.end_date.split("-").map(Number),o=this.nep_to_eng(n,a,i),d=this.nep_to_eng(r,l,h);return!o||!d?!1:{start_date:m(o.year,o.month,o.date),end_date:m(d.year,d.month,d.date)}}get_date_nep(t,e){let[s,n,a]=t.split("-").map(Number),i=this.nep_to_eng(s,n,a);if(!i)return!1;let r=new Date(Date.UTC(i.year,i.month-1,i.date));r.setUTCDate(r.getUTCDate()+e);let l=this.eng_to_nep(r.getUTCFullYear(),r.getUTCMonth()+1,r.getUTCDate());return l?m(l.year,l.month,l.date):!1}get_months_dates_nep(t,e){let[s,n]=t.slice(0,7).split("-").map(Number),[a,i]=e.slice(0,7).split("-").map(Number),r=[];for(;s<a||s===a&&n<=i;){let l=this.get_month_dates_nep(s,n);l&&r.push(l),n++,n>12&&(n=1,s++)}return r}get_months_dates_eng(t,e){let s=this.get_months_dates_nep(t,e),n=[];for(let a of s){let[i,r,l]=a.start_date.split("-").map(Number),[h,o,d]=a.end_date.split("-").map(Number),c=this.nep_to_eng(i,r,l),p=this.nep_to_eng(h,o,d);c&&p&&n.push({start_date:m(c.year,c.month,c.date),end_date:m(p.year,p.month,p.date)})}return n}get_bs_month_range_with_point(t,e){let[s,n,a]=t.split("-").map(Number),i=this.nep_to_eng(s,n,a);if(!i)return[];let r=new Date(Date.UTC(i.year,i.month-1,i.date));r.setUTCDate(r.getUTCDate()+e);let l=this.eng_to_nep(r.getUTCFullYear(),r.getUTCMonth()+1,r.getUTCDate());if(!l)return[];let h,o;e>=0?(h={year:s,month:n,date:a},o=l):(h=l,o={year:s,month:n,date:a});let d=h.year,c=h.month,p=o.year,f=o.month,g=[];for(;d<p||d===p&&c<=f;){let u=this.get_month_dates_nep(d,c);if(u){let b=d===h.year&&c===h.month,y=d===o.year&&c===o.month,v;b?v=h.date:y?v=o.date:v=null,g.push({year:d,month:c,start_date:u.start_date,end_date:u.end_date,days:u.days,pointed_date:v})}c++,c>12&&(c=1,d++)}return g}get_bs_month_range_excluding_partial(t,e){let s=this.get_bs_months_touched(t,e),[n,a]=t.split("-").map(Number);return s.filter(i=>!(i.year===n&&i.month===a))}get_bs_months_touched(t,e){let[s,n,a]=t.split("-").map(Number),i=this.nep_to_eng(s,n,a);if(!i)return[];let r=new Date(Date.UTC(i.year,i.month-1,i.date));r.setUTCDate(r.getUTCDate()+e);let l=this.eng_to_nep(r.getUTCFullYear(),r.getUTCMonth()+1,r.getUTCDate());if(!l)return[];let h,o;e>=0?(h={year:s,month:n,date:a},o=l):(h=l,o={year:s,month:n,date:a});let d=h.year,c=h.month,p=o.year,f=o.month,g=[];for(;d<p||d===p&&c<=f;){let u=this.get_month_dates_nep(d,c);if(u){let b=d===h.year&&c===h.month,y=d===o.year&&c===o.month,v=b?h.date:1,x=y?o.date:u.days;g.push({year:d,month:c,month_name:this.#y(c),start_date:u.start_date,end_date:u.end_date,days:u.days,range_start:m(d,c,v),range_end:m(d,c,x),range_days:x-v+1,is_partial:b||y})}c++,c>12&&(c=1,d++)}return g}days_fiscal_wise(t,e){let s={};for(let n of this.#s){let a=n[0],i=n.slice(1);a<t||a>e||(a===t&&a===e?s[a]=[...i.slice(3),...i.slice(0,3)]:a===t?s[a]=i.slice(3):a===e?s[a]=i.slice(0,3):s[a]=i)}return s}#l(t){let e=t+1,s=m(t,4,1),n=this.#o(e);if(n===!1)return this.debug_info=`BS year ${e} not found in table.`,!1;let a=this.#s[n][3],i=m(e,3,a),r=this.nep_to_eng(t,4,1),l=this.nep_to_eng(e,3,a);if(!r||!l)return this.debug_info="AD conversion failed for fiscal year boundaries.",!1;let h=m(r.year,r.month,r.date),o=m(l.year,l.month,l.date),d=Date.UTC(r.year,r.month-1,r.date),c=Date.UTC(l.year,l.month-1,l.date),p=Math.round((c-d)/864e5)+1;return{fy_label:`${t}/${String(e).slice(2)}`,bs_start_date:s,bs_end_date:i,ad_start_date:h,ad_end_date:o,total_days:p}}get_fiscal_year(t,e=0){let[s,n]=t.split("-").map(Number),a=n<=3?s-1:s;return a+=e,this.#l(a)}get_fiscal_year_by_days(t,e){let s=this.get_date_nep(t,e);return s?this.get_fiscal_year(s,0):(this.debug_info="Day offset produced an out-of-range BS date.",!1)}get_current_fiscal_year(t=0){let e=new Date,s=this.eng_to_nep(e.getFullYear(),e.getMonth()+1,e.getDate());if(!s)return this.debug_info="Could not convert today's date to BS.",!1;let n=m(s.year,s.month,s.date);return this.get_fiscal_year(n,t)}get_nth_month_end_date(t,e){let[s,n]=t.split("-").map(Number),a=e>0?1:-1,i=Math.abs(e);n+=a,n>12&&(n=1,s++),n<1&&(n=12,s--);for(let l=1;l<i;l++)n+=a,n>12&&(n=1,s++),n<1&&(n=12,s--);let r=this.get_month_dates_nep(s,n);return r?r.end_date:(this.debug_info=`BS year ${s} month ${n} is outside the supported table.`,!1)}today_nep(){let t=new Date,e=this.eng_to_nep(t.getFullYear(),t.getMonth()+1,t.getDate());return e?m(e.year,e.month,e.date):!1}#a(t,e,s){if(typeof t=="string"){let[n,a]=t.split("-").map(Number);return{year:n,month:a,options:e||{}}}return{year:t,month:e,options:s||{}}}#r(t){let e=new Map;if(Array.isArray(t))for(let s of t)s&&s.date&&e.set(s.date,s.label||"");return e}#h(t){let e=new Map;if(Array.isArray(t))for(let s of t){if(!s||!s.date)continue;let n={date:s.date,label:s.label||"",type:s.type||"event",color:s.color||null};e.has(s.date)||e.set(s.date,[]),e.get(s.date).push(n)}return e}#c(t,e){return t.get(e)||[]}get_calendar_month_nep(t,e,s){let{year:n,month:a,options:i}=this.#a(t,e,s),r=this.get_month_dates_nep(n,a);if(!r)return!1;let l=this.#r(i.holidays),h=this.#h(i.events),o=this.today_nep(),d=this.nep_to_eng(n,a,1);if(!d)return!1;let c=d.num_day,p=Date.UTC(d.year,d.month-1,d.date),f=[];for(let u=1;u<=r.days;u++){let b=(c-1+(u-1))%7+1,y=new Date(p+(u-1)*864e5),v=y.getUTCFullYear(),x=y.getUTCMonth()+1,k=y.getUTCDate(),w=m(n,a,u),M=this.#c(h,w);f.push({bs_date:w,bs_year:n,bs_month:a,bs_day:u,ad_date:m(v,x,k),ad_year:v,ad_month:x,ad_day:k,weekday:b,weekday_name:C[b],is_saturday:b===7,is_today:w===o,is_holiday:l.has(w),holiday_label:l.get(w)||null,is_event:M.length>0,events:M})}let g=this.get_month_dates_eng(n,a);return{system:"bs",year:n,month:a,month_name:D[a],month_name_ne:P[a],days_in_month:r.days,start_date_bs:r.start_date,end_date_bs:r.end_date,start_date_ad:g?g.start_date:null,end_date_ad:g?g.end_date:null,start_weekday:c,leading_blanks:c-1,days:f}}get_calendar_month_eng(t,e,s){let{year:n,month:a,options:i}=this.#a(t,e,s);if(!this.#t(n,a,1))return!1;let r=new Date(Date.UTC(n,a,0)).getUTCDate(),l=this.#r(i.holidays),h=this.#h(i.events),o=this.today_nep(),d=this.eng_to_nep(n,a,1);if(!d)return!1;let c=d.num_day,p=d.year,f=d.month,g=d.date,u=this.get_month_dates_nep(p,f),b=[];for(let v=1;v<=r;v++){let x=(c-1+(v-1))%7+1,k=m(p,f,g),w=m(n,a,v),M=this.#c(h,k);b.push({ad_date:w,ad_year:n,ad_month:a,ad_day:v,bs_date:k,bs_year:p,bs_month:f,bs_day:g,weekday:x,weekday_name:C[x],is_saturday:x===7,is_today:k===o,is_holiday:l.has(k),holiday_label:l.get(k)||null,is_event:M.length>0,events:M}),g++,g>u.days&&(g=1,f++,f>12&&(f=1,p++),u=this.get_month_dates_nep(p,f))}let y=this.eng_to_nep(n,a,r);return{system:"ad",year:n,month:a,month_name:A[a],month_name_short:S[a],days_in_month:r,start_date_ad:m(n,a,1),end_date_ad:m(n,a,r),start_date_bs:m(d.year,d.month,d.date),end_date_bs:y?m(y.year,y.month,y.date):null,start_weekday:c,leading_blanks:c-1,days:b}}today_eng(){let t=new Date;return m(t.getFullYear(),t.getMonth()+1,t.getDate())}get_date_eng(t,e){let[s,n,a]=t.split("-").map(Number),i=new Date(Date.UTC(s,n-1,a));return i.setUTCDate(i.getUTCDate()+e),m(i.getUTCFullYear(),i.getUTCMonth()+1,i.getUTCDate())}get_month_dates_eng_from_ad(t,e){if(!this.#t(t,e,1))return!1;let s=new Date(Date.UTC(t,e,0)).getUTCDate();return{start_date:m(t,e,1),end_date:m(t,e,s),days:s}}is_valid_bs_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,n]=t.split("-").map(Number);return this.#e(e,s,n)}is_valid_ad_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,n]=t.split("-").map(Number),a=new Date(Date.UTC(e,s-1,n));return a.getUTCFullYear()!==e||a.getUTCMonth()!==s-1||a.getUTCDate()!==n?!1:this.#t(e,s,n)}#u(t,e,s,n,a){let i=a==="bs"?D:A;return n.replace(/YYYY/g,String(t)).replace(/YY/g,String(t).slice(-2)).replace(/MMMM/g,i[e]||"").replace(/MM/g,L(e)).replace(/M/g,String(e)).replace(/DD/g,L(s)).replace(/D/g,String(s))}format_bs(t,e){let[s,n,a]=t.split("-").map(Number);return this.#e(s,n,a)?this.#u(s,n,a,e,"bs"):!1}format_ad(t,e){let[s,n,a]=t.split("-").map(Number);return this.#t(s,n,a)?this.#u(s,n,a,e,"ad"):!1}};var U=_=>String(_).padStart(2,"0"),B=(_,t,e)=>`${String(_).padStart(4,"0")}-${U(t)}-${U(e)}`,z=/^\d{4}-\d{2}-\d{2}$/,Q=_=>String(_).replace(/[0-9]/g,t=>j[Number(t)]),H=1944,F=2041,E=2e3,N=2098,tt=`
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

.field.is-error {
  border-color: #c62828;
  box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.15);
}

.field input {
  border: none;
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  color: var(--ndp-text);
  width: 100%;
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
.trigger:focus-visible { outline: 2px solid var(--ndp-accent); outline-offset: 2px; }
.trigger svg { width: 16px; height: 16px; }

:host([disabled]) .field { opacity: 0.55; pointer-events: none; }

.panel {
  position: absolute;
  z-index: 60;
  top: calc(100% + 6px);
  width: 300px;
  background: var(--ndp-panel-bg);
  border: 1px solid var(--ndp-border);
  border-radius: 14px;
  box-shadow: var(--ndp-shadow);
  padding: 14px;
  display: none;
  contain: layout style paint;
}
.panel[data-open] { display: block; }
.panel[data-placement="top"] {
  top: auto;
  bottom: calc(100% + 6px);
}
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
.nav-btn:focus-visible { outline: 2px solid var(--ndp-accent); outline-offset: 2px; }
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
.head-title:focus-visible { outline: 2px solid var(--ndp-accent); outline-offset: 2px; }
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
.day:focus-visible {
  outline: 2px solid var(--ndp-accent);
  outline-offset: -2px;
  z-index: 1;
}
.day.is-focus {
  outline: 2px solid var(--ndp-today);
  outline-offset: -2px;
  z-index: 1;
}
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

/* General event dot \u2014 additive to the holiday dot. */
.day.is-event .event-dot {
  position: absolute;
  top: 3px;
  right: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ndp-accent);
}
.day.is-selected.is-event .event-dot { background: #fff; }

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
.foot-btn:focus-visible { outline: 2px solid var(--ndp-accent); outline-offset: 2px; }
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
.digit-toggle:focus-visible { outline: 2px solid var(--ndp-accent); outline-offset: 2px; }

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
.yearpicker button:focus-visible, .monthpicker button:focus-visible { outline: 2px solid var(--ndp-accent); outline-offset: 2px; }
.yearpicker button[data-active], .monthpicker button[data-active] { background: var(--ndp-accent); color: #fff; border-color: var(--ndp-accent); }
.monthpicker { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`,V=document.createElement("template");V.innerHTML=`
<style>${tt}</style>
<div class="field" part="field">
  <input part="input" type="text" autocomplete="off" />
  <button class="trigger" part="trigger" type="button" aria-haspopup="dialog" aria-label="Open calendar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
  </button>
</div>
<div class="panel" part="panel" role="dialog" aria-modal="true" aria-label="Date picker"></div>
<div class="sr-only" role="status" aria-live="polite" aria-atomic="true"></div>
`;var T=class extends HTMLElement{static formAssociated=!0;static get observedAttributes(){return["value","min","max","placeholder","disabled","digits","mark-saturday","inline","type","required","first-day-of-week","format"]}#s=new $;#y=[];#b=[];#_=[];#t=null;#e=null;#o="days";#l="en";#a="bs";#r=!1;#h=null;#c=null;#u=null;#tt=null;#g=null;#D=null;#i=null;#m=0;#v=null;#d=null;#w=null;constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(V.content.cloneNode(!0)),this.$input=this.shadowRoot.querySelector("input"),this.$trigger=this.shadowRoot.querySelector(".trigger"),this.$panel=this.shadowRoot.querySelector(".panel"),this.$announcer=this.shadowRoot.querySelector('[role="status"]');let t=typeof this.attachInternals=="function"?this.attachInternals():null;this.#i=t&&typeof t.setFormValue=="function"?t:null}connectedCallback(){this.#l=this.getAttribute("digits")==="ne"?"ne":"en",this.#a=this.getAttribute("type")==="ad"?"ad":"bs",this.#m=Math.max(0,Math.min(6,Number(this.getAttribute("first-day-of-week"))||0)),this.#v=this.getAttribute("format")||null;let t=new Date,e=this.#s.eng_to_nep(t.getFullYear(),t.getMonth()+1,t.getDate());this.#g={year:e.year,month:e.month,date:e.date},this.#D={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate()},this.#t=this.#E(this.getAttribute("value")),this.#e=this.#x(),this.$trigger.addEventListener("click",()=>this.toggle()),this.$input.addEventListener("click",()=>this.toggle()),this.$input.addEventListener("focus",()=>this.$field?.classList.remove("is-error")),this.$input.addEventListener("keydown",s=>this.#U(s)),this.$input.addEventListener("blur",()=>this.#N()),this.shadowRoot.addEventListener("keydown",s=>this.#H(s)),this.$panel.addEventListener("click",s=>this.#Y(s)),this.#f(),this.#n(),this.#M(),this.hasAttribute("inline")&&(this.#r=!0)}disconnectedCallback(){this.#C()}formResetCallback(){this.clear()}formDisabledCallback(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t){this.#e&&(t==="digits"&&(this.#l=this.getAttribute("digits")==="ne"?"ne":"en"),t==="first-day-of-week"&&(this.#m=Math.max(0,Math.min(6,Number(this.getAttribute("first-day-of-week"))||0))),t==="format"&&(this.#v=this.getAttribute("format")||null),t==="type"&&(this.#a=this.getAttribute("type")==="ad"?"ad":"bs",this.#e=this.#x(),this.#f()),t==="value"&&(this.#t=this.#E(this.getAttribute("value")),this.#e=this.#x(),this.#f()),(t==="value"||t==="required"||t==="disabled")&&this.#M(),this.#n())}get holidays(){return this.#y}set holidays(t){this.#y=Array.isArray(t)?t:[],this.#n()}get events(){return this.#b}set events(t){this.#b=Array.isArray(t)?t:[],this.#n()}get disabledDates(){return this.#_}set disabledDates(t){this.#_=Array.isArray(t)?t:[],this.#n()}get type(){return this.#a}set type(t){this.setAttribute("type",t==="ad"?"ad":"bs")}get value(){return this.#a==="ad"?this.valueAD:this.valueBS}set value(t){t?this.setAttribute("value",t):this.removeAttribute("value")}get valueBS(){return this.#t?B(this.#t.year,this.#t.month,this.#t.date):""}get valueAD(){let t=this.getADDate();return t?B(t.year,t.month,t.date):""}get calendar(){return this.#s}get name(){return this.getAttribute("name")||""}set name(t){this.setAttribute("name",t)}get required(){return this.hasAttribute("required")}set required(t){this.toggleAttribute("required",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get firstDayOfWeek(){return this.#m}set firstDayOfWeek(t){this.setAttribute("first-day-of-week",String(Math.max(0,Math.min(6,Number(t)||0))))}get format(){return this.#v}set format(t){t?this.setAttribute("format",t):this.removeAttribute("format")}get validity(){return this.#i?this.#i.validity:void 0}get validationMessage(){return this.#i?this.#i.validationMessage:""}get willValidate(){return this.#i?this.#i.willValidate:!1}checkValidity(){return this.#i?this.#i.checkValidity():!0}reportValidity(){return this.#i?this.#i.reportValidity():!0}#M(){if(!this.#i)return;let t=this.value;this.#i.setFormValue(t||null),this.hasAttribute("required")&&!t?this.#i.setValidity({valueMissing:!0},"Please select a date.",this.$input):this.#i.setValidity({})}getADDate(){return this.#t?this.#s.nep_to_eng(this.#t.year,this.#t.month,this.#t.date):null}open(){this.hasAttribute("disabled")||this.#r||(this.#r=!0,this.#o="days",this.$trigger.setAttribute("aria-expanded","true"),this.#n(),this.#T(),this.#j(),this.dispatchEvent(new CustomEvent("open")))}close(){this.hasAttribute("inline")||!this.#r||(this.#r=!1,this.$trigger.setAttribute("aria-expanded","false"),this.#n(),this.#C(),this.$trigger.focus(),this.dispatchEvent(new CustomEvent("close")))}toggle(){this.hasAttribute("disabled")||(this.#r?this.close():this.open())}clear(){this.#t=null,this.removeAttribute("value"),this.#f(),this.#n(),this.#k(),this.#S("Selection cleared")}today(){this.#t={...this.#g},this.#e=this.#x(),this.setAttribute("value",this.value)}#E(t){if(!t||!z.test(t))return null;let[e,s,n]=t.split("-").map(Number);if(this.#a==="ad"){let a=this.#s.eng_to_nep(e,s,n);return a?{year:a.year,month:a.month,date:a.date}:null}return this.#s.nep_to_eng(e,s,n)?{year:e,month:s,date:n}:null}#x(){if(this.#a==="ad"){if(this.#t){let t=this.#s.nep_to_eng(this.#t.year,this.#t.month,this.#t.date);if(t)return{year:t.year,month:t.month}}return{year:this.#D.year,month:this.#D.month}}return this.#t?{year:this.#t.year,month:this.#t.month}:{year:this.#g.year,month:this.#g.month}}#p(t){return this.#l==="ne"?Q(t):String(t)}#et(){return this.shadowRoot.querySelector(".field")}#U(t){t.key==="Enter"&&(this.#N(),this.#r&&this.toggle()),t.key==="Escape"&&this.close()}#N(){let t=this.$input.value.trim();if(!t){this.$field()?.classList.remove("is-error");return}let e=this.#I(t);e?(this.#t=e,this.#e=this.#x(),this.setAttribute("value",this.value),this.#f(),this.#n(),this.#k(),this.$field()?.classList.remove("is-error"),this.#S(`Date set to ${this.value}`)):this.$field()?.classList.add("is-error")}#I(t){if(z.test(t)){let[n,a,i]=t.split("-").map(Number);if(this.#a==="ad"){let r=this.#s.eng_to_nep(n,a,i);if(r&&r.year>=E&&r.year<=N)return{year:r.year,month:r.month,date:r.date}}else if(this.#s.nep_to_eng(n,a,i))return{year:n,month:a,date:i};return null}let e={};D.slice(1).forEach((n,a)=>{e[n.toLowerCase()]=a+1}),A.slice(1).forEach((n,a)=>{e[n.toLowerCase()]=a+1}),S.slice(1).forEach((n,a)=>{e[n.toLowerCase()]=a+1});let s=t.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})$/);if(s){let n=Number(s[1]),a=e[s[2].toLowerCase()],i=Number(s[3]);if(!a||n<1||n>32)return null;if(i>=E&&i<=N&&a>=1&&a<=12&&this.#s.nep_to_eng(i,a,n))return{year:i,month:a,date:n};if(i>=H&&i<=F&&a>=1&&a<=12){let r=this.#s.eng_to_nep(i,a,n);if(r&&r.year>=E&&r.year<=N)return{year:r.year,month:r.month,date:r.date}}}return null}#Y(t){let e=t.target,s=e.closest("[data-nav]");if(s){this.#A(Number(s.dataset.nav));return}if(e.closest("[data-back]")){this.#o=this.#o==="years"?"months":"days",this.#n();return}if(e.closest("[data-open-months]")){this.#o="months",this.#n();return}if(e.closest("[data-open-years]")){this.#o="years",this.#n();return}if(e.closest("[data-clear]")){this.clear();return}if(e.closest("[data-today]")){this.today(),this.#f(),this.#n(),this.#k(),this.close();return}if(e.closest("[data-digits]")){this.#l=this.#l==="ne"?"en":"ne",this.#f(),this.#n();return}let o=e.closest("[data-month]");if(o){this.#e={year:this.#e.year,month:Number(o.dataset.month)},this.#d=null,this.#o="days",this.#n();return}let d=e.closest("[data-year]");if(d){this.#e={year:Number(d.dataset.year),month:this.#e.month},this.#d=null,this.#o="months",this.#n();return}let c=e.closest(".day[data-key]");if(c&&!c.disabled){let p=Number(c.dataset.index);!isNaN(p)&&this.#w&&this.#w[p]&&(this.#w[p].onSelect(),this.setAttribute("value",this.value),this.#f(),this.#n(),this.#k(),this.#S(`Selected ${this.value}`),this.hasAttribute("inline")||this.close())}}#H(t){if(t.key==="Escape"){this.close();return}if(!(!this.#r||this.hasAttribute("inline"))){if(this.#o==="days"&&this.#F(t.key)){t.preventDefault(),this.#R(t.key);return}t.key==="Tab"&&this.#q(t)}}#F(t){return["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown","Enter"," "].includes(t)}#R(t){if(t==="Enter"||t===" "){let i=this.shadowRoot.querySelector(".day.is-focus");i&&i.click();return}let e=[...this.shadowRoot.querySelectorAll(".day[data-key]")];if(e.length===0)return;let s=7,n=-1;this.#d!==null&&(n=e.findIndex(i=>i.dataset.key===this.#d)),n===-1&&(n=e.findIndex(i=>!i.disabled)),n===-1&&(n=0);let a=n;switch(t){case"ArrowLeft":a=n-1,a<0&&(a=e.length-1);break;case"ArrowRight":a=n+1,a>=e.length&&(a=0);break;case"ArrowUp":a=n-s,a<0&&(a=n);break;case"ArrowDown":a=n+s,a>=e.length&&(a=n);break;case"Home":a=0;break;case"End":a=e.length-1;break;case"PageUp":this.#A(-1);return;case"PageDown":this.#A(1);return}a!==n&&this.#P(a,e)}#P(t,e){let s=e||[...this.shadowRoot.querySelectorAll(".day[data-key]")];if(t<0||t>=s.length)return;let n=s[t];n.disabled||(this.#d=n.dataset.key,n.focus())}#T(){let t=[...this.shadowRoot.querySelectorAll(".day[data-key]")];if(t.length===0)return;let e=-1;if(this.#d!==null&&(e=t.findIndex(n=>n.dataset.key===this.#d)),e===-1&&this.#t){let n=this.value;e=t.findIndex(a=>a.dataset.key===n)}if(e===-1){let n=B(this.#g.year,this.#g.month,this.#g.date);e=t.findIndex(a=>a.dataset.key===n)}e===-1&&(e=0);let s=t[e];s&&!s.disabled&&(this.#d=s.dataset.key,this.$panel.querySelector(".is-focus")?.classList.remove("is-focus"),s.classList.add("is-focus"))}#q(t){let e=this.#O();if(e.length===0)return;let s=e[0],n=e[e.length-1];t.shiftKey?document.activeElement===s&&(t.preventDefault(),n.focus()):document.activeElement===n&&(t.preventDefault(),s.focus())}#O(){return!this.$panel||!this.#r?[]:[...this.shadowRoot.querySelectorAll(".nav-btn:not([disabled]), .head-title, .day[data-key]:not([disabled]), .foot-btn, .digit-toggle")].filter(t=>t.offsetParent!==null)}#A(t){this.#a==="ad"?this.#Q(t):this.#Z(t)}#j(){this.#h=t=>{t.composedPath().includes(this)||this.close()},document.addEventListener("mousedown",this.#h),this.#c=()=>this.#$(),window.addEventListener("scroll",this.#c,{passive:!0}),this.#u=()=>this.#$(),window.addEventListener("resize",this.#u,{passive:!0})}#C(){this.#h&&document.removeEventListener("mousedown",this.#h),this.#h=null,this.#c&&window.removeEventListener("scroll",this.#c),this.#c=null,this.#u&&window.removeEventListener("resize",this.#u),this.#u=null}#S(t){this.$announcer&&(this.$announcer.textContent="",(typeof requestAnimationFrame=="function"?requestAnimationFrame:setTimeout)(()=>{this.$announcer.textContent=t}))}#z(t){if(!this.#t)return"";let e=this.#a==="ad",s=e?this.getADDate():null,n=e?s.year:this.#t.year,a=e?s.month:this.#t.month,i=e?s.date:this.#t.date,r=e?A[a]:D[a],l=o=>this.#p(o),h={YYYY:l(String(n).padStart(4,"0")),YY:l(String(n).slice(-2)),MMMM:r,MM:l(U(a)),M:l(a),DD:l(U(i)),D:l(i)};return t.replace(/YYYY|YY|MMMM|MM|M|DD|D/g,o=>h[o]||o)}#f(){if(!this.#t){this.$input.value="",this.$input.placeholder=this.getAttribute("placeholder")||(this.#a==="ad"?"Select date (AD)":"Select date (BS)");return}if(this.#v){this.$input.value=this.#z(this.#v);return}if(this.#a==="ad"){let t=this.getADDate();this.$input.value=`${t.date} ${A[t.month]} ${t.year}`}else{let{year:t,month:e,date:s}=this.#t;this.$input.value=`${this.#p(s)} ${D[e]} ${this.#p(t)}`}}#k(){let t=this.getADDate();this.dispatchEvent(new CustomEvent("change",{detail:{bs:this.#t?{...this.#t,formatted:this.valueBS}:null,ad:t?{year:t.year,month:t.month,date:t.date,formatted:B(t.year,t.month,t.date)}:null},bubbles:!0}))}#V(t){let e=this.getAttribute("min"),s=this.getAttribute("max");return!!(e&&t<e||s&&t>s||this.#_.some(n=>n.date===t))}#n(){this.$panel.toggleAttribute("data-open",this.#r||this.hasAttribute("inline")),!(!this.#r&&!this.hasAttribute("inline"))&&(this.#o==="days"?this.#K(this.#a):this.#o==="months"?this.#J():this.#X(),this.#$())}#$(){if(this.hasAttribute("inline"))return;let t=this.$panel.offsetHeight;if(t===0)return;let e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom,n=e.top,a=6;s<t+a&&n>=t+a?this.$panel.setAttribute("data-placement","top"):this.$panel.removeAttribute("data-placement")}#K(t){let e=t==="bs",{year:s,month:n}=this.#e,a=e?this.#s.get_calendar_month_nep(s,n,{holidays:this.#y,events:this.#b}):this.#s.get_calendar_month_eng(s,n,{holidays:this.#y,events:this.#b});if(!a)return;let i=this.getAttribute("mark-saturday")!=="false",r=a.days.map((h,o)=>this.#W({index:o,key:e?h.bs_date:h.ad_date,primaryHtml:e?this.#p(h.bs_day):String(h.ad_day),secondaryHtml:e?String(h.ad_day):this.#p(h.bs_day),weekday:h.weekday,markSaturday:i,isToday:h.is_today,isSelected:!!(this.#t&&this.#t.year===h.bs_year&&this.#t.month===h.bs_month&&this.#t.date===h.bs_day),holidayLabel:h.is_holiday?h.holiday_label:void 0,events:h.events,onSelect:()=>{this.#t={year:h.bs_year,month:h.bs_month,date:h.bs_day}}})),l=e?a.start_date_ad?`${this.#L(a.start_date_ad)} \u2013 ${this.#L(a.end_date_ad)}`:"":a.start_date_bs?`${this.#B(a.start_date_bs)} \u2013 ${this.#B(a.end_date_bs)}`:"";this.#G({startWeekday:a.start_weekday,cells:r,primaryTitle:e?`${a.month_name} ${this.#p(s)}`:`${a.month_name} ${s}`,secondaryTitle:l})}#W({index:t,key:e,primaryHtml:s,secondaryHtml:n,weekday:a,markSaturday:i,isToday:r,isSelected:l,holidayLabel:h,events:o,onSelect:d}){let c=i&&a===7,p=h!==void 0,f=Array.isArray(o)&&o.length>0,g=this.#V(e),u=this.#d===e,b=["day"];r&&b.push("is-today"),l&&b.push("is-selected"),c&&b.push("is-saturday"),p&&b.push("is-holiday"),f&&b.push("is-event"),u&&b.push("is-focus");let y=[];if(p&&h&&y.push(h),f)for(let w of o)w&&w.label&&y.push(w.label);let v=y.length?` title="${y.join(`
`).replace(/"/g,"&quot;")}"`:"",x=s.replace(/<[^>]*>/g,""),k=n.replace(/<[^>]*>/g,"");return{html:`<button class="${b.join(" ")}" part="day" role="gridcell" data-key="${e}" data-index="${t}" tabindex="-1" aria-selected="${l}" ${g?"disabled":""}${v}>
        <span class="primary-num">${s}</span>
        <span class="secondary-num">${n}</span>
        ${f?'<span class="event-dot"></span>':""}
      </button>`,onSelect:d,ariaLabel:`${x}, ${k}`}}#G({startWeekday:t,cells:e,primaryTitle:s,secondaryTitle:n}){let a=(t-1-this.#m+7)%7,i="";for(let o=0;o<a;o++)i+='<button class="day is-outside" tabindex="-1" aria-hidden="true"></button>';i+=e.map(o=>o.html).join("");let r=s+(n?` \u2013 ${n}`:""),l=this.#l==="ne"?O:q,h=[...l.slice(this.#m),...l.slice(0,this.#m)];this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-nav="-1" aria-label="Previous month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-months role="heading" aria-level="2" tabindex="0">
          <span class="primary-label">${s}</span>
          <span class="secondary-label">${n}</span>
        </div>
        <button class="nav-btn" data-nav="1" aria-label="Next month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div class="weekdays" role="presentation">
        ${h.map((o,d)=>{let c=(6-this.#m+7)%7;return`<span class="${d===c?"sat":""}" role="presentation">${o}</span>`}).join("")}
      </div>
      <div class="grid" role="grid" aria-label="${r.replace(/"/g,"&quot;")}">
        ${i}
      </div>
      <div class="panel-foot">
        <button class="foot-btn muted" data-clear type="button">Clear</button>
        <button class="digit-toggle" data-digits ${this.#l==="ne"?"data-active":""} type="button">${this.#l==="ne"?"\u0926\u0947\u0935":"123"}</button>
        <button class="foot-btn" data-today type="button">Today</button>
      </div>
    `,this.#w=e,this.#d=null,this.#T()}#L(t){let[e,s,n]=t.split("-").map(Number);return`${S[s]} ${n}, ${e}`}#B(t){let[e,s,n]=t.split("-").map(Number);return`${D[s]} ${n}, ${e}`}#J(){let t=this.#a==="ad",e=t?A.slice(1):D.slice(1);this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-years role="heading" aria-level="2" tabindex="0"><span class="primary-label">${t?this.#e.year:this.#p(this.#e.year)}</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="monthpicker" role="listbox" aria-label="Select month">
        ${e.map((s,n)=>`<button data-month="${n+1}" ${this.#e.month===n+1?"data-active":""} type="button" role="option" aria-selected="${this.#e.month===n+1}">${s}</button>`).join("")}
      </div>
    `}#X(){let t=this.#a==="ad",e=t?H:E,s=t?F:N,n=[];for(let i=e;i<=s;i++)n.push(i);this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title"><span class="primary-label">Select year</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="yearpicker" role="listbox" aria-label="Select year">
        ${n.map(i=>`<button data-year="${i}" ${this.#e.year===i?"data-active":""} type="button" role="option" aria-selected="${this.#e.year===i}">${t?i:this.#p(i)}</button>`).join("")}
      </div>
    `;let a=this.$panel.querySelector("[data-active]");a&&a.scrollIntoView({block:"center"})}#Z(t){let{year:e,month:s}=this.#e;s+=t,s>12&&(s=1,e++),s<1&&(s=12,e--),!(e<E||e>N)&&(this.#e={year:e,month:s},this.#d=null,this.#n())}#Q(t){let{year:e,month:s}=this.#e;s+=t,s>12&&(s=1,e++),s<1&&(s=12,e--),!(e<H||e>F)&&(this.#e={year:e,month:s},this.#d=null,this.#n())}};function I(_="drp-datepicker"){customElements.get(_)||customElements.define(_,T)}typeof customElements<"u"&&I();return Z(et);})();
//# sourceMappingURL=drp-datepicker.global.js.map

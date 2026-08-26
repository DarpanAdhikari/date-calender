var DRP=(()=>{var U=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var K=Object.prototype.hasOwnProperty;var W=(b,t)=>{for(var e in t)U(b,e,{get:t[e],enumerable:!0})},G=(b,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of V(t))!K.call(b,a)&&a!==e&&U(b,a,{get:()=>t[a],enumerable:!(s=j(t,a))||s.enumerable});return b};var J=b=>G(U({},"__esModule",{value:!0}),b);var Q={};W(Q,{DrpDatePicker:()=>E,DrpNepaliCalendar:()=>S,registerDrpDatePicker:()=>B});var H=[[2e3,30,32,31,32,31,30,30,30,29,30,29,31],[2001,31,31,32,31,31,31,30,29,30,29,30,30],[2002,31,31,32,32,31,30,30,29,30,29,30,30],[2003,31,32,31,32,31,30,30,30,29,29,30,31],[2004,30,32,31,32,31,30,30,30,29,30,29,31],[2005,31,31,32,31,31,31,30,29,30,29,30,30],[2006,31,31,32,32,31,30,30,29,30,29,30,30],[2007,31,32,31,32,31,30,30,30,29,29,30,31],[2008,31,31,31,32,31,31,29,30,30,29,29,31],[2009,31,31,32,31,31,31,30,29,30,29,30,30],[2010,31,31,32,32,31,30,30,29,30,29,30,30],[2011,31,32,31,32,31,30,30,30,29,29,30,31],[2012,31,31,31,32,31,31,29,30,30,29,30,30],[2013,31,31,32,31,31,31,30,29,30,29,30,30],[2014,31,31,32,32,31,30,30,29,30,29,30,30],[2015,31,32,31,32,31,30,30,30,29,29,30,31],[2016,31,31,31,32,31,31,29,30,30,29,30,30],[2017,31,31,32,31,31,31,30,29,30,29,30,30],[2018,31,32,31,32,31,30,30,29,30,29,30,30],[2019,31,32,31,32,31,30,30,30,29,30,29,31],[2020,31,31,31,32,31,31,30,29,30,29,30,30],[2021,31,31,32,31,31,31,30,29,30,29,30,30],[2022,31,32,31,32,31,30,30,30,29,29,30,30],[2023,31,32,31,32,31,30,30,30,29,30,29,31],[2024,31,31,31,32,31,31,30,29,30,29,30,30],[2025,31,31,32,31,31,31,30,29,30,29,30,30],[2026,31,32,31,32,31,30,30,30,29,29,30,31],[2027,30,32,31,32,31,30,30,30,29,30,29,31],[2028,31,31,32,31,31,31,30,29,30,29,30,30],[2029,31,31,32,31,32,30,30,29,30,29,30,30],[2030,31,32,31,32,31,30,30,30,29,29,30,31],[2031,30,32,31,32,31,30,30,30,29,30,29,31],[2032,31,31,32,31,31,31,30,29,30,29,30,30],[2033,31,31,32,32,31,30,30,29,30,29,30,30],[2034,31,32,31,32,31,30,30,30,29,29,30,31],[2035,30,32,31,32,31,31,29,30,30,29,29,31],[2036,31,31,32,31,31,31,30,29,30,29,30,30],[2037,31,31,32,32,31,30,30,29,30,29,30,30],[2038,31,32,31,32,31,30,30,30,29,29,30,31],[2039,31,31,31,32,31,31,29,30,30,29,30,30],[2040,31,31,32,31,31,31,30,29,30,29,30,30],[2041,31,31,32,32,31,30,30,29,30,29,30,30],[2042,31,32,31,32,31,30,30,30,29,29,30,31],[2043,31,31,31,32,31,31,29,30,30,29,30,30],[2044,31,31,32,31,31,31,30,29,30,29,30,30],[2045,31,32,31,32,31,30,30,29,30,29,30,30],[2046,31,32,31,32,31,30,30,30,29,29,30,31],[2047,31,31,31,32,31,31,30,29,30,29,30,30],[2048,31,31,32,31,31,31,30,29,30,29,30,30],[2049,31,32,31,32,31,30,30,30,29,29,30,30],[2050,31,32,31,32,31,30,30,30,29,30,29,31],[2051,31,31,31,32,31,31,30,29,30,29,30,30],[2052,31,31,32,31,31,31,30,29,30,29,30,30],[2053,31,32,31,32,31,30,30,30,29,29,30,30],[2054,31,32,31,32,31,30,30,30,29,30,29,31],[2055,31,31,32,31,31,31,30,29,30,29,30,30],[2056,31,31,32,31,32,30,30,29,30,29,30,30],[2057,31,32,31,32,31,30,30,30,29,29,30,31],[2058,30,32,31,32,31,30,30,30,29,30,29,31],[2059,31,31,32,31,31,31,30,29,30,29,30,30],[2060,31,31,32,32,31,30,30,29,30,29,30,30],[2061,31,32,31,32,31,30,30,30,29,29,30,31],[2062,30,32,31,32,31,31,29,30,29,30,29,31],[2063,31,31,32,31,31,31,30,29,30,29,30,30],[2064,31,31,32,32,31,30,30,29,30,29,30,30],[2065,31,32,31,32,31,30,30,30,29,29,30,31],[2066,31,31,31,32,31,31,29,30,30,29,29,31],[2067,31,31,32,31,31,31,30,29,30,29,30,30],[2068,31,31,32,32,31,30,30,29,30,29,30,30],[2069,31,32,31,32,31,30,30,30,29,29,30,31],[2070,31,31,31,32,31,31,29,30,30,29,30,30],[2071,31,31,32,31,31,31,30,29,30,29,30,30],[2072,31,32,31,32,31,30,30,29,30,29,30,30],[2073,31,32,31,32,31,30,30,30,29,29,30,31],[2074,31,31,31,32,31,31,30,29,30,29,30,30],[2075,31,31,32,31,31,31,30,29,30,29,30,30],[2076,31,32,31,32,31,30,30,30,29,29,30,30],[2077,31,32,31,32,31,30,30,30,29,30,29,31],[2078,31,31,31,32,31,31,30,29,30,29,30,30],[2079,31,31,32,31,31,31,30,29,30,29,30,30],[2080,31,32,31,32,31,30,30,30,29,29,30,30],[2081,31,32,31,32,31,30,30,30,29,30,29,31],[2082,31,31,32,31,31,31,30,29,30,29,30,30],[2083,31,31,32,31,31,30,30,30,29,30,30,30],[2084,31,31,32,31,31,30,30,30,29,30,30,30],[2085,31,32,31,32,30,31,30,30,29,30,30,30],[2086,30,32,31,32,31,30,30,30,29,30,30,30],[2087,31,31,32,31,31,31,30,30,29,30,30,30],[2088,30,31,32,32,30,31,30,30,29,30,30,30],[2089,30,32,31,32,31,30,30,30,29,30,30,30],[2090,30,32,31,32,31,30,30,30,29,30,30,30],[2091,31,31,32,31,31,31,30,30,29,30,30,30],[2092,30,31,32,32,31,30,30,30,29,30,30,30],[2093,30,32,31,32,31,30,30,30,29,30,30,30],[2094,31,31,32,31,31,30,30,30,29,30,30,30],[2095,31,31,32,31,31,31,30,29,30,30,30,30],[2096,30,31,32,32,31,30,30,29,30,29,30,30],[2097,31,32,31,32,31,30,30,30,29,30,30,30],[2098,31,31,32,31,31,31,29,30,29,30,29,31]],w=["","Baisakh","Jestha","Ashadh","Shrawan","Bhadra","Ashwin","Kartik","Mangsir","Poush","Magh","Falgun","Chaitra"],F=["","\u092C\u0948\u0936\u093E\u0916","\u091C\u0947\u0920","\u0905\u0938\u093E\u0930","\u0936\u094D\u0930\u093E\u0935\u0923","\u092D\u0926\u094C","\u0905\u0938\u094B\u091C","\u0915\u093E\u0930\u094D\u0924\u093F\u0915","\u092E\u0902\u0938\u093F\u0930","\u092A\u094C\u0937","\u092E\u093E\u0918","\u092B\u093E\u0932\u094D\u0917\u0941\u0928","\u091A\u0948\u0924"],A=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=["","January","February","March","April","May","June","July","August","September","October","November","December"],N=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],R=["Su","Mo","Tu","We","Th","Fr","Sa"],P=["\u0906","\u0938\u094B","\u092E\u0902","\u092C\u0941","\u092C\u093F","\u0936\u0941","\u0936"],q=["\u0966","\u0967","\u0968","\u0969","\u096A","\u096B","\u096C","\u096D","\u096E","\u096F"];var T=b=>String(b).padStart(2,"0"),g=(b,t,e)=>`${String(b).padStart(4,"0")}-${T(t)}-${T(e)}`,S=class{debug_info="";#s=H;is_leap_year(t){return t%100===0?t%400===0:t%4===0}#f(t){return w[t]||""}#m(t){return A[t]||""}#t(t){return N[t]||""}#e(t,e,s){return t<1944||t>2041?(this.debug_info="AD year out of range. Supported: 1944-2041.",!1):e<1||e>12?(this.debug_info="AD month must be 1-12.",!1):s<1||s>31?(this.debug_info="AD day must be 1-31.",!1):!0}#r(t,e,s){return t<2e3||t>2098?(this.debug_info="BS year out of range. Supported: 2000-2098.",!1):e<1||e>12?(this.debug_info="BS month must be 1-12.",!1):s<1||s>32?(this.debug_info="BS day must be 1-32.",!1):!0}#l(t){for(let e=0;e<this.#s.length;e++)if(this.#s[e][0]===t)return e;return!1}eng_to_nep(t,e,s){if(!this.#e(t,e,s))return!1;let a=[31,28,31,30,31,30,31,31,30,31,30,31],n=[31,29,31,30,31,30,31,31,30,31,30,31],i=1944,r=2e3,d=9,l=16,o=6,h=0;for(let m=0;m<t-i;m++){let v=this.is_leap_year(i+m)?n:a;for(let x of v)h+=x}let c=this.is_leap_year(t)?n:a;for(let m=0;m<e-1;m++)h+=c[m];h+=s;let u=0,y=d,f=l,p=d,_=r;for(;h!==0;){let m=this.#s[u][y];f++,o++,f>m&&(p++,f=1,y++),o>7&&(o=1),p>12&&(_++,p=1),y>12&&(y=1,u++),h--}return{year:_,month:p,date:f,day:this.#t(o),nmonth:this.#f(p),num_day:o}}eng_to_nep_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,a]=t.split("-").map(Number),n=new Date(Date.UTC(e,s-1,a));return n.getUTCFullYear()!==e||n.getUTCMonth()!==s-1||n.getUTCDate()!==a?!1:this.eng_to_nep(e,s,a)}nep_to_eng(t,e,s){if(!this.#r(t,e,s))return!1;let a=[0,31,28,31,30,31,30,31,31,30,31,30,31],n=[0,31,29,31,30,31,30,31,31,30,31,30,31],i=1943,r=4,d=13,l=2e3,o=3,h=0,c=0;for(let p=0;p<t-l;p++){for(let _=1;_<=12;_++)h+=this.#s[c][_];c++}for(let p=1;p<e;p++)h+=this.#s[c][p];h+=s;let u=d,y=r,f=i;for(;h!==0;){let p=this.is_leap_year(f)?n[y]:a[y];u++,o++,u>p&&(y++,u=1,y>12&&(f++,y=1)),o>7&&(o=1),h--}return{year:f,month:y,date:u,day:this.#t(o),emonth:this.#m(y),num_day:o}}nep_to_eng_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,a]=t.split("-").map(Number);return this.nep_to_eng(e,s,a)}get_month_dates_nep(t,e){let s=this.#l(t);if(s===!1)return this.debug_info=`BS year ${t} not found in table.`,!1;let a=this.#s[s][e];return{start_date:g(t,e,1),end_date:g(t,e,a),days:a}}get_month_dates_eng(t,e){let s=this.get_month_dates_nep(t,e);if(!s)return!1;let[a,n,i]=s.start_date.split("-").map(Number),[r,d,l]=s.end_date.split("-").map(Number),o=this.nep_to_eng(a,n,i),h=this.nep_to_eng(r,d,l);return!o||!h?!1:{start_date:g(o.year,o.month,o.date),end_date:g(h.year,h.month,h.date)}}get_date_nep(t,e){let[s,a,n]=t.split("-").map(Number),i=this.nep_to_eng(s,a,n);if(!i)return!1;let r=new Date(Date.UTC(i.year,i.month-1,i.date));r.setUTCDate(r.getUTCDate()+e);let d=this.eng_to_nep(r.getUTCFullYear(),r.getUTCMonth()+1,r.getUTCDate());return d?g(d.year,d.month,d.date):!1}get_months_dates_nep(t,e){let[s,a]=t.slice(0,7).split("-").map(Number),[n,i]=e.slice(0,7).split("-").map(Number),r=[];for(;s<n||s===n&&a<=i;){let d=this.get_month_dates_nep(s,a);d&&r.push(d),a++,a>12&&(a=1,s++)}return r}get_months_dates_eng(t,e){let s=this.get_months_dates_nep(t,e),a=[];for(let n of s){let[i,r,d]=n.start_date.split("-").map(Number),[l,o,h]=n.end_date.split("-").map(Number),c=this.nep_to_eng(i,r,d),u=this.nep_to_eng(l,o,h);c&&u&&a.push({start_date:g(c.year,c.month,c.date),end_date:g(u.year,u.month,u.date)})}return a}get_bs_month_range_with_point(t,e){let[s,a,n]=t.split("-").map(Number),i=this.nep_to_eng(s,a,n);if(!i)return[];let r=new Date(Date.UTC(i.year,i.month-1,i.date));r.setUTCDate(r.getUTCDate()+e);let d=this.eng_to_nep(r.getUTCFullYear(),r.getUTCMonth()+1,r.getUTCDate());if(!d)return[];let l,o;e>=0?(l={year:s,month:a,date:n},o=d):(l=d,o={year:s,month:a,date:n});let h=l.year,c=l.month,u=o.year,y=o.month,f=[];for(;h<u||h===u&&c<=y;){let p=this.get_month_dates_nep(h,c);if(p){let _=h===l.year&&c===l.month,m=h===o.year&&c===o.month,v;_?v=l.date:m?v=o.date:v=null,f.push({year:h,month:c,start_date:p.start_date,end_date:p.end_date,days:p.days,pointed_date:v})}c++,c>12&&(c=1,h++)}return f}get_bs_month_range_excluding_partial(t,e){let s=this.get_bs_months_touched(t,e),[a,n]=t.split("-").map(Number);return s.filter(i=>!(i.year===a&&i.month===n))}get_bs_months_touched(t,e){let[s,a,n]=t.split("-").map(Number),i=this.nep_to_eng(s,a,n);if(!i)return[];let r=new Date(Date.UTC(i.year,i.month-1,i.date));r.setUTCDate(r.getUTCDate()+e);let d=this.eng_to_nep(r.getUTCFullYear(),r.getUTCMonth()+1,r.getUTCDate());if(!d)return[];let l,o;e>=0?(l={year:s,month:a,date:n},o=d):(l=d,o={year:s,month:a,date:n});let h=l.year,c=l.month,u=o.year,y=o.month,f=[];for(;h<u||h===u&&c<=y;){let p=this.get_month_dates_nep(h,c);if(p){let _=h===l.year&&c===l.month,m=h===o.year&&c===o.month,v=_?l.date:1,x=m?o.date:p.days;f.push({year:h,month:c,month_name:this.#f(c),start_date:p.start_date,end_date:p.end_date,days:p.days,range_start:g(h,c,v),range_end:g(h,c,x),range_days:x-v+1,is_partial:_||m})}c++,c>12&&(c=1,h++)}return f}days_fiscal_wise(t,e){let s={};for(let a of this.#s){let n=a[0],i=a.slice(1);n<t||n>e||(n===t&&n===e?s[n]=[...i.slice(3),...i.slice(0,3)]:n===t?s[n]=i.slice(3):n===e?s[n]=i.slice(0,3):s[n]=i)}return s}#n(t){let e=t+1,s=g(t,4,1),a=this.#l(e);if(a===!1)return this.debug_info=`BS year ${e} not found in table.`,!1;let n=this.#s[a][3],i=g(e,3,n),r=this.nep_to_eng(t,4,1),d=this.nep_to_eng(e,3,n);if(!r||!d)return this.debug_info="AD conversion failed for fiscal year boundaries.",!1;let l=g(r.year,r.month,r.date),o=g(d.year,d.month,d.date),h=Date.UTC(r.year,r.month-1,r.date),c=Date.UTC(d.year,d.month-1,d.date),u=Math.round((c-h)/864e5)+1;return{fy_label:`${t}/${String(e).slice(2)}`,bs_start_date:s,bs_end_date:i,ad_start_date:l,ad_end_date:o,total_days:u}}get_fiscal_year(t,e=0){let[s,a]=t.split("-").map(Number),n=a<=3?s-1:s;return n+=e,this.#n(n)}get_fiscal_year_by_days(t,e){let s=this.get_date_nep(t,e);return s?this.get_fiscal_year(s,0):(this.debug_info="Day offset produced an out-of-range BS date.",!1)}get_current_fiscal_year(t=0){let e=new Date,s=this.eng_to_nep(e.getFullYear(),e.getMonth()+1,e.getDate());if(!s)return this.debug_info="Could not convert today's date to BS.",!1;let a=g(s.year,s.month,s.date);return this.get_fiscal_year(a,t)}get_nth_month_end_date(t,e){let[s,a]=t.split("-").map(Number),n=e>0?1:-1,i=Math.abs(e);a+=n,a>12&&(a=1,s++),a<1&&(a=12,s--);for(let d=1;d<i;d++)a+=n,a>12&&(a=1,s++),a<1&&(a=12,s--);let r=this.get_month_dates_nep(s,a);return r?r.end_date:(this.debug_info=`BS year ${s} month ${a} is outside the supported table.`,!1)}today_nep(){let t=new Date,e=this.eng_to_nep(t.getFullYear(),t.getMonth()+1,t.getDate());return e?g(e.year,e.month,e.date):!1}#o(t,e,s){if(typeof t=="string"){let[a,n]=t.split("-").map(Number);return{year:a,month:n,options:e||{}}}return{year:t,month:e,options:s||{}}}#h(t){let e=new Map;if(Array.isArray(t))for(let s of t)s&&s.date&&e.set(s.date,s.label||"");return e}get_calendar_month_nep(t,e,s){let{year:a,month:n,options:i}=this.#o(t,e,s),r=this.get_month_dates_nep(a,n);if(!r)return!1;let d=this.#h(i.holidays),l=this.today_nep(),o=this.nep_to_eng(a,n,1);if(!o)return!1;let h=o.num_day,c=Date.UTC(o.year,o.month-1,o.date),u=[];for(let f=1;f<=r.days;f++){let p=(h-1+(f-1))%7+1,_=new Date(c+(f-1)*864e5),m=_.getUTCFullYear(),v=_.getUTCMonth()+1,x=_.getUTCDate(),D=g(a,n,f);u.push({bs_date:D,bs_year:a,bs_month:n,bs_day:f,ad_date:g(m,v,x),ad_year:m,ad_month:v,ad_day:x,weekday:p,weekday_name:N[p],is_saturday:p===7,is_today:D===l,is_holiday:d.has(D),holiday_label:d.get(D)||null})}let y=this.get_month_dates_eng(a,n);return{system:"bs",year:a,month:n,month_name:w[n],month_name_ne:F[n],days_in_month:r.days,start_date_bs:r.start_date,end_date_bs:r.end_date,start_date_ad:y?y.start_date:null,end_date_ad:y?y.end_date:null,start_weekday:h,leading_blanks:h-1,days:u}}get_calendar_month_eng(t,e,s){let{year:a,month:n,options:i}=this.#o(t,e,s);if(!this.#e(a,n,1))return!1;let r=new Date(Date.UTC(a,n,0)).getUTCDate(),d=this.#h(i.holidays),l=this.today_nep(),o=this.eng_to_nep(a,n,1);if(!o)return!1;let h=o.num_day,c=o.year,u=o.month,y=o.date,f=this.get_month_dates_nep(c,u),p=[];for(let m=1;m<=r;m++){let v=(h-1+(m-1))%7+1,x=g(c,u,y),D=g(a,n,m);p.push({ad_date:D,ad_year:a,ad_month:n,ad_day:m,bs_date:x,bs_year:c,bs_month:u,bs_day:y,weekday:v,weekday_name:N[v],is_saturday:v===7,is_today:x===l,is_holiday:d.has(x),holiday_label:d.get(x)||null}),y++,y>f.days&&(y=1,u++,u>12&&(u=1,c++),f=this.get_month_dates_nep(c,u))}let _=this.eng_to_nep(a,n,r);return{system:"ad",year:a,month:n,month_name:k[n],month_name_short:A[n],days_in_month:r,start_date_ad:g(a,n,1),end_date_ad:g(a,n,r),start_date_bs:g(o.year,o.month,o.date),end_date_bs:_?g(_.year,_.month,_.date):null,start_weekday:h,leading_blanks:h-1,days:p}}today_eng(){let t=new Date;return g(t.getFullYear(),t.getMonth()+1,t.getDate())}get_date_eng(t,e){let[s,a,n]=t.split("-").map(Number),i=new Date(Date.UTC(s,a-1,n));return i.setUTCDate(i.getUTCDate()+e),g(i.getUTCFullYear(),i.getUTCMonth()+1,i.getUTCDate())}get_month_dates_eng_from_ad(t,e){if(!this.#e(t,e,1))return!1;let s=new Date(Date.UTC(t,e,0)).getUTCDate();return{start_date:g(t,e,1),end_date:g(t,e,s),days:s}}is_valid_bs_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,a]=t.split("-").map(Number);return this.#r(e,s,a)}is_valid_ad_date(t){if(typeof t!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(t))return!1;let[e,s,a]=t.split("-").map(Number),n=new Date(Date.UTC(e,s-1,a));return n.getUTCFullYear()!==e||n.getUTCMonth()!==s-1||n.getUTCDate()!==a?!1:this.#e(e,s,a)}#c(t,e,s,a,n){let i=n==="bs"?w:k;return a.replace(/YYYY/g,String(t)).replace(/YY/g,String(t).slice(-2)).replace(/MMMM/g,i[e]||"").replace(/MM/g,T(e)).replace(/M/g,String(e)).replace(/DD/g,T(s)).replace(/D/g,String(s))}format_bs(t,e){let[s,a,n]=t.split("-").map(Number);return this.#r(s,a,n)?this.#c(s,a,n,e,"bs"):!1}format_ad(t,e){let[s,a,n]=t.split("-").map(Number);return this.#e(s,a,n)?this.#c(s,a,n,e,"ad"):!1}};var L=b=>String(b).padStart(2,"0"),C=(b,t,e)=>`${String(b).padStart(4,"0")}-${L(t)}-${L(e)}`,O=/^\d{4}-\d{2}-\d{2}$/,X=b=>String(b).replace(/[0-9]/g,t=>q[Number(t)]),I=1944,Y=2041,$=2e3,M=2098,Z=`
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
`,z=document.createElement("template");z.innerHTML=`
<style>${Z}</style>
<div class="field" part="field">
  <input part="input" type="text" autocomplete="off" />
  <button class="trigger" part="trigger" type="button" aria-haspopup="dialog" aria-label="Open calendar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
  </button>
</div>
<div class="panel" part="panel" role="dialog" aria-modal="true" aria-label="Date picker"></div>
<div class="sr-only" role="status" aria-live="polite" aria-atomic="true"></div>
`;var E=class extends HTMLElement{static formAssociated=!0;static get observedAttributes(){return["value","min","max","placeholder","disabled","digits","mark-saturday","inline","type","required","first-day-of-week","format"]}#s=new S;#f=[];#m=[];#t=null;#e=null;#r="days";#l="en";#n="bs";#o=!1;#h=null;#c=null;#b=null;#Q=null;#y=null;#k=null;#i=null;#g=0;#_=null;#d=null;#x=null;constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(z.content.cloneNode(!0)),this.$input=this.shadowRoot.querySelector("input"),this.$trigger=this.shadowRoot.querySelector(".trigger"),this.$panel=this.shadowRoot.querySelector(".panel"),this.$announcer=this.shadowRoot.querySelector('[role="status"]');let t=typeof this.attachInternals=="function"?this.attachInternals():null;this.#i=t&&typeof t.setFormValue=="function"?t:null}connectedCallback(){this.#l=this.getAttribute("digits")==="ne"?"ne":"en",this.#n=this.getAttribute("type")==="ad"?"ad":"bs",this.#g=Math.max(0,Math.min(6,Number(this.getAttribute("first-day-of-week"))||0)),this.#_=this.getAttribute("format")||null;let t=new Date,e=this.#s.eng_to_nep(t.getFullYear(),t.getMonth()+1,t.getDate());this.#y={year:e.year,month:e.month,date:e.date},this.#k={year:t.getFullYear(),month:t.getMonth()+1,date:t.getDate()},this.#t=this.#M(this.getAttribute("value")),this.#e=this.#v(),this.$trigger.addEventListener("click",()=>this.toggle()),this.$input.addEventListener("click",()=>this.toggle()),this.$input.addEventListener("focus",()=>this.$field?.classList.remove("is-error")),this.$input.addEventListener("keydown",s=>this.#B(s)),this.$input.addEventListener("blur",()=>this.#E()),this.shadowRoot.addEventListener("keydown",s=>this.#Y(s)),this.$panel.addEventListener("click",s=>this.#I(s)),this.#p(),this.#a(),this.#$(),this.hasAttribute("inline")&&(this.#o=!0)}disconnectedCallback(){this.#T()}formResetCallback(){this.clear()}formDisabledCallback(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t){this.#e&&(t==="digits"&&(this.#l=this.getAttribute("digits")==="ne"?"ne":"en"),t==="first-day-of-week"&&(this.#g=Math.max(0,Math.min(6,Number(this.getAttribute("first-day-of-week"))||0))),t==="format"&&(this.#_=this.getAttribute("format")||null),t==="type"&&(this.#n=this.getAttribute("type")==="ad"?"ad":"bs",this.#e=this.#v(),this.#p()),t==="value"&&(this.#t=this.#M(this.getAttribute("value")),this.#e=this.#v(),this.#p()),(t==="value"||t==="required"||t==="disabled")&&this.#$(),this.#a())}get holidays(){return this.#f}set holidays(t){this.#f=Array.isArray(t)?t:[],this.#a()}get disabledDates(){return this.#m}set disabledDates(t){this.#m=Array.isArray(t)?t:[],this.#a()}get type(){return this.#n}set type(t){this.setAttribute("type",t==="ad"?"ad":"bs")}get value(){return this.#n==="ad"?this.valueAD:this.valueBS}set value(t){t?this.setAttribute("value",t):this.removeAttribute("value")}get valueBS(){return this.#t?C(this.#t.year,this.#t.month,this.#t.date):""}get valueAD(){let t=this.getADDate();return t?C(t.year,t.month,t.date):""}get calendar(){return this.#s}get name(){return this.getAttribute("name")||""}set name(t){this.setAttribute("name",t)}get required(){return this.hasAttribute("required")}set required(t){this.toggleAttribute("required",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get firstDayOfWeek(){return this.#g}set firstDayOfWeek(t){this.setAttribute("first-day-of-week",String(Math.max(0,Math.min(6,Number(t)||0))))}get format(){return this.#_}set format(t){t?this.setAttribute("format",t):this.removeAttribute("format")}get validity(){return this.#i?this.#i.validity:void 0}get validationMessage(){return this.#i?this.#i.validationMessage:""}get willValidate(){return this.#i?this.#i.willValidate:!1}checkValidity(){return this.#i?this.#i.checkValidity():!0}reportValidity(){return this.#i?this.#i.reportValidity():!0}#$(){if(!this.#i)return;let t=this.value;this.#i.setFormValue(t||null),this.hasAttribute("required")&&!t?this.#i.setValidity({valueMissing:!0},"Please select a date.",this.$input):this.#i.setValidity({})}getADDate(){return this.#t?this.#s.nep_to_eng(this.#t.year,this.#t.month,this.#t.date):null}open(){this.hasAttribute("disabled")||this.#o||(this.#o=!0,this.#r="days",this.$trigger.setAttribute("aria-expanded","true"),this.#a(),this.#N(),this.#O(),this.dispatchEvent(new CustomEvent("open")))}close(){this.hasAttribute("inline")||!this.#o||(this.#o=!1,this.$trigger.setAttribute("aria-expanded","false"),this.#a(),this.#T(),this.$trigger.focus(),this.dispatchEvent(new CustomEvent("close")))}toggle(){this.hasAttribute("disabled")||(this.#o?this.close():this.open())}clear(){this.#t=null,this.removeAttribute("value"),this.#p(),this.#a(),this.#w(),this.#A("Selection cleared")}today(){this.#t={...this.#y},this.#e=this.#v(),this.setAttribute("value",this.value)}#M(t){if(!t||!O.test(t))return null;let[e,s,a]=t.split("-").map(Number);if(this.#n==="ad"){let n=this.#s.eng_to_nep(e,s,a);return n?{year:n.year,month:n.month,date:n.date}:null}return this.#s.nep_to_eng(e,s,a)?{year:e,month:s,date:a}:null}#v(){if(this.#n==="ad"){if(this.#t){let t=this.#s.nep_to_eng(this.#t.year,this.#t.month,this.#t.date);if(t)return{year:t.year,month:t.month}}return{year:this.#k.year,month:this.#k.month}}return this.#t?{year:this.#t.year,month:this.#t.month}:{year:this.#y.year,month:this.#y.month}}#u(t){return this.#l==="ne"?X(t):String(t)}#tt(){return this.shadowRoot.querySelector(".field")}#B(t){t.key==="Enter"&&(this.#E(),this.#o&&this.toggle()),t.key==="Escape"&&this.close()}#E(){let t=this.$input.value.trim();if(!t){this.$field()?.classList.remove("is-error");return}let e=this.#U(t);e?(this.#t=e,this.#e=this.#v(),this.setAttribute("value",this.value),this.#p(),this.#a(),this.#w(),this.$field()?.classList.remove("is-error"),this.#A(`Date set to ${this.value}`)):this.$field()?.classList.add("is-error")}#U(t){if(O.test(t)){let[a,n,i]=t.split("-").map(Number);if(this.#n==="ad"){let r=this.#s.eng_to_nep(a,n,i);if(r&&r.year>=$&&r.year<=M)return{year:r.year,month:r.month,date:r.date}}else if(this.#s.nep_to_eng(a,n,i))return{year:a,month:n,date:i};return null}let e={};w.slice(1).forEach((a,n)=>{e[a.toLowerCase()]=n+1}),k.slice(1).forEach((a,n)=>{e[a.toLowerCase()]=n+1}),A.slice(1).forEach((a,n)=>{e[a.toLowerCase()]=n+1});let s=t.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})$/);if(s){let a=Number(s[1]),n=e[s[2].toLowerCase()],i=Number(s[3]);if(!n||a<1||a>32)return null;if(i>=$&&i<=M&&n>=1&&n<=12&&this.#s.nep_to_eng(i,n,a))return{year:i,month:n,date:a};if(i>=I&&i<=Y&&n>=1&&n<=12){let r=this.#s.eng_to_nep(i,n,a);if(r&&r.year>=$&&r.year<=M)return{year:r.year,month:r.month,date:r.date}}}return null}#I(t){let e=t.target,s=e.closest("[data-nav]");if(s){this.#D(Number(s.dataset.nav));return}if(e.closest("[data-back]")){this.#r=this.#r==="years"?"months":"days",this.#a();return}if(e.closest("[data-open-months]")){this.#r="months",this.#a();return}if(e.closest("[data-open-years]")){this.#r="years",this.#a();return}if(e.closest("[data-clear]")){this.clear();return}if(e.closest("[data-today]")){this.today(),this.#p(),this.#a(),this.#w(),this.close();return}if(e.closest("[data-digits]")){this.#l=this.#l==="ne"?"en":"ne",this.#p(),this.#a();return}let o=e.closest("[data-month]");if(o){this.#e={year:this.#e.year,month:Number(o.dataset.month)},this.#d=null,this.#r="days",this.#a();return}let h=e.closest("[data-year]");if(h){this.#e={year:Number(h.dataset.year),month:this.#e.month},this.#d=null,this.#r="months",this.#a();return}let c=e.closest(".day[data-key]");if(c&&!c.disabled){let u=Number(c.dataset.index);!isNaN(u)&&this.#x&&this.#x[u]&&(this.#x[u].onSelect(),this.setAttribute("value",this.value),this.#p(),this.#a(),this.#w(),this.#A(`Selected ${this.value}`),this.hasAttribute("inline")||this.close())}}#Y(t){if(t.key==="Escape"){this.close();return}if(!(!this.#o||this.hasAttribute("inline"))){if(this.#r==="days"&&this.#H(t.key)){t.preventDefault(),this.#F(t.key);return}t.key==="Tab"&&this.#P(t)}}#H(t){return["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown","Enter"," "].includes(t)}#F(t){if(t==="Enter"||t===" "){let i=this.shadowRoot.querySelector(".day.is-focus");i&&i.click();return}let e=[...this.shadowRoot.querySelectorAll(".day[data-key]")];if(e.length===0)return;let s=7,a=-1;this.#d!==null&&(a=e.findIndex(i=>i.dataset.key===this.#d)),a===-1&&(a=e.findIndex(i=>!i.disabled)),a===-1&&(a=0);let n=a;switch(t){case"ArrowLeft":n=a-1,n<0&&(n=e.length-1);break;case"ArrowRight":n=a+1,n>=e.length&&(n=0);break;case"ArrowUp":n=a-s,n<0&&(n=a);break;case"ArrowDown":n=a+s,n>=e.length&&(n=a);break;case"Home":n=0;break;case"End":n=e.length-1;break;case"PageUp":this.#D(-1);return;case"PageDown":this.#D(1);return}n!==a&&this.#R(n,e)}#R(t,e){let s=e||[...this.shadowRoot.querySelectorAll(".day[data-key]")];if(t<0||t>=s.length)return;let a=s[t];a.disabled||(this.#d=a.dataset.key,a.focus())}#N(){let t=[...this.shadowRoot.querySelectorAll(".day[data-key]")];if(t.length===0)return;let e=-1;if(this.#d!==null&&(e=t.findIndex(a=>a.dataset.key===this.#d)),e===-1&&this.#t){let a=this.value;e=t.findIndex(n=>n.dataset.key===a)}if(e===-1){let a=C(this.#y.year,this.#y.month,this.#y.date);e=t.findIndex(n=>n.dataset.key===a)}e===-1&&(e=0);let s=t[e];s&&!s.disabled&&(this.#d=s.dataset.key,this.$panel.querySelector(".is-focus")?.classList.remove("is-focus"),s.classList.add("is-focus"))}#P(t){let e=this.#q();if(e.length===0)return;let s=e[0],a=e[e.length-1];t.shiftKey?document.activeElement===s&&(t.preventDefault(),a.focus()):document.activeElement===a&&(t.preventDefault(),s.focus())}#q(){return!this.$panel||!this.#o?[]:[...this.shadowRoot.querySelectorAll(".nav-btn:not([disabled]), .head-title, .day[data-key]:not([disabled]), .foot-btn, .digit-toggle")].filter(t=>t.offsetParent!==null)}#D(t){this.#n==="ad"?this.#Z(t):this.#X(t)}#O(){this.#h=t=>{t.composedPath().includes(this)||this.close()},document.addEventListener("mousedown",this.#h),this.#c=()=>this.#S(),window.addEventListener("scroll",this.#c,{passive:!0}),this.#b=()=>this.#S(),window.addEventListener("resize",this.#b,{passive:!0})}#T(){this.#h&&document.removeEventListener("mousedown",this.#h),this.#h=null,this.#c&&window.removeEventListener("scroll",this.#c),this.#c=null,this.#b&&window.removeEventListener("resize",this.#b),this.#b=null}#A(t){this.$announcer&&(this.$announcer.textContent="",(typeof requestAnimationFrame=="function"?requestAnimationFrame:setTimeout)(()=>{this.$announcer.textContent=t}))}#z(t){if(!this.#t)return"";let e=this.#n==="ad",s=e?this.getADDate():null,a=e?s.year:this.#t.year,n=e?s.month:this.#t.month,i=e?s.date:this.#t.date,r=e?k[n]:w[n],d=o=>this.#u(o),l={YYYY:d(String(a).padStart(4,"0")),YY:d(String(a).slice(-2)),MMMM:r,MM:d(L(n)),M:d(n),DD:d(L(i)),D:d(i)};return t.replace(/YYYY|YY|MMMM|MM|M|DD|D/g,o=>l[o]||o)}#p(){if(!this.#t){this.$input.value="",this.$input.placeholder=this.getAttribute("placeholder")||(this.#n==="ad"?"Select date (AD)":"Select date (BS)");return}if(this.#_){this.$input.value=this.#z(this.#_);return}if(this.#n==="ad"){let t=this.getADDate();this.$input.value=`${t.date} ${k[t.month]} ${t.year}`}else{let{year:t,month:e,date:s}=this.#t;this.$input.value=`${this.#u(s)} ${w[e]} ${this.#u(t)}`}}#w(){let t=this.getADDate();this.dispatchEvent(new CustomEvent("change",{detail:{bs:this.#t?{...this.#t,formatted:this.valueBS}:null,ad:t?{year:t.year,month:t.month,date:t.date,formatted:C(t.year,t.month,t.date)}:null},bubbles:!0}))}#j(t){let e=this.getAttribute("min"),s=this.getAttribute("max");return!!(e&&t<e||s&&t>s||this.#m.some(a=>a.date===t))}#a(){this.$panel.toggleAttribute("data-open",this.#o||this.hasAttribute("inline")),!(!this.#o&&!this.hasAttribute("inline"))&&(this.#r==="days"?this.#V(this.#n):this.#r==="months"?this.#G():this.#J(),this.#S())}#S(){if(this.hasAttribute("inline"))return;let t=this.$panel.offsetHeight;if(t===0)return;let e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom,a=e.top,n=6;s<t+n&&a>=t+n?this.$panel.setAttribute("data-placement","top"):this.$panel.removeAttribute("data-placement")}#V(t){let e=t==="bs",{year:s,month:a}=this.#e,n=e?this.#s.get_calendar_month_nep(s,a,{holidays:this.#f}):this.#s.get_calendar_month_eng(s,a,{holidays:this.#f});if(!n)return;let i=this.getAttribute("mark-saturday")!=="false",r=n.days.map((l,o)=>this.#K({index:o,key:e?l.bs_date:l.ad_date,primaryHtml:e?this.#u(l.bs_day):String(l.ad_day),secondaryHtml:e?String(l.ad_day):this.#u(l.bs_day),weekday:l.weekday,markSaturday:i,isToday:l.is_today,isSelected:!!(this.#t&&this.#t.year===l.bs_year&&this.#t.month===l.bs_month&&this.#t.date===l.bs_day),holidayLabel:l.is_holiday?l.holiday_label:void 0,onSelect:()=>{this.#t={year:l.bs_year,month:l.bs_month,date:l.bs_day}}})),d=e?n.start_date_ad?`${this.#C(n.start_date_ad)} \u2013 ${this.#C(n.end_date_ad)}`:"":n.start_date_bs?`${this.#L(n.start_date_bs)} \u2013 ${this.#L(n.end_date_bs)}`:"";this.#W({startWeekday:n.start_weekday,cells:r,primaryTitle:e?`${n.month_name} ${this.#u(s)}`:`${n.month_name} ${s}`,secondaryTitle:d})}#K({index:t,key:e,primaryHtml:s,secondaryHtml:a,weekday:n,markSaturday:i,isToday:r,isSelected:d,holidayLabel:l,onSelect:o}){let h=i&&n===7,c=l!==void 0,u=this.#j(e),y=this.#d===e,f=["day"];r&&f.push("is-today"),d&&f.push("is-selected"),h&&f.push("is-saturday"),c&&f.push("is-holiday"),y&&f.push("is-focus");let p=c&&l?` title="${l.replace(/"/g,"&quot;")}"`:"",_=s.replace(/<[^>]*>/g,""),m=a.replace(/<[^>]*>/g,"");return{html:`<button class="${f.join(" ")}" part="day" role="gridcell" data-key="${e}" data-index="${t}" tabindex="-1" aria-selected="${d}" ${u?"disabled":""}${p}>
        <span class="primary-num">${s}</span>
        <span class="secondary-num">${a}</span>
      </button>`,onSelect:o,ariaLabel:`${_}, ${m}`}}#W({startWeekday:t,cells:e,primaryTitle:s,secondaryTitle:a}){let n=(t-1-this.#g+7)%7,i="";for(let o=0;o<n;o++)i+='<button class="day is-outside" tabindex="-1" aria-hidden="true"></button>';i+=e.map(o=>o.html).join("");let r=s+(a?` \u2013 ${a}`:""),d=this.#l==="ne"?P:R,l=[...d.slice(this.#g),...d.slice(0,this.#g)];this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-nav="-1" aria-label="Previous month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-months role="heading" aria-level="2" tabindex="0">
          <span class="primary-label">${s}</span>
          <span class="secondary-label">${a}</span>
        </div>
        <button class="nav-btn" data-nav="1" aria-label="Next month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div class="weekdays" role="presentation">
        ${l.map((o,h)=>{let c=(6-this.#g+7)%7;return`<span class="${h===c?"sat":""}" role="presentation">${o}</span>`}).join("")}
      </div>
      <div class="grid" role="grid" aria-label="${r.replace(/"/g,"&quot;")}">
        ${i}
      </div>
      <div class="panel-foot">
        <button class="foot-btn muted" data-clear type="button">Clear</button>
        <button class="digit-toggle" data-digits ${this.#l==="ne"?"data-active":""} type="button">${this.#l==="ne"?"\u0926\u0947\u0935":"123"}</button>
        <button class="foot-btn" data-today type="button">Today</button>
      </div>
    `,this.#x=e,this.#d=null,this.#N()}#C(t){let[e,s,a]=t.split("-").map(Number);return`${A[s]} ${a}, ${e}`}#L(t){let[e,s,a]=t.split("-").map(Number);return`${w[s]} ${a}, ${e}`}#G(){let t=this.#n==="ad",e=t?k.slice(1):w.slice(1);this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-years role="heading" aria-level="2" tabindex="0"><span class="primary-label">${t?this.#e.year:this.#u(this.#e.year)}</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="monthpicker" role="listbox" aria-label="Select month">
        ${e.map((s,a)=>`<button data-month="${a+1}" ${this.#e.month===a+1?"data-active":""} type="button" role="option" aria-selected="${this.#e.month===a+1}">${s}</button>`).join("")}
      </div>
    `}#J(){let t=this.#n==="ad",e=t?I:$,s=t?Y:M,a=[];for(let i=e;i<=s;i++)a.push(i);this.$panel.innerHTML=`
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title"><span class="primary-label">Select year</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="yearpicker" role="listbox" aria-label="Select year">
        ${a.map(i=>`<button data-year="${i}" ${this.#e.year===i?"data-active":""} type="button" role="option" aria-selected="${this.#e.year===i}">${t?i:this.#u(i)}</button>`).join("")}
      </div>
    `;let n=this.$panel.querySelector("[data-active]");n&&n.scrollIntoView({block:"center"})}#X(t){let{year:e,month:s}=this.#e;s+=t,s>12&&(s=1,e++),s<1&&(s=12,e--),!(e<$||e>M)&&(this.#e={year:e,month:s},this.#d=null,this.#a())}#Z(t){let{year:e,month:s}=this.#e;s+=t,s>12&&(s=1,e++),s<1&&(s=12,e--),!(e<I||e>Y)&&(this.#e={year:e,month:s},this.#d=null,this.#a())}};function B(b="drp-datepicker"){customElements.get(b)||customElements.define(b,E)}typeof customElements<"u"&&B();return J(Q);})();
//# sourceMappingURL=drp-datepicker.global.js.map

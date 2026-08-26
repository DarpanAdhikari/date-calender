var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/core/nepali-calendar.js
var nepali_calendar_exports = {};
__export(nepali_calendar_exports, {
  DrpNepaliCalendar: () => DrpNepaliCalendar,
  default: () => nepali_calendar_default
});
module.exports = __toCommonJS(nepali_calendar_exports);

// src/core/bs-data.js
var BS_DATA = [
  [2e3, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2001, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2002, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2003, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2004, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2005, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2006, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2007, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2008, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [2009, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2010, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2011, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2012, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [2013, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2014, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2015, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2016, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [2017, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2018, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2019, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2020, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [2021, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2022, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [2023, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2024, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [2025, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2026, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2027, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2028, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2029, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  [2030, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2031, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2032, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2033, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2034, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2035, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [2036, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2037, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2038, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2039, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [2040, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2041, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2042, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2043, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [2044, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2045, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2046, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2047, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [2048, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2049, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [2050, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2051, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [2052, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2053, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [2054, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2055, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2056, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  [2057, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2058, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2059, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2060, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2061, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2062, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  [2063, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2064, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2065, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2066, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  [2067, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2068, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2069, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2070, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  [2071, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2072, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2073, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  [2074, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [2075, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2076, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [2077, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2078, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  [2079, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2080, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  [2081, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  [2082, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  [2083, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  [2084, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  [2085, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  [2086, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [2087, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  [2088, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30],
  [2089, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [2090, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [2091, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30],
  [2092, 30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [2093, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [2094, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30],
  [2095, 31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30],
  [2096, 30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  [2097, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30],
  [2098, 31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31]
];
var NEPALI_MONTHS = [
  "",
  "Baisakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra"
];
var NEPALI_MONTHS_NE = [
  "",
  "\u092C\u0948\u0936\u093E\u0916",
  "\u091C\u0947\u0920",
  "\u0905\u0938\u093E\u0930",
  "\u0936\u094D\u0930\u093E\u0935\u0923",
  "\u092D\u0926\u094C",
  "\u0905\u0938\u094B\u091C",
  "\u0915\u093E\u0930\u094D\u0924\u093F\u0915",
  "\u092E\u0902\u0938\u093F\u0930",
  "\u092A\u094C\u0937",
  "\u092E\u093E\u0918",
  "\u092B\u093E\u0932\u094D\u0917\u0941\u0928",
  "\u091A\u0948\u0924"
];
var ENGLISH_MONTHS = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var ENGLISH_MONTHS_FULL = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var WEEKDAYS = [
  "",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// src/core/nepali-calendar.js
var pad2 = (n) => String(n).padStart(2, "0");
var fmt = (y, m, d) => `${String(y).padStart(4, "0")}-${pad2(m)}-${pad2(d)}`;
var DrpNepaliCalendar = class {
  /** Last error/validation message. */
  debug_info = "";
  #bs = BS_DATA;
  // ── internal helpers ────────────────────────────────────────────────
  is_leap_year(year) {
    if (year % 100 === 0) return year % 400 === 0;
    return year % 4 === 0;
  }
  #getNepaliMonth(m) {
    return NEPALI_MONTHS[m] || "";
  }
  #getEnglishMonth(m) {
    return ENGLISH_MONTHS[m] || "";
  }
  #getDayOfWeek(day) {
    return WEEKDAYS[day] || "";
  }
  #isRangeEng(yy, mm, dd) {
    if (yy < 1944 || yy > 2041) {
      this.debug_info = "AD year out of range. Supported: 1944-2041.";
      return false;
    }
    if (mm < 1 || mm > 12) {
      this.debug_info = "AD month must be 1-12.";
      return false;
    }
    if (dd < 1 || dd > 31) {
      this.debug_info = "AD day must be 1-31.";
      return false;
    }
    return true;
  }
  #isRangeNep(yy, mm, dd) {
    if (yy < 2e3 || yy > 2098) {
      this.debug_info = "BS year out of range. Supported: 2000-2098.";
      return false;
    }
    if (mm < 1 || mm > 12) {
      this.debug_info = "BS month must be 1-12.";
      return false;
    }
    if (dd < 1 || dd > 32) {
      this.debug_info = "BS day must be 1-32.";
      return false;
    }
    return true;
  }
  #getBsIndex(year) {
    for (let i = 0; i < this.#bs.length; i++) {
      if (this.#bs[i][0] === year) return i;
    }
    return false;
  }
  // ── core conversion ─────────────────────────────────────────────────
  /**
   * AD -> BS
   * @returns {BsResult|false}
   */
  eng_to_nep(yy, mm, dd) {
    if (!this.#isRangeEng(yy, mm, dd)) return false;
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const lmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const defEyy = 1944;
    const defNyy = 2e3;
    const defNmm = 9;
    const defNdd = 16;
    let day = 6;
    let totalEDays = 0;
    for (let i2 = 0; i2 < yy - defEyy; i2++) {
      const src2 = this.is_leap_year(defEyy + i2) ? lmonth : month;
      for (const d of src2) totalEDays += d;
    }
    const src = this.is_leap_year(yy) ? lmonth : month;
    for (let i2 = 0; i2 < mm - 1; i2++) totalEDays += src[i2];
    totalEDays += dd;
    let i = 0;
    let j = defNmm;
    let totalNDays = defNdd;
    let m = defNmm;
    let y = defNyy;
    while (totalEDays !== 0) {
      const daysInMonth = this.#bs[i][j];
      totalNDays++;
      day++;
      if (totalNDays > daysInMonth) {
        m++;
        totalNDays = 1;
        j++;
      }
      if (day > 7) day = 1;
      if (m > 12) {
        y++;
        m = 1;
      }
      if (j > 12) {
        j = 1;
        i++;
      }
      totalEDays--;
    }
    return {
      year: y,
      month: m,
      date: totalNDays,
      day: this.#getDayOfWeek(day),
      nmonth: this.#getNepaliMonth(m),
      num_day: day
    };
  }
  /** @param {string} date 'YYYY-MM-DD' AD date @returns {BsResult|false} */
  eng_to_nep_date(date) {
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const [y, m, d] = date.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) {
      return false;
    }
    return this.eng_to_nep(y, m, d);
  }
  /**
   * BS -> AD
   * @returns {AdResult|false}
   */
  nep_to_eng(yy, mm, dd) {
    if (!this.#isRangeNep(yy, mm, dd)) return false;
    const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const lmonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const defEyy = 1943;
    const defEmm = 4;
    const defEdd = 13;
    const defNyy = 2e3;
    let day = 3;
    let totalNDays = 0;
    let k = 0;
    for (let i = 0; i < yy - defNyy; i++) {
      for (let j = 1; j <= 12; j++) totalNDays += this.#bs[k][j];
      k++;
    }
    for (let j = 1; j < mm; j++) totalNDays += this.#bs[k][j];
    totalNDays += dd;
    let totalEDays = defEdd;
    let m = defEmm;
    let y = defEyy;
    while (totalNDays !== 0) {
      const daysInMonth = this.is_leap_year(y) ? lmonth[m] : month[m];
      totalEDays++;
      day++;
      if (totalEDays > daysInMonth) {
        m++;
        totalEDays = 1;
        if (m > 12) {
          y++;
          m = 1;
        }
      }
      if (day > 7) day = 1;
      totalNDays--;
    }
    return {
      year: y,
      month: m,
      date: totalEDays,
      day: this.#getDayOfWeek(day),
      emonth: this.#getEnglishMonth(m),
      num_day: day
    };
  }
  /** @param {string} date 'YYYY-MM-DD' BS date @returns {AdResult|false} */
  nep_to_eng_date(date) {
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const [y, m, d] = date.split("-").map(Number);
    return this.nep_to_eng(y, m, d);
  }
  // ── month boundary helpers ──────────────────────────────────────────
  get_month_dates_nep(year, month) {
    const idx = this.#getBsIndex(year);
    if (idx === false) {
      this.debug_info = `BS year ${year} not found in table.`;
      return false;
    }
    const days = this.#bs[idx][month];
    return {
      start_date: fmt(year, month, 1),
      end_date: fmt(year, month, days),
      days
    };
  }
  get_month_dates_eng(year, month) {
    const info = this.get_month_dates_nep(year, month);
    if (!info) return false;
    const [sy, sm, sd] = info.start_date.split("-").map(Number);
    const [ey, em, ed] = info.end_date.split("-").map(Number);
    const engStart = this.nep_to_eng(sy, sm, sd);
    const engEnd = this.nep_to_eng(ey, em, ed);
    if (!engStart || !engEnd) return false;
    return {
      start_date: fmt(engStart.year, engStart.month, engStart.date),
      end_date: fmt(engEnd.year, engEnd.month, engEnd.date)
    };
  }
  // ── date offset ──────────────────────────────────────────────────────
  /**
   * @param {string} date BS date 'YYYY-MM-DD'
   * @param {number} days positive = future, negative = past
   * @returns {string|false} BS date 'YYYY-MM-DD'
   */
  get_date_nep(date, days) {
    const [y, m, d] = date.split("-").map(Number);
    const eng = this.nep_to_eng(y, m, d);
    if (!eng) return false;
    const dt = new Date(Date.UTC(eng.year, eng.month - 1, eng.date));
    dt.setUTCDate(dt.getUTCDate() + days);
    const nep = this.eng_to_nep(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
    if (!nep) return false;
    return fmt(nep.year, nep.month, nep.date);
  }
  // ── multi-month range helpers ───────────────────────────────────────
  get_months_dates_nep(fromDate, toDate) {
    let [fy, fm] = fromDate.slice(0, 7).split("-").map(Number);
    const [ty, tm] = toDate.slice(0, 7).split("-").map(Number);
    const result = [];
    while (fy < ty || fy === ty && fm <= tm) {
      const info = this.get_month_dates_nep(fy, fm);
      if (info) result.push(info);
      fm++;
      if (fm > 12) {
        fm = 1;
        fy++;
      }
    }
    return result;
  }
  get_months_dates_eng(fromDate, toDate) {
    const months = this.get_months_dates_nep(fromDate, toDate);
    const result = [];
    for (const month of months) {
      const [sy, sm, sd] = month.start_date.split("-").map(Number);
      const [ey, em, ed] = month.end_date.split("-").map(Number);
      const engStart = this.nep_to_eng(sy, sm, sd);
      const engEnd = this.nep_to_eng(ey, em, ed);
      if (engStart && engEnd) {
        result.push({
          start_date: fmt(engStart.year, engStart.month, engStart.date),
          end_date: fmt(engEnd.year, engEnd.month, engEnd.date)
        });
      }
    }
    return result;
  }
  // ── range with pointed date ─────────────────────────────────────────
  get_bs_month_range_with_point(baseBsDate, days) {
    const [y, m, d] = baseBsDate.split("-").map(Number);
    const baseEng = this.nep_to_eng(y, m, d);
    if (!baseEng) return [];
    const dt = new Date(Date.UTC(baseEng.year, baseEng.month - 1, baseEng.date));
    dt.setUTCDate(dt.getUTCDate() + days);
    const offsetBs = this.eng_to_nep(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
    if (!offsetBs) return [];
    let startBs, endBs;
    if (days >= 0) {
      startBs = { year: y, month: m, date: d };
      endBs = offsetBs;
    } else {
      startBs = offsetBs;
      endBs = { year: y, month: m, date: d };
    }
    let fy = startBs.year;
    let fm = startBs.month;
    const ty = endBs.year;
    const tm = endBs.month;
    const result = [];
    while (fy < ty || fy === ty && fm <= tm) {
      const info = this.get_month_dates_nep(fy, fm);
      if (info) {
        const isStartMonth = fy === startBs.year && fm === startBs.month;
        const isEndMonth = fy === endBs.year && fm === endBs.month;
        let pointed;
        if (isStartMonth) pointed = startBs.date;
        else if (isEndMonth) pointed = endBs.date;
        else pointed = null;
        result.push({
          year: fy,
          month: fm,
          start_date: info.start_date,
          end_date: info.end_date,
          days: info.days,
          pointed_date: pointed
        });
      }
      fm++;
      if (fm > 12) {
        fm = 1;
        fy++;
      }
    }
    return result;
  }
  get_bs_month_range_excluding_partial(baseBsDate, days) {
    const all = this.get_bs_months_touched(baseBsDate, days);
    const [baseY, baseM] = baseBsDate.split("-").map(Number);
    return all.filter((month) => !(month.year === baseY && month.month === baseM));
  }
  get_bs_months_touched(baseBsDate, days) {
    const [y, m, d] = baseBsDate.split("-").map(Number);
    const baseEng = this.nep_to_eng(y, m, d);
    if (!baseEng) return [];
    const dt = new Date(Date.UTC(baseEng.year, baseEng.month - 1, baseEng.date));
    dt.setUTCDate(dt.getUTCDate() + days);
    const offsetBs = this.eng_to_nep(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
    if (!offsetBs) return [];
    let startBs, endBs;
    if (days >= 0) {
      startBs = { year: y, month: m, date: d };
      endBs = offsetBs;
    } else {
      startBs = offsetBs;
      endBs = { year: y, month: m, date: d };
    }
    let fy = startBs.year;
    let fm = startBs.month;
    const ty = endBs.year;
    const tm = endBs.month;
    const result = [];
    while (fy < ty || fy === ty && fm <= tm) {
      const info = this.get_month_dates_nep(fy, fm);
      if (info) {
        const isStartMonth = fy === startBs.year && fm === startBs.month;
        const isEndMonth = fy === endBs.year && fm === endBs.month;
        const rangeStartDay = isStartMonth ? startBs.date : 1;
        const rangeEndDay = isEndMonth ? endBs.date : info.days;
        result.push({
          year: fy,
          month: fm,
          month_name: this.#getNepaliMonth(fm),
          start_date: info.start_date,
          end_date: info.end_date,
          days: info.days,
          range_start: fmt(fy, fm, rangeStartDay),
          range_end: fmt(fy, fm, rangeEndDay),
          range_days: rangeEndDay - rangeStartDay + 1,
          is_partial: isStartMonth || isEndMonth
        });
      }
      fm++;
      if (fm > 12) {
        fm = 1;
        fy++;
      }
    }
    return result;
  }
  // ── fiscal year helpers (Nepal FY: Shrawan -> Ashad) ────────────────
  days_fiscal_wise(fromYear, toYear) {
    const result = {};
    for (const row of this.#bs) {
      const year = row[0];
      const months = row.slice(1);
      if (year < fromYear || year > toYear) continue;
      if (year === fromYear && year === toYear) {
        result[year] = [...months.slice(3), ...months.slice(0, 3)];
      } else if (year === fromYear) {
        result[year] = months.slice(3);
      } else if (year === toYear) {
        result[year] = months.slice(0, 3);
      } else {
        result[year] = months;
      }
    }
    return result;
  }
  #buildFyInfo(startBsYear) {
    const endBsYear = startBsYear + 1;
    const bsStart = fmt(startBsYear, 4, 1);
    const idx = this.#getBsIndex(endBsYear);
    if (idx === false) {
      this.debug_info = `BS year ${endBsYear} not found in table.`;
      return false;
    }
    const lastDayAshad = this.#bs[idx][3];
    const bsEnd = fmt(endBsYear, 3, lastDayAshad);
    const adStartArr = this.nep_to_eng(startBsYear, 4, 1);
    const adEndArr = this.nep_to_eng(endBsYear, 3, lastDayAshad);
    if (!adStartArr || !adEndArr) {
      this.debug_info = "AD conversion failed for fiscal year boundaries.";
      return false;
    }
    const adStart = fmt(adStartArr.year, adStartArr.month, adStartArr.date);
    const adEnd = fmt(adEndArr.year, adEndArr.month, adEndArr.date);
    const dtStart = Date.UTC(adStartArr.year, adStartArr.month - 1, adStartArr.date);
    const dtEnd = Date.UTC(adEndArr.year, adEndArr.month - 1, adEndArr.date);
    const totalDays = Math.round((dtEnd - dtStart) / 864e5) + 1;
    return {
      fy_label: `${startBsYear}/${String(endBsYear).slice(2)}`,
      bs_start_date: bsStart,
      bs_end_date: bsEnd,
      ad_start_date: adStart,
      ad_end_date: adEnd,
      total_days: totalDays
    };
  }
  get_fiscal_year(bsDate, offset = 0) {
    const [y, m] = bsDate.split("-").map(Number);
    let fyStartYear = m <= 3 ? y - 1 : y;
    fyStartYear += offset;
    return this.#buildFyInfo(fyStartYear);
  }
  get_fiscal_year_by_days(bsDate, days) {
    const shiftedBs = this.get_date_nep(bsDate, days);
    if (!shiftedBs) {
      this.debug_info = "Day offset produced an out-of-range BS date.";
      return false;
    }
    return this.get_fiscal_year(shiftedBs, 0);
  }
  /** Convenience wrapper: fiscal year containing today's date. */
  get_current_fiscal_year(offset = 0) {
    const today = /* @__PURE__ */ new Date();
    const todayBs = this.eng_to_nep(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    if (!todayBs) {
      this.debug_info = "Could not convert today's date to BS.";
      return false;
    }
    const todayBsDate = fmt(todayBs.year, todayBs.month, todayBs.date);
    return this.get_fiscal_year(todayBsDate, offset);
  }
  get_nth_month_end_date(baseBsDate, months) {
    let [y, m] = baseBsDate.split("-").map(Number);
    const direction = months > 0 ? 1 : -1;
    const steps = Math.abs(months);
    m += direction;
    if (m > 12) {
      m = 1;
      y++;
    }
    if (m < 1) {
      m = 12;
      y--;
    }
    for (let i = 1; i < steps; i++) {
      m += direction;
      if (m > 12) {
        m = 1;
        y++;
      }
      if (m < 1) {
        m = 12;
        y--;
      }
    }
    const info = this.get_month_dates_nep(y, m);
    if (!info) {
      this.debug_info = `BS year ${y} month ${m} is outside the supported table.`;
      return false;
    }
    return info.end_date;
  }
  /** Today's date as a BS 'YYYY-MM-DD' string. */
  today_nep() {
    const t = /* @__PURE__ */ new Date();
    const bs = this.eng_to_nep(t.getFullYear(), t.getMonth() + 1, t.getDate());
    return bs ? fmt(bs.year, bs.month, bs.date) : false;
  }
  // ═════════════════════════════════════════════════════════════════
  //  CALENDAR GRID BUILDERS
  //  Give a UI everything it needs to render one month — every day,
  //  in both calendars, with weekday/today/holiday flags — so a
  //  developer never has to loop and call eng_to_nep/nep_to_eng
  //  themselves just to build a calendar page.
  // ═════════════════════════════════════════════════════════════════
  #parseYearMonthArgs(yearOrStr, monthOrOptions, maybeOptions) {
    if (typeof yearOrStr === "string") {
      const [y, m] = yearOrStr.split("-").map(Number);
      return { year: y, month: m, options: monthOrOptions || {} };
    }
    return { year: yearOrStr, month: monthOrOptions, options: maybeOptions || {} };
  }
  #buildHolidayMap(holidays) {
    const map = /* @__PURE__ */ new Map();
    if (Array.isArray(holidays)) {
      for (const h of holidays) if (h && h.date) map.set(h.date, h.label || "");
    }
    return map;
  }
  /**
   * Full calendar info for one BS month — every day, with its AD equivalent,
   * weekday, and (optionally) holiday/today flags. Everything a calendar UI
   * needs to render a month grid, in one call.
   *
   * Usage:
   *   cal.get_calendar_month_nep('2083-03')
   *   cal.get_calendar_month_nep(2083, 3)
   *   cal.get_calendar_month_nep(2083, 3, { holidays: [{ date: '2083-03-01', label: 'New Year' }] })
   *
   * @param {number|string} yearOrStr  BS year, or a 'YYYY-MM' BS string
   * @param {number|object} [monthOrOptions]  BS month (1-12), or the options object if the first arg was a string
   * @param {object} [maybeOptions]
   * @param {Array<{date:string,label?:string}>} [maybeOptions.holidays]  BS 'YYYY-MM-DD' dates
   * @returns {object|false}
   */
  get_calendar_month_nep(yearOrStr, monthOrOptions, maybeOptions) {
    const { year, month, options } = this.#parseYearMonthArgs(yearOrStr, monthOrOptions, maybeOptions);
    const info = this.get_month_dates_nep(year, month);
    if (!info) return false;
    const holidayMap = this.#buildHolidayMap(options.holidays);
    const todayBsStr = this.today_nep();
    const firstAd = this.nep_to_eng(year, month, 1);
    if (!firstAd) return false;
    const startWeekday = firstAd.num_day;
    const firstAdUtc = Date.UTC(firstAd.year, firstAd.month - 1, firstAd.date);
    const days = [];
    for (let d = 1; d <= info.days; d++) {
      const weekday = (startWeekday - 1 + (d - 1)) % 7 + 1;
      const adDt = new Date(firstAdUtc + (d - 1) * 864e5);
      const adYear = adDt.getUTCFullYear();
      const adMonth = adDt.getUTCMonth() + 1;
      const adDay = adDt.getUTCDate();
      const bsDateStr = fmt(year, month, d);
      days.push({
        bs_date: bsDateStr,
        bs_year: year,
        bs_month: month,
        bs_day: d,
        ad_date: fmt(adYear, adMonth, adDay),
        ad_year: adYear,
        ad_month: adMonth,
        ad_day: adDay,
        weekday,
        weekday_name: WEEKDAYS[weekday],
        is_saturday: weekday === 7,
        is_today: bsDateStr === todayBsStr,
        is_holiday: holidayMap.has(bsDateStr),
        holiday_label: holidayMap.get(bsDateStr) || null
      });
    }
    const adBoundaries = this.get_month_dates_eng(year, month);
    return {
      system: "bs",
      year,
      month,
      month_name: NEPALI_MONTHS[month],
      month_name_ne: NEPALI_MONTHS_NE[month],
      days_in_month: info.days,
      start_date_bs: info.start_date,
      end_date_bs: info.end_date,
      start_date_ad: adBoundaries ? adBoundaries.start_date : null,
      end_date_ad: adBoundaries ? adBoundaries.end_date : null,
      start_weekday: startWeekday,
      leading_blanks: startWeekday - 1,
      days
    };
  }
  /**
   * Full calendar info for one AD month — every day, with its BS equivalent,
   * weekday, and (optionally) holiday/today flags. Mirror of
   * get_calendar_month_nep() but driven by the Gregorian month instead.
   *
   * Usage:
   *   cal.get_calendar_month_eng('2026-06')
   *   cal.get_calendar_month_eng(2026, 6)
   *   cal.get_calendar_month_eng(2026, 6, { holidays: [{ date: '2083-02-15', label: 'New Year' }] })
   *
   * Note: holiday dates are always given as BS 'YYYY-MM-DD' strings, same as
   * get_calendar_month_nep(), since that's the canonical holiday calendar.
   *
   * @param {number|string} yearOrStr  AD year, or a 'YYYY-MM' AD string
   * @param {number|object} [monthOrOptions]  AD month (1-12), or the options object if the first arg was a string
   * @param {object} [maybeOptions]
   * @param {Array<{date:string,label?:string}>} [maybeOptions.holidays]  BS 'YYYY-MM-DD' dates
   * @returns {object|false}
   */
  get_calendar_month_eng(yearOrStr, monthOrOptions, maybeOptions) {
    const { year, month, options } = this.#parseYearMonthArgs(yearOrStr, monthOrOptions, maybeOptions);
    if (!this.#isRangeEng(year, month, 1)) return false;
    const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
    const holidayMap = this.#buildHolidayMap(options.holidays);
    const todayBsStr = this.today_nep();
    const firstBs = this.eng_to_nep(year, month, 1);
    if (!firstBs) return false;
    const startWeekday = firstBs.num_day;
    let by = firstBs.year, bm = firstBs.month, bd = firstBs.date;
    let bsMonthInfo = this.get_month_dates_nep(by, bm);
    const days = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const weekday = (startWeekday - 1 + (d - 1)) % 7 + 1;
      const bsDateStr = fmt(by, bm, bd);
      const adDateStr = fmt(year, month, d);
      days.push({
        ad_date: adDateStr,
        ad_year: year,
        ad_month: month,
        ad_day: d,
        bs_date: bsDateStr,
        bs_year: by,
        bs_month: bm,
        bs_day: bd,
        weekday,
        weekday_name: WEEKDAYS[weekday],
        is_saturday: weekday === 7,
        is_today: bsDateStr === todayBsStr,
        is_holiday: holidayMap.has(bsDateStr),
        holiday_label: holidayMap.get(bsDateStr) || null
      });
      bd++;
      if (bd > bsMonthInfo.days) {
        bd = 1;
        bm++;
        if (bm > 12) {
          bm = 1;
          by++;
        }
        bsMonthInfo = this.get_month_dates_nep(by, bm);
      }
    }
    const lastBs = this.eng_to_nep(year, month, daysInMonth);
    return {
      system: "ad",
      year,
      month,
      month_name: ENGLISH_MONTHS_FULL[month],
      month_name_short: ENGLISH_MONTHS[month],
      days_in_month: daysInMonth,
      start_date_ad: fmt(year, month, 1),
      end_date_ad: fmt(year, month, daysInMonth),
      start_date_bs: fmt(firstBs.year, firstBs.month, firstBs.date),
      end_date_bs: lastBs ? fmt(lastBs.year, lastBs.month, lastBs.date) : null,
      start_weekday: startWeekday,
      leading_blanks: startWeekday - 1,
      days
    };
  }
  // ═════════════════════════════════════════════════════════════════
  //  ENGLISH-FIRST HELPERS
  //  Convenience methods that mirror the Nepali-centric ones above,
  //  but accept AD dates directly instead of requiring BS input.
  // ═════════════════════════════════════════════════════════════════
  /** Today's date as an AD 'YYYY-MM-DD' string. */
  today_eng() {
    const t = /* @__PURE__ */ new Date();
    return fmt(t.getFullYear(), t.getMonth() + 1, t.getDate());
  }
  /**
   * Offset an AD date by N days (positive = future, negative = past).
   * @param {string} date AD 'YYYY-MM-DD'
   * @param {number} days
   * @returns {string|false} AD 'YYYY-MM-DD'
   */
  get_date_eng(date, days) {
    const [y, m, d] = date.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() + days);
    return fmt(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
  }
  /**
   * Month boundaries starting from an AD year/month.
   * Unlike get_month_dates_eng() which takes BS year/month, this accepts AD directly.
   * @param {number} year AD year
   * @param {number} month AD month (1-12)
   * @returns {{ start_date: string, end_date: string, days: number }|false}
   */
  get_month_dates_eng_from_ad(year, month) {
    if (!this.#isRangeEng(year, month, 1)) return false;
    const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();
    return {
      start_date: fmt(year, month, 1),
      end_date: fmt(year, month, daysInMonth),
      days: daysInMonth
    };
  }
  // ═════════════════════════════════════════════════════════════════
  //  DATE VALIDATION
  // ═════════════════════════════════════════════════════════════════
  /**
   * Check if a string is a valid BS date within the supported range.
   * @param {string} date 'YYYY-MM-DD'
   * @returns {boolean}
   */
  is_valid_bs_date(date) {
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const [y, m, d] = date.split("-").map(Number);
    return this.#isRangeNep(y, m, d);
  }
  /**
   * Check if a string is a valid AD date within the supported range.
   * @param {string} date 'YYYY-MM-DD'
   * @returns {boolean}
   */
  is_valid_ad_date(date) {
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const [y, m, d] = date.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) return false;
    return this.#isRangeEng(y, m, d);
  }
  // ═════════════════════════════════════════════════════════════════
  //  DATE FORMATTING
  // ═════════════════════════════════════════════════════════════════
  #applyFormat(year, month, date, formatStr, system) {
    const months = system === "bs" ? NEPALI_MONTHS : ENGLISH_MONTHS_FULL;
    return formatStr.replace(/YYYY/g, String(year)).replace(/YY/g, String(year).slice(-2)).replace(/MMMM/g, months[month] || "").replace(/MM/g, pad2(month)).replace(/M/g, String(month)).replace(/DD/g, pad2(date)).replace(/D/g, String(date));
  }
  /**
   * Format a BS date string using format tokens (YYYY, YY, MMMM, MM, M, DD, D).
   * @param {string} date BS 'YYYY-MM-DD'
   * @param {string} format e.g. 'DD MMMM YYYY'
   * @returns {string|false}
   */
  format_bs(date, format) {
    const [y, m, d] = date.split("-").map(Number);
    if (!this.#isRangeNep(y, m, d)) return false;
    return this.#applyFormat(y, m, d, format, "bs");
  }
  /**
   * Format an AD date string using format tokens.
   * @param {string} date AD 'YYYY-MM-DD'
   * @param {string} format e.g. 'DD MMMM YYYY'
   * @returns {string|false}
   */
  format_ad(date, format) {
    const [y, m, d] = date.split("-").map(Number);
    if (!this.#isRangeEng(y, m, d)) return false;
    return this.#applyFormat(y, m, d, format, "ad");
  }
};
var nepali_calendar_default = DrpNepaliCalendar;
//# sourceMappingURL=drp-core.cjs.js.map

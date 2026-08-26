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

// src/index.js
var src_exports = {};
__export(src_exports, {
  DrpDatePicker: () => DrpDatePicker,
  DrpNepaliCalendar: () => DrpNepaliCalendar,
  registerDrpDatePicker: () => registerDrpDatePicker
});
module.exports = __toCommonJS(src_exports);

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
var WEEKDAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var WEEKDAYS_SHORT_NE = ["\u0906", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u092C\u093F", "\u0936\u0941", "\u0936"];
var NEPALI_DIGITS = ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"];

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

// src/components/nepali-datepicker.js
var pad22 = (n) => String(n).padStart(2, "0");
var fmt2 = (y, m, d) => `${String(y).padStart(4, "0")}-${pad22(m)}-${pad22(d)}`;
var DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
var toNepaliDigits = (value) => String(value).replace(/[0-9]/g, (d) => NEPALI_DIGITS[Number(d)]);
var AD_YEAR_MIN = 1944;
var AD_YEAR_MAX = 2041;
var BS_YEAR_MIN = 2e3;
var BS_YEAR_MAX = 2098;
var STYLES = `
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
`;
var TPL = document.createElement("template");
TPL.innerHTML = `
<style>${STYLES}</style>
<div class="field" part="field">
  <input part="input" type="text" autocomplete="off" />
  <button class="trigger" part="trigger" type="button" aria-haspopup="dialog" aria-label="Open calendar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
  </button>
</div>
<div class="panel" part="panel" role="dialog" aria-modal="true" aria-label="Date picker"></div>
<div class="sr-only" role="status" aria-live="polite" aria-atomic="true"></div>
`;
var DrpDatePicker = class extends HTMLElement {
  static formAssociated = true;
  static get observedAttributes() {
    return ["value", "min", "max", "placeholder", "disabled", "digits", "mark-saturday", "inline", "type", "required", "first-day-of-week", "format"];
  }
  #cal = new DrpNepaliCalendar();
  #holidays = [];
  #disabledDates = [];
  #selected = null;
  #view = null;
  #mode = "days";
  #digits = "en";
  #type = "bs";
  #open = false;
  #outsideHandler = null;
  #scrollHandler = null;
  #resizeHandler = null;
  #keydownHandler = null;
  #today = null;
  #todayAd = null;
  #internals = null;
  #firstDayOfWeek = 0;
  #format = null;
  #focusedDayKey = null;
  #dayCells = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(TPL.content.cloneNode(true));
    this.$input = this.shadowRoot.querySelector("input");
    this.$trigger = this.shadowRoot.querySelector(".trigger");
    this.$panel = this.shadowRoot.querySelector(".panel");
    this.$announcer = this.shadowRoot.querySelector('[role="status"]');
    const internals = typeof this.attachInternals === "function" ? this.attachInternals() : null;
    this.#internals = internals && typeof internals.setFormValue === "function" ? internals : null;
  }
  connectedCallback() {
    this.#digits = this.getAttribute("digits") === "ne" ? "ne" : "en";
    this.#type = this.getAttribute("type") === "ad" ? "ad" : "bs";
    this.#firstDayOfWeek = Math.max(0, Math.min(6, Number(this.getAttribute("first-day-of-week")) || 0));
    this.#format = this.getAttribute("format") || null;
    const now = /* @__PURE__ */ new Date();
    const today = this.#cal.eng_to_nep(now.getFullYear(), now.getMonth() + 1, now.getDate());
    this.#today = { year: today.year, month: today.month, date: today.date };
    this.#todayAd = { year: now.getFullYear(), month: now.getMonth() + 1, date: now.getDate() };
    this.#selected = this.#parseValueAttribute(this.getAttribute("value"));
    this.#view = this.#deriveView();
    this.$trigger.addEventListener("click", () => this.toggle());
    this.$input.addEventListener("click", () => this.toggle());
    this.$input.addEventListener("focus", () => this.$field?.classList.remove("is-error"));
    this.$input.addEventListener("keydown", (e) => this.#onInputKeydown(e));
    this.$input.addEventListener("blur", () => this.#commitInputValue());
    this.shadowRoot.addEventListener("keydown", (e) => this.#onKeydown(e));
    this.$panel.addEventListener("click", (e) => this.#onPanelClick(e));
    this.#renderInputValue();
    this.#render();
    this.#syncFormState();
    if (this.hasAttribute("inline")) this.#open = true;
  }
  disconnectedCallback() {
    this.#removeOutsideListener();
  }
  formResetCallback() {
    this.clear();
  }
  formDisabledCallback(disabled) {
    this.toggleAttribute("disabled", disabled);
  }
  attributeChangedCallback(name) {
    if (!this.#view) return;
    if (name === "digits") this.#digits = this.getAttribute("digits") === "ne" ? "ne" : "en";
    if (name === "first-day-of-week") this.#firstDayOfWeek = Math.max(0, Math.min(6, Number(this.getAttribute("first-day-of-week")) || 0));
    if (name === "format") this.#format = this.getAttribute("format") || null;
    if (name === "type") {
      this.#type = this.getAttribute("type") === "ad" ? "ad" : "bs";
      this.#view = this.#deriveView();
      this.#renderInputValue();
    }
    if (name === "value") {
      this.#selected = this.#parseValueAttribute(this.getAttribute("value"));
      this.#view = this.#deriveView();
      this.#renderInputValue();
    }
    if (name === "value" || name === "required" || name === "disabled") {
      this.#syncFormState();
    }
    this.#render();
  }
  // ── public API ─────────────────────────────────────────────────────
  get holidays() {
    return this.#holidays;
  }
  set holidays(list) {
    this.#holidays = Array.isArray(list) ? list : [];
    this.#render();
  }
  /** Array of { date: 'YYYY-MM-DD' } to disable. Date format matches the primary type (BS/AD). */
  get disabledDates() {
    return this.#disabledDates;
  }
  set disabledDates(list) {
    this.#disabledDates = Array.isArray(list) ? list : [];
    this.#render();
  }
  get type() {
    return this.#type;
  }
  set type(t) {
    this.setAttribute("type", t === "ad" ? "ad" : "bs");
  }
  get value() {
    return this.#type === "ad" ? this.valueAD : this.valueBS;
  }
  set value(v) {
    if (v) this.setAttribute("value", v);
    else this.removeAttribute("value");
  }
  get valueBS() {
    return this.#selected ? fmt2(this.#selected.year, this.#selected.month, this.#selected.date) : "";
  }
  get valueAD() {
    const ad = this.getADDate();
    return ad ? fmt2(ad.year, ad.month, ad.date) : "";
  }
  get calendar() {
    return this.#cal;
  }
  get name() {
    return this.getAttribute("name") || "";
  }
  set name(v) {
    this.setAttribute("name", v);
  }
  get required() {
    return this.hasAttribute("required");
  }
  set required(v) {
    this.toggleAttribute("required", !!v);
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(v) {
    this.toggleAttribute("disabled", !!v);
  }
  /** 0=Sunday (default), 1=Monday … 6=Saturday */
  get firstDayOfWeek() {
    return this.#firstDayOfWeek;
  }
  set firstDayOfWeek(v) {
    this.setAttribute("first-day-of-week", String(Math.max(0, Math.min(6, Number(v) || 0))));
  }
  /** Format string e.g. "YYYY-MM-DD", "DD Month YYYY". Tokens: YYYY, YY, MMMM, MM, M, DD, D */
  get format() {
    return this.#format;
  }
  set format(v) {
    if (v) this.setAttribute("format", v);
    else this.removeAttribute("format");
  }
  get validity() {
    return this.#internals ? this.#internals.validity : void 0;
  }
  get validationMessage() {
    return this.#internals ? this.#internals.validationMessage : "";
  }
  get willValidate() {
    return this.#internals ? this.#internals.willValidate : false;
  }
  checkValidity() {
    return this.#internals ? this.#internals.checkValidity() : true;
  }
  reportValidity() {
    return this.#internals ? this.#internals.reportValidity() : true;
  }
  #syncFormState() {
    if (!this.#internals) return;
    const val = this.value;
    this.#internals.setFormValue(val || null);
    if (this.hasAttribute("required") && !val) {
      this.#internals.setValidity({ valueMissing: true }, "Please select a date.", this.$input);
    } else {
      this.#internals.setValidity({});
    }
  }
  getADDate() {
    if (!this.#selected) return null;
    return this.#cal.nep_to_eng(this.#selected.year, this.#selected.month, this.#selected.date);
  }
  open() {
    if (this.hasAttribute("disabled") || this.#open) return;
    this.#open = true;
    this.#mode = "days";
    this.$trigger.setAttribute("aria-expanded", "true");
    this.#render();
    this.#focusDayCell();
    this.#addOutsideListener();
    this.dispatchEvent(new CustomEvent("open"));
  }
  close() {
    if (this.hasAttribute("inline") || !this.#open) return;
    this.#open = false;
    this.$trigger.setAttribute("aria-expanded", "false");
    this.#render();
    this.#removeOutsideListener();
    this.$trigger.focus();
    this.dispatchEvent(new CustomEvent("close"));
  }
  toggle() {
    if (this.hasAttribute("disabled")) return;
    this.#open ? this.close() : this.open();
  }
  clear() {
    this.#selected = null;
    this.removeAttribute("value");
    this.#renderInputValue();
    this.#render();
    this.#emitChange();
    this.#announce("Selection cleared");
  }
  today() {
    this.#selected = { ...this.#today };
    this.#view = this.#deriveView();
    this.setAttribute("value", this.value);
  }
  // ── internal: value / view helpers ──────────────────────────────────
  #parseValueAttribute(v) {
    if (!v || !DATE_RE.test(v)) return null;
    const [a, b, c] = v.split("-").map(Number);
    if (this.#type === "ad") {
      const bs = this.#cal.eng_to_nep(a, b, c);
      return bs ? { year: bs.year, month: bs.month, date: bs.date } : null;
    }
    return this.#cal.nep_to_eng(a, b, c) ? { year: a, month: b, date: c } : null;
  }
  #deriveView() {
    if (this.#type === "ad") {
      if (this.#selected) {
        const ad = this.#cal.nep_to_eng(this.#selected.year, this.#selected.month, this.#selected.date);
        if (ad) return { year: ad.year, month: ad.month };
      }
      return { year: this.#todayAd.year, month: this.#todayAd.month };
    }
    if (this.#selected) return { year: this.#selected.year, month: this.#selected.month };
    return { year: this.#today.year, month: this.#today.month };
  }
  #digitize(n) {
    return this.#digits === "ne" ? toNepaliDigits(n) : String(n);
  }
  #$field() {
    return this.shadowRoot.querySelector(".field");
  }
  #onInputKeydown(e) {
    if (e.key === "Enter") {
      this.#commitInputValue();
      if (this.#open) this.toggle();
    }
    if (e.key === "Escape") {
      this.close();
    }
  }
  #commitInputValue() {
    const raw = this.$input.value.trim();
    if (!raw) {
      this.$field()?.classList.remove("is-error");
      return;
    }
    const parsed = this.#parseDateString(raw);
    if (parsed) {
      this.#selected = parsed;
      this.#view = this.#deriveView();
      this.setAttribute("value", this.value);
      this.#renderInputValue();
      this.#render();
      this.#emitChange();
      this.$field()?.classList.remove("is-error");
      this.#announce(`Date set to ${this.value}`);
    } else {
      this.$field()?.classList.add("is-error");
    }
  }
  #parseDateString(s) {
    if (DATE_RE.test(s)) {
      const [a, b, c] = s.split("-").map(Number);
      if (this.#type === "ad") {
        const bs = this.#cal.eng_to_nep(a, b, c);
        if (bs && bs.year >= BS_YEAR_MIN && bs.year <= BS_YEAR_MAX) return { year: bs.year, month: bs.month, date: bs.date };
      } else {
        if (this.#cal.nep_to_eng(a, b, c)) return { year: a, month: b, date: c };
      }
      return null;
    }
    const monthMap = {};
    NEPALI_MONTHS.slice(1).forEach((name, i) => {
      monthMap[name.toLowerCase()] = i + 1;
    });
    ENGLISH_MONTHS_FULL.slice(1).forEach((name, i) => {
      monthMap[name.toLowerCase()] = i + 1;
    });
    ENGLISH_MONTHS.slice(1).forEach((name, i) => {
      monthMap[name.toLowerCase()] = i + 1;
    });
    const m = s.match(/^(\d{1,2})\s+([A-Za-zÀ-ÿ]+)\s+(\d{4})$/);
    if (m) {
      const day = Number(m[1]);
      const month = monthMap[m[2].toLowerCase()];
      const year = Number(m[3]);
      if (!month || day < 1 || day > 32) return null;
      if (year >= BS_YEAR_MIN && year <= BS_YEAR_MAX && month >= 1 && month <= 12) {
        if (this.#cal.nep_to_eng(year, month, day)) return { year, month, date: day };
      }
      if (year >= AD_YEAR_MIN && year <= AD_YEAR_MAX && month >= 1 && month <= 12) {
        const bs = this.#cal.eng_to_nep(year, month, day);
        if (bs && bs.year >= BS_YEAR_MIN && bs.year <= BS_YEAR_MAX) return { year: bs.year, month: bs.month, date: bs.date };
      }
    }
    return null;
  }
  #onPanelClick(e) {
    const target = e.target;
    const nav = target.closest("[data-nav]");
    if (nav) {
      this.#shiftMonth(Number(nav.dataset.nav));
      return;
    }
    const back = target.closest("[data-back]");
    if (back) {
      this.#mode = this.#mode === "years" ? "months" : "days";
      this.#render();
      return;
    }
    const openMonths = target.closest("[data-open-months]");
    if (openMonths) {
      this.#mode = "months";
      this.#render();
      return;
    }
    const openYears = target.closest("[data-open-years]");
    if (openYears) {
      this.#mode = "years";
      this.#render();
      return;
    }
    const clearBtn = target.closest("[data-clear]");
    if (clearBtn) {
      this.clear();
      return;
    }
    const todayBtn = target.closest("[data-today]");
    if (todayBtn) {
      this.today();
      this.#renderInputValue();
      this.#render();
      this.#emitChange();
      this.close();
      return;
    }
    const digitsBtn = target.closest("[data-digits]");
    if (digitsBtn) {
      this.#digits = this.#digits === "ne" ? "en" : "ne";
      this.#renderInputValue();
      this.#render();
      return;
    }
    const monthBtn = target.closest("[data-month]");
    if (monthBtn) {
      this.#view = { year: this.#view.year, month: Number(monthBtn.dataset.month) };
      this.#focusedDayKey = null;
      this.#mode = "days";
      this.#render();
      return;
    }
    const yearBtn = target.closest("[data-year]");
    if (yearBtn) {
      this.#view = { year: Number(yearBtn.dataset.year), month: this.#view.month };
      this.#focusedDayKey = null;
      this.#mode = "months";
      this.#render();
      return;
    }
    const dayBtn = target.closest(".day[data-key]");
    if (dayBtn && !dayBtn.disabled) {
      const idx = Number(dayBtn.dataset.index);
      if (!isNaN(idx) && this.#dayCells && this.#dayCells[idx]) {
        this.#dayCells[idx].onSelect();
        this.setAttribute("value", this.value);
        this.#renderInputValue();
        this.#render();
        this.#emitChange();
        this.#announce(`Selected ${this.value}`);
        if (!this.hasAttribute("inline")) this.close();
      }
    }
  }
  #onKeydown(e) {
    if (e.key === "Escape") {
      this.close();
      return;
    }
    if (!this.#open || this.hasAttribute("inline")) return;
    if (this.#mode === "days" && this.#isGridKey(e.key)) {
      e.preventDefault();
      this.#handleGridKey(e.key);
      return;
    }
    if (e.key === "Tab") {
      this.#handleTabTrap(e);
    }
  }
  #isGridKey(key) {
    return ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "Enter", " "].includes(key);
  }
  #handleGridKey(key) {
    if (key === "Enter" || key === " ") {
      const focused = this.shadowRoot.querySelector(".day.is-focus");
      if (focused) {
        focused.click();
      }
      return;
    }
    const dayEls = [...this.shadowRoot.querySelectorAll(".day[data-key]")];
    if (dayEls.length === 0) return;
    const cols = 7;
    let idx = -1;
    if (this.#focusedDayKey !== null) {
      idx = dayEls.findIndex((el) => el.dataset.key === this.#focusedDayKey);
    }
    if (idx === -1) {
      idx = dayEls.findIndex((el) => !el.disabled);
    }
    if (idx === -1) idx = 0;
    let nextIdx = idx;
    switch (key) {
      case "ArrowLeft":
        nextIdx = idx - 1;
        if (nextIdx < 0) nextIdx = dayEls.length - 1;
        break;
      case "ArrowRight":
        nextIdx = idx + 1;
        if (nextIdx >= dayEls.length) nextIdx = 0;
        break;
      case "ArrowUp":
        nextIdx = idx - cols;
        if (nextIdx < 0) nextIdx = idx;
        break;
      case "ArrowDown":
        nextIdx = idx + cols;
        if (nextIdx >= dayEls.length) nextIdx = idx;
        break;
      case "Home":
        nextIdx = 0;
        break;
      case "End":
        nextIdx = dayEls.length - 1;
        break;
      case "PageUp":
        this.#shiftMonth(-1);
        return;
      case "PageDown":
        this.#shiftMonth(1);
        return;
    }
    if (nextIdx !== idx) {
      this.#focusDayByIndex(nextIdx, dayEls);
    }
  }
  #focusDayByIndex(index, dayEls) {
    const dayEls_ = dayEls || [...this.shadowRoot.querySelectorAll(".day[data-key]")];
    if (index < 0 || index >= dayEls_.length) return;
    const el = dayEls_[index];
    if (el.disabled) return;
    this.#focusedDayKey = el.dataset.key;
    el.focus();
  }
  #focusDayCell() {
    const dayEls = [...this.shadowRoot.querySelectorAll(".day[data-key]")];
    if (dayEls.length === 0) return;
    let targetIndex = -1;
    if (this.#focusedDayKey !== null) {
      targetIndex = dayEls.findIndex((el2) => el2.dataset.key === this.#focusedDayKey);
    }
    if (targetIndex === -1 && this.#selected) {
      const selKey = this.value;
      targetIndex = dayEls.findIndex((el2) => el2.dataset.key === selKey);
    }
    if (targetIndex === -1) {
      const todayKey = fmt2(this.#today.year, this.#today.month, this.#today.date);
      targetIndex = dayEls.findIndex((el2) => el2.dataset.key === todayKey);
    }
    if (targetIndex === -1) targetIndex = 0;
    const el = dayEls[targetIndex];
    if (el && !el.disabled) {
      this.#focusedDayKey = el.dataset.key;
      this.$panel.querySelector(".is-focus")?.classList.remove("is-focus");
      el.classList.add("is-focus");
    }
  }
  #handleTabTrap(e) {
    const focusable = this.#getPanelFocusables();
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  #getPanelFocusables() {
    if (!this.$panel || !this.#open) return [];
    return [
      ...this.shadowRoot.querySelectorAll(
        ".nav-btn:not([disabled]), .head-title, .day[data-key]:not([disabled]), .foot-btn, .digit-toggle"
      )
    ].filter((el) => el.offsetParent !== null);
  }
  #shiftMonth(delta) {
    if (this.#type === "ad") this.#shiftMonthAD(delta);
    else this.#shiftMonthBS(delta);
  }
  #addOutsideListener() {
    this.#outsideHandler = (e) => {
      if (!e.composedPath().includes(this)) this.close();
    };
    document.addEventListener("mousedown", this.#outsideHandler);
    this.#scrollHandler = () => this.#positionPanel();
    window.addEventListener("scroll", this.#scrollHandler, { passive: true });
    this.#resizeHandler = () => this.#positionPanel();
    window.addEventListener("resize", this.#resizeHandler, { passive: true });
  }
  #removeOutsideListener() {
    if (this.#outsideHandler) document.removeEventListener("mousedown", this.#outsideHandler);
    this.#outsideHandler = null;
    if (this.#scrollHandler) window.removeEventListener("scroll", this.#scrollHandler);
    this.#scrollHandler = null;
    if (this.#resizeHandler) window.removeEventListener("resize", this.#resizeHandler);
    this.#resizeHandler = null;
  }
  #announce(msg) {
    if (this.$announcer) {
      this.$announcer.textContent = "";
      const fn = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout;
      fn(() => {
        this.$announcer.textContent = msg;
      });
    }
  }
  #formatValue(format) {
    if (!this.#selected) return "";
    const isAd = this.#type === "ad";
    const ad = isAd ? this.getADDate() : null;
    const year = isAd ? ad.year : this.#selected.year;
    const month = isAd ? ad.month : this.#selected.month;
    const date = isAd ? ad.date : this.#selected.date;
    const monthName = isAd ? ENGLISH_MONTHS_FULL[month] : NEPALI_MONTHS[month];
    const d = (n) => this.#digitize(n);
    const tokens = {
      YYYY: d(String(year).padStart(4, "0")),
      YY: d(String(year).slice(-2)),
      MMMM: monthName,
      MM: d(pad22(month)),
      M: d(month),
      DD: d(pad22(date)),
      D: d(date)
    };
    return format.replace(/YYYY|YY|MMMM|MM|M|DD|D/g, (m) => tokens[m] || m);
  }
  #renderInputValue() {
    if (!this.#selected) {
      this.$input.value = "";
      this.$input.placeholder = this.getAttribute("placeholder") || (this.#type === "ad" ? "Select date (AD)" : "Select date (BS)");
      return;
    }
    if (this.#format) {
      this.$input.value = this.#formatValue(this.#format);
      return;
    }
    if (this.#type === "ad") {
      const ad = this.getADDate();
      this.$input.value = `${ad.date} ${ENGLISH_MONTHS_FULL[ad.month]} ${ad.year}`;
    } else {
      const { year, month, date } = this.#selected;
      this.$input.value = `${this.#digitize(date)} ${NEPALI_MONTHS[month]} ${this.#digitize(year)}`;
    }
  }
  #emitChange() {
    const ad = this.getADDate();
    this.dispatchEvent(new CustomEvent("change", {
      detail: {
        bs: this.#selected ? { ...this.#selected, formatted: this.valueBS } : null,
        ad: ad ? { year: ad.year, month: ad.month, date: ad.date, formatted: fmt2(ad.year, ad.month, ad.date) } : null
      },
      bubbles: true
    }));
  }
  #isDisabledDate(key) {
    const min = this.getAttribute("min");
    const max = this.getAttribute("max");
    if (min && key < min) return true;
    if (max && key > max) return true;
    if (this.#disabledDates.some((d) => d.date === key)) return true;
    return false;
  }
  #render() {
    this.$panel.toggleAttribute("data-open", this.#open || this.hasAttribute("inline"));
    if (!this.#open && !this.hasAttribute("inline")) return;
    if (this.#mode === "days") {
      this.#renderDays(this.#type);
    } else if (this.#mode === "months") {
      this.#renderMonthPicker();
    } else {
      this.#renderYearPicker();
    }
    this.#positionPanel();
  }
  #positionPanel() {
    if (this.hasAttribute("inline")) return;
    const panelHeight = this.$panel.offsetHeight;
    if (panelHeight === 0) return;
    const hostRect = this.getBoundingClientRect();
    const spaceBelow = window.innerHeight - hostRect.bottom;
    const spaceAbove = hostRect.top;
    const gap = 6;
    if (spaceBelow < panelHeight + gap && spaceAbove >= panelHeight + gap) {
      this.$panel.setAttribute("data-placement", "top");
    } else {
      this.$panel.removeAttribute("data-placement");
    }
  }
  #renderDays(type) {
    const isBs = type === "bs";
    const { year, month } = this.#view;
    const grid = isBs ? this.#cal.get_calendar_month_nep(year, month, { holidays: this.#holidays }) : this.#cal.get_calendar_month_eng(year, month, { holidays: this.#holidays });
    if (!grid) return;
    const markSaturday = this.getAttribute("mark-saturday") !== "false";
    const cells = grid.days.map((d, i) => this.#buildCell({
      index: i,
      key: isBs ? d.bs_date : d.ad_date,
      primaryHtml: isBs ? this.#digitize(d.bs_day) : String(d.ad_day),
      secondaryHtml: isBs ? String(d.ad_day) : this.#digitize(d.bs_day),
      weekday: d.weekday,
      markSaturday,
      isToday: d.is_today,
      isSelected: !!(this.#selected && this.#selected.year === d.bs_year && this.#selected.month === d.bs_month && this.#selected.date === d.bs_day),
      holidayLabel: d.is_holiday ? d.holiday_label : void 0,
      onSelect: () => {
        this.#selected = { year: d.bs_year, month: d.bs_month, date: d.bs_day };
      }
    }));
    const secondaryTitle = isBs ? grid.start_date_ad ? `${this.#adLabel(grid.start_date_ad)} \u2013 ${this.#adLabel(grid.end_date_ad)}` : "" : grid.start_date_bs ? `${this.#bsLabelStr(grid.start_date_bs)} \u2013 ${this.#bsLabelStr(grid.end_date_bs)}` : "";
    this.#renderPanel({
      startWeekday: grid.start_weekday,
      cells,
      primaryTitle: isBs ? `${grid.month_name} ${this.#digitize(year)}` : `${grid.month_name} ${year}`,
      secondaryTitle
    });
  }
  // ── shared cell + panel rendering ───────────────────────────────────
  #buildCell({ index, key, primaryHtml, secondaryHtml, weekday, markSaturday, isToday, isSelected, holidayLabel, onSelect }) {
    const isSaturday = markSaturday && weekday === 7;
    const isHoliday = holidayLabel !== void 0;
    const isDisabled = this.#isDisabledDate(key);
    const isFocused = this.#focusedDayKey === key;
    const cls = ["day"];
    if (isToday) cls.push("is-today");
    if (isSelected) cls.push("is-selected");
    if (isSaturday) cls.push("is-saturday");
    if (isHoliday) cls.push("is-holiday");
    if (isFocused) cls.push("is-focus");
    const title = isHoliday && holidayLabel ? ` title="${holidayLabel.replace(/"/g, "&quot;")}"` : "";
    const primaryLabel = primaryHtml.replace(/<[^>]*>/g, "");
    const secondaryLabel = secondaryHtml.replace(/<[^>]*>/g, "");
    return {
      html: `<button class="${cls.join(" ")}" part="day" role="gridcell" data-key="${key}" data-index="${index}" tabindex="-1" aria-selected="${isSelected}" ${isDisabled ? "disabled" : ""}${title}>
        <span class="primary-num">${primaryHtml}</span>
        <span class="secondary-num">${secondaryHtml}</span>
      </button>`,
      onSelect,
      ariaLabel: `${primaryLabel}, ${secondaryLabel}`
    };
  }
  #renderPanel({ startWeekday, cells, primaryTitle, secondaryTitle }) {
    const offset = (startWeekday - 1 - this.#firstDayOfWeek + 7) % 7;
    let cellsHtml = "";
    for (let i = 0; i < offset; i++) cellsHtml += `<button class="day is-outside" tabindex="-1" aria-hidden="true"></button>`;
    cellsHtml += cells.map((c) => c.html).join("");
    const gridLabel = primaryTitle + (secondaryTitle ? ` \u2013 ${secondaryTitle}` : "");
    const wd = this.#digits === "ne" ? WEEKDAYS_SHORT_NE : WEEKDAYS_SHORT;
    const reordered = [...wd.slice(this.#firstDayOfWeek), ...wd.slice(0, this.#firstDayOfWeek)];
    this.$panel.innerHTML = `
      <div class="panel-head">
        <button class="nav-btn" data-nav="-1" aria-label="Previous month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-months role="heading" aria-level="2" tabindex="0">
          <span class="primary-label">${primaryTitle}</span>
          <span class="secondary-label">${secondaryTitle}</span>
        </div>
        <button class="nav-btn" data-nav="1" aria-label="Next month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div class="weekdays" role="presentation">
        ${reordered.map((w, i) => {
      const isSatIdx = (6 - this.#firstDayOfWeek + 7) % 7;
      return `<span class="${i === isSatIdx ? "sat" : ""}" role="presentation">${w}</span>`;
    }).join("")}
      </div>
      <div class="grid" role="grid" aria-label="${gridLabel.replace(/"/g, "&quot;")}">
        ${cellsHtml}
      </div>
      <div class="panel-foot">
        <button class="foot-btn muted" data-clear type="button">Clear</button>
        <button class="digit-toggle" data-digits ${this.#digits === "ne" ? "data-active" : ""} type="button">${this.#digits === "ne" ? "\u0926\u0947\u0935" : "123"}</button>
        <button class="foot-btn" data-today type="button">Today</button>
      </div>
    `;
    this.#dayCells = cells;
    this.#focusedDayKey = null;
    this.#focusDayCell();
  }
  #adLabel(adDateStr) {
    const [y, m, d] = adDateStr.split("-").map(Number);
    return `${ENGLISH_MONTHS[m]} ${d}, ${y}`;
  }
  #bsLabelStr(bsDateStr) {
    const [y, m, d] = bsDateStr.split("-").map(Number);
    return `${NEPALI_MONTHS[m]} ${d}, ${y}`;
  }
  // ── month / year pickers ─────────────────────────────────────────────
  #renderMonthPicker() {
    const isAd = this.#type === "ad";
    const monthNames = isAd ? ENGLISH_MONTHS_FULL.slice(1) : NEPALI_MONTHS.slice(1);
    this.$panel.innerHTML = `
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-years role="heading" aria-level="2" tabindex="0"><span class="primary-label">${isAd ? this.#view.year : this.#digitize(this.#view.year)}</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="monthpicker" role="listbox" aria-label="Select month">
        ${monthNames.map((name, i) => `<button data-month="${i + 1}" ${this.#view.month === i + 1 ? "data-active" : ""} type="button" role="option" aria-selected="${this.#view.month === i + 1}">${name}</button>`).join("")}
      </div>
    `;
  }
  #renderYearPicker() {
    const isAd = this.#type === "ad";
    const min = isAd ? AD_YEAR_MIN : BS_YEAR_MIN;
    const max = isAd ? AD_YEAR_MAX : BS_YEAR_MAX;
    const years = [];
    for (let y = min; y <= max; y++) years.push(y);
    this.$panel.innerHTML = `
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title"><span class="primary-label">Select year</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="yearpicker" role="listbox" aria-label="Select year">
        ${years.map((y) => `<button data-year="${y}" ${this.#view.year === y ? "data-active" : ""} type="button" role="option" aria-selected="${this.#view.year === y}">${isAd ? y : this.#digitize(y)}</button>`).join("")}
      </div>
    `;
    const active = this.$panel.querySelector("[data-active]");
    if (active) active.scrollIntoView({ block: "center" });
  }
  // ── navigation ────────────────────────────────────────────────────────
  #shiftMonthBS(delta) {
    let { year, month } = this.#view;
    month += delta;
    if (month > 12) {
      month = 1;
      year++;
    }
    if (month < 1) {
      month = 12;
      year--;
    }
    if (year < BS_YEAR_MIN || year > BS_YEAR_MAX) return;
    this.#view = { year, month };
    this.#focusedDayKey = null;
    this.#render();
  }
  #shiftMonthAD(delta) {
    let { year, month } = this.#view;
    month += delta;
    if (month > 12) {
      month = 1;
      year++;
    }
    if (month < 1) {
      month = 12;
      year--;
    }
    if (year < AD_YEAR_MIN || year > AD_YEAR_MAX) return;
    this.#view = { year, month };
    this.#focusedDayKey = null;
    this.#render();
  }
};
function registerDrpDatePicker(tagName = "drp-datepicker") {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, DrpDatePicker);
  }
}

// src/index.js
if (typeof customElements !== "undefined") {
  registerDrpDatePicker();
}
//# sourceMappingURL=drp-datepicker.cjs.js.map

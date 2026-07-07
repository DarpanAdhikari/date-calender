import { BS_DATA, NEPALI_MONTHS, NEPALI_MONTHS_NE, ENGLISH_MONTHS, ENGLISH_MONTHS_FULL, WEEKDAYS } from './bs-data.js';

const pad2 = (n) => String(n).padStart(2, '0');
const fmt = (y, m, d) => `${String(y).padStart(4, '0')}-${pad2(m)}-${pad2(d)}`;

/**
 * @typedef {Object} BsResult
 * @property {number} year
 * @property {number} month
 * @property {number} date
 * @property {string} day       full weekday name
 * @property {string} nmonth    BS month name
 * @property {number} num_day   1=Sun ... 7=Sat
 */

/**
 * @typedef {Object} AdResult
 * @property {number} year
 * @property {number} month
 * @property {number} date
 * @property {string} day       full weekday name
 * @property {string} emonth    AD month abbreviation
 * @property {number} num_day   1=Sun ... 7=Sat
 */

/**
 * BS (Bikram Sambat) <-> AD (Gregorian) date conversion utility.
 * Handles day-by-day calendar walking against the BS_DATA reference table,
 * anchored against known BS/AD equivalence points.
 *
 * Supported ranges:
 *   AD: 1944-04-14 -> ~2033
 *   BS: 2000-01-01 -> 2090-12-xx
 */
export class DrpNepaliCalendar {
  /** Last error/validation message. */
  debug_info = '';

  #bs = BS_DATA;

  // ── internal helpers ────────────────────────────────────────────────

  is_leap_year(year) {
    if (year % 100 === 0) return year % 400 === 0;
    return year % 4 === 0;
  }

  #getNepaliMonth(m) {
    return NEPALI_MONTHS[m] || '';
  }

  #getEnglishMonth(m) {
    return ENGLISH_MONTHS[m] || '';
  }

  #getDayOfWeek(day) {
    return WEEKDAYS[day] || '';
  }

  #isRangeEng(yy, mm, dd) {
    if (yy < 1944 || yy > 2033) {
      this.debug_info = 'AD year out of range. Supported: 1944-2033.';
      return false;
    }
    if (mm < 1 || mm > 12) {
      this.debug_info = 'AD month must be 1-12.';
      return false;
    }
    if (dd < 1 || dd > 31) {
      this.debug_info = 'AD day must be 1-31.';
      return false;
    }
    return true;
  }

  #isRangeNep(yy, mm, dd) {
    if (yy < 2000 || yy > 2090) {
      this.debug_info = 'BS year out of range. Supported: 2000-2090.';
      return false;
    }
    if (mm < 1 || mm > 12) {
      this.debug_info = 'BS month must be 1-12.';
      return false;
    }
    if (dd < 1 || dd > 32) {
      this.debug_info = 'BS day must be 1-32.';
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

    // Anchor: AD 1944-01-01 corresponds to BS 2000-09-17
    const defEyy = 1944;
    const defNyy = 2000;
    const defNmm = 9;
    const defNdd = 16; // 17 - 1 (loop increments before compare)
    let day = 6; // weekday seed

    let totalEDays = 0;
    for (let i = 0; i < yy - defEyy; i++) {
      const src = this.is_leap_year(defEyy + i) ? lmonth : month;
      for (const d of src) totalEDays += d;
    }
    const src = this.is_leap_year(yy) ? lmonth : month;
    for (let i = 0; i < mm - 1; i++) totalEDays += src[i];
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
      if (m > 12) { y++; m = 1; }
      if (j > 12) { j = 1; i++; }

      totalEDays--;
    }

    return {
      year: y,
      month: m,
      date: totalNDays,
      day: this.#getDayOfWeek(day),
      nmonth: this.#getNepaliMonth(m),
      num_day: day,
    };
  }

  /** @param {string} date 'YYYY-MM-DD' AD date @returns {BsResult|false} */
  eng_to_nep_date(date) {
    if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const [y, m, d] = date.split('-').map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) {
      return false; // not a real Gregorian date
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

    // Anchor: BS 2000-01-01 = AD 1943-04-14, day seed 3 (Wednesday)
    const defEyy = 1943;
    const defEmm = 4;
    const defEdd = 13; // 14 - 1
    const defNyy = 2000;
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
        if (m > 12) { y++; m = 1; }
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
      num_day: day,
    };
  }

  /** @param {string} date 'YYYY-MM-DD' BS date @returns {AdResult|false} */
  nep_to_eng_date(date) {
    if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
    const [y, m, d] = date.split('-').map(Number);
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
      days,
    };
  }

  get_month_dates_eng(year, month) {
    const info = this.get_month_dates_nep(year, month);
    if (!info) return false;

    const [sy, sm, sd] = info.start_date.split('-').map(Number);
    const [ey, em, ed] = info.end_date.split('-').map(Number);

    const engStart = this.nep_to_eng(sy, sm, sd);
    const engEnd = this.nep_to_eng(ey, em, ed);
    if (!engStart || !engEnd) return false;

    return {
      start_date: fmt(engStart.year, engStart.month, engStart.date),
      end_date: fmt(engEnd.year, engEnd.month, engEnd.date),
    };
  }

  // ── date offset ──────────────────────────────────────────────────────

  /**
   * @param {string} date BS date 'YYYY-MM-DD'
   * @param {number} days positive = future, negative = past
   * @returns {string|false} BS date 'YYYY-MM-DD'
   */
  get_date_nep(date, days) {
    const [y, m, d] = date.split('-').map(Number);
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
    let [fy, fm] = fromDate.slice(0, 7).split('-').map(Number);
    const [ty, tm] = toDate.slice(0, 7).split('-').map(Number);

    const result = [];
    while (fy < ty || (fy === ty && fm <= tm)) {
      const info = this.get_month_dates_nep(fy, fm);
      if (info) result.push(info);
      fm++;
      if (fm > 12) { fm = 1; fy++; }
    }
    return result;
  }

  get_months_dates_eng(fromDate, toDate) {
    const months = this.get_months_dates_nep(fromDate, toDate);
    const result = [];
    for (const month of months) {
      const [sy, sm, sd] = month.start_date.split('-').map(Number);
      const [ey, em, ed] = month.end_date.split('-').map(Number);
      const engStart = this.nep_to_eng(sy, sm, sd);
      const engEnd = this.nep_to_eng(ey, em, ed);
      if (engStart && engEnd) {
        result.push({
          start_date: fmt(engStart.year, engStart.month, engStart.date),
          end_date: fmt(engEnd.year, engEnd.month, engEnd.date),
        });
      }
    }
    return result;
  }

  // ── range with pointed date ─────────────────────────────────────────

  get_bs_month_range_with_point(baseBsDate, days) {
    const [y, m, d] = baseBsDate.split('-').map(Number);
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
    while (fy < ty || (fy === ty && fm <= tm)) {
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
          pointed_date: pointed,
        });
      }
      fm++;
      if (fm > 12) { fm = 1; fy++; }
    }
    return result;
  }

  get_bs_month_range_excluding_partial(baseBsDate, days) {
    const all = this.get_bs_months_touched(baseBsDate, days);
    const [baseY, baseM] = baseBsDate.split('-').map(Number);
    return all.filter((month) => !(month.year === baseY && month.month === baseM));
  }

  get_bs_months_touched(baseBsDate, days) {
    const [y, m, d] = baseBsDate.split('-').map(Number);
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
    while (fy < ty || (fy === ty && fm <= tm)) {
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
          is_partial: isStartMonth || isEndMonth,
        });
      }
      fm++;
      if (fm > 12) { fm = 1; fy++; }
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
      this.debug_info = 'AD conversion failed for fiscal year boundaries.';
      return false;
    }

    const adStart = fmt(adStartArr.year, adStartArr.month, adStartArr.date);
    const adEnd = fmt(adEndArr.year, adEndArr.month, adEndArr.date);

    const dtStart = Date.UTC(adStartArr.year, adStartArr.month - 1, adStartArr.date);
    const dtEnd = Date.UTC(adEndArr.year, adEndArr.month - 1, adEndArr.date);
    const totalDays = Math.round((dtEnd - dtStart) / 86400000) + 1;

    return {
      fy_label: `${startBsYear}/${String(endBsYear).slice(2)}`,
      bs_start_date: bsStart,
      bs_end_date: bsEnd,
      ad_start_date: adStart,
      ad_end_date: adEnd,
      total_days: totalDays,
    };
  }

  get_fiscal_year(bsDate, offset = 0) {
    const [y, m] = bsDate.split('-').map(Number);
    let fyStartYear = m <= 3 ? y - 1 : y;
    fyStartYear += offset;
    return this.#buildFyInfo(fyStartYear);
  }

  get_fiscal_year_by_days(bsDate, days) {
    const shiftedBs = this.get_date_nep(bsDate, days);
    if (!shiftedBs) {
      this.debug_info = 'Day offset produced an out-of-range BS date.';
      return false;
    }
    return this.get_fiscal_year(shiftedBs, 0);
  }

  /** Convenience wrapper: fiscal year containing today's date. */
  get_current_fiscal_year(offset = 0) {
    const today = new Date();
    const todayBs = this.eng_to_nep(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate(),
    );
    if (!todayBs) {
      this.debug_info = "Could not convert today's date to BS.";
      return false;
    }
    const todayBsDate = fmt(todayBs.year, todayBs.month, todayBs.date);
    return this.get_fiscal_year(todayBsDate, offset);
  }

  get_nth_month_end_date(baseBsDate, months) {
    let [y, m] = baseBsDate.split('-').map(Number);
    const direction = months > 0 ? 1 : -1;
    const steps = Math.abs(months);

    m += direction;
    if (m > 12) { m = 1; y++; }
    if (m < 1) { m = 12; y--; }

    for (let i = 1; i < steps; i++) {
      m += direction;
      if (m > 12) { m = 1; y++; }
      if (m < 1) { m = 12; y--; }
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
    const t = new Date();
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
    if (typeof yearOrStr === 'string') {
      const [y, m] = yearOrStr.split('-').map(Number);
      return { year: y, month: m, options: monthOrOptions || {} };
    }
    return { year: yearOrStr, month: monthOrOptions, options: maybeOptions || {} };
  }

  #buildHolidayMap(holidays) {
    const map = new Map();
    if (Array.isArray(holidays)) {
      for (const h of holidays) if (h && h.date) map.set(h.date, h.label || '');
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
    const startWeekday = firstAd.num_day; // 1=Sun..7=Sat
    const firstAdUtc = Date.UTC(firstAd.year, firstAd.month - 1, firstAd.date);

    const days = [];
    for (let d = 1; d <= info.days; d++) {
      const weekday = ((startWeekday - 1 + (d - 1)) % 7) + 1;
      const adDt = new Date(firstAdUtc + (d - 1) * 86400000);
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
        holiday_label: holidayMap.get(bsDateStr) || null,
      });
    }

    const adBoundaries = this.get_month_dates_eng(year, month);

    return {
      system: 'bs',
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
      days,
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
    const startWeekday = firstBs.num_day; // 1=Sun..7=Sat

    let by = firstBs.year, bm = firstBs.month, bd = firstBs.date;
    let bsMonthInfo = this.get_month_dates_nep(by, bm);

    const days = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const weekday = ((startWeekday - 1 + (d - 1)) % 7) + 1;
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
        holiday_label: holidayMap.get(bsDateStr) || null,
      });

      bd++;
      if (bd > bsMonthInfo.days) {
        bd = 1; bm++;
        if (bm > 12) { bm = 1; by++; }
        bsMonthInfo = this.get_month_dates_nep(by, bm);
      }
    }

    const lastBs = this.eng_to_nep(year, month, daysInMonth);

    return {
      system: 'ad',
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
      days,
    };
  }
}

export default DrpNepaliCalendar;

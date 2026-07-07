import { DrpNepaliCalendar } from '../core/nepali-calendar.js';
import {
  NEPALI_MONTHS,
  ENGLISH_MONTHS,
  ENGLISH_MONTHS_FULL,
  WEEKDAYS_SHORT,
  WEEKDAYS_SHORT_NE,
  NEPALI_DIGITS,
} from '../core/bs-data.js';

const pad2 = (n) => String(n).padStart(2, '0');
const fmt = (y, m, d) => `${String(y).padStart(4, '0')}-${pad2(m)}-${pad2(d)}`;

const toNepaliDigits = (value) =>
  String(value).replace(/[0-9]/g, (d) => NEPALI_DIGITS[Number(d)]);

const AD_YEAR_MIN = 1944;
const AD_YEAR_MAX = 2033;
const BS_YEAR_MIN = 2000;
const BS_YEAR_MAX = 2090;

const STYLES = `
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
`;

const TPL = document.createElement('template');
TPL.innerHTML = `
<style>${STYLES}</style>
<div class="field" part="field">
  <input part="input" type="text" readonly />
  <button class="trigger" part="trigger" type="button" aria-label="Open calendar">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>
  </button>
</div>
<div class="panel" part="panel"></div>
`;

/**
 * <drp-datepicker> — a dual Bikram Sambat / Gregorian date picker.
 *
 * Set `type="bs"` (default) for a Nepali-calendar-driven picker with the
 * Gregorian date shown small in the bottom-right of each cell, or
 * `type="ad"` for the reverse — a Gregorian-driven picker with the BS date
 * shown small in the bottom-right of each cell. The selected date is always
 * available in both systems via `.valueBS` / `.valueAD`.
 */
export class DrpDatePicker extends HTMLElement {
  /** Enables native <form> participation (FormData, .reset(), :invalid, required, fieldset disabling). */
  static formAssociated = true;

  static get observedAttributes() {
    return ['value', 'min', 'max', 'placeholder', 'disabled', 'digits', 'mark-saturday', 'inline', 'type', 'required'];
  }

  #cal = new DrpNepaliCalendar();
  #holidays = [];
  #selected = null; // canonical BS {year, month, date}
  #view = null; // {year, month} in whichever system is primary
  #mode = 'days'; // 'days' | 'months' | 'years'
  #digits = 'en';
  #type = 'bs'; // 'bs' | 'ad'
  #open = false;
  #outsideHandler = null;
  #today = null; // BS
  #todayAd = null; // AD
  #internals = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(TPL.content.cloneNode(true));
    this.$input = this.shadowRoot.querySelector('input');
    this.$trigger = this.shadowRoot.querySelector('.trigger');
    this.$panel = this.shadowRoot.querySelector('.panel');
    // ElementInternals may not exist, or may only be a partial stub, in some
    // environments — degrade gracefully. The component still works fully as
    // a regular input either way; it just won't appear in FormData/native
    // validation without a complete ElementInternals implementation.
    const internals = typeof this.attachInternals === 'function' ? this.attachInternals() : null;
    this.#internals = internals && typeof internals.setFormValue === 'function' ? internals : null;
  }

  connectedCallback() {
    this.#digits = this.getAttribute('digits') === 'ne' ? 'ne' : 'en';
    this.#type = this.getAttribute('type') === 'ad' ? 'ad' : 'bs';

    const now = new Date();
    const today = this.#cal.eng_to_nep(now.getFullYear(), now.getMonth() + 1, now.getDate());
    this.#today = { year: today.year, month: today.month, date: today.date };
    this.#todayAd = { year: now.getFullYear(), month: now.getMonth() + 1, date: now.getDate() };

    this.#selected = this.#parseValueAttribute(this.getAttribute('value'));
    this.#view = this.#deriveView();

    this.$trigger.addEventListener('click', () => this.toggle());
    this.$input.addEventListener('click', () => this.toggle());
    this.shadowRoot.addEventListener('keydown', (e) => this.#onKeydown(e));

    this.#renderInputValue();
    this.#render();
    this.#syncFormState();

    if (this.hasAttribute('inline')) this.#open = true;
  }

  disconnectedCallback() {
    this.#removeOutsideListener();
  }

  /** Called automatically by the browser when the containing <form> is reset. */
  formResetCallback() {
    this.clear();
  }

  /** Called automatically by the browser when a containing <fieldset disabled> toggles. */
  formDisabledCallback(disabled) {
    this.toggleAttribute('disabled', disabled);
  }

  attributeChangedCallback(name) {
    if (!this.#view) return; // not connected yet

    if (name === 'digits') this.#digits = this.getAttribute('digits') === 'ne' ? 'ne' : 'en';

    if (name === 'type') {
      this.#type = this.getAttribute('type') === 'ad' ? 'ad' : 'bs';
      this.#view = this.#deriveView();
      this.#renderInputValue();
    }

    if (name === 'value') {
      this.#selected = this.#parseValueAttribute(this.getAttribute('value'));
      this.#view = this.#deriveView();
      this.#renderInputValue();
    }

    if (name === 'value' || name === 'required' || name === 'disabled') {
      this.#syncFormState();
    }

    this.#render();
  }

  // ── public API ─────────────────────────────────────────────────────

  /** Array of { date: 'YYYY-MM-DD' (BS), label?: string }. Omit/empty to disable holiday marking. */
  get holidays() { return this.#holidays; }
  set holidays(list) {
    this.#holidays = Array.isArray(list) ? list : [];
    this.#render();
  }

  /** 'bs' (default) or 'ad' — which calendar drives the grid and is treated as `.value`. */
  get type() { return this.#type; }
  set type(t) { this.setAttribute('type', t === 'ad' ? 'ad' : 'bs'); }

  /** Selected date, in whichever system `type` is set to. '' if empty. */
  get value() { return this.#type === 'ad' ? this.valueAD : this.valueBS; }
  set value(v) {
    if (v) this.setAttribute('value', v);
    else this.removeAttribute('value');
  }

  /** Selected date as a BS 'YYYY-MM-DD' string, regardless of `type`. */
  get valueBS() {
    return this.#selected ? fmt(this.#selected.year, this.#selected.month, this.#selected.date) : '';
  }

  /** Selected date as an AD 'YYYY-MM-DD' string, regardless of `type`. */
  get valueAD() {
    const ad = this.getADDate();
    return ad ? fmt(ad.year, ad.month, ad.date) : '';
  }

  /** The core conversion engine, for direct programmatic use. */
  get calendar() { return this.#cal; }

  /** Reflects the `name` attribute — paired with `.value` in FormData on submit. */
  get name() { return this.getAttribute('name') || ''; }
  set name(v) { this.setAttribute('name', v); }

  get required() { return this.hasAttribute('required'); }
  set required(v) { this.toggleAttribute('required', !!v); }

  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(v) { this.toggleAttribute('disabled', !!v); }

  /** Standard form-validation API, delegated to the internal ElementInternals. */
  get validity() { return this.#internals ? this.#internals.validity : undefined; }
  get validationMessage() { return this.#internals ? this.#internals.validationMessage : ''; }
  get willValidate() { return this.#internals ? this.#internals.willValidate : false; }
  checkValidity() { return this.#internals ? this.#internals.checkValidity() : true; }
  reportValidity() { return this.#internals ? this.#internals.reportValidity() : true; }

  #syncFormState() {
    if (!this.#internals) return;
    const val = this.value;
    this.#internals.setFormValue(val || null);

    if (this.hasAttribute('required') && !val) {
      this.#internals.setValidity({ valueMissing: true }, 'Please select a date.', this.$input);
    } else {
      this.#internals.setValidity({});
    }
  }

  getADDate() {
    if (!this.#selected) return null;
    return this.#cal.nep_to_eng(this.#selected.year, this.#selected.month, this.#selected.date);
  }

  open() {
    if (this.hasAttribute('disabled') || this.#open) return;
    this.#open = true;
    this.#mode = 'days';
    this.#render();
    this.#addOutsideListener();
    this.dispatchEvent(new CustomEvent('open'));
  }

  close() {
    if (this.hasAttribute('inline') || !this.#open) return;
    this.#open = false;
    this.#render();
    this.#removeOutsideListener();
    this.dispatchEvent(new CustomEvent('close'));
  }

  toggle() {
    if (this.hasAttribute('disabled')) return;
    this.#open ? this.close() : this.open();
  }

  clear() {
    this.#selected = null;
    this.removeAttribute('value');
    this.#renderInputValue();
    this.#render();
    this.#emitChange();
  }

  today() {
    this.#selected = { ...this.#today };
    this.#view = this.#deriveView();
    this.setAttribute('value', this.value);
  }

  // ── internal: value / view helpers ──────────────────────────────────

  /** Parse the `value` attribute (BS or AD string, depending on `type`) into a canonical BS object. */
  #parseValueAttribute(v) {
    if (!v || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return null;
    const [a, b, c] = v.split('-').map(Number);
    if (this.#type === 'ad') {
      const bs = this.#cal.eng_to_nep(a, b, c);
      return bs ? { year: bs.year, month: bs.month, date: bs.date } : null;
    }
    return this.#cal.nep_to_eng(a, b, c) ? { year: a, month: b, date: c } : null;
  }

  #deriveView() {
    if (this.#type === 'ad') {
      if (this.#selected) {
        const ad = this.#cal.nep_to_eng(this.#selected.year, this.#selected.month, this.#selected.date);
        if (ad) return { year: ad.year, month: ad.month };
      }
      return { year: this.#todayAd.year, month: this.#todayAd.month };
    }
    if (this.#selected) return { year: this.#selected.year, month: this.#selected.month };
    return { year: this.#today.year, month: this.#today.month };
  }

  #digitize(n) { return this.#digits === 'ne' ? toNepaliDigits(n) : String(n); }

  #onKeydown(e) {
    if (e.key === 'Escape') this.close();
  }

  #addOutsideListener() {
    this.#outsideHandler = (e) => {
      if (!e.composedPath().includes(this)) this.close();
    };
    document.addEventListener('mousedown', this.#outsideHandler);
  }
  #removeOutsideListener() {
    if (this.#outsideHandler) document.removeEventListener('mousedown', this.#outsideHandler);
    this.#outsideHandler = null;
  }

  #renderInputValue() {
    if (!this.#selected) {
      this.$input.value = '';
      this.$input.placeholder = this.getAttribute('placeholder')
        || (this.#type === 'ad' ? 'Select date (AD)' : 'Select date (BS)');
      return;
    }
    if (this.#type === 'ad') {
      const ad = this.getADDate();
      this.$input.value = `${ad.date} ${ENGLISH_MONTHS_FULL[ad.month]} ${ad.year}`;
    } else {
      const { year, month, date } = this.#selected;
      this.$input.value = `${this.#digitize(date)} ${NEPALI_MONTHS[month]} ${this.#digitize(year)}`;
    }
  }

  #emitChange() {
    const ad = this.getADDate();
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        bs: this.#selected ? { ...this.#selected, formatted: this.valueBS } : null,
        ad: ad ? { year: ad.year, month: ad.month, date: ad.date, formatted: fmt(ad.year, ad.month, ad.date) } : null,
      },
      bubbles: true,
    }));
  }

  /** `key` is a 'YYYY-MM-DD' string in whichever system is primary (matches min/max). */
  #isDisabledDate(key) {
    const min = this.getAttribute('min');
    const max = this.getAttribute('max');
    if (min && key < min) return true;
    if (max && key > max) return true;
    return false;
  }

  #render() {
    this.$panel.toggleAttribute('data-open', this.#open || this.hasAttribute('inline'));
    if (!this.#open && !this.hasAttribute('inline')) return;

    if (this.#mode === 'days') {
      this.#type === 'ad' ? this.#renderDaysAD() : this.#renderDaysBS();
    } else if (this.#mode === 'months') {
      this.#renderMonthPicker();
    } else {
      this.#renderYearPicker();
    }
  }

  // ── BS-primary grid ──────────────────────────────────────────────────

  #renderDaysBS() {
    const { year, month } = this.#view;
    const grid = this.#cal.get_calendar_month_nep(year, month, { holidays: this.#holidays });
    if (!grid) return;

    const markSaturday = this.getAttribute('mark-saturday') !== 'false';

    const cells = grid.days.map((d) => this.#buildCell({
      key: d.bs_date,
      primaryHtml: this.#digitize(d.bs_day),
      secondaryHtml: String(d.ad_day),
      weekday: d.weekday,
      markSaturday,
      isToday: d.is_today,
      isSelected: !!(this.#selected && this.#selected.year === d.bs_year && this.#selected.month === d.bs_month && this.#selected.date === d.bs_day),
      holidayLabel: d.is_holiday ? d.holiday_label : undefined,
      onSelect: () => { this.#selected = { year: d.bs_year, month: d.bs_month, date: d.bs_day }; },
    }));

    const secondaryTitle = grid.start_date_ad
      ? `${this.#adLabel(grid.start_date_ad)} – ${this.#adLabel(grid.end_date_ad)}`
      : '';

    this.#renderPanel({
      startWeekday: grid.start_weekday,
      cells,
      primaryTitle: `${grid.month_name} ${this.#digitize(year)}`,
      secondaryTitle,
      onPrev: () => this.#shiftMonthBS(-1),
      onNext: () => this.#shiftMonthBS(1),
    });
  }

  // ── AD-primary grid ──────────────────────────────────────────────────

  #renderDaysAD() {
    const { year, month } = this.#view;
    const grid = this.#cal.get_calendar_month_eng(year, month, { holidays: this.#holidays });
    if (!grid) return;

    const markSaturday = this.getAttribute('mark-saturday') !== 'false';

    const cells = grid.days.map((d) => this.#buildCell({
      key: d.ad_date,
      primaryHtml: String(d.ad_day),
      secondaryHtml: this.#digitize(d.bs_day),
      weekday: d.weekday,
      markSaturday,
      isToday: d.is_today,
      isSelected: !!(this.#selected && this.#selected.year === d.bs_year && this.#selected.month === d.bs_month && this.#selected.date === d.bs_day),
      holidayLabel: d.is_holiday ? d.holiday_label : undefined,
      onSelect: () => { this.#selected = { year: d.bs_year, month: d.bs_month, date: d.bs_day }; },
    }));

    const secondaryTitle = grid.start_date_bs
      ? `${this.#bsLabelStr(grid.start_date_bs)} – ${this.#bsLabelStr(grid.end_date_bs)}`
      : '';

    this.#renderPanel({
      startWeekday: grid.start_weekday,
      cells,
      primaryTitle: `${grid.month_name} ${year}`,
      secondaryTitle,
      onPrev: () => this.#shiftMonthAD(-1),
      onNext: () => this.#shiftMonthAD(1),
    });
  }

  // ── shared cell + panel rendering ───────────────────────────────────

  #buildCell({ key, primaryHtml, secondaryHtml, weekday, markSaturday, isToday, isSelected, holidayLabel, onSelect }) {
    const isSaturday = markSaturday && weekday === 7;
    const isHoliday = holidayLabel !== undefined;
    const isDisabled = this.#isDisabledDate(key);

    const cls = ['day'];
    if (isToday) cls.push('is-today');
    if (isSelected) cls.push('is-selected');
    if (isSaturday) cls.push('is-saturday');
    if (isHoliday) cls.push('is-holiday');

    const title = isHoliday && holidayLabel ? ` title="${holidayLabel.replace(/"/g, '&quot;')}"` : '';

    return {
      html: `<button class="${cls.join(' ')}" part="day" data-key="${key}" ${isDisabled ? 'disabled' : ''}${title}>
        <span class="primary-num">${primaryHtml}</span>
        <span class="secondary-num">${secondaryHtml}</span>
      </button>`,
      onSelect,
    };
  }

  #renderPanel({ startWeekday, cells, primaryTitle, secondaryTitle, onPrev, onNext }) {
    let cellsHtml = '';
    for (let i = 1; i < startWeekday; i++) cellsHtml += `<button class="day is-outside" tabindex="-1"></button>`;
    cellsHtml += cells.map((c) => c.html).join('');

    this.$panel.innerHTML = `
      <div class="panel-head">
        <button class="nav-btn" data-nav="-1" aria-label="Previous month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-months>
          <span class="primary-label">${primaryTitle}</span>
          <span class="secondary-label">${secondaryTitle}</span>
        </div>
        <button class="nav-btn" data-nav="1" aria-label="Next month" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div class="weekdays">
        ${(this.#digits === 'ne' ? WEEKDAYS_SHORT_NE : WEEKDAYS_SHORT).map((w, i) => `<span class="${i === 6 ? 'sat' : ''}">${w}</span>`).join('')}
      </div>
      <div class="grid">${cellsHtml}</div>
      <div class="panel-foot">
        <button class="foot-btn muted" data-clear type="button">Clear</button>
        <button class="digit-toggle" data-digits ${this.#digits === 'ne' ? 'data-active' : ''} type="button">${this.#digits === 'ne' ? 'देव' : '123'}</button>
        <button class="foot-btn" data-today type="button">Today</button>
      </div>
    `;

    this.$panel.querySelector('[data-nav="-1"]').addEventListener('click', onPrev);
    this.$panel.querySelector('[data-nav="1"]').addEventListener('click', onNext);
    this.$panel.querySelector('[data-open-months]').addEventListener('click', () => { this.#mode = 'months'; this.#render(); });
    this.$panel.querySelector('[data-clear]').addEventListener('click', () => this.clear());
    this.$panel.querySelector('[data-today]').addEventListener('click', () => {
      this.today();
      this.#renderInputValue();
      this.#render();
      this.#emitChange();
      this.close();
    });
    this.$panel.querySelector('[data-digits]').addEventListener('click', () => {
      this.#digits = this.#digits === 'ne' ? 'en' : 'ne';
      this.#renderInputValue();
      this.#render();
    });

    const dayButtons = this.$panel.querySelectorAll('.day[data-key]');
    dayButtons.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        cells[i].onSelect();
        this.setAttribute('value', this.value);
        this.#renderInputValue();
        this.#render();
        this.#emitChange();
        if (!this.hasAttribute('inline')) this.close();
      });
    });
  }

  #adLabel(adDateStr) {
    const [y, m, d] = adDateStr.split('-').map(Number);
    return `${ENGLISH_MONTHS[m]} ${d}, ${y}`;
  }

  #bsLabelStr(bsDateStr) {
    const [y, m, d] = bsDateStr.split('-').map(Number);
    return `${NEPALI_MONTHS[m]} ${d}, ${y}`;
  }

  // ── month / year pickers ─────────────────────────────────────────────

  #renderMonthPicker() {
    const isAd = this.#type === 'ad';
    const monthNames = isAd ? ENGLISH_MONTHS_FULL.slice(1) : NEPALI_MONTHS.slice(1);

    this.$panel.innerHTML = `
      <div class="panel-head">
        <button class="nav-btn" data-back aria-label="Back" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="head-title" data-open-years><span class="primary-label">${isAd ? this.#view.year : this.#digitize(this.#view.year)}</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="monthpicker">
        ${monthNames.map((name, i) => `<button data-month="${i + 1}" ${this.#view.month === i + 1 ? 'data-active' : ''} type="button">${name}</button>`).join('')}
      </div>
    `;
    this.$panel.querySelector('[data-back]').addEventListener('click', () => { this.#mode = 'days'; this.#render(); });
    this.$panel.querySelector('[data-open-years]').addEventListener('click', () => { this.#mode = 'years'; this.#render(); });
    this.$panel.querySelectorAll('[data-month]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.#view = { year: this.#view.year, month: Number(btn.dataset.month) };
        this.#mode = 'days';
        this.#render();
      });
    });
  }

  #renderYearPicker() {
    const isAd = this.#type === 'ad';
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
      <div class="yearpicker">
        ${years.map((y) => `<button data-year="${y}" ${this.#view.year === y ? 'data-active' : ''} type="button">${isAd ? y : this.#digitize(y)}</button>`).join('')}
      </div>
    `;
    this.$panel.querySelector('[data-back]').addEventListener('click', () => { this.#mode = 'months'; this.#render(); });
    this.$panel.querySelectorAll('[data-year]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.#view = { year: Number(btn.dataset.year), month: this.#view.month };
        this.#mode = 'months';
        this.#render();
      });
    });
    const active = this.$panel.querySelector('[data-active]');
    if (active) active.scrollIntoView({ block: 'center' });
  }

  // ── navigation ────────────────────────────────────────────────────────

  #shiftMonthBS(delta) {
    let { year, month } = this.#view;
    month += delta;
    if (month > 12) { month = 1; year++; }
    if (month < 1) { month = 12; year--; }
    if (year < BS_YEAR_MIN || year > BS_YEAR_MAX) return;
    this.#view = { year, month };
    this.#render();
  }

  #shiftMonthAD(delta) {
    let { year, month } = this.#view;
    month += delta;
    if (month > 12) { month = 1; year++; }
    if (month < 1) { month = 12; year--; }
    if (year < AD_YEAR_MIN || year > AD_YEAR_MAX) return;
    this.#view = { year, month };
    this.#render();
  }
}

export function registerDrpDatePicker(tagName = 'drp-datepicker') {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, DrpDatePicker);
  }
}

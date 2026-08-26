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
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

const toNepaliDigits = (value) =>
  String(value).replace(/[0-9]/g, (d) => NEPALI_DIGITS[Number(d)]);

const AD_YEAR_MIN = 1944;
const AD_YEAR_MAX = 2041;
const BS_YEAR_MIN = 2000;
const BS_YEAR_MAX = 2098;

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

const TPL = document.createElement('template');
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

export class DrpDatePicker extends HTMLElement {
  static formAssociated = true;

  static get observedAttributes() {
    return ['value', 'min', 'max', 'placeholder', 'disabled', 'digits', 'mark-saturday', 'inline', 'type', 'required', 'first-day-of-week', 'format'];
  }

  #cal = new DrpNepaliCalendar();
  #holidays = [];
  #disabledDates = [];
  #selected = null;
  #view = null;
  #mode = 'days';
  #digits = 'en';
  #type = 'bs';
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
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(TPL.content.cloneNode(true));
    this.$input = this.shadowRoot.querySelector('input');
    this.$trigger = this.shadowRoot.querySelector('.trigger');
    this.$panel = this.shadowRoot.querySelector('.panel');
    this.$announcer = this.shadowRoot.querySelector('[role="status"]');
    const internals = typeof this.attachInternals === 'function' ? this.attachInternals() : null;
    this.#internals = internals && typeof internals.setFormValue === 'function' ? internals : null;
  }

  connectedCallback() {
    this.#digits = this.getAttribute('digits') === 'ne' ? 'ne' : 'en';
    this.#type = this.getAttribute('type') === 'ad' ? 'ad' : 'bs';
    this.#firstDayOfWeek = Math.max(0, Math.min(6, Number(this.getAttribute('first-day-of-week')) || 0));
    this.#format = this.getAttribute('format') || null;

    const now = new Date();
    const today = this.#cal.eng_to_nep(now.getFullYear(), now.getMonth() + 1, now.getDate());
    this.#today = { year: today.year, month: today.month, date: today.date };
    this.#todayAd = { year: now.getFullYear(), month: now.getMonth() + 1, date: now.getDate() };

    this.#selected = this.#parseValueAttribute(this.getAttribute('value'));
    this.#view = this.#deriveView();

    this.$trigger.addEventListener('click', () => this.toggle());
    this.$input.addEventListener('click', () => this.toggle());
    this.$input.addEventListener('focus', () => this.$field?.classList.remove('is-error'));
    this.$input.addEventListener('keydown', (e) => this.#onInputKeydown(e));
    this.$input.addEventListener('blur', () => this.#commitInputValue());
    this.shadowRoot.addEventListener('keydown', (e) => this.#onKeydown(e));
    this.$panel.addEventListener('click', (e) => this.#onPanelClick(e));

    this.#renderInputValue();
    this.#render();
    this.#syncFormState();

    if (this.hasAttribute('inline')) this.#open = true;
  }

  disconnectedCallback() {
    this.#removeOutsideListener();
  }

  formResetCallback() {
    this.clear();
  }

  formDisabledCallback(disabled) {
    this.toggleAttribute('disabled', disabled);
  }

  attributeChangedCallback(name) {
    if (!this.#view) return;

    if (name === 'digits') this.#digits = this.getAttribute('digits') === 'ne' ? 'ne' : 'en';
    if (name === 'first-day-of-week') this.#firstDayOfWeek = Math.max(0, Math.min(6, Number(this.getAttribute('first-day-of-week')) || 0));
    if (name === 'format') this.#format = this.getAttribute('format') || null;

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

  get holidays() { return this.#holidays; }
  set holidays(list) {
    this.#holidays = Array.isArray(list) ? list : [];
    this.#render();
  }

  /** Array of { date: 'YYYY-MM-DD' } to disable. Date format matches the primary type (BS/AD). */
  get disabledDates() { return this.#disabledDates; }
  set disabledDates(list) {
    this.#disabledDates = Array.isArray(list) ? list : [];
    this.#render();
  }

  get type() { return this.#type; }
  set type(t) { this.setAttribute('type', t === 'ad' ? 'ad' : 'bs'); }

  get value() { return this.#type === 'ad' ? this.valueAD : this.valueBS; }
  set value(v) {
    if (v) this.setAttribute('value', v);
    else this.removeAttribute('value');
  }

  get valueBS() {
    return this.#selected ? fmt(this.#selected.year, this.#selected.month, this.#selected.date) : '';
  }

  get valueAD() {
    const ad = this.getADDate();
    return ad ? fmt(ad.year, ad.month, ad.date) : '';
  }

  get calendar() { return this.#cal; }

  get name() { return this.getAttribute('name') || ''; }
  set name(v) { this.setAttribute('name', v); }

  get required() { return this.hasAttribute('required'); }
  set required(v) { this.toggleAttribute('required', !!v); }

  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(v) { this.toggleAttribute('disabled', !!v); }

  /** 0=Sunday (default), 1=Monday … 6=Saturday */
  get firstDayOfWeek() { return this.#firstDayOfWeek; }
  set firstDayOfWeek(v) { this.setAttribute('first-day-of-week', String(Math.max(0, Math.min(6, Number(v) || 0)))); }

  /** Format string e.g. "YYYY-MM-DD", "DD Month YYYY". Tokens: YYYY, YY, MMMM, MM, M, DD, D */
  get format() { return this.#format; }
  set format(v) {
    if (v) this.setAttribute('format', v);
    else this.removeAttribute('format');
  }

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
    this.$trigger.setAttribute('aria-expanded', 'true');
    this.#render();
    this.#focusDayCell();
    this.#addOutsideListener();
    this.dispatchEvent(new CustomEvent('open'));
  }

  close() {
    if (this.hasAttribute('inline') || !this.#open) return;
    this.#open = false;
    this.$trigger.setAttribute('aria-expanded', 'false');
    this.#render();
    this.#removeOutsideListener();
    this.$trigger.focus();
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
    this.#announce('Selection cleared');
  }

  today() {
    this.#selected = { ...this.#today };
    this.#view = this.#deriveView();
    this.setAttribute('value', this.value);
  }

  // ── internal: value / view helpers ──────────────────────────────────

  #parseValueAttribute(v) {
    if (!v || !DATE_RE.test(v)) return null;
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

  #$field() { return this.shadowRoot.querySelector('.field'); }

  #onInputKeydown(e) {
    if (e.key === 'Enter') {
      this.#commitInputValue();
      if (this.#open) this.toggle();
    }
    if (e.key === 'Escape') {
      this.close();
    }
  }

  #commitInputValue() {
    const raw = this.$input.value.trim();
    if (!raw) {
      this.$field()?.classList.remove('is-error');
      return;
    }

    const parsed = this.#parseDateString(raw);
    if (parsed) {
      this.#selected = parsed;
      this.#view = this.#deriveView();
      this.setAttribute('value', this.value);
      this.#renderInputValue();
      this.#render();
      this.#emitChange();
      this.$field()?.classList.remove('is-error');
      this.#announce(`Date set to ${this.value}`);
    } else {
      this.$field()?.classList.add('is-error');
    }
  }

  #parseDateString(s) {
    if (DATE_RE.test(s)) {
      const [a, b, c] = s.split('-').map(Number);
      if (this.#type === 'ad') {
        const bs = this.#cal.eng_to_nep(a, b, c);
        if (bs && bs.year >= BS_YEAR_MIN && bs.year <= BS_YEAR_MAX) return { year: bs.year, month: bs.month, date: bs.date };
      } else {
        if (this.#cal.nep_to_eng(a, b, c)) return { year: a, month: b, date: c };
      }
      return null;
    }

    const monthMap = {};
    NEPALI_MONTHS.slice(1).forEach((name, i) => { monthMap[name.toLowerCase()] = i + 1; });
    ENGLISH_MONTHS_FULL.slice(1).forEach((name, i) => { monthMap[name.toLowerCase()] = i + 1; });
    ENGLISH_MONTHS.slice(1).forEach((name, i) => { monthMap[name.toLowerCase()] = i + 1; });

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

    const nav = target.closest('[data-nav]');
    if (nav) {
      this.#shiftMonth(Number(nav.dataset.nav));
      return;
    }

    const back = target.closest('[data-back]');
    if (back) {
      this.#mode = this.#mode === 'years' ? 'months' : 'days';
      this.#render();
      return;
    }

    const openMonths = target.closest('[data-open-months]');
    if (openMonths) {
      this.#mode = 'months';
      this.#render();
      return;
    }

    const openYears = target.closest('[data-open-years]');
    if (openYears) {
      this.#mode = 'years';
      this.#render();
      return;
    }

    const clearBtn = target.closest('[data-clear]');
    if (clearBtn) {
      this.clear();
      return;
    }

    const todayBtn = target.closest('[data-today]');
    if (todayBtn) {
      this.today();
      this.#renderInputValue();
      this.#render();
      this.#emitChange();
      this.close();
      return;
    }

    const digitsBtn = target.closest('[data-digits]');
    if (digitsBtn) {
      this.#digits = this.#digits === 'ne' ? 'en' : 'ne';
      this.#renderInputValue();
      this.#render();
      return;
    }

    const monthBtn = target.closest('[data-month]');
    if (monthBtn) {
      this.#view = { year: this.#view.year, month: Number(monthBtn.dataset.month) };
      this.#focusedDayKey = null;
      this.#mode = 'days';
      this.#render();
      return;
    }

    const yearBtn = target.closest('[data-year]');
    if (yearBtn) {
      this.#view = { year: Number(yearBtn.dataset.year), month: this.#view.month };
      this.#focusedDayKey = null;
      this.#mode = 'months';
      this.#render();
      return;
    }

    const dayBtn = target.closest('.day[data-key]');
    if (dayBtn && !dayBtn.disabled) {
      const idx = Number(dayBtn.dataset.index);
      if (!isNaN(idx) && this.#dayCells && this.#dayCells[idx]) {
        this.#dayCells[idx].onSelect();
        this.setAttribute('value', this.value);
        this.#renderInputValue();
        this.#render();
        this.#emitChange();
        this.#announce(`Selected ${this.value}`);
        if (!this.hasAttribute('inline')) this.close();
      }
    }
  }

  #onKeydown(e) {
    if (e.key === 'Escape') {
      this.close();
      return;
    }

    if (!this.#open || this.hasAttribute('inline')) return;

    if (this.#mode === 'days' && this.#isGridKey(e.key)) {
      e.preventDefault();
      this.#handleGridKey(e.key);
      return;
    }

    if (e.key === 'Tab') {
      this.#handleTabTrap(e);
    }
  }

  #isGridKey(key) {
    return ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown', 'Enter', ' '].includes(key);
  }

  #handleGridKey(key) {
    if (key === 'Enter' || key === ' ') {
      const focused = this.shadowRoot.querySelector('.day.is-focus');
      if (focused) {
        focused.click();
      }
      return;
    }

    const dayEls = [...this.shadowRoot.querySelectorAll('.day[data-key]')];
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
      case 'ArrowLeft':
        nextIdx = idx - 1;
        if (nextIdx < 0) nextIdx = dayEls.length - 1;
        break;
      case 'ArrowRight':
        nextIdx = idx + 1;
        if (nextIdx >= dayEls.length) nextIdx = 0;
        break;
      case 'ArrowUp':
        nextIdx = idx - cols;
        if (nextIdx < 0) nextIdx = idx;
        break;
      case 'ArrowDown':
        nextIdx = idx + cols;
        if (nextIdx >= dayEls.length) nextIdx = idx;
        break;
      case 'Home':
        nextIdx = 0;
        break;
      case 'End':
        nextIdx = dayEls.length - 1;
        break;
      case 'PageUp':
        this.#shiftMonth(-1);
        return;
      case 'PageDown':
        this.#shiftMonth(1);
        return;
    }

    if (nextIdx !== idx) {
      this.#focusDayByIndex(nextIdx, dayEls);
    }
  }

  #focusDayByIndex(index, dayEls) {
    const dayEls_ = dayEls || [...this.shadowRoot.querySelectorAll('.day[data-key]')];
    if (index < 0 || index >= dayEls_.length) return;
    const el = dayEls_[index];
    if (el.disabled) return;
    this.#focusedDayKey = el.dataset.key;
    el.focus();
  }

  #focusDayCell() {
    const dayEls = [...this.shadowRoot.querySelectorAll('.day[data-key]')];
    if (dayEls.length === 0) return;

    let targetIndex = -1;
    if (this.#focusedDayKey !== null) {
      targetIndex = dayEls.findIndex((el) => el.dataset.key === this.#focusedDayKey);
    }
    if (targetIndex === -1 && this.#selected) {
      const selKey = this.value;
      targetIndex = dayEls.findIndex((el) => el.dataset.key === selKey);
    }
    if (targetIndex === -1) {
      const todayKey = fmt(this.#today.year, this.#today.month, this.#today.date);
      targetIndex = dayEls.findIndex((el) => el.dataset.key === todayKey);
    }
    if (targetIndex === -1) targetIndex = 0;

    const el = dayEls[targetIndex];
    if (el && !el.disabled) {
      this.#focusedDayKey = el.dataset.key;
      this.$panel.querySelector('.is-focus')?.classList.remove('is-focus');
      el.classList.add('is-focus');
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
        '.nav-btn:not([disabled]), .head-title, .day[data-key]:not([disabled]), .foot-btn, .digit-toggle'
      ),
    ].filter((el) => el.offsetParent !== null);
  }

  #shiftMonth(delta) {
    if (this.#type === 'ad') this.#shiftMonthAD(delta);
    else this.#shiftMonthBS(delta);
  }

  #addOutsideListener() {
    this.#outsideHandler = (e) => {
      if (!e.composedPath().includes(this)) this.close();
    };
    document.addEventListener('mousedown', this.#outsideHandler);
    this.#scrollHandler = () => this.#positionPanel();
    window.addEventListener('scroll', this.#scrollHandler, { passive: true });
    this.#resizeHandler = () => this.#positionPanel();
    window.addEventListener('resize', this.#resizeHandler, { passive: true });
  }
  #removeOutsideListener() {
    if (this.#outsideHandler) document.removeEventListener('mousedown', this.#outsideHandler);
    this.#outsideHandler = null;
    if (this.#scrollHandler) window.removeEventListener('scroll', this.#scrollHandler);
    this.#scrollHandler = null;
    if (this.#resizeHandler) window.removeEventListener('resize', this.#resizeHandler);
    this.#resizeHandler = null;
  }

  #announce(msg) {
    if (this.$announcer) {
      this.$announcer.textContent = '';
      const fn = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : setTimeout;
      fn(() => { this.$announcer.textContent = msg; });
    }
  }

  #formatValue(format) {
    if (!this.#selected) return '';
    const isAd = this.#type === 'ad';
    const ad = isAd ? this.getADDate() : null;
    const year = isAd ? ad.year : this.#selected.year;
    const month = isAd ? ad.month : this.#selected.month;
    const date = isAd ? ad.date : this.#selected.date;
    const monthName = isAd ? ENGLISH_MONTHS_FULL[month] : NEPALI_MONTHS[month];

    const d = (n) => this.#digitize(n);
    const tokens = {
      YYYY: d(String(year).padStart(4, '0')),
      YY: d(String(year).slice(-2)),
      MMMM: monthName,
      MM: d(pad2(month)),
      M: d(month),
      DD: d(pad2(date)),
      D: d(date),
    };
    return format.replace(/YYYY|YY|MMMM|MM|M|DD|D/g, (m) => tokens[m] || m);
  }

  #renderInputValue() {
    if (!this.#selected) {
      this.$input.value = '';
      this.$input.placeholder = this.getAttribute('placeholder')
        || (this.#type === 'ad' ? 'Select date (AD)' : 'Select date (BS)');
      return;
    }
    if (this.#format) {
      this.$input.value = this.#formatValue(this.#format);
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

  #isDisabledDate(key) {
    const min = this.getAttribute('min');
    const max = this.getAttribute('max');
    if (min && key < min) return true;
    if (max && key > max) return true;
    if (this.#disabledDates.some((d) => d.date === key)) return true;
    return false;
  }

  #render() {
    this.$panel.toggleAttribute('data-open', this.#open || this.hasAttribute('inline'));
    if (!this.#open && !this.hasAttribute('inline')) return;

    if (this.#mode === 'days') {
      this.#renderDays(this.#type);
    } else if (this.#mode === 'months') {
      this.#renderMonthPicker();
    } else {
      this.#renderYearPicker();
    }

    this.#positionPanel();
  }

  #positionPanel() {
    if (this.hasAttribute('inline')) return;
    const panelHeight = this.$panel.offsetHeight;
    if (panelHeight === 0) return;
    const hostRect = this.getBoundingClientRect();
    const spaceBelow = window.innerHeight - hostRect.bottom;
    const spaceAbove = hostRect.top;
    const gap = 6;
    if (spaceBelow < panelHeight + gap && spaceAbove >= panelHeight + gap) {
      this.$panel.setAttribute('data-placement', 'top');
    } else {
      this.$panel.removeAttribute('data-placement');
    }
  }

  #renderDays(type) {
    const isBs = type === 'bs';
    const { year, month } = this.#view;
    const grid = isBs
      ? this.#cal.get_calendar_month_nep(year, month, { holidays: this.#holidays })
      : this.#cal.get_calendar_month_eng(year, month, { holidays: this.#holidays });
    if (!grid) return;

    const markSaturday = this.getAttribute('mark-saturday') !== 'false';

    const cells = grid.days.map((d, i) => this.#buildCell({
      index: i,
      key: isBs ? d.bs_date : d.ad_date,
      primaryHtml: isBs ? this.#digitize(d.bs_day) : String(d.ad_day),
      secondaryHtml: isBs ? String(d.ad_day) : this.#digitize(d.bs_day),
      weekday: d.weekday,
      markSaturday,
      isToday: d.is_today,
      isSelected: !!(this.#selected && this.#selected.year === d.bs_year && this.#selected.month === d.bs_month && this.#selected.date === d.bs_day),
      holidayLabel: d.is_holiday ? d.holiday_label : undefined,
      onSelect: () => { this.#selected = { year: d.bs_year, month: d.bs_month, date: d.bs_day }; },
    }));

    const secondaryTitle = isBs
      ? (grid.start_date_ad ? `${this.#adLabel(grid.start_date_ad)} – ${this.#adLabel(grid.end_date_ad)}` : '')
      : (grid.start_date_bs ? `${this.#bsLabelStr(grid.start_date_bs)} – ${this.#bsLabelStr(grid.end_date_bs)}` : '');

    this.#renderPanel({
      startWeekday: grid.start_weekday,
      cells,
      primaryTitle: isBs ? `${grid.month_name} ${this.#digitize(year)}` : `${grid.month_name} ${year}`,
      secondaryTitle,
    });
  }

  // ── shared cell + panel rendering ───────────────────────────────────

  #buildCell({ index, key, primaryHtml, secondaryHtml, weekday, markSaturday, isToday, isSelected, holidayLabel, onSelect }) {
    const isSaturday = markSaturday && weekday === 7;
    const isHoliday = holidayLabel !== undefined;
    const isDisabled = this.#isDisabledDate(key);
    const isFocused = this.#focusedDayKey === key;

    const cls = ['day'];
    if (isToday) cls.push('is-today');
    if (isSelected) cls.push('is-selected');
    if (isSaturday) cls.push('is-saturday');
    if (isHoliday) cls.push('is-holiday');
    if (isFocused) cls.push('is-focus');

    const title = isHoliday && holidayLabel ? ` title="${holidayLabel.replace(/"/g, '&quot;')}"` : '';

    const primaryLabel = primaryHtml.replace(/<[^>]*>/g, '');
    const secondaryLabel = secondaryHtml.replace(/<[^>]*>/g, '');

    return {
      html: `<button class="${cls.join(' ')}" part="day" role="gridcell" data-key="${key}" data-index="${index}" tabindex="-1" aria-selected="${isSelected}" ${isDisabled ? 'disabled' : ''}${title}>
        <span class="primary-num">${primaryHtml}</span>
        <span class="secondary-num">${secondaryHtml}</span>
      </button>`,
      onSelect,
      ariaLabel: `${primaryLabel}, ${secondaryLabel}`,
    };
  }

  #renderPanel({ startWeekday, cells, primaryTitle, secondaryTitle }) {
    const offset = (startWeekday - 1 - this.#firstDayOfWeek + 7) % 7;
    let cellsHtml = '';
    for (let i = 0; i < offset; i++) cellsHtml += `<button class="day is-outside" tabindex="-1" aria-hidden="true"></button>`;
    cellsHtml += cells.map((c) => c.html).join('');

    const gridLabel = primaryTitle + (secondaryTitle ? ` – ${secondaryTitle}` : '');

    const wd = this.#digits === 'ne' ? WEEKDAYS_SHORT_NE : WEEKDAYS_SHORT;
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
          return `<span class="${i === isSatIdx ? 'sat' : ''}" role="presentation">${w}</span>`;
        }).join('')}
      </div>
      <div class="grid" role="grid" aria-label="${gridLabel.replace(/"/g, '&quot;')}">
        ${cellsHtml}
      </div>
      <div class="panel-foot">
        <button class="foot-btn muted" data-clear type="button">Clear</button>
        <button class="digit-toggle" data-digits ${this.#digits === 'ne' ? 'data-active' : ''} type="button">${this.#digits === 'ne' ? 'देव' : '123'}</button>
        <button class="foot-btn" data-today type="button">Today</button>
      </div>
    `;

    this.#dayCells = cells;
    this.#focusedDayKey = null;
    this.#focusDayCell();
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
        <div class="head-title" data-open-years role="heading" aria-level="2" tabindex="0"><span class="primary-label">${isAd ? this.#view.year : this.#digitize(this.#view.year)}</span></div>
        <span style="width:28px"></span>
      </div>
      <div class="monthpicker" role="listbox" aria-label="Select month">
        ${monthNames.map((name, i) => `<button data-month="${i + 1}" ${this.#view.month === i + 1 ? 'data-active' : ''} type="button" role="option" aria-selected="${this.#view.month === i + 1}">${name}</button>`).join('')}
      </div>
    `;
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
      <div class="yearpicker" role="listbox" aria-label="Select year">
        ${years.map((y) => `<button data-year="${y}" ${this.#view.year === y ? 'data-active' : ''} type="button" role="option" aria-selected="${this.#view.year === y}">${isAd ? y : this.#digitize(y)}</button>`).join('')}
      </div>
    `;
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
    this.#focusedDayKey = null;
    this.#render();
  }

  #shiftMonthAD(delta) {
    let { year, month } = this.#view;
    month += delta;
    if (month > 12) { month = 1; year++; }
    if (month < 1) { month = 12; year--; }
    if (year < AD_YEAR_MIN || year > AD_YEAR_MAX) return;
    this.#view = { year, month };
    this.#focusedDayKey = null;
    this.#render();
  }
}

export function registerDrpDatePicker(tagName = 'drp-datepicker') {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, DrpDatePicker);
  }
}

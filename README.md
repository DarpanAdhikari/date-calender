# drp-datepicker

> A dependency-free Bikram Sambat (BS) ↔ Gregorian (AD) date conversion engine plus a
> modern `<drp-datepicker>` Web Component — install once, drop it into any page.

[![npm version](https://img.shields.io/npm/v/drp-datepicker.svg)](https://www.npmjs.com/package/drp-datepicker)
[![license](https://img.shields.io/npm/l/drp-datepicker.svg)](https://github.com/darpanadhikari/date-picker-demo/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/drp-datepicker)](https://bundlephobia.com/package/drp-datepicker)
[![zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/drp-datepicker)

<!-- ![drp-datepicker demo](https://placehold.co/800x400/fdfaf5/b3352b?text=drp-datepicker+demo) -->

A drop-in Nepali/English datepicker for any web app — vanilla JS, React, Vue, Electron, or plain HTML. Pick a Nepali date and see the English equivalent, or vice versa. Every day cell shows both calendars at a glance.

---

## Table of Contents

- [Why drp-datepicker?](#why-drp-datepicker)
- [Getting Started](#getting-started)
  - [Install](#install)
  - [30-Second Quick Start](#30-second-quick-start)
  - [Alternative Setups](#alternative-setups)
- [Usage Guide](#usage-guide)
  - [Date Picker Component](#date-picker-component)
  - [Form Integration](#form-integration)
  - [Programmatic Control](#programmatic-control)
  - [Events](#events)
- [Core Conversion API](#core-conversion-api)
  - [Date Conversion](#date-conversion)
  - [Month Boundaries](#month-boundaries)
  - [Date Offsets](#date-offsets)
  - [Multi-Month Ranges](#multi-month-ranges)
  - [Fiscal Year Helpers](#fiscal-year-helpers)
  - [Calendar Grid Builders](#calendar-grid-builders)
  - [Supported Date Ranges](#supported-date-ranges)
  - [Building Custom Calendar UIs](#building-custom-calendar-uis)
- [API Reference](#api-reference)
  - [Attributes](#attributes)
  - [Properties](#properties)
  - [Methods](#methods)
  - [Events](#events-1)
  - [Format Tokens](#format-tokens)
- [Styling and Theming](#styling-and-theming)
  - [CSS Custom Properties](#css-custom-properties)
  - [Shadow DOM Parts](#shadow-dom-parts)
  - [Dark Mode Example](#dark-mode-example)
- [Accessibility](#accessibility)
  - [Keyboard Navigation](#keyboard-navigation)
  - [ARIA and Screen Readers](#aria-and-screen-readers)
- [Browser Support](#browser-support)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [TypeScript](#typescript)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)

---

## Why drp-datepicker?

| | drp-datepicker | Other Nepali datepickers |
|---|---|---|
| **Zero dependencies** | Yes — nothing to audit or break | Often depend on moment/dayjs/lodash |
| **Zero build step** | Works via `<script>` tag, CDN, ESM, or CJS | Usually require webpack/rollup setup |
| **Dual-calendar cells** | Every day shows both BS and AD dates | Usually show only one calendar |
| **Web Component** | Works in any framework — React, Vue, Angular, vanilla JS | Often framework-specific |
| **Form-associated** | Native `<form>` integration with `FormData`, `required`, `:invalid` | Usually requires hidden inputs and manual wiring |
| **Full conversion API** | Standalone BS ↔ AD engine usable without any UI | Tightly coupled to the datepicker UI |
| **Accessible** | Full keyboard nav, ARIA roles, screen reader announcements | Often missing keyboard support |
| **Electron-ready** | Tested in Electron 43 (Chromium) | May not work in Electron |
| **Nepali digits** | Toggle between Western (1,2,3) and Devanagari (१,२,३) numerals | Rarely supported |

---

## Getting Started

### Install

```bash
npm install drp-datepicker
```

**Requirements:** Node >= 16 (for build tooling). The component itself runs in any modern browser.

### 30-Second Quick Start

```html
<!-- 1. Add the element -->
<drp-datepicker id="dp"></drp-datepicker>

<!-- 2. Load the script (or use npm — see below) -->
<script src="https://unpkg.com/drp-datepicker@latest/dist/drp-datepicker.global.js"></script>

<!-- 3. Listen for changes -->
<script>
  document.getElementById('dp').addEventListener('change', (e) => {
    console.log('BS:', e.detail.bs.formatted); // '2082-02-27'
    console.log('AD:', e.detail.ad.formatted); // '2025-06-10'
  });
</script>
```

That's it. The picker defaults to Nepali (BS) primary mode with English shown small in each cell corner.

### Alternative Setups

<details>
<summary><strong>ES Module (bundler or <code>&lt;script type="module"</code>)</strong></summary>

```js
import 'drp-datepicker'; // auto-registers <drp-datepicker>
```

```html
<drp-datepicker id="dp"></drp-datepicker>
<script type="module">
  import 'drp-datepicker';
  document.getElementById('dp').addEventListener('change', (e) => {
    console.log(e.detail);
  });
</script>
```
</details>

<details>
<summary><strong>CommonJS (Node / Electron main process)</strong></summary>

```js
const { DrpNepaliCalendar } = require('drp-datepicker/core');
// Just the conversion engine — no DOM needed
```
</details>

<details>
<summary><strong>CDN (no npm, no build step)</strong></summary>

```html
<drp-datepicker id="dp"></drp-datepicker>

<script src="https://unpkg.com/drp-datepicker@latest/dist/drp-datepicker.global.js"></script>
<script>
  // window.DRP is now available:
  const cal = new window.DRP.DrpNepaliCalendar();
  console.log(cal.eng_to_nep(2025, 6, 10));
</script>
```

jsDelivr works the same way:

```html
<script src="https://cdn.jsdelivr.net/npm/drp-datepicker@latest/dist/drp-datepicker.global.js"></script>
```

Both CDNs expose `window.DRP = { DrpNepaliCalendar, DrpDatePicker, registerDrpDatePicker }`.
</details>

<details>
<summary><strong>Deep imports (tree-shaking)</strong></summary>

```js
// Full package (component + core)
import 'drp-datepicker';

// Core only (no web component, safe in Node)
import { DrpNepaliCalendar } from 'drp-datepicker/core';

// Component only
import { DrpDatePicker } from 'drp-datepicker/datepicker';
```
</details>

---

## Usage Guide

### Date Picker Component

#### Nepali-First Picker (default)

The default mode drives the calendar from the Bikram Sambat system. Each cell shows the BS date large and centered, with the English date small in the bottom-right corner.

```html
<drp-datepicker placeholder="Select a Nepali date"></drp-datepicker>
```

#### English-First Picker

Flip the `type` attribute to `"ad"` and the whole component reverses: the grid is driven by the Gregorian calendar, month/year navigation moves through English months, and the Nepali (BS) date appears small in each cell.

```html
<drp-datepicker type="ad" placeholder="Select an English date"></drp-datepicker>
```

#### Inline Mode

Render the calendar always-open in the page flow instead of as a popup:

```html
<drp-datepicker inline></drp-datepicker>
```

#### Devanagari Numerals

Display Nepali numbers in Devanagari script (०-९) instead of Western digits:

```html
<drp-datepicker digits="ne"></drp-datepicker>
<!-- "२०८२-०२-२७" instead of "2082-02-27" -->
```

Users can also toggle this via the calendar footer button.

#### Custom Display Format

Control how the selected date appears in the input field:

```html
<!-- "२७ Jestha २०८२" (BS) or "27 June 2025" (AD) -->
<drp-datepicker format="DD Month YYYY"></drp-datepicker>

<!-- "२०८२-०२-२७" -->
<drp-datepicker format="YYYY-MM-DD"></drp-datepicker>

<!-- "२५/०२/२७" (short year) -->
<drp-datepicker format="YY/MM/DD"></drp-datepicker>
```

See [Format Tokens](#format-tokens) for the full token reference.

#### Min/Max Date Constraints

Disable dates outside a range. The format matches the primary `type`:

```html
<!-- BS mode: constrain to BS 2082 -->
<drp-datepicker min="2082-01-01" max="2082-12-30"></drp-datepicker>

<!-- AD mode: constrain to June 2025 -->
<drp-datepicker type="ad" min="2025-06-01" max="2025-06-30"></drp-datepicker>
```

#### Disabling Specific Dates

```js
const dp = document.querySelector('drp-datepicker');
dp.disabledDates = [
  { date: '2082-03-15' },
  { date: '2082-07-07' },
];
```

Disabled cells are greyed out, non-clickable, and skipped during keyboard navigation.

#### Holidays

The calendar supports optional holiday marking. When holidays are set:

- **Accent-colored dot** appears below the day number
- **Tooltip** shows the holiday label on hover
- **Primary number** uses the accent color (same as selected state)
- Works in both `type="bs"` and `type="ad"` modes

Holiday dates are always specified in **BS (Bikram Sambat)** format, regardless of which `type` the picker is using. The component matches them internally.

##### Setting Holidays

Holidays can be set as an attribute (inline JSON) or via JavaScript property:

```html
<!-- via attribute (single-line JSON) -->
<drp-datepicker id="dp"
  holidays='[{"date":"2082-01-01","label":"New Year"}]'>
</drp-datepicker>
```

```js
// via JavaScript (recommended for larger lists)
import 'drp-datepicker';
const dp = document.getElementById('dp');
dp.holidays = [
  { date: '2082-01-01', label: 'Nepali New Year' },
  { date: '2082-07-10', label: 'Vijaya Dashami' },
];
```

##### Holiday Data Format

Each holiday is an object with:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `date` | `string` | Yes | BS date in `'YYYY-MM-DD'` format |
| `label` | `string` | No | Tooltip text shown on hover |

If `label` is omitted, the dot still appears but no tooltip is shown.

##### Building Holiday Arrays

**From a static list (most common):**

```js
const holidays = [
  { date: '2082-01-01', label: 'Nepali New Year' },
  { date: '2082-01-15', label: 'Buddha Jayanti' },
  { date: '2082-03-15', label: 'Ropain Jayanti' },
  { date: '2082-04-01', label: 'Raksha Bandhan' },
  { date: '2082-04-07', label: 'Janai Purnima' },
  { date: '2082-07-10', label: 'Vijaya Dashami' },
  { date: '2082-10-15', label: 'Tihar' },
  { date: '2082-12-30', label: 'Ghode Jatra' },
];
dp.holidays = holidays;
```

**From a JSON file:**

```js
// holidays.json:
// [
//   { "date": "2082-01-01", "label": "Nepali New Year" },
//   { "date": "2082-07-10", "label": "Vijaya Dashami" }
// ]

import holidays from './holidays.json' with { type: 'json' };
dp.holidays = holidays;
```

**From an API:**

```js
const res = await fetch('https://api.example.com/holidays/2082');
const data = await res.json();

// If your API returns AD dates, convert them to BS first:
import { DrpNepaliCalendar } from 'drp-datepicker/core';
const cal = new DrpNepaliCalendar();

dp.holidays = data.map(h => {
  const bs = cal.eng_to_nep(h.year, h.month, h.day);
  return {
    date: `${bs.year}-${String(bs.month).padStart(2, '0')}-${String(bs.date).padStart(2, '0')}`,
    label: h.name,
  };
});
```

**From localStorage (caching API results):**

```js
async function loadHolidays(year) {
  const cacheKey = `holidays_${year}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  const res = await fetch(`https://api.example.com/holidays/${year}`);
  const data = await res.json();
  localStorage.setItem(cacheKey, JSON.stringify(data));
  return data;
}

dp.holidays = await loadHolidays(2082);
```

##### Converting AD Dates to BS

Holiday APIs or government sources may publish dates in AD format. Convert them to BS before assigning:

```js
import { DrpNepaliCalendar } from 'drp-datepicker/core';
const cal = new DrpNepaliCalendar();

const adHolidays = [
  { year: 2025, month: 4, day: 14, name: 'Nepali New Year' },
  { year: 2025, month: 10, day: 20, name: 'Vijaya Dashami' },
];

const bsHolidays = adHolidays.map(h => {
  const bs = cal.eng_to_nep(h.year, h.month, h.day);
  return {
    date: `${bs.year}-${String(bs.month).padStart(2, '0')}-${String(bs.date).padStart(2, '0')}`,
    label: h.name,
  };
});

dp.holidays = bsHolidays;
```

##### Holidays in Custom Calendar UIs

When using `get_calendar_month_nep()` or `get_calendar_month_eng()`, each day in the returned `days` array includes holiday info:

```js
const month = cal.get_calendar_month_nep('2082-02', {
  holidays: [
    { date: '2082-02-15', label: 'Some Holiday' },
  ],
});

month.days.forEach(day => {
  if (day.is_holiday) {
    console.log(`${day.bs_date}: ${day.holiday_label}`);
    // "2082-02-15: Some Holiday"
  }
});
```

Each day object includes:
- `is_holiday` — `true` if the date matches a holiday entry
- `holiday_label` — the label string, or `null` if no label was provided

##### Disabling Holidays

To remove all holidays, set an empty array:

```js
dp.holidays = [];
```

Or simply never set the property — the calendar renders with no holiday styling by default.

#### Smart Positioning

When the panel opens, it checks available space below the input. If there isn't enough room, it flips **above** the field. Position is recalculated on scroll and window resize.

#### Week Start Day

Start the week on any day (default: Sunday):

```html
<!-- Monday-first -->
<drp-datepicker first-day-of-week="1"></drp-datepicker>
```

---

### Form Integration

`<drp-datepicker>` is a [form-associated custom element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#form-associated_custom_elements). It behaves exactly like a native `<input>` inside a `<form>`:

```html
<form id="booking">
  <label for="name">Name</label>
  <input id="name" name="name" required />

  <label for="date">Delivery date</label>
  <drp-datepicker
    id="date"
    name="deliveryDate"
    required
    placeholder="Pick a date"
  ></drp-datepicker>

  <button type="submit">Submit</button>
</form>

<pre id="out">(nothing submitted yet)</pre>
```

```js
const form = document.getElementById('booking');
const dp = document.getElementById('date');

dp.addEventListener('change', (e) => {
  console.log(e.detail.bs.formatted, e.detail.ad.formatted);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  document.getElementById('out').textContent =
    JSON.stringify(Object.fromEntries(data), null, 2);
  // { "name": "...", "deliveryDate": "2082-02-27" }
});
```

**What you get for free:**

| Feature | How it works |
|---|---|
| **`name` + `FormData`** | Selected date is included automatically — no hidden input needed |
| **`required`** | Form won't submit until a date is picked. `.checkValidity()` / `.reportValidity()` work |
| **`:invalid` / `:valid`** | Standard CSS pseudo-classes — style from the host page |
| **`form.reset()`** | Clears the picker automatically |
| **`<fieldset disabled>`** | Automatically disables the picker |
| **`change` event** | Fires on every selection, bubbles, same as native inputs |

```css
/* Style the invalid state from outside the Shadow DOM */
drp-datepicker:invalid {
  --ndp-border: #b3352b;
}
```

> **Note:** This uses the standard `ElementInternals` API, fully supported in real browsers and Electron (Chromium). jsdom only partially implements it, so automated tests verify behavior directly. Open `examples/form-usage.html` in a browser to see full form integration.

---

### Programmatic Control

#### Opening and Closing

```js
const dp = document.querySelector('drp-datepicker');

dp.open();    // show the calendar panel
dp.close();   // hide it, return focus to trigger
dp.toggle();  // toggle open/close
```

#### Selecting and Clearing

```js
dp.today();   // select today's date (popup stays open)
dp.clear();   // clear the selection entirely
```

#### Reading Values

```js
dp.value;     // '2082-02-27'  (in whatever `type` is set to)
dp.valueBS;   // '2082-02-27'  (always BS, regardless of `type`)
dp.valueAD;   // '2025-06-10'  (always AD, regardless of `type`)
```

#### Setting Values

```js
// Set via attribute (in the format matching `type`)
dp.setAttribute('value', '2082-02-27');

// Or via property
dp.value = '2082-02-27';
```

#### Accessing the Conversion Engine

```js
const cal = dp.calendar;  // DrpNepaliCalendar instance
cal.eng_to_nep(2025, 6, 10);
// { year: 2082, month: 2, date: 27, day: 'Tuesday', nmonth: 'Jestha', num_day: 3 }
```

---

### Events

#### `change`

Fires whenever a date is selected or cleared.

```js
dp.addEventListener('change', (e) => {
  console.log(e.detail);
  // {
  //   bs: { year: 2082, month: 2, date: 27, formatted: '2082-02-27' },
  //   ad: { year: 2025, month: 6, date: 10, formatted: '2025-06-10' }
  // }
  //
  // When cleared: { bs: null, ad: null }
});
```

| Property | Type | Description |
|----------|------|-------------|
| `detail.bs` | `{ year, month, date, formatted }` | Nepali date, or `null` if cleared |
| `detail.ad` | `{ year, month, date, formatted }` | English date, or `null` if cleared |

The event bubbles, so you can listen on a parent element.

#### `open` / `close`

```js
dp.addEventListener('open', () => console.log('panel opened'));
dp.addEventListener('close', () => console.log('panel closed'));
```

---

## Core Conversion API

Import the engine directly when you need date conversion without the UI:

```js
// ES Module
import { DrpNepaliCalendar } from 'drp-datepicker/core';

// CommonJS (Node / Electron)
const { DrpNepaliCalendar } = require('drp-datepicker/core');

const cal = new DrpNepaliCalendar();
```

### Date Conversion

#### Nepali → English (numbers)

```js
cal.nep_to_eng(2082, 2, 27);
// { year: 2025, month: 6, date: 10, day: 'Tuesday', emonth: 'Jun', num_day: 3 }
```

#### Nepali → English (string)

```js
cal.nep_to_eng_date('2082-02-27');
// { year: 2025, month: 6, date: 10, day: 'Tuesday', emonth: 'Jun', num_day: 3 }
```

#### English → Nepali (numbers)

```js
cal.eng_to_nep(2025, 6, 10);
// { year: 2082, month: 2, date: 27, day: 'Tuesday', nmonth: 'Jestha', num_day: 3 }
```

#### English → Nepali (string)

```js
cal.eng_to_nep_date('2025-06-10');
// { year: 2082, month: 2, date: 27, day: 'Tuesday', nmonth: 'Jestha', num_day: 3 }
```

> **Note:** `nep_to_eng_date()` validates by shape and range rather than running through a Gregorian check, so Nepali dates in 32-day months (e.g., `'2082-01-32'`) convert correctly instead of being rejected.

### Month Boundaries

```js
cal.get_month_dates_nep(2082, 2);
// { start_date: '2082-02-01', end_date: '2082-02-31', days: 31 }

cal.get_month_dates_eng(2082, 2);
// { start_date: '2025-05-15', end_date: '2025-06-14' }
```

### Date Offsets

Offset a BS date by N days (positive or negative):

```js
cal.get_date_nep('2082-02-27', 10);   // '2082-03-09' (10 days forward)
cal.get_date_nep('2082-02-27', -5);   // '2082-02-22' (5 days back)
```

### Multi-Month Ranges

Get every month spanning a date range:

```js
cal.get_months_dates_nep('2082-01-01', '2082-03-15');
// [
//   { start_date: '2082-01-01', end_date: '2082-01-31', days: 31 },
//   { start_date: '2082-02-01', end_date: '2082-02-31', days: 31 },
//   { start_date: '2082-03-01', end_date: '2082-03-15', days: 15 },
// ]

cal.get_months_dates_eng('2082-01-01', '2082-03-15');
// Same structure, with English date equivalents
```

Advanced range helpers:

```js
cal.get_bs_month_range_with_point('2082-01-01', 60);
// Every BS month spanning 60 days, with the pointed date marked

cal.get_bs_month_range_excluding_partial('2082-01-01', 60);
// Same but excludes the base month (only full months)

cal.get_bs_months_touched('2082-01-01', 60);
// Every month touched, with partial/full flags and per-month day ranges
```

### Fiscal Year Helpers

Nepal's fiscal year runs from Shrawan (month 4) to Ashad (month 3).

```js
// Fiscal year containing a specific BS date
cal.get_fiscal_year('2082-03-15');
// {
//   fy_label: '2081/82',
//   bs_start_date: '2081-04-01', bs_end_date: '2082-03-32',
//   ad_start_date: '2024-07-16', ad_end_date: '2025-07-15',
//   total_days: 365
// }

// Fiscal year with offset
cal.get_fiscal_year('2082-03-15', 1);  // next fiscal year

// Fiscal year containing today
cal.get_current_fiscal_year();

// Days in a fiscal year, split across the boundary
cal.days_fiscal_wise(2081, 2082);
// { 2081: [31, 31, 32, ...], 2082: [31, 31, ...] }

// End date of the Nth month from a base date
cal.get_nth_month_end_date('2082-01-01', 3);  // end of 3rd month from base
```

### Today's Date in BS

```js
cal.today_nep();  // '2082-02-27' (today's BS date as a string)
```

### Leap Year Check

```js
cal.is_leap_year(2024);  // true
cal.is_leap_year(2025);  // false
```

### Today's Date in AD

```js
cal.today_eng();  // '2025-06-10' (today's AD date as a string)
```

### Date Offsets (AD)

Offset an AD date by N days (positive or negative):

```js
cal.get_date_eng('2025-06-10', 10);   // '2025-06-20' (10 days forward)
cal.get_date_eng('2025-06-10', -5);   // '2025-06-05' (5 days back)
```

### Month Boundaries (AD)

Get month boundaries directly from an AD year/month (unlike `get_month_dates_eng()` which takes BS year/month):

```js
cal.get_month_dates_eng_from_ad(2025, 6);
// { start_date: '2025-06-01', end_date: '2025-06-30', days: 30 }
```

### Date Validation

Check if a date string is valid and within the supported range:

```js
cal.is_valid_bs_date('2082-02-27');  // true
cal.is_valid_bs_date('2099-01-01');  // false (out of range)
cal.is_valid_ad_date('2025-06-10');  // true
cal.is_valid_ad_date('2050-01-01');  // false (out of range)
```

### Date Formatting

Format dates using tokens (`YYYY`, `YY`, `MMMM`, `MM`, `M`, `DD`, `D`) without needing the UI component:

```js
cal.format_bs('2082-02-27', 'DD MMMM YYYY');  // '27 Jestha 2082'
cal.format_ad('2025-06-10', 'DD MMMM YYYY');  // '10 June 2025'
cal.format_ad('2025-06-10', 'YYYY-MM-DD');    // '2025-06-10'
```

### Calendar Grid Builders

Get a full month grid with every day in both calendars — the same data the `<drp-datepicker>` uses internally:

#### BS Month Grid

```js
const month = cal.get_calendar_month_nep('2082-02');
// or: cal.get_calendar_month_nep(2082, 2)
// or with holidays: cal.get_calendar_month_nep('2082-02', {
//   holidays: [{ date: '2082-02-15', label: 'Some Holiday' }]
// });
```

Returns:

```js
{
  system: 'bs',
  year: 2082, month: 2,
  month_name: 'Jestha', month_name_ne: 'जेठ',
  days_in_month: 31,
  start_date_bs: '2082-02-01', end_date_bs: '2082-02-31',
  start_date_ad: '2025-05-15', end_date_ad: '2025-06-14',
  start_weekday: 2,       // 1=Sun ... 7=Sat
  leading_blanks: 1,      // empty cells before day 1
  days: [
    {
      bs_date: '2082-02-01', bs_year: 2082, bs_month: 2, bs_day: 1,
      ad_date: '2025-05-15', ad_year: 2025, ad_month: 5, ad_day: 15,
      weekday: 2, weekday_name: 'Monday',
      is_saturday: false, is_today: false,
      is_holiday: false, holiday_label: null,
    },
    // ...one entry per day in the month
  ],
}
```

#### English Month Grid

```js
const month = cal.get_calendar_month_eng('2025-06');
// or: cal.get_calendar_month_eng(2025, 6)
```

Same structure but driven by the Gregorian month, with BS dates filled in on every day.

Both accept either two numeric arguments (`year, month`) or a single `'YYYY-MM'` string.

### Supported Date Ranges

| Calendar | Range |
|----------|-------|
| **AD** | `1944-04-14` → `2041-04-14` |
| **BS** | `2000-01-01` → `2098-12-31` |

To extend beyond 2090, add rows to `src/core/bs-data.js` following the existing `[BS_YEAR, days_in_month_1..12]` format.

### Building Custom Calendar UIs

If you want to build your own calendar grid, month view, or scheduler without using the `<drp-datepicker>` component, `get_calendar_month_nep()` and `get_calendar_month_eng()` give you everything needed for one month in a single call — no manual day-by-day conversion loop required.

This is the exact same method the component uses internally, so your custom UI and the built-in picker will always agree.

---

## API Reference

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | `'bs'` \| `'ad'` | `'bs'` | Primary calendar system. `bs` = Nepali-first, `ad` = English-first |
| `name` | string | — | Form field name for `FormData` on submit |
| `required` | boolean | off | Blocks form submission until a date is picked |
| `value` | `'YYYY-MM-DD'` | — | Selected date, in whichever system `type` uses |
| `min` | `'YYYY-MM-DD'` | — | Disables earlier dates |
| `max` | `'YYYY-MM-DD'` | — | Disables later dates |
| `placeholder` | string | `"Select date (BS/AD)"` | Input placeholder text |
| `disabled` | boolean | off | Disables the picker |
| `inline` | boolean | off | Always-open calendar in page flow (no popup) |
| `digits` | `'en'` \| `'ne'` | `'en'` | Western vs Devanagari numerals. Also toggleable via the calendar footer |
| `mark-saturday` | `"true"` \| `"false"` | `"true"` | Styles Saturdays in the accent color |
| `first-day-of-week` | `0`–`6` | `0` | `0`=Sunday, `1`=Monday … `6`=Saturday |
| `format` | string | — | Display format for the input field. See [Format Tokens](#format-tokens) |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `.value` | `string` | Get/set selected date in the current `type` system |
| `.valueBS` | `string` | Always BS `'YYYY-MM-DD'`, regardless of `type` |
| `.valueAD` | `string` | Always AD `'YYYY-MM-DD'`, regardless of `type` |
| `.holidays` | `Array<{ date: 'YYYY-MM-DD' (BS), label?: string }>` | Optional holiday dates |
| `.disabledDates` | `Array<{ date: 'YYYY-MM-DD' }>` | Specific dates to disable |
| `.type` | `string` | `'bs'` or `'ad'` |
| `.name` | `string` | Form field name |
| `.required` | `boolean` | Required state |
| `.disabled` | `boolean` | Disabled state |
| `.firstDayOfWeek` | `number` | `0`–`6` |
| `.format` | `string \| null` | Display format string |
| `.calendar` | `DrpNepaliCalendar` | Direct access to the conversion engine |
| `.validity` | `ValidityState` | Form validity (from `ElementInternals`) |
| `.validationMessage` | `string` | Validation error message |
| `.willValidate` | `boolean` | Whether the element will validate |

### Methods

| Method | Description |
|--------|-------------|
| `.open()` | Opens the popup panel |
| `.close()` | Closes the popup, returns focus to trigger |
| `.toggle()` | Toggles open/close |
| `.clear()` | Clears the selection, fires `change` event |
| `.today()` | Selects today's date (popup stays open) |
| `.getADDate()` | Returns `{ year, month, date, day, emonth, num_day }` or `null` |
| `.checkValidity()` | Returns `true` if the element is valid |
| `.reportValidity()` | Shows browser validation UI if invalid |

### Events

| Event | `detail` | Bubbles | Description |
|-------|----------|---------|-------------|
| `change` | `{ bs: {...} \| null, ad: {...} \| null }` | Yes | Fires on selection or clear |
| `open` | — | No | Fires when panel opens |
| `close` | — | No | Fires when panel closes |

### Format Tokens

Tokens are replaced case-sensitively. Numeric tokens respect the `digits` setting.

| Token | Example (BS) | Example (AD) |
|-------|--------------|--------------|
| `YYYY` | `२०८२` | `2025` |
| `YY` | `८२` | `25` |
| `MMMM` | `Jestha` | `June` |
| `MM` | `०२` | `06` |
| `M` | `२` | `6` |
| `DD` | `२७` | `27` |
| `D` | `२७` | `27` |

---

## Styling and Theming

The component uses Shadow DOM. All styles are encapsulated — theme it from the host page using CSS custom properties.

### CSS Custom Properties

```css
drp-datepicker {
  --ndp-accent: #b3352b;       /* selected day, saturday, holiday dot */
  --ndp-accent-soft: #f4ded9;  /* hover backgrounds */
  --ndp-today: #1f4b7a;        /* today's outline ring */
  --ndp-bg: #fdfaf5;           /* input background */
  --ndp-panel-bg: #ffffff;     /* calendar panel background */
  --ndp-border: #e7dfd2;       /* input and panel border */
  --ndp-text: #2a241d;         /* primary text color */
  --ndp-muted: #8c8272;        /* secondary/muted text */
  --ndp-radius: 10px;          /* border radius */
  --ndp-shadow: /* panel shadow */;
  --ndp-font: /* font stack */;
}
```

### Shadow DOM Parts

For deeper styling without breaking encapsulation:

```css
drp-datepicker::part(field)   { /* the outer wrapper */ }
drp-datepicker::part(input)   { /* the text input */ }
drp-datepicker::part(trigger) { /* the calendar icon button */ }
drp-datepicker::part(panel)   { /* the popup calendar */ }
drp-datepicker::part(day)     { /* individual day cells */ }
```

### Dark Mode Example

```css
@media (prefers-color-scheme: dark) {
  drp-datepicker {
    --ndp-bg: #1a1a2e;
    --ndp-panel-bg: #16213e;
    --ndp-border: #0f3460;
    --ndp-text: #e0e0e0;
    --ndp-muted: #a0a0a0;
    --ndp-accent: #e94560;
    --ndp-accent-soft: #2a1a2e;
  }
}
```

---

## Accessibility

### Keyboard Navigation

| Key | Action |
|-----|--------|
| **Arrow keys** | Navigate between day cells in the grid |
| **Enter / Space** | Select the focused day |
| **Page Up / Down** | Move to the previous/next month |
| **Home / End** | Jump to the first/last day of the current month |
| **Escape** | Close the panel |
| **Tab** | Cycle through panel controls (prev/next month, month/year picker, Clear, Today, digit toggle) |

When the panel closes, focus returns to the trigger button.

### ARIA and Screen Readers

- **Panel:** `role="dialog"`, `aria-modal="true"`, `aria-label` with month/year
- **Day grid:** `role="grid"`, `aria-label` with month/year
- **Day cells:** `role="gridcell"`, `aria-selected`, `tabindex="-1"`
- **Trigger button:** `aria-haspopup="dialog"`, toggles `aria-expanded`
- **Live region:** `aria-live="polite"` announces date selection, clearing, and errors without interrupting

### Direct Input

The input field is editable (not `readonly`). You can type a date directly:

- `YYYY-MM-DD` format (e.g., `2082-02-27`)
- `"DD MonthName YYYY"` format (e.g., `"27 Jestha 2082"`)

Invalid input shows a red error border. Valid input updates the picker automatically on Enter or blur.

---

## Browser Support

| Environment | Supported |
|-------------|-----------|
| Chrome / Edge | Yes |
| Firefox | Yes |
| Safari | Yes |
| Electron (Chromium) | Yes (tested in Electron 43) |
| Node.js | Core API only (no web component) |

The web component uses standard Custom Elements v1, Shadow DOM, and `ElementInternals` — all available in modern browsers. No polyfills required.

---

## Development

```bash
# Clone the repo
git clone https://github.com/darpanadhikari/date-picker-demo.git
cd date-picker-demo

# Install dependencies (dev only — esbuild + jsdom)
npm install

# Build all output formats
npm run build

# Run tests
npm test
```

### Project Structure

```
src/
  index.js                          Entry point — exports + auto-registration
  core/
    bs-data.js                      BS_DATA table + month/weekday constants
    nepali-calendar.js              DrpNepaliCalendar class (conversion engine)
  components/
    nepali-datepicker.js            DrpDatePicker web component
dist/
  drp-datepicker.cjs.js             CommonJS (full: core + component)
  drp-datepicker.esm.js             ES Module (full: core + component)
  drp-datepicker.global.js          IIFE minified (for <script> tags)
  drp-core.cjs.js                   CommonJS core-only (no DOM)
  *.map                             Source maps
examples/
  script-tag-usage.html             Plain <script> tag usage
  cdn-usage.html                    CDN via unpkg
  module-usage.html                 ES module with multiple pickers
  form-usage.html                   Form integration demo
scripts/
  build.mjs                         esbuild configuration
  smoke-test.mjs                    Component rendering tests
  form-test.mjs                     Form API tests
```

### Build Outputs

| File | Format | Size | Use Case |
|------|--------|------|----------|
| `drp-datepicker.cjs.js` | CommonJS | ~68 KB | `require()` in Node/Electron |
| `drp-datepicker.esm.js` | ESM | ~67 KB | Bundlers |
| `drp-datepicker.global.js` | IIFE (minified) | ~40 KB | `<script>` tags, CDN |
| `drp-core.cjs.js` | CommonJS | ~30 KB | Core-only, no DOM (Node) |

---

## Troubleshooting

**The datepicker doesn't appear**

- Make sure you've imported the package (`import 'drp-datepicker'`) or loaded the script tag. The component won't render without registration.
- If using a bundler, ensure the import is included (not tree-shaken away).

**Form `FormData` doesn't include the datepicker value**

- Make sure the `name` attribute is set on `<drp-datepicker>`. Without it, the value won't be included in `FormData`.
- The `ElementInternals` API must be available in your browser. Check Chrome 77+, Firefox 75+, Safari 15.4+.

**Holidays don't show in AD mode**

- Holiday dates are always specified in **BS** format, regardless of `type="ad"`. The component converts them internally. If your holiday data is in AD, convert it to BS first using `cal.eng_to_nep()`.

**Holidays don't appear at all**

- Ensure each holiday has a `date` field in `'YYYY-MM-DD'` format (e.g., `'2082-07-10'`).
- Dates outside the supported range (BS 2000–2098) are silently ignored.
- The `label` field is optional — if omitted, the dot still appears but no tooltip is shown.
- Check that `dp.holidays` is set **before** the picker opens. If you set it after, call `dp.open()` again to re-render.

**The calendar doesn't flip above the input when there's no room below**

- This only works in popup mode. In `inline` mode, the calendar is always in page flow.

**Devanagari digits aren't displaying**

- Set `digits="ne"` on the element, or toggle via the footer button. Some fonts may not support Devanagari characters — the component uses the system's default.

**`nep_to_eng_date()` rejects a valid Nepali date**

- Ensure the format is exactly `'YYYY-MM-DD'` with zero-padded months and days (e.g., `'2082-02-07'`, not `'2082-2-7'`).

---

## TypeScript

The package is written in plain JavaScript with JSDoc annotations. No bundled `.d.ts` files are included at this time.

If you need TypeScript support in your project, you can create a local declaration file:

```ts
// drp-datepicker.d.ts
declare module 'drp-datepicker' {
  export class DrpNepaliCalendar {
    eng_to_nep(yy: number, mm: number, dd: number): { year: number; month: number; date: number; day: string; nmonth: string; num_day: number } | false;
    nep_to_eng(yy: number, mm: number, dd: number): { year: number; month: number; date: number; day: string; emonth: string; num_day: number } | false;
    eng_to_nep_date(date: string): ReturnType<DrpNepaliCalendar['eng_to_nep']>;
    nep_to_eng_date(date: string): ReturnType<DrpNepaliCalendar['nep_to_eng']>;
    today_nep(): string;
    is_leap_year(year: number): boolean;
    // ... additional methods
  }
}

declare module 'drp-datepicker/core' {
  export { DrpNepaliCalendar } from 'drp-datepicker';
}
```

Contributions to add official type definitions are welcome — see [Contributing](#contributing).

---

## Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Run `npm test` to verify nothing is broken
5. Run `npm run build` to ensure the build passes
6. Commit your changes and open a pull request

**Guidelines:**
- Keep the zero-dependency philosophy — avoid adding runtime dependencies
- Maintain backward compatibility with existing API
- Add tests for new features
- Update the README if adding public API

---

## Changelog

### v1.3.0

- Extended date range: BS 2000–2098 (AD 1944–2041), up from BS 2000–2090
- Added `today_eng()` — today's date as AD string
- Added `get_date_eng()` — offset AD dates by N days
- Added `get_month_dates_eng_from_ad()` — month boundaries from AD year/month
- Added `is_valid_bs_date()` / `is_valid_ad_date()` — date validation helpers
- Added `format_bs()` / `format_ad()` — string formatting without UI
- Added TypeScript type definitions (`types/` directory)
- Updated package.json with types field and enhanced keywords

### v1.2.0

- Added `get_calendar_month_nep()` and `get_calendar_month_eng()` — full month grid builders
- Added `disabledDates` property for disabling specific dates
- Added `first-day-of-week` attribute
- Added `format` attribute with token-based display formatting
- Added Devanagari numeral toggle (`digits="ne"`)
- Added `mark-saturday` attribute
- Improved keyboard navigation (PageUp/Down, Home/End)
- Added `aria-live` announcements for screen readers
- Added `::part()` CSS selectors for deeper styling
- Form-associated custom element support (`ElementInternals`)
- Smart panel positioning (flips above when no room below)

### v1.0.0

- Initial release
- `<drp-datepicker>` Web Component with BS/AD dual-calendar cells
- `DrpNepaliCalendar` conversion engine
- BS ↔ AD date conversion (both directions)
- Holiday marking
- Inline mode
- Keyboard navigation
- Shadow DOM with CSS custom property theming
- CDN, ESM, CJS, and script tag support

---

## License

MIT License. Copyright (c) 2026 Darpan.

See [LICENSE](./LICENSE) for full text.

---

Developed by [Darpan Adhikari](https://darpanadhikari.com.np)

**Live demo:** https://darpanadhikari.github.io/date-picker-demo

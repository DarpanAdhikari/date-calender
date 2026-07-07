# drp-nepali-datepicker

A dependency-free Bikram Sambat (BS) ↔ Gregorian (AD) date conversion engine plus a
modern `<drp-datepicker>` Web Component — install once, drop it into any page.

- **One picker, two calendars.** Use it as a Nepali-first picker with the English date
  shown small in the corner, or flip it around to an English-first picker with the
  Nepali date shown small in the corner — same component, one attribute.
- **Full BS ↔ AD conversion API**, usable entirely on its own with no UI at all.
- **Zero dependencies, zero build step required to use it.**
- **Works everywhere:** ES module import, CommonJS `require()`, a CDN `<script>` tag, or bundled into a React/Vue/Electron app.
- **Optional holidays.** Give it a list of dates and they're marked automatically. Skip it and the calendar just looks normal.

## Live preview

Every day cell shows the primary calendar's date large and centered, with the other
calendar's date in small text tucked into the **bottom-right corner** of the cell —
so both calendars are visible at a glance without cluttering the grid. The month
header does the same: a large title in the primary calendar, a small date-range
subtitle in the other one.

## Install

```bash
npm install drp-nepali-datepicker
```

### Or via CDN — no npm, no build step

Drop this into any HTML page and you're done:

```html
<drp-datepicker id="dp"></drp-datepicker>

<script src="https://unpkg.com/drp-nepali-datepicker/dist/drp-datepicker.global.js"></script>
<script>
  const dp = document.getElementById('dp');
  dp.addEventListener('change', (e) => console.log(e.detail));
</script>
```

jsDelivr works the same way, and you can pin a version once you've published one:

```html
<script src="https://cdn.jsdelivr.net/npm/drp-nepali-datepicker@1/dist/drp-datepicker.global.js"></script>
```

Both CDNs auto-register `<drp-datepicker>` and expose `window.DRP = { DrpNepaliCalendar, DrpDatePicker, registerDrpDatePicker }`.

## Quick start

### As an ES module (bundler, or `<script type="module">`)

```js
import 'drp-nepali-datepicker'; // registers <drp-datepicker> and you're done
```

```html
<drp-datepicker id="dp" placeholder="Select a date"></drp-datepicker>
<script type="module">
  const dp = document.getElementById('dp');
  dp.addEventListener('change', (e) => {
    console.log(e.detail.bs.formatted); // '2082-02-27'
    console.log(e.detail.ad.formatted); // '2025-06-10'
  });
</script>
```

### English-first picker

```html
<drp-datepicker type="ad" placeholder="Select a date"></drp-datepicker>
```

This flips the whole component: the grid is driven by the Gregorian calendar, the
month/year navigation moves through English months, and the small corner date on
each cell becomes the Nepali (BS) equivalent instead.

### Just the conversion logic, no UI

```js
import { DrpNepaliCalendar } from 'drp-nepali-datepicker/core';
// or CommonJS: const { DrpNepaliCalendar } = require('drp-nepali-datepicker/core');

const cal = new DrpNepaliCalendar();
cal.eng_to_nep(2025, 6, 10);   // -> { year: 2082, month: 2, date: 27, day: 'Tuesday', nmonth: 'Jestha', num_day: 3 }
cal.nep_to_eng(2082, 2, 27);   // -> { year: 2025, month: 6, date: 10, day: 'Tuesday', emonth: 'Jun', num_day: 3 }
```

Conversion works fully in both directions — Nepali → English and English → Nepali —
along with month boundaries, date offsets, multi-month ranges, and fiscal-year helpers.
See the full API list below.

See `examples/module-usage.html` and `examples/script-tag-usage.html` for complete working pages.

## `<drp-datepicker>` — attributes

| Attribute        | Type                          | Default              | Notes |
|-------------------|-------------------------------|-----------------------|-------|
| `type`            | `bs` \| `ad`                   | `bs`                   | `bs` = Nepali-primary (English shown small, bottom-right of each cell). `ad` = English-primary (Nepali shown small, bottom-right). |
| `name`            | string                        | —                      | Pairs with `.value` in `FormData` on submit — see [Using it in a form](#using-it-in-a-form). |
| `required`        | boolean attr                  | off                    | Blocks form submission until a date is picked; drives `:invalid`/`:valid`. |
| `value`           | `'YYYY-MM-DD'`                 | —                      | In whichever system `type` is set to. Settable/gettable. |
| `min`             | `'YYYY-MM-DD'`                 | —                      | In whichever system `type` is set to. Disables earlier days. |
| `max`             | `'YYYY-MM-DD'`                 | —                      | In whichever system `type` is set to. Disables later days. |
| `placeholder`     | string                        | `"Select date (BS/AD)"` | |
| `disabled`        | boolean attr                  | off                    | |
| `inline`          | boolean attr                  | off                    | Renders the calendar always-open in the page flow instead of a popup. |
| `digits`          | `en` \| `ne`                   | `en`                   | Western vs Devanagari (०-९) numerals for the Nepali numbers. Also toggleable by the user via the calendar footer. |
| `mark-saturday`   | `"true"` \| `"false"`          | `"true"`               | Styles Saturdays (the Nepali weekly holiday) in the accent color. |

## `<drp-datepicker>` — properties

| Property    | Type                                        | Notes |
|-------------|----------------------------------------------|-------|
| `.value`    | `string`                                      | Get/set the selected date, in whichever system `type` is set to. |
| `.valueBS`  | `string` (`'YYYY-MM-DD'`, Nepali)             | Always available, regardless of `type`. |
| `.valueAD`  | `string` (`'YYYY-MM-DD'`, English)            | Always available, regardless of `type`. |
| `.holidays` | `Array<{ date: 'YYYY-MM-DD' (BS), label?: string }>` | **Optional.** If you never set this (or set `[]`), the calendar simply ignores holidays. |
| `.calendar` | `DrpNepaliCalendar` instance                  | Direct access to the conversion engine used internally. |

## `<drp-datepicker>` — methods

- `.open()` / `.close()` / `.toggle()`
- `.clear()` — clears the selection
- `.today()` — selects today's date (call `.close()` afterwards if you don't want the popup to stay open)
- `.getADDate()` — returns the English-calendar equivalent of the current selection, or `null`

## `<drp-datepicker>` — events

- `change` — fires on selection. `event.detail = { bs: {year, month, date, formatted}, ad: {year, month, date, formatted} }` (both `null` if cleared).
- `open` / `close`

## Using it in a form

`<drp-datepicker>` is a real [form-associated custom element](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#form-associated_custom_elements) —
it behaves like a native `<input>` inside a `<form>`, not just a standalone widget:

```html
<form id="booking">
  <drp-datepicker name="deliveryDate" required></drp-datepicker>
  <button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById('booking');
const dp = form.querySelector('drp-datepicker');

// Listen for changes exactly like any other input
dp.addEventListener('change', (e) => {
  console.log(e.detail.bs.formatted, e.detail.ad.formatted);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(data.get('deliveryDate')); // included automatically, via `name`
});
```

What you get for free, the same way you would with a native `<input>`:

- **`name` + `FormData`** — the selected date is included in the form's `FormData` automatically, no hidden input or manual wiring needed.
- **`required`** — the form won't submit until a date is picked; `.checkValidity()` / `.reportValidity()` work, and the element gets the standard `:invalid` / `:valid` CSS states you can style from the host page (`drp-datepicker:invalid { ... }`).
- **`form.reset()`** clears the picker automatically.
- **`<fieldset disabled>`** automatically disables the picker along with the rest of the fieldset.
- **`change` event** — fires on every selection, bubbles, same as native inputs; use it for live validation, summaries, whatever you'd normally do with an `onchange` handler.

A complete runnable page is in `examples/form-usage.html`.

> **Note on testing:** this uses the standard `ElementInternals`/form-association API, which
> is fully supported in real browsers and Electron (Chromium) — including the Electron 43
> renderer this package was built for. jsdom (used for this package's own `npm test`) only
> partially implements that spec as of this writing, so the automated test suite verifies
> the component's value/event/attribute behavior directly rather than asserting on
> `FormData`/`:invalid` through jsdom. If you want to confirm the `FormData`/`required`
> behavior yourself, open `examples/form-usage.html` in an actual browser or your Electron app.

## Styling

The component uses Shadow DOM. Theme it with CSS custom properties from the host page:

```css
drp-datepicker {
  --ndp-accent: #b3352b;      /* selected day, saturday, holiday dot */
  --ndp-accent-soft: #f4ded9; /* hover backgrounds */
  --ndp-today: #1f4b7a;       /* today's outline ring */
  --ndp-bg: #fdfaf5;
  --ndp-panel-bg: #ffffff;
  --ndp-border: #e7dfd2;
  --ndp-radius: 10px;
}
```

Internal parts are also exposed for deeper overrides: `::part(field)`, `::part(input)`, `::part(trigger)`, `::part(panel)`, `::part(day)`.

## Holidays

Holidays are entirely optional. If `.holidays` is never set, the calendar renders with no
holiday styling at all. When you do provide a list, each entry's `date` is a **Nepali (BS)**
date string, matched exactly against each grid cell — regardless of whether the picker is
running in `bs` or `ad` mode:

```js
dp.holidays = [
  { date: '2082-01-01', label: 'Nepali New Year' },
  { date: '2082-07-10', label: 'Vijaya Dashami' },
];
```

Matched days get a small dot on the cell and the `label` as a tooltip (`title` attribute).

## Building your own calendar UI

If you don't want to use `<drp-datepicker>` and would rather build your own calendar
grid, month view, or scheduler, `get_calendar_month_nep()` / `get_calendar_month_eng()`
give you everything needed for one month in a single call — no manual day-by-day
conversion loop required. This is the exact same method `<drp-datepicker>` uses
internally, so your custom UI and the built-in picker will always agree.

```js
import { DrpNepaliCalendar } from 'drp-nepali-datepicker/core';
const cal = new DrpNepaliCalendar();

// A Nepali month, e.g. what a developer would type as "2083-03"
const month = cal.get_calendar_month_nep('2083-03', {
  holidays: [{ date: '2083-03-01', label: 'Nepali New Year' }],
});
```

```js
{
  system: 'bs',
  year: 2083, month: 3,
  month_name: 'Ashadh', month_name_ne: 'असार',
  days_in_month: 32,
  start_date_bs: '2083-03-01', end_date_bs: '2083-03-32',
  start_date_ad: '2026-06-15', end_date_ad: '2026-07-16',
  start_weekday: 2,       // 1=Sun ... 7=Sat, weekday of day 1
  leading_blanks: 1,      // empty cells to pad a 7-column grid before day 1
  days: [
    {
      bs_date: '2083-03-01', bs_year: 2083, bs_month: 3, bs_day: 1,
      ad_date: '2026-06-15', ad_year: 2026, ad_month: 6, ad_day: 15,
      weekday: 2, weekday_name: 'Monday',
      is_saturday: false,
      is_today: false,
      is_holiday: true, holiday_label: 'Nepali New Year',
    },
    // ...one entry per day in the month
  ],
}
```

The mirror version, `get_calendar_month_eng()`, does the same thing driven by the
Gregorian month instead — a developer hands it something like `'2026-06'` and gets
the full month back with the BS date filled in on every day:

```js
cal.get_calendar_month_eng('2026-06')
cal.get_calendar_month_eng(2026, 6, { holidays: [...] }) // year/month also accepted separately
```

Both accept the year/month either as two separate arguments or as a single `'YYYY-MM'`
string — whichever a caller already has on hand. `holidays` is always optional and
always a list of **BS** dates, matching the `<drp-datepicker>` convention.

## Core `DrpNepaliCalendar` API

- `eng_to_nep(yy, mm, dd)` / `nep_to_eng(yy, mm, dd)` — convert a single date either direction
- `eng_to_nep_date('YYYY-MM-DD')` / `nep_to_eng_date('YYYY-MM-DD')` — same, from a date string
- `get_month_dates_nep(year, month)` / `get_month_dates_eng(year, month)` — month start/end boundaries
- `get_date_nep(bsDateStr, days)` — offset a BS date by N days (either direction)
- `get_months_dates_nep(fromBsDate, toBsDate)` / `get_months_dates_eng(...)` — every month spanning a range
- `get_bs_month_range_with_point(baseBsDate, days)`
- `get_bs_month_range_excluding_partial(baseBsDate, days)`
- `get_bs_months_touched(baseBsDate, days)`
- `get_calendar_month_nep(year, month, options?)` / `get_calendar_month_nep('YYYY-MM', options?)` — full month grid, every day in both calendars, weekday/today/holiday flags included
- `get_calendar_month_eng(year, month, options?)` / `get_calendar_month_eng('YYYY-MM', options?)` — same, driven by the Gregorian month instead
- `days_fiscal_wise(fromYear, toYear)`
- `get_fiscal_year(bsDate, offset = 0)`
- `get_fiscal_year_by_days(bsDate, days)`
- `get_current_fiscal_year(offset = 0)` — resolves "today" for you automatically
- `get_nth_month_end_date(baseBsDate, months)`
- `today_nep()` — today's date as a BS `'YYYY-MM-DD'` string
- `is_leap_year(adYear)`

Supported ranges: AD `1944-04-14` → `~2033`, BS `2000-01-01` → `2090-12-xx` — extend the
`BS_DATA` table in `src/core/bs-data.js` if you need years beyond that.

`nep_to_eng_date()` validates its input by shape (`'YYYY-MM-DD'`) and range rather than by
running it through a Gregorian-calendar check, so Nepali dates in 32-day months (e.g.
`'2082-01-32'`) convert correctly instead of being rejected.

## Project structure

```
src/
  core/
    bs-data.js              BS calendar reference table + month/weekday name lists
    nepali-calendar.js      DrpNepaliCalendar conversion class
  components/
    nepali-datepicker.js    <drp-datepicker> Web Component
  index.js                  Main entry — exports + auto-registers the element
dist/                       Built bundles (cjs / esm / browser global)
examples/                   Runnable usage examples
scripts/
  build.mjs                 esbuild bundling script
  smoke-test.mjs             jsdom-based test suite (conversion + picker rendering)
  form-test.mjs              jsdom-based test suite (name/required/value/change API)
```

## Building & testing from source

```bash
npm install
npm run build   # esbuild -> dist/drp-datepicker.{cjs,esm,global}.js
npm test        # scripts/smoke-test.mjs (conversion + picker rendering) and
                 # scripts/form-test.mjs (name/required/value/change API)
```

---

## Publishing to npm

1. Update the `name` (must be unique on npm) and `version` fields in `package.json` if needed.
2. Log in once per machine:
   ```bash
   npm login
   ```
3. Build and publish:
   ```bash
   npm run build
   npm publish
   ```
   `prepublishOnly` runs the build automatically, so `npm publish` alone is enough once you're logged in.
4. To ship an update later, bump the version and publish again:
   ```bash
   npm version patch   # or minor / major
   npm publish
   ```
5. Once published, the CDN links above (unpkg / jsDelivr) work immediately — no extra setup needed.

## Publishing to GitHub

1. Initialize the repo (skip if already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: drp-nepali-datepicker"
   ```
2. Create a new empty repository on GitHub (via the website or `gh repo create`), then:
   ```bash
   git remote add origin https://github.com/<your-username>/drp-nepali-datepicker.git
   git branch -M main
   git push -u origin main
   ```
3. `node_modules/` and `dist/*.map` are already excluded via `.gitignore` — `dist/` itself
   is fine to commit if you want the CDN/GitHub-Pages route to work directly off `main`,
   or leave it out and rely on the npm-published build instead.
4. Optional: add an automated npm publish on every GitHub release by creating
   `.github/workflows/publish.yml`:
   ```yaml
   name: Publish to npm
   on:
     release:
       types: [published]
   jobs:
     publish:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             registry-url: 'https://registry.npmjs.org'
         - run: npm ci
         - run: npm run build
         - run: npm publish
           env:
             NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
   ```
   Add an `NPM_TOKEN` secret (an npm "Automation" access token) under the repo's
   **Settings → Secrets and variables → Actions**, then publishing becomes: bump the
   version, tag a GitHub Release, and the workflow does the rest.

## License

MIT

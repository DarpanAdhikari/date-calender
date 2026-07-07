import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.customElements = dom.window.customElements;
global.CustomEvent = dom.window.CustomEvent;

const { registerDrpDatePicker, DrpNepaliCalendar } = await import('../src/index.js');

function makeEl(attrs = {}) {
  const el = document.createElement('drp-datepicker');
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  document.body.appendChild(el);
  return el;
}

// ── Test 1: BS-primary (default) ────────────────────────────────────────
{
  const el = makeEl({ value: '2082-02-27' });
  console.log('T1 value (bs default):', el.value, '| valueBS:', el.valueBS, '| valueAD:', el.valueAD);
  el.open();
  const shadow = el.shadowRoot;
  const dayButtons = shadow.querySelectorAll('.day[data-key]');
  console.log('T1 day count (Jestha 2082, expect 31):', dayButtons.length);
  const selected = shadow.querySelector('.day.is-selected');
  console.log('T1 selected cell text:', selected ? selected.textContent.trim().replace(/\s+/g, ' ') : null);
  const headerPrimary = shadow.querySelector('.primary-label').textContent;
  const headerSecondary = shadow.querySelector('.secondary-label').textContent;
  console.log('T1 header:', headerPrimary, '|', headerSecondary);
}

// ── Test 2: AD-primary ───────────────────────────────────────────────────
{
  const el = makeEl({ type: 'ad', value: '2025-06-10' });
  console.log('\nT2 value (ad):', el.value, '| valueBS:', el.valueBS, '| valueAD:', el.valueAD);
  el.open();
  const shadow = el.shadowRoot;
  const dayButtons = shadow.querySelectorAll('.day[data-key]');
  console.log('T2 day count (June 2025, expect 30):', dayButtons.length);
  const selected = shadow.querySelector('.day.is-selected');
  console.log('T2 selected cell text:', selected ? selected.textContent.trim().replace(/\s+/g, ' ') : null);
  const headerPrimary = shadow.querySelector('.primary-label').textContent;
  const headerSecondary = shadow.querySelector('.secondary-label').textContent;
  console.log('T2 header:', headerPrimary, '|', headerSecondary);

  // spot-check a few secondary (BS) numbers against direct conversion
  const cal = new DrpNepaliCalendar();
  let mismatches = 0;
  dayButtons.forEach((btn) => {
    const adKey = btn.dataset.key;
    const [y, m, d] = adKey.split('-').map(Number);
    const expectedBs = cal.eng_to_nep(y, m, d);
    const secondaryText = btn.querySelector('.secondary-num').textContent.trim();
    if (String(expectedBs.date) !== secondaryText) {
      mismatches++;
      console.log('  MISMATCH', adKey, 'expected BS day', expectedBs.date, 'got', secondaryText);
    }
  });
  console.log('T2 secondary(BS)-number mismatches:', mismatches);
}

// ── Test 3: holidays + digit toggle + selection click ────────────────────
{
  const el = makeEl();
  el.holidays = [{ date: '2082-02-15', label: 'Test Holiday' }];
  el.setAttribute('digits', 'ne');
  el.setAttribute('value', '2082-02-01');
  el.open();
  const shadow = el.shadowRoot;
  const holidayCell = shadow.querySelector('.day.is-holiday');
  console.log('\nT3 holiday cell found:', !!holidayCell, holidayCell ? holidayCell.getAttribute('title') : null);
  const firstNum = shadow.querySelector('.day .primary-num').textContent;
  console.log('T3 devanagari digit rendering (expect १):', firstNum);

  let changeDetail = null;
  el.addEventListener('change', (e) => { changeDetail = e.detail; });
  // click day 20
  const dayButtons = [...shadow.querySelectorAll('.day[data-key]')];
  const target = dayButtons.find((b) => b.dataset.key.endsWith('-20'));
  target.click();
  console.log('T3 change event detail:', JSON.stringify(changeDetail));
  console.log('T3 el.value after click:', el.value);
}

// ── Test 4: min/max disabling ─────────────────────────────────────────────
{
  const el = makeEl({ min: '2082-02-10', max: '2082-02-20', value: '2082-02-15' });
  el.open();
  const shadow = el.shadowRoot;
  const disabledCount = shadow.querySelectorAll('.day[data-key]:disabled').length;
  console.log('\nT4 disabled day count (31 - 11 = 20 expected):', disabledCount);
}

console.log('\nALL SMOKE TESTS RAN');

// ── Test 5: calendar-grid builder methods ─────────────────────────────
{
  const cal = new DrpNepaliCalendar();
  const m1 = cal.get_calendar_month_nep('2083-03', { holidays: [{ date: '2083-03-01', label: 'New Year' }] });
  console.log('\nT5 get_calendar_month_nep(2083-03): days_in_month=', m1.days_in_month, 'start_weekday=', m1.start_weekday);
  console.log('T5 day[0] holiday flag:', m1.days[0].is_holiday, m1.days[0].holiday_label);
  console.log('T5 matches component grid? day[0].ad_date:', m1.days[0].ad_date);

  const m2 = cal.get_calendar_month_eng(2026, 6);
  console.log('T5 get_calendar_month_eng(2026,6): days_in_month=', m2.days_in_month, 'bs range:', m2.start_date_bs, '-', m2.end_date_bs);
}

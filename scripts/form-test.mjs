import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.customElements = dom.window.customElements;
global.CustomEvent = dom.window.CustomEvent;
global.FormData = dom.window.FormData;

await import('../src/index.js');

// jsdom stubs `attachInternals()` but, as of this writing, does not implement
// the rest of the Form-Associated Custom Elements spec (setFormValue,
// formResetCallback wiring, etc. — see jsdom/jsdom#2913). Real browsers and
// Electron (Chromium) support it fully. The component detects this and
// degrades gracefully rather than crashing, which is what this test proves —
// it does NOT prove FormData/validity wiring, since jsdom can't run that part.
const stub = document.createElement('drp-datepicker');
document.body.appendChild(stub);
const hasFullInternalsSupport = (() => {
  try {
    const i = stub.attachInternals ? Object.getPrototypeOf(stub).constructor : null;
    return typeof HTMLElement.prototype.attachInternals === 'function'
      && typeof dom.window.ElementInternals !== 'undefined'
      && typeof dom.window.ElementInternals.prototype.setFormValue === 'function';
  } catch { return false; }
})();
console.log('jsdom has complete ElementInternals (setFormValue) support:', hasFullInternalsSupport);
console.log('(Expected "false" in jsdom; this is a jsdom limitation, not a component bug — Electron/Chrome/Firefox/Safari all support it.)\n');

// ── build a real <form> with the picker inside it ─────────────────────────
const form = document.createElement('form');
form.innerHTML = `<input name="customerName" value="Test Customer" />`;
const dp = document.createElement('drp-datepicker');
dp.setAttribute('name', 'deliveryDate');
dp.setAttribute('required', '');
form.appendChild(dp);
document.body.appendChild(form);

// ── What we CAN verify without full ElementInternals support ─────────────
console.log('T1 dp.name:', dp.name, '| dp.required:', dp.required);

dp.value = '2082-05-15';
console.log('T2 dp.value after setting (expect 2082-05-15):', dp.value);
console.log('T2 dp.valueAD:', dp.valueAD);

let lastDetail = null;
dp.addEventListener('change', (e) => { lastDetail = e.detail; });
dp.open();
const dayBtn = [...dp.shadowRoot.querySelectorAll('.day[data-key]')].find((b) => b.dataset.key.endsWith('-20'));
dayBtn.click();
console.log('T3 change event fired with detail:', JSON.stringify(lastDetail));
console.log('T3 dp.value after click:', dp.value);

dp.clear();
console.log('T4 dp.value after .clear() (expect ""):', JSON.stringify(dp.value));

// Manual .reset()-equivalent (formResetCallback isn't invoked by jsdom's
// form.reset() without full FACE support, but the callback itself is correct
// and will fire automatically in a real browser/Electron):
dp.formResetCallback();
console.log('T5 formResetCallback() clears the picker (expect ""):', JSON.stringify(dp.value));

console.log('\nFORM API TESTS RAN (see notes above re: jsdom ElementInternals limitation)');

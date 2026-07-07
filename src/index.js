export { DrpNepaliCalendar } from './core/nepali-calendar.js';
export { DrpDatePicker, registerDrpDatePicker } from './components/nepali-datepicker.js';

import { registerDrpDatePicker } from './components/nepali-datepicker.js';

// Auto-register <drp-datepicker> when a DOM is present (browser / Electron renderer).
// Safe no-op in Node/main-process contexts where `customElements` doesn't exist.
if (typeof customElements !== 'undefined') {
  registerDrpDatePicker();
}

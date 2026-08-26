export { DrpNepaliCalendar } from './nepali-calendar';
export type {
  BsResult,
  AdResult,
  MonthDates,
  MonthDatesEng,
  CalendarDayBs,
  CalendarDayAd,
  CalendarMonthBs,
  CalendarMonthAd,
  FiscalYearResult,
  Holiday,
  CalendarOptions,
} from './nepali-calendar';

export class DrpDatePicker extends HTMLElement {
  static readonly formAssociated: boolean;

  value: string;
  valueBS: string;
  valueAD: string;
  holidays: Holiday[];
  disabledDates: Array<{ date: string }>;
  type: 'bs' | 'ad';
  name: string;
  required: boolean;
  disabled: boolean;
  firstDayOfWeek: number;
  format: string | null;
  calendar: DrpNepaliCalendar;
  validity: ValidityState;
  validationMessage: string;
  willValidate: boolean;

  open(): void;
  close(): void;
  toggle(): void;
  clear(): void;
  today(): void;
  getADDate(): {
    year: number;
    month: number;
    date: number;
    day: string;
    emonth: string;
    num_day: number;
  } | null;
  checkValidity(): boolean;
  reportValidity(): boolean;
}

export function registerDrpDatePicker(tagName?: string): void;

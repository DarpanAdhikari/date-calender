export interface BsResult {
  year: number;
  month: number;
  date: number;
  day: string;
  nmonth: string;
  num_day: number;
}

export interface AdResult {
  year: number;
  month: number;
  date: number;
  day: string;
  emonth: string;
  num_day: number;
}

export interface MonthDates {
  start_date: string;
  end_date: string;
  days: number;
}

export interface MonthDatesEng {
  start_date: string;
  end_date: string;
}

export interface CalendarDayBs {
  bs_date: string;
  bs_year: number;
  bs_month: number;
  bs_day: number;
  ad_date: string;
  ad_year: number;
  ad_month: number;
  ad_day: number;
  weekday: number;
  weekday_name: string;
  is_saturday: boolean;
  is_today: boolean;
  is_holiday: boolean;
  holiday_label: string | null;
}

export interface CalendarDayAd {
  ad_date: string;
  ad_year: number;
  ad_month: number;
  ad_day: number;
  bs_date: string;
  bs_year: number;
  bs_month: number;
  bs_day: number;
  weekday: number;
  weekday_name: string;
  is_saturday: boolean;
  is_today: boolean;
  is_holiday: boolean;
  holiday_label: string | null;
}

export interface CalendarMonthBs {
  system: 'bs';
  year: number;
  month: number;
  month_name: string;
  month_name_ne: string;
  days_in_month: number;
  start_date_bs: string;
  end_date_bs: string;
  start_date_ad: string | null;
  end_date_ad: string | null;
  start_weekday: number;
  leading_blanks: number;
  days: CalendarDayBs[];
}

export interface CalendarMonthAd {
  system: 'ad';
  year: number;
  month: number;
  month_name: string;
  month_name_short: string;
  days_in_month: number;
  start_date_ad: string;
  end_date_ad: string;
  start_date_bs: string;
  end_date_bs: string | null;
  start_weekday: number;
  leading_blanks: number;
  days: CalendarDayAd[];
}

export interface FiscalYearResult {
  fy_label: string;
  bs_start_date: string;
  bs_end_date: string;
  ad_start_date: string;
  ad_end_date: string;
  total_days: number;
}

export interface Holiday {
  date: string;
  label?: string;
}

export interface CalendarOptions {
  holidays?: Holiday[];
}

export class DrpNepaliCalendar {
  debug_info: string;

  is_leap_year(year: number): boolean;

  eng_to_nep(yy: number, mm: number, dd: number): BsResult | false;
  eng_to_nep_date(date: string): BsResult | false;
  nep_to_eng(yy: number, mm: number, dd: number): AdResult | false;
  nep_to_eng_date(date: string): AdResult | false;

  get_month_dates_nep(year: number, month: number): MonthDates | false;
  get_month_dates_eng(year: number, month: number): MonthDatesEng | false;

  get_date_nep(date: string, days: number): string | false;
  get_date_eng(date: string, days: number): string | false;

  get_months_dates_nep(fromDate: string, toDate: string): MonthDates[];
  get_months_dates_eng(fromDate: string, toDate: string): MonthDatesEng[];

  get_bs_month_range_with_point(baseBsDate: string, days: number): Array<{
    year: number;
    month: number;
    start_date: string;
    end_date: string;
    days: number;
    pointed_date: number | null;
  }>;

  get_bs_month_range_excluding_partial(baseBsDate: string, days: number): Array<{
    year: number;
    month: number;
    start_date: string;
    end_date: string;
    days: number;
    pointed_date: number | null;
  }>;

  get_bs_months_touched(baseBsDate: string, days: number): Array<{
    year: number;
    month: number;
    month_name: string;
    start_date: string;
    end_date: string;
    days: number;
    range_start: string;
    range_end: string;
    range_days: number;
    is_partial: boolean;
  }>;

  days_fiscal_wise(fromYear: number, toYear: number): Record<number, number[]>;
  get_fiscal_year(bsDate: string, offset?: number): FiscalYearResult | false;
  get_fiscal_year_by_days(bsDate: string, days: number): FiscalYearResult | false;
  get_current_fiscal_year(offset?: number): FiscalYearResult | false;
  get_nth_month_end_date(baseBsDate: string, months: number): string | false;

  today_nep(): string | false;
  today_eng(): string;

  get_calendar_month_nep(
    yearOrStr: number | string,
    monthOrOptions?: number | CalendarOptions,
    maybeOptions?: CalendarOptions,
  ): CalendarMonthBs | false;

  get_calendar_month_eng(
    yearOrStr: number | string,
    monthOrOptions?: number | CalendarOptions,
    maybeOptions?: CalendarOptions,
  ): CalendarMonthAd | false;

  get_month_dates_eng_from_ad(year: number, month: number): MonthDates | false;

  is_valid_bs_date(date: string): boolean;
  is_valid_ad_date(date: string): boolean;

  format_bs(date: string, format: string): string | false;
  format_ad(date: string, format: string): string | false;
}

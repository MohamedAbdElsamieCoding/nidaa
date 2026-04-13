export interface PrayerTimesResponse {
  code: number;
  status: string;
  data: PrayerData;
}

export interface PrayerData {
  timings: Timings;
  date: DateInfo;
  meta: Meta;
}

export interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}

export interface DateInfo {
  readable: string;
  timestamp: string;
  hijri: HijriDate;
  gregorian: GregorianDate;
}

export interface HijriDate {
  date: string;
  day: string;
  weekday: { en: string; ar: string };
  month: { number: number; en: string; ar: string };
  year: string;
}

export interface GregorianDate {
  date: string;
  day: string;
  weekday: { en: string };
  month: { number: number; en: string };
  year: string;
}

export interface Meta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: CalculationMethod;
}

export interface CalculationMethod {
  id: number;
  name: string;
  params: { Fajr: number; Isha: number };
}

export interface PrayerDisplay {
  name: string;
  time: string;
  period: string;
}

import { useEffect, useState } from "react";
import type {
  PrayerData,
  PrayerDisplay,
  PrayerTimesResponse,
} from "../types/prayers.type";

export const usePrayerTimes = () => {
  const [prayers, setPrayers] = useState<PrayerDisplay[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [prayerData, setPrayerData] = useState<PrayerData | null>(null);

  const [nextPrayerIndex, setNextPrayerIndex] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<string>("");

  const parseTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return {
      displayTime: `${displayHours}:${minutes.toString().padStart(2, "0")}`,
      period,
      absoluteHours: hours,
      absoluteMinutes: minutes,
    };
  };

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const today = new Date();
        const formattedDate = `${String(today.getDate()).padStart(2, "0")}-${String(
          today.getMonth() + 1,
        ).padStart(2, "0")}-${today.getFullYear()}`;

        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=Cairo&country=EG&method=5`,
        );
        const result: PrayerTimesResponse = await res.json();
        if (result.status === "OK") {
          setPrayerData(result.data);

          const t = result.data.timings;
          const formattedPrayers: PrayerDisplay[] = [
            {
              name: "الفجر",
              time: parseTime(t.Fajr).displayTime,
              period: parseTime(t.Fajr).period,
            },
            {
              name: "الظهر",
              time: parseTime(t.Dhuhr).displayTime,
              period: parseTime(t.Dhuhr).period,
            },
            {
              name: "العصر",
              time: parseTime(t.Asr).displayTime,
              period: parseTime(t.Asr).period,
            },
            {
              name: "المغرب",
              time: parseTime(t.Maghrib).displayTime,
              period: parseTime(t.Maghrib).period,
            },
            {
              name: "العشاء",
              time: parseTime(t.Isha).displayTime,
              period: parseTime(t.Isha).period,
            },
          ];
          setPrayers(formattedPrayers);
        }
      } catch (error) {
        console.log((error as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchPrayerTimes();
  }, []);
  useEffect(() => {
    if (prayers.length === 0 || !prayerData) return;
    const interval = setInterval(() => {
      const now = new Date();
      const t = prayerData.timings;
      const prayerTimesInDate = [t.Fajr, t.Dhuhr, t.Asr, t.Maghrib, t.Isha].map(
        (timeStr) => {
          const [h, m] = timeStr.split(":").map(Number);
          const d = new Date();
          d.setHours(h, m, 0);
          return d;
        },
      );
      let nextIndex = prayerTimesInDate.findIndex((time) => time > now);
      if (nextIndex === -1) {
        nextIndex = 0;
        setRemainingTime("Next: Fajr");
      } else {
        const diff = prayerTimesInDate[nextIndex].getTime() - now.getTime();
        const hrs = Math.floor(diff / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        setRemainingTime(`${hrs}h ${mins}m ${secs}s`);
      }
      setNextPrayerIndex(nextIndex);
    }, 1000);
    return () => clearInterval(interval);
  }, [prayers, prayerData]);

  return {
    prayers,
    loading,
    prayerData,
    nextPrayerIndex,
    remainingTime,
  };
};

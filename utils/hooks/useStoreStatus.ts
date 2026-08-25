import { useEffect, useState } from "react";

interface IDayRange {
  open: number;
  close: number;
}

const WEEKDAY_HOURS: IDayRange = { open: 9, close: 20 };
const WEEKEND_HOURS: IDayRange = { open: 10, close: 18 };

const UK_TIME_ZONE = "Europe/London";

export function useStoreStatus(): { isOpen: boolean; label: string } {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string }>({
    isOpen: false,
    label: "",
  });

  useEffect(() => {
    const update = (): void => {
      const now = new Date();

      const ukDate = new Intl.DateTimeFormat("en-GB", {
        timeZone: UK_TIME_ZONE,
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      }).formatToParts(now);

      const getPart = (type: string): string =>
        ukDate.find((part) => part.type === type)?.value ?? "";

      const weekday = getPart("weekday");
      const hour = Number(getPart("hour"));
      const minute = Number(getPart("minute"));

      const isWeekend = weekday === "Sat" || weekday === "Sun";

      const range = isWeekend ? WEEKEND_HOURS : WEEKDAY_HOURS;

      const current = hour + minute / 60;      

      const isOpen = current >= range.open && current < range.close;

      setStatus({
        isOpen,
        label: isOpen ? "Open now" : "Closed now",
      });
    };

    update();

    const id = setInterval(update, 60_000);

    return () => clearInterval(id);
  }, []);

  return status;
}
import { useEffect, useState } from "react";

interface IDayRange {
  open: number;
  close: number;
}

const WEEKDAY_HOURS: IDayRange = { open: 9, close: 20 };
const WEEKEND_HOURS: IDayRange = { open: 10, close: 18 };

export function useStoreStatus(): { isOpen: boolean; label: string } {
  const [status, setStatus] = useState<{ isOpen: boolean; label: string }>({
    isOpen: false,
    label: "",
  });

  useEffect(() => {
    const update = (): void => {
      const now = new Date();
      const day = now.getDay();
      const range = day === 0 || day === 6 ? WEEKEND_HOURS : WEEKDAY_HOURS;
      const current = now.getHours() + now.getMinutes() / 60;
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
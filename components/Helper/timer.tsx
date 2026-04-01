"use client";

import { useEffect, useState } from "react";
import { personalConfig } from "@/config/Personal";

const LocalTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: personalConfig.timezone,
      };

      const formattedTime = now.toLocaleTimeString("en-US", options);
      const label = personalConfig.timezoneLabel ? `${personalConfig.timezoneLabel} ` : "";
      setTime(`${label}${formattedTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm font-mono select-none">
      {time}
    </div>
  );
};

export default LocalTime;

"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/common";

const LocalTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: siteConfig.timezone,
      };

      const formattedTime = now.toLocaleTimeString("en-US", options);
      const label = siteConfig.timezoneLabel ? `${siteConfig.timezoneLabel} ` : "";
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

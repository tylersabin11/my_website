import React, { useEffect, useState } from "react";

export default function GitHubCalendarWrapper() {
  const [Calendar, setCalendar] = useState(null);

  useEffect(() => {
    import("react-github-calendar").then((mod) => {
      setCalendar(() => mod.default);
    });
  }, []);

  if (!Calendar) {
    return <div className="text-center text-sm text-zinc-400">Loading GitHub contributions...</div>;
  }

  return (
    <Calendar
      username="tylersabin11"
      colorScheme="dark"
      blockSize={15}
      blockMargin={5}
      fontSize={14}
    />
  );
}

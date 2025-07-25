import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHubCalendarWrapper() {
  return (
    <GitHubCalendar
      username="tylersabin11"
      colorScheme="dark"
      blockSize={15}
      blockMargin={5}
      fontSize={14}
    />
  );
}

import React, { useState, useEffect } from "react";
import { CenteredDiv,DaysPassedMent } from './styled'

export function DaysPassed() {
  const [daysPassed, setDaysPassed] = useState(null);

  useEffect(() => {
    const startDate = new Date("March 20, 2022");
    const today = new Date();
    const differenceInTime = today.getTime() - startDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))+1;
    setDaysPassed(differenceInDays);
  }, []);

  return (
    <CenteredDiv>
      {daysPassed !== null && <DaysPassedMent>우리가 사랑한지 {daysPassed}일 째</DaysPassedMent>}
    </CenteredDiv>
  );
}
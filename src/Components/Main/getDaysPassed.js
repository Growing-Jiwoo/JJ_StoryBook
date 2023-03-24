import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
`;

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
      {daysPassed !== null && <p>Days Passed: {daysPassed}</p>}
    </CenteredDiv>
  );
}
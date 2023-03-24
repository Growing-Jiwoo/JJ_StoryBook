import { useEffect, useState } from "react";
import { DaysPassed } from "./getDaysPassed";
import { BookCover } from "./BookCover";
import { Typewriter } from "./Typewriter";

export function MainUi() {
  const [showComponents, setShowComponents] = useState(false);
  const [typewriterFinished, setTypewriterFinished] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setTypewriterFinished(true), 1000 * 5);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (typewriterFinished) {
      const timeout = setTimeout(() => setShowComponents(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [typewriterFinished]);

  return (
    <div>
      {!typewriterFinished && <Typewriter onAnimationComplete={() => setTypewriterFinished(true)} />}
      {typewriterFinished && showComponents && (
        <>
          <DaysPassed />
          <BookCover />
        </>
      )}
    </div>
  );
}
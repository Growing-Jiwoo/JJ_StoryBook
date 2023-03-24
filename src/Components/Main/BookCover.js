// const coverImage = `/img/main.jpg`;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookCoverStyle, FlickeringText } from './styled'

export function BookCover() {
  const [text, setText] = useState("JJ StoryBook❤");
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setText("Click Me !!");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BookCoverStyle
      onClick={() => {
        navigate("/image");
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
    >
      {text === "JJ StoryBook❤" ? (
        <div>{text}</div>
      ) : (
        <FlickeringText>{text}</FlickeringText>
      )}
    </BookCoverStyle>
  );
}
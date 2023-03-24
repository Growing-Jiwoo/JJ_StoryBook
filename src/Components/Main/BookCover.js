// const coverImage = `/img/main.jpg`;

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { flexCenterStyles } from "../../Style/flexStyle";

const coverImage = `/img/main.jpg`;

const BookCoverStyle = styled(motion.div)`
  height: 600px;
  width: 500px;
  background-image: url(${coverImage});
  background-size: cover;
  ${flexCenterStyles}
  position: absolute;
  top: 17%;
  left: 36.5%;
  transform: translate(-50%, -50%);
  border: 7px solid white;

  & > div {
    ${flexCenterStyles}
    color: white;
    font-size: 2rem;
  }
`;

const flicker = keyframes`
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  40% {
    opacity: 0.5;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const FlickeringText = styled(motion.div)`
  animation: ${flicker} 2s ease-in-out;
`;

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
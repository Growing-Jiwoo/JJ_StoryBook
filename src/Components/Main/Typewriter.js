import { motion } from "framer-motion";
import styled from "styled-components";
import { boldFontStyles } from "../../Style/fontStyle";
import { flexCenterStyles } from "../../Style/flexStyle";

const word = `지현이와 지우가 함께 그려간 스토리북`;

const TypewriterContainer = styled.div`
  ${flexCenterStyles}
  height: 100vh;
  width: 100vw;
  font-size: 4rem;
  ${boldFontStyles}
  text-align: center;
`;

export function Typewriter() {
  const chars = word.split("");

  return (
    <TypewriterContainer>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </TypewriterContainer>
  );
};
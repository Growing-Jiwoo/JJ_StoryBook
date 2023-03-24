import { motion } from "framer-motion";
import styled from "styled-components";
import { boldFontStyles } from "../../Style/fontStyle";

const word = `안녕하세요 저는 김지우입니다.`;

const TypewriterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
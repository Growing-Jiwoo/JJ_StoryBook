import { motion } from "framer-motion";
import { TypewriterContainer } from "./styled"

const word = `지현이와 지우가 함께 그려간 스토리북`;

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
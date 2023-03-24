import styled from 'styled-components';
import { motion } from "framer-motion";
import { boldFontStyles } from "../../Style/fontStyle";

export const BookPageStyle = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 7px solid white;
  height: 711px;
  width: 400px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const BackImageMentContainer = styled.div`
  padding: 10px;
  font-size: 1.3rem;
  ${boldFontStyles}
  margin: 0px 0px -50px 0px;
`;

export const MoveLetterText = styled(motion.div)`
  font-size: 2rem;
  position: fixed;
  top: 50%;
  right: 4.5%;
  transform: translate(50%, -50%);
  animation: blink 1.5s infinite;
  cursor: pointer;
  ${boldFontStyles}
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export const MoveMainText = styled(motion.div)`
  font-size: 2rem;
  position: fixed;
  top: 50%;
  left: -2%;
  transform: translate(50%, -50%);
  animation: blink 1.5s infinite;
  cursor: pointer;
  ${boldFontStyles}
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
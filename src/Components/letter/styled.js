import styled from 'styled-components';
import { flexCenterStyles } from '../../Style/flexStyle';
import { normalFontStyles, boldFontStyles } from '../../Style/fontStyle';
import { motion } from "framer-motion";

export const A4Letter = styled.div`
  width: 580px;
  height: 750px;
  border: 7px solid white;
  background-color: rgb(238, 188, 199);
  margin: 60px 0px 0px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  line-height: 30px;
`;

export const Line = styled.div`
  height: 1px;
  background-color: black;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  ${boldFontStyles}
  font-size: 2rem;
  text-align: center;
  margin: 10px 0px 20px 0px;
`;

export const Content = styled.span`
  ${normalFontStyles}
  font-size: 13pt;
  padding-left: 5px;
`;

export const CenteredA4Letter = styled.div`
    ${flexCenterStyles}
    height: 100vh;
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
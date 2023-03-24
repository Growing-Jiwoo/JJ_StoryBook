import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { flexCenterStyles, flexBottomCenterStyles } from "../../Style/flexStyle";
import { boldFontStyles } from "../../Style/fontStyle";

const coverImage = `/img/main.jpg`;

export const BookCoverStyle = styled(motion.div)`
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

export const FlickeringText = styled(motion.div)`
  animation: ${flicker} 2s ease-in-out;
`;

export const CenteredDiv = styled.div`
  ${flexBottomCenterStyles}
  height: 100vh;
`;

export const DaysPassedMent = styled.p`
  ${boldFontStyles}
  font-size: 1.1rem;
  margin: 0px 0px 134px 0px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TypewriterContainer = styled.div`
  ${flexCenterStyles}
  height: 100vh;
  width: 100vw;
  font-size: 4rem;
  ${boldFontStyles}
  text-align: center;
`;
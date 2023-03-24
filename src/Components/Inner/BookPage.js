import React, { useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion";
import { boldFontStyles } from "../../Style/fontStyle";

const backImages = [  "https://picsum.photos/500/500?random=1",  "https://picsum.photos/500/500?random=2",  "https://picsum.photos/500/500?random=3",  "https://picsum.photos/500/500?random=4",  "https://picsum.photos/500/500?random=5",  "https://picsum.photos/500/500?random=6",];

const BookPageStyle = styled(motion.div)`
  height: 50%;
  width: 30%;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const BlinkingText = styled(motion.div)`
  font-size: 2rem;
  position: fixed;
  top: 50%;
  right: 3%;
  transform: translate(50%, -50%);
  animation: blink 1.5s infinite;
  ${boldFontStyles}
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

export function BookPage() {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    setImageIndex((index) => (index + 1) % backImages.length);
  };

  return (
    <div className="App">
      <AnimatePresence>
        <BookPageStyle
          key={backImages[imageIndex]}
          style={{ backgroundImage: `url(${backImages[imageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2.5,
            type: "tween",
            ease: "easeInOut",
          }}
          onAnimationComplete={nextImage}
        />
      </AnimatePresence>
      <BlinkingText animate={{}} transition={{duration: 20}} >letter</BlinkingText>
    </div>
  );
}
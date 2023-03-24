import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const coverImage = "https://picsum.photos/500/500?random=11";

const BookCoverStyle = styled(motion.div)`
  height: 500px;
  width: 500px;
  background-image: url(${coverImage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 22%;
  left: 36.5%;
  transform: translate(-50%, -50%);
  border: 7px solid white;
  
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }
`;

export function BookCover() {
  const navigate = useNavigate();
  
  return (
    <BookCoverStyle
      onClick={() => {navigate('/image');}}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
    >
      <div>
        View Book
      </div>
    </BookCoverStyle>
  );
};
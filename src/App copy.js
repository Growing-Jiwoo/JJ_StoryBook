import React, { useState } from "react";
import { DaysPassed } from "./utils/getDaysPassed";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import "./App.css";

const bookImages = [
  "https://picsum.photos/500/500?random=1",
  "https://picsum.photos/500/500?random=2",
  "https://picsum.photos/500/500?random=3",
];

const coverImage = "https://picsum.photos/500/500?random=11";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const BookCover = styled(motion.div)`
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
`;

const BookPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 86vh;
`;

const BookPage = styled.div`
  height: 500px;
  width: 50%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

function App() {
  const [currentPage, setCurrentPage] = useState(-1);

  const handleViewBook = () => {
    setCurrentPage(0);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.floor((bookImages.length - 1) / 2)));
  };

  const getLeftPageImageUrl = () => {
    if (currentPage === 0) {
      return bookImages[0];
    } 
    if (currentPage === 1) {
      return bookImages[1];
    }else {
      console.log(bookImages[(currentPage - 1) * 2]);
      return bookImages[(currentPage - 1) * 2];
    }
  };
  
  const getRightPageImageUrl = () => {
    if (currentPage === 0) {
      return bookImages[1];
    } else {
      console.log(bookImages[currentPage * 2]);
      return bookImages[currentPage * 2];
    }
  };

  return (
    <div className="App">
      {currentPage === -1 ? (
        <>
          <DaysPassed />
          <BookCover
            onClick={handleViewBook}
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotateZ: 360 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 200,
              damping: 50,
            }}
          >
            View Book
          </BookCover>
        </>
      ) : (
        <BookPages>
          <BookPage imageUrl={getLeftPageImageUrl()} />
          <BookPage imageUrl={getRightPageImageUrl()} />
        </BookPages>
      )}
      {currentPage !== -1 && (
        <div className="button-container">
          <button onClick={handlePreviousPage} disabled={currentPage === 0}>
            Previous Page
          </button>
          <button
            onClick={handleNextPage}
            disabled={
              currentPage === Math.floor((bookImages.length - 1) / 2)
            }
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

import React from "react";
import Letter from "./Components/letter/Letter";
import { MainUi } from "./Components/Main/MainUi";
import { BookPage } from "./Components/Inner/BookPage";
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import "./App.css";

const AppMain = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/img/Cherry_Blossom_46_B.jpg');
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <AppMain>
      <Routes>
        <Route path="/" element={<MainUi />} />
        <Route path="/image" element={<BookPage />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </AppMain>
  );
}

export default App;
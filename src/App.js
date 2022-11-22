import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Header from "./components/common/heading/Header";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/`} exact element={<Home />} />
          <Route path={`/about`} exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

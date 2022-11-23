import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Header from "./components/common/heading/Header";
import Home from "./components/home/Home";
import Team from "./components/team/Team";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/`} exact element={<Home />} />
          <Route path={`/about`} exact element={<About />} />
          <Route path={`/courses`} exact element={<CourseHome />} />
          <Route path={`/team`} exact element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

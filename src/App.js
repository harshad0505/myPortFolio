import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="projects" element={<Projects/>} />
        </Route>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

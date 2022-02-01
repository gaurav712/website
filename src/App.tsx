import React from "react";
//@ts-ignore
import Helmet from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDarkMode } from "./ui/DarkModeHook";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const isDarkMode = useDarkMode();

  return (
    <>
      <Helmet>
        <body className={isDarkMode ? "dark" : "light"} />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

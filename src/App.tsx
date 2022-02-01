import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDarkMode } from "./ui/DarkModeHook";
import Home from "./pages/Home";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

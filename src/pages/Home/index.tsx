import React from "react";
import Header from "../../components/Header";
import { useDarkMode } from "../../ui/DarkModeHook";

const Home: React.FC = () => {
  const dark = useDarkMode();
  return (
    <>
      <Header />
      <div>{dark ? "dark" : "light"}</div>
    </>
  );
};

export default Home;

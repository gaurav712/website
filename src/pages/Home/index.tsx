import React from "react";
import Header from "../../components/Header";
import AboutCard from "./AboutCard";

const Home: React.FC = () => {
  return (
    <>
      <Header selectedTab="Home" />
      <AboutCard />
    </>
  );
};

export default Home;

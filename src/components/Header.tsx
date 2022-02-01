import React from "react";
import "../../assets/stylesheets/Header.css";
import DarkModeToggle from "../ui/DarkModeToggle";

const Header: React.FC = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerNavigation">
          <div /> {/* Just to get the navigation items to the center */}
          <ul className="headerNavigationList">
            <li>Projects</li>
            <li>About Me</li>
            <li>Contact</li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;

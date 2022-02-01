import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/Header.css";
import DarkModeToggle from "../ui/DarkModeToggle";

const Header: React.FC = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerNavigation">
          <div /> {/* Just to get the navigation items to the center */}
          <ul className="headerNavigationList">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;

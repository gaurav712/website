import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import Styles from "../stylesheets/Header.module.css";
import DarkModeToggle from "../ui/DarkModeToggle";

interface Props {
  selectedTab: string;
}

const Header: React.FC<Props> = (props: Props) => {
  const { selectedTab } = props;

  return (
    <>
      <div className={Styles.headerContainer}>
        <div className={Styles.headerNavigation}>
          <div /> {/* Just to get the navigation items to the center */}
          <ul className={Styles.headerNavigationList}>
            <li>
              <Link to="/">
                {selectedTab === "Home" ? (
                  <div className={Styles.selectedTab}>Home</div>
                ) : (
                  "Home"
                )}
              </Link>
            </li>
            <li>
              <Link to="/projects">
                {selectedTab === "Projects" ? (
                  <div className={Styles.selectedTab}>Projects</div>
                ) : (
                  "Projects"
                )}
              </Link>
            </li>
            <li>
              <Link to="/about">
                {selectedTab === "About" ? (
                  <div className={Styles.selectedTab}>About</div>
                ) : (
                  "About"
                )}
              </Link>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;

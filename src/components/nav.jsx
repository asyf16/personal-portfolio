import "./nav.css";
import "../App.css";
import { useState } from "react";
import { parallaxControl } from "./parallaxControl";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useScroll from "./scrollcontext";

function Nav() {
  const { experienceRef } = useScroll();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => {
    setClick(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.removeEventListener("scroll", parallaxControl);
  };

  const scrollToExperience = () => {
      if (experienceRef?.current) {
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
      }
      closeMenu();
  };
  return (
    <>
        <nav className="nav">
          <div className="nav-container">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              Aurora Shi
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  style={{
                    color: "#938ac8",
                    fontSize: "2rem",
                    paddingBottom: "0.2rem",
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  style={{
                    color: "#938ac8",
                    fontSize: "2rem",
                    paddingBottom: "0.2rem",
                  }}
                />
              )}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-links" onClick={scrollToExperience}>
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-links" onClick={closeMenu}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-links" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Nav;

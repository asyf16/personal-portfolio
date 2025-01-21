import "./nav.css";
import "../App.css";
import { useState } from "react";
import { parallaxControl } from "./parallaxControl";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => {
    setClick(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.removeEventListener("scroll", parallaxControl);
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <a href="/" className="nav-logo" onClick={closeMenu}>
            Aurora Shi
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#938ac8", fontSize: "2rem", paddingBottom: "0.2rem" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faTimes}
                style={{ color: "#938ac8", fontSize: "2rem", paddingBottom: "0.2rem" }}
              />
            )}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
            >
              <a href="#home" className="nav-links" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li
              className="nav-item"
            >
              <a href="#about" className="nav-links" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-links" onClick={closeMenu}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-links" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;

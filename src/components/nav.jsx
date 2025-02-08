import "./nav.css";
import "../App.css";
import { useState, useEffect } from "react";
import { parallaxControl } from "./parallaxControl";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useScroll from "./scrollcontext";

function Nav() {
  const { experienceRef } = useScroll();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash === '#experience' && experienceRef?.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [experienceRef]);

  const closeMenu = () => {
    setClick(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.removeEventListener("scroll", parallaxControl);
  };

  const scrollToExperience = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      // Just navigate to home with the hash
      window.location.href = '/#experience';
    } else if (experienceRef?.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
      setClick(false);
    }
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
                <a href="#experience" className="nav-links" onClick={scrollToExperience}>
                  Experience
                </a>
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

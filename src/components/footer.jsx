import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className={"footer-container"}>
      <div className={"footer-text-container"}>
        <p>Aurora Shi © 2025 </p>
        <p>Made with {"<"}3 and a little bit of spite...</p>
      </div>

      <div className="socials-container">
        <a
          className="social-icon"
          href="https://www.instagram.com/aurorashi16/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="social-icon"
          href="https://github.com/asyf16"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/aurora-shi-387656247/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          className="social-icon"
          href="https://drive.google.com/drive/folders/1LxYEXHacO-xeabSRKWcw-p50hZqi-ae6?usp=drive_link"
          target="_blank"
        >
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </div>
  );
}
export default Footer;

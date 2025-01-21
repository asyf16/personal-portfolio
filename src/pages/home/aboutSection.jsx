import  { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutSection() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="about">
      <div className="wrap">
        <div className="one">
          <center>
            <img
              data-aos="fade-in"
              src="https://i.imgur.com/f1RKanu.png"
              alt="About Me"
            />
          </center>
        </div>
        <div className="two">
          <div className="text-container">
            <h1 data-aos="fade-in">About Me</h1>
            <p data-aos="fade-in" data-aos-delay="300" className="about-text">
              Hi! I&apos;m Aurora, a second year student at the University of
              Waterloo.
            </p>
            <p data-aos="fade-in" data-aos-delay="600" className="about-text">
              My hobbies include painting, creating new recipes in the kitchen,
              and fishing. I also enjoy going to the gym and fencing 🤺.
            </p>
          </div>
          <div data-aos="fade-in" data-aos-delay="800" className="socials">
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/aurorashi16/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/asyf16"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/aurora-shi-387656247/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              className="social-icon-link download"
              href="https://drive.google.com/drive/folders/1LxYEXHacO-xeabSRKWcw-p50hZqi-ae6?usp=drive_link"
              target="_blank"
            >
              <FontAwesomeIcon icon={faDownload} />
            </a>
            <a
              className="social-icon-link ring"
              href="https://se-webring.xyz/"
              target="_blank"
            >
              <svg
                width="35"
                height="40"
                viewBox="0 0 960 960"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="35" height="40" fill="none" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M390.499 272.146V687.477C491.737 672.742 569.501 585.38 569.501 479.811C569.501 374.243 491.737 286.881 390.499 272.146ZM367.396 749.527C364.991 749.591 362.577 749.623 360.157 749.623C211.506 749.623 91 628.824 91 479.811C91 330.799 211.506 210 360.157 210C362.577 210 364.991 210.032 367.396 210.096C368.31 210.032 369.233 210 370.163 210H869V749.623H370.163C369.233 749.623 368.31 749.591 367.396 749.527ZM330.687 687.602V272.021C229.023 286.379 150.813 373.94 150.813 479.811C150.813 585.683 229.023 673.244 330.687 687.602ZM529.346 269.958H809.187V689.665H529.346C590.325 640.201 629.313 564.57 629.313 479.811C629.313 395.053 590.325 319.422 529.346 269.958Z"
                  fill="#938ac8"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

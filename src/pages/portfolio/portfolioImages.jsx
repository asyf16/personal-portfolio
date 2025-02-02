import ScrollTop from "../../components/scrollTop";
import "./portfolioImages.css";

export function PortfolioImages() {
  return (
    <div style={{flexDirection:"column", display:"flex", alignItems:"center"}}>
      <div className="portfolio-images">
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src="https://i.imgur.com/XrBEyeO.png" alt="About Me" />
          <h2>Worst Enemy</h2>
          <p>Acrylic on canvas</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <img src="https://i.imgur.com/VRHZ15l.png" alt="About Me" />
          <h2>Just a Little More</h2>
          <p>Oil pastel on paper</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <img src="https://i.imgur.com/ulA3QKZ.jpg" alt="About Me" />
          <h2>Light Addiction</h2>
          <p>Linocut print on paper</p>
        </div>
      </div>
      <div className="portfolio-images">
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src="https://i.imgur.com/RPasrbX.png" alt="About Me" />
          <h2>Still Life Study</h2>
          <p>Graphite on Paper</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <img src="https://i.imgur.com/msE51Ih.png" alt="About Me" />
          <h2>Painting of a Man</h2>
          <p>Oil paint on canvas</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <img src="https://i.imgur.com/sD6sJdJ.png" alt="About Me" />
          <h2>Portrait of a Man</h2>
          <p>Graphite on paper</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="1600"
        >
          <img src="https://i.imgur.com/dmLoNkb.png" alt="About Me" />
          <h2>Peruvian Life</h2>
          <p>Marker on paper</p>
        </div>
      </div>

      <div className="portfolio-images">
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src="https://i.imgur.com/LHAEOIo.png"
            className= "future-park"
            alt="About Me"
          />
          <h2>Future Park</h2>
          <p>Mixed media</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <img
            src="https://i.imgur.com/UkzYOhZ.png"
            alt="About Me"
            className="future-park"
          />
          <h2>Judgement</h2>
          <p>Mixed media</p>
        </div>
      </div>

      <div className="portfolio-images" style={{marginBottom:"3rem"}}>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src="https://i.imgur.com/Q8OoIZC.png" alt="About Me" />
          <h2>Inner Beauty</h2>
          <p>Acrylic on canvas</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <img src="https://i.imgur.com/eS5rNtK.png" alt="About Me" />
          <h2>Gone Fishing</h2>
          <p>Yarn on cardboard</p>
        </div>
        <div
          className="image-container"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <img src="https://i.imgur.com/TBVx4iS.png" alt="About Me" />
          <h2>Drone Brochure</h2>
          <p>Adobe Illustrator</p>
        </div>
      </div>
      <ScrollTop/>
    </div>
  );
}
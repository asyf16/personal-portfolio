import { useEffect } from "react";
import "./card.css";
import CardItem from "./cardItem";
import Aos from "aos";
import "aos/dist/aos.css";

function AwardCards() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="cards">
      <h2>Awards</h2>
      <p>The awards I have received showcase both my passions and skills.</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items" data-aos="fade-up">
            <CardItem
              src="https://uwaterloo.ca/news/sites/ca.news/files/styles/feature_large/public/dsc_1298_full_res__3.jpg?itok=3rMVGwW8"
              text="2 times University of Waterloo Dean's List Recipient, maintaining a 4.0 GPA."
              label="Dean's List"
              path="https://uwaterloo.ca/environment/undergraduate/current-students/undergraduate-awards"
            />
            <CardItem
              src="https://i.imgur.com/YBFHMxU.jpg"
              text="Graduated with highest academic grade of 99.6% from Old Scona Academic."
              label="Valedictorian"
              path="https://edmontonsun.com/news/valedictorians-2023-old-sconas-aurora-shi"
            />
          </ul>
          <ul data-aos="fade-up" className="cards__items">
            <CardItem
              src="https://i.imgur.com/4IE35XW.jpg"
              text="Nominated for $2000 scholarship, 1 of 18 in Edmonton, based on leadership, inclusivity, and excellence."
              label="Micheal S. Award"
              path="https://www.epsb.ca/media/epsb/schools/goingtoschool/studentawards/EPSB_Michael_Strembitsky_Award_Recipients_Guide_2023.pdf"
            />
            <CardItem
              src="https://i.imgur.com/IFZkHKw.jpg"
              text="$2500 scholarship presented by P.E.O. International for exceptional women attending accredited postsecondaries."
              label="PEO Star Scholar"
              path="https://www.peointernational.org/peo-star-scholarship-star"
            />
          </ul>
          <ul data-aos="fade-up" className="cards__items">
            <CardItem
              src="https://i.imgur.com/bF2yyba.png"
              text="Won $2500 by creating video game teaching financial skills, placing third nationally in competition sponsored by CIBC."
              label="My Money My Future"
              path="https://www.mymoneymyfuturechallenge.ca/winners-portfolio/daniel-aurora-amy-and-andrew"
            />
            <CardItem
              src="https://i.imgur.com/WIZLP2V.png"
              text="Won $3000 by creating storybook about diversity. Book was officially published and distributed to libraries and schools in Edmonton."
              label="Diverse Minds"
              path="https://www.dmshop.ca/products/a-bark-to-be-proud-of"
            />
          </ul>
          <ul data-aos="fade-up" className="cards__items">
            <CardItem
              src="https://www.skillscompetencescanada.com/wp-content/uploads/2024/06/53756103009_95b47b72bb_k-e1718039327561.jpg"
              text="Placed bronze in Skills Canada Graphic Design competition by creating logos and brochures for drone company."
              label="Skills Canada"
              path="https://www.skillscompetencescanada.com/en/"
            />
            <CardItem
              src="https://i.imgur.com/FzqUJvC.png"
              text="Created artwork tackling social issues. Awarded Finalist and American Visions Nominee by Scholastic, 1 of 5 people in region."
              label="American Visions Nominee"
              path="https://www.artandwriting.org/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AwardCards;

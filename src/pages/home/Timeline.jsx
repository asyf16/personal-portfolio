import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faI } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { GiBullHorns } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import useScroll from "../../components/scrollcontext";

function Timeline() {
  const { experienceRef } = useScroll();

  return (
    <section className="timeline-container" id="experience" ref={experienceRef}>
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <VerticalTimeline lineColor={"white"}>
        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Jan 2025 - present"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FaComputer />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer | Bloomberg
          </h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>- Contributing to the Engineering Subscriptions and Growth team</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Sep 2024 - present"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<GiBullHorns />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer | WatStreet
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            - Developing Options Strategy Builder to create complex strategies
            for stock profit analysis
          </p>
          <p>
            - Collaborated on React dashboard for quantitative trading models
            for users to visualize stock buy/sell signals
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Nov 2024 - present"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSun} />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer | Hack the 6ixth
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            - Developing admin dashboard for Toronto&apos;s largest summer
            hackathon to manage user applications and event logistics
          </p>
          <p>- Engineering hacker landing page for 1000+ applicants</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="May 2024 - Aug 2024"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faI} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer | ISARA Corp.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Waterloo, ON</h4>
          <p>
            - Redesigned application&apos;s cryptographic risk scoring process,
            enhancing risk assessment accuracy by 80%
          </p>
          <p>
            - Collaborated with QA team to resolve system bugs, resulting in a
            60% reduction in application failures and efficiency increase
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="datecolor"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#433d66" }}
          contentArrowStyle={{ borderRight: "7px solid  #433d66" }}
          date="Nov 2023 - present"
          iconStyle={{ background: "#4064b8", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faMountain} />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer | Case Mining
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, AB</h4>
          <p>
            - Developed company website showcasing services, information, and
            user-friendly contact page using <b>React.js</b>
          </p>
          <p>
            - Implemented edits tailored to client specifications and feedback
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;

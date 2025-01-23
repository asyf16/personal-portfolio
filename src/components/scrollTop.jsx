import "./scrollTop.css";
import { GiFishing } from "react-icons/gi";

function ScrollTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scrollTop-container" onClick={handleScrollToTop}>
      <h2 className="scroll-text">
        Scroll to top
      </h2>
      <GiFishing className="fish" style={{fontSize:"2.5rem"}}/>
    </div>
  );
}
export default ScrollTop;

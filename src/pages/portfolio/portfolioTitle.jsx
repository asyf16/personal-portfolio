import "./portfolioTitle.css";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

function PortfolioTitle() {
  const { RiveComponent } = useRive({
    src: "./cat.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.TopCenter,
    }),
  });
  return (
    <div className="portfolio-title-container">
      <div className="cat-container">
        <div className="cat-rive">
          <RiveComponent />
        </div>
        <h2>Portfolio</h2>
      </div>
      <p>
        I love experimenting in all types of media such as oil painting,
        acrylic, sculpture, block printing, and mixed media.
      </p>
      <p>
        In addition, I enjoy graphic design, such as creating logos or packaging
        for companies and organizations.
      </p>
    </div>
  );
}

export default PortfolioTitle;

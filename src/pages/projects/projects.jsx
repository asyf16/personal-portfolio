import  { useEffect } from "react";
import "./projects.css";
import Aos from "aos";
import ScrollTop from "../../components/scrollTop";
import "aos/dist/aos.css";

function Projectpage() {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="project-container" style={{ marginTop: "2rem" }}>
        <div className="p-contain-2">
          <h2 data-aos="fade-in">Silent Forest</h2>
          <p data-aos="fade-in"data-aos-delay="400">
            Need motivation to stay quiet and focused? Silent Forest is an
            interactive website that tracks your volume in real time. Stay
            quiet, and you&apos;ll be visited by adorable, hand-animated animals. If
            you are too loud, you may scare them away!
          </p>
          <div className="icon-wrap">
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Rive</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>React + Vite</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>Javascript</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>Adobe Illustrator</p>
            </button>
          </div>
        </div>
        <div className="p-contain-1">
          <div className="links-wrap">
            <a href="https://silentforest.tech/" target="_blank">
              <img
                data-aos-delay="400"
                data-aos="fade-in"
                className="demo-image"
                src="/SilentForest.gif"
                alt="SilentForest"
              ></img>
            </a>
            <center>
              <a href="https://silentforest.tech/" target="_blank">
                <button data-aos="fade-in" data-aos-delay="400">Website</button>
              </a>
              <a href="https://rive.app/community/files/15986-30079-silent-forest/" target="_blank">
                <button data-aos="fade-in" data-aos-delay="400">Rive</button>
              </a>
            </center>
          </div>
        </div>
        <img
          data-aos="fade-in"
          data-aos-delay="400"
          className="divider"
          src="https://i.imgur.com/UihZNpk.png"
          alt="divider"
        ></img>
      </div>

      <div className="project-container">
        <div className="p-contain-1">
          <div className="links-wrap">
            <a href="https://github.com/asyf16/Intellibin" target="_blank">
              <img
                data-aos="fade-in"
                data-aos-delay="400"
                className="demo-image"
                src="/Bin.gif"
                alt="Intellibin"
              ></img>
            </a>
            <center>
              <a
                href="https://devpost.com/software/intellibin-4qu7co"
                target="_blank"
              >
                <button data-aos="fade-in" data-aos-delay="400">Devpost</button>
              </a>
              <a
                href="https://www.youtube.com/watch?v=fziGIb2MTAk&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F&source_ve_path=MjM4NTE&feature=emb_title"
                target="_blank"
              >
                <button data-aos="fade-in" data-aos-delay="400">Demo</button>
              </a>
            </center>
          </div>
        </div>
        <div className="p-contain-2">
          <h2 data-aos="fade-in" data-aos-delay="400">IntelliBin</h2>
          <p data-aos="fade-in" data-aos-delay="400">
            IntelliBin is an AI trashcan that handles your trash sorting for
            you! Simply place your trash onto our machine, and watch it be
            sorted automatically by IntelliBin&apos;s servo arm!
          </p>
          <p data-aos="fade-in" data-aos-delay="400">
            {" "}
            Furthermore, track your stats and learn more about recycling on our
            React.js website connected to Firebase. Second place overall winner
            at DeltaHacks X.
          </p>
          <div className="icon-wrap">
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>MongoDB</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>FireBase</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>React</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Javascript</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Python</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>Arduino</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>C++</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Google Vision API</p>
            </button>
          </div>
        </div>
        <img
          data-aos="fade-in"
          data-aos-delay="400"
          className="divider"
          src="https://i.imgur.com/UihZNpk.png"
          alt="divider"
        ></img>
      </div>

      <div className="project-container">
        <div className="p-contain-2">
          <h2 data-aos="fade-in" data-aos-delay="400">EyeDentify</h2>
          <p data-aos="fade-in" data-aos-delay="400">
            Never forget a face again! Made using Python&apos;s face recognition
            library, EyeDentify is a Raspberry Pi powered headset that allows
            you to see the world from your normal point of view, but inlaid with
            real-time facial recognition!
          </p>
          <div className="icon-wrap">
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>MongoDB</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>React</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Javascript</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Python</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Raspberry PI</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>AWS</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>OpenCV</p>
            </button>
          </div>
        </div>
        <div className="p-contain-1">
          <div className="links-wrap">
            <a href="https://github.com/asyf16/eyeDentify" target="_blank">
              <img
                data-aos-delay="400"
                data-aos="fade-in"
                className="demo-image"
                src="/EyeDentify.gif"
                alt="EyeDentify"
              ></img>
            </a>
            <center>
              <a href="https://github.com/asyf16/eyeDentify" target="_blank">
                <button data-aos="fade-in"data-aos-delay="400">Github</button>
              </a>
              <a href="https://youtu.be/KergMVdy5mk" target="_blank">
                <button data-aos="fade-in" data-aos-delay="400">Demo</button>
              </a>
            </center>
          </div>
        </div>
        <img
          data-aos="fade-in"
          data-aos-delay="400"
          className="divider"
          src="https://i.imgur.com/UihZNpk.png"
          alt="divider"
        ></img>
      </div>

      <div className="project-container">
        <div className="p-contain-1">
          <div className="links-wrap">
            <a href="https://github.com/asyf16/calTrack" target="_blank">
              <img
                data-aos-delay="400"
                data-aos="fade-in"
                className="demo-image"
                src="/CalTrack.gif"
                alt="Caltrack"
              ></img>
            </a>
            <center>
              <a href="https://github.com/asyf16/calTrack" target="_blank">
                <button data-aos="fade-in" data-aos-delay="400">Github</button>
              </a>
              <a
                to="https://devpost.com/software/caltrack-xjzb6k"
                target="_blank"
              >
                <button data-aos="fade-in" data-aos-delay="400">Devpost</button>
              </a>
            </center>
          </div>
        </div>
        <div className="p-contain-2">
          <h2 data-aos="fade-in" data-aos-delay="400">CalTrack</h2>
          <p data-aos="fade-in" data-aos-delay="400">
            Don&apos;t give up on your New Year&apos;s resolution just yet... Created
            using Google Cloud&apos;s Vision API, CalTrack is an intuitive
            application that allows you to detect and track the calories in
            every meal with AI from a simple photo of your food!
          </p>
          <div className="icon-wrap">
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Google Cloud Vision API</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400"className="icon-house">
              <p>Python</p>
            </button>
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>OpenCV</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400" className="icon-house">
              <p>Tkinter</p>
            </button>
          </div>
        </div>
        <img
          data-aos="fade-in"
          data-aos-delay="400"
          className="divider"
          src="https://i.imgur.com/UihZNpk.png"
          alt="divider"
        ></img>
      </div>

      <div className="project-container">
        <div className="p-contain-2">
          <h2 data-aos="fade-in" data-aos-delay="400">Average Calculator</h2>
          <p data-aos="fade-in" data-aos-delay="400">
            Created for my high school, the Student Average Calculator increased
            the administration&apos;s efficiency by 240%, allowing instant
            calculation of every student&apos;s average based on specific
            requirements by simply uploading a spreadsheet of the student data.
          </p>
          <div className="icon-wrap">
            <button data-aos="fade-in"data-aos-delay="400" className="icon-house">
              <p>Python</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400" className="icon-house">
              <p>Tkinter</p>
            </button>
            <button data-aos="fade-in" data-aos-delay="400" className="icon-house">
              <p>Python CSV Library</p>
            </button>
          </div>
        </div>
        <div className="p-contain-1">
          <div className="links-wrap">
            <a
              href="https://github.com/asyf16/Average-Calculator"
              target="_blank"
            >
              <img
                data-aos-delay="400"
                data-aos="fade-in"
                className="demo-image"
                src="/Calc.gif"
                alt="Calculator"
              ></img>
            </a>
            <center>
              <a
                href="https://github.com/asyf16/Average-Calculator"
                target="_blank"
              >
                <button data-aos="fade-in" data-aos-delay="400">Github</button>
              </a>
            </center>
          </div>
        </div>
      </div>
      <ScrollTop />
    </>
  );
}

export default Projectpage;

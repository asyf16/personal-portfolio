import { useState, useEffect, useRef } from "react";
import AboutSection from "./aboutSection";
import "./heroSection.css";

function HeroSection() {
  const ref = useRef(null);
  const scrollAbout = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const words = [
    "Hello!",
    "您好!",
    "Bonjour!",
    "Hola!",
    "Guten Tag!",
    "Ciao!",
    "السلام عليكم!",
    "こんにちは!",
    "안녕하세요!",
    "नमस्ते!",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const type = () => {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting ? 1 : -1;
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );
    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 70 : 80);
    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text]);

  return (
    <>
      <div className="hero-container" id="home">
        <video src="/bg2.mp4" autoPlay loop muted />
        <div className="hero-content">
          <h3 style={{ marginBottom: "2rem" }}>{text} I&apos;m</h3>
          <h1 style={{ marginBottom: "2rem" }}>Aurora Shi,</h1>
          <p style={{ marginBottom: "2rem" }}>
            A Software Engineering student at the University of Waterloo
          </p>
          <div className="scroll-container">
            <div className="scroll" onClick={scrollAbout}></div>
          </div>
        </div>
      </div>
      <section ref={ref} id="about">
        <AboutSection />
      </section>
    </>
  );
}

export default HeroSection;

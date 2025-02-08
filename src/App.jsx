import "./App.css";
import Home from "./pages/home/index";
import Nav from "./components/nav";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import { ScrollProvider } from "./components/scrollcontext";
import Sound from './components/sound';

function App() {
  return (
    <>
      <Router>
        <ScrollProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Sound />
        </ScrollProvider>
      </Router>
    </>
  );
}

export default App;

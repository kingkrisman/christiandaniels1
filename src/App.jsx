import useReveal from "./hooks/useReveal";
import usePointerField from "./hooks/usePointerField";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Ticker from "./components/Ticker";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  usePointerField();

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Ticker />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

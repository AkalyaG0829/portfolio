import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-white text-black">

      <Navbar />

      {/* Normal Smooth Scrolling Layout */}
      <div className="scroll-smooth">

        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>

      </div>
    </div>
  );
}

export default App;
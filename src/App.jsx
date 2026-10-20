
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path.startsWith("/projects/")) {
    return (
      <>
        <div
          className="site-grid pointer-events-none fixed inset-0 z-0 opacity-70"
          aria-hidden="true"
        />
        <Navbar />
        <main className="relative z-10">
          <ProjectDetail slug={path.split("/")[2]} />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div
        className="site-grid pointer-events-none fixed inset-0 z-0 opacity-70"
        aria-hidden="true"
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

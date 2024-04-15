import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMe from "../components/Aboutme";
import NavBar from "../components/NavBar";
// import Navbar from "../components/NavBar";

function Home() {
  return (
    <>
    <NavBar/>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

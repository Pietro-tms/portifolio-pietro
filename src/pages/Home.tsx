import Pietro from "../components/Pietro";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="bg-background text-primary flex flex-col items-center h-full w-full md:p-0 py-0">
      <NavBar />
      <main className="bg-background text-primary flex flex-col items-center h-full w-full md:p-0 p-4 py-0">
        <Pietro />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import Hero from "./components/Hero";
import PaperProblems from "./components/PaperProblems";
import TwoFormats from "./components/TwoFormats";
import Features from "./components/Features";
const Landing = () => {
  return (
    <section className="mt-20">
      <Hero />
      <PaperProblems />
      <TwoFormats />
      <Features />
    </section>
  );
};

export default Landing;

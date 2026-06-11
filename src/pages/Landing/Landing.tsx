import Hero from "./components/Hero";
import PaperProblems from "./components/PaperProblems";
import TwoFormats from "./components/TwoFormats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
const Landing = () => {
  return (
    <section className="mt-20">
      <Hero />
      <PaperProblems />
      <TwoFormats />
      <Features />
      <HowItWorks />
      <Pricing />
    </section>
  );
};

export default Landing;

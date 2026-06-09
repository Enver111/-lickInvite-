import SpotlightCard from "@/components/SpotlightCard";
import Title from "./Title";
import { MailIcon } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const PaperProblems = () => {
  const problems = [
    {
      id: 1,
      title: "Дорого и долго.",
      description: "Стильные веб-приглашения на ваше событие за 15 минут",
      icon: <MailIcon />,
    },
    {
      id: 2,
      title: "Неизвестность.",
      description:
        "Неизвестность. Вы не знаете точно, кто придет, пока сами всех не обзвоните",
      icon: <MailIcon />,
    },
    {
      id: 3,
      title: "Потеря информации.",
      description: "Стильные веб-приглашения на ваше событие за 15 минут",
      icon: <MailIcon />,
    },
    {
      id: 4,
      title: "Никакой гибкости.",
      description:
        "Если изменятся тайминг или локация — придется перепечатывать весь тираж",
      icon: <MailIcon />,
    },
  ];

  return (
    <div className="container mx-auto">
      <Title title="Забудьте про бумажные конверты и долгие обзвоны" />
      <div className="grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,400px))] justify-center items-center gap-10">
        {problems.map((problem) => (
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.9}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <SpotlightCard
              className="custom-spotlight-card shadow-xl"
              spotlightColor="rgba(227, 133, 60, 0.25)"
            >
              <div className="flex flex-col gap-2 text-[#E3853C] font-script">
                <h3 className="text-2xl font-bold">{problem.title}</h3>
                <p className="text-lg font-medium">{problem.description}</p>
              </div>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default PaperProblems;

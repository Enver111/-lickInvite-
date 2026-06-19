import AnimatedContent from "@/components/AnimatedContent";
import Title from "./Title";

const templateSteps = [
  { n: "01", text: "Выбираете дизайн из каталога. " },
  {
    n: "02",
    text: "Заполняете форму с данными: дата, место, RSVP-опросы. ",
  },
  { n: "03", text: "Получаете готовую ссылку и отправляете её гостям." },
];

const customSteps = [
  { n: "01", text: "Оставляете заявку и обсуждаете концепцию с дизайнером." },
  { n: "02", text: "Мы утверждаем макет и верстаем уникальный сайт." },
  {
    n: "03",
    text: "Вы получаете ссылку и отслеживаете ответы гостей в удобном кабинете.",
  },
];

function StepList({ steps }: { steps: typeof templateSteps }) {
  return (
    <div className="space-y-0">
      {steps.map((s, i) => (
        <div
          key={i}
          className="flex gap-6 items-center border-b border-border last:border-b-0 min-h-20"
        >
          <span
            className=" shrink-0 text-xs tracking-widest mt-1"
            style={{ color: "#cc8448", fontFamily: "Inter, sans-serif" }}
          >
            {s.n}
          </span>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              lineHeight: 1.7,
              color: "inherit",
            }}
          >
            {s.text}
          </p>
        </div>
      ))}
    </div>
  );
}

const HowItWorks = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto ">
        <Title
          title="Как запустить ваше"
          subtitle="Процесс"
          description="приглашение"
        />
        <div className="grid md:grid-cols-2 gap-0 border border-border rounded-2xl">
          <AnimatedContent
            distance={60}
            direction="horizontal"
            reverse
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.96}
            threshold={0.15}
            delay={0}
            className="border-b md:border-b-0 md:border-r border-border"
          >
            <div className="p-10 lg:p-14 h-full">
              <p
                className="text-xs uppercase tracking-widest mb-8"
                style={{ color: "#cc8448", fontFamily: "Inter, sans-serif" }}
              >
                Если вы выбрали шаблон
              </p>
              <StepList steps={templateSteps} />
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={60}
            direction="horizontal"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={0.96}
            threshold={0.15}
            delay={0.12}
          >
            <div className="p-10 lg:p-14 h-full">
              <p
                className="text-xs uppercase tracking-widest mb-8"
                style={{ color: "#cc8448", fontFamily: "Inter, sans-serif" }}
              >
                Если хотите индивидуальный дизайн
              </p>
              <StepList steps={customSteps} />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

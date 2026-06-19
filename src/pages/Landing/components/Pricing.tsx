import Title from "./Title";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";

const Pricing = () => {
  const plans = [
    {
      name: "Шаблон",
      price: "1 500 ₽",
      tag: "Старт",
      features: [
        "Доступ к каталогу готовых дизайнов",
        "Стандартный RSVP-опрос и дресс-код",
        "Добавление карты и тайминга",
        "Доступ к сайту на 3 месяца",
      ],
      cta: "Выбрать шаблон",
      dark: false,
      accent: false,
    },
    {
      name: "Кастомизация",
      price: "3 500 ₽",
      tag: "Популярный",
      features: [
        "Готовый шаблон с вашими шрифтами и цветами",
        "Добавление вашей музыки или видео-фона",
        "Расширенный опрос гостей",
        "Доступ к сайту на 6 месяцев",
      ],
      cta: "Заказать кастомизацию",
      dark: false,
      accent: true,
    },
    {
      name: "Эксклюзив",
      price: "от 8 000 ₽",
      tag: "Премиум",
      features: [
        "Дизайн с нуля по вашему ТЗ или референсам",
        "Любое количество блоков, анимаций и страниц",
        "Уникальные интерактивные фишки",
        "Персональный менеджер и поддержка 24/7",
        "Доступ к сайту на 1 год",
      ],
      cta: "Оставить заявку",
      dark: true,
      accent: true,
    },
  ];
  return (
    <section id="pricing" className="scroll-mt-24 py-32 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <Title
          title="Выберите подходящий"
          subtitle="тарифы"
          description="тариф"
        />
        <div className="grid md:grid-cols-3 gap-2  ">
          {plans.map((plan, i) => (
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.9 + i * 0.3}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={i * 0.3}
              className="flex flex-col p-8 lg:p-10 border border-border rounded-2xl shadow-md"
              style={{ background: plan.dark ? "#0f0f0f" : "#ffffff" }}
            >
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-6"
                  style={{
                    color: "#cc8448",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {plan.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: plan.dark ? "#ffffff" : "#0f0f0f",
                  }}
                  className="mb-2"
                >
                  {plan.name}
                </h3>
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2rem",
                    color: plan.accent
                      ? "#cc8448"
                      : plan.dark
                        ? "#ffffff"
                        : "#0f0f0f",
                  }}
                >
                  {plan.price}
                </p>
                <div
                  className="w-full h-px mb-8"
                  style={{
                    background: plan.dark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                  }}
                />
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className="mt-1 shrink-0"
                        style={{ color: "#cc8448" }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 300,
                          lineHeight: 1.6,
                          color: plan.dark
                            ? "rgba(255,255,255,0.6)"
                            : "rgba(0,0,0,0.6)",
                        }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <Button
                  className="w-full py-4 uppercase tracking-widest font-playfair font-medium"
                  variant={plan.accent ? "mainCol" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

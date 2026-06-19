import Title from "./Title";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";

const TwoFormats = () => {
  return (
    <section id="templates" className="scroll-mt-24 container mx-auto py-20">
      <Title
        title="Подберём решение под ваши  "
        subtitle="Два формата"
        description="задачи и бюджет"
      />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 ">
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
          className="border-b md:border border-border rounded-l-2xl"
        >
          <div className="p-10 lg:p-14 group h-full">
            <div className="w-10 h-px mb-10 bg-[#cc8448]" />
            <h3
              className="text-gray-500 mb-2 text-2xl "
              style={{ fontFamily: "Inter" }}
            >
              Готовые шаблоны
            </h3>
            <p className="mb-6 text-xs tracking-widest uppercase font-script text-[#cc8448] font-bold">
              Быстро, стильно, доступно
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Более 50 современных дизайнов для свадеб, дней рождения и
              вечеринок. Вы просто меняете текст, добавляете свои фото и
              тайминг. Сайт готов к отправке уже сегодня.
            </p>
            <Button className="py-5 px-10" variant="outline">
              Смотреть каталог
            </Button>
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
          className="rounded-r-2xl"
        >
          <div className="p-10 lg:p-14 group bg-[#0f0f0f] h-full rounded-r-2xl">
            <div className="w-10 h-px mb-10 bg-[#cc8448]" />
            <h3
              className="text-white mb-2 text-2xl "
              style={{ fontFamily: "Inter" }}
            >
              Индивидуальная разработка
            </h3>
            <p className="mb-6 text-xs tracking-widest uppercase font-script text-[#cc8448] font-bold">
              Эксклюзивно под концепцию праздника
            </p>
            <p className="leading-relaxed mb-10 text-gray-400">
              Создаём уникальный сайт-приглашение с нуля. Разработаем дизайн под
              вашу полиграфию, добавим сложные анимации, интерактивы, схемы
              проезда и учтём любые пожелания.
            </p>
            <Button className="py-5 px-10" variant="mainCol">
              Обсудить проект
            </Button>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default TwoFormats;

import {
  ClipboardList,
  Clock,
  Palette,
  MapPin,
  Gift,
  Image,
} from "lucide-react";
import Title from "./Title";

const features = [
  {
    icon: ClipboardList,
    title: "Умный RSVP-опрос",
    text: "Сбор ответов (придёт / не придёт), выбор меню, аллергии, алкогольные предпочтения.",
  },
  {
    icon: Clock,
    title: "Тайминг дня",
    text: "Интерактивное расписание, чтобы никто не опоздал на регистрацию или банкет.",
  },
  {
    icon: Palette,
    title: "Дресс-код",
    text: "Палитра цветов праздника с примерами образов для гостей.",
  },
  {
    icon: MapPin,
    title: "Карта и навигация",
    text: "Кнопки для быстрого построения маршрута в Яндекс.Навигатор или Google Maps.",
  },
  {
    icon: Gift,
    title: "Wishlist",
    text: "Гости бронируют подарки онлайн, чтобы избежать одинаковых презентов.",
  },
  {
    icon: Image,
    title: "Галерея",
    text: "Возможность добавить историю вашей пары или фото с прошлых праздников.",
  },
];

const Features = () => {
  return (
    <section id="advantages" className="scroll-mt-24 py-32 px-6 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto">
        <Title
          title="Всё, что нужно для комфорта"
          subtitle="Возможности"
          description="ваших гостей"
          className="text-center mb-20"
          titleClassName="text-white"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-8 group cursor-default bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-all duration-300"
              >
                <div className="mb-6 w-10 h-10 flex items-center justify-center border border-[#cc8448]/30 hover:border-[#cc8448] transition-all duration-300 rounded-lg">
                  <Icon size={18} className="text-[#cc8448]" />
                </div>
                <h4
                  className="mb-3 text-white text-xl font-medium"
                  style={{ fontFamily: "Inter" }}
                >
                  {f.title}
                </h4>
                <p className="text-gray-400 text-sm font-light">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

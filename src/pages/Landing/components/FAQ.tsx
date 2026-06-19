import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Title from "./Title";

const faqs = [
  {
    q: "Где я буду видеть ответы гостей?",
    a: "Все данные из RSVP-формы автоматически собираются в удобную онлайн-таблицу (например, Google Sheets) или приходят вам уведомлениями в Telegram.",
  },
  {
    q: "Можно ли внести изменения в шаблон после отправки?",
    a: "Да! В этом главное преимущество веб-приглашений. Если изменилось время, место или дресс-код, вы можете отредактировать информацию в любой момент, и гости сразу увидят обновления по той же ссылке.",
  },
  {
    q: "Сколько времени занимает создание сайта?",
    a: "Приглашение по шаблону будет готово в течение 1–2 дней. Индивидуальная разработка занимает от 5 до 10 рабочих дней в зависимости от сложности.",
  },
  {
    q: "Будет ли сайт работать на телефонах?",
    a: "Абсолютно. Все наши пригласительные имеют 100% адаптивный дизайн и идеально отображаются на любых экранах: от старых смартфонов до больших мониторов.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        className="flex items-center justify-between w-full py-7 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-lg font-medium">{q}</span>
        <span
          className="shrink-0 transition-transform duration-300 ease-in-out"
          style={{
            color: "#cc8448",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-7 leading-relaxed transition-opacity duration-300 ease-in-out ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

const FAQ = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <Title title="Ответы на частые" subtitle="FAQ" description="вопросы" />
        <div className="border-t border-border">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

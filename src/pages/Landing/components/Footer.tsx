import { Link } from "react-router-dom";

import AnimatedContent from "@/components/AnimatedContent";
import Logotype from "@/components/Logotype";
import { Button } from "@/components/ui/button";
import { contacts } from "@/constants/contacts";

const navLinks = [
  { label: "Преимущества", to: "/advantages" },
  { label: "Шаблоны", to: "/templates" },
  { label: "Цены", to: "/prices" },
  { label: "Контакты", to: "/contacts" },
  { label: "Блог", to: "/blog" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
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
          >
            <div className="space-y-5">
              <Link to="/">
                <Logotype />
              </Link>
              <p className="font-script text-xl text-[#E3853C] leading-relaxed max-w-xs">
                Создайте незабываемое первое впечатление для ваших гостей
              </p>
              <Button variant="mainCol" className="h-10 px-6" asChild>
                <Link to="/templates">Выбрать шаблон</Link>
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
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-[#cc8448] mb-5">
                Навигация
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm font-light text-white/60 transition-colors hover:text-[#E3853C]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedContent>

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
            delay={0.24}
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-[#cc8448] mb-5">
                Контакты
              </p>
              <ul className="space-y-4">
                {contacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <li key={contact.label}>
                      <a
                        href={contact.href}
                        target={contact.external ? "_blank" : undefined}
                        rel={contact.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 text-sm font-light text-white/60 transition-colors hover:text-[#E3853C]"
                      >
                        <Icon size={14} className="shrink-0 text-[#cc8448]" />
                        {contact.value}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </AnimatedContent>
        </div>

        <div
          className="w-full h-px my-12"
          style={{ background: "rgba(255,255,255,0.1)" }}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-white/40 font-light">
          <p>© {new Date().getFullYear()} ClickInvite. Все права защищены.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="transition-colors hover:text-[#E3853C]"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/terms"
              className="transition-colors hover:text-[#E3853C]"
            >
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

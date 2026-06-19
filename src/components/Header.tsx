import { Link, useLocation } from "react-router-dom";

import Logotype from "./Logotype";
import { Button } from "./ui/button";

const landingNav = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Решения", href: "#templates" },
  { label: "Цены", href: "#pricing" },
  { label: "Контакты", href: "/contacts" },
  { label: "Блог", href: "/blog" },
] as const;

const templatesNav = [
  { label: "Все шаблоны", href: "#all" },
  { label: "Свадьбы", href: "#wedding" },
  { label: "Дни рождения", href: "#birthday" },
  { label: "Вечеринки", href: "#party" },
] as const;

const Header = () => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const isTemplates = pathname === "/templates";
  const navItems = isLanding ? landingNav : isTemplates ? templatesNav : [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border py-6">
      <nav className="container mx-auto flex items-center justify-between ">
        <Link to="/">
          <Logotype />
        </Link>

        {navItems.length > 0 && (
          <ul className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <Button variant="ghost" asChild>
                  <a href={href}>{label}</a>
                </Button>
              </li>
            ))}
          </ul>
        )}

        {isTemplates ? (
          <Button asChild>
            <Link to="/">На главную</Link>
          </Button>
        ) : (
          <Button asChild>
            <Link to="/templates">Выбрать шаблон</Link>
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;

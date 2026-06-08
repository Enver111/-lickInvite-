import { Link } from "react-router-dom";

import Logotype from "./Logotype";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border py-6">
      <nav className="container mx-auto flex items-center justify-between ">
        <Link to="/">
          <Logotype />
        </Link>

        <ul className="flex items-center gap-4">
          <li>
            <Button variant="ghost">
              <Link to="/advantages">Преимущества</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link to="/templates">Шаблоны</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link to="/prices">Цены</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link to="/contacts">Контакты</Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link to="/blog">Блог</Link>
            </Button>
          </li>
        </ul>
        <Button>
          <Link to="/templates">Выбрать шаблон</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;

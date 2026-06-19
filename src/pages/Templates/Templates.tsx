const categories = [
  { id: "all", title: "Все шаблоны" },
  { id: "wedding", title: "Свадьбы" },
  { id: "birthday", title: "Дни рождения" },
  { id: "party", title: "Вечеринки" },
] as const;

const Templates = () => {
  return (
    <div className="mt-20 min-h-[calc(100vh-85px)] px-6 py-20">
      <div className="container mx-auto space-y-16">
        <div id="all" className="scroll-mt-24 space-y-4">
          <h1 className="font-script text-4xl text-[#E3853C]">Выберите шаблон</h1>
          <p className="max-w-2xl text-muted-foreground">
            Более 50 современных дизайнов для любого события
          </p>
        </div>

        {categories.slice(1).map(({ id, title }) => (
          <section key={id} id={id} className="scroll-mt-24 space-y-4">
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="text-muted-foreground">Каталог шаблонов скоро появится здесь.</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Templates;

import { useState } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Фирменный стиль",
    category: "Брендинг",
    year: "2024",
    description: "Разработка визуальной идентичности для премиального бренда. Логотип, палитра, типографика, носители фирменного стиля.",
    tags: ["Логотип", "Брендбук", "Айдентика"],
    image: "https://cdn.poehali.dev/projects/fac68b34-6717-4ca6-af38-f5c0b0ff4889/files/08868f85-9907-4bd6-988f-a1dd26bf1f3b.jpg",
    result: "Рост узнаваемости бренда на 40% за полгода после редизайна",
  },
  {
    id: 2,
    title: "Интернет-магазин",
    category: "Веб-разработка",
    year: "2024",
    description: "Полнофункциональная e-commerce платформа с каталогом, корзиной и личным кабинетом. Интеграция с платёжными системами.",
    tags: ["React", "UI/UX", "E-commerce"],
    image: "https://cdn.poehali.dev/projects/fac68b34-6717-4ca6-af38-f5c0b0ff4889/files/24e27c67-d525-4092-b114-04acab0440f5.jpg",
    result: "Конверсия 4.2% — выше среднего по отрасли в 2 раза",
  },
  {
    id: 3,
    title: "Финансовое приложение",
    category: "Мобильная разработка",
    year: "2023",
    description: "Мобильное приложение для управления личными финансами. Аналитика расходов, прогнозирование, интеграция с банками.",
    tags: ["iOS", "Android", "FinTech"],
    image: "https://cdn.poehali.dev/projects/fac68b34-6717-4ca6-af38-f5c0b0ff4889/files/a5269744-d924-4a6e-8a88-48707b5a0231.jpg",
    result: "15 000+ активных пользователей за первые 3 месяца",
  },
];

const filters = ["Все", "Брендинг", "Веб-разработка", "Мобильная разработка"];

export default function Index() {
  const [active, setActive] = useState("Все");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = active === "Все" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e8e2d8] font-ibm">

      {/* Header */}
      <header className="border-b border-[#2a2a2a] px-8 py-6 flex items-center justify-between">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-[#666] mb-1">Портфолио</p>
          <h1 className="font-cormorant text-3xl font-light tracking-wide">Иван Петров</h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-[#888] tracking-wider">
          <a href="#" className="hover:text-[#e8e2d8] transition-colors">Проекты</a>
          <a href="#" className="hover:text-[#e8e2d8] transition-colors">Обо мне</a>
          <a href="#" className="hover:text-[#e8e2d8] transition-colors">Контакт</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-8 pt-20 pb-16 max-w-5xl">
        <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-6">Избранные работы</p>
        <h2 className="font-cormorant text-5xl md:text-7xl font-light leading-[1.1] mb-6">
          Создаю продукты,<br />
          <span className="italic text-[#888]">которые работают</span>
        </h2>
        <p className="text-[#666] text-sm leading-relaxed max-w-md font-light">
          Более 8 лет в разработке цифровых продуктов. Специализация — интерфейсы и бренды для бизнеса.
        </p>
      </section>

      {/* Filters */}
      <section className="px-8 pb-10 border-b border-[#1e1e1e]">
        <div className="flex gap-6 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs tracking-[0.2em] uppercase pb-2 border-b transition-all ${
                active === f
                  ? "text-[#c9a96e] border-[#c9a96e]"
                  : "text-[#555] border-transparent hover:text-[#999]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className={`group relative bg-[#0e0e0e] cursor-pointer overflow-hidden animate-slide-up ${
                i === 0 ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
            >
              <div className={`overflow-hidden ${i === 0 ? "h-[420px]" : "h-[280px]"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[#c9a96e] mb-2">{project.category}</p>
                    <h3 className="font-cormorant text-2xl font-light">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-[#555] group-hover:text-[#c9a96e] transition-colors">
                    <span className="text-xs tracking-wider">{project.year}</span>
                    <Icon name="ArrowUpRight" size={16} />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a96e]/30 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 py-16 border-t border-[#1e1e1e] grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { num: "8+", label: "лет опыта" },
          { num: "60+", label: "проектов" },
          { num: "40+", label: "клиентов" },
          { num: "12", label: "наград" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-cormorant text-5xl font-light text-[#c9a96e] mb-1">{s.num}</p>
            <p className="text-xs tracking-[0.2em] uppercase text-[#555]">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-[#1e1e1e] flex items-center justify-between text-[#444] text-xs tracking-wider">
        <span>© 2024 Иван Петров</span>
        <button className="flex items-center gap-2 text-[#c9a96e] hover:text-[#e8c880] transition-colors">
          Связаться <Icon name="Mail" size={14} />
        </button>
      </footer>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#131313] border border-[#2a2a2a] max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-black/50 border border-[#333] flex items-center justify-center hover:bg-[#1e1e1e] transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#c9a96e] mb-2">{selected.category} · {selected.year}</p>
                  <h2 className="font-cormorant text-4xl font-light">{selected.title}</h2>
                </div>
              </div>

              <p className="text-[#888] text-sm leading-relaxed mb-8 font-light">{selected.description}</p>

              <div className="border-t border-[#1e1e1e] pt-6 mb-6">
                <p className="text-xs tracking-[0.2em] uppercase text-[#555] mb-3">Результат</p>
                <p className="text-[#c9a96e] font-cormorant text-xl italic">"{selected.result}"</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 border border-[#2a2a2a] text-xs tracking-wider text-[#666] uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/60
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-5
          md:h-20
          md:px-8
        "
      >
        {/* Логотип */}

        <a
          href="#home"
          className="
            text-sm
            font-bold
            tracking-[3px]
            text-cyan-400
            transition
            hover:opacity-80
            md:text-lg
            md:tracking-[4px]
          "
        >
          LANDING STUDIO
        </a>

        {/* Меню (только ПК) */}

        <nav className="hidden items-center gap-10 text-sm md:flex">
          <a
            href="#home"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            Главная
          </a>

          <a
            href="#about"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            О нас
          </a>

          <a
            href="#portfolio"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            Проекты
          </a>

          <a
            href="#contact"
            className="text-zinc-300 transition hover:text-cyan-400"
          >
            Контакты
          </a>
        </nav>

        {/* Кнопка */}

        <a
          href="#contact"
          className="
            rounded-full
            bg-cyan-400
            px-4
            py-2
            text-xs
            font-semibold
            text-black
            transition
            duration-300
            hover:scale-105
            hover:shadow-lg
            md:px-6
            md:py-3
            md:text-sm
          "
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
}
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
        bg-black/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-5
          md:px-8
        "
      >
        {/* Логотип */}

        <a
          href="#home"
          className="
            text-lg
            font-bold
            tracking-[4px]
            text-yellow-400
            transition
            hover:opacity-80
          "
        >
          ИНЖЕНЕР
        </a>

        {/* Меню */}

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#home"
            className="text-sm text-zinc-300 transition hover:text-yellow-400"
          >
            Главная
          </a>

          <a
            href="#about"
            className="text-sm text-zinc-300 transition hover:text-yellow-400"
          >
            Преимущества
          </a>

          <a
            href="#portfolio"
            className="text-sm text-zinc-300 transition hover:text-yellow-400"
          >
            Услуги
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-300 transition hover:text-yellow-400"
          >
            Контакты
          </a>
        </nav>

        {/* Кнопка */}

        <a
          href="#contact"
          className="
            rounded-full
            bg-yellow-400
            px-5
            py-3
            text-sm
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-yellow-300
            hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]
          "
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
}
export default function Navbar() {
    return (
      <header
        className="
          fixed
          top-0
          z-50
          w-full
          border-b
          border-white/10
          bg-black/60
          backdrop-blur-xl
        "
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
  
          <a
            href="#home"
            className="
              text-lg
              font-bold
              tracking-[4px]
              text-cyan-400
              transition
              hover:opacity-80
            "
          >
            LANDING STUDIO
          </a>
  
          <nav className="hidden gap-10 text-sm md:flex">
  
            <a
              href="#home"
              className="text-zinc-300 transition duration-300 hover:text-cyan-400"
            >
              Главная
            </a>
  
            <a
              href="#about"
              className="text-zinc-300 transition duration-300 hover:text-cyan-400"
            >
              О нас
            </a>
  
            <a
              href="#portfolio"
              className="text-zinc-300 transition duration-300 hover:text-cyan-400"
            >
              Проекты
            </a>
  
            <a
              href="#contact"
              className="text-zinc-300 transition duration-300 hover:text-cyan-400"
            >
              Контакты
            </a>
  
          </nav>
  
          <a
            href="#contact"
            className="
rounded-full
bg-cyan-400
px-4
py-2
text-sm
font-semibold
"
          >
            Оставить заявку
          </a>
  
        </div>
      </header>
    );
  }
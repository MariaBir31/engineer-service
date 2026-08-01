export default function HeroMockup() {
    return (
      <div
        className="
          animate-floating
          w-[620px]
          h-[400px]
          rounded-3xl
          border border-white/10
          bg-zinc-900
          backdrop-blur-xl
          shadow-2xl shadow-cyan-500/10
          overflow-hidden
          rotate-[-4deg]
          transition
          duration-500
          hover:rotate-[-1deg]
          hover:scale-105
          hover:scale-[1.02]
        "
      >
        {/* Верхняя панель браузера */}
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
  
          <div className="ml-4 text-xs text-zinc-500">
            thecoffee.kz
          </div>
        </div>
  
        {/* Контент */}
        <div className="flex h-full flex-col justify-center px-10">
          <p className="text-cyan-400 text-sm tracking-[4px] uppercase">
            Coffee House
          </p>
  
          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Лучший кофе
            <br />
            в Алматы
          </h2>
  
          <p className="mt-5 text-zinc-400">
            Авторские напитки и уютная атмосфера.
          </p>
  
          <button className="mt-8 w-fit rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black">
            Заказать
          </button>
        </div>
      </div>
    );
  }
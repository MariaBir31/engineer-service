export default function HeroMockup() {
  return (
    <div
      className="
        animate-floating
        w-[320px]
        h-[220px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        shadow-2xl
        shadow-cyan-500/10
        transition-all
        duration-500
        rotate-[-3deg]
        hover:rotate-[-1deg]
        hover:scale-[1.02]

        sm:w-[430px]
        sm:h-[280px]

        lg:w-[620px]
        lg:h-[400px]
      "
    >
      {/* Верх браузера */}

      <div
        className="
          flex
          items-center
          gap-2
          border-b
          border-white/10
          px-4
          py-3
          lg:px-5
        "
      >
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

        <div className="ml-4 text-[10px] text-zinc-500 lg:text-xs">
          thecoffee.kz
        </div>
      </div>

      {/* Контент */}

      <div
        className="
          flex
          h-full
          flex-col
          justify-center
          px-6
          lg:px-10
        "
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[3px]
            text-cyan-400
            lg:text-sm
            lg:tracking-[4px]
          "
        >
          Coffee House
        </p>

        <h2
          className="
            mt-3
            text-2xl
            font-bold
            leading-tight
            sm:text-3xl
            lg:mt-4
            lg:text-4xl
          "
        >
          Лучший кофе
          <br />
          в Алматы
        </h2>

        <p
          className="
            mt-4
            text-sm
            text-zinc-400
            lg:mt-5
            lg:text-base
          "
        >
          Авторские напитки и уютная атмосфера.
        </p>

        <button
          className="
            mt-6
            w-fit
            rounded-full
            bg-cyan-400
            px-5
            py-2
            text-sm
            font-semibold
            text-black
            lg:mt-8
            lg:px-6
            lg:py-3
          "
        >
          Заказать
        </button>
      </div>
    </div>
  );
}
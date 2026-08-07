import Image from "next/image";

export default function HeroMockup() {
  return (
    <div
      className="
        relative
        animate-floating
        w-[340px]
        h-[250px]
        overflow-hidden
        rounded-[32px]
        border
        border-yellow-500/20
        bg-[#141414]
        shadow-[0_40px_80px_rgba(255,200,0,0.08)]
        rotate-[-4deg]

        sm:w-[470px]
        sm:h-[330px]

        lg:w-[640px]
        lg:h-[430px]
      "
    >
      {/* Верх браузера */}

      <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-5 py-4 backdrop-blur">

        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

        <div className="ml-4 text-xs tracking-wide text-zinc-500">
          engineer-service.kz
        </div>

      </div>

      {/* Фото */}

      <div className="relative h-full">

        <Image
          src="/images/workspace.png"
          alt="Рабочее место"
          fill
          priority
        className="object-contain bg-zinc-900"
        />

        {/* Затемнение */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

        {/* Свет */}

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent" />

        {/* Текст */}

        <div className="absolute left-8 bottom-8">

          <p className="text-xs uppercase tracking-[0.45em] text-yellow-400">
            СЕРВИСНЫЙ ЦЕНТР
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight">
            Ремонт техники
            <br />
            любой сложности
          </h2>

          <p className="mt-4 max-w-sm text-zinc-300">
            Более 60 видов ремонта.
            Бесплатная диагностика и гарантия
            на выполненные работы.
          </p>

        </div>

        {/* Маленькая карточка */}

        <div
          className="
            absolute
            top-7
            right-7
            rounded-2xl
            border
            border-white/10
            bg-black/50
            px-5
            py-4
            backdrop-blur-md
          "
        >
          <p className="text-3xl font-bold text-yellow-400">
            60+
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            услуг
          </p>
        </div>

      </div>
    </div>
  );
}
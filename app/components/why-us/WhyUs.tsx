import Image from "next/image";

export default function WhyUs() {
  const items = [
    "Более 60 видов ремонта",
    "Бесплатная диагностика",
    "Гарантия на выполненные работы",
    "Оригинальные и качественные комплектующие",
    "Опытные мастера",
    "Ремонт техники любой сложности",
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>
          <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
            Почему выбирают нас
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight">
            Надёжный сервисный центр
            <br />
            в Алматы
          </h2>

          <p className="mt-8 text-xl leading-9 text-zinc-400">
            Мы выполняем ремонт ноутбуков, компьютеров,
            смартфонов, телевизоров и бытовой техники.
            Работаем быстро, аккуратно и предоставляем
            гарантию на выполненные работы.
          </p>

          <div className="mt-12 space-y-5">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-400
                    text-lg
                    font-bold
                    text-black
                  "
                >
                  ✓
                </div>

                <span className="text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      {/* RIGHT */}

<div className="relative mt-12 flex justify-center lg:mt-20">

{/* Свечение */}

<div
  className="
    absolute
    -z-10
    h-[420px]
    w-[420px]
    rounded-full
    bg-yellow-500/10
    blur-3xl
  "
/>

<div
  className="
    relative
    overflow-hidden
    rounded-[36px]
    border
    border-yellow-500/20
    bg-[#141414]
    shadow-[0_40px_80px_rgba(255,200,0,0.08)]
    rotate-[2deg]
    transition-all
    duration-500
    hover:rotate-0
    hover:scale-[1.02]
    w-full
    max-w-[520px]
  "
>
  <Image
   src="/images/workspace.png"
    alt="Рабочее место сервисного центра"
    width={900}
    height={700}
    className="
      h-full
      w-full
      object-cover
      object-center
    "
  />

  {/* Затемнение */}

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

  {/* Подпись */}

  <div className="absolute bottom-8 left-8">

    <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
      Сервисный центр
    </p>

    <h3 className="mt-2 text-3xl font-bold">
      Рабочее место
    </h3>

    <p className="mt-2 text-zinc-300">
      Профессиональное оборудование
      для ремонта любой сложности.
    </p>

  </div>

</div>
</div>
</div>
</section>  
  );
}
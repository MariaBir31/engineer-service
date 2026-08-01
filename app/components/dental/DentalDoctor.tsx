import Image from "next/image";

export default function DentalDoctor() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-24 px-10">

        {/* Фото */}

        <div className="relative h-[700px] overflow-hidden rounded-[40px] shadow-2xl">

          <Image
            src="/images/dental-doctor.jpeg"
            alt="Doctor"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />

        </div>

        {/* Текст */}

        <div>

          <p className="uppercase tracking-[6px] text-sky-500">
            OUR DOCTORS
          </p>

          <h2 className="mt-6 text-6xl font-bold leading-tight text-zinc-900">
            Забота начинается
            <br />
            с профессионалов
          </h2>

          <p className="mt-8 text-xl leading-10 text-zinc-600">
            Наша команда объединяет опытных стоматологов,
            современные технологии и внимательное отношение
            к каждому пациенту.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-10">

            <div>

              <p className="text-6xl font-bold text-sky-500">
                15+
              </p>

              <p className="mt-3 text-zinc-600">
                лет опыта
              </p>

            </div>

            <div>

              <p className="text-6xl font-bold text-sky-500">
                5000+
              </p>

              <p className="mt-3 text-zinc-600">
                счастливых пациентов
              </p>

            </div>

            <div>

              <p className="text-6xl font-bold text-sky-500">
                98%
              </p>

              <p className="mt-3 text-zinc-600">
                рекомендуют клинику
              </p>

            </div>

            <div>

              <p className="text-6xl font-bold text-sky-500">
                4.9★
              </p>

              <p className="mt-3 text-zinc-600">
                средний рейтинг
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
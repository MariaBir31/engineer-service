import Image from "next/image";
import FitnessAbout from "../components/fitness/FitnessAbout";
import FitnessPrograms from "../components/fitness/FitnessPrograms";

export default function FitnessPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl items-center justify-between px-10 py-24">

        {/* Левая часть */}

        <div className="max-w-xl">

          <p className="mb-5 uppercase tracking-[6px] text-[#8DC63F]">
            Fitness Club
          </p>

          <h1 className="text-7xl font-bold leading-[1.05] text-[#111111]">
            Стань
            <br />
            сильнее
            <br />
            уже сегодня
          </h1>

          <p className="mt-8 text-2xl leading-10 text-[#5e5e5e]">
            Современный фитнес-клуб с лучшими тренерами,
            персональными программами и новым оборудованием.
          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-[#A3FF12] px-10 py-5 font-semibold text-black transition duration-300 hover:scale-105 hover:shadow-xl">
              Начать тренировки
            </button>

            <button className="rounded-full border border-gray-300 px-10 py-5 font-semibold text-gray-700 transition duration-300 hover:bg-gray-100">
              Посмотреть зал
            </button>

          </div>

        </div>

        {/* Правая часть */}

        <div className="relative h-[700px] w-[500px] overflow-hidden rounded-[42px] shadow-2xl">

          <Image
            src="/images/hero-fitness.jpeg"
            alt="Fitness"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-top scale-105"
          />

        </div>

      </section>

      {/* About */}

      <FitnessAbout />

      {/* Programs */}

      <FitnessPrograms />

    </main>
  );
}
import Image from "next/image";

import DentalAbout from "../components/dental/DentalAbout";
import DentalServices from "../components/dental/DentalServices";
import DentalFeatures from "../components/dental/DentalFeatures";
import DentalDoctor from "../components/dental/DentalDoctor";


export default function DentalPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="mx-auto flex max-w-7xl items-center justify-between px-10 py-24">

        {/* Левая часть */}

        <div className="max-w-xl">

          <p className="mb-5 uppercase tracking-[6px] text-sky-500">
            Dental Clinic
          </p>

          <h1 className="text-7xl font-bold leading-tight text-zinc-900">
            Здоровая
            <br />
            улыбка —
            <br />
            каждый день
          </h1>

          <p className="mt-8 text-2xl leading-10 text-zinc-600">
            Современная стоматология для всей семьи.
            Безболезненное лечение, опытные врачи и
            новейшее оборудование.
          </p>

          <div className="mt-12 flex gap-5">

            <button
              className="
                rounded-full
                bg-sky-500
                px-10
                py-5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-sky-600
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Записаться
            </button>

            <button
              className="
                rounded-full
                border
                border-sky-200
                px-10
                py-5
                font-semibold
                text-sky-700
                transition-all
                duration-300
                hover:bg-sky-50
                hover:-translate-y-1
              "
            >
              Наши врачи
            </button>

          </div>

        </div>

        {/* Правая часть */}

        <div className="relative h-[680px] w-[500px] overflow-hidden rounded-[42px] shadow-2xl">

          <Image
            src="/images/hero-dental.jpeg"
            alt="Dental Clinic"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-center"
          />

        </div>

      </section>

      <DentalFeatures />

        <DentalServices />


        <DentalDoctor />
    </main>
  );
}
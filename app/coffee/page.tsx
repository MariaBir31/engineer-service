import Image from "next/image";
import CoffeeAbout from "../components/coffee/CoffeeAbout";
import CoffeeMenu from "../components/coffee/CoffeeMenu";
import CoffeeGallery from "../components/coffee/CoffeeGallery";

export default function CoffeePage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Hero */}

      <section className="mx-auto flex max-w-7xl items-center justify-between px-10 py-24">
        {/* Левая часть */}

        <div className="max-w-xl">
          <p className="mb-5 uppercase tracking-[6px] text-[#9d6d4c]">
            Coffee House
          </p>

          <h1 className="text-7xl font-bold leading-tight text-[#3d2a21]">
            Лучший кофе
            <br />
            начинается
            <br />
            здесь
          </h1>

          <p className="mt-8 text-2xl leading-10 text-[#6f5d52]">
            Свежая обжарка, авторские напитки,
            уютная атмосфера и завтраки весь день.
          </p>

          <div className="mt-12 flex gap-5">
            <button
              className="
                rounded-full
                bg-[#6f4b36]
                px-10
                py-5
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#5f3f2e]
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              Посмотреть меню
            </button>

            <button
              className="
                rounded-full
                border
                border-[#d8c4b6]
                px-10
                py-5
                font-semibold
                text-[#6f4b36]
                transition-all
                duration-300
                hover:bg-[#f3ebe3]
                hover:-translate-y-1
              "
            >
              Забронировать
            </button>
          </div>
        </div>

        {/* Правая часть */}

        <div className="relative h-[680px] w-[500px] overflow-hidden rounded-[42px] shadow-2xl">
          <Image
            src="/images/hero-coffee.jpeg"
            alt="Coffee"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* О нас */}

      <CoffeeAbout />

      <CoffeeMenu />

      <CoffeeGallery />
    </main>
  );
}
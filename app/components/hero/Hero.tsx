import Button from "../Button";
import Glow from "../Glow";
import HeroCards from "../HeroCards";

type HeroProps = {
  hero: {
    title: string;
    subtitle: string;
    button: string;
    telegram: string;
    telegramLink: string;
  };
};

export default function Hero({ hero }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-32 pb-24"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-20 lg:flex-row flex-col">

        {/* Левая часть */}

        <div className="max-w-2xl text-center lg:text-left">

          {/* Бейдж */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-yellow-400/30
              bg-yellow-400/10
              px-4
              py-2
              text-sm
              font-medium
              text-yellow-300
            "
          >
            📍 Алматы • Бесплатная диагностика
          </div>

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-[1]
              sm:text-6xl
              lg:text-7xl
            "
          >
            {hero.title}
          </h1>

          <p
            className="
              mt-7
              max-w-xl
              text-lg
              leading-8
              text-zinc-400
              sm:text-xl
            "
          >
            {hero.subtitle}
          </p>

          {/* Преимущества */}

          <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">

            {[
              "✓ Бесплатная диагностика",
              "✓ Гарантия",
              "✓ Более 60 услуг",
              "✓ Работаем ежедневно",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border
                  border-yellow-400/20
                  bg-zinc-900
                  px-4
                  py-2
                  text-sm
                  text-zinc-200
                "
              >
                {item}
              </div>
            ))}

          </div>

          {/* Кнопки */}

          <div
            className="
              mt-12
              flex
              flex-col
              items-center
              gap-6
              sm:flex-row
              lg:justify-start
            "
          >
            <Button href="#contact">
              {hero.button}
            </Button>

            <a
              href={hero.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-lg
                font-medium
                text-yellow-400
                transition
                hover:text-yellow-300
              "
            >
              {hero.telegram} →
            </a>
          </div>

        </div>

        {/* Правая часть */}

        <div
          className="
            relative
            flex
            justify-center
          "
        >
          <Glow />

          <HeroCards />

        </div>

      </div>
    </section>
  );
}
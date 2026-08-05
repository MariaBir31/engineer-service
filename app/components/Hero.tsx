import Button from "./Button";
import Glow from "./Glow";
import HeroCards from "./HeroCards";

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
      className="hero-grid flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-20 lg:pb-24"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          gap-16
          px-6
          lg:flex-row
          lg:justify-between
          lg:px-8
        "
      >
        {/* Левая часть */}

        <div className="max-w-2xl text-center lg:text-left">
          <h1
            className="
              text-5xl
              font-bold
              leading-[1.05]
              sm:text-6xl
              lg:text-7xl
            "
          >
            {hero.title}
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-400
              sm:text-xl
            "
          >
            {hero.subtitle}
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              gap-5
              sm:flex-row
              sm:justify-center
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
                text-cyan-400
                transition
                hover:text-cyan-300
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
            w-full
            justify-center
            lg:w-auto
          "
        >
          <Glow />

          <div
            className="
              absolute
              top-8
              h-[240px]
              w-[320px]
              rounded-3xl
              border
              border-white/5
              bg-zinc-900/40
              opacity-40
              blur-[1px]
              rotate-[6deg]
              sm:h-[300px]
              sm:w-[420px]
              lg:top-10
              lg:right-24
              lg:h-[320px]
              lg:w-[500px]
            "
          />

          <div
            className="
              scale-[0.48]
              sm:scale-[0.68]
              md:scale-[0.82]
              lg:scale-100
            "
          >
            <HeroCards />
          </div>
        </div>
      </div>
    </section>
  );
}
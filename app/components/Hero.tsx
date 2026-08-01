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
         className="hero-grid flex min-h-screen items-center pt-20 pb-24">
        <div
  className="
    mx-auto
    flex
    w-full
    max-w-7xl
    flex-col
    gap-16
    px-6
    pt-10
    md:flex-row
    md:items-center
    md:justify-between
    md:px-8
  "
>
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {hero.title}
          </h1>

          <p className="mt-6 text-base md:text-xl text-zinc-400">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex items-center gap-6">
            <Button href="#contact">
              {hero.button}
            </Button>

            <a
     href={hero.telegramLink}
     target="_blank"
     rel="noopener noreferrer"
     className="text-cyan-400 transition hover:text-cyan-300"
            >
             {hero.telegram} →
             </a>
            </div>
        </div>
        <div
  className="
    relative
    mt-8
    flex
    w-full
    justify-center
    md:mt-0
    md:w-auto
  "
>

  <Glow />

  <div
    className="
      absolute
      top-10
      right-24
      h-[320px]
      w-[500px]
      rounded-3xl
      border
      border-white/5
      bg-zinc-900/40
      blur-[1px]
      rotate-[6deg]
      opacity-40
    "
  />

<div className="scale-[0.72] sm:scale-[0.85] lg:scale-100">
    <HeroCards />
</div>
</div>
      </div>
    </section>
  );
}
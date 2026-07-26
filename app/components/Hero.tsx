type HeroProps = {
    title: string;
  };
  
  export default function Hero({ title }: HeroProps) {
      return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8">
        <div className="max-w-xl">
        <p className="mb-4 text-cyan-400 uppercase tracking-[6px]">
            Landing Studio
          </p>

          <h1 className="text-6xl font-bold leading-tight">
          {title}
          </h1>

          <p className="mt-6 text-xl text-zinc-400">
            Landing pages для малого бизнеса.
          </p>

          <button className="mt-10 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black">
            Оставить заявку
          </button>

        </div>

        <div className="h-[450px] w-[450px] rounded-3xl bg-zinc-800"></div>

      </div>

    </section>
  );
}
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <section 
      id="portfolio"
    className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-5xl font-bold">
          Наши проекты
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xl text-zinc-400">
          Посмотрите, как может выглядеть сайт
          именно для вашего бизнеса.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

        <ProjectCard
        title="Coffee House"
        category="Кофейня"
        theme="coffee"
        />

        <ProjectCard
        title="Fitness Club"
        category="Фитнес"
        theme="fitness"
        />

        <ProjectCard
        title="Dental Clinic"
        category="Стоматология"
        theme="dental"
        />

        </div>

      </div>
    </section>
  );
}
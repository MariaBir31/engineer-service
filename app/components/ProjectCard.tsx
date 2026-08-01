import Link from "next/link";

type ProjectCardProps = {
  title: string;
  category: string;
  theme: "coffee" | "fitness" | "dental";
};

export default function ProjectCard({
  title,
  category,
  theme,
}: ProjectCardProps) {
  let accent = "text-cyan-400";
  let buttonColor = "bg-cyan-400";
  let gradient = "from-zinc-900 via-zinc-800 to-black";
  let href = "/";

  let previewTitle = "";
  let previewSubtitle = "";
  let previewButton = "";

  if (theme === "coffee") {
    accent = "text-amber-400";
    buttonColor = "bg-amber-400";
    gradient = "from-amber-950 via-zinc-900 to-black";

    previewTitle = "Лучший кофе\nв Алматы";
    previewSubtitle = "Авторские напитки и уютная атмосфера.";
    previewButton = "Заказать";
    href = "/coffee";
  }

  if (theme === "fitness") {
    accent = "text-lime-400";
    buttonColor = "bg-lime-400";
    gradient = "from-lime-950 via-zinc-900 to-black";

    previewTitle = "Стань\nсильнее";
    previewSubtitle = "Современный фитнес-клуб с лучшими тренерами.";
    previewButton = "Записаться";
    href = "/fitness";
  }

  if (theme === "dental") {
    accent = "text-sky-400";
    buttonColor = "bg-sky-400";
    gradient = "from-sky-950 via-zinc-900 to-black";

    previewTitle = "Здоровая\nулыбка";
    previewSubtitle = "Современная стоматология для всей семьи.";
    previewButton = "Консультация";
    href = "/dental";
  }

  return (
    <Link href={href}>
      <div
        className="
          group
          cursor-pointer
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-zinc-900
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-400/30
          hover:shadow-2xl
          hover:shadow-cyan-500/10
        "
      >
        {/* Верх браузера */}

        <div className="flex items-center gap-2 border-b border-white/10 p-4">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Мини-сайт */}

        <div
          className={`
            h-72
            bg-gradient-to-br
            ${gradient}
            p-8
            transition-all
            duration-500
            group-hover:scale-[1.03]
          `}
        >
          <p className={`text-xs uppercase tracking-[0.35em] ${accent}`}>
            {category}
          </p>

          <h3 className="mt-6 whitespace-pre-line text-4xl font-bold leading-tight">
            {previewTitle}
          </h3>

          <div className="mt-5 flex h-20 flex-col justify-between">
            <p className="text-zinc-400">
              {previewSubtitle}
            </p>

            <button
              className={`${buttonColor} rounded-full px-5 py-2 font-semibold text-black transition group-hover:scale-105`}
            >
              {previewButton}
            </button>
          </div>
        </div>

        {/* Подпись */}

        <div className="p-6">
          <p className={`text-sm uppercase tracking-[0.25em] ${accent}`}>
            {category}
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {title}
          </h2>

          <p
            className="
              mt-4
              flex
              items-center
              gap-2
              text-sm
              font-medium
              text-zinc-500
              transition
              duration-300
              group-hover:text-white
            "
          >
            Открыть проект
            <span className="transition group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
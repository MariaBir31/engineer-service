const programs = [
    {
      title: "Персональные тренировки",
      description:
        "Индивидуальная программа с тренером под ваши цели.",
      price: "от 15 000 ₸",
      icon: "💪",
    },
    {
      title: "Group Fitness",
      description:
        "Кардио, функциональные и силовые занятия в группе.",
      price: "от 10 000 ₸",
      icon: "🏃",
    },
    {
      title: "Premium Membership",
      description:
        "Безлимитный доступ в клуб и персональное сопровождение.",
      price: "от 35 000 ₸",
      icon: "🏆",
    },
  ];
  
  export default function FitnessPrograms() {
    return (
      <section className="bg-[#f8faf8] py-28">
        <div className="mx-auto max-w-7xl px-10">
  
          <div className="mb-16 text-center">
  
            <p className="uppercase tracking-[5px] text-lime-500">
              PROGRAMS
            </p>
  
            <h2 className="mt-5 text-5xl font-bold text-zinc-900">
              Наши программы
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-zinc-600">
              Выберите формат тренировок,
              который подходит именно вам.
            </p>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
  
            {programs.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[32px]
                  bg-white
                  border
                  border-zinc-200
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
                <div className="mb-8 text-5xl">
                  {item.icon}
                </div>
  
                <h3 className="text-3xl font-bold text-zinc-900">
                  {item.title}
                </h3>
  
                <p className="mt-5 leading-8 text-zinc-600">
                  {item.description}
                </p>
  
                <div className="mt-10 flex items-center justify-between">
  
                  <span className="text-2xl font-bold text-lime-500">
                    {item.price}
                  </span>
  
                  <button
                    className="
                      rounded-full
                      bg-lime-400
                      px-5
                      py-3
                      font-semibold
                      text-black
                      transition
                      hover:scale-105
                    "
                  >
                    Подробнее
                  </button>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }
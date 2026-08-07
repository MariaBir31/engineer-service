export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Оставьте заявку",
      text: "Позвоните нам или напишите в WhatsApp. Мы уточним проблему и ответим на ваши вопросы.",
    },
    {
      number: "02",
      title: "Диагностика",
      text: "Проводим диагностику техники и сообщаем точную стоимость ремонта до начала работ.",
    },
    {
      number: "03",
      title: "Ремонт",
      text: "Используем качественные комплектующие и выполняем ремонт максимально быстро.",
    },
    {
      number: "04",
      title: "Готово",
      text: "Вы забираете полностью исправную технику с гарантией на выполненные работы.",
    },
  ];

  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="text-center">
        <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Как мы работаем
        </p>

        <h2 className="mt-5 text-5xl font-bold">
          Всего 4 простых шага
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
          Мы сделали процесс ремонта максимально понятным и прозрачным.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-zinc-900
              p-8
              transition
              duration-300
              hover:-translate-y-2
              hover:border-yellow-400/50
            "
          >
            <p className="text-5xl font-bold text-yellow-400/30">
              {step.number}
            </p>

            <h3 className="mt-8 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
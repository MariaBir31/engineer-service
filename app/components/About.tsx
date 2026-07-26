import FeatureCard from "./FeatureCard";

const advantages = [
    {
      title: "Быстро",
      text: "Запускаем сайт всего за несколько дней.",
    },
    {
      title: "Современно",
      text: "Минималистичный дизайн и адаптивная верстка.",
    },
    {
      title: "Под ключ",
      text: "Берем на себя весь процесс разработки.",
    },
    {
        title: "Поддержка",
        text: "Помогаем после запуска сайта."
      },
  ];
  
  export default function About() {
    return (
      <section className="bg-zinc-900 py-32">
        <div className="mx-auto max-w-6xl px-8">
  
          <h2 className="mb-6 text-5xl font-bold">
            Почему выбирают нас
          </h2>
  
          <p className="mb-16 max-w-3xl text-xl text-zinc-400">
            Мы создаем сайты,
            которые помогают бизнесу получать клиентов.
          </p>
  
          <div className="grid gap-8 md:grid-cols-3">
        
          {advantages.map((item) => (
  <FeatureCard
    key={item.title}
    title={item.title}
    text={item.text}
  />
))}
  
          </div>
  
        </div>
      </section>
    );
  }
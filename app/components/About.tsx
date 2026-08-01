import FeatureCard from "./FeatureCard";
import LightningIcon from "./icons/LightningIcon";
import MonitorIcon from "./icons/MonitorIcon";
import RocketIcon from "./icons/RocketIcon";
import SupportIcon from "./icons/SupportIcon";

const advantages = [
    {
      title: "Больше клиентов",
      description:
        "Создаем сайты, которые вызывают доверие и помогают получать новые заявки.",
      icon: <LightningIcon />,
      size: "large",
    },
    {
      title: "Быстрый запуск",
      description:
        "Первую версию сайта вы увидите уже через несколько дней.",
      icon: <RocketIcon />,
      size: "small",
    },
    {
      title: "Адаптивный дизайн",
      description:
        "Ваш сайт идеально выглядит на телефоне, планшете и компьютере.",
      icon: <MonitorIcon />,
      size: "small",
    },
    {
      title: "Заявки в Telegram",
      description:
        "Все обращения моментально приходят прямо в ваш Telegram.",
      icon: <SupportIcon />,
      size: "wide",
    },
  ] as const;
  
  export default function About() {
    return (
      <section
       id =  "about"
       className="bg-zinc-900 py-32">
        <div className="mx-auto max-w-6xl px-8">
  
          <h2 className="mb-6 text-5xl font-bold">
            Почему выбирают нас
          </h2>
  
          <p className="mb-16 max-w-3xl text-xl text-zinc-400">
            Мы создаем сайты,
            которые помогают бизнесу получать клиентов.
          </p>
  
          <div className="grid md:auto-rows-[260px] gap-8 md:grid-cols-4">
        
          {advantages.map((item) => (
  <FeatureCard
    key={item.title}
    icon={item.icon}
    title={item.title}
    description={item.description}
    size={item.size}
  />
))}
  
          </div>
  
        </div>
      </section>
    );
  }
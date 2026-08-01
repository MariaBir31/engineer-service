import ChatIcon from "./icons/ChatIcon";
import PencilIcon from "./icons/PencilIcon";
import BrowserIcon from "./icons/BrowserIcon";
import LaunchRocketIcon from "./icons/LaunchRocketIcon";
import { ReactNode } from "react";

type Step = {
    number: string;
    icon: React.ReactNode;
    title: string;
    text: string;
  };

const steps: Step[] = [
    {
      number: "01",
      icon: <ChatIcon />,
      title: "Обсуждение проекта",
      text: "Вы рассказываете о своей задаче, а мы предлагаем оптимальное решение.",
    },
    {
      number: "02",
      icon: <PencilIcon />,
      title: "Дизайн",
      text: "Создаем современный дизайн и согласовываем каждую деталь.",
    },
    {
      number: "03",
      icon: <BrowserIcon />,
      title: "Разработка",
      text: "Верстаем сайт, подключаем формы, Telegram и адаптацию.",
    },
    {
      number: "04",
      icon: <LaunchRocketIcon />,
      title: "Запуск",
      text: "Публикуем сайт и передаем все необходимые доступы.",
    },
  ];
  
  export default function Process() {
    return (
      <section className="bg-zinc-950 py-32">
        <div className="mx-auto max-w-6xl px-8">
        <h2 className="text-center text-5xl font-bold">
            Как мы работаем
          </h2>
  
          <p className="mx-auto mt-6 mb-20 max-w-2xl text-center text-xl text-zinc-400">
            От идеи до запуска — простой и понятный процесс.
          </p>
  
          <div className="space-y-10">
          {steps.map((step) => (
  <div
    key={step.number}
    className="
      group
      flex
      gap-10
      border-b
      border-white/10
      py-10
      transition-all
      duration-300
      hover:border-cyan-400/30
    "
  >
    <span
      className="
        w-24
        shrink-0
        text-7xl
        font-bold
        text-cyan-400/30
      "
    >
      {step.number}
    </span>

    <div className="relative flex-1 pl-8">
      <div className="absolute left-0 top-0 h-full w-px bg-white/10"></div>

      <div className="mb-4 flex items-center gap-3">
        {step.icon}

        <h3
          className="
            text-3xl
            font-semibold
            transition
            group-hover:text-cyan-400
          "
        >
          {step.title}
        </h3>
      </div>

      <p className="max-w-2xl leading-8 text-zinc-400">
        {step.text}
      </p>
    </div>
  </div>
))}
          </div>
        </div>
      </section>
    );
  }
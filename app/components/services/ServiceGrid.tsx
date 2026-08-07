import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "💻",
    title: "Ноутбуки",
    count: 17,
    price: "от 5 000 ₸",
    features: [
      "Диагностика",
      "Чистка",
      "Замена SSD",
      "+14 услуг",
    ],
  },

  {
    icon: "📱",
    title: "Смартфоны",
    count: 13,
    price: "от 5 000 ₸",
    features: [
      "Замена экрана",
      "Замена аккумулятора",
      "Ремонт камеры",
      "+10 услуг",
    ],
  },

  {
    icon: "🖥",
    title: "Компьютеры",
    count: 14,
    price: "от 4 000 ₸",
    features: [
      "Апгрейд",
      "Чистка",
      "Замена комплектующих",
      "+11 услуг",
    ],
  },

  {
    icon: "📺",
    title: "Телевизоры",
    count: 8,
    price: "от 8 000 ₸",
    features: [
      "Подсветка",
      "Матрица",
      "Smart TV",
      "+5 услуг",
    ],
  },

  {
    icon: "🏠",
    title: "Бытовая техника",
    count: 6,
    price: "от 5 000 ₸",
    features: [
      "Холодильники",
      "Стиральные машины",
      "Кондиционеры",
      "+3 услуги",
    ],
  },

  {
    icon: "⚙",
    title: "Дополнительные услуги",
    count: 8,
    price: "от 5 000 ₸",
    features: [
      "Удаление вирусов",
      "Восстановление данных",
      "Настройка ПО",
      "+5 услуг",
    ],
  },
];

export default function ServiceGrid() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
          Наши услуги
        </p>

        <h2 className="mt-5 text-5xl font-bold">
          Ремонт любой техники
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
          Более 60 видов ремонта с гарантией.
          Работаем с ноутбуками, смартфонами,
          компьютерами, телевизорами и бытовой техникой.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </section>
  );
}
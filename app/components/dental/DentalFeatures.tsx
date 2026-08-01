const features = [
    {
      number: "01",
      title: "Современное оборудование",
      text: "Используем цифровую диагностику и оборудование последнего поколения.",
    },
    {
      number: "02",
      title: "Опытные специалисты",
      text: "Врачи с многолетней практикой и регулярным повышением квалификации.",
    },
    {
      number: "03",
      title: "Безболезненное лечение",
      text: "Комфортные процедуры с использованием современных методов анестезии.",
    },
    {
      number: "04",
      title: "Индивидуальный подход",
      text: "Для каждого пациента составляется персональный план лечения.",
    },
  ];
  
  export default function DentalFeatures() {
    return (
      <section className="bg-white py-28">
  
        <div className="mx-auto max-w-7xl px-10">
  
          <p className="uppercase tracking-[6px] text-sky-500">
            WHY US
          </p>
  
          <h2 className="mt-5 max-w-3xl text-6xl font-bold leading-tight text-zinc-900">
            Почему пациенты
            <br />
            выбирают нас
          </h2>
  
          <div className="mt-20 grid gap-8 md:grid-cols-2">
  
            {features.map((item) => (
  
              <div
                key={item.number}
                className="
                  rounded-[32px]
                  border
                  border-zinc-200
                  bg-white
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-sky-300
                  hover:shadow-xl
                "
              >
  
                <p className="text-6xl font-bold text-sky-100">
                  {item.number}
                </p>
  
                <h3 className="mt-8 text-3xl font-bold text-zinc-900">
                  {item.title}
                </h3>
  
                <p className="mt-5 text-lg leading-9 text-zinc-600">
                  {item.text}
                </p>
  
              </div>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
const services = [
    "Лечение зубов",
    "Имплантация",
    "Виниры",
    "Отбеливание",
    "Исправление прикуса",
  ];
  
  export default function DentalServices() {
    return (
      <section className="bg-[#f8fbff] py-28">
  
        <div className="mx-auto max-w-7xl px-10">
  
          <div className="mb-20">
  
            <p className="uppercase tracking-[6px] text-sky-500">
              SERVICES
            </p>
  
            <h2 className="mt-5 text-6xl font-bold text-zinc-900">
              Наши услуги
            </h2>
  
          </div>
  
          <div className="space-y-2">
  
            {services.map((service) => (
  
              <button
                key={service}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-zinc-200
                  py-8
                  text-left
                  transition
                  hover:border-sky-400
                "
              >
  
                <span
                  className="
                    text-3xl
                    font-semibold
                    text-zinc-900
                    transition
                    group-hover:text-sky-500
                  "
                >
                  {service}
                </span>
  
                <span
                  className="
                    text-4xl
                    text-zinc-400
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    group-hover:text-sky-500
                  "
                >
                  →
                </span>
  
              </button>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }
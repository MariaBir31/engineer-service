const menu = [
    {
      name: "Капучино",
      description: "Нежный эспрессо с воздушной молочной пенкой.",
      price: "1800 ₸",
    },
    {
      name: "Латте",
      description: "Классический латте из свежеобжаренных зерен.",
      price: "2100 ₸",
    },
    {
      name: "Фильтр кофе",
      description: "Чистый вкус зерна без лишнего.",
      price: "1600 ₸",
    },
  ];
  
  export default function CoffeeMenu() {
    return (
      <section className="bg-[#fcfaf7] py-28">
        <div className="mx-auto max-w-7xl px-10">
  
          <div className="mb-16 text-center">
  
            <p className="uppercase tracking-[5px] text-[#a37a5d]">
              MENU
            </p>
  
            <h2 className="mt-5 text-5xl font-bold text-[#3d2a21]">
              Наши любимые напитки
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-[#6f5d52]">
              Только свежеобжаренный кофе, качественное молоко
              и внимание к каждой чашке.
            </p>
  
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
  
            {menu.map((item) => (
              <div
                key={item.name}
                className="
                  rounded-[32px]
                  border
                  border-[#efe4d8]
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                "
              >
  
                <div className="mb-8 text-5xl">
                  ☕
                </div>
  
                <h3 className="text-3xl font-bold text-[#3d2a21]">
                  {item.name}
                </h3>
  
                <p className="mt-5 leading-8 text-[#7b685d]">
                  {item.description}
                </p>
  
                <div className="mt-10 flex items-center justify-between">
  
                  <span className="text-2xl font-bold text-[#6f4b36]">
                    {item.price}
                  </span>
  
                  <button
                    className="
                      rounded-full
                      bg-[#6f4b36]
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#593b2a]
                    "
                  >
                    Заказать
                  </button>
  
                </div>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }
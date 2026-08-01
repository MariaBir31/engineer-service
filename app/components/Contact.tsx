"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        message,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      alert("Спасибо! Мы скоро свяжемся с вами.");

      setName("");
      setPhone("");
      setMessage("");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-36"
    >
      {/* Свечение */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* Левая колонка */}

        <div>

          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-400">
            CONTACT
          </p>

          <h2 className="text-6xl font-bold leading-tight">
            Обсудим
            <br />
            ваш проект?
          </h2>

          <p className="mt-8 max-w-lg text-xl leading-9 text-zinc-400">
            Расскажите немного о своей идее.
            Мы предложим лучшее решение,
            ответим на все вопросы и свяжемся с вами в Telegram.
          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-zinc-300">
                Бесплатная консультация
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-zinc-300">
                Обычно отвечаем за 15–30 минут
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-zinc-300">
                Первый концепт уже через несколько дней
              </span>
            </div>

          </div>

        </div>

        {/* Правая колонка */}

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-zinc-900/70
            p-10
            backdrop-blur-xl
            shadow-2xl
            shadow-cyan-500/10
          "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                rounded-2xl
                border
                border-zinc-700
                bg-zinc-950
                p-4
                text-white
                outline-none
                transition
                placeholder:text-zinc-500
                focus:border-cyan-400
              "
            />

            <input
              type="text"
              placeholder="Telegram или телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="
                rounded-2xl
                border
                border-zinc-700
                bg-zinc-950
                p-4
                text-white
                outline-none
                transition
                placeholder:text-zinc-500
                focus:border-cyan-400
              "
            />

            <textarea
              rows={6}
              placeholder="Расскажите немного о проекте..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                resize-none
                rounded-2xl
                border
                border-zinc-700
                bg-zinc-950
                p-4
                text-white
                outline-none
                transition
                placeholder:text-zinc-500
                focus:border-cyan-400
              "
            />

            <button
              type="submit"
              className="
                mt-4
                rounded-2xl
                bg-cyan-400
                py-4
                text-lg
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl
                hover:shadow-cyan-500/20
              "
            >
              Отправить заявку
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
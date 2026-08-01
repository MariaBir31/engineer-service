export default function Footer() {
    return (
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-10 md:flex-row">
  
          <div>
            <h3 className="text-2xl font-bold tracking-[0.2em] text-cyan-400">
              LANDING STUDIO
            </h3>
  
            <p className="mt-3 max-w-sm text-zinc-500">
              Создаем современные сайты,
              которые помогают бизнесу получать клиентов.
            </p>
          </div>
  
          <div className="flex gap-8 text-zinc-400">
  
            <a
              href="https://t.me/landsstudio_bot"
              target="_blank"
              className="transition hover:text-cyan-400"
            >
              Telegram
            </a>
  
            <a
              href="#portfolio"
              className="transition hover:text-cyan-400"
            >
              Проекты
            </a>
  
            <a
              href="#contact"
              className="transition hover:text-cyan-400"
            >
              Контакты
            </a>
  
          </div>
  
        </div>
  
        <div className="border-t border-white/5 py-6 text-center text-sm text-zinc-600">
          © 2026 Landing Studio. All rights reserved.
        </div>
      </footer>
    );
  }
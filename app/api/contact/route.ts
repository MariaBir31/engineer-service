import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, phone, message } = await request.json();

  const text = `
🔥 Новая заявка!

👤 Имя: ${name}

📞 Телефон: ${phone}

💬 Сообщение:
${message}
`;

const telegramResponse = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
      }),
    }
  );
  
  const result = await telegramResponse.json();
  
  console.log(result);

  return NextResponse.json({
    success: true,
  });
}
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, service, budget, details } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram config is missing" },
        { status: 500 }
      );
    }

const message = `
📩 New Webbitis Contact Request

👤 Name: ${name}
📧 Email: ${email}
🛠 Service: ${service}
💰 Budget: ${budget}

📝 Details:
${details}
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { error: "Telegram send failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
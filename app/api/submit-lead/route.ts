import { NextResponse } from "next/server";

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = `
🔥 NEW PARTNER LEAD

Partner:
${body.partnerName}

Partner Email:
${body.partnerEmail}

Service:
${body.service}

Company:
${body.company}

Contact:
${body.contact}

Phone:
${body.phone}

Email:
${body.email}

Website:
${body.website}

Country:
${body.country}

Status:
New

Notes:
${body.notes}
`;

    await sendTelegramMessage(message);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}
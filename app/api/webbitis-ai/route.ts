import { NextResponse } from "next/server";
import OpenAI from "openai";
import { appendLeadToSheet } from "@/lib/googleSheets";
import type { LeadRow } from "@/lib/googleSheets";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const sentLeadSessions = new Map<string, string>();

const SYSTEM_PROMPT = `
You are the Webbitis AI Client Assistant.

Webbitis offers:
- website design and development
- website redesign
- SEO services
- AI integration for business
- workflow automation
- digital invitations

You support Armenian, English and Russian naturally.

Language rules:
- Always reply in the language of the user's latest message.
- If unclear, use the UI language.
- Never mention language detection.

Tone:
- refined
- warm
- concise
- helpful
- confident

Important rules:
- Ask only one focused question at a time.
- If the user provides an email address, treat the preferred contact method as email automatically.
- If the user provides a phone number, treat the preferred contact method as phone automatically.
- If the user provides a Telegram username/handle, treat the preferred contact method as Telegram automatically.
- Do not ask again for the preferred contact method if it is already obvious from the contact details.
- Do not say "our team will reach out" or imply manual team actions.
- If enough details are not yet collected, continue qualifying the project.
- Only say the request has been captured when there is contact info and enough project information to form a useful lead.
- If the user provides invitation details but no contact details, your next step is to ask for:
  - their name
  - preferred contact method
  - contact detail


  - Never ask for contact details before you understand:
  - what service the user needs
  - what kind of business or project they have
  - at least one important goal or requirement

For digital invitation requests, after enough details are present and no contact exists yet, reply exactly in the user's language with one of these:





Armenian:
Պատվերը շարունակելու համար խնդրում եմ գրեք ձեր անունը և կապի նախընտրելի տարբերակը՝ հեռախոս, Telegram կամ email։

Russian:
Чтобы продолжить заказ, пожалуйста, напишите ваше имя и удобный способ связи — телефон, Telegram или email.

English:
To continue your request, please share your name and preferred contact method — phone, Telegram, or email.
`;

const LEAD_ANALYZER_PROMPT = `
You analyze a Webbitis sales chat and return valid JSON only.

{
  "isLead": true,
  "languageCode": "hy",
  "name": "",
  "business": "",
  "requestedService": "",
  "keyNeeds": "",
  "budget": "",
  "timeline": "",
  "contactMethod": "",
  "contactDetails": "",
  "summary": "",
  "confidence": "high",
  "needsContactRequest": false
}

Rules:
- Treat clear business intent as a lead.
- For digital invitations, treat the conversation as a lead if event details are present:
  names, wedding date, venue, church, style, RSVP, colors, design wishes.
- If contactDetails contains an email address, set contactMethod to "email".
- If contactDetails contains a phone number, set contactMethod to "phone".
- If contactDetails contains a Telegram username or Telegram handle, set contactMethod to "Telegram".
- If a user message contains both a name and an email address, extract both.
- Do not mark needsContactRequest=true if usable contact details are already present.
- Set needsContactRequest=true ONLY when:
  - there is clear purchase intent
  - the requested service is already understood
  - at least one project detail is known
  - and contact details are still missing

- Do NOT request contact details too early.
- If the user only expresses a vague goal such as:
  - "I want people to know about me"
  - "I need more clients"
  - "I want something beautiful"
  - "I want my business to grow"
  then continue asking clarifying questions first.
- requestedService should be one of:
  - Digital Invitation
  - New Website
  - Website Redesign
  - SEO
  - AI Assistant / Automation
- confidence must be low, medium, or high.
- languageCode must be hy, en, or ru.
- Return ONLY JSON.
`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type LeadAnalysis = {
  isLead: boolean;
  languageCode: "hy" | "en" | "ru";
  name: string;
  business: string;
  requestedService: string;
  keyNeeds: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  contactDetails: string;
  summary: string;
  confidence: "low" | "medium" | "high";
  needsContactRequest: boolean;
};

async function sendTelegramMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram env vars missing");
    return;
  }

  const response = await fetch(
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

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram error: ${errorText}`);
  }
}

function buildConversationSummary(messages: ChatMessage[]) {
  const userMessages = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content.trim())
    .filter(Boolean);

  return userMessages.slice(-8).join(" | ");
}

function hasEnoughLeadInfo(lead: LeadAnalysis | null, messages: ChatMessage[]) {
  if (!lead) return false;

  const hasContact = Boolean(lead.contactDetails);
  const hasService = Boolean(lead.requestedService);

  const hasNeeds =
    Boolean(lead.keyNeeds && lead.keyNeeds.trim().length > 8) ||
    Boolean(lead.summary && lead.summary.trim().length > 20) ||
    Boolean(lead.timeline) ||
    Boolean(lead.budget);

  const conversationText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content.toLowerCase())
    .join(" ");

  const hasExtraProjectSignals =
    conversationText.includes("seo") ||
    conversationText.includes("speed") ||
    conversationText.includes("website") ||
    conversationText.includes("redesign") ||
    conversationText.includes("webbitis.com") ||
    conversationText.includes("budget") ||
    conversationText.includes("deadline") ||
    conversationText.includes("month") ||
    conversationText.includes("թարմ") ||
    conversationText.includes("դիզայն") ||
    conversationText.includes("արագ") ||
    conversationText.includes("բյուջե") ||
    conversationText.includes("կայք") ||
    conversationText.includes("գալերիա") ||
    conversationText.includes("booking") ||
    conversationText.includes("gallery");

  return hasContact && hasService && (hasNeeds || hasExtraProjectSignals);
}

function buildTelegramLeadText(
  lead: LeadAnalysis,
  messages: ChatMessage[]
) {
  const conversationSummary = buildConversationSummary(messages);

  return [
    `🔥 New / Updated Webbitis Lead`,
    ``,
    `Service: ${lead.requestedService || "-"}`,
    `Name: ${lead.name || "-"}`,
    `Contact method: ${lead.contactMethod || "-"}`,
    `Contact details: ${lead.contactDetails || "-"}`,
    `Timeline: ${lead.timeline || "-"}`,
    `Budget: ${lead.budget || "-"}`,
    ``,
    `Key needs:`,
    `${lead.keyNeeds || "-"}`,
    ``,
    `AI summary:`,
    `${lead.summary || "-"}`,
    ``,
    `Conversation notes:`,
    `${conversationSummary || "-"}`,
  ].join("\n");
}

async function analyzeLead(messages: ChatMessage[]) {
  const transcript = messages
    .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
    .join("\n");

  const result = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    temperature: 0,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: LEAD_ANALYZER_PROMPT,
      },
      {
        role: "user",
        content: transcript,
      },
    ],
  });

  const content = result.choices[0]?.message?.content;
  if (!content) return null;

  try {
    return JSON.parse(content) as LeadAnalysis;
  } catch (error) {
    console.error("Lead JSON parse error:", error, content);
    return null;
  }
}

function extractContactFromMessages(messages: ChatMessage[]) {
  const userText = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content)
    .join("\n");

  const emailMatch = userText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  const phoneMatch = userText.match(/(\+?\d[\d\s\-()]{6,}\d)/);
  const telegramMatch = userText.match(/@\w{5,}/);

  if (emailMatch) {
    return {
      method: "email",
      details: emailMatch[0],
    };
  }

  if (telegramMatch) {
    return {
      method: "Telegram",
      details: telegramMatch[0],
    };
  }

  if (phoneMatch) {
    return {
      method: "phone",
      details: phoneMatch[0],
    };
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages: ChatMessage[] = Array.isArray(body.messages)
      ? body.messages
      : [];

    const sessionId =
      typeof body.sessionId === "string" ? body.sessionId : "";

    const uiLanguage =
      typeof body.uiLanguage === "string" ? body.uiLanguage : "en";

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `${SYSTEM_PROMPT}\nUI language: ${uiLanguage}`,
        },
        ...messages,
      ],
    });

    const assistantReply =
      completion.choices[0]?.message?.content ||
      "Sorry, something went wrong.";

    const updatedMessages: ChatMessage[] = [
      ...messages,
      {
        role: "assistant",
        content: assistantReply,
      },
    ];

    const lead = await analyzeLead(updatedMessages);

    if (lead) {
      const fallbackContact = extractContactFromMessages(updatedMessages);

      if (!lead.contactDetails && fallbackContact?.details) {
        lead.contactDetails = fallbackContact.details;
      }

      if (!lead.contactMethod && fallbackContact?.method) {
        lead.contactMethod = fallbackContact.method;
      }
    }

    let finalReply = assistantReply;
    let leadCaptured = false;

    if (lead?.needsContactRequest && !lead.contactDetails) {
      const contactReplyByLanguage = {
        hy: "Պատվերը շարունակելու համար խնդրում եմ գրեք ձեր անունը և կապի նախընտրելի տարբերակը՝ հեռախոս, Telegram կամ email։",
        ru: "Чтобы продолжить заказ, пожалуйста, напишите ваше имя и удобный способ связи — телефон, Telegram или email.",
        en: "To continue your request, please share your name and preferred contact method — phone, Telegram, or email.",
      };

      finalReply = contactReplyByLanguage[lead.languageCode || "en"];
    }

    const enoughLeadInfo = hasEnoughLeadInfo(lead, updatedMessages);

    if (
      lead?.isLead &&
      enoughLeadInfo &&
      lead.confidence !== "low" &&
      sessionId
    ) {
      const conversationSummary = buildConversationSummary(updatedMessages);

      const currentSignature = JSON.stringify({
        requestedService: lead.requestedService || "",
        keyNeeds: lead.keyNeeds || "",
        summary: lead.summary || "",
        timeline: lead.timeline || "",
        budget: lead.budget || "",
        contactDetails: lead.contactDetails || "",
        conversationSummary,
      });

      const previousSignature = sentLeadSessions.get(sessionId);

      if (previousSignature !== currentSignature) {
        const telegramText = buildTelegramLeadText(lead, updatedMessages);

        try {
          await sendTelegramMessage(telegramText);
        } catch (telegramError) {
          console.error("Telegram send error:", telegramError);
        }

        const row: LeadRow = {
          createdAt: new Date().toISOString(),
          sessionId,
          language: lead.languageCode,
          name: lead.name || "",
          business: lead.business || "",
          requestedService: lead.requestedService || "",
          keyNeeds: lead.keyNeeds || "",
          budget: lead.budget || "",
          timeline: lead.timeline || "",
          contactMethod: lead.contactMethod || "",
          contactDetails: lead.contactDetails || "",
          summary: `${lead.summary || ""} | Notes: ${conversationSummary}`,
        };

        try {
          await appendLeadToSheet(row);
        } catch (sheetError) {
          console.error("Google Sheets error:", sheetError);
        }

        sentLeadSessions.set(sessionId, currentSignature);
        leadCaptured = true;
      }
    }

   

    return NextResponse.json({
      reply: finalReply,
      leadCaptured,
      detectedLanguage: lead?.languageCode || uiLanguage || "en",
    });
  } catch (error) {
    console.error("WEBBITIS AI ROUTE ERROR:", error);

    const message =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        reply: `Server error: ${message}`,
        leadCaptured: false,
        detectedLanguage: "en",
      },
      { status: 500 }
    );
  }
}
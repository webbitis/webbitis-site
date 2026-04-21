"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Globe,
  LayoutTemplate,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Wand2,
  X,
} from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type Language = "hy" | "en" | "ru";

type LocalizedText = {
  hy: string;
  en: string;
  ru: string;
};

type QuickOption = {
  label: LocalizedText;
  value: LocalizedText;
  hint: LocalizedText;
  icon: React.ComponentType<{ className?: string }>;
};

const initialMessages: Record<Language, string> = {
  hy: `Բարի գալուստ Webbitis։

Կօգնեմ հասկանալ, թե ինչ թվային լուծում է ամենահարմարը ձեր բիզնեսի կամ նախագծի համար՝ կայք, SEO, AI օգնական, ավտոմատացում կամ թվային հրավիրատոմս։

Ընտրեք ծառայությունը ստորև կամ գրեք մի քանի բառ ձեր գաղափարի մասին։`,
  en: `Welcome to Webbitis.

I can help you find the right digital solution for your business or project — from websites and SEO to AI assistants, automation, and digital invitations.

Choose a service below or tell me a little about your idea.`,
  ru: `Добро пожаловать в Webbitis.

Я помогу подобрать подходящее цифровое решение для вашего бизнеса или проекта — от сайта и SEO до AI-ассистента, автоматизации и цифрового приглашения.

Выберите услугу ниже или коротко расскажите о вашей задаче.`,
};

const placeholders: Record<Language, string> = {
  hy: "Գրեք մի քանի բառ ձեր նախագծի մասին...",
  en: "Tell me a little about your project...",
  ru: "Расскажите немного о вашем проекте...",
};

const capturedTexts: Record<Language, string> = {
  hy: "Տվյալները պահպանվել են։ Կարող ենք շարունակել։",
  en: "Your details have been saved. We can continue.",
  ru: "Ваши данные сохранены. Можем продолжить.",
};;

const thinkingTexts: Record<Language, string> = {
  hy: "Մտածում եմ...",
  en: "Thinking...",
  ru: "Думаю...",
};

const headerDescriptions: Record<Language, string> = {
  hy: "Օգնում եմ ընտրել այն լուծումը, որը ձեր բիզնեսին ավելի գեղեցիկ, վստահելի և ազդեցիկ ներկայություն կտա։",
  en: "Helping you choose the solution that will make your business look stronger, clearer, and more appealing to clients.",
  ru: "Помогаю выбрать решение, которое сделает ваш бизнес более убедительным, понятным и привлекательным для клиентов.",
};

const buttonLabels: Record<Language, string> = {
  hy: "Սկսել հարցումը",
  en: "Start Your Request",
  ru: "Начать запрос",
};

const footerLeftText: Record<Language, string> = {
  hy: "Webbitis AI Assistant",
  en: "Webbitis AI Assistant",
  ru: "Webbitis AI Assistant",
};

const footerRightText: Record<Language, string> = {
  hy: "Project Guidance",
  en: "Project Guidance",
  ru: "Project Guidance",
};

const quickOptions: QuickOption[] = [
  {
    label: {
      hy: "Նոր կայք",
      en: "New Website",
      ru: "Новый сайт",
    },
    value: {
      hy: "Ինձ պետք է նոր կայք իմ բիզնեսի համար։",
      en: "I need a new website for my business.",
      ru: "Мне нужен новый сайт для моего бизнеса.",
    },
    hint: {
      hy: "Նոր ներկայություն ձեր բիզնեսի համար",
      en: "A new digital presence for your business",
      ru: "Новый цифровой образ для вашего бизнеса",
    },
    icon: Globe,
  },
  {
    label: {
      hy: "Կայքի թարմացում",
      en: "Website Redesign",
      ru: "Редизайн сайта",
    },
    value: {
      hy: "Ուզում եմ թարմացնել իմ գործող կայքը։",
      en: "I want to redesign my existing website.",
      ru: "Я хочу обновить мой существующий сайт.",
    },
    hint: {
      hy: "Ավելի ժամանակակից և ազդեցիկ տեսք",
      en: "A stronger, more modern website",
      ru: "Более современный и сильный сайт",
    },
    icon: LayoutTemplate,
  },
  {
    label: {
      hy: "SEO",
      en: "SEO",
      ru: "SEO",
    },
    value: {
      hy: "Ինձ պետք են SEO ծառայություններ իմ բիզնեսի համար։",
      en: "I need SEO services for my business.",
      ru: "Мне нужны SEO-услуги для бизнеса.",
    },
    hint: {
      hy: "Ավելի լավ տեսանելիություն և աճ",
      en: "Better visibility and growth",
      ru: "Лучшая видимость и рост",
    },
    icon: Sparkles,
  },
  {
    label: {
      hy: "AI օգնական",
      en: "AI Assistant",
      ru: "AI-ассистент",
    },
    value: {
      hy: "Ուզում եմ AI օգնական կամ ավտոմատացում իմ բիզնեսի համար։",
      en: "I want an AI assistant or automation for my business.",
      ru: "Мне нужен AI-ассистент или автоматизация для бизнеса.",
    },
    hint: {
      hy: "Խելացի օգնություն և ավտոմատացում",
      en: "Smart support and automation",
      ru: "Умная помощь и автоматизация",
    },
    icon: Wand2,
  },
  {
    label: {
      hy: "Թվային հրավիրատոմս",
      en: "Digital Invitation",
      ru: "Цифровое приглашение",
    },
    value: {
      hy: "Ինձ պետք է թվային հրավիրատոմս միջոցառման կամ հարսանիքի համար։",
      en: "I need a digital invitation for an event or wedding.",
      ru: "Мне нужно цифровое приглашение для мероприятия или свадьбы.",
    },
    hint: {
      hy: "Զգացմունքային և հիշվող հրավիրատոմսեր",
      en: "Elegant invitations for meaningful events",
      ru: "Элегантные приглашения для особенных событий",
    },
    icon: Mail,
  },
];
const neonGradient =
  "[background:linear-gradient(135deg,#9f1570_0%,#d21887_45%,#ff4db3_100%)]";
function createSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `wb-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export default function WebbitisAIChat() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: initialMessages.en },
  ]);

  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existing = window.localStorage.getItem("webbitis_ai_session_id");

    if (existing) {
      setSessionId(existing);
      return;
    }

    const nextId = createSessionId();
    window.localStorage.setItem("webbitis_ai_session_id", nextId);
    setSessionId(nextId);
  }, []);

  useEffect(() => {
    if (!open) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading, open]);

  const canShowQuickOptions = useMemo(() => messages.length === 1, [messages.length]);

  function switchLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setMessages([{ role: "assistant", content: initialMessages[nextLanguage] }]);
    setLeadCaptured(false);
    setInput("");
  }

  async function sendUserMessage(content: string) {
    const trimmed = content.trim();

    if (!trimmed || loading || !sessionId) return;

    const updatedMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/webbitis-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          uiLanguage: language,
          messages: updatedMessages,
        }),
      });

      const data = await res.json();

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            data.reply ||
            (language === "hy"
              ? "Ներողություն, ինչ-որ բան սխալ գնաց։"
              : language === "ru"
                ? "Извините, что-то пошло не так."
                : "Sorry, something went wrong."),
        },
      ]);

      if (data.detectedLanguage && ["hy", "en", "ru"].includes(data.detectedLanguage)) {
        setLanguage(data.detectedLanguage as Language);
      }

      if (data.leadCaptured) {
        setLeadCaptured(true);
      }
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            language === "hy"
              ? "Ներողություն, հիմա չկարողացա պատասխանել։ Խնդրում եմ փորձեք քիչ անց։"
              : language === "ru"
                ? "Извините, сейчас не удалось ответить. Попробуйте чуть позже."
                : "Sorry, I couldn’t respond right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function handleSend() {
    if (!input.trim()) return;
    const current = input;
    setInput("");
    await sendUserMessage(current);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
         className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 border border-[#f1bfdc]/30 px-4 py-3 text-sm font-medium text-white shadow-[0_18px_50px_rgba(0,0,0,0.38)] transition hover:scale-[1.04] hover:border-[#ffd0ea]/50 hover:shadow-[0_0_24px_rgba(255,77,179,0.45)] ${neonGradient}`}
          aria-label="Open Webbitis AI"
        >
          <MessageCircle className="h-4 w-4" />
          {buttonLabels[language]}
        </button>
      )}

      {open && (
        <div className="fixed bottom-3 right-3 z-50 flex h-[82vh] w-[calc(100vw-24px)] max-w-[390px] flex-col overflow-hidden border border-[#d8c39a]/18 bg-[#071327] shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:bottom-5 sm:right-5 sm:h-[620px] sm:w-[390px]">
          <div className="relative border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,195,154,0.10),transparent_55%)]" />

            <div className="relative flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                 <div className={`flex h-9 w-9 items-center justify-center border border-[#f1bfdc]/30 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] ${neonGradient}`}>
  <Sparkles className="h-4 w-4 text-white" />
</div>

                  <div>
                    <div className="text-sm font-semibold tracking-wide text-white">
                      Webbitis AI
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#d8c39a]">
                      Client Assistant
                    </div>
                  </div>
                </div>

                <p className="mt-3 max-w-[270px] text-xs leading-5 text-white/60">
                  {headerDescriptions[language]}
                </p>

                <div className="mt-3 flex gap-2">
                  {(["hy", "en", "ru"] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLanguage(lang)}
                      className={`px-2 py-1 text-[11px] uppercase tracking-[0.2em] transition ${
                        language === lang
                          ? "bg-[linear-gradient(180deg,#dccaa3_0%,#cdb382_100%)] text-[#071327] shadow-[0_8px_18px_rgba(0,0,0,0.18)]"
                          : "border border-white/10 bg-white/[0.02] text-white/60 hover:border-[#d8c39a]/25 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-white/50 transition hover:text-white"
                aria-label="Close Webbitis AI"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto px-3 py-4"
          >
            {canShowQuickOptions && (
              <div className="mb-5 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {quickOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                      <button
                        key={option.label.en}
                        onClick={() => sendUserMessage(option.value[language])}
                        className="group border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-3 text-left transition hover:border-[#d8c39a]/35 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))]"
                      >
                        <div className="mb-3 flex h-9 w-9 items-center justify-center border border-white/10 bg-[linear-gradient(180deg,#112448_0%,#0d1d3c_100%)] transition group-hover:border-[#d8c39a]/30">
                          <Icon className="h-4 w-4 text-[#d8c39a]" />
                        </div>

                        <div className="text-sm font-medium text-white">
                          {option.label[language]}
                        </div>

                        <div className="mt-1 text-[11px] leading-5 text-white/50">
                          {option.hint[language]}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={`${msg.role}-${index}`}
                  className={`max-w-[88%] px-4 py-3 text-sm leading-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${
                    msg.role === "assistant"
  ? "mr-auto border border-white/10 bg-white/[0.04] text-white"
  : `ml-auto border border-[#f1bfdc]/20 text-white ${neonGradient}`
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              ))}

              {loading && (
                <div className="mr-auto flex max-w-[88%] items-center gap-2 border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d8c39a]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d8c39a] [animation-delay:0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d8c39a] [animation-delay:0.3s]" />
                  </div>
                  {thinkingTexts[language]}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-white/10 bg-[#0b1b36] p-3">
            {leadCaptured && (
              <div className="mb-3 border border-[#d8c39a]/20 bg-[linear-gradient(135deg,rgba(216,195,154,0.10),rgba(216,195,154,0.04))] px-3 py-2 text-xs leading-5 text-[#f3e5c3]">
                {capturedTexts[language]}
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholders[language]}
                className="h-12 flex-1 border border-white/10 bg-[#12264a] px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#d8c39a]/40"
              />

             <button
  onClick={handleSend}
  disabled={loading || !sessionId}
  className={`flex h-12 w-12 items-center justify-center border border-[#f1bfdc]/30 text-white shadow-[0_14px_30px_rgba(0,0,0,0.32)] transition hover:scale-[1.05] hover:border-[#ffd0ea]/50 hover:shadow-[0_0_24px_rgba(255,77,179,0.45)] disabled:opacity-60 ${neonGradient}`}
  aria-label="Send message"
>
  <Send className="h-4 w-4" />
</button>
            </div>

            <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/35">
              <span>{footerLeftText[language]}</span>
              <span>{footerRightText[language]}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
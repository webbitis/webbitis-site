import PartnerNav from "../components/PartnerNav";
const priceSections = [
  {
    title: "Կայքերի տեսակներ",
    items: [
      {
        service: "Landing Page",
        includes:
          "1 լեզու, 1 էջ, մինչև 10 բլոկ, responsive design, contact form, basic SEO, analytics",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ WordPress / Next.js",
        price: "250,000–900,000 դրամ",
        pitch:
          "Հարմար է մեկ ծառայություն, պրոդուկտ կամ գովազդային առաջարկ ներկայացնելու և լիդեր հավաքելու համար։",
        explain:
          "Գինը կախված է դիզայնի բարդությունից, անիմացիաներից, ֆորմաներից և տեխնոլոգիայից։ WordPress տարբերակը ավելի մատչելի է, Next.js տարբերակը՝ ավելի premium և արագ։",
      },
      {
        service: "Business Website",
        includes:
          "1 լեզու, մինչև 7 էջ, Home, About, Services, Portfolio/Gallery, Blog/News, Contact, admin panel, forms, basic SEO",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ WordPress / Next.js / Laravel",
        price: "450,000–1,800,000 դրամ",
        pitch:
          "Հարմար է բիզնեսի համար, որը ուզում է վստահելի ներկայություն ունենալ, ներկայացնել ծառայությունները և ստանալ հարցումներ կայքից։",
        explain:
          "Հաճախորդը վճարում է կայքի կառուցվածքի, դիզայնի, էջերի պատրաստման, mobile տարբերակի, admin panel-ի, ֆորմաների, SEO հիմքերի և հրապարակման համար։",
      },
      {
        service: "Multilingual Business Website",
        includes:
          "2–3 լեզու, մինչև 12 էջ, multilingual menu, SEO structure, blog/news, gallery, forms, admin panel",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ WordPress / Next.js / Laravel",
        price: "750,000–2,500,000 դրամ",
        pitch:
          "Հարմար է ընկերությունների համար, որոնք աշխատում են հայերեն, ռուսերեն, անգլերեն կամ միջազգային հաճախորդների հետ։",
        explain:
          "Գինը ներառում է բազմալեզու կառուցվածք, լեզուների կառավարում, էջերի կրկնօրինակում/կազմակերպում, SEO-ready URL-ներ և տարբեր լեզուներով բովանդակության տեղադրում։",
      },
      {
        service: "Corporate Website",
        includes:
          "2–3 լեզու, մինչև 25 էջ, company profile, services, projects, team, careers, blog/news, advanced forms, SEO structure, analytics",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ Next.js / Laravel / WordPress Custom",
        price: "1,500,000–5,000,000 դրամ",
        pitch:
          "Հարմար է միջին և խոշոր ընկերությունների համար, որոնց կայքը պետք է ներկայացնի բրենդը, վստահություն ստեղծի և աշխատի որպես բիզնես գործիք։",
        explain:
          "Հաճախորդը վճարում է ավելի խոր կառուցվածքի, custom դիզայնի, մեծ քանակի էջերի, SEO architecture-ի, performance-ի, ֆորմաների և հանձնումից հետո կառավարման հնարավորության համար։",
      },
      {
        service: "Website Redesign",
        includes:
          "Գոյություն ունեցող կայքի audit, նոր դիզայն, mobile fixes, էջերի վերադասավորում, speed basics, SEO fixes",
        technologies: "Կախված է գործող կայքից՝ WordPress / Next.js / PHP / Laravel",
        price: "300,000–2,000,000 դրամ",
        pitch:
          "Հարմար է բիզնեսների համար, որոնք արդեն կայք ունեն, բայց այն հին տեսք ունի, դանդաղ է կամ չի բերում վստահություն և հարցումներ։",
        explain:
          "Գինը կախված է նրանից՝ միայն visual refresh է պետք, թե ամբողջական UX/UI redesign, բովանդակության վերակառուցում, տեխնիկական ուղղումներ և SEO բարելավում։",
      },
      {
        service: "Online Store",
        includes:
          "1–2 լեզու, ապրանքների կատալոգ, categories, search, filters, cart, checkout, order management, admin panel, mobile version",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ WooCommerce / Next.js + Node.js / Laravel",
        price: "900,000–7,000,000 դրամ",
        pitch:
          "Հարմար է բիզնեսների համար, որոնք ուզում են վաճառել ապրանքներ օնլայն՝ պարզ խանութից մինչև custom e-commerce համակարգ։",
        explain:
          "Գինը կախված է ապրանքների քանակից, ֆիլտրերից, վճարային համակարգերից, առաքման logic-ից, admin panel-ից և custom ֆունկցիաներից։",
      },
      {
        service: "Catalog Website",
        includes:
          "Ապրանքների կամ ծառայությունների կատալոգ, categories, filters, search, item detail pages, admin panel",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ WordPress / Next.js + Node.js / Laravel",
        price: "1,200,000–4,000,000 դրամ",
        pitch:
          "Հարմար է ընկերությունների համար, որոնք չեն վաճառում օնլայն, բայց ունեն շատ ապրանքներ կամ ծառայություններ, որոնք պետք է հստակ ներկայացնել։",
        explain:
          "Հաճախորդը վճարում է կատալոգի կառուցվածքի, որոնման, ֆիլտրերի, ապրանքների/ծառայությունների էջերի և admin panel-ից տվյալների կառավարման համար։",
      },
      {
        service: "Booking Website",
        includes:
          "Online booking, calendar, availability, client form, notifications, admin panel, service pages",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ Next.js + Node.js / Laravel / WordPress Booking",
        price: "1,500,000–4,500,000 դրամ",
        pitch:
          "Հարմար է կլինիկաների, գեղեցկության սրահների, հյուրանոցների, տուրիզմի և դասընթացների համար, որտեղ պետք է ամրագրումներ ընդունել։",
        explain:
          "Գինը կախված է calendar logic-ից, ծառայությունների քանակից, աշխատակիցների/սենյակների հասանելիությունից, notification-ներից և admin panel-ից։",
      },
      {
        service: "Custom Web Platform",
        includes:
          "Dashboard, user roles, database, admin panel, reports, API integrations, security, custom workflows",
        technologies: "Հնարավոր տեխնոլոգիաներ՝ Next.js + Node.js / Laravel / PostgreSQL / MySQL / MongoDB",
        price: "3,000,000 դրամից",
        pitch:
          "Հարմար է այն դեպքերում, երբ բիզնեսին պետք է ոչ թե սովորական կայք, այլ սեփական համակարգ՝ CRM, dashboard, internal tool կամ SaaS։",
        explain:
          "Հաճախորդը վճարում է ամբողջական համակարգի նախագծման, UI/UX-ի, frontend-ի, backend-ի, database-ի, role management-ի, security-ի, integrations-ի և testing-ի համար։",
      },
    ],
  },
  {
    title: "AI և Automation",
    items: [
      {
        service: "Webi AI Starter",
        includes:
          "AI chat, FAQ answers, lead collection, Telegram notification, website integration",
        technologies: "OpenAI / Claude / Gemini / Custom Prompting",
        price: "120,000–250,000 դրամ",
        pitch:
          "Հարմար է բիզնեսների համար, որոնք ուզում են կայքում ունենալ 24/7 օգնական՝ հիմնական հարցերին պատասխանելու և լիդեր հավաքելու համար։",
        explain:
          "Գինը ներառում է chatbot setup, հարցերի տրամաբանություն, lead form, Telegram notification և կայքում տեղադրում։",
      },
      {
        service: "Webi AI Business",
        includes:
          "Custom knowledge base, lead qualification, email/Telegram notification, conversation summary",
        technologies: "OpenAI / Claude / Gemini / RAG basics / Google Sheets",
        price: "250,000–600,000 դրամ",
        pitch:
          "Հարմար է բիզնեսների համար, որոնք ուզում են, որ AI-ն ոչ միայն պատասխանի, այլ նաև ֆիլտրի և որակավորի պոտենցիալ հաճախորդներին։",
        explain:
          "Հաճախորդը վճարում է knowledge base-ի պատրաստման, AI logic-ի, qualifying questions-ի, lead summary-ի և notification համակարգի համար։",
      },
      {
        service: "Webi AI Advanced",
        includes:
          "AI assistant, CRM/Sheets integration, workflows, lead routing, multi-step automation",
        technologies: "OpenAI / Claude / Gemini / LangChain / RAG / n8n / Make / API",
        price: "600,000–1,500,000 դրամ",
        pitch:
          "Հարմար է այն բիզնեսների համար, որոնք ուզում են AI-ից ստացված լիդերը ավտոմատ մտնեն CRM, Sheets կամ ներքին աշխատանքային flow։",
        explain:
          "Գինը ներառում է AI assistant, տվյալների մշակման logic, CRM կամ Google Sheets ինտեգրացիա, workflow automation, testing և support։",
      },
      {
        service: "Business Automation",
        includes:
          "Telegram, Email, Google Sheets, CRM workflows, notifications, API integrations",
        technologies: "n8n / Make / Zapier / Custom Node.js / APIs",
        price: "250,000 դրամից",
        pitch:
          "Հարմար է բիզնեսների համար, որտեղ կրկնվող աշխատանքները շատ են և կարելի է դրանք ավտոմատացնել։",
        explain:
          "Հաճախորդը վճարում է գործընթացի վերլուծության, automation flow-ի կառուցման, API ինտեգրացիաների, notification-ների և թեստավորման համար։",
      },
    ],
  },
  {
    title: "Հավելյալ ծառայություններ",
    items: [
      {
        service: "Լրացուցիչ լեզու",
        includes: "Կայքի լրացուցիչ լեզվային տարբերակ",
        technologies: "Կախված կայքի տեխնոլոգիայից",
        price: "+20–30%",
        pitch:
          "Հարմար է բիզնեսների համար, որոնք աշխատում են տարբեր լեզուներով հաճախորդների հետ։",
        explain:
          "Գինը ներառում է լեզվային կառուցվածքի ավելացում, մենյուներ, URL-ներ և բովանդակության տեղադրում։",
      },
      {
        service: "Payment Integration",
        includes:
          "Idram, Telcell, Stripe, PayPal կամ այլ վճարային համակարգ",
        technologies: "Payment APIs / WooCommerce / Custom Backend",
        price: "200,000–500,000 դրամ",
        pitch:
          "Հարմար է օնլայն խանութների կամ վճարովի ծառայությունների համար։",
        explain:
          "Գինը ներառում է վճարային համակարգի ինտեգրացիա, checkout-ի կարգավորում, callback logic և թեստավորում։",
      },
      {
        service: "Speed Optimization",
        includes:
          "Performance audit, image optimization, caching, code cleanup, Core Web Vitals fixes",
        technologies: "Կախված կայքից՝ WordPress / Next.js / Custom",
        price: "120,000–400,000 դրամ",
        pitch:
          "Հարմար է դանդաղ կայքերի համար, որոնք վատ են աշխատում mobile-ում կամ կորցնում են օգտատերերին։",
        explain:
          "Գինը ներառում է արագության վերլուծություն, ծանր ֆայլերի օպտիմիզացիա, caching և տեխնիկական ուղղումներ։",
      },
      {
        service: "Monthly Maintenance",
        includes:
          "Updates, backup, monitoring, small fixes, support",
        technologies: "Կախված կայքի տեխնոլոգիայից",
        price: "50,000–200,000 դրամ/ամիս",
        pitch:
          "Հարմար է բիզնեսների համար, որոնք ուզում են կայքը միշտ աշխատող, անվտանգ և թարմ պահել։",
        explain:
          "Գինը ներառում է տեխնիկական support, փոքր փոփոխություններ, backup, updates և monitoring։",
      },
    ],
  },
];

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-[#071327] px-6 pt-32 pb-24 text-white">
           <PartnerNav />
      <section className="mx-auto max-w-7xl">
        <div className="mb-14">
          <span className="rounded-full border border-[#E86AC6]/30 bg-[#E86AC6]/10 px-4 py-2 text-sm text-[#E86AC6]">
            Webbitis Price List
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Ծառայությունների մանրամասն գնացուցակ
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            Յուրաքանչյուր ծառայության համար նշված է՝ ինչ է մտնում աշխատանքի մեջ,
            ինչ արժեք է ներկայացնում հաճախորդին և ինչի համար է վճարվում գումարը։
          </p>
        </div>

        <div className="space-y-10">
          {priceSections.map((section) => (
            <section
              key={section.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur"
            >
              <div className="border-b border-white/10 bg-white/[0.03] px-6 py-5 md:px-8">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>

              <div className="divide-y divide-white/10">
                {section.items.map((item) => (
                  <div key={item.service} className="px-6 py-7 md:px-8">
                    <div className="grid gap-5 md:grid-cols-[1fr_1.7fr_0.8fr] md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.service}
                        </h3>
                      </div>

                      <p className="leading-7 text-white/65">
                        {item.includes}
                      </p>

                      <div className="md:text-right">
                        <span className="inline-flex rounded-full border border-[#E86AC6]/30 bg-[#E86AC6]/10 px-4 py-2 text-sm font-medium text-[#E86AC6]">
                          {item.price}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm font-semibold text-[#E86AC6]">
                          Ինչ ներկայացնել հաճախորդին
                        </p>
                        <p className="mt-3 leading-7 text-white/70">
                          {item.pitch}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                        <p className="text-sm font-semibold text-[#E86AC6]">
                          Ինչի համար է վճարում
                        </p>
                        <p className="mt-3 leading-7 text-white/70">
                          {item.explain}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
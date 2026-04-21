import Link from "next/link";


export const metadata = {
  title: "Workflow Automation for Business | Webbitis",
  description:
    "Workflow automation and internal business systems for companies in Armenia, Canada and the USA. Save time and improve efficiency with Webbitis.",
  keywords: [
    "workflow automation",
    "business automation",
    "automation for business",
    "internal systems",
    "AI automation",
    "բիզնես ավտոմատացում",
    "workflow automation Armenia",
    "Webbitis",
  ],
};

const includedItems = [
  "Analysis of your current workflow and repetitive tasks",
  "Automation strategy for your business processes",
  "Connection between website, forms, email, CRM, and internal tools",
  "Automated notifications and lead management",
  "Process automation for requests, orders, and communication",
  "Internal workflow optimization",
  "AI-assisted and smart process integration",
  "Custom automation setup based on your business needs",
];

const benefits = [
  "Less manual work",
  "Faster and more organized processes",
  "Better lead and client management",
  "More efficient communication",
  "Reduced risk of mistakes",
  "More time for business growth",
];

const steps = [
  {
    title: "Discovery",
    text: "We analyze how your current business works, what takes too much time, and where the biggest inefficiencies exist.",
  },
  {
    title: "Planning",
    text: "We define which parts of the workflow can be automated and how the process should work more efficiently.",
  },
  {
    title: "Implementation",
    text: "We connect the necessary tools, forms, systems, and notifications to create a smoother automated process.",
  },
  {
    title: "Optimization",
    text: "We refine the automation, improve the workflow, and make sure everything works clearly and reliably.",
  },
];

const faqItems = [
  {
    q: "What is workflow automation?",
    a: "Workflow automation means reducing manual work by creating automatic processes for tasks, requests, communication, and business operations.",
  },
  {
    q: "What kind of business can use workflow automation?",
    a: "Workflow automation is useful for clinics, beauty businesses, construction companies, agencies, service providers, online stores, and any business with repetitive processes.",
  },
  {
    q: "Can workflow automation save time?",
    a: "Yes. It can reduce repetitive work, improve organization, speed up responses, and help businesses spend less time on manual tasks.",
  },
  {
    q: "Can you connect automation with my website or CRM?",
    a: "Yes. We can connect website forms, emails, CRM systems, internal tools, lead requests, notifications, and other business processes into one smoother system.",
  },
];

const relatedServices = [
  {
    title: "AI Integration",
    text: "Smarter tools and AI-powered features for modern businesses.",
    href: "/webbitis/services/ai-integration",
    image: "/images/webbitis/ai.webp",
  },
  {
    title: "Web Design & Development",
    text: "Professional websites that work together with your internal systems.",
    href: "/webbitis/services/web-design",
    image: "/images/webbitis/develop.webp",
  },
  {
    title: "SEO Services",
    text: "Stronger website structure and better online visibility.",
    href: "/webbitis/services/seo",
    image: "/images/webbitis/seo.webp",
  },
];

export default function WorkflowAutomationPage() {
  return (
    <main className="min-h-screen bg-[#0b0f16] text-white">
      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#0d1220_0%,#0b0f16_100%)]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36 lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d9b6cb]">
              <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
              Workflow Automation
            </span>

            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
              Workflow automation for businesses that need smarter processes.
            </h1>

            <p className="mt-6 max-w-[760px] text-[1.02rem] leading-8 text-white/66">
              Webbitis helps businesses automate repetitive work, improve
              organization, and create more efficient internal processes. We
              connect websites, forms, CRM systems, notifications, and other
              business tools into one smarter workflow that saves time and
              reduces manual effort.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/webbitis#contact"
                className="inline-flex min-h-[54px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                Start a Project
              </Link>

              <Link
                href="/webbitis/services"
                className="inline-flex min-h-[54px] items-center justify-center border border-white/10 px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/72 transition duration-300 hover:border-white/20 hover:text-white"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="overflow-hidden border border-white/8 bg-white/[0.03]">
            <div
              className="h-full min-h-[320px] bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/webbitis/automation.webp')",
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="border border-white/8 bg-white/[0.03] p-6 lg:p-8">
            <h2 className="text-[1.5rem] font-semibold text-white">
              What’s included
            </h2>

            <div className="mt-6 space-y-4">
              {includedItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/66">
                  <span className="mt-[9px] h-2 w-2 rounded-full bg-[#e86ac6]" />
                  <p className="leading-8">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/8 bg-white/[0.03] p-6 lg:p-8">
            <h2 className="text-[1.5rem] font-semibold text-white">
              Who it’s for
            </h2>

            <p className="mt-6 leading-8 text-white/66">
              This service is ideal for businesses that spend too much time on
              manual tasks, messages, spreadsheets, repeated communication, or
              disconnected systems. It is especially useful for agencies,
              clinics, beauty businesses, construction companies, real estate
              companies, online stores, and service providers.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Businesses with repetitive tasks",
                "Companies using forms and CRM systems",
                "Service providers and agencies",
                "Businesses ready for automation",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-white/8 bg-[#0f1420] px-4 py-4 text-sm text-white/68"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <div className="border border-white/8 bg-[linear-gradient(135deg,#141926_0%,#0d1119_100%)] p-6 lg:p-8">
            <h2 className="text-[1.5rem] font-semibold text-white">
              Business benefits
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <h2 className="text-[1.8rem] font-semibold text-white">
            How we work
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="border border-white/8 bg-white/[0.03] p-6"
              >
                <div className="text-[12px] uppercase tracking-[0.18em] text-[#f1bfdc]">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-[1.2rem] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-white/62">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <h2 className="text-[1.8rem] font-semibold text-white">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 divide-y divide-white/8 border border-white/8 bg-white/[0.03]">
            {faqItems.map((item) => (
              <div key={item.q} className="px-6 py-6">
                <h3 className="text-[1.05rem] font-medium text-white">
                  {item.q}
                </h3>
                <p className="mt-3 max-w-[900px] leading-8 text-white/62">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d9b6cb]">
                <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
                More Services
              </span>

              <h2 className="mt-5 text-[2rem] font-semibold text-white lg:text-[2.4rem]">
                Explore Other Webbitis Services
              </h2>
            </div>

            <p className="max-w-[520px] text-[0.98rem] leading-8 text-white/60">
              Webbitis offers more than workflow automation. We create websites,
              SEO, AI integrations, and premium digital systems for businesses
              that want to work smarter and grow faster.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden border border-white/8 bg-[#0d121c] transition duration-500 hover:-translate-y-1 hover:border-[rgba(232,106,198,0.22)]"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,15,0.10)_0%,rgba(7,9,15,0.32)_42%,rgba(7,9,15,0.94)_100%)]" />
                </div>

                <div className="p-6">
                  <h3 className="text-[1.15rem] font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <div className="border border-[rgba(232,106,198,0.16)] bg-[linear-gradient(135deg,rgba(122,29,99,0.16)_0%,rgba(13,17,25,1)_100%)] p-6 lg:p-8">
            <h2 className="text-[1.6rem] font-semibold text-white">
              Ready to make your business work smarter?
            </h2>

            <p className="mt-5 max-w-[760px] leading-8 text-white/66">
              Let’s automate the repetitive parts of your business and create a
              more efficient workflow that saves time, improves organization,
              and supports growth.
            </p>

            <Link
              href="/webbitis#contact"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
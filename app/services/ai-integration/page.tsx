
export const metadata = {
  title: "AI Integration for Business | Webbitis",
  description:
    "AI integration, smart assistants, automated content, lead capture and business process automation for companies in Armenia, Canada and the USA.",
  keywords: [
    "AI integration",
    "AI for business",
    "business AI tools",
    "AI integration Armenia",
    "workflow automation",
    "AI ինտեգրում",
    "AI բիզնեսի համար",
    "Webbitis",
  ],
};

const includedItems = [
  "AI chat assistants for websites and customer questions",
  "Smart lead capture and qualification forms",
  "Automatic content generation for pages and products",
  "AI-powered FAQ and support systems",
  "Personalized user experience and recommendations",
  "Integration with business tools and workflows",
];

const benefits = [
  "Faster response time for customers",
  "More leads and better lead quality",
  "Less manual work for your team",
  "Smarter and more modern user experience",
  "Stronger business image and innovation",
  "More efficient internal processes",
];

const steps = [
  {
    title: "Discovery",
    text: "We learn about your business, audience, goals, and what the website or solution needs to achieve.",
  },
  {
    title: "Structure",
    text: "We define the page flow, content logic, and the sections needed for trust, clarity, and conversion.",
  },
  {
    title: "Design & Build",
    text: "We create the visual direction and develop the final experience with modern, responsive implementation.",
  },
  {
    title: "Launch & Refine",
    text: "We review, improve, and prepare the final version for launch with a polished and reliable result.",
  },
];

const relatedServices = [
  {
    title: "Web Design & Development",
    text: "Premium websites with strong structure and modern execution.",
    href: "/webbitis/services/web-design",
    image: "/images/webbitis/develop.webp",
  },
  {
    title: "SEO Services",
    text: "Better visibility, stronger page structure, and improved discoverability.",
    href: "/webbitis/services/seo",
    image: "/images/webbitis/seo.webp",
  },
  {
    title: "Workflow Automation",
    text: "Smarter internal systems that reduce manual work.",
    href: "/webbitis/services/workflow-automation",
    image: "/images/webbitis/automation.webp",
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#0b0f16] text-white">
      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#0d1220_0%,#0b0f16_100%)]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36 lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d9b6cb]">
              <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
              AI Integration for Business
            </span>

            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.4rem,4.8vw,4.6rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
  AI features that make your website and business work smarter.
</h1>

<p className="mt-6 max-w-[760px] text-[1.04rem] leading-8 text-white/68">
  We integrate practical AI features into websites and business systems —
  from smart chat assistants and automated lead capture to internal tools,
  content generation, and more useful customer experiences.
</p>
          </div>

          <div className="overflow-hidden border border-white/8 bg-white/[0.03]">
            <div
              className="h-full min-h-[280px] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/webbitis/ai.webp')" }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <div className="border border-white/8 bg-white/[0.03] p-6 lg:p-8">
            <h2 className="text-[1.5rem] font-semibold text-white">
              What’s included
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {includedItems.map((item) => (
                <div key={item} className="border border-white/8 bg-[#0f1420] px-5 py-5 text-white/68">
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
              This service is for businesses that already offer quality work but
              want their website, internal tools, or user experience to become
              smarter, more useful, and more effective through practical AI
              features.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Beauty clinics & premium brands",
  "Construction & real estate companies",
  "Businesses that receive many inquiries",
  "Companies that want automation and AI tools",
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

      <section className="border-t border-white/8 py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <h2 className="text-[1.8rem] font-semibold text-white">
            Explore Other Services
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((item) => (
              <a
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <div className="border border-[rgba(232,106,198,0.16)] bg-[linear-gradient(135deg,rgba(122,29,99,0.16)_0%,rgba(13,17,25,1)_100%)] p-6 lg:p-8">
            <h2 className="text-[1.6rem] font-semibold text-white">
              Ready to add smarter features to your business?
            </h2>

            <p className="mt-5 max-w-[760px] leading-8 text-white/66">
              Let’s create a more intelligent, modern, and effective digital experience that helps your business save time, look more valuable, and perform better.
            </p>

            <a
              href="/webbitis#contact"
              className="mt-8 inline-flex min-h-[52px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
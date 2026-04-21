import Link from "next/link";



export const metadata = {
  title: "Premium Web Design Armenia, Canada & USA | Webbitis",
  description:
    "Webbitis creates premium business websites and luxury web design for companies in Armenia, Canada and the USA.",
  keywords: [
    "web design Armenia",
    "web design Canada",
    "web design USA",
    "premium web design",
    "luxury website design",
    "կայքերի պատրաստում",
    "վեբ դիզայն",
    "business website Armenia",
  ],
};


const includedItems = [
  "Full visual refresh of your current website",
  "Improved homepage and internal page structure",
  "Modern and premium design direction",
  "Responsive redesign for mobile and desktop",
  "Clearer content flow and stronger trust sections",
  "Better calls to action and user journey",
  "SEO-friendly page structure improvements",
  "Refined presentation aligned with your business image",
];

const benefits = [
  "A more modern digital image",
  "Stronger trust and credibility",
  "Better first impression",
  "Clearer content and structure",
  "Improved user experience",
  "More effective business presentation",
];

const steps = [
  {
    title: "Audit",
    text: "We review your current website, identify weak points, and understand what makes it feel outdated or ineffective.",
  },
  {
    title: "Strategy",
    text: "We define the structure, priorities, and visual direction needed for a stronger and more modern website.",
  },
  {
    title: "Redesign",
    text: "We redesign the page flow, visual presentation, and content structure to create a cleaner and more premium result.",
  },
  {
    title: "Refinement",
    text: "We review the final result, improve the details, and prepare the redesigned website for launch.",
  },
];

const faqItems = [
  {
    q: "What is website redesign?",
    a: "Website redesign means improving the structure, appearance, and user experience of an existing website so it feels more modern, professional, and effective.",
  },
  {
    q: "Can you redesign an old website without losing its main purpose?",
    a: "Yes. The goal is not to change the business identity, but to present it more clearly, beautifully, and effectively online.",
  },
  {
    q: "Is website redesign useful if my business is already good?",
    a: "Yes. Many good businesses still have outdated websites that no longer reflect their real quality. A redesign helps the digital image match the business itself.",
  },
  {
    q: "Will the redesigned website be mobile-friendly?",
    a: "Yes. Every redesign is created to work smoothly on mobile, tablet, and desktop devices.",
  },
];

const relatedServices = [
  {
    title: "Web Design & Development",
    text: "Premium websites built from structure to final implementation.",
    href: "/webbitis/services/web-design",
    image: "/images/webbitis/develop.webp",
  },
  {
    title: "SEO Services",
    text: "Stronger visibility and better search-ready page structure.",
    href: "/webbitis/services/seo",
    image: "/images/webbitis/seo.webp",
  },
  {
    title: "AI Integration",
    text: "Useful AI-powered features for more modern digital experiences.",
    href: "/webbitis/services/ai-integration",
    image: "/images/webbitis/ai.webp",
  },
];

export default function WebsiteRedesignPage() {
  return (
    <main className="min-h-screen bg-[#0b0f16] text-white">
      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#0d1220_0%,#0b0f16_100%)]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36 lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d9b6cb]">
              <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
              Website Redesign
            </span>

            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
              Website redesign for brands that need a sharper digital image.
            </h1>

            <p className="mt-6 max-w-[760px] text-[1.02rem] leading-8 text-white/66">
              Webbitis provides website redesign services for businesses that
              already offer quality work but need their website to feel more
              modern, refined, and trustworthy. We redesign outdated websites so
              they better reflect the value, professionalism, and positioning of
              the business behind them.
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
              style={{ backgroundImage: "url('/images/webbitis/redesign.webp')" }}
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
              This service is ideal for businesses, clinics, construction
              companies, real estate brands, restaurants, hotels, and service
              providers whose current website looks outdated, weak, or no longer
              reflects the real quality of their business.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Outdated business websites",
                "Brands needing a more premium look",
                "Companies with weak first impression",
                "Businesses ready for a digital refresh",
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
              Webbitis offers more than redesign. We create premium digital
              solutions for businesses that want stronger branding, better
              structure, and more professional online presence.
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
              Ready to refresh your website?
            </h2>

            <p className="mt-5 max-w-[760px] leading-8 text-white/66">
              Let’s redesign your website into something more modern, refined,
              and aligned with the quality of your business.
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

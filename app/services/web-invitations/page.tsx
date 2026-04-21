import Link from "next/link";


export const metadata = {
  title: "Luxury Web Invitations | Wedding & Event Invitations | Webbitis",
  description:
    "Luxury web invitations for weddings, birthdays and special events. Elegant digital invitations created by Webbitis.",
  keywords: [
    "web invitations",
    "wedding website",
    "digital invitation",
    "luxury invitation",
    "հրավերների կայք",
    "վեբ հրավեր",
    "հարսանեկան կայք",
    "Webbitis invitations",
  ],
};

const includedItems = [
  "Custom visual style for your event",
  "Elegant landing page with premium design",
  "Mobile-friendly invitation experience",
  "Event details, timing, and location sections",
  "RSVP or response form integration",
  "Photo, video, and music-friendly layout",
  "Personalized colors, typography, and atmosphere",
  "Easy-to-share invitation link",
];

const benefits = [
  "More memorable guest experience",
  "Elegant and modern presentation",
  "Easy sharing through a single link",
  "Beautiful mobile-friendly format",
  "More personal and premium feeling",
  "Clear structure for guests and event details",
];

const steps = [
  {
    title: "Style Direction",
    text: "We define the visual tone of the invitation based on your event, photos, and preferred atmosphere.",
  },
  {
    title: "Structure",
    text: "We organize the content, schedule, locations, RSVP details, and the overall flow of the invitation.",
  },
  {
    title: "Design & Build",
    text: "We create the final web invitation with elegant design, responsive layout, and a polished visual presentation.",
  },
  {
    title: "Final Touches",
    text: "We refine the details, add media if needed, and prepare the final invitation link for sharing.",
  },
];

const faqItems = [
  {
    q: "What is a web invitation?",
    a: "A web invitation is a digital invitation page that can include event details, schedule, location, RSVP, photos, music, and a premium visual style in one shareable link.",
  },
  {
    q: "Can you create web invitations for weddings and birthdays?",
    a: "Yes. Webbitis creates elegant web invitations for weddings, birthdays, engagements, baby showers, and private events.",
  },
  {
    q: "Will the invitation work well on mobile phones?",
    a: "Yes. Every web invitation is designed to work smoothly on mobile devices, since most guests will view it on their phones.",
  },
  {
    q: "Can the invitation include RSVP and event details?",
    a: "Yes. We can include RSVP forms, event schedule, location information, maps, photos, videos, and other personalized details.",
  },
];

const relatedServices = [
  {
    title: "Web Design & Development",
    text: "Premium websites for businesses that need stronger digital presence.",
    href: "/webbitis/services/web-design",
    image: "/images/webbitis/develop.webp",
  },
  {
    title: "Website Redesign",
    text: "Refresh outdated websites with a more modern and premium look.",
    href: "/webbitis/services/website-redesign",
    image: "/images/webbitis/redesign.webp",
  },
  {
    title: "AI Integration",
    text: "Smart digital features for more useful and modern online experiences.",
    href: "/webbitis/services/ai-integration",
    image: "/images/webbitis/ai.webp",
  },
];

export default function WebInvitationsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f16] text-white">
      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#0d1220_0%,#0b0f16_100%)]">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-5 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36 lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d9b6cb]">
              <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
              Elegant Web Invitations
            </span>

            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.5rem,4.8vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
              Elegant web invitations for weddings and special events.
            </h1>

            <p className="mt-6 max-w-[760px] text-[1.02rem] leading-8 text-white/66">
              Webbitis creates elegant web invitations for weddings,
              birthdays, engagements, and private events. Each invitation is
              designed to feel personal, memorable, refined, and easy to share,
              while giving guests a beautiful digital experience on mobile and desktop.
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
              style={{ backgroundImage: "url('/images/webbitis/invite.webp')" }}
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
              This service is perfect for couples, families, event organizers,
              and anyone who wants a wedding invitation or event invitation to
              feel more elegant, modern, and memorable than a simple static card
              or plain message.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Weddings",
                "Birthdays",
                "Engagements",
                "Private Events",
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
              Event benefits
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
              Webbitis offers more than event invitations. We create premium digital
              solutions for businesses and brands that want stronger image,
              smarter systems, and more professional online experiences.
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
              Ready to create a memorable invitation?
            </h2>

            <p className="mt-5 max-w-[760px] leading-8 text-white/66">
              Let’s create a beautiful digital invitation that feels personal,
              refined, and easy to share with your guests.
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
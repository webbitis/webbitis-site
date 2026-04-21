import Link from "next/link";


export const metadata = {
  title: "Portfolio | Premium Website Projects | Webbitis",
  description:
    "View selected Webbitis projects including premium business websites, web invitations, beauty, construction and modern digital experiences.",
  keywords: [
    "web design portfolio",
    "website portfolio Armenia",
    "premium websites",
    "business website examples",
    "վեբ կայքերի օրինակներ",
    "portfolio",
    "Webbitis",
  ],
};

const featuredProjects = [
  {
    title: "ggesthetics.ca",
    category: "Luxury Clinic Website",
    text: "A premium digital presence designed to feel elegant, trustworthy, and high-end from the first second.",
    meta: "Design / Development / Premium positioning",
    image: "/images/webbitis/ggestetics.webp",
    url: "https://ggesthetics.ca",
  },
  {
    title: "ohconnect.ca",
    category: "Corporate Website",
    text: "A cleaner and more confident digital image for a modern business that needed stronger trust and structure.",
    meta: "Corporate / Trust / Clarity",
    image: "/images/webbitis/ohconnect.webp",
    url: "https://ohconnect.ca",
  },
];

const projects = [
  {
    title: "lilithhovnanyan.com",
    category: "Personal Brand",
    text: "A softer and more refined online presence with premium editorial feel.",
    meta: "Beauty / Personal brand / Premium identity",
    image: "/images/webbitis/lilithhovn.webp",
    url: "https://lilithhovnanyan.com",
  },
  {
    title: "zaqaryancs.com",
    category: "Construction & Development",
    text: "A stronger digital image for a serious business that needed credibility and better presentation.",
    meta: "Construction / Corporate / Trust",
    image: "/images/webbitis/zaqaryan.webp",
    url: "http://zaqaryancs.com",
  },
  {
    title: "off-road.am",
    category: "Community & Events",
    text: "A bold and more dynamic visual direction designed for a strong and memorable experience.",
    meta: "Community / Events / Strong visual identity",
    image: "/images/webbitis/offroad.webp",
    url: "https://offroad.webbitis.com",
  },
  {
    title: "imhyur.am",
    category: "Digital Invitations",
    text: "Designed to feel elegant, atmospheric, and personal for memorable celebrations.",
    meta: "Invitations / Atmosphere / Premium UX",
    image: "/images/webbitis/imhyur1.webp",
    url: "https://imhyur.am",
  },
  {
    title: "Web Invite",
    category: "Digital Invitations",
    text: "A premium invitation experience with cinematic mood and softer romantic styling.",
    meta: "Wedding / Elegant design / Mobile-first",
    image: "/images/webbitis/imhyur2.webp",
    url: "https://imhyur.am",
  },
  {
    title: "Wedding Invitation",
    category: "Digital Invitations",
    text: "A visually rich web invitation built to feel emotional, warm, and memorable.",
    meta: "Event / Romantic / Storytelling",
    image: "/images/webbitis/imhyur3.webp",
    url: "https://imhyur.am",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#07090f_0%,#0b1120_100%)]">
        <div className="mx-auto max-w-[1280px] px-5 pt-28 pb-20 lg:px-8 lg:pt-32 lg:pb-24">
          <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d9b6cb]">
            <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
            Selected Work
          </span>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h1 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
                Work that makes brands look more valuable.
              </h1>
            </div>

            <div>
  <p className="max-w-[760px] text-[1.06rem] leading-9 text-white/66">
    A curated selection of Webbitis projects in premium web design,
    website development, digital invitations, and modern business
    websites. Each project is created to strengthen trust, improve first
    impressions, and make the brand feel more refined.
  </p>

  <div className="mt-10 grid gap-4 sm:grid-cols-3">
    {[
      { number: "150+", label: "Projects" },
      { number: "15+", label: "Years" },
      { number: "3", label: "Markets" },
    ].map((item) => (
      <div
        key={item.label}
        className="relative overflow-hidden border border-white/8 bg-[linear-gradient(135deg,rgba(30,34,52,0.96)_0%,rgba(18,20,34,0.98)_45%,rgba(12,13,24,1)_100%)] p-5"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -right-8 h-24 w-24 rounded-full bg-[#e86ac6]/14 blur-3xl" />
        </div>

        <div className="relative text-[2rem] font-semibold leading-none tracking-[-0.05em] text-white">
          {item.number}
        </div>

        <div className="relative mt-3 text-[11px] uppercase tracking-[0.18em] text-white/48">
          {item.label}
        </div>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[2rem] font-semibold text-white lg:text-[2.5rem]">
                Featured Projects
              </h2>
            </div>

            <p className="max-w-[520px] text-[0.98rem] leading-8 text-white/60">
              These projects represent the premium visual direction, cleaner
              structure, and stronger digital image that Webbitis creates.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {featuredProjects.map((item, index) => (
              <article
                key={item.title}
                className="group overflow-hidden border border-white/8 bg-[#0d1117] shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1.5 hover:border-[rgba(232,106,198,0.18)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.38)]"
              >
                <div className="relative h-[320px] overflow-hidden lg:h-[420px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-[1600ms] group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.02)_0%,rgba(7,11,18,0.12)_100%)]" />
                </div>

                <div className="border-t border-white/8 p-5 lg:p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#e8bfd7] backdrop-blur-xl">
                      <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
                      {item.category}
                    </span>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.05] text-white/78 transition duration-300 hover:border-[rgba(232,106,198,0.22)] hover:bg-[rgba(232,106,198,0.10)] hover:text-white"
                    >
                      ↗
                    </a>
                  </div>

                  <h3
                    className={`font-semibold leading-[0.96] tracking-[-0.05em] text-white ${
                      index === 0
                        ? "text-[1.95rem] lg:text-[2.4rem]"
                        : "text-[1.6rem] lg:text-[2rem]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[1rem] leading-8 text-white/64 lg:text-[1.04rem]">
                    {item.text}
                  </p>

                  <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-white/38">
                    {item.meta}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/84 transition hover:text-[#f1bfdc]"
                  >
                    Open Website
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[2rem] font-semibold text-white lg:text-[2.5rem]">
                More Projects
              </h2>
            </div>

            <p className="max-w-[520px] text-[0.98rem] leading-8 text-white/60">
              Different industries, different goals, but the same direction:
              stronger presentation, better trust, and a more premium digital feel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden border border-white/8 bg-white/[0.03] shadow-[0_18px_42px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-1 hover:border-[rgba(232,106,198,0.18)]"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-[1400ms] group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.02)_0%,rgba(7,11,18,0.12)_100%)]" />
                </div>

                <div className="border-t border-white/8 p-5 lg:p-6">
                  <span className="inline-flex border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#e8bfd7]">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-[1.28rem] font-semibold leading-[1.02] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[0.96rem] leading-7 text-white/60">
                    {item.text}
                  </p>

                  <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/36">
                    {item.meta}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/84 transition hover:text-[#f1bfdc]"
                  >
                    Open Website
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Premium First Impression",
                text: "Every project is built to create trust and value from the first second a visitor lands on the page.",
              },
              {
                title: "Refined Visual Direction",
                text: "Typography, spacing, imagery, layout, and movement are carefully shaped to feel elegant and intentional.",
              },
              {
                title: "Business-Focused Execution",
                text: "The goal is not only beauty, but stronger positioning, clearer communication, and a more valuable digital image.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden border border-white/8 bg-[linear-gradient(135deg,rgba(30,34,52,0.96)_0%,rgba(18,20,34,0.98)_45%,rgba(12,13,24,1)_100%)] p-7"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[#e86ac6]/18 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#6f5cff]/10 blur-3xl" />
                </div>

                <div className="relative">
                  <h3 className="text-[1.15rem] font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-white/64">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="border border-[rgba(232,106,198,0.16)] bg-[linear-gradient(135deg,rgba(122,29,99,0.14)_0%,rgba(10,16,30,0.94)_100%)] p-8 lg:p-10">
            <div className="max-w-[900px]">
              <h2 className="text-[2rem] font-semibold text-white">
                Want your business to look this strong online?
              </h2>

              <p className="mt-5 text-[1rem] leading-8 text-white/66">
                Let’s create a website or digital experience that feels refined,
                trustworthy, and clearly more valuable from the first second.
              </p>

              <Link
                href="/webbitis#contact"
                className="mt-8 inline-flex min-h-[54px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
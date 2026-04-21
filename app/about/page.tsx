export const metadata = {
  title:
    "About Webbitis | Premium Web Design, SEO & Digital Solutions in Armenia",
  description:
    "Webbitis is a digital agency in Armenia with more than 15 years of experience in web design, website development, SEO services, website redesign, workflow automation, and AI integration for business.",
keywords: [
    "Կայքերի պատրաստում",
    "Վեբ կայք",
    "վեբ կայքերի",
    "վեբ կայքերի պատրաստում Հայաստանում",
    "Վեբ ծրագրավորում",
    "Բիզնես կայք",
    "Վեբ դիզայն",
    "web design Armenia",
    "website development Armenia",
    "premium website design",
    "luxury website design",
    "business website Armenia",
    "web design Canada",
    "web design USA",
    "Webbitis"
  ],

  };





export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <div className="mx-auto max-w-[1180px]">
      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#07090f_0%,#0b1120_100%)]">
 <div className="mx-auto grid max-w-[1280px] gap-12 px-5 pt-24 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-28 lg:pb-24">
   
    <div>
      <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d9b6cb]">
        <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
        About Webbitis
      </span>

      <h1 className="mt-6 max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
  We create websites that make brands look more valuable.
</h1>

      <p className="mt-7 max-w-[760px] text-[1.06rem] leading-9 text-white/66">
  For more than 15 years, Webbitis has been creating premium websites and
  digital experiences for businesses in Armenia, Canada, and the USA.
  We design websites that immediately feel more refined, more trustworthy,
  and more expensive from the very first second.
</p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="/webbitis/services"
          className="inline-flex min-h-[54px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
        >
          Explore Services
        </a>

        <a
          href="/webbitis#contact"
          className="inline-flex min-h-[54px] items-center justify-center border border-white/10 px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/72 transition duration-300 hover:border-white/20 hover:text-white"
        >
          Contact Us
        </a>
      </div>
    </div>

    <div className="grid gap-5 sm:grid-cols-2">
      {[
        { number: "15+", label: "Years of Experience" },
        { number: "150+", label: "Completed Projects" },
        { number: "3", label: "Markets: Armenia, Canada, USA" },
        { number: "100%", label: "Custom & Premium Approach" },
      ].map((item) => (
      <div
  key={item.label}
  className="relative overflow-hidden border border-white/8 bg-[linear-gradient(135deg,rgba(30,34,52,0.96)_0%,rgba(18,20,34,0.98)_45%,rgba(12,13,24,1)_100%)] p-7"
>
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[#e86ac6]/18 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#6f5cff]/12 blur-3xl" />
  </div>

  <div className="relative text-[2.8rem] font-semibold leading-none tracking-[-0.05em] text-white">
    {item.number}
  </div>

  <div className="relative mt-4 max-w-[16ch] text-[0.92rem] uppercase tracking-[0.16em] text-white/48">
    {item.label}
  </div>
</div>
      ))}
    </div>
  </div>
</section>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-white/8 bg-white/[0.03] p-7 lg:p-9">
            <h2 className="text-[1.7rem] font-semibold text-white">
              Our Experience
            </h2>

            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/64">
              <p>
  Most businesses do not need just another website. They need a website that
  makes their company look stronger, more premium, and more established.
  That is where Webbitis is different.
</p>

<p>
  We understand the details that shape first impressions: typography,
  spacing, image style, color palette, animation, content structure, and
  the emotional feeling a visitor gets within the first few seconds.
</p>

<p>
  Whether the business is a clinic, beauty brand, construction company,
  real estate project, restaurant, hotel, or premium service, we create
  websites that make the business appear more desirable and more valuable.
</p>
            </div>
          </div>

          <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 lg:p-9">
            <h2 className="text-[1.7rem] font-semibold text-white">
              What Makes Webbitis Different
            </h2>

            <div className="mt-6 space-y-4">
              {[
  "Websites designed to look more premium and expensive",
  "More than 15 years of experience in web and digital",
  "Attention to every small detail that shapes first impressions",
  "Experience with beauty, construction, real estate and luxury brands",
  "Modern web design, SEO, automation and AI integration",
  "Projects for businesses in Armenia, Canada and the USA",
].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-white/8 bg-white/[0.03] px-4 py-4"
                >
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#e86ac6]" />
                  <span className="text-[0.98rem] leading-7 text-white/68">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="mt-16 border border-white/8 bg-[#0c1018] p-8 lg:p-10">
  <div className="grid gap-8 lg:grid-cols-3">
    {[
      {
        title: "Luxury Visual Direction",
        text: "Elegant typography, refined spacing, cinematic images and carefully chosen colors that make a website look more expensive.",
      },
      {
        title: "First Impression Strategy",
        text: "We know what people notice first and how to create immediate trust within the first seconds of visiting a website.",
      },
      {
        title: "Designed to Represent Value",
        text: "A website should not simply exist. It should make the business appear more serious, more desirable and worth a higher price.",
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
</section>

        <section className="mt-16 border border-white/8 bg-white/[0.03] p-7 lg:p-10">
          <h2 className="text-[1.8rem] font-semibold text-white">
            Who We Work With
          </h2>

          <p className="mt-6 max-w-[980px] text-[1rem] leading-8 text-white/64">
            Webbitis works with clinics, beauty brands, construction companies,
            real estate businesses, hotels, restaurants, e-commerce brands,
            service companies, and entrepreneurs who want a more premium and
            effective digital presence.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "Beauty & Clinics",
              "Construction & Real Estate",
              "Hotels & Restaurants",
              "E-commerce & Personal Brands",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/8 bg-[#0d121c] px-5 py-5 text-center text-[0.92rem] uppercase tracking-[0.16em] text-white/70"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border border-[rgba(232,106,198,0.16)] bg-[linear-gradient(135deg,rgba(122,29,99,0.14)_0%,rgba(10,16,30,0.94)_100%)] p-8 lg:p-10">
          <div className="max-w-[900px]">
            <h2 className="text-[2rem] font-semibold text-white">
              Looking for a premium website or digital solution?
            </h2>

            <p className="mt-5 text-[1rem] leading-8 text-white/66">
              Whether you need web design in Armenia, website development,
              SEO services, website redesign, workflow automation, or AI
              integration for business, Webbitis can help you create a more
              modern, stronger, and more professional online presence.
            </p>

            <a
              href="/webbitis#contact"
              className="mt-8 inline-flex min-h-[54px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5"
            >
              Start a Project
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
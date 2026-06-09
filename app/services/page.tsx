import Link from "next/link";

export const metadata = {
  title: "Web Design, SEO & AI Services in Armenia | Webbitis",
  description:
    "Webbitis offers premium web design, website development, SEO services, workflow automation and AI integration for businesses in Armenia, Canada and the USA.",
  keywords: [
    "web design Armenia",
    "website development Armenia",
    "SEO services Armenia",
    "AI integration for business",
    "workflow automation",
    "digital agency Armenia",
    "website redesign Armenia",
    "web development Armenia",
    "կայքերի պատրաստում",
    "SEO ծառայություններ",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07090f] text-white">
      <section className="border-b border-white/8 bg-[linear-gradient(180deg,#07090f_0%,#0b1120_100%)]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-5 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36 lg:pb-24">
          <div>
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d9b6cb]">
              <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
              About Webbitis
            </span>

            <h1 className="mt-6 max-w-[11ch] text-[clamp(2.6rem,4.5vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
              Web Design, SEO & AI Services for Businesses
            </h1>

            <p className="mt-7 max-w-[720px] text-[1.04rem] leading-9 text-white/66">
  Webbitis is a digital agency in Armenia specializing in premium web
  design, website development, SEO services, website redesign,
  workflow automation, and AI integration for business.
  
  We help companies build modern, high-performing websites that attract
  clients, improve visibility on Google, and automate business processes.
</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex min-h-[54px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                Explore Services
              </Link>

              <Link
                href="/#contact"
                className="inline-flex min-h-[54px] items-center justify-center border border-white/10 px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/72 transition duration-300 hover:border-white/20 hover:text-white"
              >
                Contact Us
              </Link>
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
      <section className="pb-16 lg:pb-20">
        
  <div className="mx-auto max-w-[1180px] px-5 pt-10 lg:px-8">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d9b6cb]">
          <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
          Our Services
        </span>

        <h2 className="mt-5 text-[2rem] font-semibold text-white lg:text-[2.5rem]">
          Explore Webbitis Services
        </h2>
      </div>

      <p className="max-w-[520px] text-[0.98rem] leading-8 text-white/60">
        Webbitis provides premium web design, SEO, website redesign,
        workflow automation, AI integration, and digital solutions for
        businesses that want more than a basic website.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {[
        {
          title: "Web Design & Development",
          text: "Premium websites with modern design and reliable development.",
          href: "/services/web-design",
          image: "/images/webbitis/develop.webp",
        },
        {
          title: "Web Invitations",
          text: "Elegant digital invitations for weddings, birthdays, and events.",
          href: "/services/web-invitations",
          image: "/images/webbitis/invitation.webp",
        },
        {
          title: "SEO Services",
          text: "Improve visibility, search rankings, and online credibility.",
          href: "/services/seo",
          image: "/images/webbitis/seo.webp",
        },
        {
          title: "Website Redesign",
          text: "Transform outdated websites into modern and premium experiences.",
          href: "/services/website-redesign",
          image: "/images/webbitis/redesign.webp",
        },
        {
          title: "Workflow Automation",
          text: "Internal systems and automation that save time and reduce manual work.",
          href: "/services/workflow-automation",
          image: "/images/webbitis/automation.webp",
        },
        {
          title: "AI Integration",
          text: "Practical AI features for smarter websites and business tools.",
          href: "/services/ai-integration",
          image: "/images/webbitis/ai.webp",
        },
      ].map((service) => (
        <Link
          key={service.title}
          href={service.href}
          className="group overflow-hidden border border-white/8 bg-[#0d121c] transition duration-500 hover:-translate-y-1 hover:border-[rgba(232,106,198,0.22)]"
        >
          <div className="relative h-[240px] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,15,0.12)_0%,rgba(7,9,15,0.35)_42%,rgba(7,9,15,0.94)_100%)]" />
          </div>

          <div className="p-6">
            <h3 className="text-[1.2rem] font-semibold text-white">
              {service.title}
            </h3>

            <p className="mt-4 text-[0.95rem] leading-7 text-white/60">
              {service.text}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f1bfdc]">
              Learn More
              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

<section className="mt-14 border border-white/8 bg-white/[0.03] p-7 lg:p-9">
  <h2 className="text-[1.6rem] font-semibold text-white">
    Webbitis Digital Services in Armenia
  </h2>

  <p className="mt-5 text-[1rem] leading-8 text-white/64">
    Webbitis provides professional web design and development services in Armenia,
    helping businesses create modern and high-performing websites. Our SEO services
    improve Google rankings and increase visibility, while workflow automation and
    AI integration help businesses operate more efficiently and reduce manual work.
  </p>

  <p className="mt-5 text-[1rem] leading-8 text-white/64">
    Whether you need a new website, redesign, SEO strategy or AI-powered solution,
    Webbitis delivers premium digital experiences tailored to your business goals.
  </p>
</section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="border border-white/8 bg-white/[0.03] p-7 lg:p-9">
            <h2 className="text-[1.7rem] font-semibold text-white">
              Our Experience
            </h2>

            <div className="mt-6 space-y-5 text-[1rem] leading-8 text-white/64">
              <p>
                With more than 15 years of experience in web design and digital
                development, Webbitis has worked with businesses in Armenia,
                Canada, and the United States across industries such as beauty,
                construction, real estate, e-commerce, hospitality, healthcare,
                and professional services.
              </p>

              <p>
                We have collaborated with both small businesses and large
                companies, creating websites, digital platforms, internal
                systems, and custom solutions that help brands appear more
                refined, trustworthy, and effective.
              </p>

              <p>
                Our projects include premium business websites, website
                redesigns, online stores, internal workflow systems, web-based
                invitations, SEO-focused content structures, and modern
                AI-powered business tools.
              </p>
            </div>
          </div>

          <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 lg:p-9">
            <h2 className="text-[1.7rem] font-semibold text-white">
              What Makes Webbitis Different
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "More than 15 years of experience",
                "Premium web design and website development",
                "SEO services and website redesign",
                "Workflow automation and AI integration",
                "Experience with businesses in Armenia, Canada and the USA",
                "Custom approach for every business and industry",
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
      </section>
      

      <section className="pb-14 lg:pb-16">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <section className="border border-white/8 bg-white/[0.03] p-7 lg:p-10">
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
        </div>
      </section>

      

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
          <section className="border border-[rgba(232,106,198,0.16)] bg-[linear-gradient(135deg,rgba(122,29,99,0.14)_0%,rgba(10,16,30,0.94)_100%)] p-8 lg:p-10">
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

              <Link
                href="/webbitis#contact"
                className="mt-8 inline-flex min-h-[54px] items-center justify-center border border-[rgba(232,106,198,0.28)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_55%,#e86ac6_100%)] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5"
              >
                Start a Project
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
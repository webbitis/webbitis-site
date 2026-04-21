
"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import WebbitisAIChat from "./components/WebbitisAIChat";
const slides = [
  {
    title1: "Built to be noticed.",
    title2: "Designed to be trusted.",
    desc: "WebBitis creates refined websites, digital systems, and premium digital experiences for businesses that want more than just an online presence.",
    primary: "Explore Services",
    secondary: "View Selected Work",
    bg: "/images/webbitis/slide1.webp",
    stats: [
      ["15+ Years", "of digital experience"],
      ["150+ Projects", "delivered across industries"],
      ["Web + AI + Systems", "strategy, design, execution"],
    ],
  },
  {
    title1: "Digital invitations",
    title2: "with atmosphere.",
    desc: "Beautiful web invitations for weddings, private events, and celebrations — designed to feel elegant, personal, and memorable.",
    primary: "View Invitation Styles",
    secondary: "Request Custom Design",
    bg: "/images/webbitis/slide2.webp",
    stats: [
      ["Wedding", "elegant and cinematic"],
      ["Events", "beautiful guest experience"],
      ["Custom", "crafted to your style"],
    ],
  },
  {
    title1: "Modern systems.",
    title2: "Sharper business.",
    desc: "We redesign outdated websites, automate repetitive processes, and create smarter digital systems that make your business move faster.",
    primary: "Discover Solutions",
    secondary: "Start a Project",
    bg: "/images/webbitis/slide3.webp",
    stats: [
      ["Automation", "less manual work"],
      ["Modern UI", "cleaner digital presence"],
      ["AI Features", "smarter experiences"],
    ],
  },
];

const services = [
  {
    tag: "Web Design & Development",
    title: "Premium Web Design & Development",
    text: "Premium web design and website development for businesses that need a refined, modern, scalable, and trustworthy digital presence.",
    image: "/images/webbitis/develop.webp",
    href: "/services/web-design",
  },
  {
    tag: "Web Invitations",
    title: "Elegant Web Invitations",
    text: "Beautiful web invitations for weddings, birthdays, engagements, and private events — designed to feel personal, memorable, and premium.",
    image: "/images/webbitis/invitation.webp",
    href: "/services/web-invitations",
  },
  {
    tag: "SEO & Promotion",
    title: "SEO Services",
    text: "Search visibility strategies that help your business get discovered, trusted, and remembered.",
    image: "/images/webbitis/seo.webp",
    href: "/services/seo",
  },
  {
    tag: "AI Features",
    title: "AI Integration for Business",
    text: "Smart website functionality powered by AI — from assistants and lead capture to useful content and business tools.",
    image: "/images/webbitis/ai.webp",
    href: "/services/ai-integration",
  },
  {
    tag: "Modernization",
    title: "Website Redesign",
    text: "A complete redesign for outdated websites that no longer reflect the quality of the business behind them.",
    image: "/images/webbitis/redesign.webp",
    href: "/services/website-redesign",
  },
  {
    tag: "Automation",
    title: "Workflow Automation",
    text: "Internal tools and automation systems that reduce manual work, save time, and make everyday operations smoother.",
    image: "/images/webbitis/automation.webp",
    href: "/services/workflow-automation",
  },
  
];

const aboutItems = [
  {
    title: "Built for serious business presence",
    text: "Webbitis is a digital agency in Armenia focused on premium web design, website development, and stronger digital positioning for businesses that want to look credible and modern online.",
  },
  {
    title: "More than just website design",
    text: "We create business websites, handle website redesign projects, improve visibility with SEO services in Armenia, and build workflow automation and AI integration for business operations.",
  },
  {
    title: "Armenia, Canada and USA",
    text: "Our work is designed for companies in Armenia as well as brands that need a business website in Canada or a polished web design presence for the USA market.",
  },
];

const faqItems = [
  {
    q: "Do you provide web design in Armenia?",
    a: "Yes. Webbitis provides web design in Armenia for businesses, personal brands, clinics, construction companies, and premium service providers that need a stronger online presence.",
  },
  {
    q: "Do you also offer website development in Armenia?",
    a: "Yes. We handle both design and website development in Armenia, including business websites, landing pages, portfolio websites, and custom digital experiences.",
  },
  {
    q: "What makes your work premium web design?",
    a: "Our approach combines visual clarity, strong first impressions, modern layouts, refined typography, trust-focused structure, and business-driven messaging rather than decorative design only.",
  },
  {
    q: "Do you provide SEO services in Armenia?",
    a: "Yes. We provide SEO services in Armenia by improving content structure, keyword targeting, on-page SEO, technical foundations, metadata, and search visibility for business websites.",
  },
  {
    q: "Can you redesign an old website?",
    a: "Yes. Website redesign is one of our core services. We modernize outdated websites so they better reflect the quality, credibility, and positioning of the business.",
  },
  {
    q: "Do you offer AI integration for business?",
    a: "Yes. We can add AI integration for business needs such as smart assistants, lead capture, content tools, internal business features, and practical AI-powered website functionality.",
  },
  {
    q: "Do you build workflow automation systems?",
    a: "Yes. We create workflow automation solutions that reduce repetitive manual tasks and help businesses run more efficiently.",
  },
  {
    q: "Do you work with clients outside Armenia?",
    a: "Yes. In addition to local projects, Webbitis also works with clients who need a business website in Canada or web design for the USA market.",
  },
];

const projects = [
  {
    title: "ggesthetics.ca",
    category: "Luxury Clinic Website",
    text: "Built for trust, elegance, and premium perception.",
    meta: "Design / Development / Premium positioning",
    image:
      "/images/webbitis/ggestetics.webp",
    url: "https://ggesthetics.ca",
  },
  {
    title: "ohconnect.ca",
    category: "Corporate Website",
    text: "A cleaner, stronger digital presence for a modern business.",
    meta: "Corporate clarity / Trust / Structure",
    image:
      "/images/webbitis/ohconnect.webp",
    url: "https://ohconnect.ca",
  },
  {
    title: "lilithhovnanyan.com",
    category: "Personal Brand Website",
    text: "A refined online presence with a softer, premium feel.",
    meta: "Personal brand / Beauty / Editorial feel",
    image:
      "/images/webbitis/lilithhovn.webp",
    url: "https://lilithhovnanyan.com",
  },
  {
    title: "zaqaryancs.com",
    category: "Construction & Development",
    text: "A stronger digital image for a serious company.",
    meta: "Corporate image / Structure / Credibility",
    image:
      "/images/webbitis/zaqaryan.webp",
    url: "http://zaqaryancs.com",
  },
  {
    title: "off-road.am",
    category: "Adventure / Experience",
    text: "A more dynamic experience built to feel bold and memorable.",
    meta: "Community / Events / Strong visual identity",
    image:
      "/images/webbitis/offroad.webp",
    url: "https://offroad.webbitis.com",
  },


  {
    title: "Wedding",
    category: "Digital Invitations",
    text: "Designed to feel memorable, elegant, and personal.",
    meta: " Atmosphere ",
    image:
      "/images/webbitis/imhyur3.webp",
    url: "http://imhyur.webbitis.com/",
  },
  {
    title: "imhyur.am",
    category: "Digital Invitations",
    text: "Designed to feel memorable, elegant, and personal.",
    meta: "Invitations / Atmosphere / Premium UX",
    image:
      "/images/webbitis/imhyur1.webp",
    url: "http://imhyur.webbitis.com/romantic/",
  },
  {
    title: "Web Invite",
    category: "Digital Invitations",
    text: "Designed to feel memorable, elegant, and personal.",
    meta: " Atmosphere ",
    image:
      "/images/webbitis/imhyur2.webp",
    url: "http://imhyur.webbitis.com/light/",
  }
  
];

const SectionShell = ({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className={`relative overflow-hidden py-20 lg:py-24 ${className}`}
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8">
      {children}
    </div>
  </section>
);

const SectionHead = ({
  eyebrow,
  title,
  desc,
  cta,
}: {
  eyebrow?: string;
  title: string;
  desc: string;
  cta?: ReactNode;
}) => (
  <div className="mb-12 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
    <div className="max-w-[1160px]">
      {eyebrow && (
        <span className="mb-5 inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-[#d9b6cb] backdrop-blur-xl">
          <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
          {eyebrow}
        </span>
      )}

      <h2 className="max-w-[22ch] text-[clamp(2.8rem,4.6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">

        {title}
      </h2>

      <p className="mt-6 max-w-[1080px] text-[1.08rem] leading-9 text-white/66 lg:text-[1.14rem]">
        {desc}
      </p>
    </div>

    {cta}
  </div>
);

export default function WebbitisUltraPremiumPage() {
  const [active, setActive] = useState(0);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5600);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07090f] text-white">
      

      <section id="hero" className="relative min-h-screen overflow-hidden isolate">
        <div className="pointer-events-none absolute inset-0 z-[1] [background:radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(125,29,99,0.24),transparent_28%),radial-gradient(circle_at_70%_76%,rgba(197,172,122,0.08),transparent_22%)]" />
        <div className="pointer-events-none absolute -left-16 top-10 z-[1] h-80 w-80 bg-white/[0.03] blur-[120px]" />
        <div className="pointer-events-none absolute right-[-60px] top-16 z-[1] h-96 w-96 bg-[#b8328a]/18 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-80px] left-[18%] z-[1] h-72 w-72 bg-[#7a1d63]/14 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:84px_84px]" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(7,9,15,0.00)_0%,rgba(7,9,15,0.06)_38%,rgba(7,9,15,0.36)_100%)]" />

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              index === active ? "z-[1] opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 scale-[1.02] bg-cover bg-center transition-transform duration-[7000ms] ease-out"
              style={{ backgroundImage: `url(${slide.bg})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,15,0.94)_0%,rgba(7,9,15,0.78)_40%,rgba(7,9,15,0.48)_100%),linear-gradient(180deg,rgba(7,9,15,0.18)_0%,rgba(7,9,15,0.56)_64%,rgba(7,9,15,0.95)_100%)]" />
          </div>
        ))}

        <div className="relative z-10 mx-auto grid min-h-screen max-w-[1380px] grid-cols-1 items-center gap-10 px-5 pb-20 pt-40 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8 lg:pt-36">
          <div key={active} className="max-w-[960px]">
  <div className="mb-5 inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d9b6cb] backdrop-blur-xl">
    <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
    Premium Web Design / SEO / Automation / AI
  </div>

  <div className="space-y-5">
  <h1 className="max-w-[13ch] text-[clamp(2.3rem,4vw,4.2rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
    Premium websites that make your business look more valuable.
  </h1>

  <div className="max-w-[18ch] text-[clamp(1.15rem,2vw,1.75rem)] font-medium leading-[1.06] tracking-[-0.03em] bg-[linear-gradient(90deg,#ffffff_0%,#f3bfdc_18%,#e86ac6_46%,#b8328a_72%,#ffffff_100%)] bg-clip-text text-transparent">
    Built to be noticed. Designed to be trusted.
  </div>

  <p className="max-w-[760px] text-[1.04rem] leading-8 text-white/72">
    Webbitis creates refined, high-end websites for businesses in Armenia,
    Canada, and the USA that want to look more professional, more
    trustworthy, and more expensive from the very first second.
  </p>

  <p className="max-w-[760px] text-[1rem] leading-8 text-white/56">
    Beyond web design, we provide SEO, website redesign, workflow
    automation, and AI integration for businesses that want a stronger
    digital presence and a more premium image.
  </p>
</div>

  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap animate-[fadeSlideRight_1.2s_ease_forwards]">
    <a
      href="#services"
      className="group inline-flex min-h-[58px] items-center justify-center gap-2 border border-[rgba(232,106,198,0.30)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_50%,#e86ac6_100%)] px-6 text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(184,50,138,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(232,106,198,0.38)]"
    >
      Explore Services
      <ArrowUpRight
        size={16}
        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>

    <a
      href="#portfolio"
      className="group inline-flex min-h-[58px] items-center justify-center gap-2 border border-white/10 bg-white/[0.05] px-6 text-[13px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(232,106,198,0.26)] hover:bg-white/[0.08]"
    >
      View Selected Work
      <ArrowUpRight
        size={16}
        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  </div>

  <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-[fadeSlideUp_1.35s_ease_forwards]">
    <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-5 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
      <strong className="mb-2 block text-[0.98rem] font-semibold uppercase tracking-[0.12em] text-white">
        15+ Years
      </strong>
      <span className="text-sm leading-6 text-white/58">
        of digital experience
      </span>
    </div>

    <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-5 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
      <strong className="mb-2 block text-[0.98rem] font-semibold uppercase tracking-[0.12em] text-white">
        150+ Projects
      </strong>
      <span className="text-sm leading-6 text-white/58">
        delivered across industries
      </span>
    </div>

    <div className="border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-5 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
      <strong className="mb-2 block text-[0.98rem] font-semibold uppercase tracking-[0.12em] text-white">
        Web + SEO + AI
      </strong>
      <span className="text-sm leading-6 text-white/58">
        strategy, design, execution
      </span>
    </div>
  </div>
</div>

        <div className="space-y-5">
          
  <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-[#d9b6cb]">
    <span className="h-[5px] w-[5px] bg-[#e86ac6]" />
    Trusted by businesses in Armenia, Canada & USA
  </div>

  <div className="space-y-3 border-t border-white/8 pt-5">
    <div className="flex items-start justify-between">
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/38">
        Experience
      </span>

      <span className="text-right text-[1rem] font-semibold text-white">
        15+ Years
      </span>
    </div>

    <div className="flex items-start justify-between border-t border-white/8 pt-3">
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/38">
        Completed Projects
      </span>

      <span className="text-right text-[1rem] font-semibold text-white">
       150+
      </span>
    </div>

    <div className="flex items-start justify-between border-t border-white/8 pt-3">
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/38">
        Services
      </span>

      <span className="max-w-[150px] text-right text-[0.95rem] font-medium leading-6 text-white">
        Web Design, SEO, Automation, AI
      </span>
    </div>

    <div className="flex items-start justify-between border-t border-white/8 pt-3">
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/38">
        Markets
      </span>

      <span className="text-right text-[0.95rem] font-medium text-white">
        Armenia / Canada / USA
      </span>
    </div>
  </div>

  <div className="border-t border-white/8 pt-5">
    <p className="text-[0.9rem] leading-7 text-white/52">
      Modern systems. Sharper business.
    </p>
  </div>
</div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-20 mx-auto flex max-w-[1380px] flex-col gap-4 lg:left-8 lg:right-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="h-[3px] flex-1 overflow-hidden bg-white/10">
            <div
              key={active}
              className="h-full animate-[grow_5.6s_linear_forwards] bg-[linear-gradient(90deg,#ffffff_0%,#e86ac6_25%,#b8328a_55%,#5f8fff_85%,#020a1e_100%)]"
            />
          </div>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-[4px] w-8 transition ${
                  active === index
                    ? "bg-[linear-gradient(90deg,#e86ac6_0%,#b8328a_55%,#7a1d63_100%)] shadow-[0_0_18px_rgba(184,50,138,0.35)]"
                    : "bg-white/22"
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes grow {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          @keyframes fadeSlideRight {
            from {
              opacity: 0;
              transform: translateX(34px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
      <section className="border-y border-white/8 bg-[#0b0f16] py-20">
  <div className="mx-auto grid max-w-[1180px] gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
    <div>
      <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d9b6cb]">
        <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
        The Webbitis Difference
      </span>

      <h2 className="mt-6 max-w-[11ch] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
        Websites that feel expensive from the very first second.
      </h2>
    </div>

    <div className="space-y-6 text-[1rem] leading-8 text-white/68">
      <p>
        Most websites simply provide information. Webbitis creates websites
        that immediately make a business look more refined, more trustworthy,
        and more valuable.
      </p>

      <p>
        We understand the small details that shape first impressions:
        spacing, typography, image style, animation, hierarchy, colors,
        content flow, and the feeling a visitor gets within the first few
        seconds.
      </p>

      <p>
        Every Webbitis project is designed to look elegant, premium, and
        intentionally crafted — whether it is for a beauty clinic,
        construction company, luxury service, restaurant, real estate brand,
        or business in Armenia, Canada, or the US.
      </p>
    </div>
  </div>
</section>

<div className="mt-12 grid gap-5 md:grid-cols-3">
  {[
    {
      title: "Luxury Visual Direction",
      text: "Elegant typography, refined spacing, cinematic images and premium colors that make the website look more expensive.",
    },
    {
      title: "First Impression Psychology",
      text: "We know what visitors notice first and how to create immediate trust from the first second on the page.",
    },
    {
      title: "Designed to Represent Value",
      text: "Your website should make your business appear more serious, more desirable, and worth a higher price.",
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

      <SectionShell
        id="services"
        className="bg-[linear-gradient(180deg,#090b12_0%,#11131a_100%)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,50,138,0.12),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(95,143,255,0.08),transparent_26%)]" />

        <SectionHead
          eyebrow="What We Do"
          title="Digital work that feels premium and performs with purpose."
          desc="Websites, digital invitations, automation systems, and AI-powered features — designed to make brands feel more refined, trusted, and memorable."
        />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          {services.map((item, index) => {
            const layout =
              index === 0
                ? "xl:col-span-8 xl:row-span-2 min-h-[640px]"
                : index === 1
                ? "xl:col-span-4 min-h-[310px]"
                : index === 2
                ? "xl:col-span-4 min-h-[310px]"
                : index === 3
                ? "xl:col-span-5 min-h-[380px]"
                : index === 4
                ? "xl:col-span-3 min-h-[380px]"
                : "xl:col-span-4 min-h-[380px]";

            return (
              <article
                key={item.title} aria-label={`${item.title} – ${item.text}`}
                className={`group relative overflow-hidden border border-white/8 bg-white/[0.03] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-[#e86ac6]/28 hover:shadow-[0_34px_90px_rgba(184,50,138,0.18)] ${layout}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(232,106,198,0.18),transparent_38%)] opacity-0 transition duration-700 group-hover:opacity-100" />

                <div
                  className="absolute inset-0 bg-cover bg-top transition duration-[1800ms] ease-out group-hover:scale-[1.04]"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-[linear-gradient(180deg,rgba(7,9,15,0.00)_0%,rgba(7,9,15,0.10)_18%,rgba(7,9,15,0.94)_100%)]"
                      : index === 3
                      ? "bg-[linear-gradient(180deg,rgba(7,9,15,0.04)_0%,rgba(7,9,15,0.10)_26%,rgba(7,9,15,0.90)_100%)]"
                      : "bg-[linear-gradient(180deg,rgba(7,9,15,0.04)_0%,rgba(7,9,15,0.20)_30%,rgba(7,9,15,0.88)_100%)]"
                  }`}
                />

                <div className="absolute left-5 top-5 z-10">
                  <span className="border border-white/10 bg-white/[0.08] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#f1bfdc] backdrop-blur-xl">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 lg:p-8">
                  <div className="mb-4 h-px w-0 bg-[linear-gradient(90deg,#e86ac6,#ffffff)] transition-all duration-700 group-hover:w-28" />

                  <h3
                    className={`font-semibold leading-[0.98] tracking-[-0.05em] text-white ${
                      index === 0
                        ? "max-w-[10ch] text-[2.45rem] lg:text-[3.15rem]"
                        : "max-w-[14ch] text-[1.56rem] lg:text-[1.96rem]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  
                  <a
  href={item.href}
  className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/84 transition hover:text-[#f1bfdc]"
>
  Learn More
  <ArrowUpRight size={14} />
</a>
                </div>
              </article>
            );
          })}
        </div>
      </SectionShell>
<SectionShell
  id="portfolio"
  className="bg-[linear-gradient(180deg,#070b12_0%,#11161d_100%)] pt-18 pb-10 lg:pt-24 lg:pb-12"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(232,106,198,0.10),transparent_24%),radial-gradient(circle_at_12%_88%,rgba(95,143,255,0.08),transparent_24%)]" />

  <SectionHead
    eyebrow="Selected Work"
    title="Work shaped with clarity, atmosphere, and intent."
    desc="A curated selection of digital experiences designed to elevate perception, strengthen trust, and make brands feel more refined."
    cta={
      <a
        href="#contact"
        className="group inline-flex h-[58px] items-center justify-center gap-2 border border-white/10 bg-white/[0.05] px-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(232,106,198,0.24)] hover:bg-white/[0.08]"
      >
        Start a Project
        <ChevronRight
          size={16}
          className="transition duration-300 group-hover:translate-x-1"
        />
      </a>
    }
  />

  <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
    {projects.slice(0, 2).map((item, index) => (
      <a
        key={item.title}
        href={item.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.title} – ${item.text}`}
        className="group block overflow-hidden border border-white/8 bg-[#0d1117] shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1.5 hover:border-[rgba(232,106,198,0.18)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.38)]"
      >
        <div className="relative h-[320px] overflow-hidden lg:h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-[1600ms] group-hover:scale-[1.02]"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.02)_0%,rgba(7,11,18,0.10)_100%)]" />
        </div>

        <div className="border-t border-white/8 p-5 lg:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#e8bfd7] backdrop-blur-xl">
              <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
              {item.category}
            </span>

            <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.05] text-white/78 transition duration-300 group-hover:border-[rgba(232,106,198,0.22)] group-hover:bg-[rgba(232,106,198,0.10)] group-hover:text-white">
              <ArrowUpRight size={17} />
            </div>
          </div>

          <h3
            className={`font-semibold leading-[0.96] tracking-[-0.05em] text-white ${
              index === 0
                ? "text-[1.95rem] lg:text-[2.4rem]"
                : "text-[1.55rem] lg:text-[1.9rem]"
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

          <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/84 transition group-hover:text-[#f1bfdc]">
            Open Website
            <ArrowUpRight size={14} />
          </div>
        </div>
      </a>
    ))}
  </div>

  <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {projects.slice(2, 5).map((item) => (
      <a
        key={item.title}
        href={item.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.title} website project – ${item.category}`}
        className="group block cursor-pointer overflow-hidden border border-white/8 bg-white/[0.03] shadow-[0_18px_42px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-1 hover:border-[rgba(232,106,198,0.18)]"
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

          <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/84 transition group-hover:text-[#f1bfdc]">
            Open Website
            <ArrowUpRight size={14} />
          </div>
        </div>
      </a>
    ))}
  </div>

  <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {projects.slice(5).map((item) => (
      <a
        key={item.title}
        href={item.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.title} website project – ${item.category}`}
        className="group block overflow-hidden border border-white/8 bg-white/[0.03] shadow-[0_18px_42px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-1 hover:border-[rgba(232,106,198,0.18)]"
      >
        <div className="relative h-[240px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top transition duration-[1400ms] group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.02)_0%,rgba(7,11,18,0.12)_100%)]" />
        </div>

        <div className="border-t border-white/8 p-5 lg:p-6">
          <span className="inline-flex border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#e8bfd7]">
            {item.category}
          </span>

          <h3 className="mt-3 text-[1.32rem] font-semibold leading-[1.02] text-white">
            {item.title}
          </h3>

          <p className="mt-3 text-[0.96rem] leading-7 text-white/60">
            {item.text}
          </p>

          <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-white/36">
            {item.meta}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/84 transition group-hover:text-[#f1bfdc]">
            Open Website
            <ArrowUpRight size={14} />
          </div>
        </div>
      </a>
    ))}
  </div>
</SectionShell>

<SectionShell
  id="about"
  className="bg-[linear-gradient(180deg,#090d14_0%,#131922_100%)]"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(232,106,198,0.10),transparent_26%),radial-gradient(circle_at_82%_72%,rgba(95,143,255,0.08),transparent_24%)]" />

  <SectionHead
    eyebrow="About Webbitis"
    title="A digital agency in Armenia creating refined websites, smarter systems, and stronger business presence."
    desc="Webbitis delivers premium web design, website development in Armenia, SEO services, website redesign, workflow automation, and AI integration for business clients who want more than a basic website."
  />

  <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr]">
    <div className="border border-white/8 bg-white/[0.03] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-xl lg:p-8">
      <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.05] px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#d9b6cb]">
        <span className="h-[6px] w-[6px] bg-[#e86ac6]" />
        Web Design Armenia / SEO / AI / Automation
      </span>

      <h3 className="mt-6 max-w-[16ch] text-[clamp(2rem,3.6vw,3.3rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-white">
        Built for businesses that want clarity, trust, and better digital performance.
      </h3>

      <p className="mt-6 max-w-[760px] text-[1.02rem] leading-8 text-white/68">
        Webbitis is a digital agency in Armenia focused on premium web design and
        website development for businesses that need stronger positioning online.
        We build elegant business websites, redesign outdated platforms, improve
        search visibility with SEO services in Armenia, and create workflow
        automation and AI integration for business growth.
      </p>

      <p className="mt-5 max-w-[760px] text-[1.02rem] leading-8 text-white/68">
        Our projects serve local and international clients, including companies
        looking for a business website in Canada or a polished web design solution
        for the USA market. The goal is always the same: create a digital presence
        that feels refined, credible, and effective.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="border border-white/8 bg-white/[0.04] px-5 py-5">
          <div className="text-[1rem] font-semibold text-white">Premium Web Design</div>
          <div className="mt-2 text-sm leading-6 text-white/56">
            Elegant, modern websites built for trust and perception.
          </div>
        </div>

        <div className="border border-white/8 bg-white/[0.04] px-5 py-5">
          <div className="text-[1rem] font-semibold text-white">SEO Services Armenia</div>
          <div className="mt-2 text-sm leading-6 text-white/56">
            Better on-page structure and stronger search visibility.
          </div>
        </div>

        <div className="border border-white/8 bg-white/[0.04] px-5 py-5">
          <div className="text-[1rem] font-semibold text-white">AI + Automation</div>
          <div className="mt-2 text-sm leading-6 text-white/56">
            Smarter systems for faster and more efficient business workflows.
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6">
      {aboutItems.map((item) => (
        <article
          key={item.title}
          className="border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[rgba(232,106,198,0.22)]"
        >
          <div className="mb-4 h-px w-16 bg-[linear-gradient(90deg,#e86ac6,transparent)]" />
          <h3 className="text-[1.35rem] font-semibold leading-[1.02] text-white">
            {item.title}
          </h3>
          <p className="mt-4 text-[0.98rem] leading-8 text-white/64">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  </div>
</SectionShell>

<SectionShell
  id="faq"
  className="bg-[linear-gradient(180deg,#0c1017_0%,#161c24_100%)] pt-14 pb-16 lg:pt-20 lg:pb-24"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(232,106,198,0.09),transparent_24%),radial-gradient(circle_at_84%_74%,rgba(95,143,255,0.08),transparent_22%)]" />

  <SectionHead
    eyebrow="FAQ"
    title="Questions businesses usually ask before starting."
    desc="Clear answers about web design in Armenia, website development, SEO services, website redesign, AI integration for business, and workflow automation."
  />

  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
    {faqItems.map((item, index) => (
      <article
        key={item.q}
        className="border border-white/8 bg-white/[0.03] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl transition duration-300 hover:border-[rgba(232,106,198,0.20)]"
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/[0.05] text-[12px] font-semibold text-[#f1bfdc]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-[linear-gradient(90deg,#e86ac6,transparent)]" />
        </div>

        <h3 className="text-[1.16rem] font-semibold leading-7 text-white">
          {item.q}
        </h3>

        <p className="mt-4 text-[0.98rem] leading-8 text-white/64">
          {item.a}
        </p>
      </article>
    ))}
  </div>
</SectionShell>

      <SectionShell
        id="contact"
        className="bg-[linear-gradient(180deg,#161a20_0%,#0a0d12_100%)] pt-12 pb-18 lg:pt-14 lg:pb-24"
      >
        <div className="absolute inset-0 [background:radial-gradient(circle_at_18%_18%,rgba(125,18,56,0.16),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(197,172,122,0.05),transparent_24%)]" />

        <div className="overflow-hidden border border-white/8 bg-[linear-gradient(135deg,#1a1f27_0%,#11161d_55%,#0d1117_100%)] p-6 shadow-[0_24px_52px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-block text-[12px] uppercase tracking-[0.18em] text-[#c5ac7a]">
                START YOUR PROJECT
              </span>

              <h2 className="max-w-[10ch] text-[clamp(2.4rem,4.5vw,4.7rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
                Let’s build something sharp, elevated, and effective
              </h2>

              <p className="mt-6 max-w-[580px] text-[1.06rem] leading-8 text-white/68">
                If you need a website or digital solution that feels premium and works with purpose, this is where the conversation begins.
              </p>

              <div className="mt-8 space-y-3 text-[12px] uppercase tracking-[0.16em] text-white/40">
                <div>Strategy + Design + Development</div>
                <div>Armenia + International Projects</div>
                <div>Clear process. Premium execution.</div>
              </div>

              <div className="mt-8 h-px w-24 bg-[linear-gradient(90deg,#e86ac6,transparent)]" />
            </div>

            <form className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <label className="mb-2 block text-[12px] uppercase tracking-[0.12em] text-white/72">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="h-14 w-full border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition-all duration-300 placeholder:text-white/34 focus:border-[rgba(232,106,198,0.28)] focus:bg-white/[0.08]"
                />
              </div>

              <div>
                <label className="mb-2 block text-[12px] uppercase tracking-[0.12em] text-white/72">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="h-14 w-full border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition-all duration-300 placeholder:text-white/34 focus:border-[rgba(232,106,198,0.28)] focus:bg-white/[0.08]"
                />
              </div>

              <div>
  <label className="mb-2 block text-[12px] uppercase tracking-[0.12em] text-white/72">
    Service
  </label>
  <select className="h-14 w-full border border-white/10 bg-white/[0.06] px-4 text-white [color-scheme:dark] outline-none transition-all duration-300 focus:border-[rgba(232,106,198,0.28)] focus:bg-white/[0.08]">
    <option className="bg-[#0d1117] text-white">Business Website</option>
    <option className="bg-[#0d1117] text-white">Web Invitation</option>
    <option className="bg-[#0d1117] text-white">Modernization</option>
    <option className="bg-[#0d1117] text-white">Automation</option>
    <option className="bg-[#0d1117] text-white">SEO / Promotion</option>
    <option className="bg-[#0d1117] text-white">AI Features</option>
  </select>
</div>

              <div>
  <label className="mb-2 block text-[12px] uppercase tracking-[0.12em] text-white/72">
    Budget
  </label>
  <select className="h-14 w-full border border-white/10 bg-white/[0.06] px-4 text-white [color-scheme:dark] outline-none transition-all duration-300 focus:border-[rgba(232,106,198,0.28)] focus:bg-white/[0.08]">
    <option className="bg-[#0d1117] text-white">Up to $1000</option>
    <option className="bg-[#0d1117] text-white">$1000 – $2500</option>
    <option className="bg-[#0d1117] text-white">$2500 – $5000</option>
    <option className="bg-[#0d1117] text-white">$5000+</option>
  </select>
</div>

              <div className="lg:col-span-2">
                <label className="mb-2 block text-[12px] uppercase tracking-[0.12em] text-white/72">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you need"
                  className="w-full border border-white/10 bg-white/[0.06] px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-white/34 focus:border-[rgba(232,106,198,0.28)] focus:bg-white/[0.08]"
                />
              </div>

              <div className="lg:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex min-h-[60px] w-full items-center justify-center gap-2 border border-[rgba(232,106,198,0.30)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_50%,#e86ac6_100%)] px-6 text-[13px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(184,50,138,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(232,106,198,0.38)]"
                >
                  Send Inquiry
                  <ArrowUpRight
                    size={16}
                    className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionShell>

    

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Webbitis",
      url: "https://webbitis.com",
      logo: "https://webbitis.com/images/webbitis/logo.webp",
      description:
        "Premium web design, SEO, automation and AI solutions for businesses.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yerevan",
        addressCountry: "Armenia",
      },
      sameAs: [
        "https://www.linkedin.com/company/webbitis",
        "https://www.instagram.com/webbitis"
      ],
      offers: [
        {
          "@type": "Service",
          name: "Premium Business Websites",
        },
        {
          "@type": "Service",
          name: "SEO & Digital Visibility",
        },
        {
          "@type": "Service",
          name: "Workflow Automation",
        },
        {
          "@type": "Service",
          name: "AI-Powered Website Features",
        }
      ]
    }),
  }}
/>

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
<WebbitisAIChat />

    </main>
    
  );
}
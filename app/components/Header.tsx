"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const serviceItems = [
  {
    label: "Web Design & Development",
    desc: "Premium business websites",
    href: "/services/web-design",
  },
  {
    label: "Web Invitations",
    desc: "Elegant event invitations",
    href: "/services/web-invitations",
  },
  {
    label: "SEO Services",
    desc: "Better visibility and rankings",
    href: "/services/seo",
  },
  {
    label: "Website Redesign",
    desc: "Modernize outdated websites",
    href: "/services/website-redesign",
  },
  {
    label: "Workflow Automation",
    desc: "Smarter internal systems",
    href: "/services/workflow-automation",
  },
  {
    label: "AI Integration",
    desc: "Smart tools and AI features",
    href: "/services/ai-integration",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(232,106,198,0.14)] bg-[linear-gradient(180deg,rgba(2,10,30,0.96)_0%,rgba(7,17,39,0.92)_55%,rgba(2,10,30,0.94)_100%)] backdrop-blur-2xl before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_18%_0%,rgba(95,143,255,0.10),transparent_34%),radial-gradient(circle_at_78%_0%,rgba(232,106,198,0.12),transparent_28%)] before:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,transparent_28%)] after:content-['']">
      <div className="relative z-10 mx-auto flex h-20 max-w-[1380px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/webbitis/logo.webp"
            alt="Webbitis"
            width={76}
            height={76}
            priority
            className="h-auto w-[74px] lg:w-[76px]"
          />

          <div className="hidden lg:block">
            <div className="text-[13px] font-semibold uppercase tracking-[0.34em] text-white/92">
              Webbitis
            </div>

            <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/34">
              Digital Presence Studio
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          <Link
            href="/"
            className="group relative text-[12px] font-medium uppercase tracking-[0.22em] text-white/82 transition duration-300"
          >
            <span className="relative bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_100%)] bg-clip-text text-transparent transition duration-300 group-hover:bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_35%,#b8328a_70%,#7a1d63_100%)]">
              Home
            </span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_45%,#b8328a_100%)] transition-all duration-300 group-hover:w-full" />
          </Link>

  <div className="group relative flex h-full items-center">
  <Link
    href="/services"
    className="relative flex h-20 items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-white/82 transition duration-300"
  >
    <span className="relative bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_100%)] bg-clip-text text-transparent transition duration-300 group-hover:bg-[linear-gradient(90deg,#ffffff_0%,#f5d0e8_18%,#e86ac6_46%,#b8328a_74%,#ffffff_100%)]">
      Services
    </span>

    <ChevronDown className="h-4 w-4 text-white/42 transition duration-300 group-hover:rotate-180 group-hover:text-[#f1bfdc]" />

    <span className="absolute bottom-[18px] left-0 h-px w-0 bg-[linear-gradient(90deg,#ffffff_0%,#f3bfdc_28%,#e86ac6_60%,transparent_100%)] transition-all duration-500 group-hover:w-full" />
  </Link>

  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[500px] -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
    <div className="translate-y-0 scale-[0.985] transition-all duration-300 group-hover:scale-100">
      <div className="overflow-hidden border border-t-0 border-[rgba(232,106,198,0.16)] bg-[linear-gradient(180deg,rgba(7,17,39,0.99)_0%,rgba(2,10,30,0.98)_100%)] shadow-[0_36px_90px_rgba(0,0,0,0.55)] backdrop-blur-3xl">

        <div className="relative border-b border-white/8 px-6 py-4 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(232,106,198,0.14),transparent_44%),radial-gradient(circle_at_top_left,rgba(95,143,255,0.08),transparent_40%)] before:content-['']">
          <div className="relative flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-[#f1bfdc]">
                Premium Services
              </div>

              <div className="mt-2 max-w-[300px] text-sm leading-7 text-white/62">
                Refined digital solutions for businesses that want a more valuable first impression.
              </div>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#f1bfdc] lg:flex">
              ✦
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          {serviceItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group/item relative overflow-hidden border-white/6 px-6 py-5 transition duration-300 ${
                index % 2 === 0 ? "border-r" : ""
              } ${
                index < serviceItems.length - 2 ? "border-b" : ""
              } hover:bg-white/[0.03]`}
            >
              <span className="absolute inset-0 opacity-0 transition duration-500 group-hover/item:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,106,198,0.12),transparent_55%)]" />
              </span>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-[#e8bfd7] transition duration-300 group-hover/item:text-white">
                    {item.label}
                  </div>

                  <div className="mt-3 max-w-[180px] text-sm leading-6 text-white/62 transition duration-300 group-hover/item:text-white/78">
                    {item.desc}
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] transition duration-300 group-hover/item:border-[rgba(232,106,198,0.28)] group-hover/item:bg-[rgba(232,106,198,0.10)]">
                  <ArrowUpRight className="h-4 w-4 text-white/36 transition duration-300 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-[#f1bfdc]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-white/8 bg-[rgba(255,255,255,0.02)] px-6 py-4">
          <Link
            href="/services"
            className="group/all inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/56 transition duration-300 hover:text-white"
          >
            View All Services

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover/all:border-[rgba(232,106,198,0.28)] group-hover/all:bg-[rgba(232,106,198,0.08)]">
              <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover/all:-translate-y-0.5 group-hover/all:translate-x-0.5 group-hover/all:text-[#f1bfdc]" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
<Link
  href="/portfolio"
  className="group relative text-[12px] font-medium uppercase tracking-[0.22em] text-white/82 transition duration-300"
>
  <span className="relative bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_100%)] bg-clip-text text-transparent transition duration-300 group-hover:bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_35%,#b8328a_70%,#7a1d63_100%)]">
    Portfolio
  </span>

  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_45%,#b8328a_100%)] transition-all duration-300 group-hover:w-full" />
</Link>

          <Link
            href="/about"
            className="group relative text-[12px] font-medium uppercase tracking-[0.22em] text-white/82 transition duration-300"
          >
            <span className="relative bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_100%)] bg-clip-text text-transparent transition duration-300 group-hover:bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_35%,#b8328a_70%,#7a1d63_100%)]">
              About
            </span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_45%,#b8328a_100%)] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/#faq"
            className="group relative text-[12px] font-medium uppercase tracking-[0.22em] text-white/82 transition duration-300"
          >
            <span className="relative bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_100%)] bg-clip-text text-transparent transition duration-300 group-hover:bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_35%,#b8328a_70%,#7a1d63_100%)]">
              FAQ
            </span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_45%,#b8328a_100%)] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            href="/#contact"
            className="group relative text-[12px] font-medium uppercase tracking-[0.22em] text-white/82 transition duration-300"
          >
            <span className="relative bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_100%)] bg-clip-text text-transparent transition duration-300 group-hover:bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_35%,#b8328a_70%,#7a1d63_100%)]">
              Contact
            </span>
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[linear-gradient(90deg,#f7c2e8_0%,#e86ac6_45%,#b8328a_100%)] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.05] text-[#f1bfdc] transition duration-300 hover:border-[rgba(232,106,198,0.22)] hover:bg-white/[0.08] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

<div className="hidden xl:flex items-center pl-4">
  <a
    href="tel:+37441777905"
    className="group flex h-12 items-center border-l border-white/10 pl-4 text-white/78 transition duration-300 hover:text-white"
  >
    <div className="leading-none">
      <div className="text-[9px] uppercase tracking-[0.22em] text-white/38">
        Call Us
      </div>
      <div className="mt-1 text-[14px] font-semibold tracking-[0.06em]">
        +374 41 777 905
      </div>
    </div>
  </a>
</div>
          <Link
            href="/#contact"
            className="hidden min-h-[50px] items-center justify-center border border-[rgba(232,106,198,0.30)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_50%,#e86ac6_100%)] px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(184,50,138,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(232,106,198,0.38)] lg:inline-flex"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {menuOpen && (
      <div className="absolute left-4 right-4 top-[88px] max-h-[calc(100vh-104px)] overflow-y-auto border border-[rgba(232,106,198,0.16)] bg-[linear-gradient(180deg,#071127_0%,#020a1e_100%)] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:hidden">
      <div className="flex flex-col gap-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[rgba(232,106,198,0.22)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} className="text-[#f1bfdc]" />
              </Link>
            ))}

            <div className="mt-2 border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[#f1bfdc]">
                Services
              </div>

              <div className="mt-3 flex flex-col gap-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border border-white/6 bg-white/[0.02] px-3 py-3 text-sm text-white/82 transition duration-300 hover:bg-white/[0.05]"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="text-[#f1bfdc]" />
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex min-h-[52px] items-center justify-center border border-[rgba(232,106,198,0.30)] bg-[linear-gradient(135deg,#7a1d63_0%,#b8328a_50%,#e86ac6_100%)] px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

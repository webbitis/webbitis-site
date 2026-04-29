import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
  <footer className="relative overflow-hidden border-t border-[rgba(232,106,198,0.10)] bg-[linear-gradient(180deg,#071127_0%,#020a1e_100%)] py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(95,143,255,0.10),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(232,106,198,0.10),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.03),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]" />

        <div className="relative mx-auto max-w-[1380px] px-5 lg:px-8">
          <div className="mb-12 border border-white/8 bg-white/[0.03] px-5 py-6 lg:px-7">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-[12px] uppercase tracking-[0.18em] text-white/38">
                  Webbitis
                </div>
                <div className="mt-2 text-[clamp(1.7rem,2.6vw,2.8rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white">
                  For brands that want to look sharper online.
                </div>
              </div>

              <Link
  href="/#contact"
  className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-white/10 bg-white/[0.05] px-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[rgba(232,106,198,0.24)] hover:bg-white/[0.08]"
>
  Start a Project
  <ArrowUpRight size={15} />
</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-10">
            <div>
              <div className="flex items-center gap-4">
                <Image src="/images/webbitis/logo.svg"   alt="Webbitis logo – premium web design, SEO and AI solutions"
                  width={200}
                  height={200}
                  className="h-auto w-[200px] lg:w-[200px]"
                />
               
              </div>

              <p className="mt-6 max-w-[520px] text-[15px] leading-8 text-white/62">
                Premium digital experiences for modern businesses, brands, and
                events. Websites, automation, invitations, and AI-powered
                features designed with clarity, presence, and purpose.
              </p>

              <div className="mt-6 h-px w-24 bg-[linear-gradient(90deg,#e86ac6,transparent)]" />
            </div>

            <div>
              <div className="mb-5 text-[12px] uppercase tracking-[0.22em] text-white">
                Navigation
              </div>

              <div className="flex flex-col gap-3">
                {[
  ["Home", "/"],
  ["Services", "/services"],
  ["Web Design", "/services/web-design"],
  ["Web Invitations", "/services/web-invitations"],
  ["SEO", "/services/seo"],
  ["Website Redesign", "/services/website-redesign"],
  ["Workflow Automation", "/services/workflow-automation"],
  ["AI Integration", "/services/ai-integration"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["FAQ", "/#faq"],
  ["Contact", "/#contact"],
].map(([label, href]) => (
  <Link
    key={label}
    href={href}
    className="text-[14px] uppercase tracking-[0.14em] text-white/64 transition duration-300 hover:translate-x-1 hover:text-[#f1bfdc]"
  >
    {label}
  </Link>
))}
               
              </div>
            </div>

            <div>
              <div className="mb-5 text-[12px] uppercase tracking-[0.22em] text-white">
                Contact
              </div>
              
 

  

  

              <div className="flex flex-col gap-3 text-[14px] uppercase tracking-[0.12em] text-white/64">
                
 <a
    href="tel:+3741777905"
    className="block transition duration-300 hover:text-white"
  >
    +374 41 777 905  </a>
               

                <span>Yerevan, Armenia</span>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="text-[13px] text-white/38">
              © 2026 WebBitis. All rights reserved.
            </div>

            <div className="text-[13px] uppercase tracking-[0.18em] text-white/34">
              Designing presence. Building clarity.
            </div>
          </div>
        </div>
      </footer>
       );
}
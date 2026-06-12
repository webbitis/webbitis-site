import Link from "next/link";

const partnerLinks = [
  { href: "/partners", label: "Partner Program" },
  { href: "/partner-materials", label: "Sales Materials" },
  { href: "/partner-scripts", label: "Scripts" },
  { href: "/prices", label: "Prices" },
  { href: "/submit-lead", label: "Submit Lead", primary: true },
];

export default function PartnerNav() {
  return (
    <div className="mx-auto mb-12 max-w-6xl px-6">
  <div className="flex flex-wrap gap-4">
        {partnerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
  link.primary
    ? "inline-flex h-14 items-center justify-center border border-[#E86AC6] bg-[#E86AC6] px-10 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_0_30px_rgba(232,106,198,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(232,106,198,0.4)]"
    : "inline-flex h-14 items-center justify-center border border-white/10 bg-white/[0.05] px-10 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 transition hover:border-[#E86AC6]/40 hover:bg-[#E86AC6]/10 hover:text-white"
}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
import Link from "next/link";

const partnerLinks = [
  { href: "/partners", label: "Partner Program" },
  { href: "/partner-materials", label: "Sales Materials" },
  { href: "/partner-scripts", label: "Scripts" },
  { href: "/prices", label: "Prices" },
  { href: "/submit-lead", label: "Submit Lead", primary: true },
];

type PartnerNavProps = {
  theme?: "dark" | "light";
};

export default function PartnerNav({ theme = "dark" }: PartnerNavProps) {
  const isLight = theme === "light";

  const base =
    "inline-flex h-11 items-center justify-center px-6 text-center text-xs font-semibold uppercase tracking-[0.12em] transition sm:h-12 sm:px-7 sm:text-sm";

  const primary =
    "border border-[#E86AC6] bg-[#E86AC6] text-white shadow-[0_0_24px_rgba(232,106,198,0.22)] hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(232,106,198,0.35)]";

  const light =
    "border border-slate-300 bg-white text-slate-800 shadow-sm hover:border-[#E86AC6] hover:bg-[#E86AC6]/10";

  const dark =
    "border border-white/10 bg-white/[0.05] text-white/80 hover:border-[#E86AC6]/40 hover:bg-[#E86AC6]/10 hover:text-white";

  return (
    <div className="mx-auto mb-10 max-w-6xl px-6">
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        {partnerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${base} ${
              link.primary ? primary : isLight ? light : dark
            } w-full max-w-[260px] sm:w-auto sm:min-w-[150px]`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
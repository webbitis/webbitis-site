import Link from "next/link";
import PartnerNav from "../components/PartnerNav";
const services = [
  {
    title: "Webi AI Assistant",
    desc: "AI օգնական, որը պատասխանում է հաճախորդների հարցերին, հավաքում է լիդեր և աշխատում է 24/7։",
    am: "Հայաստան՝ սկսած $299",
    intl: "Միջազգային՝ սկսած $999",
  },
  {
    title: "Website + AI",
    desc: "Ժամանակակից կայք + Webi AI օգնական՝ հաճախորդների հարցումները չկորցնելու համար։",
    am: "Հայաստան՝ սկսած $1500",
    intl: "Միջազգային՝ սկսած $3500",
  },
  {
    title: "Lead Generation System",
    desc: "Landing page, ֆորմաներ, AI օգնական և ավտոմատ ծանուցումներ՝ նոր հարցումներ ստանալու համար։",
    am: "Հայաստան՝ սկսած $800",
    intl: "Միջազգային՝ սկսած $2000",
  },
  {
    title: "Business Automation",
    desc: "CRM, Email, Telegram և workflow ավտոմատացումներ՝ կրկնվող աշխատանքները նվազեցնելու համար։",
    am: "Գին՝ ըստ նախագծի",
    intl: "Custom pricing",
  },
];

const clients = [
  "Բժշկական կենտրոններ",
  "Ստոմատոլոգիաներ",
  "Գեղեցկության սրահներ",
  "Իրավաբանական գրասենյակներ",
  "Անշարժ գույքի ընկերություններ",
  "Շինարարական ընկերություններ",
  "Կրթական կենտրոններ",
  "Տուրիստական ընկերություններ",
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#071327] text-white">
        
      <section className="relative overflow-hidden px-6 py-12 md:px-12 lg:px-12">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e86ac633,transparent_35%),radial-gradient(circle_at_bottom_left,#4f46e533,transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl">
          <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
            Webbitis Partner Program
          </span>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Աճեք Webbitis-ի հետ և վաստակեք յուրաքանչյուր հաջողված գործարքից
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Օգնեք բիզնեսներին ստանալ ավելի շատ հաճախորդներ ժամանակակից կայքերի,
            AI օգնականների և ավտոմատացման միջոցով։
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#apply"
              className="rounded-full bg-[#E86AC6] px-8 py-4 text-center font-medium text-white shadow-lg shadow-pink-500/20 transition hover:opacity-90"
            >
              Դառնալ գործընկեր
            </Link>

            <Link
              href="#services"
              className="rounded-full border border-white/20 px-8 py-4 text-center font-medium text-white/90 transition hover:bg-white/10"
            >
              Տեսնել ծառայությունները
            </Link>
            


          </div>
        </div>
        
      </section>

      <section id="services" className="px-6 py-12 md:px-12 lg:px-15">
          <PartnerNav /> 
        
        <div className="mx-auto max-w-6xl">
         
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ինչ ենք վաճառում
          </h2>

          <p className="mt-4 max-w-2xl text-white/65">
            Մեր հիմնական առաջարկը ոչ թե պարզապես կայք է, այլ բիզնեսի համար
            ավելի արագ պատասխան, ավելի շատ հարցումներ և ավելի լավ վստահություն։
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/65">{service.desc}</p>

                <div className="mt-6 space-y-2 text-sm">
                  <p className="rounded-full bg-white/10 px-4 py-2 text-white/85">
                    {service.am}
                  </p>
                  <p className="rounded-full bg-white/10 px-4 py-2 text-white/85">
                    {service.intl}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-2xl font-semibold">Referral Partner</h3>
            <p className="mt-3 text-white/65">
              Դուք ծանոթացնում եք հաճախորդին, մենք վարում ենք վաճառքը։
            </p>
            <p className="mt-6 text-4xl font-semibold text-[#E86AC6]">10%</p>
          </div>

          <div className="rounded-3xl border border-[#E86AC6]/40 bg-[#E86AC6]/10 p-7">
            <h3 className="text-2xl font-semibold">Sales Partner</h3>
            <p className="mt-3 text-white/65">
              Դուք գտնում եք հաճախորդին, կազմակերպում հանդիպում և մասնակցում վաճառքին։
            </p>
            <p className="mt-6 text-4xl font-semibold text-[#E86AC6]">15%</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-2xl font-semibold">Strategic Partner</h3>
            <p className="mt-3 text-white/65">
              Մեծ կամ երկարաժամկետ նախագծերի դեպքում պայմանները քննարկվում են առանձին։
            </p>
            <p className="mt-6 text-4xl font-semibold text-[#E86AC6]">20%</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Իդեալական հաճախորդներ
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white/80"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:px-12 lg:px-24">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-semibold md:text-4xl">
      Ինչ խնդիրներ ենք լուծում
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
        <h3 className="text-2xl font-semibold text-red-300">
          Առանց Webbitis
        </h3>

        <ul className="mt-6 space-y-3 text-white/70">
          <li>❌ Կորցրած հարցումներ</li>
          <li>❌ Ուշ պատասխաններ</li>
          <li>❌ Հին կայք</li>
          <li>❌ Ցածր վստահություն</li>
          <li>❌ Ձեռքով աշխատանք</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8">
        <h3 className="text-2xl font-semibold text-green-300">
          Webbitis-ի հետ
        </h3>

        <ul className="mt-6 space-y-3 text-white/70">
          <li>✅ Ավելի շատ հարցումներ</li>
          <li>✅ 24/7 պատասխաններ</li>
          <li>✅ Պրոֆեսիոնալ ներկայություն</li>
          <li>✅ AI օգնական</li>
          <li>✅ Ավտոմատացված գործընթացներ</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="px-6 py-20 md:px-12 lg:px-24">
  <div className="mx-auto max-w-5xl">
    <h2 className="text-3xl font-semibold">
      Վաճառքի հիմնական ուղերձ
    </h2>

    <div className="mt-8 rounded-3xl border border-[#E86AC6]/20 bg-[#E86AC6]/5 p-8">
      <p className="text-xl leading-9 text-white/90">
        Մենք օգնում ենք բիզնեսներին ավելի արագ պատասխանել
        հաճախորդներին, չկորցնել հարցումները և ստանալ ավելի
        շատ լիդեր ժամանակակից կայքերի, AI օգնականների և
        ավտոմատացման միջոցով։
      </p>
    </div>
  </div>
</section>
<section className="px-6 py-20 md:px-12 lg:px-24">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-3xl font-semibold">
      Հաճախ հանդիպող առարկություններ
    </h2>

    <div className="mt-10 space-y-6">
      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="font-semibold text-[#E86AC6]">
          «Մեզ կայք պետք չէ»
        </h3>

        <p className="mt-3 text-white/70">
          Շատ հաճախ խնդիրը կայքը չէ։
          Խնդիրը կորցրած հարցումներն են։
          Մենք օգնում ենք բիզնեսներին ավելի շատ հաճախորդներ ստանալ։
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="font-semibold text-[#E86AC6]">
          «Թանկ է»
        </h3>

        <p className="mt-3 text-white/70">
          Մեկ նոր հաճախորդը հաճախ ծածկում է ամբողջ ներդրումը։
          Մենք կենտրոնանում ենք ներդրման վերադարձի վրա։
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="font-semibold text-[#E86AC6]">
          «Մենք արդեն կայք ունենք»
        </h3>

        <p className="mt-3 text-white/70">
          Շատ ընկերություններ ունեն կայք,
          բայց այն չի բերում հաճախորդներ։
          Կարևոր է արդյունքը, ոչ թե կայքի գոյությունը։
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="apply" className="px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.05] p-8 md:p-12">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ցանկանո՞ւմ եք համագործակցել Webbitis-ի հետ
          </h2>

          <p className="mt-4 text-white/65">
            Ուղարկեք մեզ ձեր տվյալները, և մենք կկապվենք Ձեզ հետ՝ համագործակցության
            պայմանները քննարկելու համար։
          </p>

          <form className="mt-8 grid gap-4">
            <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40" placeholder="Անուն Ազգանուն" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40" placeholder="Email" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40" placeholder="Հեռախոս" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40" placeholder="LinkedIn հղում" />
            <textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-white/40" placeholder="Ձեր փորձը վաճառքի կամ business development ոլորտում" />

            <button
              type="button"
              className="mt-4 rounded-full bg-[#E86AC6] px-8 py-4 font-medium text-white transition hover:opacity-90"
            >
              Ուղարկել հայտը
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
import PartnerNav from "../components/PartnerNav";
export default function PartnerMaterialsPage() {
  return (
    <main className="min-h-screen bg-[#071327] text-white">

      <section className="px-1 py-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">

          <span className="rounded-full bg-[#E86AC6]/10 border border-[#E86AC6]/20 px-4 py-2 text-sm">
            Webbitis Partner Materials
          </span>

          <h1 className="mt-6 text-5xl font-semibold">
            Sales Resources
          </h1>

          <p className="mt-4 max-w-3xl text-white/70">
            Այն ամենը, ինչ անհրաժեշտ է Webbitis ծառայությունները
            ներկայացնելու և վաճառելու համար։
          </p>

        </div>
      </section>
      <PartnerNav />

      {/* Elevator Pitch */}

      <section className="px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-semibold">
            30 Վայրկյանանոց Ներկայացում
          </h2>

          <div className="mt-8 rounded-3xl border border-[#E86AC6]/20 bg-[#E86AC6]/5 p-8">

            <p className="text-xl leading-9">
              Webbitis-ը օգնում է բիզնեսներին ստանալ ավելի շատ
              հաճախորդներ ժամանակակից կայքերի, AI օգնականների և
              ավտոմատացման միջոցով։
              Մեր լուծումները թույլ են տալիս չկորցնել հարցումները,
              արագ պատասխանել հաճախորդներին և խնայել ժամանակ։
            </p>

          </div>
        </div>
      </section>

      {/* Discovery Questions */}

      <section className="px-6 py-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-semibold">
            Discovery Questions
          </h2>

          <div className="mt-8 grid gap-4">

            {[
              "Ինչպե՞ս են հաճախորդները կապվում Ձեզ հետ",
              "Որքա՞ն արագ եք պատասխանում հարցումներին",
              "Ունե՞ք կայք",
              "Գոհ ե՞ք ներկայիս կայքից",
              "Հաճախորդների հարցումներ կորցնո՞ւմ եք",
              "Օգտագործու՞մ եք CRM",
              "Ունե՞ք ավտոմատացված գործընթացներ",
              "Քանի՞ հարցում եք ստանում ամսական",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-5"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Packages */}

      <section className="px-6 py-12 md:px-12 lg:px-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-semibold">
            Recommended Packages
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold">
                Webi AI Assistant
              </h3>

              <p className="mt-4 text-white/70">
                24/7 AI օգնական
              </p>

              <p className="mt-6 text-[#E86AC6] font-semibold text-xl">
                $299+
              </p>
            </div>

            <div className="rounded-3xl border border-[#E86AC6]/30 bg-[#E86AC6]/5 p-8">
              <h3 className="text-2xl font-semibold">
                Website + AI
              </h3>

              <p className="mt-4 text-white/70">
                Ամենապահանջված առաջարկը
              </p>

              <p className="mt-6 text-[#E86AC6] font-semibold text-xl">
                $1500+
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Objections */}

      <section className="px-6 py-12 md:px-12 lg:px-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-semibold">
            Objection Handling
          </h2>

          <div className="mt-8 space-y-6">

            <div className="rounded-3xl border border-white/10 p-6">
              <h3 className="text-[#E86AC6] font-semibold">
                Թանկ է
              </h3>

              <p className="mt-3 text-white/70">
                Մեկ նոր հաճախորդը հաճախ ծածկում է ամբողջ ներդրումը։
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-6">
              <h3 className="text-[#E86AC6] font-semibold">
                Մենք արդեն կայք ունենք
              </h3>

              <p className="mt-3 text-white/70">
                Հարցը կայքի առկայությունը չէ,
                այլ այն, թե որքան հաճախորդ է բերում։
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-6">
              <h3 className="text-[#E86AC6] font-semibold">
                Մեզ AI պետք չէ
              </h3>

              <p className="mt-3 text-white/70">
                AI-ը նպատակ չէ։
                Այն պարզապես օգնում է արագ պատասխանել
                և չկորցնել հարցումները։
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-24">
  <div className="mx-auto max-w-6xl">

    <h2 className="text-3xl font-semibold">
      Ideal Clients
    </h2>

    <div className="mt-8 grid gap-6 md:grid-cols-2">

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="text-xl font-semibold text-[#E86AC6]">
          Clinics & Dentists
        </h3>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Հին կայք</li>
          <li>• Online booking չկա</li>
          <li>• Instagram-ից շատ հարցեր</li>
          <li>• AI օգնական չունեն</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="text-xl font-semibold text-[#E86AC6]">
          Law Firms
        </h3>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Կայքը վստահություն չի ներշնչում</li>
          <li>• Consultation request system չկա</li>
          <li>• SEO թույլ է</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="text-xl font-semibold text-[#E86AC6]">
          Real Estate
        </h3>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Property catalog չկա</li>
          <li>• Lead management չկա</li>
          <li>• Հին դիզայն</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="text-xl font-semibold text-[#E86AC6]">
          Hotels & Tourism
        </h3>

        <ul className="mt-4 space-y-2 text-white/70">
          <li>• Booking system չկա</li>
          <li>• Հին կայք</li>
          <li>• Շատ կրկնվող հարցեր</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="px-6 py-12 md:px-12 lg:px-24">
  <div className="mx-auto max-w-6xl">

    <h2 className="text-3xl font-semibold">
      What To Sell
    </h2>

    <div className="mt-8 space-y-6">

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="text-[#E86AC6] font-semibold">
          Website Redesign
        </h3>

        <p className="mt-3 text-white/70">
          Ամենահեշտ վաճառվող ծառայությունը։
          Եթե կայքը հին է կամ ոչ պրոֆեսիոնալ տեսք ունի,
          առաջարկեք Website Redesign։
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="text-[#E86AC6] font-semibold">
          Website + Webi
        </h3>

        <p className="mt-3 text-white/70">
          Webbitis-ի հիմնական առաջարկը։
          Կայքը ներկայացնում է բիզնեսը,
          Webi-ն օգնում է չկորցնել հարցումները։
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 p-6">
        <h3 className="text-[#E86AC6] font-semibold">
          Business Automation
        </h3>

        <p className="mt-3 text-white/70">
          Հարմար է այն բիզնեսների համար,
          որոնք շատ ժամանակ են ծախսում ձեռքով գործընթացների վրա։
        </p>
      </div>

    </div>

  </div>
</section>


<section className="px-6 py-12 md:px-12 lg:px-24">
  <div className="mx-auto max-w-6xl">

    <h2 className="text-3xl font-semibold">
      First Message Templates
    </h2>

    <div className="mt-8 rounded-3xl border border-[#E86AC6]/20 bg-[#E86AC6]/5 p-8">

      <p className="leading-8 text-white/80">
        Բարև,

        Նայեցի ձեր կայքը և նկատեցի մի քանի հնարավոր բարելավումներ,
        որոնք կարող են օգնել ավելի պրոֆեսիոնալ ներկայացնել բիզնեսը
        և ստանալ ավելի շատ հարցումներ։

        Webbitis-ում մենք զբաղվում ենք ժամանակակից կայքերի,
        AI օգնականների և ավտոմատացման լուծումների մշակմամբ։

        Եթե հետաքրքիր է, կարող եմ ուղարկել մի քանի գաղափար
        հենց ձեր բիզնեսի համար։
      </p>

    </div>

  </div>
</section>

      {/* Commission Calculator */}

      <section className="px-6 py-12 md:px-12 lg:px-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-semibold">
            Commission Examples
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 p-8">
              <p className="text-white/70">
                Project
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                $1,500
              </h3>

              <p className="mt-4 text-[#E86AC6]">
                Commission: $150
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <h3 className="text-3xl font-semibold">
                $3,000
              </h3>

              <p className="mt-4 text-[#E86AC6]">
                Commission: $300
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 p-8">
              <h3 className="text-3xl font-semibold">
                $5,000
              </h3>

              <p className="mt-4 text-[#E86AC6]">
                Commission: $500
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
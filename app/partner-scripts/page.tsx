import PartnerNav from "../components/PartnerNav";
import CopyButton from "../components/CopyButton";

const scripts = [
  {
    title: "Առաջին հաղորդագրություն",
    hy: `Բարև Ձեզ։

Ծանոթացա Ձեր ընկերության գործունեությանը և որոշեցի կապ հաստատել։

Մենք Webbitis-ում օգնում ենք բիզնեսներին զարգացնել իրենց առցանց ներկայությունը՝ ժամանակակից կայքերի, AI օգնականների և ավտոմատացման լուծումների միջոցով։

Կցանկանայի հասկանալ՝ արդյոք այս պահին հետաքրքրված եք նման լուծումներով։`,
    en: `Hi,

I came across your business and wanted to reach out.

At Webbitis, we help businesses improve their online presence through modern websites, AI assistants, and automation solutions.

Would you be interested in exploring how these solutions could support your business?`,
  },
  {
    title: "Եթե կայք չունեն",
    hy: `Բարև Ձեզ։

Նկատեցի, որ Ձեր բիզնեսը ներկայումս չունի պաշտոնական կայք։

Այսօր շատ հաճախորդներ նախ որոնում են ընկերության մասին տեղեկություններ Google-ում և միայն հետո են կապ հաստատում։

Կարծում եմ կարող ենք քննարկել, թե ինչպես կայքը կարող է օգնել Ձեր բիզնեսին ավելի վստահելի ներկայանալ և ներգրավել նոր հաճախորդներ։`,
    en: `Hi,

I noticed that your business does not currently have an official website.

Today, many customers search for a company online before contacting it.

I believe we could discuss how a professional website can help your business build trust and attract new customers.`,
  },
  {
    title: "Եթե կայքը հին է",
    hy: `Բարև Ձեզ։

Ծանոթացա Ձեր կայքին և նկատեցի, որ այն հնարավոր է արդիականացման կարիք ունի։

Այսօր արագությունը, բջջային տարբերակը և ժամանակակից տեսքը մեծ ազդեցություն ունեն հաճախորդների վստահության և դիմումների քանակի վրա։

Կցանկանայի հասկանալ՝ արդյոք դիտարկում եք կայքի թարմացման կամ վերամշակման տարբերակը։`,
    en: `Hi,

I had a look at your website and noticed that it may benefit from an update.

Today, website speed, mobile experience, and modern design have a strong impact on customer trust and inquiries.

Would you be open to discussing a website refresh or redesign?`,
  },
  {
    title: "AI օգնականի առաջարկ",
    hy: `Բարև Ձեզ։

Հաճախ բիզնեսները կորցնում են հաճախորդներ, քանի որ հաղորդագրություններին կամ մեկնաբանություններին չեն հասցնում արագ պատասխանել։

Մենք առաջարկում ենք AI օգնականներ, որոնք կարող են պատասխանել հաճախորդների հարցերին 24/7 ռեժիմով և փոխանցել տաք լիդերը Ձեր թիմին։

Կարծում եմ այս լուծումը կարող է հետաքրքիր լինել Ձեր բիզնեսի համար։`,
    en: `Hi,

Many businesses lose potential customers because they cannot respond quickly to messages or comments.

We offer AI assistants that can answer customer questions 24/7 and forward warm leads to your team.

I believe this solution could be useful for your business.`,
  },
];

export default function PartnerScriptsPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FF] text-[#0B0B1E]">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <PartnerNav />

        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E86AC6]">
            Webbitis Partner Materials
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            Sales Scripts
          </h1>
          <p className="text-base leading-7 text-slate-600 md:text-lg">
            Օգտագործեք այս հաղորդագրությունները LinkedIn-ում, email-ում,
            Facebook-ում կամ Instagram-ում պոտենցիալ հաճախորդների հետ կապ
            հաստատելու համար։
          </p>
        </div>

        <div className="grid gap-6">
          {scripts.map((script) => (
            <div
              key={script.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-6 text-2xl font-semibold">{script.title}</h2>

              <div className="grid gap-8 xl:grid-cols-2">
  <div>
    <div className="mb-3 flex items-center justify-between">
      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7B61FF]">
        Հայերեն
      </div>

      <CopyButton text={script.hy} />
    </div>

    <div className="whitespace-pre-line rounded-2xl bg-[#F6F8FF] p-5 text-base leading-8 text-slate-700">
      {script.hy}
    </div>
  </div>

  <div>
    <div className="mb-3 flex items-center justify-between">
      <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7B61FF]">
        English
      </div>

      <CopyButton text={script.en} />
    </div>

    <div className="whitespace-pre-line rounded-2xl bg-[#F6F8FF] p-5 text-sm leading-7 text-slate-700">
      {script.en}
    </div>
  </div>
</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
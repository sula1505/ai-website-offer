import { useMemo, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

type Lang = "ka" | "en";

type Content = {
  badge: string;
  heroTitle: string;
  heroText1: string;
  heroText2: string;
  ctaPrimary: string;
  ctaSecondary: string;
  whyTitle: string;
  whyCards: { title: string; lines: string[] }[];
  businessTitle: string;
  businessPoints: string[];
  processTitle: string;
  process: string[];
  phoneLabel: string;
  emailLabel: string;
};

export default function AIWebsiteOfferPage() {
  const [lang, setLang] = useState<Lang>("ka");

  const content = useMemo<Record<Lang, Content>>(
    () => ({
      ka: {
        badge: "AI Website",
        heroTitle: "მომავლის საიტი თქვენი ბიზნესისთვის",
        heroText1:
          "AI-assisted development პროცესი საშუალებას გვაძლევს ვებ-საიტები შევქმნათ უფრო სწრაფად და ეფექტურად.",
        heroText2: "სწრაფი პროცესი. ხარისხიანი შედეგი.",
        ctaPrimary: "დამიკავშირდით",
        ctaSecondary: "როგორ ვმუშაობთ",
        whyTitle: "რატომ AI-ის დახმარებით შექმნილი ვებსაიტი",
        whyCards: [
          {
            title: "სისწრაფე",
            lines: ["ტრადიციული პროცესი: 4–8 კვირა", "AI ტექნოლოგიით: 2–10 დღე"],
          },
          {
            title: "ღირებულება",
            lines: ["ნაკლები სამუშაო საათები", "ნაკლები რესურსი", "ხელმისაწვდომი ფასი"],
          },
          {
            title: "მოქნილობა",
            lines: [
              "სწრაფად განახლებადი კონტენტი",
              "დიზაინის მარტივი ცვლილება",
              "ახალი ფუნქციების დამატება",
            ],
          },
          {
            title: "უსაფრთხოება და ხარისხი",
            lines: [
              "კოდის ოპტიმიზაცია",
              "საიტის სიჩქარის გაუმჯობესება",
              "ტექნიკური შეცდომების სწრაფი გამოვლენა",
            ],
          },
        ],
        businessTitle: "საიტი ბიზნესს ეხმარება",
        businessPoints: [
          "სანდოობის გაზრდაში",
          "სერვისების უკეთ წარმოჩენაში",
          "მეტი მოთხოვნისა და კლიენტის მიღებაში",
          "ჯავშნებისა და შეკვეთების გამარტივებაში",
          "მონაცემების შეგროვებაში",
          "ბრენდის პროფესიონალურად წარმოჩენაში",
        ],
        processTitle: "როგორ ვმუშაობთ",
        process: [
          "საწყისი კონსულტაცია",
          "მოთხოვნების განსაზღვრა",
          "კონცეფცია და შეთავაზება",
          "დიზაინი და განვითარება",
          "ტესტირება და გაშვება",
          "შემდგომი მხარდაჭერა",
        ],
        phoneLabel: "WhatsApp",
        emailLabel: "ელფოსტა",
      },
      en: {
        badge: "AI Website",
        heroTitle: "A future-ready website for your business",
        heroText1:
          "AI-assisted development allows us to build websites faster and more efficiently.",
        heroText2: "Fast process. Quality result.",
        ctaPrimary: "Contact us",
        ctaSecondary: "How we work",
        whyTitle: "Why choose an AI-assisted website",
        whyCards: [
          {
            title: "Speed",
            lines: ["Traditional process: 4–8 weeks", "Built with AI: 2–10 days"],
          },
          {
            title: "Cost",
            lines: ["Fewer working hours", "Fewer resources", "More accessible price"],
          },
          {
            title: "Flexibility",
            lines: [
              "Fast content updates",
              "Easy design changes",
              "New features can be added",
            ],
          },
          {
            title: "Security & quality",
            lines: [
              "Code optimization",
              "Better website speed",
              "Faster detection of technical issues",
            ],
          },
        ],
        businessTitle: "A website helps a business",
        businessPoints: [
          "Build trust",
          "Present services better",
          "Get more inquiries and clients",
          "Make bookings and orders easier for customers",
          "Collect data",
          "Present the brand professionally",
        ],
        processTitle: "How we work",
        process: [
          "Initial consultation",
          "Defining requirements",
          "Concept and proposal",
          "Design and development",
          "Testing and launch",
          "Post-launch support",
        ],
        phoneLabel: "WhatsApp",
        emailLabel: "Email",
      },
    }),
    []
  );

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-[#1f2433]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(232,226,245,0.9),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(245,238,223,0.85),_transparent_28%),linear-gradient(180deg,#faf8f2_0%,#f7f5ef_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex items-center justify-end gap-4 rounded-3xl border border-[#e8e2d6] bg-white/80 px-4 py-3 shadow-[0_10px_30px_rgba(31,36,51,0.05)] backdrop-blur">
            <div className="flex rounded-2xl bg-[#f1ede4] p-1">
              <button
                onClick={() => setLang("ka")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  lang === "ka" ? "bg-white text-[#1f2433] shadow-sm" : "text-[#7b7f8d]"
                }`}
              >
                ქართული
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  lang === "en" ? "bg-white text-[#1f2433] shadow-sm" : "text-[#7b7f8d]"
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="inline-flex rounded-full border border-[#e7e0d3] bg-white px-4 py-2 text-sm font-semibold text-[#6d7382] shadow-sm">
              {t.badge}
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-[-0.03em] text-[#232838] md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#666c7b]">{t.heroText1}</p>
            <p className="mt-3 text-2xl font-semibold text-[#59607a]">{t.heroText2}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-[#232838] px-6 py-3 text-base font-bold text-white shadow-[0_12px_30px_rgba(35,40,56,0.14)] transition hover:scale-[1.02]"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#process"
                className="rounded-2xl border border-[#e7e0d3] bg-white px-6 py-3 text-base font-semibold text-[#32384a] transition hover:bg-[#fcfbf8]"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative shadow-[0_20px_50px_rgba(31,36,51,0.06)] backdrop-blur">
            <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#6b82ff_0%,#96a6ff_32%,#c9bdf0_68%,#e6dbef_100%)] p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_28%)]" />

              <div className="relative overflow-hidden rounded-[24px] border border-white/12 bg-[#202532]/94 shadow-[0_18px_40px_rgba(18,22,33,0.22)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                  </div>
                  <div className="h-3 w-28 rounded-full bg-white/10" />
                </div>

                <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
                  <div className="border-r border-white/8 bg-[linear-gradient(180deg,rgba(98,121,255,0.18)_0%,rgba(98,121,255,0.06)_100%)] p-5">
                    <div className="rounded-[22px] bg-white/6 p-4 backdrop-blur-sm">
                      <div className="h-3 w-20 rounded-full bg-white/20" />
                      <div className="mt-4 h-9 w-4/5 rounded-2xl bg-white/88" />
                      <div className="mt-3 h-4 w-full rounded-full bg-white/18" />
                      <div className="mt-2 h-4 w-5/6 rounded-full bg-white/12" />

                      <div className="mt-8 grid gap-3">
                        <div className="rounded-2xl bg-white/8 p-3">
                          <div className="h-3 w-16 rounded-full bg-white/20" />
                          <div className="mt-3 h-8 rounded-xl bg-white/82" />
                        </div>
                        <div className="rounded-2xl bg-white/8 p-3">
                          <div className="h-3 w-20 rounded-full bg-white/20" />
                          <div className="mt-3 h-8 w-5/6 rounded-xl bg-white/70" />
                        </div>
                        <div className="rounded-2xl bg-white/8 p-3">
                          <div className="h-3 w-14 rounded-full bg-white/20" />
                          <div className="mt-3 h-8 w-4/6 rounded-xl bg-white/60" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1d2230] p-5">
                    <div className="rounded-[22px] border border-white/8 bg-black/16 p-4 font-mono text-[12px] leading-6 text-white/84">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#8d6df7]" />
                        <div className="h-2 w-2 rounded-full bg-[#7d93ff]" />
                        <div className="h-2 w-2 rounded-full bg-[#b89cff]" />
                      </div>

                      <div className="space-y-2">
                        <div className="rounded-xl bg-white/5 px-3 py-2">
                          <span className="text-[#b89cff]">&lt;section</span>{" "}
                          <span className="text-[#7fb2ff]">className</span>=
                          <span className="text-[#d7c7ff]">&quot;hero&quot;</span>
                          <span className="text-[#b89cff]">&gt;</span>
                        </div>
                        <div className="rounded-xl bg-white/5 px-3 py-2 pl-6">
                          <span className="text-[#b89cff]">&lt;h1&gt;</span>
                          <span className="text-white/92">Website for your business</span>
                          <span className="text-[#b89cff]">&lt;/h1&gt;</span>
                        </div>
                        <div className="rounded-xl bg-white/5 px-3 py-2 pl-6">
                          <span className="text-[#b89cff]">&lt;p&gt;</span>
                          <span className="text-white/72">Fast process. Quality result.</span>
                          <span className="text-[#b89cff]">&lt;/p&gt;</span>
                        </div>
                        <div className="rounded-xl bg-white/5 px-3 py-2 pl-6">
                          <span className="text-[#b89cff]">&lt;button&gt;</span>
                          <span className="text-[#7fb2ff]">Contact</span>
                          <span className="text-[#b89cff]">&lt;/button&gt;</span>
                        </div>
                        <div className="rounded-xl bg-white/5 px-3 py-2">
                          <span className="text-[#b89cff]">&lt;/section&gt;</span>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-2">
                        <div className="h-3 w-full rounded-full bg-white/8" />
                        <div className="h-3 w-5/6 rounded-full bg-white/8" />
                        <div className="h-3 w-4/6 rounded-full bg-white/8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-[#ece6da] bg-[#faf8f2]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#232838] md:text-4xl">
            {t.whyTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[30px] border border-[#2a3144] bg-[#232b3d] p-6 shadow-[0_16px_40px_rgba(31,36,51,0.10)]"
              >
                <h3 className="min-h-[64px] text-xl font-bold leading-[1.3] text-white">
                  {card.title}
                </h3>
                <div className="mt-4 space-y-3 text-base leading-7 text-white/80">
                  {card.lines.map((line) => (
                    <div
                      key={line}
                      className="flex min-h-[88px] items-start rounded-2xl bg-white/6 px-4 py-4 font-medium"
                    >
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#faf8f2]">
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#232838] md:text-4xl">
              {t.businessTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.businessPoints.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-[#ece6da] bg-white px-5 py-5 text-lg font-medium text-[#474d5e] shadow-[0_12px_30px_rgba(31,36,51,0.04)]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative overflow-hidden bg-[#232838] text-white">
        <div className="pointer-events-none absolute inset-x-0 -top-28 h-48 rounded-[100%] bg-[#f7f5ef]" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-28 h-48 rounded-[100%] bg-[#f7f5ef]" />
        <div className="pointer-events-none absolute right-[-8%] top-10 h-[420px] w-[420px] rounded-full border border-dashed border-white/12" />
        <div className="pointer-events-none absolute right-[2%] top-24 h-[320px] w-[320px] rounded-full border border-dashed border-white/12" />
        <div className="pointer-events-none absolute right-[10%] top-40 h-[190px] w-[190px] rounded-full border border-dashed border-white/12" />
        <div className="pointer-events-none absolute left-[10%] bottom-16 h-56 w-56 rounded-full bg-[#6f5b86]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[18%] top-24 h-56 w-56 rounded-full bg-[#334a68]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
                PROCESS
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
                {t.processTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                {lang === "ka"
                  ? "მარტივი, მკაფიო და სწრაფი პროცესი — პირველი საუბრიდან საბოლოო გაშვებამდე."
                  : "A simple, clear, and fast process — from the first conversation to final launch."}
              </p>
            </div>

            <div className="relative">
              <div className="grid gap-4 md:grid-cols-2">
                {t.process.map((step, index) => (
                  <div
                    key={step}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 px-6 py-6 backdrop-blur-sm transition hover:bg-white/10"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] opacity-70" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-[#232838] shadow-[0_8px_20px_rgba(255,255,255,0.12)]">
                        {index + 1}
                      </div>
                      <div className="pt-2 text-lg font-semibold leading-7 text-white/92">
                        {step}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl rounded-[32px] border border-[#e7e0d3] bg-white p-8 text-[#1f2433] shadow-[0_20px_50px_rgba(31,36,51,0.05)]">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-3 text-xl font-bold text-[#232838]">{t.phoneLabel}</div>
                <a
                  href="https://wa.me/995593998893"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open WhatsApp"
                  className="flex items-center gap-4 text-[28px] font-bold tracking-tight text-[#232838] transition hover:opacity-80"
                >
                  <span className="rounded-2xl bg-[#f3eee3] p-3 text-[#6f7482]">
                    <MessageCircle className="h-7 w-7" />
                  </span>
                  <span>+995 593 99 88 93</span>
                </a>
              </div>

              <div>
                <div className="mb-3 text-xl font-bold text-[#232838]">{t.emailLabel}</div>
                <a
                  href="mailto:ellesuladze5@gmail.com"
                  className="flex items-center gap-4 break-all text-2xl font-bold tracking-tight text-[#232838] hover:opacity-80"
                >
                  <span className="rounded-2xl bg-[#f3eee3] p-3 text-[#6f7482]">
                    <Mail className="h-7 w-7" />
                  </span>
                  <span>ellesuladze5@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

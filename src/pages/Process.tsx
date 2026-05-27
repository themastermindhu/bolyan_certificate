import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, CheckCircle2, Clock, FileText, Shield, Users, Phone, Mail, MapPin } from 'lucide-react';

export default function Process() {
  const { t } = useLanguage();

  const processSteps = [
    {
      step: 1,
      title: t.process.steps[0].title,
      desc: t.process.steps[0].desc,
      icon: Phone,
      details: [
        'IngYenes első tanácsadás',
        'Személyes igényfelmérés',
        'Projekt átfogó értékelése',
        'Költségbecslés és időterv',
      ],
      duration: '1-2 óra',
    },
    {
      step: 2,
      title: t.process.steps[1].title,
      desc: t.process.steps[1].desc,
      icon: FileText,
      details: [
        'Szakmai tervezés',
        'Dokumentumok összeállítása',
        'Tervrajzok készítése',
        'Engedélyeztetési anyag összeállítása',
      ],
      duration: '1-4 hét',
    },
    {
      step: 3,
      title: t.process.steps[2].title,
      desc: t.process.steps[2].desc,
      icon: Shield,
      details: [
        'Hatósági benyújtás',
        'Eljárás figyelése',
        'HACCP dokumentáció',
        'Vizsgálatok szervezése',
      ],
      duration: '2-8 hét',
    },
    {
      step: 4,
      title: t.process.steps[3].title,
      desc: t.process.steps[3].desc,
      icon: Users,
      details: [
        'Üzembe helyezés',
        'Munkavédelmi oktatás',
        'HACCP bevezetés',
        'Folyamatos támogatás',
      ],
      duration: 'Folyamatos',
    },
  ];

  const faqs = [
    {
      q: 'Mennyi ideig tart egy engedélyeztetési eljárás?',
      a: 'Az eljárás hossza függ a vállalkozás típusától és komplexitásától. Általában 2-8 hét, de mi minden esetben előre tájékoztatjuk ügyfeleinket.',
    },
    {
      q: 'Mennyibe kerül a tanácsadás?',
      a: 'Az első konzultáció ingyenes. A projekt költségét egyedi árazással határozzuk meg, amelyet a tervezés során részletezünk.',
    },
    {
      q: 'Kell-e személyesen megjelennem?',
      a: 'Nem feltétlenül. A legtöbb ügyet elektronikus úton, meghatalmazás alapján is intézhetjük. Személyes konzultációra akkor kerül sor, ha szüksége van.',
    },
    {
      q: 'HACCP nélkül is működtethetem az üzletet?',
      a: 'Élelmiszerrel foglalkozó vállalkozásoknál a HACCP rendszer kötelező. Segítünk a rendszer kiépítésében és karbantartásában.',
    },
  ];

  return (
    <div className="min-h-screen bg-bolyan-bg text-bolyan-text pt-24">
      {/* Header */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.process.label}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t.process.title}
            </h1>
            <div className="sectionDivider mb-6"></div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              {t.process.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block process-line"></div>

            {processSteps.map((step, idx) => (
              <div key={idx} className="text-center relative mb-12 md:mb-0">
                <div className="flex justify-center mb-6">
                  <div className="process-step">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-sm opacity-70 mb-4">{step.desc}</p>

                <div className="glass-card p-4 mt-4">
                  <div className="flex items-center gap-2 justify-center mb-3">
                    <Clock className="w-4 h-4 text-bolyan-accent" />
                    <span className="text-xs font-semibold">{step.duration}</span>
                  </div>

                  <div className="space-y-2 text-left">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-bolyan-accent flex-shrink-0" />
                        <span className="opacity-80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-bolyan-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto space-y-20">
          {processSteps.map((step, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="glass-card p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-bolyan-accent flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <h2 className="font-serif text-2xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-lg opacity-80 mb-6">{step.desc}</p>

                  <div className="flex items-center gap-4 mb-4 px-4 py-2 bg-bolyan-accent/10 rounded-lg">
                    <Clock className="w-5 h-5 text-bolyan-accent" />
                    <span className="font-semibold">{step.duration}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-bolyan-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-40 rounded-2xl bg-bolyan-accent/10 flex items-center justify-center">
                    <step.icon className="w-20 h-20 text-bolyan-accent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Gyakran ismételt kérdések
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="glass-card p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-lg list-none">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-bolyan-accent group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-sm opacity-80 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Mire lesz szüksége?
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Dokumentumok',
                items: ['Cégbírósági bejegyzés', 'Bankszámlaszám', 'Lease szerződés vagy tulajdoni lap', 'Tervrajzok'],
              },
              {
                title: 'Engedélyek',
                items: ['Nyilvántartásba vétel', 'Üzlet jellegű ingatlan', 'Müködési engedély', 'Tűzvédelmi engedély'],
              },
              {
                title: 'Személyes jelenlét',
                items: ['Aláírási meghatalmazás', 'Jogi képviselő (ha kell)', 'Összesen 1-2 alkalom', 'Főleg elektronikus ügyintézés'],
              },
            ].map((section, idx) => (
              <div key={idx} className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-4 text-bolyan-accent">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-bolyan-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-bolyan-accent/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Készen áll a következő lépésre?
          </h2>
          <p className="text-lg opacity-80 mb-8">
            Válassza a tanácsadói csomagunkat és kezdjük el a munkát!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kapcsolat" className="btn-primary text-white inline-flex items-center">
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="tel:+3612345678" className="btn-secondary inline-flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              +36 1 234 5678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

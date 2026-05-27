import { useLanguage } from '../contexts/LanguageContext';
import {
  Store,
  UtensilsCrossed,
  Coffee,
  Hotel,
  Shield,
  Award,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Store,
      title: t.services.items[0].title,
      desc: t.services.items[0].desc,
      features: [
        'Üzletnyitási engedély megszerzése',
        'Bővítési engedélyek',
        'Üzemeltetési engedélyek',
        'Tűzvédelmi engedélyek',
      ],
      image: 'https://images.pexels.com/photos/264543/pexels-photo-264543.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: UtensilsCrossed,
      title: t.services.items[1].title,
      desc: t.services.items[1].desc,
      features: [
        'Élelmiszer-kereskedelmi engedély',
        'Vendéglátóhely működési engedély',
        'Kifőző engedély',
        'Közétkeztetési engedély',
      ],
      image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Coffee,
      title: t.services.items[2].title,
      desc: t.services.items[2].desc,
      features: [
        'Kávézó nyitási engedély',
        'Pékség működési engedély',
        'Cukrászda engedély',
        'Helyiséggel kapcsolatos eljárások',
      ],
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Hotel,
      title: t.services.items[3].title,
      desc: t.services.items[3].desc,
      features: [
        'Szálloda osztályozás',
        'Panzió engedély',
        'Ifjúsági szálló engedély',
        'Kemping működési engedély',
      ],
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: t.services.items[4].title,
      desc: t.services.items[4].desc,
      features: [
        'HACCP rendszer kidolgozása',
        'Dokumentáció összeállítása',
        'Munkavédelmi terv',
        'Rendszer karbantartása',
      ],
      image: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Award,
      title: t.services.items[5].title,
      desc: t.services.items[5].desc,
      features: [
        'ISO 9001 minőségirányítási rendszer',
        'ISO 22000 élelmiszerbiztonság',
        'Audit felkészítés',
        'Belső auditor képzés',
      ],
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="min-h-screen bg-bolyan-bg text-bolyan-text pt-24">
      {/* Header */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.services.label}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t.services.title}
            </h1>
            <div className="sectionDivider mb-6"></div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="glass-card overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-bolyan-accent/20 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-bolyan-accent" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold">{service.title}</h2>
                </div>

                <p className="text-lg opacity-80 mb-6">{service.desc}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-bolyan-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="/kapcsolat" className="btn-primary text-white inline-flex items-center">
                  {t.hero.cta1}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-bolyan-accent/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg opacity-80 mb-8">
            {t.contact.desc}
          </p>
          <a href="/kapcsolat" className="btn-primary text-white inline-flex items-center">
            {t.contact.form.cta}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}

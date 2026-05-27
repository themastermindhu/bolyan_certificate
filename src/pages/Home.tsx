import { useLanguage } from '../contexts/LanguageContext';
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Star,
  Store,
  UtensilsCrossed,
  Coffee,
  Hotel,
  Shield,
  Award,
  Clock,
  FileText,
  Building2,
  Users,
  ClipboardCheck,
  Settings,
  Phone,
} from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    { icon: Store, title: t.services.items[0].title, desc: t.services.items[0].desc },
    { icon: UtensilsCrossed, title: t.services.items[1].title, desc: t.services.items[1].desc },
    { icon: Coffee, title: t.services.items[2].title, desc: t.services.items[2].desc },
    { icon: Hotel, title: t.services.items[3].title, desc: t.services.items[3].desc },
    { icon: Shield, title: t.services.items[4].title, desc: t.services.items[4].desc },
    { icon: Award, title: t.services.items[5].title, desc: t.services.items[5].desc },
  ];

  const whyChooseUs = [
    { icon: Clock, title: t.whyUs.items[0].title, desc: t.whyUs.items[0].desc },
    { icon: FileText, title: t.whyUs.items[1].title, desc: t.whyUs.items[1].desc },
    { icon: Building2, title: t.whyUs.items[2].title, desc: t.whyUs.items[2].desc },
    { icon: Users, title: t.whyUs.items[3].title, desc: t.whyUs.items[3].desc },
  ];

  const industries = [
    { title: t.industries.items[0].title, icon: Store, image: 'https://images.pexels.com/photos/264543/pexels-photo-264543.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: t.industries.items[1].title, icon: Coffee, image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: t.industries.items[2].title, icon: UtensilsCrossed, image: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: t.industries.items[3].title, icon: Shield, image: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: t.industries.items[4].title, icon: Hotel, image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: t.industries.items[5].title, icon: Building2, image: 'https://images.pexels.com/photos/210191/pexels-photo-210191.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <div className="min-h-screen bg-bolyan-bg text-bolyan-text">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business consulting"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-bolyan-accent/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-bolyan-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm mb-6">
              <Star className="w-4 h-4 inline mr-2 text-bolyan-accent" />
              {t.hero.badge}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.title}
          </h1>

          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="/kapcsolat" className="btn-primary text-white inline-flex items-center justify-center">
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/szolgaltatasok" className="btn-secondary inline-flex items-center justify-center">
              {t.hero.cta2}
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-bolyan-accent" />
              <span className="text-sm opacity-80">{t.hero.trust1}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-bolyan-accent" />
              <span className="text-sm opacity-80">{t.hero.trust2}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-bolyan-accent" />
              <span className="text-sm opacity-80">{t.hero.trust3}</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 rotate-90 opacity-50" />
        </div>
      </section>

      {/* Services Section */}
      <section id="szolgaltatasok" className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.services.label}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.services.title}
            </h2>
            <div className="sectionDivider mb-6"></div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card p-8 glow-accent">
                <div className="service-icon">
                  <service.icon className="w-7 h-7 text-bolyan-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-80 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/szolgaltatasok" className="btn-primary text-white inline-flex items-center">
              {t.nav.services}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-transparent via-bolyan-bg/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.whyUs.label}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.whyUs.title}
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-bolyan-accent/20 flex items-center justify-center group-hover:bg-bolyan-accent/30 transition-colors">
                  <item.icon className="w-8 h-8 text-bolyan-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="opacity-80 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.whyUs.stats.map((stat, idx) => (
              <div key={idx} className="text-center glass-card p-6">
                <div className="text-3xl sm:text-4xl font-bold text-bolyan-accent mb-2">{stat.number}</div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.industries.label}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.industries.title}
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="industry-tile h-64 relative group cursor-pointer">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-6 text-center">
                  <industry.icon className="w-10 h-10 text-bolyan-accent mb-2 relative z-10" />
                  <h3 className="font-serif text-2xl font-bold relative z-10">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.testimonials.label}</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.testimonials.title}
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.items.map((testimonial, idx) => (
              <div key={idx} className="glass-card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-bolyan-accent fill-bolyan-accent" />
                  ))}
                </div>
                <p className="mb-6 opacity-90 italic text-sm leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm opacity-60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-bolyan-accent/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg opacity-80 mb-8">
            {t.contact.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kapcsolat" className="btn-primary text-white inline-flex items-center justify-center">
              {t.contact.form.cta}
              <Phone className="w-5 h-5 ml-2" />
            </a>
            <a href="/folyamat" className="btn-secondary inline-flex items-center justify-center">
              {t.nav.process}
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

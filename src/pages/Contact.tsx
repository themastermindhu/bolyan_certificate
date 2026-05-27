import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-bolyan-bg text-bolyan-text pt-24">
      {/* Header */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.contact.label}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t.contact.title}
            </h1>
            <div className="sectionDivider mb-6"></div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              {t.contact.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                {/* Phone */}
                <div className="glass-card p-6 flex items-start gap-6 hover:border-bolyan-accent/50 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-bolyan-accent/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-8 h-8 text-bolyan-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.phone}</h3>
                    <a href="tel:+3612345678" className="text-2xl font-bold text-bolyan-accent hover:underline">
                      +36 1 234 5678
                    </a>
                    <p className="text-sm opacity-60 mt-1">Hétfő-Péntek: 9:00-17:00</p>
                  </div>
                </div>

                {/* Email */}
                <div className="glass-card p-6 flex items-start gap-6 hover:border-bolyan-accent/50 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-bolyan-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-bolyan-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.email}</h3>
                    <a href="mailto:info@bolyancertificate.com" className="text-2xl font-bold text-bolyan-accent hover:underline break-all">
                      info@bolyancertificate.com
                    </a>
                    <p className="text-sm opacity-60 mt-1">24 órán belül válaszolunk</p>
                  </div>
                </div>

                {/* Address */}
                <div className="glass-card p-6 flex items-start gap-6 hover:border-bolyan-accent/50 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-bolyan-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-bolyan-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t.contact.address}</h3>
                    <p className="text-xl font-semibold mb-1">1066 Budapest</p>
                    <p className="text-lg opacity-80">Dessewffy utca 18-20.</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="glass-card p-6 flex items-start gap-6 hover:border-bolyan-accent/50 transition-colors">
                  <div className="w-16 h-16 rounded-xl bg-bolyan-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-bolyan-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Nyitvatartás</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between gap-8">
                        <span>Hétfő - Péntek:</span>
                        <span className="font-semibold">9:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Szombat:</span>
                        <span className="font-semibold">10:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Vasárnap:</span>
                        <span className="font-semibold opacity-60">Zárva</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 sm:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-20 h-20 text-bolyan-accent mx-auto mb-6" />
                  <h2 className="font-serif text-2xl font-bold mb-4">Köszönjük megkeresését!</h2>
                  <p className="opacity-80 mb-8">
                    Hamarosan felvesszük Önnel a kapcsolatot. Az első konzultáció ingyenes.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Új üzenet küldése
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.form.name} *</label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder={t.contact.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.email} *</label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder={t.contact.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.form.phoneLabel}</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder={t.contact.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.form.businessType}</label>
                    <select
                      className="form-input"
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    >
                      {t.contact.form.businessTypeOptions.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t.contact.form.message}</label>
                    <textarea
                      className="form-input h-32 resize-none"
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full text-white flex items-center justify-center gap-2">
                    {t.contact.form.cta}
                    <Send className="w-5 h-5" />
                  </button>

                  <p className="text-xs opacity-60 text-center">
                    A beküldött adatokat bizalmasan kezeljük és csak az ügyintézés céljából használjuk.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="relative h-96 bg-bolyan-bg/50">
              {/* Placeholder for map - in production, embed Google Maps */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-bolyan-accent mx-auto mb-4" />
                  <p className="text-lg font-semibold mb-2">Bolyán Certificate</p>
                  <p className="opacity-70">1066 Budapest, Dessewffy utca 18-20.</p>
                  <a
                    href="https://maps.google.com/?q=Budapest+Dessewffy+utca+18-20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2 mt-4"
                  >
                    <MapPin className="w-5 h-5" />
                    Térkép megnyitása
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-bolyan-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4">Válasszon Önnek megfelelő módot</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Telefonos tanácsadás',
                desc: 'Hívjon minket munkanapokon 9-17 óráig',
                icon: Phone,
                action: 'tel:+3612345678',
                cta: 'Hívás indítása',
              },
              {
                title: 'Email megkeresés',
                desc: 'Írjon és 24 órán belül válaszolunk',
                icon: Mail,
                action: 'mailto:info@bolyancertificate.com',
                cta: 'Email küldése',
              },
              {
                title: 'Személyes konzultáció',
                desc: 'Foglaljon időpontot irodánkba',
                icon: MapPin,
                action: '#',
                cta: 'Időpont foglalás',
              },
            ].map((option, idx) => (
              <a
                key={idx}
                href={option.action}
                className="glass-card p-8 text-center hover:border-bolyan-accent/50 transition-all hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-bolyan-accent/20 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-bolyan-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-sm opacity-70 mb-4">{option.desc}</p>
                <span className="text-bolyan-accent font-semibold text-sm">{option.cta} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

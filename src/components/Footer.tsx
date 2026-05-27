import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-bolyan-accent rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-xl font-bold">Bolyán Certificate</span>
            </Link>
            <p className="text-sm opacity-60 mb-4 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/" className="hover:text-bolyan-accent transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/szolgaltatasok" className="hover:text-bolyan-accent transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/rolunk" className="hover:text-bolyan-accent transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/folyamat" className="hover:text-bolyan-accent transition-colors">
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link to="/kapcsolat" className="hover:text-bolyan-accent transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {t.footer.services.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-bolyan-accent" />
                <span>+36 1 234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-bolyan-accent" />
                <span className="break-all">info@bolyancertificate.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-bolyan-accent flex-shrink-0 mt-0.5" />
                <span>1066 Budapest<br/>Dessewffy utca 18-20.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm opacity-60">
            {t.footer.copyright}
          </div>
          <div className="flex gap-6 text-sm opacity-60">
            <a href="#" className="hover:text-bolyan-text transition-colors">{t.footer.links.privacy}</a>
            <a href="#" className="hover:text-bolyan-text transition-colors">{t.footer.links.terms}</a>
            <a href="#" className="hover:text-bolyan-text transition-colors">{t.footer.links.impressum}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

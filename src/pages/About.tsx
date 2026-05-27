import { useLanguage } from '../contexts/LanguageContext';
import { Shield, CheckCircle2, ClipboardCheck, Settings, Award, Users, Clock, FileText, Building2 } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: 'Bolyán András',
      role: 'Alapító és cégvezető',
      desc: '10+ év tapasztalat az engedélyeztetés és HACCP területén.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  ];

  const missionPoints = [
    { icon: ClipboardCheck, text: 'Engedélyeztetési eljárások egyszerűsítése' },
    { icon: Settings, text: 'HACCP rendszerek professzionális kiépítése' },
    { icon: Award, text: 'Minőségbiztosítási rendszerek bevezetése' },
    { icon: Users, text: 'Ügyfélközpontú megközelítés' },
  ];

  const milestones = [
    { year: '2009', title: 'Alapítás', desc: 'A Bolyán Certificate megalapítása Budapest' },
    { year: '2012', title: 'Bővülés', desc: 'Teljes körű HACCP szolgáltatások bevezetése' },
    { year: '2016', title: 'Országos hálózat', desc: 'Ügyfelek az egész országból' },
    { year: '2020', title: '500+ projekt', desc: 'Elértük az 500. sikeres projektet' },
    { year: '2024', title: 'Digitális átalakulás', desc: 'Modern online tanácsadási platform' },
  ];

  return (
    <div className="min-h-screen bg-bolyan-bg text-bolyan-text pt-24">
      {/* Header Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-bolyan-accent font-semibold mb-4 block">{t.about.label}</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {t.about.title}
            </h1>
            <div className="sectionDivider"></div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                {t.about.p1}
              </p>
              <p className="text-lg opacity-80 mb-6 leading-relaxed">
                {t.about.p2}
              </p>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                {t.about.p3}
              </p>

              <div className="flex flex-wrap gap-4">
                {missionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 glass-card">
                    <point.icon className="w-5 h-5 text-bolyan-accent" />
                    <span className="text-sm">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-card p-4 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Bolyán Certificate team"
                  className="rounded-xl w-full h-96 object-cover"
                />
                <div className="absolute bottom-6 left-6 glass-card p-4 max-w-xs">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-8 h-8 text-bolyan-accent flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{t.about.imageBadge}</div>
                      <div className="text-sm opacity-70">{t.about.imageBadgeSub}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-bolyan-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Küldetésünk
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Szakértelem', desc: 'Magas szintű szaktudás és folyamatos fejlődés', icon: Award },
              { title: 'Megbízhatóság', desc: 'Pontosság és határidőre történő munkavégzés', icon: Shield },
              { title: 'Átláthatóság', desc: 'Folyamatos tájékoztatás és kommunikáció', icon: FileText },
              { title: 'Ügyfélközpontúság', desc: 'Az ügyfeleink sikerére összpontosítunk', icon: Users },
            ].map((value, idx) => (
              <div key={idx} className="glass-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-bolyan-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-bolyan-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm opacity-70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Csapatunk
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="glass-card p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-bolyan-accent">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <div className="text-bolyan-accent text-sm mb-2">{member.role}</div>
                <p className="text-sm opacity-70">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
              Történetünk
            </h2>
            <div className="sectionDivider"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-bolyan-accent/30 -translate-x-1/2 hidden md:block"></div>

            {milestones.map((milestone, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass-card p-6 inline-block">
                    <div className="text-bolyan-accent font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                    <p className="text-sm opacity-70">{milestone.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-bolyan-accent relative z-10"></div>
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.whyUs.stats.map((stat, idx) => (
              <div key={idx} className="text-center glass-card p-6">
                <div className="text-4xl sm:text-5xl font-bold text-bolyan-accent mb-2">{stat.number}</div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

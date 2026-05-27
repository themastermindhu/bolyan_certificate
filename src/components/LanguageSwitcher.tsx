import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
      <button
        onClick={() => setLanguage('hu')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === 'hu'
            ? 'bg-bolyan-accent text-white'
            : 'text-bolyan-text/70 hover:text-bolyan-text hover:bg-white/10'
        }`}
      >
        HU
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-bolyan-accent text-white'
            : 'text-bolyan-text/70 hover:text-bolyan-text hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}

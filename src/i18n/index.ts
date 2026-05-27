import { hu } from './translations/hu';
import { en } from './translations/en';

export type Language = 'hu' | 'en';
export type Translations = typeof hu;

export const translations: Record<Language, Translations> = {
  hu,
  en,
};

export const getTranslation = (lang: Language): Translations => {
  return translations[lang];
};

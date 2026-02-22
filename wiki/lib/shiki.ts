import type { BundledLanguage, LanguageRegistration } from 'shiki';
import cnfgLang from './shiki/cnfg.tmLanguage.json';

export const shikiConfig = {
  langs: [cnfgLang as LanguageRegistration],
  themes: ['github-light', 'github-dark'],
};


import en from './en';
import es from './es';
import ch from './ch';
import vi from './vi';
import ru from './ru';
import fr from './fr';
import pt from './pt';
import ht from './ht';
import ar from './ar';

let i18n = {
  i18n: {
    languages: [
      {
        language: 'en',
        title: 'English',
      },
      {
        language: 'es',
        title: 'Español',
      },
      {
        language: 'ch',
        title: '中文',
      },
      {
        language: 'vi',
        title: 'Tiếng Việt',
      },
      {
        language: 'ru',
        title: 'Русский',
      },
      {
        language: 'fr',
        title: 'Français'
      },
      {
        language: 'pt',
        title: 'Português'
      },
      {
        language: 'ht',
        title: 'Kreyòl Ayisyen'
      },
      {
        language: 'ar',
        title: 'العربية'
      },
    ],
    header: 'inside',
    enabled: true,
    refinePanel: true,
    expandCollapseTitle: true,
    footer: true,
    data: {
      locale: 'en',
      messages: {
        en: en,
        es: es,
        ch: ch,
        vi: vi,
        ru: ru,
        fr: fr,
        pt: pt,
        ht: ht,
        ar: ar,
      },
    },
  },
};

// console.log('primary care i18n.js, i18n:', i18n);

export default i18n;

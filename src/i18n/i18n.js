
import en from './en-us';
import es from './es';
import ch from './ch';
import vi from './vi';
import ru from './ru';
import fr from './fr';

let i18n = {
  i18n: {
    header: 'inside',
    enabled: true,
    refinePanel: true,
    expandCollapseTitle: true,
    footer: true,
    data: {
      locale: 'en-US',
      messages: {
        'en-US': en,
        es: es,
        ch: ch,
        vi: vi,
        ru: ru,
        fr: fr,
      },
    },
  },
};

// console.log('primary care i18n.js, i18n:', i18n);

export default i18n;

import { Accessor } from 'solid-js';
import { Language } from '~/interfaces';
import en from '~/locales/en';
import es from '~/locales/es';
import { useApplicationContext } from '~/context/context';

export const t = (key: string) => {
  const store = useApplicationContext();
  const [language]: [Accessor<Language>] = store.language;

  switch (language()) {
    case 'en':
      return en[key];
    case 'es':
      return es[key];
    default:
      return key;
  }
};

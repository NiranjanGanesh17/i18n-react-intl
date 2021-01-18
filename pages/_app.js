import '../styles/globals.css';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import en from './languages/en.json';
import es from './languages/es.json';
import fr from './languages/fr.json';

const messages = {
  en: en,
  es: es,
  fr: fr
}


function MyApp({ Component, pageProps }) {

  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp;

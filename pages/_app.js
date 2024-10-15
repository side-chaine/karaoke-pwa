import '../styles/globals.css';
import { AuthProvider } from '../components/AuthProvider';
import Link from 'next/link';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>4ePoeM - Караоке приложение</title>
        <meta name="description" content="Ваше любимое караоке-приложение теперь доступно онлайн!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthProvider>
        <nav style={{ marginBottom: '20px', padding: '10px' }}>
          <Link href="/" legacyBehavior>
            <a style={{ marginRight: '10px' }}>Главная</a>
          </Link>
          <Link href="/queue" legacyBehavior>
            <a style={{ marginRight: '10px' }}>Очередь</a>
          </Link>
          <Link href="/profile" legacyBehavior>
            <a>Профиль</a>
          </Link>
        </nav>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;

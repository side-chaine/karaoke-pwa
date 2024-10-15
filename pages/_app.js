import '../styles/globals.css';
import { AuthProvider } from '../components/AuthProvider';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <nav style={{ marginBottom: '20px', padding: '10px' }}>
        <Link href="/" style={{ marginRight: '10px' }}>
          Главная
        </Link>
        <Link href="/queue" style={{ marginRight: '10px' }}>
          Очередь
        </Link>
        <Link href="/profile">
          Профиль
        </Link>
      </nav>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

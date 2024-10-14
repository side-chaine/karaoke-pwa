import '../styles/globals.css'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'
import Layout from '../components/Layout'

const clientSideEmotionCache = createEmotionCache()

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}

export default MyApp

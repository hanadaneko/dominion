import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
      <>
        {/*  タイトル*/}
        <Head>
          <title>dominion</title>
        </Head>
        <Component {...pageProps} />
      </>

  )
}
export default App
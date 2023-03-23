import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

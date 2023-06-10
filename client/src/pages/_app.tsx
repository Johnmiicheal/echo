import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>
        AUDIO TRANSCRIPTION
      </title>
      <link type="image/png" sizes="96x96" rel="icon" href="/icons8-audio-96.png"></link>
    </Head>
    <Component {...pageProps} />
    
    </>
  )
}

export default MyApp;

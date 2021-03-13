// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import ResetCSS from 'styles/reset';
import GlobalStyle from 'styles/global';
import customConfig from 'styles/gridConfig';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
        // meta tags
        {/* <!-- Primary Meta Tags --> */}
        <title></title>
        <meta name="title" content="" />
        <meta name="description" content="" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://santosfrancisco.github.io/" />
        <meta property="og:title" content="Francisco Santos" />
        <meta property="og:description" content="Oi, eu sou o Francisco. Desenvolvedor frontend." />
        <meta property="og:image" content="/meta-image.png" />
        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://santosfrancisco.github.io/" />
        <meta property="twitter:title" content="Francisco Santos" />
        <meta
          property="twitter:description"
          content="Oi, eu sou o Francisco. Desenvolvedor frontend."
        />
        <meta property="twitter:image" content="/meta-image.png" />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      <ThemeProvider theme={{ awesomegrid: customConfig }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;

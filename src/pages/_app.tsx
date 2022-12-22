import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from '../../lib/gtag';
import Analytics from '../components/Analytics';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;

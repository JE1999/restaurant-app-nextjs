import type { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from 'components/Layout';
import store from '../store';
import theme from '../theme';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode, layoutProps: any) => <Layout {...layoutProps}>{page}</Layout>);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />, pageProps)})
      </ThemeProvider>
    </Provider>
  );
}

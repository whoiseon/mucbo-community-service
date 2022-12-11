import '../styles/common/_font.scss';
import '../styles/common/_base.scss';
import type { AppProps } from 'next/app';
import {GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import PCLayout from "../components/pc/Layout";
import {wrapper} from "../store";
import {useRouter} from "next/router";
import {useRef} from "react";
import { Hydrate } from "react-query/hydration";
import {QueryClient, QueryClientProvider} from "react-query";
import {Provider} from "react-redux";

interface IProps {
  isMobile: boolean,
  dehydratedState: any
}

const MyApp = ({ Component, pageProps, pageProps: { isMobile } }: AppProps<IProps>) => {
  const {store, props} = wrapper.useWrappedStore(pageProps);

  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  const router = useRouter();

  return (
    isMobile
      ? (
        <Component {...pageProps} />
      )
      : router.pathname === '/login' || router.pathname === '/signup'
        ? (
          <Component {...pageProps} />
        )
        : (
          <Provider store={store}>
            <QueryClientProvider client={queryClientRef.current}>
              <Hydrate state={pageProps.dehydratedState}>
                <PCLayout>
                  <Component {...props.pageProps} />
                </PCLayout>
              </Hydrate>
            </QueryClientProvider>
          </Provider>
        )
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let mobile;

  if (context.req) {
    const md = new MobileDetect(context.req.headers['user-agent'] as string);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  return {
    props: {
      isMobile: mobile,
    },
  }
}

export default MyApp;

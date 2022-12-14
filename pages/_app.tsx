import '../styles/common/_font.scss';
import '../styles/common/_base.scss';
import type { AppProps } from 'next/app';
import {GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {wrapper} from "../store";
import {useRouter} from "next/router";
import {Provider} from "react-redux";

import PCLayout from "../components/pc/Layout";
import MobileLayout from "../components/mobile/Layout";
import {setCookie} from "cookies-next";

interface IProps {
  isMobile: boolean,
}

const MyApp = ({ Component, pageProps, pageProps: { isMobile } }: AppProps<IProps>) => {
  const {store, props} = wrapper.useWrappedStore(pageProps);

  const router = useRouter();

  return (
    <Provider store={store}>
      {
        isMobile
          ? (
            <MobileLayout>
              <Component {...pageProps} />
            </MobileLayout>
          )
          : router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/404'
            ? (
              <Component {...pageProps} />
            )
            : (
              <PCLayout>
                <Component {...props.pageProps} />
              </PCLayout>
            )
      }
    </Provider>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

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

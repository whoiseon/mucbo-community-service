import '../styles/common/_font.scss';
import '../styles/common/_base.scss';
import type { AppProps } from 'next/app';
import {GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import PCLayout from "../components/pc/Layout";
import {wrapper} from "../store";
import {useRouter} from "next/router";

interface IProps {
  isMobile: boolean,
}

const MyApp = ({ Component, pageProps, pageProps: { isMobile } }: AppProps<IProps>) => {
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
          <PCLayout>
            <Component {...pageProps} />
          </PCLayout>
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

export default wrapper.withRedux(MyApp);

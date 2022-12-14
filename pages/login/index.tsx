import {GetServerSideProps, NextPage} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback} from "react";
import MobileRoot from "../../components/mobile/Root";
import Head from "next/head";
import PCLoginPage from "../../components/pc/LoginPage";
import MobileLoginPage from "../../components/mobile/LoginPage";

interface IProps {
  isMobile: boolean,
}

const Login: NextPage<IProps> = ({ isMobile }) => {
  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileLoginPage /> : <PCLoginPage />
  }, []);

  return (
    <>
      <Head>
        <title>먹보닷컴 - 로그인</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        handleDeviceDetect(isMobile)
      }
    </>
  );
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
    }
  }
}

export default Login;

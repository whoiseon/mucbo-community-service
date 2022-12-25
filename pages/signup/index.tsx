import {GetServerSideProps, NextPage} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback} from "react";
import MobileRoot from "../../components/mobile/Root";
import Head from "next/head";
import MobileSignUp from "../../components/mobile/SignUpPage";
import PCSignUp from "../../components/pc/SignUpPage";

interface IProps {
  isMobile: boolean,
}

const Signup: NextPage<IProps> = ({ isMobile }) => {
  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileSignUp /> : <PCSignUp />
  }, []);

  return (
    <>
      <Head>
        <title>먹보닷컴 - 회원가입</title>
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

export default Signup;

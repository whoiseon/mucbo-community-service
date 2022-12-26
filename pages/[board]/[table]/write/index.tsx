import {GetServerSideProps, NextPage} from "next";
import {wrapper} from "../../../../store";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback} from "react";
import MobileWrite from "../../../../components/mobile/WritePage";
import PCWrite from "../../../../components/pc/WritePage";
import Head from "next/head";

interface IProps {
  isMobile: boolean,
}

const Write: NextPage<IProps> = ({ isMobile }) => {
  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileWrite /> : <PCWrite />
  }, []);

  return (
    <>
      <Head>
        <title>글쓰기</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        handleDeviceDetect(isMobile)
      }
    </>
  );
};

export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(store => async ({req, res, query}) => {
  let mobile;

  if (req) {
    const md = new MobileDetect(req.headers['user-agent'] as string);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  return {
    props: {
      isMobile: mobile,
    },
  };
});

export default Write;

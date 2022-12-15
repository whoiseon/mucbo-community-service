import {GetServerSideProps, NextPage} from "next";
import {wrapper} from "../../store";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {getViewUserInfo} from "../../store/slices/postSlice";
import {useCallback} from "react";
import MobileRoot from "../../components/mobile/Root";
import PCBoard from "../../components/pc/Board";
import Head from "next/head";

interface IProps {
  isMobile: boolean,
}

const UserId: NextPage<IProps> = ({ isMobile }: IProps) => {
  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileRoot /> : <PCBoard />
  }, []);

  return (
    <>
      <Head>
        <title>유저정보</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {
          handleDeviceDetect(isMobile)
        }
      </div>
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

  await store.dispatch(getViewUserInfo({
    mb_id: decodeURIComponent(query.userId as string),
  }))

  return {
    props: {
      isMobile: mobile,
    },
  };
});

export default UserId;

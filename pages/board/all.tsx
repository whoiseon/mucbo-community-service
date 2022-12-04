import Head from "next/head";
import {GetServerSideProps, NextPage} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import Home from "../index";
import {useCallback} from "react";
import MobileRoot from "../../components/mobile/Root";
import PCBoardAll from "../../components/pc/board/All";
import {wrapper} from "../../store";
import {getPostsAll} from "../../store/slices/postSlice";

interface IProps {
  isMobile: boolean,
}

const BoardAllPage: NextPage<IProps> = ({ isMobile }) => {
  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileRoot /> : <PCBoardAll />
  }, []);

  return (
    <>
      <Head>
        <title>먹보닷컴 - 전체글보기</title>
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

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, res}) => {
  let mobile;

  if (req) {
    const md = new MobileDetect(req.headers['user-agent'] as string);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  await store.dispatch(getPostsAll());

  return {
    props: {
      isMobile: mobile,
    },
  };
});

export default BoardAllPage;

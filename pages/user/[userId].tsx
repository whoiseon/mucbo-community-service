import {GetServerSideProps, NextPage} from "next";
import {wrapper} from "../../store";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {getViewUserInfo, getViewUserWriteData} from "../../store/slices/postSlice";
import {useCallback} from "react";
import MobileRoot from "../../components/mobile/Root";
import MobileBoardByUser from "../../components/mobile/BoardByUser";
import PCBoardByUser from "../../components/pc/BoardByUser";
import Head from "next/head";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

interface IProps {
  isMobile: boolean,
}

const UserId: NextPage<IProps> = ({ isMobile }: IProps) => {
  const { viewUserInfo } = useSelector((state: RootState) => state.post);

  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileBoardByUser /> : <PCBoardByUser />
  }, []);

  return (
    <>
      <Head>
        <title>{ viewUserInfo?.message.result.mb_nick }</title>
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

  await store.dispatch(getViewUserInfo({
    mb_id: decodeURIComponent(query.userId as string),
  }));

  await store.dispatch(getViewUserWriteData({
    mb_id: decodeURIComponent(query.userId as string),
    page: query.page || '1'
  }));

  const getState = store.getState().post;

  if (getState.viewUserInfo?.error.msg) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      isMobile: mobile,
    },
  };
});

export default UserId;

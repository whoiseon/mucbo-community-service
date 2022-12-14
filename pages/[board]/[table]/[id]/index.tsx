import {GetServerSideProps, NextPage} from "next";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import {useCallback} from "react";
import MobileBoard from "../../../../components/mobile/Board";
import PCBoard from "../../../../components/pc/Board";
import Head from "next/head";
import {wrapper} from "../../../../store";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {getViewPost} from "../../../../store/slices/postSlice";

interface IProps {
  isMobile: boolean,
}

const View: NextPage<IProps> = ({ isMobile }) => {
  const { viewPost } = useSelector((state: RootState) => state.post);

  console.log()

  const headTitle = viewPost?.message.result.title
    ? viewPost?.message.result.title.replace('치트닷컴', '먹보닷컴')
    : ''

  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileBoard /> : <PCBoard />
  }, []);

  return (
    <>
      <Head>
        <title>{headTitle}</title>
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

  await store.dispatch(getViewPost({
    table: query.table,
    id: Number(query.id),
  }))

  const getState = store.getState().post;

  if (getState.viewPost?.error.msg) {
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

export default View;

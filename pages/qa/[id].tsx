import {GetServerSideProps, NextPage} from "next";
import {useCallback} from "react";
import MobileRoot from "../../components/mobile/Root";
import PCBoard from "../../components/pc/Board";
import Head from "next/head";
import {wrapper} from "../../store";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {getViewPost} from "../../store/slices/postSlice";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

interface IProps {
  isMobile: boolean,
}

const QaView: NextPage<IProps> = () => {
  const { viewPost } = useSelector((state: RootState) => state.post);

  const headTitle = viewPost?.message.result.title
    ? viewPost?.message.result.title.replace('치트닷컴', '먹보닷컴')
    : ''

  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileRoot /> : <PCBoard />
  }, []);

  return (
    <>
      <Head>
        <title>{ headTitle }</title>
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

  await store.dispatch(getViewPost({
    table: 'qa',
    id: Number(query.id),
  }));

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

export default QaView;

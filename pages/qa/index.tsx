import Head from "next/head";
import {NextPage, GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback} from "react";
import MobileBoard from "../../components/mobile/Board";
import PCBoard from "../../components/pc/Board";
import {wrapper} from "../../store";
import {getPostsByTable} from "../../store/slices/postSlice";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";

interface IProps {
  isMobile: boolean,
  title: string
}

const QaPage: NextPage<IProps> = ({ isMobile, title }) => {
  const { posts } = useSelector((state: RootState) => state.post);

  const headTitle = posts?.message.result.title.replace('치트닷컴', '먹보닷컴');

  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileBoard /> : <PCBoard />
  }, []);

  return (
    <>
      <Head>
        <title>{ headTitle }</title>
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

  await store.dispatch(getPostsByTable({
    page: query.page,
    table: 'qa'
  }));

  const getState = store.getState().post;

  if (getState.posts?.error.msg) {
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

export default QaPage;

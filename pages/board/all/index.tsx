import Head from "next/head";
import {NextPage, GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback} from "react";
import MobileRoot from "../../../components/mobile/Root";
import PCBoard from "../../../components/pc/Board";
import {wrapper} from "../../../store";
import {getPostsAll} from "../../../store/slices/postSlice";
import {useRouter} from "next/router";

interface IProps {
  isMobile: boolean,
  title: string
}

const BoardAllPage: NextPage<IProps> = ({ isMobile, title }) => {
  const router = useRouter();

  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileRoot /> : <PCBoard />
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
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

  await store.dispatch(getPostsAll({
    page: Number(query.page),
  }));

  const getState = store.getState();

  let headTitle;

  if (getState.post.posts) {
    const getStateTitle = getState.post.posts.message.result.title;
    headTitle = getStateTitle.replace('치트닷컴', '먹보닷컴')
  }

  return {
    props: {
      isMobile: mobile,
      title: headTitle
    },
  };
});

export default BoardAllPage;

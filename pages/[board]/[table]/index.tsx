import Head from "next/head";
import {NextPage, GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback, useEffect} from "react";
import MobileRoot from "../../../components/mobile/Root";
import PCBoard from "../../../components/pc/Board";
import {wrapper} from "../../../store";
import {getPostsAll, getPostsByTable} from "../../../store/slices/postSlice";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {useRouter} from "next/router";

interface IProps {
  isMobile: boolean,
}

const BoardAllPage: NextPage<IProps> = ({ isMobile }) => {
  const router = useRouter();

  const { posts } = useSelector((state: RootState) => state.post);

  const headTitle = posts?.message.result.title
    ? posts?.message.result.title.replace('치트닷컴', '먹보닷컴')
    : ''

  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileRoot /> : <PCBoard />
  }, []);

  return (
    <>
      <Head>
        <title>{headTitle}</title>
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
  const getState = store.getState();

  let mobile;

  if (req) {
    const md = new MobileDetect(req.headers['user-agent'] as string);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery('getPost', () => getPost({
  //   board: query.board,
  //   table: query.table,
  //   page: query.page,
  // }), { staleTime: 1000 });

  // if (getState.post.posts?.error.msg !== '') {
  //   return {
  //     notFound: true,
  //   }
  // }

  if (query.board === 'board' && query.table === 'all') {
    await store.dispatch(getPostsAll({
      page: query.page,
    }));
  } else {
    await store.dispatch(getPostsByTable({
      page: query.page,
      table: query.table
    }));
  }

  return {
    props: {
      isMobile: mobile,
      // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
  };
});

export default BoardAllPage;

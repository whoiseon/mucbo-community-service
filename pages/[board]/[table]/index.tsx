import Head from "next/head";
import {NextPage, GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback} from "react";
import MobileRoot from "../../../components/mobile/Root";
import PCBoard from "../../../components/pc/Board";
import {wrapper} from "../../../store";
import {getPostsAll, getPostsByTable} from "../../../store/slices/postSlice";
import {useRouter} from "next/router";
import {dehydrate, QueryClient, useQuery} from "react-query";
import {getPost} from "../../../apis/post";
import {headerMenus} from "../../../data/menus";

interface IProps {
  isMobile: boolean,
}

const BoardAllPage: NextPage<IProps> = ({ isMobile }) => {
  const router = useRouter();
  let headTitle;

  const { data: postData } = useQuery("getPost", () => getPost({
    board: router.query.board,
    table: router.query.table,
    page: router.query.page,
  }));

  if (postData.message.result.title) {
    headTitle = postData.message.result.title.replace('치트닷컴', '먹보닷컴') || '404';
  }

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
  let mobile;

  if (req) {
    const md = new MobileDetect(req.headers['user-agent'] as string);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('getPost', () => getPost({
    board: query.board,
    table: query.table,
    page: query.page,
  }), { staleTime: 1000 });

  // if (query.board === 'board' || query.table === 'all') {
  //   await store.dispatch(getPostsAll({
  //     page: query.page,
  //   }));
  // } else {
  //   await store.dispatch(getPostsByTable({
  //     page: query.page,
  //     table: query.table
  //   }));
  // }

  // const getState = store.getState();
  //
  // if (getState.post.posts) {
  //   const getStateTitle = getState.post.posts.message.result.title;
  //   headTitle = getStateTitle?.replace('치트닷컴', '먹보닷컴')
  // }

  const tables: string[] = ['all'];

  await headerMenus.forEach((menu) => {
    menu.subTable?.forEach((table) => {
      tables.push(table.table)
    })
  });

  const boardCheck = headerMenus.find((v) => v.board === query.board);
  const tableCheck = tables.find((v) => v === query.table);

  if (!boardCheck || !tableCheck) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      isMobile: mobile,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
  };
});

export default BoardAllPage;

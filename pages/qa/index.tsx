import Head from "next/head";
import {NextPage, GetServerSideProps} from "next";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {useCallback} from "react";
import MobileRoot from "../../components/mobile/Root";
import PCBoard from "../../components/pc/Board";
import {wrapper} from "../../store";
import {getPost} from "../../apis/post";
import {QueryClient, useQuery} from "react-query";
import {useRouter} from "next/router";

interface IProps {
  isMobile: boolean,
}

const QaPage: NextPage<IProps> = ({ isMobile }) => {
  const router = useRouter();

  const { data: postData } = useQuery("getPost", () => getPost({
    board: router.query.board,
    table: router.query.table,
    page: router.query.page,
  }));

  const headTitle = postData.message.result.title.replace('치트닷컴', '먹보닷컴') || '404';

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

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('getPost', () => getPost({
    board: query.board,
    table: query.table,
    page: query.page,
  }), { staleTime: 1000 });

  return {
    props: {
      isMobile: mobile,
    },
  };
});

export default QaPage;

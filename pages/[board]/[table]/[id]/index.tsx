import {GetServerSideProps, NextPage} from "next";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import {useCallback} from "react";
import MobileRoot from "../../../../components/mobile/Root";
import PCBoard from "../../../../components/pc/Board";
import Head from "next/head";
import {wrapper} from "../../../../store";
import MobileDetect from "mobile-detect";
import {isMobile} from "react-device-detect";
import {getViewPost} from "../../../../store/slices/postSlice";

interface IProps {
  isMobile: boolean,
}

const View: NextPage<IProps> = () => {
  // const { posts } = useSelector((state: RootState) => state.post);
  //
  // const headTitle = posts?.message.result.title
  //   ? posts?.message.result.title.replace('치트닷컴', '먹보닷컴')
  //   : ''

  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileRoot /> : <PCBoard />
  }, []);

  return (
    <>
      <Head>
        <title>view</title>
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
    table: query.table,
    id: Number(query.id),
  }))

  const getState = store.getState().post;
  //
  // if (getState.posts?.error.msg) {
  //   return {
  //     notFound: true,
  //   }
  // }

  console.log(getState.viewPost);

  return {
    props: {
      isMobile: mobile,
      // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
  };
});

export default View;

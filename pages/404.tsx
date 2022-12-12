import Head from "next/head";
import {NextPage} from "next";
import NotFound from "../components/pc/NotFound";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>먹보닷컴 - 404 page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NotFound />
    </>
  );
};

export default Custom404;

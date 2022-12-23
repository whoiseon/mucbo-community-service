import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import MobileDetect from "mobile-detect";
import { isMobile } from "react-device-detect";
import {useCallback} from "react";

import PCRoot from "../components/pc/Root";
import MobileRoot from "../components/mobile/Root";
import {wrapper} from "../store";
import {getCookies, setCookie} from "cookies-next";
import axios from "axios";

interface IProps {
  isMobile: boolean,
}

const Home: NextPage<IProps> = ({ isMobile }) => {
  const handleDeviceDetect = useCallback((isMobile: boolean) => {
    return isMobile ? <MobileRoot /> : <PCRoot />
  }, []);

  return (
    <>
      <Head>
        <title>먹보닷컴</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        handleDeviceDetect(isMobile)
      }
    </>
  )
}

export const getServerSideProps:GetServerSideProps = wrapper.getServerSideProps(store => async ({req, res, query}) => {
  let mobile;

  if (req) {
    const md = new MobileDetect(req.headers['user-agent'] as string);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  const cookies = getCookies({ req, res });

  const response = await axios.post('https://cheatdot.com/api/v1/api.php', {
    cmd: 'session'
  });

  const session = response.data.message.result

  if (!cookies["PHPSSEID"]) {
    setCookie('PHPSSEID', session, { req, res, maxAge: 60 * 6 * 24 });
  }

  console.log(getCookies({ req, res }));

  return {
    props: {
      isMobile: mobile,
    },
    redirect: {
      permanent: false,
      destination: "/board/all"
    }
  }
});

export default Home;

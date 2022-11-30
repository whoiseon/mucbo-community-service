import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/pc.module.scss'
import MobileDetect from "mobile-detect";
import { isMobile } from "react-device-detect";
import {useCallback} from "react";

import PCRoot from "../components/pc/Root";
import MobileRoot from "../components/mobile/Root";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  let mobile;

  if (context.req) {
    const md = new MobileDetect(context.req.headers['user-agent'] as string);
    mobile = !!md.mobile();
  } else {
    mobile = isMobile;
  }

  return {
    props: {
      isMobile: mobile,
    },
  }
}

export default Home;

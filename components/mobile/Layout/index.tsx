import {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Layout.module.scss";

import GlobalHeader from "./GlobalHeader";
import FooterNav from "./FooterNav";
import {useRouter} from "next/router";
import ConfigModal from "./ConfigModal";
import WhiteHeader from "./WhiteHeader";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const MainRef = useRef<any>(null);
  const WriteRef = useRef<any>(null);

  const [configModal, setConfigModal] = useState(false);

  const [scroll, setScroll] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const onScrollMain = useCallback(() => {
    setScroll(MainRef.current?.scrollTop);

    if (MainRef.current?.scrollTop > scroll && scroll >= 50) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }, [scroll]);

  const handleWhiteHeaderTitle = useCallback((path: string) => {
    switch (path) {
      case "login":
        return "로그인"
      case "signup":
        return "회원가입"
      case "user":
        return "유저 정보"
      default:
        return "글쓰기"
    }
  }, []);

  useEffect(() => {
    MainRef.current?.addEventListener("scroll", onScrollMain);
    WriteRef.current?.addEventListener("scroll", onScrollMain);

    return () => {
      MainRef.current?.removeEventListener("scroll", onScrollMain);
      WriteRef.current?.removeEventListener("scroll", onScrollMain);
    }
  });

  useEffect(() => {
    MainRef.current.scrollTop = 0;
  }, [router.asPath]);

  const isBoard = router.asPath.split('/')[1];
  const isWritePage = router.asPath.includes("write");
  const hideAndShowWriteButton = scrollActive ? styles.writeActive : "";

  return (
    <>
      {
        !(isBoard === 'login' || isBoard === 'signup' || isBoard === 'user' || isWritePage)
          ? (
            <GlobalHeader scrollActive={scrollActive} />
          )
          : (
            <WhiteHeader title={handleWhiteHeaderTitle(isBoard)} isWritePage={isWritePage} />
          )
      }
      <main
        ref={MainRef}
        className={styles.main}
        style={isWritePage ? { paddingBottom: '0' } : {}}
      >
        { children }
      </main>
      {
        ((isBoard === 'community' || isBoard === 'games' || isBoard === 'qa') && !router.query.id && !isWritePage) && (
          <div ref={WriteRef} className={`${styles.write} ${hideAndShowWriteButton}`}>
            <Link href={`${router.asPath.split("?")[0]}/write`}>
              <a>
                <div className={styles.icon}>
                  <Image
                    src="/image/icon/write-icon.svg"
                    alt="write"
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            </Link>
          </div>
        )
      }
      <ConfigModal configModal={configModal} setConfigModal={setConfigModal} />
      {
        !(router.pathname === '/signup' || isWritePage) && (
          <FooterNav configModal={configModal} setConfigModal={setConfigModal} />
        )
      }
    </>
  );
};

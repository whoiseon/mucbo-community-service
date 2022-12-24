import styles from "./Layout.module.scss";
import GlobalHeader from "./GlobalHeader";
import FooterNav from "./FooterNav";
import {useCallback, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const MainRef = useRef<any>(null);

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

  useEffect(() => {
    MainRef.current?.addEventListener("scroll", onScrollMain);

    return () => {
      MainRef.current?.removeEventListener("scroll", onScrollMain);
    }
  });

  useEffect(() => {
    MainRef.current.scrollTop = 0;
  }, [router.asPath]);

  return (
    <>
      <GlobalHeader scrollActive={scrollActive} />
      <main ref={MainRef} className={styles.main}>
        { children }
      </main>
      <FooterNav />
    </>
  );
};

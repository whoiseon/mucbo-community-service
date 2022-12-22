import styles from "./Layout.module.scss";
import GlobalHeader from "./GlobalHeader";
import FooterNav from "./FooterNav";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalHeader />
      <main className={styles.main}>
        { children }
      </main>
      <FooterNav />
    </>
  );
};

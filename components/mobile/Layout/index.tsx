import styles from "./Layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import GlobalNav from "./GlobalNav";
import FooterNav from "./FooterNav";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.profileIcon}>
            123
          </div>
        </div>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Link href="/">
              <a>
                <Image
                  src="/image/logo/logo.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <Image
              src="/image/icon/search-icon.svg"
              alt="search"
              width={16}
              height={16}
            />
          </div>
        </div>
      </header>
      <GlobalNav />
      <main className={styles.main}>
        { children }
      </main>
      <FooterNav />
    </>
  );
};

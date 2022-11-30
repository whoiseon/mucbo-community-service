import Image from "next/image";
import styles from "./Layout.module.scss";
import NavBar from "./NavBar";
import Button from "../../common/Button";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <a href="/">
              <Image
                src="/image/logo/logo.svg"
                alt="logo"
                width={32}
                height={32}
              />
              <span>
                먹보닷컴
              </span>
            </a>
          </div>
          <div className={styles.headerMenu}>
            <NavBar />
          </div>
          <div className={styles.right}>
            <Button type="svg">
              <Image
                src="/image/icon/search-icon.svg"
                alt="Search icon"
                width={16}
                height={16}
              />
            </Button>
            <Button path="/register" type="default">
              회원가입
            </Button>
            <Button path="/login" type="primary">
              로그인
            </Button>
          </div>
        </div>
      </header>
      <main className={styles.mainWrapper}>
        { children }
      </main>
      <footer>
        123
      </footer>
    </>
  );
};
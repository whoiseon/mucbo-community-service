import Image from "next/image";
import styles from "./Layout.module.scss";
import NavBar from "./NavBar";
import Button from "../../common/Button";
import {footerMap} from "../../../data/menus";
import FooterMap from "../FooterMap";
import Link from "next/link";
import ChatBox from "../ChatBox";

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
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
            </Link>
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
            <Button path="/login" type="primary">
              로그인
            </Button>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <div className={styles.mainLeft}>
            <ChatBox />
          </div>
          <div className={styles.mainRight}>
            { children }
          </div>
        </div>
      </main>
      <section className={styles.section}>
        <div className={styles.intro}>
          <Image
            src="/image/icon/section-icon.svg"
            alt="section-img"
            width={80}
            height={80}
            style={{ opacity: '0.4' }}
          />
          <div>
            <h1>NO.1 게임 포털 먹보닷컴</h1>
            <p>치트닷컴은 2010년도부터 깊이 이어져온 게임 중심 커뮤니티입니다. <br />
              게임에 대한 다양한 정보를 유저들이 공유하고 있습니다. 그뿐만 아니라
              게임에 대한 이해와, 질문, 커뮤니케이션을 통해 자유롭게 활동할 수 있습니다.</p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.left}>
            <div className={styles.footerLogo}>
              <Image
                src="/image/logo/footer-gray-logo.svg"
                alt="footer logo"
                width={32}
                height={32}
              />
              <h1>먹보닷컴</h1>
            </div>
            <div className={styles.copyright}>
              <p>먹보닷컴(mucbodot)의 모든 컨텐츠 저작권은 먹보에 있으며, 무단 도용 시 법적 불이익을 받습니다.</p>
              <p>Copyright © MUCBODOT. All rights reserved</p>
            </div>
          </div>
          <div className={styles.right}>
            {
              footerMap.map((map, idx) => {
                return (
                  <FooterMap key={map.title} data={map} />
                )
              })
            }
          </div>
        </div>
      </footer>
    </>
  );
};
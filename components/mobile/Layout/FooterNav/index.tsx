import styles from "./FooterNav.module.scss";
import FooterNavItem from "../FooterNavItem";
import {mobileFooterMenus} from "../../../../data/menus";
import Image from "next/image";

export default function FooterNav() {
  return (
    <nav className={styles.wrapper}>
      {
        mobileFooterMenus.map((menu, i) => {
          return (
            <FooterNavItem
              key={menu.name}
              name={menu.name}
              board={menu.board}
              path={menu.path}
              icon={menu.icon}
            />
          )
        })
      }
      <button className={styles.configButton}>
        <div className={styles.icon}>
          <Image
            src="/image/icon/config-icon.svg"
            alt="footerIcon"
            width={18}
            height={18}
          />
        </div>
        <span>설정</span>
      </button>
    </nav>
  );
};

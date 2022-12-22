import styles from "./FooterNav.module.scss";
import FooterNavItem from "../FooterNavItem";
import {mobileFooterMenus} from "../../../../data/menus";

export default function FooterNav() {
  return (
    <nav className={styles.wrapper}>
      {
        mobileFooterMenus.map((menu, i) => {
          return (
            <FooterNavItem
              name={menu.name}
              board={menu.board}
              path={menu.path}
              icon={menu.icon}
            />
          )
        })
      }
    </nav>
  );
};

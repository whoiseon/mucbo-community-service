import Link from "next/link";
import styles from "../Layout.module.scss";
import type { HeaderMenuType } from "../../../../data/menus";
import {useRouter} from "next/router";

export default function NavItem({ name, path, board }: HeaderMenuType) {
  const router = useRouter();

  let isActive = router.asPath.includes(board) ? styles.active: '';

  return (
    <li>
      <Link href={path}>
        <a className={`${isActive}`}>
          { name }
        </a>
      </Link>
      {isActive && <div className={styles.activeBox}><div className={styles.line} /></div>}
    </li>
  );
};
import Link from "next/link";
import styles from "../Layout.module.scss";
import type { HeaderMenuType } from "../../../../data/menus";
import {useRouter} from "next/router";

export default function NavItem({ name, path, table }: HeaderMenuType) {
  const router = useRouter();

  const isActive = router.asPath.includes(table) ? styles.active: '';

  return (
    <li>
      <Link href={path}>
        <a className={`${isActive}`}>
          { name }
        </a>
      </Link>
      {isActive && <div className={styles.activeBox}><div className={styles.line}></div></div>}
    </li>
  );
};
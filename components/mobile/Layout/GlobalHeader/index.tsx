import styles from "./GlobalHeader.module.scss";
import {headerMenus} from "../../../../data/menus";
import {useRouter} from "next/router";
import Link from "next/link";

export default function GlobalHeader() {
  const router = useRouter();

  const subMenus = headerMenus.find((v) => v.board === router.query.board)

  return (
    <header className={styles.headerGlobal}>
      <nav>
        <ul>
          {
            subMenus?.subTable
              ? (
                subMenus?.subTable.map((table, i) => {
                  const asPath = `/${router.query.board}/${router.query.table}`
                  const isActive = asPath === table.path ? `${styles.menuBtn} ${styles.menuActive}` : styles.menuBtn

                  return (
                    <li key={table.name}>
                      <Link href={table.path}>
                        <a className={isActive}>
                          {table.name}
                        </a>
                      </Link>
                    </li>
                  )
                })
              )
              : null
          }
        </ul>
      </nav>
    </header>
  );
};

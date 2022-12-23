import styles from "./GlobalHeader.module.scss";
import {headerMenus} from "../../../../data/menus";
import {useRouter} from "next/router";
import Link from "next/link";

export default function GlobalHeader() {
  const router = useRouter();

  const subMenus = headerMenus.find((v) => v.board === router.query.board);

  const handleEmpty = (board: string) => {
    switch (board) {
      case "/qa":
        return "Q&A"
      case "/board/all":
        return "전체글보기"
      default:
        return ""
    }
  }

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
              : (
                <li>
                  <Link href="#">
                    <a className={`${styles.menuBtn} ${styles.menuActive}`}>
                      {
                        handleEmpty(router.asPath.split('?')[0])
                      }
                    </a>
                  </Link>
                </li>
              )
          }
        </ul>
      </nav>
    </header>
  );
};

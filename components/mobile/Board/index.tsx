import {useRouter} from "next/router";

import styles from "./Board.module.scss";
import Community from "../Community";
import MobileViewPage from "./ViewPage";

export default function Board() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {
          router.query.id
            ? <MobileViewPage />
            : <Community />
        }
      </div>
    </div>
  )
}
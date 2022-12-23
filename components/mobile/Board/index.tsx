import {useRouter} from "next/router";

import styles from "./Board.module.scss";
import Community from "../Community";

export default function Board() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Community />
    </div>
  )
}
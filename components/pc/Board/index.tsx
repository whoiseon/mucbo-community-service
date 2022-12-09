import styles from "../Root/Root.module.scss";
import ChatBox from "../ChatBox";
import Community from "../Community";
import {useRouter} from "next/router";

export default function BoardAll() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ChatBox />
      </div>
      <div className={styles.right}>
        <Community />
      </div>
    </div>
  );
};
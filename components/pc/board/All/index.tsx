import styles from "../../Root/Root.module.scss";
import ChatBox from "../../ChatBox";
import Community from "../../Community";

export default function BoardAll() {
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
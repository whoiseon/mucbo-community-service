import styles from "../Root/Root.module.scss";
import ChatBox from "../ChatBox";
import Community from "../Community";
import {useRouter} from "next/router";
import ViewPage from "./ViewPage";

export default function BoardAll() {
  const router = useRouter();
  const isQaPage = router.asPath.split('/');

  console.log(isQaPage[1]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ChatBox />
      </div>
      <div className={styles.right}>
        {
          router.query.id
            ? <ViewPage />
            : <Community />
        }
      </div>
    </div>
  );
};
import styles from "../Root/Root.module.scss";
import Community from "../Community";
import {useRouter} from "next/router";
import ViewPage from "./ViewPage";

export default function BoardAll() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {
        router.query.id
          ? <ViewPage />
          : <Community />
      }
    </div>
  );
};
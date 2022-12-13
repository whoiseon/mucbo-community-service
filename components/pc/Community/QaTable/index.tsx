import styles from "./QaTable.module.scss";
import Image from "next/image";
import HashTags from "../../HashTags";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";

export default function QaTable() {
  const { posts } = useSelector((state: RootState) => state.post);

  return (
    <div className={styles.wrapper}>
      <ul>
        {
          posts?.message.result.list.map((post: any, i: number) => {
            return (
              <li key={post.wr_id}>
                <div className={styles.commentCount}>
                  <Image
                    src={post.wr_1 ? '/image/icon/qa-select-true.svg' : '/image/icon/qa-select-false.svg'}
                    alt="selection"
                    width={22}
                    height={22}
                  />
                  <p>{ post.wr_comment }</p>
                </div>
                <div className={styles.listContent}>
                  <HashTags item={post.wr_2} />
                  <div className={styles.listTitle}>
                    <Link href={`/qa/${post.wr_id}`}>
                      { post.subject }
                    </Link>
                  </div>
                  <div className={styles.listInfo}>
                    <span>{ post.datetime2 }</span>
                    <span className={styles.contour}> ˑ </span>
                    <span>조회 { post.wr_hit }</span>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

import styles from "./ListTable.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import Member from "../../../common/Member";
import Link from "next/link";
import {useRouter} from "next/router";

//<img src="/image/icon/board-new-content-icon.svg" alt="new board" />

export default function ListTable() {
  const { posts } = useSelector((state: RootState) => state.post);
  const router = useRouter();

  return (
    <table className={styles.table}>
      <colgroup>
        <col style={{ width: '10%' }} />
        <col style={{ width: '50%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '10%' }} />
      </colgroup>
      <thead>
      <tr>
        <th> </th>
        <th>제목</th>
        <th className={styles.left}>작성자</th>
        <th>작성일</th>
        <th>조회</th>
      </tr>
      </thead>
      <tbody>
      {
        posts?.message.result.list.map((post: any, idx: number) => {
          const tag = post.bo_subject === '메이플스토리'
            ? post.bo_subject.substring(0, 3)
            : post.bo_subject === '배틀그라운드'
              ? '배그'
              : post.bo_subject === '피해사례 공유'
                ? '피해사례'
                : post.bo_subject

          return (
            <tr key={post.wr_id}>
              <td>
                {
                  post.is_notice
                    ? <span className={styles.isNotice}>공지</span>
                    : post.is_new
                      ? (
                        <div className={styles.isNewList}>
                          <span className={styles.newIcon}>NEW</span>
                        </div>
                      )
                      : tag || post.num
                }
              </td>
              <td className={styles.left}>
                <div className={styles.subjectContent}>
                  {
                    router.pathname === '/board/all'
                      ? (
                        <Link href={`/${post.gr_id}/${post.bo_table}/${post.wr_id}`}>
                          {post.subject}
                        </Link>
                      )
                      : (
                        <Link href={`${router.asPath}/${post.num}`}>
                          {post.subject}
                        </Link>
                      )
                  }
                  {
                    post.wr_comment > 0 && (
                      <span className={styles.subjectCommentCount}>
                        +{ post.wr_comment }
                      </span>
                    )
                  }
                </div>
              </td>
              <td className={styles.left}>
                <Member nickname={post.wr_name || post.name} level={post.mb_level} width={22} height={22} modalTop={44} />
              </td>
              <td>{post.datetime2}</td>
              <td>{post.wr_hit}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
};

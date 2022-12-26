import styles from "./ListTable.module.scss";
import Member from "../../../common/Member";
import Link from "next/link";
import {useRouter} from "next/router";
import {useCallback} from "react";
import {BoardType, ViewUserWriteDataType} from "../../../../types/board";

interface ListTableProps {
  data: BoardType | ViewUserWriteDataType | null
}

export default function ListTable({ data }: ListTableProps) {
  const router = useRouter();

  const isUserInfoPage = router.pathname.split('/')[1] === 'user'

  const handleLongTagNameToShort = useCallback((tag: string) => {
    switch (tag) {
      case "메이플스토리":
        return "메이플"
      case "던전앤파이터":
        return "던파"
      case "피해사례 공유":
        return "피해사례"
      case "배틀그라운드":
        return "배그"
      case "리그오브레전드":
        return "롤"
      default:
        return tag
    }
  }, []);

  return (
    <table className={styles.table}>
      <colgroup>
        <col style={{ width: '10%' }} />
        {isUserInfoPage ? <col style={{width: '60%'}} /> : <col style={{width: '50%'}}/>}
        {!isUserInfoPage && <col style={{width: '20%'}}/>}
        {isUserInfoPage ? <col style={{width: '15%'}} /> : <col style={{width: '10%'}}/>}
        {isUserInfoPage ? <col style={{width: '15%'}} /> : <col style={{width: '10%'}}/>}
      </colgroup>
      <thead>
      <tr>
        <th> </th>
        <th>제목</th>
        {!isUserInfoPage && <th className={styles.left}>작성자</th>}
        <th>작성일</th>
        <th>조회</th>
      </tr>
      </thead>
      <tbody>
      {
        data?.message.result.list?.map((post: any, idx: number) => {
          return (
            <tr key={post.wr_id} className={ post.is_notice ? styles.notice : '' }>
              <td>
                {
                  post.is_notice
                    ? <span className={styles.isNotice}>공지</span>
                    : handleLongTagNameToShort(post.bo_subject) || post.num
                }
              </td>
              <td className={styles.left}>
                <div className={styles.subjectContent}>
                  {
                    router.query.board === 'board' && router.query.table === 'all' || isUserInfoPage
                      ? (
                        <Link href={`/${post.gr_id}/${post.bo_table}/${post.wr_id}`}>
                          {post.subject}
                        </Link>
                      )
                      : (
                        <Link href={`${router.asPath.split('?')[0]}/${post.wr_id}`}>
                          {post.subject}
                        </Link>
                      )
                  }
                  {
                    post.is_new && (
                      <span className={styles.newSubjectIcon}>
                        <img src="/image/icon/board-new-content-icon.svg" alt="board-new-content-icon" />
                      </span>
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
              {
                !isUserInfoPage && (
                  <td className={styles.left}>
                    <Member
                      userId={post.mb_id}
                      nickname={post.wr_name || post.name}
                      level={post.mb_level}
                      width={22}
                      height={22}
                      modalTop={44}
                      modalLeft={0}
                    />
                  </td>
                )
              }
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

import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import Link from "next/link";

import styles from "./ListBoard.module.scss";
import {useRouter} from "next/router";
import React, {useCallback} from "react";

export default function ListBoard() {
  const router = useRouter();

  const { posts } = useSelector((state: RootState) => state.post);

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
    <div className={styles.wrapper}>
      {
        posts?.message.result.list.map((post: any, i: number) => {
          return (
            <article key={post.wr_id} className={styles.article}>
              <Link href={
                router.query.board === 'board' && router.query.table === 'all' || isUserInfoPage
                  ? `/${post.gr_id}/${post.bo_table}/${post.wr_id}`
                  : `${router.asPath}/${post.wr_id}`
              }>
                <a>
                  <div className={styles.listLeft}>
                    <div className={styles.subject}>
                      <p>{post.subject}</p>
                    </div>
                    <span className={styles.nickname}>
                      {post.wr_name}
                    </span>
                    <div className={styles.info}>
                      <span>{post.datetime2}</span>
                      <span className={styles.contour}>ˑ</span>
                      <span>조회 {post.wr_hit}</span>
                    </div>
                  </div>
                  <div className={styles.listRight}>
                    <div className={styles.comment}>
                      <em>{ post.wr_comment }</em>
                      <span> 댓글 </span>
                    </div>
                  </div>
                </a>
              </Link>
            </article>
          )
        })
      }
    </div>
  );
};

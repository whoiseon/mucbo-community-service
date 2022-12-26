import styles from "./QaBoard.module.scss";
import Link from "next/link";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import {useRouter} from "next/router";
import HashTags from "../../../pc/HashTags";
import Image from "next/image";

export default function QaBoard() {
  const router = useRouter();

  const { posts } = useSelector((state: RootState) => state.post);

  const isUserInfoPage = router.pathname.split('/')[1] === 'user';

  return (
    <div className={styles.wrapper}>
      {
        posts?.message.result.list.map((post: any, i: number) => {
          return (
            <article key={post.wr_id} className={styles.article}>
              <Link href={
                router.query.board === 'board' && router.query.table === 'all' || isUserInfoPage
                  ? `/${post.gr_id}/${post.bo_table}/${post.wr_id}`
                  : `${router.asPath.split('?')[0]}/${post.wr_id}`
              }>
                <a>
                  <div className={styles.listLeft}>
                    <div className={styles.hashTags}>
                      <HashTags item={post.wr_2} />
                    </div>
                    <div className={styles.subject}>
                      <p>
                        {post.subject}
                      </p>
                    </div>
                    <div className={styles.info}>
                      <span>{post.datetime2}</span>
                      <span className={styles.contour}>ˑ</span>
                      <span>조회 {post.wr_hit}</span>
                    </div>
                  </div>
                  <div className={styles.listRight}>
                    <div className={styles.comment}>
                      <Image
                        src={post.wr_1 ? '/image/icon/qa-select-true.svg' : '/image/icon/qa-select-false.svg'}
                        alt="selection"
                        width={20}
                        height={20}
                      />
                      <p>{ post.wr_comment }</p>
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

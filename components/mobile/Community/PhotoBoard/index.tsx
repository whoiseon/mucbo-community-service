import styles from "./PhotoBoard.module.scss";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import {RootState} from "../../../../store/reducers";
import React from "react";
import Member from "../../../common/Member";

export default function PhotoBoard() {
  const router = useRouter();

  const { posts } = useSelector((state: RootState) => state.post);
  const photoData = posts?.message.result.list;

  return (
    <div className={styles.wrapper}>
      <ul>
        {
          photoData?.map((post: any, i) => {
            return (
              <li key={post.wr_id}>
                <Link href={`${router.asPath.split('?')[0]}/${post.wr_id}`}>
                  <a>
                    <img src={post?.thumb?.src} alt={post?.thumb?.alt} />
                  </a>
                </Link>
                <div className={styles.info}>
                  <div className={styles.subject}>
                    <Link href={`${router.asPath}/${post.wr_id}`}>
                      <a>
                        <p>{ post?.subject }</p>
                      </a>
                    </Link>
                  </div>
                  <div className={styles.member}>
                    <Member
                      userId={post?.mb_id}
                      nickname={post?.name}
                      level={post?.mb_level}
                      width={18}
                      height={18}
                      modalTop={24}
                      modalLeft={0}
                    />
                  </div>
                  <div className={styles.postInfo}>
                    <span>{ post.datetime2 }</span>
                    <span className={styles.contour}>ˑ</span>
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

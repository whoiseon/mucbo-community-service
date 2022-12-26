import styles from "./PhotoTable.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import Link from "next/link";
import {useRouter} from "next/router";
import Member from "../../../common/Member";
import React from "react";

export default function PhotoTable() {
  const router = useRouter();

  const { posts } = useSelector((state: RootState) => state.post);
  const photoData = posts?.message.result.list;

  return (
    <ul className={styles.wrapper}>
      {
        photoData?.map((list: any, i) => {
          return (
            <li key={list.wr_id}>
              <Link href={`${router.asPath}/${list.wr_id}`}>
                <a>
                  <img src={list?.thumb?.src} alt={list?.thumb?.alt} />
                </a>
              </Link>
              <div className={styles.info}>
                <div className={styles.title}>
                  <Link href={`${router.asPath.split('?')[0]}/${list.wr_id}`}>
                    <a>
                      <span>{list.subject}</span>
                    </a>
                  </Link>
                </div>
                <div className={styles.user}>
                  <Member
                    userId={list.mb_id}
                    nickname={list.name}
                    level={list.mb_level}
                    width={22}
                    height={22}
                    modalTop={22}
                    modalLeft={0}
                  />
                </div>
                <div className={styles.date}>
                  <span>{ list.datetime }</span>
                  <span className={styles.contour}>ˑ</span>
                  <span>조회 { list.wr_hit }</span>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
};

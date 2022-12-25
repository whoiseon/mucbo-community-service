import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {useState} from "react";

import styles from "./BoardByUser.module.scss";
import Image from "next/image";

import ListBoard from "../Community/ListBoard";
import Pagination from "../Community/Pagination";

export default function BoardByUser() {
  const router = useRouter();

  const { viewUserInfo, viewUserWritePost } = useSelector((state: RootState) => state.post);
  const viewUserData = viewUserInfo?.message.result;

  const [page, setPage] = useState<number>(Number(router.query.page) || 1);

  const totalPage = viewUserWritePost?.message.result.total_count && Math.ceil(viewUserWritePost?.message.result.total_count / 20);

  console.log(viewUserData);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.user}>
          <div className={styles.nickname}>
            <div className={styles.level}>
              <Image
                src={`/image/level/${viewUserData?.mb_level}.svg`}
                alt="Level"
                width={24}
                height={24}
              />
            </div>
            <span>{ viewUserData?.mb_nick }</span>
          </div>
          <div className={styles.detail}>
            <span>작성한 글<i>{ viewUserData?.total_gall }</i></span>
            <span>작성한 댓글<i>{ viewUserData?.total_comment }</i></span>
          </div>
        </div>
        <div className={styles.profile}>
          <Image
            src="/image/icon/no-profile-icon.svg"
            alt="No profile"
            width={80}
            height={80}
          />
        </div>
      </header>
      <div className={styles.boardHeader}>
        <h2>작성한 게시글</h2>
      </div>
      <div className={styles.content}>
        <ListBoard data={viewUserWritePost} />
        <Pagination
          totalPage={totalPage}
          limit={5}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

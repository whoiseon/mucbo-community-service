import styles from "./BoardByUser.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import Image from "next/image";
import Button from "../../common/Button";
import {useRouter} from "next/router";
import ListTable from "../Community/ListTable";
import Pagination from "../Community/Pagination";
import {useState} from "react";

export default function BoardByUser() {
  const router = useRouter();

  const { viewUserInfo, viewUserWritePost } = useSelector((state: RootState) => state.post);
  const viewUserData = viewUserInfo?.message.result;

  const [page, setPage] = useState<number>(Number(router.query.page) || 1);

  const totalPage = viewUserWritePost?.message.result.total_count && Math.ceil(viewUserWritePost?.message.result.total_count / 20);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.profile}>
            <Image
              src="/image/icon/no-profile-icon.svg"
              alt="No profile"
              width={80}
              height={80}
            />
          </div>
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
        </div>
        <div className={styles.tab}>
          <Button type="white" path={`${router.asPath}#`}>
            작성한 글
          </Button>
        </div>
      </header>
      <div className={styles.content}>
        <ListTable data={viewUserWritePost} />
        <Pagination
          totalPage={totalPage}
          limit={10}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

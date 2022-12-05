import styles from "./Community.module.scss";
import {useRouter} from "next/router";
import ListTable from "./ListTable";
import Pagination from "./Pagination";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {useEffect, useState} from "react";

export default function Community() {
  const { posts } = useSelector((state: RootState) => state.post);

  const router = useRouter();

  const [page, setPage] = useState<number>(Number(router.query.page) || 1);
  const listPerPage = 10;
  const totalPage = posts?.message.result.total_count && Math.ceil(posts?.message.result.total_count / 20);

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    } else {
      setPage(1);
    }
  }, [router.query.page])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <h1>전체글보기</h1>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <ListTable />
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
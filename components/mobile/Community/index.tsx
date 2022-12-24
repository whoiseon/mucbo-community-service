import styles from "./Community.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {useRouter} from "next/router";
import useInput from "../../../hooks/useInput";
import {useEffect, useState} from "react";
import ListBoard from "./ListBoard";
import Pagination from "./Pagination";
import QaBoard from "../../mobile/Community/QaBoard";
import PhotoBoard from "./PhotoBoard";

export default function Community() {
  const { posts } = useSelector((state: RootState) => state.post);

  const router = useRouter();

  const [search, onChangeSearch] = useInput('');
  const [page, setPage] = useState<number>(Number(router.query.page) || 1);

  const totalPage = posts?.message.result.total_count && Math.ceil(posts?.message.result.total_count / 20);

  const handleBoardQuarter = () => {
    if (router.pathname === '/qa') {
      return (
        <div className={styles.wrapper}>
          <QaBoard />
        </div>
      )
    } else if (router.query.table === 'photo') {
      return (
        <div className={styles.wrapper}>
          <PhotoBoard />
          <Pagination totalPage={totalPage} limit={5} page={page} setPage={setPage} />
        </div>
      );
    }

    return (
      <div className={styles.wrapper}>
        <ListBoard />
        <Pagination totalPage={totalPage} limit={5} page={page} setPage={setPage} />
      </div>
    )
  };

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page));
    } else {
      setPage(1);
    }
  }, [router.query.page])

  return handleBoardQuarter();
};

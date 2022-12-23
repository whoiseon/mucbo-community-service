import styles from "./Community.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {useRouter} from "next/router";
import useInput from "../../../hooks/useInput";
import {useEffect, useState} from "react";
import {headerMenus} from "../../../data/menus";
import ListBoard from "./ListBoard";
import Pagination from "./Pagination";

export default function Community() {
  const { posts } = useSelector((state: RootState) => state.post);

  const router = useRouter();

  const [search, onChangeSearch] = useInput('');
  const [page, setPage] = useState<number>(Number(router.query.page) || 1);

  const subMenus = headerMenus.find((v) => v.board === router.query.board)
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
      <div className={styles.content}>
        <ListBoard />
        <Pagination totalPage={totalPage} limit={5} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

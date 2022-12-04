import styles from "./Community.module.scss";
import Button from "../../common/Button"
import {useRouter} from "next/router";
import ListTable from "./ListTable";
import Pagination from "./Pagination";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {useEffect} from "react";
import {getPostsAll} from "../../../store/slices/postSlice";
import {AppDispatch} from "../../../store";

export default function Community() {
  const { posts } = useSelector((state: RootState) => state.post);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  console.log(posts);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <h1>전체글보기</h1>
            <button type="button" onClick={() => dispatch(getPostsAll())}>
              get
            </button>
          </div>
          {
            router.pathname === '/board/all' && (
              <div className={styles.titleRight}>
                <Button
                  path={`${router.pathname}/write`}
                  type="primary"
                  afterImg="/image/icon/write-icon.svg"
                >
                  글쓰기
                </Button>
              </div>
            )
          }
        </div>
      </div>
      <div className={styles.content}>
        <ListTable />
        <Pagination />
      </div>
    </div>
  );
};
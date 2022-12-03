import {useEffect, useState} from "react";
import styles from "./Community.module.scss";
import Button from "../../common/Button"
import {useRouter} from "next/router";
import ListTable from "./ListTable";
import Pagination from "./Pagination";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";

export default function Community() {
  const { value } = useSelector((state: RootState) => state.counter);

  const router = useRouter();

  console.log(value);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <h1>전체글보기</h1>
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
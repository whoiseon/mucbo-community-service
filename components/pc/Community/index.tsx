import styles from "./Community.module.scss";
import {useRouter} from "next/router";
import ListTable from "./ListTable";
import Pagination from "./Pagination";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {useCallback, useEffect, useState} from "react";
import useInput from "../../../hooks/useInput";
import { headerMenus } from "../../../data/menus";
import Link from "next/link";
import QaTable from "./QaTable";

export default function Community() {
  const { posts } = useSelector((state: RootState) => state.post);

  const router = useRouter();

  const [search, onChangeSearch] = useInput('');
  const [page, setPage] = useState<number>(Number(router.query.page) || 1);

  const isTable = router.asPath.split('/');
  const subMenus = headerMenus.find((v) => v.table === isTable[1])
  const totalPage = posts?.message.result.total_count && Math.ceil(posts?.message.result.total_count / 20);

  const asPath = router.asPath.split('?')[0]

  const handleTitleSlice = useCallback(() => {
    const title = posts?.message.result.title
    const slicedTitleArray = title?.split(' ');

    if (slicedTitleArray) {
      return slicedTitleArray[2];
    }

    return 'Title - error'
  }, [posts?.message.result.title]);

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
            <h1>{ handleTitleSlice() }</h1>
          </div>
          {
            router.pathname !== '/board/all'
              ? (
                <div className={styles.titleRight}>
                  <div className={styles.searchBox}>
                    <select>
                      <option value="wr_subject">제목</option>
                      <option value="wr_content">내용</option>
                      <option value="wr_subject || wr_content">제목+내용</option>
                      <option value="mb_id,1">회원아이디</option>
                      <option value="mb_id,0">회원아이디(코)</option>
                      <option value="mb_name,1">글쓴이</option>
                      <option value="mb_name,0">글쓴이(코)</option>
                    </select>
                    <input
                      type="text"
                      value={search}
                      onChange={onChangeSearch}
                      placeholder="검색어를 입력해주세요"
                    />
                    <img src="/image/icon/search-icon.svg" alt="search-icon" />
                  </div>
                </div>
              )
              : null
          }
        </div>
        {
          subMenus?.subTable
            ? (
              <div className={styles.headerMenus}>
                {
                  subMenus?.subTable.map((table, i) => {
                    const isActive = asPath === table.path ? `${styles.menuBtn} ${styles.menuActive}` : styles.menuBtn

                    return (
                      <Link key={table.name} href={table.path}>
                        <a className={isActive}>
                          {table.name}
                        </a>
                      </Link>
                    )
                  })
                }
              </div>
            )
            : null
        }
      </div>
      {
        router.pathname !== '/qa'
          ? (
            <div className={styles.content}>
              <ListTable />
              <Pagination
                totalPage={totalPage}
                limit={10}
                page={page}
                setPage={setPage}
              />
            </div>
          )
          : (
            <div className={styles.qaContent}>
              <QaTable />
            </div>
          )
      }
    </div>
  );
};
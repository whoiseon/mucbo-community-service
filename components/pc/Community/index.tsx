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
import PhotoTable from "./PhotoTable";
import Button from "../../common/Button";

export default function Community() {
  const { posts } = useSelector((state: RootState) => state.post);

  const router = useRouter();

  const [search, onChangeSearch] = useInput('');
  const [page, setPage] = useState<number>(Number(router.query.page) || 1);

  const subMenus = headerMenus.find((v) => v.board === router.query.board)
  const totalPage = posts?.message.result.total_count && Math.ceil(posts?.message.result.total_count / 20);

  const handleTitleSlice = useCallback(() => {
    const title = posts?.message.result.title
    const slicedTitleArray = title?.split(' ');

    if (slicedTitleArray) {
      return slicedTitleArray[2];
    }

    return 'Title - error'
  }, [posts?.message.result.title]);

  const handleBoardQuarter = () => {
    if (router.pathname === '/qa') {
      return (
        <div className={styles.qaContent}>
          <QaTable />
        </div>
      )
    } else if (router.query.table === 'photo') {
      return (
        <div className={styles.photoContent}>
          <PhotoTable />
          <Pagination
            totalPage={totalPage}
            limit={10}
            page={page}
            setPage={setPage}
          />
        </div>
      );
    }

    return (
      <div className={styles.content}>
        <ListTable data={posts} />
        <Pagination
          totalPage={totalPage}
          limit={10}
          page={page}
          setPage={setPage}
        />
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <div className={styles.titleLeft}>
            <h1>{ handleTitleSlice() }</h1>
          </div>
          {
            router.query.board !== 'board'
              ? (
                <div className={styles.titleRight}>
                  <div className={styles.searchBox}>
                    <select>
                      <option value="wr_subject">??????</option>
                      <option value="wr_content">??????</option>
                      <option value="wr_subject || wr_content">??????+??????</option>
                      <option value="mb_id,1">???????????????</option>
                      <option value="mb_id,0">???????????????(???)</option>
                      <option value="mb_name,1">?????????</option>
                      <option value="mb_name,0">?????????(???)</option>
                    </select>
                    <input
                      type="text"
                      value={search}
                      onChange={onChangeSearch}
                      placeholder="???????????? ??????????????????"
                    />
                    <img src="/image/icon/search-icon.svg" alt="search-icon" />
                  </div>
                  <div className={styles.writeBox}>
                    <Button
                      type="primary"
                      afterImg="/image/icon/write-icon.svg"
                      path={`${router.asPath.split('?')[0]}/write`}
                    >
                      ?????????
                    </Button>
                  </div>
                </div>
              )
              : null
          }
        </div>
        {
          subMenus?.subTable && !(router.query.board === 'board' || router.pathname === '/qa')
            ? (
              <div className={styles.headerMenus}>
                {
                  subMenus?.subTable.map((table, i) => {
                    const asPath = `/${router.query.board}/${router.query.table}`
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
        handleBoardQuarter()
      }
    </div>
  );
};
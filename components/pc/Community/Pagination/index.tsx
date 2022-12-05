import styles from "./Pagination.module.scss";
import {useRouter} from "next/router";
import Link from "next/link";
import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";

interface PaginationProps {
  totalPage: number | undefined,
  limit: number,
  page: number,
  setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({ totalPage, limit, page, setPage }: PaginationProps) {
  const router = useRouter();

  const [currentPageArray, setCurrentPageArray] = useState<number[] | undefined>([]);
  const [totalPageArray, setTotalPageArray] = useState<number[][] | undefined>([]);

  const sliceArrayByLimit = useCallback((totalPage: number | undefined, limit: number) => {
    if (totalPage) {
      const totalPageArray = Array(totalPage)
        .fill(null)
        .map((_, i) => i);

      return Array(Math.ceil(totalPage / limit))
        .fill(null)
        .map(() => totalPageArray.splice(0, limit));
    }
  }, []);

  useEffect(() => {
    if (totalPageArray) {
      if (page % limit === 1) {
        setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
      } else if (page % limit === 0) {
        setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
      }
    }
  }, [page]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);

    if (slicedPageArray) {
      setTotalPageArray(slicedPageArray);
      setCurrentPageArray(slicedPageArray[0]);
    }
  }, [totalPage]);

  return (
    <div className={styles.pagingWrapper}>
      {
        !(page === 1) && (
          <Link href={`${router.pathname}?page=${page - 1}`}>
            <a>
              <img src="/image/icon/page-prev-icon.svg" alt="page-prev-icon" />
            </a>
          </Link>
        )
      }
      {
        currentPageArray?.map((i) => {
          const defaultPageStyle = !router.query.page && (
            (i + 1) === 1
              ? styles.currentPage
              : ''
          )

          const currentStyle = router.query.page && (
            Number(router.query.page) === (i + 1)
              ? styles.currentPage
              : ''
          )


          return (
            <Link key={i} href={`${router.pathname}?page=${i + 1}`}>
              <a className={`${defaultPageStyle} ${currentStyle}`}>
                { i + 1 }
              </a>
            </Link>
          )
        })
      }
      {
        !(page === totalPage) && (
          <Link href={`${router.pathname}?page=${page + 1}`}>
            <a>
              <img src="/image/icon/page-next-icon.svg" alt="page-next-icon" />
            </a>
          </Link>
        )
      }
    </div>
  )
}
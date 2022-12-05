import styles from "./Pagination.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Pagination() {
  const { posts } = useSelector((state: RootState) => state.post)

  const router = useRouter();
  const limit = posts?.message.result.total_count && Math.ceil(posts?.message.result.total_count / 20);
  const totalPage = Array(limit);
  const totalPageIdx = totalPage.fill('');

  totalPageIdx.forEach((el, idx) => {
    totalPageIdx[idx] = idx + 1;
  })

  const [nowPage, setNowPage] = useState<number>(Number(router.query.page) || 1);

  console.log(nowPage);

  return (
    <div className={styles.pagingWrapper}>
      {
        totalPageIdx.map((page, idx) => {
          const currentPageStyle = page === nowPage ? styles.currentPage : ''

          console.log( page === nowPage )

          return (
            <Link key={page} href={`${router.pathname}?page=${page}`}>
              <a className={currentPageStyle}>
                { page }
              </a>
            </Link>
          )
        })
      }
    </div>
  )
}
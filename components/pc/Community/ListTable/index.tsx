import styles from "./ListTable.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import Member from "../../../common/Member";

export default function ListTable() {
  const { posts } = useSelector((state: RootState) => state.post);

  return (
    <table className={styles.table}>
      <colgroup>
        <col style={{ width: '10%' }} />
        <col style={{ width: '50%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '10%' }} />
      </colgroup>
      <thead>
      <tr>
        <th> </th>
        <th>제목</th>
        <th className={styles.left}>작성자</th>
        <th>작성일</th>
        <th>조회</th>
      </tr>
      </thead>
      <tbody>
      {
        posts?.message.result.list.map((post: any, idx: number) => {
          const tag = post.bo_subject === '메이플스토리'
            ? post.bo_subject.substring(0, 3)
            : post.bo_subject === '배틀그라운드'
              ? '배그'
              : post.bo_subject

          return (
            <tr key={post.wr_id}>
              <td>{tag}</td>
              <td className={styles.left}>{post.subject}</td>
              <td className={styles.left}>
                <Member nickname={post.wr_name} level={post.mb_level} width={22} height={22} />
              </td>
              <td>{post.datetime2}</td>
              <td>{post.wr_hit}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  );
};

import styles from "./ListTable.module.scss";

export default function ListTable() {
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
        <th>#</th>
        <th>제목</th>
        <th className={styles.left}>작성자</th>
        <th>작성일</th>
        <th>조회</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>메이플</td>
        <td className={styles.left}>362 있는사람?</td>
        <td className={styles.left}>123</td>
        <td>123</td>
        <td>123</td>
      </tr>
      <tr>
        <td>메이플</td>
        <td className={styles.left}>362 있는사람?</td>
        <td className={styles.left}>123</td>
        <td>123</td>
        <td>123</td>
      </tr>
      </tbody>
    </table>
  );
};

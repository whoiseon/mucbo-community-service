import styles from "./QaCommentList.module.scss";
import React from "react";
import Button from "../../../common/Button";
import QaComment from "../QaComment";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";

export default function QaCommentList() {
  const { viewPost } = useSelector((state: RootState) => state.post);
  const viewData = viewPost?.message.result;

  return (
    <article className={styles.comment}>
      <div className={styles.commentHeader}>
        <header>
          <span className={styles.qaAnswer}>A. </span>
          <span>
            총 {viewData?.comment_list?.length} 개의 답변이 있습니다.
          </span>
          <div className={styles.answerBtn}>
            <Button type="primary">
              답변 등록
            </Button>
          </div>
        </header>
      </div>
      <section className={styles.commentList}>
        {
          viewData?.comment_list?.map((comment: any, i: number) => {
            console.log(comment);
            return (
              <QaComment key={comment.comment_id} comment={comment} />
            )
          })
        }
      </section>
    </article>
  );
};

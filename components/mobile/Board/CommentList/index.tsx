import styles from "./CommnetList.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import React from "react";
import Comment from "../Comment";
import CommentSendForm from "../CommentSendForm";

export default function CommentList() {
  const { viewPost } = useSelector((state: RootState) => state.post);
  const viewData = viewPost?.message.result;

  return (
    <article className={styles.comment}>
      <div className={styles.commentHeader}>
        <span>댓글</span>
        <span className={styles.count}>{ viewData?.comment_list.length }</span>
      </div>
      <section className={styles.commentList}>
        {
          viewData?.comment_list.map((comment: any, i: number) => {
            return (
              <Comment key={comment.comment_id} comment={comment} />
            )
          })
        }
        <CommentSendForm />
      </section>
    </article>
  );
};

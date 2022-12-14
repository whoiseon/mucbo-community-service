import styles from "./CommentList.module.scss";
import Comment from "../Comment";
import CommentSendForm from "../CommentSendForm";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";

export default function CommentList() {
  const { viewPost } = useSelector((state: RootState) => state.post);
  const viewData = viewPost?.message.result;

  return (
    <article className={styles.comment}>
      <div className={styles.commentHeader}>
        <header>
          <span>댓글</span>
          <span className={styles.count}>{ viewData?.comment_list.length }</span>
        </header>
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

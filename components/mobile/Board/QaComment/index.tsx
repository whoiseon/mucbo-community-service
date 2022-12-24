import React, {useCallback, useState} from "react";
import styles from "./QaComment.module.scss";
import Image from "next/image";
import Member from "../../../common/Member";
import Button from "../../../common/Button";
import CommentSendForm from "../CommentSendForm";

interface QaCommentProps {
  comment: any
}

export default function QaComment({ comment }: QaCommentProps) {
  const [replyForm, setReplyForm] = useState(false);

  const showReplyForm = useCallback(() => {
    setReplyForm((prev) => !prev);
  }, []);

  return (
    <article className={comment?.wr_1 ? `${styles.wrapper} ${styles.selection}` : styles.wrapper}>
      {
        comment?.wr_1 && <div className={styles.selectionIcon}>질문자 채택</div>
      }
      <section className={styles.comment}>
        <div className={styles.commentInfo}>
          <span className={styles.thumb}>
            <Image
              src="/image/icon/no-profile-icon.svg"
              alt="No profile"
              width={36}
              height={36}
            />
          </span>
          <div className={styles.userInfo}>
            <Member
              userId={comment?.mb_id}
              nickname={comment?.name}
              level={comment?.mb_level}
              width={22}
              height={22}
              modalTop={22}
              modalLeft={0}
            />
            <p>{ comment?.date }</p>
          </div>
        </div>
        <div className={styles.commentContent}>
          <div dangerouslySetInnerHTML={{ __html: comment?.comment }} />
        </div>
        <div className={styles.replyBtn}>
          <Button type="white" onClick={showReplyForm}>
            { replyForm ? '답글닫기' : '답글쓰기' }
          </Button>
        </div>
        {
          replyForm && (
            <div className={styles.replyForm}>
              <CommentSendForm />
            </div>
          )
        }
      </section>
      <section className={styles.reply}>
        {
          comment?.reply.map((reply: any, i: number) => {
            return (
              <article key={reply.comment_id} className={styles.replyComment}>
                <div className={styles.replyIcon}>
                  <Image
                    src="/image/icon/reply-icon.svg"
                    alt="reply"
                    width={18}
                    height={13}
                  />
                </div>
                <div className={styles.replyCommentInfo}>
                  <span className={styles.thumb}>
                    <Image
                      src="/image/icon/no-profile-icon.svg"
                      alt="No profile"
                      width={36}
                      height={36}
                    />
                  </span>
                  <div className={styles.userInfo}>
                    <Member
                      userId={reply.mb_id}
                      nickname={reply.name}
                      level={reply.mb_level}
                      width={22}
                      height={22}
                      modalTop={22}
                      modalLeft={0}
                    />
                    <p>{ reply.date }</p>
                  </div>
                </div>
                <div className={styles.replyCommentContent}>
                  <p dangerouslySetInnerHTML={{ __html: reply.comment }} />
                </div>
              </article>
            )
          })
        }
      </section>
    </article>
  );
};

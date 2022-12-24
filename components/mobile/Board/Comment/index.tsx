import styles from "./Commnet.module.scss";
import React, {useCallback, useState} from "react";
import Image from "next/image";
import Member from "../../../common/Member";
import Button from "../../../common/Button";
import CommentSendForm from "../CommentSendForm";

interface CommentProps {
  comment: any;
}

export default function Comment({ comment }: CommentProps) {
  const [replyForm, setReplyForm] = useState(false);

  const showReplyForm = useCallback(() => {
    setReplyForm((prev) => !prev);
  }, []);

  return (
    <article className={comment.is_reply ? `${styles.comment} ${styles.reply}` : styles.comment}>
      {
        comment.is_reply && (
          <div className={styles.replyIcon}>
            <Image
              src="/image/icon/reply-icon.svg"
              alt="reply"
              width={18}
              height={13}
            />
          </div>
        )
      }
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
            userId={comment.mb_id}
            nickname={comment.name}
            level={comment.mb_level}
            width={22}
            height={22}
            modalTop={22}
            modalLeft={0}
          />
          <p>{ comment.date }</p>
        </div>
      </div>
      <div className={styles.commentContent}>
        <p dangerouslySetInnerHTML={{ __html: comment.comment }} />
      </div>
      {
        !comment.is_reply && (
          <div className={styles.replyBtn}>
            <Button type="white" onClick={showReplyForm}>
              { replyForm ? '답글닫기' : '답글쓰기' }
            </Button>
          </div>
        )
      }
      {
        replyForm && (
          <div className={styles.replyForm}>
            <CommentSendForm />
          </div>
        )
      }
    </article>
  );
};

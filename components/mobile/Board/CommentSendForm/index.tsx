import styles from "./CommentSendForm.module.scss";
import useInput from "../../../../hooks/useInput";
import Button from "../../../common/Button";
import React from "react";

export default function CommentSendForm() {
  const [comment, onChangeComment] = useInput('');

  return (
    <aside className={styles.commentSendForm}>
      <div className={styles.formWrapper}>
        <textarea
          className={styles.sendBox}
          value={comment}
          onChange={onChangeComment}
          placeholder="로그인 후 이용 가능합니다."
          readOnly={true}
        />
        <div className={styles.confirm}>
          <Button type="primary">
            등록
          </Button>
        </div>
      </div>
    </aside>
  )
}
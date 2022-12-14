import styles from "./CommentForm.module.scss";
import Button from "../../../common/Button";
import React from "react";
import useInput from "../../../../hooks/useInput";

export default function CommentForm() {
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
  );
};
import React, {useCallback, useState} from "react";
import {useSelector} from "react-redux";
import dynamic from "next/dynamic";

import styles from "./QaCommentList.module.scss";

import Button from "../../../common/Button";
import QaComment from "../QaComment";
import {RootState} from "../../../../store/reducers";

const Editor = dynamic(() => import("../../Editor"), { ssr: false });

export default function QaCommentList() {
  const { viewPost } = useSelector((state: RootState) => state.post);
  const viewData = viewPost?.message.result;

  const [answer, setAnswer] = useState("");
  const [openAnswer, setOpenAnswer] = useState(false);

  const onClickOpenAnswer = useCallback(() => {
    setOpenAnswer((prev) => !prev);
  }, []);

  return (
    <article className={styles.comment}>
      <div className={styles.commentHeader}>
        <header>
          <span className={styles.qaAnswer}>A. </span>
          <span>
            총 {viewData?.comment_list?.length} 개의 답변이 있습니다.
          </span>
          <div className={styles.answerBtn}>
            <Button type="primary" onClick={onClickOpenAnswer}>
              { openAnswer ? "답변 취소" : "답변 등록" }
            </Button>
          </div>
        </header>
      </div>
      {
        openAnswer && (
          <Editor
            value={answer}
            setValue={setAnswer}
            height="500px"
          />
        )
      }
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

import {useState, Suspense, useCallback} from "react";
import dynamic from "next/dynamic";
import styles from "./WritePage.module.scss";
import Button from "../../common/Button";
import useInput from "../../../hooks/useInput";
import {useRouter} from "next/router";

const Editor = dynamic(() => import("../Editor"), { ssr: false });

export default function WritePage() {
  const router = useRouter();

  const [data, setData] = useState("");
  const [subject, onChangeSubject] = useInput("");
  const [hashTags, onChangeHashTags] = useInput("");

  const onClickWrite = useCallback(() => {
    console.log({
      subject,
      data,
      hashTags: hashTags.split(' '),
    })
  }, [subject, data, hashTags]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.subjectInput}>
        <input
          type="text"
          value={subject}
          onChange={onChangeSubject}
          placeholder="제목을 입력해주세요"
        />
        <Button type="primary" onClick={onClickWrite}>
          등록
        </Button>
      </div>
      {
        router.pathname === '/qa/write' && (
          <div className={styles.qaHashTags}>
            <input
              type="text"
              value={hashTags}
              onChange={onChangeHashTags}
              placeholder="태그를 입력해주세요 ex #먹보 #닷컴"
            />
          </div>
        )
      }
      <Suspense fallback={<div>로딩중...</div>}>
        <Editor
          value={data}
          setValue={setData}
          height="800px"
        />
      </Suspense>
    </div>
  );
};

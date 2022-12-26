import {useRouter} from "next/router";
import {useCallback, useState} from "react";
import useInput from "../../../hooks/useInput";
import {inspect} from "util";

import styles from "./WritePage.module.scss";
import dynamic from "next/dynamic";

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
      <button type="button" className={styles.writeSend} onClick={onClickWrite}>
        작성
      </button>
      <div className={styles.writeInputWrapper}>
        <input
          type="text"
          value={subject}
          onChange={onChangeSubject}
          placeholder="제목을 입력해주세요"
        />
      </div>
      {
        router.pathname === '/qa/write' && (
          <div className={styles.writeInputWrapper}>
            <input
              type="text"
              value={hashTags}
              onChange={onChangeHashTags}
              placeholder="해쉬태그를 입력해주세요 ex #먹보 #닷컴"
            />
          </div>
        )
      }
      <div className={styles.writeArea}>
        <Editor
          value={data}
          setValue={setData}
          height="auto"
        />
      </div>
    </div>
  );
};

import styles from "./LoginForm.module.scss";
import Input from "../../../common/Input";
import useInput from "../../../../hooks/useInput";
import Button from "../../../common/Button";
import Link from "next/link";
import {getCookies} from "cookies-next";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {memberLogin} from "../../../../store/slices/userSlice";
import {AppDispatch} from "../../../../store";

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  // const onClickLogin = useCallback(async () => {
  //   const session = getCookies()["PHPSESSID"];
  //
  //   await dispatch(memberLogin({
  //     id,
  //     password,
  //     session: session || ''
  //   }));
  // }, [id, password]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginLineBox}>
        <div className={styles.line} />
        <div className={styles.lineText}>
          <span>먹보닷컴 아이디로 로그인</span>
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <p>아이디</p>
        <Input
          type="text"
          style="border"
          value={id}
          onChange={onChangeId}
        />
      </div>
      <div className={styles.inputWrapper}>
        <p>비밀번호</p>
        <Input
          type="password"
          style="border"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className={styles.forgot}>
        <Link href="/forgot">
          계정찾기
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="primary-100">
          로그인
        </Button>
      </div>
      <div className={styles.signUp}>
        <span>아직 회원이 아니신가요?</span>
        <Link href="/signup">
          <a>
            회원가입
          </a>
        </Link>
      </div>
    </div>
  )
}
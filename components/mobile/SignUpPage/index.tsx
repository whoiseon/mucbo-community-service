import styles from "./SignUpPage.module.scss";
import Input from "../../common/Input";

import useInput from "../../../hooks/useInput";
import Button from "../../common/Button";

export default function SignUpPage() {
  const [email, onChangeEmail] = useInput("");
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <p>이메일</p>
        <Input
          type="text"
          style="border"
          value={email}
          onChange={onChangeEmail}
        />
        <div className={styles.auth}>
          <Button type="white">
            인증번호 받기
          </Button>
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
      <div className={styles.inputWrapper}>
        <p>비밀번호 확인</p>
        <Input
          type="password"
          style="border"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
      </div>
      <div className={styles.agree}>
        <input type="checkbox" />
        <span>개인정보수집 및 약관에 동의하시곘습니까?</span>
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="primary-100" disabled={true}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

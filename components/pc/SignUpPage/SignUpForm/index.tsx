import styles from "../../LoginPage/LoginForm/LoginForm.module.scss";
import Input from "../../../common/Input";
import useInput from "../../../../hooks/useInput";
import Button from "../../../common/Button";
import Link from "next/link";

export default function SignUpForm() {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginLineBox}>
        <div className={styles.line} />
        <div className={styles.lineText}>
          <span>회원가입에 필요한 정보를 입력해주세요</span>
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
        <Button type="primary-100">
          회원가입
        </Button>
      </div>
      <div className={styles.signUp}>
        <span>이미 회원인신가요?</span>
        <Link href="/login">
          <a>
            로그인
          </a>
        </Link>
      </div>
    </div>
  )
}
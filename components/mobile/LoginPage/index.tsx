import Image from "next/image";
import styles from "./LoginPage.module.scss";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/image/logo/logo.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </div>
        <h1>안녕하세요 먹보닷컴입니다.</h1>
      </div>
      <div className={styles.loginLineBox}>
        <div className={styles.line} />
        <div className={styles.lineText}>
          <span>먹보닷컴 아이디로 로그인</span>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

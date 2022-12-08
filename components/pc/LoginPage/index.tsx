import styles from "./LoginPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loginForm}>
        <div className={styles.logo}>
          <Link href="/board/all">
            <a>
              <Image
                src="/image/logo/logo.svg"
                alt="logo"
                width={46}
                height={46}
              />
            </a>
          </Link>
          <h1 className={styles.hello}>안녕하세요 먹보닷컴입니다.</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
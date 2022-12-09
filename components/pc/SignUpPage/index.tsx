import styles from "./SignUpPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.signUpForm}>
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
        <SignUpForm />
      </div>
    </div>
  );
};
import Link from "next/link";
import Image from "next/image";

import styles from "./WhiteHeader.module.scss";
import {useRouter} from "next/router";

interface WhiteHeaderProps {
  title: string
}

export default function WhiteHeader({ title }: WhiteHeaderProps) {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <h2>{ title }</h2>
      {
        router.pathname === '/signup' && (
          <Link href="/login">
            <a className={styles.close}>
              <div className={styles.icon}>
                <Image
                  src="/image/icon/close-icon.svg"
                  alt="close"
                  width={18}
                  height={18}
                />
              </div>
            </a>
          </Link>
        )
      }
    </div>
  );
};

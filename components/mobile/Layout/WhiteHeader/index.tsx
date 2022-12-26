import Link from "next/link";
import Image from "next/image";

import styles from "./WhiteHeader.module.scss";
import {useRouter} from "next/router";

interface WhiteHeaderProps {
  title: string,
  isWritePage: boolean,
}

export default function WhiteHeader({ title, isWritePage }: WhiteHeaderProps) {
  const router = useRouter();

  const finalSlashIndex = router.asPath.lastIndexOf('/');
  const prevPath = router.asPath.slice(0, finalSlashIndex)

  return (
    <div className={styles.wrapper}>
      {
        isWritePage && (
          <Link href={prevPath}>
            <a className={styles.prev}>
              <div className={styles.icon}>
                <Image
                  src="/image/icon/mobile-menu-arrow-icon.svg"
                  alt="close"
                  width={18}
                  height={18}
                />
              </div>
            </a>
          </Link>
        )
      }
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

import styles from "./FooterNavItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

interface FooterNavItemProps {
  name: string,
  board: string,
  path: string,
  icon: string,
}

export default function FooterNavItem({ name, path, board, icon }: FooterNavItemProps) {
  const router = useRouter();

  const isActive = router.asPath.includes(board) ? styles.active : '';

  return board === 'config'
    ? (
      <button className={styles.wrapper}>
        <div className={styles.icon}>
          <Image
            src={icon}
            alt="footerIcon"
            width={20}
            height={20}
          />
        </div>
        <span>{ name }</span>
      </button>
    )
    : (
      <Link href={path}>
        <a className={`${styles.wrapper} ${isActive}`}>
          <div className={styles.icon}>
            <Image
              src={icon}
              alt="footerIcon"
              width={20}
              height={20}
            />
          </div>
          <span>{ name }</span>
        </a>
      </Link>
    )
};

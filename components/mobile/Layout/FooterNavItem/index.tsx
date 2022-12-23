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

  return (
    <Link href={path}>
      <a className={`${styles.wrapper} ${isActive}`}>
        <div className={styles.icon}>
          <Image
            src={icon}
            alt="footerIcon"
            width={18}
            height={18}
          />
        </div>
        <span>{ name }</span>
      </a>
    </Link>
    )
};

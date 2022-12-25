import styles from "./FooterNavItem.module.scss";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {Dispatch, SetStateAction, useCallback} from "react";

interface FooterNavItemProps {
  name: string,
  board: string,
  path: string,
  icon: string,
  nowMenu: string,
  setNowMenu: Dispatch<SetStateAction<string>>
  setConfigModal: Dispatch<SetStateAction<boolean>>
}

export default function FooterNavItem({ name, path, board, icon, nowMenu, setNowMenu, setConfigModal }: FooterNavItemProps) {
  const router = useRouter();

  const isActive = nowMenu === name ? styles.active : '';

  const onClickMenu = (e: any) => {
    setNowMenu(e.target.textContent);
    setConfigModal(false);
  };

  return (
    <Link href={path}>
      <a className={`${styles.wrapper} ${isActive}`} onClick={onClickMenu}>
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

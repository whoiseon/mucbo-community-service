import {Dispatch, SetStateAction, useCallback} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ConfigModal.module.scss";

interface ConfigModalProps {
  configModal: boolean;
  setConfigModal: Dispatch<SetStateAction<boolean>>
}

export default function ConfigModal({ configModal, setConfigModal }: ConfigModalProps) {
  const showModal = configModal ? styles.active : ''

  const onCloseConfigModal = useCallback(() => {
    setConfigModal(false);
  }, []);

  return (
    <div className={`${styles.wrapper} ${showModal}`}>
      <div className={styles.header}>
        <h1>설정</h1>
        <div className={styles.menuBox}>
          <Link href="/login">
            <a className={styles.item} onClick={onCloseConfigModal}>
              <div className={styles.text}>
                로그인
              </div>
              <div className={styles.icon}>
                <Image
                  src="/image/icon/mobile-menu-arrow-icon.svg"
                  alt="menu arrow icon"
                  width={16}
                  height={16}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.menuList}>
        <div className={styles.menuBox}>
          <Link href="/customer/notice">
            <a className={styles.item} onClick={onCloseConfigModal}>
              <div className={styles.text}>
                공지사항
              </div>
              <div className={styles.icon}>
                <Image
                  src="/image/icon/mobile-menu-arrow-icon.svg"
                  alt="menu arrow icon"
                  width={16}
                  height={16}
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.menuBox}>
          <Link href="/#">
            <a className={styles.item} onClick={onCloseConfigModal}>
              <div className={styles.text}>
                전체채팅
              </div>
              <div className={styles.icon}>
                <Image
                  src="/image/icon/mobile-menu-arrow-icon.svg"
                  alt="menu arrow icon"
                  width={16}
                  height={16}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

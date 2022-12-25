import styles from "./FooterNav.module.scss";
import FooterNavItem from "../FooterNavItem";
import {mobileFooterMenus} from "../../../../data/menus";
import Image from "next/image";
import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import {useRouter} from "next/router";

interface FooterNavProps {
  configModal: boolean
  setConfigModal: Dispatch<SetStateAction<boolean>>
}

export default function FooterNav({ configModal, setConfigModal }: FooterNavProps) {
  const router = useRouter();

  const handleNowMenuInitialValue = () => {
    switch (router.asPath.split('/')[1]) {
      case "board":
        return '홈'
      case "community":
        return '커뮤니티'
      case "games":
        return '게임들'
      case "qa":
        return 'Q&A'
      default:
        return ""
    }
  };

  const [nowMenu, setNowMenu] = useState(handleNowMenuInitialValue());

  const onClickShowConfig = useCallback(() => {
    setNowMenu('설정');
    setConfigModal((prev) => !prev);
  }, []);

  const isConfigActive = nowMenu === '설정' ? styles.active : '';

  useEffect(() => {
    if (!configModal) {
      setNowMenu(handleNowMenuInitialValue());
    }
  }, [configModal]);

  return (
    <nav className={styles.wrapper}>
      {
        mobileFooterMenus.map((menu, i) => {
          return (
            <FooterNavItem
              key={menu.name}
              name={menu.name}
              board={menu.board}
              path={menu.path}
              icon={menu.icon}
              nowMenu={nowMenu}
              setNowMenu={setNowMenu}
              setConfigModal={setConfigModal}
            />
          )
        })
      }
      <button className={`${styles.configButton} ${isConfigActive}`} onClick={onClickShowConfig}>
        <div className={styles.icon}>
          <Image
            src="/image/icon/config-icon.svg"
            alt="footerIcon"
            width={18}
            height={18}
          />
        </div>
        <span>설정</span>
      </button>
    </nav>
  );
};

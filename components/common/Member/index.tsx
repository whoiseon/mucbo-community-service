import {useCallback, useState} from "react";
import styles from "./Member.module.scss";
import Image from 'next/image';
import Modal from "./Modal";

interface MemberProps {
  nickname: string,
  level: string,
  width: number,
  height: number,
}

export default function Member({ nickname, level, width, height }: MemberProps) {
  const [openUserModal, setOpenUserModal] = useState<boolean>(false);

  const onClickOpenModal = useCallback(() => {
    setOpenUserModal((prev) => !prev);
  }, []);

  return (
    <>
      <button
        type="button"
        className={styles.member}
        onClick={onClickOpenModal}
      >
        <Image
          src={`/image/level/${level}.svg`}
          width={width}
          height={height}
        />
        <span className={styles.nickname}>{ nickname }</span>
      </button>
      {openUserModal && <Modal setOpenUserModal={setOpenUserModal}/> }
    </>
  )
}
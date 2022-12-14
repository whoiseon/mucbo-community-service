import React, {useCallback, useState} from "react";
import styles from "./Member.module.scss";
import Image from 'next/image';
import Modal from "../Modal";

interface MemberProps {
  nickname: string,
  level: string,
  width: number,
  height: number,
  modalTop: number,
  modalLeft: number
}

export default function Member({ nickname, level, width, height, modalTop, modalLeft }: MemberProps) {
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
          alt="level image"
          width={width}
          height={height}
        />
        <span className={styles.nickname}>{ nickname }</span>
      </button>
      {
        openUserModal && (
          <Modal setOpenUserModal={setOpenUserModal} modalTop={modalTop} modalLeft={modalLeft}>
            <ul>
              <li>
                <button type="button">
                  게시글보기
                </button>
              </li>
              <li>
                <button type="button">
                  1:1 채팅
                </button>
              </li>
            </ul>
          </Modal>
        )
      }
    </>
  )
}
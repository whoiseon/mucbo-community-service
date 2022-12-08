import React, {Dispatch, SetStateAction, useCallback, useEffect, useRef} from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  setOpenUserModal: Dispatch<SetStateAction<boolean>>
  modalTop: number
}

export default function Modal({ setOpenUserModal, modalTop }: ModalProps) {
  const ModalRef = useRef<HTMLDivElement>(null);

  const onClickCloseModal = useCallback(() => {
    setOpenUserModal(false);
  }, [setOpenUserModal]);

  useEffect(() => {
    const handler = (e: any) => {
      if (ModalRef.current && !ModalRef.current.contains(e.target)) {
        setOpenUserModal(false);
      } else {
        setOpenUserModal(true);
      }
    }

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={styles.root}
      style={{ top: `${modalTop}px` }}
      onClick={onClickCloseModal}
      ref={ModalRef}
    >
      <div className={styles.wrapper}>
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
      </div>
    </div>
  );
};
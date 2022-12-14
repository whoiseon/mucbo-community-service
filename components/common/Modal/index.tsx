import React, {Dispatch, SetStateAction, useCallback, useEffect, useRef} from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  setOpenUserModal: Dispatch<SetStateAction<boolean>>
  modalTop: number,
  modalLeft: number,
  children: string | JSX.Element,
}

export default function Modal({ setOpenUserModal, modalTop, modalLeft, children }: ModalProps) {
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
      style={{ top: `${modalTop}px`, left: `${modalLeft}px` }}
      onClick={onClickCloseModal}
      ref={ModalRef}
    >
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
};
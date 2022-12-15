import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import styles from "./ViewPage.module.scss";
import Member from "../../../common/Member";
import Image from "next/image";
import Button from "../../../common/Button";
import Modal from "../../../common/Modal";
import React, {useCallback, useState} from "react";
import {useRouter} from "next/router";
import CommentList from "../CommentList";
import HashTags from "../../HashTags";
import QaCommentList from "../QaCommentList";

export default function ViewPage() {
  const router = useRouter();

  const { viewPost } = useSelector((state: RootState) => state.post);

  const [moreModal, setMoreModal] = useState(false);

  const openListMoreModal = useCallback(() => {
    setMoreModal((prev) => !prev);
  }, []);

  const isQaPage = router.asPath.split('/')[1];

  const viewData = viewPost?.message.result;

  return (
    <div className={styles.wrapper}>
      <article className={styles.content}>
        <div className={styles.viewHeader}>
          <header>
            <h1 className={styles.headerTitle}>
              {
                isQaPage === 'qa' && <span className={styles.qaTitle}>Q. </span>
              }
              { viewData?.subject }
            </h1>
          </header>
          <section>
            <div className={styles.left}>
              <div>
                <Member
                  userId={viewData?.mb_id}
                  nickname={viewData?.name}
                  level={viewData?.mb_level}
                  width={22}
                  height={22}
                  modalTop={24}
                  modalLeft={0}
                />
              </div>
              <span className={styles.contour}>ˑ</span>
              <div>
                { viewData?.date }
              </div>
              <span className={styles.contour}>ˑ</span>
              <div>
                조회 { viewData?.wr_hit }
              </div>
            </div>
            <div className={styles.right}>
              <Button type="svg" onClick={openListMoreModal}>
                <Image
                  src="/image/icon/more-btn-icon.svg"
                  alt="board more button"
                  width={16}
                  height={16}
                />
              </Button>
              {
                moreModal && (
                  <Modal setOpenUserModal={setMoreModal} modalTop={38} modalLeft={-86}>
                    <ul>
                      <li>
                        <button type="button">
                          URL 복사
                        </button>
                      </li>
                      <li>
                        <button type="button">
                          게시물 신고
                        </button>
                      </li>
                    </ul>
                  </Modal>
                )
              }
            </div>
          </section>
        </div>
        <section className={styles.viewContent}>
          <div className={styles.text} dangerouslySetInnerHTML={{ __html: viewData?.content }} />
          {
            isQaPage === 'qa'
              ? (
                <div className={styles.hashList}>
                  <HashTags item={viewData?.wr_2} />
                </div>
              )
              : null
          }
        </section>
      </article>
      {
        isQaPage === 'qa'
          ? <QaCommentList />
          : <CommentList />
      }
    </div>
  );
};

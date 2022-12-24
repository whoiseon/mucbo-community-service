import styles from "./ViewPage.module.scss";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import React, {useCallback, useState} from "react";
import Member from "../../../common/Member";
import Button from "../../../common/Button";
import Image from "next/image";
import Modal from "../../../common/Modal";
import HashTags from "../../../pc/HashTags";
import QaCommentList from "../QaCommentList";
import CommentList from "../CommentList";

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
    <article className={styles.article}>
      <header className={styles.header}>
        <h2>
          {
            isQaPage === 'qa' && <span className={styles.qaTitle}>Q. </span>
          }
          { viewData?.subject }
        </h2>
        <div className={styles.member}>
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
        <div className={styles.info}>
          <span>{ viewData?.date }</span>
          <span className={styles.contour}>ˑ</span>
          <span>조회 { viewData?.wr_hit }</span>
        </div>
        <div className={styles.more}>
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
              <Modal setOpenUserModal={setMoreModal} modalTop={58} modalLeft={-68}>
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
      </header>
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
      {
        isQaPage === 'qa'
          ? <QaCommentList />
          : <CommentList />
      }
    </article>
  );
};

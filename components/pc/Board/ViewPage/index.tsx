import {useSelector} from "react-redux";
import {RootState} from "../../../../store/reducers";
import styles from "./ViewPage.module.scss";
import Member from "../../../common/Member";
import Image from "next/image";

export default function ViewPage() {
  const { viewPost } = useSelector((state: RootState) => state.post);
  const viewData = viewPost?.message.result;
  console.log(viewPost);

  return (
    <div className={styles.wrapper}>
      <article className={styles.content}>
        <div className={styles.viewHeader}>
          <header>
            <h1 className={styles.headerTitle}>
              { viewData?.subject}
            </h1>
          </header>
          <section>
            <div className={styles.left}>
              <div>
                <Member
                  nickname={viewData?.name}
                  level={viewData?.mb_level}
                  width={22}
                  height={22}
                  modalTop={24}
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
              456
            </div>
          </section>
        </div>
        <section className={styles.viewContent}>
          <div dangerouslySetInnerHTML={{ __html: viewData?.content }} />
        </section>
      </article>
      <article className={styles.comment}>
        <div className={styles.commentHeader}>
          <header>
            <span>댓글</span>
            <span className={styles.count}>{ viewData?.comment_list.length }</span>
          </header>
        </div>
        <section className={styles.commentList}>
          {
            viewData?.comment_list.map((comment: any, i: number) => {
              return (
                <article key={comment.comment_id} className={comment.is_reply && styles.reply}>
                  {
                    comment.is_reply && (
                      <div className={styles.replyIcon}>
                        <Image
                          src="/image/icon/reply-icon.svg"
                          alt="reply"
                          width={18}
                          height={13}
                        />
                      </div>
                    )
                  }
                  <div className={styles.commentInfo}>
                    <span className={styles.thumb}>
                      <Image
                        src="/image/icon/no-profile-icon.svg"
                        alt="No profile"
                        width={36}
                        height={36}
                      />
                    </span>
                    <div className={styles.userInfo}>
                      <Member nickname={comment.name} level={comment.mb_level} width={22} height={22} modalTop={22} />
                      <p>{ comment.date }</p>
                    </div>
                  </div>
                  <div className={styles.commentContent}>
                    <p dangerouslySetInnerHTML={{ __html: comment.comment }} />
                  </div>
                </article>
              )
            })
          }
        </section>
      </article>
    </div>
  );
};

import styles from './NotFound.module.scss';
import Image from 'next/image';
import Button from "../../common/Button";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.errorIcon}>
          <Image
            src="/image/icon/404-icon.svg"
            alt="404 page"
            width={160}
            height={136}
          />
        </div>
        <div className={styles.content}>
          <h1>페이지를 찾을 수 없습니다!</h1>
          <p>
            찾으시는 페이지의 주소가 잘못 입력되었거나, <br />
            페이지 주소의 변경 혹은 삭제로 인해 현재 사용하실 수 없습니다. <br />
            입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.
          </p>
        </div>
        <div className={styles.goHomeBtn}>
          <Button type="primary" path="/board/all">
            홈으로 돌아갈래요
          </Button>
        </div>
      </div>
    </div>
  );
};

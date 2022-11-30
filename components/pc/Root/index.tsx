import styles from './Root.module.scss';
import ChatBox from '../ChatBox';

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ChatBox />
      </div>
      <div className={styles.right}>
        <p>123</p>
      </div>
    </div>
  );
};
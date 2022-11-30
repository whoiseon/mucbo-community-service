import styles from "./ChatBox.module.scss";
import useInput from "../../../hooks/useInput";

import Input from "../../common/Input";
import ChatList from "../ChatList";

export default function ChatBox() {
  const [message, onChangeMessage] = useInput('');

  console.log(message);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>
          전체채팅
        </h1>
        <span>21</span>
      </div>
      <div className={styles.container}>
        <ChatList />
        <div className={styles.sendForm}>
          <Input
            placeholder="로그인 후 이용 가능합니다."
            readOnly={true}
            value={message}
            onChange={onChangeMessage}
          />
        </div>
      </div>
    </div>
  );
};
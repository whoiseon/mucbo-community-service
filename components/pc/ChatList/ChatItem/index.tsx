import styles from "./ChatItem.module.scss";
import {ChatDataType} from "../../../../data/chatDummyData";
import Member from "../../../common/Member";

interface ChatItemProps {
  chat: ChatDataType,
}

export default function ChatItem({ chat }: ChatItemProps) {
  return (
    <div className={styles.wrapper}>
      <Member
        nickname={chat.user.nickname}
        level={chat.user.level}
        width={24}
        height={24}
        modalTop={24}
        modalLeft={0}
      />
      <span>{ chat.body.message }</span>
    </div>
  );
};
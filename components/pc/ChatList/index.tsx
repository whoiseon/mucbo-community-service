import React from 'react';
import styles from './ChatList.module.scss';
import chatDummyData from "../../../data/chatDummyData";
import ChatItem from "./ChatItem";

const ChatList = () => {
  return (
    <div className={styles.wrapper}>
      <ul>
        {
          chatDummyData.map((chat, idx) => {
            return (
              <li key={chat.id}>
                <ChatItem chat={chat} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default ChatList;

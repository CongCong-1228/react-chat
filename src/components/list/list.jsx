import React from "react";
import styles from "./list.module.less";
import UserInfo from "@components/list/userInfo/userInfo.jsx";
import ChatList from "@components/list/chatList/chatList.jsx";

const List = () => {
  return (
    <div className={styles.list}>
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;

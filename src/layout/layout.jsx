import React from "react";
import "./layout.less";
import List from "@/components/list/list.jsx";
import Detail from "@components/detail/detail.jsx";
import Chat from "@components/chat/chat.jsx";
import Login from "../components/login/login.jsx";

const Layout = () => {
  const user = false;

  return user ? (
    <div className="layout">
      <List />
      <Chat />
      <Detail />
    </div>
  ) : (
    <Login />
  );
};

export default Layout;

import React from 'react';
import './layout.less'
import List from "@/components/list/list.jsx";
import Detail from "@components/detail/detail.jsx";
import Chat from "@components/chat/chat.jsx";

const Layout = () => {
    return (
        <div className="layout">
            <List/>
            <Chat/>
            <Detail/>
        </div>
    );
};

export default Layout;

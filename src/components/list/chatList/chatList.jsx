import React, { useState } from 'react';
import styles from './chatList.module.less'
import avatar from 'public/images/avatar.png'
import minus from 'public/images/minus.png'
import search from 'public/images/search.png'
import plus from 'public/images/plus.png'

const ChatList = () => {

    const [addMode, setAddMode] = useState(false)

    return (
        <div className={ styles.chatList }>
            <div className={ styles.search }>
                <div className={ styles.searchBar }>
                    <img src={ search } alt=""/>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src={ addMode ? minus : plus } alt="" className={ styles.add }
                     onClick={ () => setAddMode((addMode) => !addMode) }/>
            </div>
            <div className={ styles.item }>
                <img src={ avatar } alt="avatar"/>
                <div className={ styles.texts }>
                    <span>Yang Yu Yu</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className={ styles.item }>
                <img src={ avatar } alt="avatar"/>
                <div className={ styles.texts }>
                    <span>Yang Yu Yu</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className={ styles.item }>
                <img src={ avatar } alt="avatar"/>
                <div className={ styles.texts }>
                    <span>Yang Yu Yu</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className={ styles.item }>
                <img src={ avatar } alt="avatar"/>
                <div className={ styles.texts }>
                    <span>Yang Yu Yu</span>
                    <p>Hello</p>
                </div>
            </div>

        </div>
    );
};

export default ChatList;

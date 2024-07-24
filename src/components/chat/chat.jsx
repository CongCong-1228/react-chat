import React from 'react';
import styles from './chat.module.less'
import avatar from 'public/images/avatar.png'
import phone from 'public/images/phone.png'
import video from 'public/images/video.png'
import info from 'public/images/info.png'
import camera from 'public/images/camera.png'
import imgIcon from 'public/images/img.png'
import mic from 'public/images/mic.png'
import emoji from 'public/images/emoji.png'

const Chat = () => {
    return (
        <div className={ styles.chat }>
            <div className={ styles.top }>
                <div className={ styles.user }>
                    <img src={ avatar } alt=""/>
                    <div className={ styles.texts }>
                        <span>Yang Yu Yu</span>
                        <p>I like Cong Cong</p>
                    </div>
                </div>
                <div className={ styles.icons }>
                    <img src={ phone } alt="phone"/>
                    <img src={ video } alt="video"/>
                    <img src={ info } alt="info"/>
                </div>
            </div>
            <div className={ styles.center }></div>
            <div className={ styles.bottom }>
                <div className={ styles.icons }>
                    <img src={ imgIcon } alt="imgIcon"/>
                    <img src={ camera } alt="camera"/>
                    <img src={ mic } alt="mic"/>
                </div>
                <input type="text" placeholder="Type a Message"/>
                {/*<div className={ styles.emoji }>*/}
                    <img src={ emoji } alt="emoji"/>
                {/*</div>*/}
                <button className={ styles.sendButton }>Send</button>
            </div>
        </div>
    );
};

export default Chat;

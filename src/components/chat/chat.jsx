import React, { useEffect, useRef, useState } from 'react';
import styles from './chat.module.less'
import avatar from '/images/avatar.png'
import phone from '/images/phone.png'
import video from '/images/video.png'
import info from '/images/info.png'
import camera from '/images/camera.png'
import imgIcon from '/images/img.png'
import mic from '/images/mic.png'
import emoji from '/images/emoji.png'
import EmojiPickerComponent from "@components/chat/components/emojiPicker.jsx";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [text, setText] = useState('')
    const picker = useRef(null)
    const handleSelectEmoji = (e) => {
        setText((prev) => prev + e.emoji)
        setShowEmojiPicker(false)
    }

    const handleCloseEmoji = (e) => {
        console.log('e.target', e.target)
        console.log('e', e.target.contains(picker.current))
        if (!picker.current.contains(e.target)) {
            setShowEmojiPicker(false)
            // 阻止冒泡，防止点到自身元素也触发
            e.stopPropagation()
        }
        console.log('picker', picker.current)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseEmoji)
        return () => {
            document.addEventListener('mousedown', handleCloseEmoji)
        }
    })
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
                <input className={ styles.messageInput } type="text" placeholder="Type a Message" value={ text }
                       onChange={ (e) => setText(e.target.value) }/>
                <div className={ styles.emoji }>
                    <img src={ emoji } alt="emoji" onClick={ () => setShowEmojiPicker((prev) => !prev) }/>
                    <div className={ styles.picker } ref={picker}>
                        <EmojiPicker open={ showEmojiPicker } onEmojiClick={ handleSelectEmoji }/>
                    </div>
                </div>
                <button className={ styles.sendButton }>Send</button>
            </div>
        </div>
    );
};

export default Chat;

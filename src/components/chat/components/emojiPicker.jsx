import React, {forwardRef, useEffect, useRef} from 'react';
import EmojiPicker from "emoji-picker-react";

const EmojiPickerComponent = forwardRef((props, ref) => {
    const emojiPickerRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseEmojiPicker);
        return () => {
            document.removeEventListener('mousedown', handleCloseEmojiPicker)
        }
    }, []);

    const handleCloseEmojiPicker = (event) => {
        console.log('event', event.target)
        console.log('emojiPickerRef', emojiPickerRef.current)
    }

    return (
        <div ref={emojiPickerRef}>
            <EmojiPicker {...props} />
        </div>
    );
});

export default EmojiPickerComponent;

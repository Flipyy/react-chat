import React from 'react';
import {SmileOutlined, CameraOutlined, AudioOutlined, RocketOutlined} from "@ant-design/icons/lib/icons";
import {Button, Input} from "antd";
import { UploadField } from '@navjobs/upload'
import {Picker} from "emoji-mart"

import "./ChatInput.scss"
import {useSelector} from "react-redux";

const ChatInput = ({onSendMessage, currentDialog}) => {
    const [value, setValue] = React.useState("")
    const [emojiPickerVisible, setShowEmojiPicker] = React.useState(false)

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible)
    }

    const handleSendMessage = (e) => {
        if (e.keyCode === 13 && value) {
            onSendMessage(value, currentDialog)
            setValue("")
        }
    }

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                {emojiPickerVisible && <div className="chat-input__emoji-picker">
                    <Picker set='apple' />
                </div>}
                <Button shape="circle" icon={<SmileOutlined />} onClick={toggleEmojiPicker} />
            </div>
            <Input onChange={e => setValue(e.target.value)}
                   onKeyUp={handleSendMessage}
                   size="large"
                   value={value}
                   placeholder="Введите текст сообщения..."/>
            <div className="chat-input__actions">

                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{
                        className: "chat-input__actions-upload-btn"
                    }}
                    uploadProps={{
                        accept: ".jpg,.jpeg,.png,.gif,.bmp",
                        multiple: "multiple"
                    }}
                >
                    <Button shape="circle" icon={<CameraOutlined />} />
                </UploadField>
                {value ? <Button shape="circle" icon={<RocketOutlined />} /> : <Button shape="circle" icon={<AudioOutlined />} />}
            </div>
        </div>
    );
};

export default ChatInput;
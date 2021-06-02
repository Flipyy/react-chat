import React from 'react';
import {SmileOutlined, CameraOutlined, AudioOutlined, RocketOutlined} from "@ant-design/icons/lib/icons";
import {Button, Input} from "antd";

import "./ChatInput.scss"

const ChatInput = () => {

    const [value, setValue] = React.useState("")

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button shape="circle" icon={<SmileOutlined />} />
            </div>
            <Input onChange={e => setValue(e.target.value)} size="large" placeholder="Введите текст сообщения..."/>
            <div className="chat-input__actions">
                <Button shape="circle" icon={<CameraOutlined />} />
                {value ? <Button shape="circle" icon={<AudioOutlined />} /> : <Button shape="circle" icon={<AudioOutlined />} />}
            </div>
        </div>
    );
};

export default ChatInput;
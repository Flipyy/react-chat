import React from 'react';
import {SmileOutlined, CameraOutlined, AudioOutlined, RocketOutlined, CloseOutlined, LoadingOutlined} from "@ant-design/icons/lib/icons";
import {Button, Input} from "antd";
import {UploadField} from '@navjobs/upload'
import {Picker} from "emoji-mart"
import {useDispatch, useSelector} from "react-redux";

import "./ChatInput.scss"
import UploadFiles from "../UploadFiles";
import {filesAPI} from "../../utils/api";
import {fetchSendMessage} from "../../redux/actions/messages";
import {removeAttachment, setAttachments} from "../../redux/actions/attachments";
import socket from "../../core/socket";

const ChatInput = ({currentDialog}) => {

    window.navigator.getUserMedia =
        window.navigator.getUserMedia ||
        window.navigator.mozGetUserMedia ||
        window.navigator.msGetUserMedia ||
        window.navigator.webkitGetUserMedia;


    const dispatch = useDispatch()

    const [value, setValue] = React.useState("")
    const [mediaRecorder, setMediaRecorder] = React.useState(null)
    const [isRecording, setIsRecording] = React.useState(false)
    const [emojiPickerVisible, setShowEmojiPicker] = React.useState(false)
    const [isLoading, setLoading] = React.useState(false);

    const attachments = useSelector(({attachments}) => attachments.items)
    const user = useSelector(({user}) => user.data)

    const onRemoveAttachment = (file) => {
        dispatch(removeAttachment(file))
    }

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible)
    }

    const onRecord = () => {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ audio: true }, onRecording, onError);
        }
    };


    const onRecording = (stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.start();

        recorder.onstart = () => {
            setIsRecording(true);
        };

        recorder.onstop = () => {
            setIsRecording(false);
        };
        recorder.ondataavailable = async (e) => {
            const file = new File([e.data], 'audio.webm');
            setLoading(true);
            let response = await filesAPI.upload(file)
            sendAudio(response.data.file._id)
            setLoading(false);
        };
    };

    const onError = err => {
        console.log('The following error occurred: ' + err);
    };

    const onHideRecording = () => {
        setIsRecording(false);
    };

    const sendMessage = () => {
        if (isRecording) {
            mediaRecorder.stop();
        } else if (value || attachments.length) {
            dispatch(fetchSendMessage({
                text: value,
                dialogId: currentDialog,
                attachments: attachments.map(file => file.uid),
            }))
            setValue('');
            dispatch(setAttachments([]));
        }
    }
    const sendAudio = (audioId) => {
        dispatch(fetchSendMessage({
            text: null,
            dialogId: currentDialog,
            attachments: [audioId],
        }));
    };

    const handleSendMessage = (e) => {
        /*socket.emit('DIALOGS:TYPING', { dialogId: currentDialog, user });*/
        if (e.keyCode === 13) {
            sendMessage()
        }
    }

    const handleOutsideClick = (el, e) => {
        if (el && !el.contains(e.target)) {
            setShowEmojiPicker(false);
        }
    };

    const addEmoji = ({colons}) => {
        setValue((value + ' ' + colons).trim());
    };

    const onSelectFiles = async (files) => {
        let uploaded = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const uid = Math.round(Math.random() * 1000);
            uploaded = [
                ...uploaded,
                {
                    uid,
                    name: file.name,
                    status: 'uploading',
                },
            ];
            dispatch(setAttachments(uploaded));
            await filesAPI.upload(file).then(({data}) => {
                uploaded = uploaded.map(item => {
                    if (item.uid === uid) {
                        return {
                            status: 'done',
                            uid: data.file._id,
                            name: data.file.filename,
                            url: data.file.url,
                        };
                    }
                    return item;
                });
            });
        }
        dispatch(setAttachments(uploaded));
    }

    React.useEffect(() => {
        const el = document.querySelector('.chat-input__smile-btn');
        document.addEventListener('click', handleOutsideClick.bind(this, el));
        return () => {
            document.removeEventListener('click', handleOutsideClick.bind(this, el));
        };
    }, []);

    if (!currentDialog) {
        return null;
    }

    return (
        <div className="chat-input">
            <div>
                <div className="chat-input__smile-btn">
                    {emojiPickerVisible && <div className="chat-input__emoji-picker">
                        <Picker onSelect={emojiTag => addEmoji(emojiTag)} set="apple"/>
                    </div>}
                    <Button shape="circle" icon={<SmileOutlined/>} onClick={toggleEmojiPicker}/>
                </div>
                {isRecording ? (
                    <div className="chat-input__recording-status">
                        <i className="chat-input__recording-status-bubble"></i>
                        Recording...
                        <Button className="stop-recording" onClick={onHideRecording} shape="circle" icon={<CloseOutlined />}/>
                    </div>
                ): (
                    <Input
                        onChange={e => setValue(e.target.value)}
                        onKeyUp={handleSendMessage}
                        size="large"
                        placeholder="Введите текст сообщения…"
                        value={value}
                        autosize={{minRows: 1, maxRows: 6}}
                    />
                )}
                <div className="chat-input__actions">
                    <UploadField
                        onFiles={onSelectFiles}
                        containerProps={{
                            className: "chat-input__actions-upload-btn"
                        }}
                        uploadProps={{
                            accept: ".jpg,.jpeg,.png,.gif,.bmp",
                            multiple: "multiple"
                        }}
                    >
                        <Button type="link" shape="circle" icon={<CameraOutlined/>}/>
                    </UploadField>
                    {isLoading ? (
                        <Button type="link" shape="circle" icon={<LoadingOutlined />} />
                    ) : (value || isRecording || attachments.length) ? (<Button onClick={sendMessage} shape="circle" icon={<RocketOutlined/>}/>
                    ) : (<Button onClick={onRecord} shape="circle" icon={<AudioOutlined/>}/>)}

                </div>
            </div>
            {attachments.length > 0 && (
                <div className="chat-input__attachments">
                    <UploadFiles
                        attachments={attachments}
                        removeAttachment={onRemoveAttachment}
                    />
                </div>
            )}
        </div>
    );
};

export default ChatInput;
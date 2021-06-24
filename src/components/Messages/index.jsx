import React from 'react';
import {Empty, Spin, Alert, Modal} from "antd";
import classNames from "classnames";

import "./messages.scss"

import {Message} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {fetchDialogs} from "../../redux/actions/dialogs";
import socket from "../../core/socket"


const Messages = React.memo(({items, onRemoveMessage, currentDialog}) => {

        const [previewImage, setPreviewImage] =  React.useState(null);
        const [blockHeight, setBlockHeight] =  React.useState(180);
        const [isTyping, setIsTyping] = React.useState(false);
        let typingTimeoutId = null;

        const dispatch = useDispatch()
        const messagesRef = React.useRef(null)

        const isLoading = useSelector(({messages}) => messages.isLoading)
        const user = useSelector(({user}) => user.data)
        const attachments = useSelector(({attachments}) => attachments.items)

    /*const toggleIsTyping = () => {
        setIsTyping(true);
        clearInterval(typingTimeoutId);
        typingTimeoutId = setTimeout(() => {
            setIsTyping(false);
        }, 3000);
    };

    React.useEffect(() => {
        socket.on('DIALOGS:TYPING', toggleIsTyping);
    }, []);*/

    React.useEffect(() => {
        if (attachments.length) {
            setBlockHeight(300);
        } else {
            setBlockHeight(180);
        }
    }, [attachments]);

        React.useEffect(() => {
            if (messagesRef.current) {
                messagesRef.current.scrollTo(0, 99999)
            }
            dispatch(fetchDialogs())
        }, [items])


        return (
            <div className="chat__dialog-messages" style={{ height: `calc(100% - ${blockHeight}px)` }}>
                <div ref={messagesRef} className={classNames("messages", {"messages--loading": isLoading})}>
                    {user && isLoading ? (
                            <Spin tip="Загрузка сообщений..."/>
                        ) : items && !isLoading ? (
                            items.length > 0 ? (
                                items.map((item) => (
                                        <Message
                                            key={item._id}
                                            onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                                            setPreviewImage={setPreviewImage}
                                            isMe={user._id === item.user._id}
                                            {...item}
                                        />
                                    )
                                )
                            ) : (
                                <Empty description="Диалог пуст"/>
                            )
                        ) : (
                            <Empty description="Откройте диалог"/>
                        )}
                    {isTyping && <Message isTyping={true} user={user._id !== currentDialog.partner._id ? currentDialog.author : currentDialog.partner} />}
                    <Modal visible={!!previewImage} onCancel={() => setPreviewImage(null)} footer={null}>
                        <img src={previewImage} style={{ width: '100%' }} alt="Preview" />
                    </Modal>
                </div>
            </div>
        )
    }
)

export default Messages;

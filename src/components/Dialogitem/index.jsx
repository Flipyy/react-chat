import React from 'react';
import classNames from "classnames";

import {IconReaded, Avatar} from "../";
import {format, parseISO} from "date-fns";
import isToday from "date-fns/isToday"


const getMessageTime = (createdAt) => {
    if (isToday(parseISO(createdAt))) {
        return format(parseISO(createdAt), "HH:mm" )
    } else {
        return format(parseISO(createdAt), "dd.MM.yyyy")
    }
}

const renderLastMessage = (message, userId) => {
    let text = '';
    if (!message.text && message.attachments.length) {
        text = 'прикрепленный файл';
    } else {
        text = message.text;
    }

    return `${message.user._id === userId ? 'Вы: ' : ''}${text}`;
};

const DialogItem = ({_id, userId, isMe, onSelect, currentDialog, lastMessage, partner, author}) => {

    return (
         <div className={classNames("dialogs__item", {"dialogs__item--online": partner.isOnline}, {"dialogs__item--selected": currentDialog === _id})}
                                                              onClick={onSelect.bind(this, _id)}>
                <div className="dialogs__item-avatar">
                    {userId === author.id ?<Avatar {...partner}/>: <Avatar {...author}/>}
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{userId === author.id ? partner.fullname : author.fullname}</b>
                        <span>{getMessageTime(lastMessage.createdAt)}</span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>{renderLastMessage(lastMessage, userId)}</p>
                        {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed}/>}
                        {lastMessage.unread > 0 && <div className="dialogs__item-info-bottom-count">{lastMessage.unread > 9 ? "+9": lastMessage.unread}</div>}
                    </div>
                </div>
            </div>
    );
};

export default DialogItem;
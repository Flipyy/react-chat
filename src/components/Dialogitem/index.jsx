import React from 'react';
import classNames from "classnames";

import {IconReaded, Avatar} from "../";
import {format, parseISO} from "date-fns";
import isToday from "date-fns/isToday"


const getMessageTime = (created_at) => {
    if (isToday(parseISO(created_at))) {
        return format(parseISO(created_at), "HH:mm" )
    } else {
        return format(parseISO(created_at), "dd.MM.yyyy")
    }
}

const DialogItem = ({_id, isMe, onSelect, currentDialog, lastMessage, partner}) => {
    console.log(partner._id)
    return (
        <div className={classNames("dialogs__item", {"dialogs__item--online": partner.isOnline}, {"dialogs__item--selected": currentDialog === _id})}
             onClick={onSelect.bind(this, _id)}
        >
            <div className="dialogs__item-avatar">
                <Avatar {...partner}/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{partner.fullname}</b>
                    <span>{getMessageTime(lastMessage.createdAt)}</span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{lastMessage.text}</p>
                    {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.readed}/>}
                    {lastMessage.unread > 0 && <div className="dialogs__item-info-bottom-count">{lastMessage.unread > 9 ? "+9": lastMessage.unread}</div>}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
import React from 'react';
import classNames from "classnames";

import {IconReaded, Avatar} from "../";
import format from "date-fns/format";
import isToday from "date-fns/isToday"


const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm" )
    } else {
        return format(new Date(created_at), "dd.MM.yyyy")
    }
}

const DialogItem = ({_id, user, unread, created_at, text, isMe, onSelect, currentDialog, lastMessage}) => {
    console.log(lastMessage)
    return (
        <div className={classNames("dialogs__item", {"dialogs__item--online": lastMessage.user.isOnline}, {"dialogs__item--selected": currentDialog === _id})}
             onClick={onSelect.bind(this, _id)}
        >
            <div className="dialogs__item-avatar">
                <Avatar user={lastMessage.user}/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{lastMessage.user.fullname}</b>
                    <span>
                        {getMessageTime(lastMessage.createdAt)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{lastMessage.text}</p>
                    {isMe && <IconReaded isMe={true} isReaded={true}/>}
                    {lastMessage.unread > 0 && <div className="dialogs__item-info-bottom-count">{lastMessage.unread > 9 ? "+9": lastMessage.unread}</div>}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
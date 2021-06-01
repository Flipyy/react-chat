import React from 'react';
import classNames from "classnames";

import "./DialogItem.scss"
import {Time, IconReaded, Avatar} from "../";
import format from "date-fns/format";
import isToday from "date-fns/isToday"




const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm" )
    } else {
        return format(created_at, "DD.MM.YYYY")
    }
}

const DialogItem = ({user, message, unread, created_at, text, isMe}) => {
    return (
        <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})}>
            <div className="dialogs__item-avatar">
                {Avatar(user)}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(created_at)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    {isMe && <IconReaded isMe={true} isReaded={true}/>}
                    {unread > 0 && <div className="dialogs__item-info-bottom-count">{unread > 9 ? "+9": unread}</div>}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
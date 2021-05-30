import React from 'react';

import "./DialogItem.scss"
import {Time, IconReaded} from "../";
import classNames from "classnames";

const DialogItem = ({user, message, unreaded}) => {
    return (
        <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})}>
            <div className="dialogs__item-avatar">
                {/*<img src={user.avatar} alt={`${user.fullname} avatar`}/>*/}
                <img src="https://sun3-10.userapi.com/s/v1/if1/AGm7O-kF3yJnUefBOPk5ua0ur-7237aWXxA8NeTdXnnrUutnSnYZNn9LIYyOEwh8dnpPHg.jpg?size=100x0&quality=96&crop=0,179,287,287&ava=1" alt=""/>
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Клэренс Уильям</b>
                    <span>
                        {/*<Time date={new Date()}/>*/}
                        13:37
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>НАСА - Национальное управление по аэронавтике и исследованию космического пространства</p>
                    <IconReaded isMe={true} isReaded={true}/>
                    {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9": unreaded}</div>}
                </div>
            </div>
        </div>
    );
};

export default DialogItem;
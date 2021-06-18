import React from 'react';
import classNames from "classnames";

import "./Status.scss"
import {Button} from "antd";
import {EllipsisOutlined} from "@ant-design/icons/lib/icons";

const Status = ({currentDialog, user, dialogs}) => {

    if (!dialogs.length || !currentDialog) {
        return null;
    }

    const currentDialogObj = dialogs.filter(
        dialog => dialog._id === currentDialog
    )[0];

    let partner = {};

    if (currentDialogObj.author._id === user.data._id) {

        partner = currentDialogObj.partner;
    } else {
        partner = currentDialogObj.author;
    }

    return (
        <div className="chat__dialog-header">
            <div/>
            <div className="chat__dialog-header-center">
                <b className="chat__dialog-header-username">{partner.fullname}</b>
                <div className="chat__dialog-header-status">
                    <div className={classNames("status", {"status--online" : partner.isOnline})}>{partner.isOnline ? "онлайн" : "офлайн"}</div>
                </div>
            </div>
            <Button shape="circle" icon={<EllipsisOutlined style={{fontSize: "24px"}}/>}/>
        </div>

    );
};

export default Status;
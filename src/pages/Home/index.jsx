import React from "react";
import {TeamOutlined, FormOutlined, EllipsisOutlined} from "@ant-design/icons/lib/icons";
import {Button} from 'antd';
import {useDispatch, useSelector} from "react-redux";

import "./Home.scss"

import {Messages, Dialogs, Status, ChatInput} from "../../components";
import {fetchDialogs, setCurrentDialogId} from "../../redux/actions/dialogs";
import {fetchMessages} from "../../redux/actions/messages";


const Home = () => {

    const dispatch = useDispatch()

    const items = useSelector(({dialogs}) => dialogs.items)
    const currentDialog = useSelector(({dialogs}) => dialogs.currentDialog)
    const messageItems = useSelector(({messages}) => messages.items)

    const handleOnSelectDialog = id => {
        dispatch(setCurrentDialogId(id))
    }

    React.useEffect(() => {
        if (currentDialog) {
            dispatch(fetchMessages(currentDialog))
        }
    }, [currentDialog])

    React.useEffect(() => {
        dispatch(fetchDialogs())
    },[])

    return (
        <div className="home">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined/>
                            <span>Список диалогов</span>
                        </div>
                        <Button shape="circle" icon={<FormOutlined/>}/>
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs items={items} onSelectDialog={handleOnSelectDialog} currentDialog={currentDialog}/>
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div/>
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Максим Соколов</b>
                            <div className="chat__dialog-header-status">
                                <Status online={true}/>
                            </div>
                        </div>
                        <Button shape="circle" icon={<EllipsisOutlined style={{fontSize: "24px"}}/>}/>
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages items={messageItems}/>
                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
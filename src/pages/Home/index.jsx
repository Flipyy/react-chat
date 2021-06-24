import React from "react";
import {useDispatch, useSelector} from "react-redux";

import "./Home.scss"

import {Messages, Status, ChatInput, Sidebar} from "../../components";
import {fetchDialogs, setCurrentDialogId} from "../../redux/actions/dialogs";
import {addMessage, fetchMessages, removeMessageById} from "../../redux/actions/messages";
import socket from "../../core/socket";


const Home = () => {

    const dispatch = useDispatch()

    const items = useSelector(({dialogs}) => dialogs.items)
    const currentDialog = useSelector(({dialogs}) => dialogs.currentDialog)
    const messageItems = useSelector(({messages}) => messages.items)
    const user = useSelector(({user}) => user)


    const handleOnSelectDialog = id => {
        dispatch(setCurrentDialogId(id))
    }

    const onNewMessage = (data) => {
        dispatch(addMessage(data))
    }

    const onRemoveMessage = (id) => {
        dispatch(removeMessageById(id))
    }

    React.useEffect(() => {
        if (currentDialog) {
            dispatch(fetchMessages(currentDialog))
        }
        socket.on("SERVER:NEW_MESSAGE", onNewMessage)
        return () => {
            socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage)
        }
    }, [currentDialog])


    React.useEffect(() => {
        dispatch(fetchDialogs());
        socket.on("SERVER:DIALOG_CREATED", dispatch(fetchDialogs()));
        return () => {
            socket.removeListener("SERVER:DIALOG_CREATED", dispatch(fetchDialogs()));
        };
    }, []);


    return (
        <div className="home">
            <div className="chat">
                {user && <Sidebar items={items} user={user} currentDialog={currentDialog} handleOnSelectDialog={handleOnSelectDialog}/>}
                {user && (<div className="chat__dialog">
                    <Status currentDialog={currentDialog} user={user} dialogs={items}/>
                    <Messages items={messageItems} onRemoveMessage={onRemoveMessage} currentDialog={currentDialog}/>
                    <div className="chat__dialog-input">
                        <ChatInput currentDialog={currentDialog}/>
                    </div>
                </div> )}
            </div>
        </div>
    );
};

export default Home;
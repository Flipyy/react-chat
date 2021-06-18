import {messagesAPI} from "../../utils/api";

export const setMessages = (items) => ({type: "MESSAGES:SET_ITEMS", payload: items})

export const removeMessage = (id) => ({type: "MESSAGES:REMOVE_MESSAGE", payload: id})

export const setIsLoading = (items) => ({type: "MESSAGES:SET_IS_LOADING", payload: items})

export const addMessage = (message) => (dispatch, getState) => {
    const {dialogs} = getState()
    const {currentDialog} = dialogs

    if (currentDialog === message.dialog._id) {
        dispatch({
            type: "MESSAGES:ADD_MESSAGE",
            payload: message
        })
    }
}

export const removeMessageById = (id) => async (dispatch) => {
    try {
        if (window.confirm("Вы действительно хотите удалить сообщение?")) {
            let response = await messagesAPI.removeById(id)
            dispatch(removeMessage(id))
        }
    } catch(err) {
        dispatch(setIsLoading(false));
    }
}

export const fetchSendMessage = (text, dialogId) => async (dispatch) => {
    let response = await messagesAPI.send(text, dialogId)
}

export const fetchMessages = (dialogId) => async (dispatch) => {
    dispatch(setIsLoading(true))
    let response = await messagesAPI.getAllByDialogId(dialogId)
    dispatch(setMessages(response.data))
}
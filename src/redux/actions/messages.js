import {messagesAPI} from "../../utils/api";

export const setMessages = (items) => ({type: "MESSAGES:SET_ITEMS", payload: items})

export const setIsLoading = (items) => ({type: "MESSAGES:SET_IS_LOADING", payload: items})

export const fetchMessages = dialogId => async (dispatch) => {
    dispatch(setIsLoading(true))
    let response = await messagesAPI.getAllByDialogId(dialogId)
    dispatch(setMessages(response.data))
}
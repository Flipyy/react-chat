import {dialogsAPI} from "../../utils/api";

export const setDialogs = (items) => ({type: "DIALOGS:SET_ITEMS", payload: items})

export const setCurrentDialogId = (id) => ({type: "DIALOGS:SET_CURRENT_DIALOG_ID", payload: id})

export const fetchDialogs = () => async (dispatch) => {
    let response = await dialogsAPI.getAll()
    dispatch(setDialogs(response.data))
}
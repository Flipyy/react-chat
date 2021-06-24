import {dialogsAPI} from "../../utils/api";

import socket from '../../core/socket';

export const setDialogs = (items) => ({type: "DIALOGS:SET_ITEMS", payload: items})

export const setCurrentDialogId =  (id) => dispatch => {
    socket.emit('DIALOGS:JOIN', id);
    dispatch({type: 'DIALOGS:SET_CURRENT_DIALOG_ID', payload: id,});
}

export const fetchDialogs = () => async (dispatch) => {
    let response = await dialogsAPI.getAll()
    dispatch(setDialogs(response.data))
}
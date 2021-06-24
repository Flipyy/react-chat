import { combineReducers } from 'redux';
import dialogs from "./dialogs";
import messages from "./messages";
import user from "./user";
import attachments from "./attachments";

const rootReducer = combineReducers({
    dialogs,
    messages,
    user,
    attachments
});

export default rootReducer;
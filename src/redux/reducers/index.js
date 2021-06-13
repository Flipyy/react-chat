import { combineReducers } from 'redux';
import dialogs from "./dialogs";
import messages from "./messages";
import user from "./user";

const rootReducer = combineReducers({
    dialogs,
    messages,
    user
});

export default rootReducer;
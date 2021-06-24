import {axios} from "../../core";

const messagesAPI ={
    getAllByDialogId: (id) => axios.get("/messages?dialog=" + id),
    send: (text, dialog_id, attachments) => axios.post("/messages", {text: text, dialog_id: dialog_id, attachments}),
    removeById: (id) => axios.delete("/messages?id=" + id)
}

export default messagesAPI
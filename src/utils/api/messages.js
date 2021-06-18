import {axios} from "../../core";

export default {
    getAllByDialogId: (id) => axios.get("/messages?dialog=" + id),
    send: (text, dialog_id) => axios.post("/messages", {text: text, dialog_id: dialog_id}),
    removeById: (id) => axios.delete("/messages?id=" + id)
}
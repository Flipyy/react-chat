import {axios} from "../../core";

const dialogsAPI = {
    getAll: () => axios.get("/dialogs"),
    create: ({ partner, text }) => axios.post("/dialogs", { partner, text })
}

export default dialogsAPI
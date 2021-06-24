import {axios} from "../../core";

const filesAPI = {
    upload: file => {
        const formData = new FormData();
        formData.append("file", file);
        return axios.post("/files", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
};

export default filesAPI
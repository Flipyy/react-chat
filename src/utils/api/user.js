import {axios} from "../../core";

const userAPI = {
    signIn: (postData) => axios.post("/user/signin", postData),
    signUp: (postData) => axios.post("/user/signup", postData),
    verifyHash: (hash) => axios.get("/user/verify?hash=" + hash),
    getMe: () => axios.get("/user/me"),
    findUsers: (name) => axios.get("/user/find?query=" + name)
}

export default userAPI
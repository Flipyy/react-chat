import {userAPI} from "../../utils/api";
import {openNotification} from "../../utils/helpers";

export const setUserData = (data) => ({type: "USER:SET_DATA", payload: data})

export const setIsAuth = (bool) => ({type: "USER:SET_IS_AUTH", payload: bool})

export const fetchUserData = () => async (dispatch) => {
    let response = await userAPI.getMe()
    dispatch(setUserData(response.data))
}

export const fetchUserLogin = postData => async (dispatch) => {
    let response = await userAPI.signIn(postData)
    const status= response.data
    if (status === "error") {
        openNotification({
            title: "Ошибка при авторизации",
            text: "Неверный логин или пароль",
            type: "error"
        })
    } else {
        const { token } = response.data;
        openNotification({
            title: "Отлично!",
            text: "Авторизация успешна!",
            type: "success"
        })
        window.axios.defaults.headers.common['token'] = token;
        window.localStorage['token'] = token;
        dispatch(fetchUserData());
        dispatch(setIsAuth(true));
        return response.data;
    }
}

export const fetchUserRegister = postData => async (dispatch) => {
    let response = await userAPI.signUp(postData)
    return response.data
}
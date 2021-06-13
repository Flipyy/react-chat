const initialState = {
    data: null,
    token: window.localStorage.token,
    isAuth: false
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: action.payload,
                isAuth: true,
                token: window.localStorage.token
            }
        default:
            return state
    }
}

export default user
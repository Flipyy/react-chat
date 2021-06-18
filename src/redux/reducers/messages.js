const initialState = {
    items: [],
    isLoading: false
}

const messages = (state = initialState, action) => {
    switch (action.type) {
        case "MESSAGES:SET_ITEMS":
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        case "MESSAGES:ADD_MESSAGE":
            return {
                ...state,
                items: [
                    ...state.items, action.payload
                ]
            }
        case 'MESSAGES:REMOVE_MESSAGE':
            return {
                ...state,
                items: state.items.filter(message => message._id !== action.payload),
            }
        case "MESSAGES:SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default messages
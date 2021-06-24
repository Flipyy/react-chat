const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ATTACHMENTS:SET_ITEMS":
            return {
                ...state,
                items: action.payload
            };
        case "ATTACHMENTS:REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item.uid !== action.payload.uid)
            };
        default:
            return state;
    }
};
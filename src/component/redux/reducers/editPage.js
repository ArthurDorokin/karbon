const initialState = {
    editPageData: null,
}

export default function editPageData(state = initialState, action) {
    switch (action.type) {
        case 'TAKE_DATA_DEVICES':
            return {
                ...state,
                editPageData: action.payload
            };
        default:
            return state;
    }
};
const {dataApi} = require("../../../constans");

const initialState = {
    dataApi
}

export default function data(state = initialState, action) {
    switch (action.type) {
        case 'DATA':
            return {
                ...state,
                dataApi
            };
        default:
            return state;
    }
};

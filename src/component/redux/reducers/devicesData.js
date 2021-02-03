const initialState = {
    cardReader: null,
    cashAcceptor: null,
    cashDispenser: null,
    pos: null,
    printer: null,
    productDispenser: null,
    deviceTreeTypeMap: null
}

export default function devicesData(state = initialState, action) {
    switch (action.type) {
        case 'TAKE_DATA':
            return {
                ...state,
                cardReader: action.payload[0].api.deviceTree.CardReader[0],
                cashAcceptor: action.payload[0].api.deviceTree.CashAcceptor[0],
                cashDispenser: action.payload[0].api.deviceTree.CashDispenser[0],
                pos: action.payload[0].api.deviceTree.POS[0],
                printer: action.payload[0].api.deviceTree.Printer[0],
                productDispenser: action.payload[0].api.deviceTree.ProductDispenser[0],
                deviceTreeTypeMap: action.payload[0].api.deviceTreeTypeMap
            };
        default:
            return state;
    }
};
import {combineReducers} from 'redux'
import devicesData from "./devicesData";
import editPageData from "./editPage";

export default combineReducers ({
    data: devicesData,
    editPageData
})
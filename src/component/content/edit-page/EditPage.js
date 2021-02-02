import React from 'react';
import {useSelector} from "react-redux";

const EditPage = () => {
    const editPageData = useSelector(state => state.editPageData.editPageData);
    console.log(editPageData);
    return (
        <div className="edit-page">
            <div className="driver">driver - {editPageData.driver}</div>
            <div className="modName">modName - {editPageData.modName}</div>
            <div className="mod-version">modVersion - {editPageData.modVersion}</div>
            <div className="port">port - {editPageData.port}</div>
            <div className="status">status - {editPageData.status}</div>
            <div className="status-descr">statusDescr - {editPageData.statusDescr}</div>
        </div>
    )
}

export default EditPage;
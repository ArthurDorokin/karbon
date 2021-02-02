import React from 'react';
import {useSelector} from "react-redux";

const EditPage = () => {
    const editPageData = useSelector(state => state.editPageData.editPageData);
    console.log(editPageData);
    return (
        <div className="edit-page">
            <div className="driver">driver - {editPageData.driver?.length ? editPageData.driver : 'null'}</div>
            <div className="modName">modName - {editPageData.modName?.length ? editPageData.modName : 'null'}</div>
            <div className="mod-version">modVersion - {editPageData.modVersion?.length ? editPageData.modVersion : 'null'}</div>
            <div className="port">port - {editPageData.port?.length ? editPageData.port : 'null'}</div>
            <div className="status">status - {editPageData.status?.length ? editPageData.status : 'null'}</div>
            <div className="status-descr">statusDescr - {editPageData.statusDescr?.length ? editPageData.statusDescr : 'null'}</div>
        </div>
    )
}

export default EditPage;
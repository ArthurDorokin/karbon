import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

const EditPage = () => {
    const editPageData = useSelector(state => state.editPageData.editPageData);
    const deviceTreeTypeMap = useSelector(state => state.data.deviceTreeTypeMap);
    const [mapProducts, setMapProducts] = useState();


    const k = editPageData.products.map((m) => {
        return [Object.values(m)]
    })

    useEffect(() => {
        setMapProducts(k)
    }, [])

    //console.log(mapProducts?.map(item => typeof item !== 'number' ? "111" : <input type='number'/>));
    console.log(mapProducts?.map(item => console.log(item)));

    //console.log(deviceTreeTypeMap);

    //const editParamFlagPos = deviceTreeTypeMap.POS.map(item => item.options.map(items => items.filter(merchantIdx => console.log(key))));
    //const editParamFlagPos = deviceTreeTypeMap.POS
    //const editParamFlagDispenser = ;

    // console.log( deviceTreeTypeMap.POS.map(item => console.log(item.merchantIdx)));
    // console.log( deviceTreeTypeMap.POS.options?.map(item => console.log(item)));
    //console.log(editPageData.status);

    return (
        <div className="edit-page">
            <div className="driver">driver - {editPageData.driver ? editPageData.driver : 'null'}</div>
            <div className="modName">modName - {editPageData.modName ? editPageData.modName : 'null'}</div>
            <div className="mod-version">modVersion - {editPageData.modVersion ? editPageData.modVersion : 'null'}</div>
            {editPageData.options?.length ?
                <div className="options">options - {editPageData.options?.length ? editPageData.options.flatMap(item =>
                    (!item.hasOwnProperty('merchantIdx')) ? 'null ' : item.merchantIdx) : 'null'}</div> :
                ''}
            <div className="port">port - {editPageData.port ? editPageData.port : 'null'}</div>
            {editPageData.hasOwnProperty('status') ? <div className="status">status
                    - {editPageData.hasOwnProperty('status') ? editPageData.status : 'null'}</div> :
                ''}

            {/*{editPageData.products?.length ?*/}
            {/*    <div className="products">products - {editPageData.products?.length ? mapProducts ? mapProducts.map(item => typeof item !== Number ? item : <input type='number' />) : '' : ''}</div> :*/}
            {/*    ''}*/}

            <div className="status-descr">statusDescr
                - {editPageData.statusDescr ? editPageData.statusDescr : 'null'}</div>
        </div>
    )
}

export default EditPage;
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {data} from "../../../constans";
import {takeData} from "../../redux/actions/devicesData";

const MainPage = () => {
    const dispatch = useDispatch();
    const cardReader = useSelector(state => state.data.cardReader);
    const cashAcceptor = useSelector(state => state.data.cashAcceptor);
    const cashDispenser = useSelector(state => state.data.cashDispenser);
    const pos = useSelector(state => state.data.pos);
    const printer = useSelector(state => state.data.printer);
    const productDispenser = useSelector(state => state.data.productDispenser);

    useEffect(() => {
        dispatch(takeData(data))
    }, [])

    return (
        <div className="devices">
            <div className="devices-wrap">
                <div className="card-reader">
                    <div className="driver">driver - {cardReader.driver}</div>
                    <div className="modName">modName - {cardReader.modName}</div>
                    <div className="mod-version">modVersion - {cardReader.modVersion}</div>
                    <div className="port">port - {cardReader.port}</div>
                    <div className="status">status - {cardReader.status}</div>
                    <div className="status-descr">statusDescr - {cardReader.statusDescr}</div>
                </div>
                <hr/>
                <div className="cash-acceptor">
                    <div className="driver">driver - {cashAcceptor.driver}</div>
                    <div className="modName">modName - {cashAcceptor.modName}</div>
                    <div className="modVersion">modVersion - {cashAcceptor.modVersion}</div>
                    <div className="port">port - {cashAcceptor.port}</div>
                    <div className="status">status - {cashAcceptor.status}</div>
                    <div className="type">type - {cashAcceptor.type}</div>
                    <div className="version">version - {cashAcceptor.version}</div>
                </div>
                <hr/>
                <div className="cash-dispenser">
                    <div className="modName">modName - {cashDispenser.modName}</div>
                    <div className="modVersion">modVersion - {cashDispenser.modVersion}</div>
                </div>
                <hr/>
                <div className="pos">
                    <div className="driver">driver - {pos.driver}</div>
                    <div className="modName">modName - {pos.modName}</div>
                    <div className="modVersion">modVersion - {pos.modVersion}</div>
                    <div className="options">options - {pos.options.map(item => item.merchantIdx)}</div>
                    <div className="port">port - {pos.port}</div>
                    <div className="status">status - {pos.status}</div>
                </div>
                <hr/>
                <div className="printer">
                    <div className="driver">driver - {printer.driver}</div>
                    <div className="modName">modName - {printer.modName}</div>
                    <div className="modVersion">modVersion - {printer.modVersion}</div>
                    <div className="papperState">papperState - {printer.papperState}</div>
                    <div className="port">port- {printer.port}</div>
                    <div className="status">status- {printer.status}</div>
                </div>
                <hr/>
                <div className="product-dispenser">
                    <div className="driver">driver - {productDispenser.driver}</div>
                    <div className="modName">modName - {productDispenser.modName}</div>
                    <div className="modVersion">modVersion - {productDispenser.modVersion}</div>
                    <div className="port">port - {productDispenser.port}</div>
                    <div className="products">products - {productDispenser.products.map((item, index) =>
                        <div key={index}>
                            <div className="class">{item.class}</div>
                            <div className="count">{item.count}</div>
                            <div className="name">{item.name}</div>
                        </div>
                    )}
                    </div>
                    <div className="status">status - {productDispenser.status}</div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
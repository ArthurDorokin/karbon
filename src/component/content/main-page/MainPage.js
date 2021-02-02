import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {data} from "../../../constans";
import {takeData} from "../../redux/actions/devicesData";
import {Link} from "react-router-dom";
import {takeDataDevices} from "../../redux/actions/editPage";

const MainPage = () => {
    const dispatch = useDispatch();
    dispatch(takeData(data))
    const cardReader = useSelector(state => state.data.cardReader);
    const cashAcceptor = useSelector(state => state.data.cashAcceptor);
    const cashDispenser = useSelector(state => state.data.cashDispenser);
    const pos = useSelector(state => state.data.pos);
    const printer = useSelector(state => state.data.printer);
    const productDispenser = useSelector(state => state.data.productDispenser);

    // console.log('cardReader', cardReader);
    // console.log(data);
    return (
        <div className="devices">
            <div className="devices-wrap">
                <div className="card-reader border">
                    <div className="modName" onClick={() => dispatch(takeDataDevices(cardReader))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${cardReader.modName}`,
                        }}>{cardReader.modName} v.{cashAcceptor.modVersion}</Link>
                    </div>
                    {/*<div className="mod-version">modVersion - {cardReader.modVersion}</div>*/}
                    {/*<div className="port">port - {cardReader.port}</div>*/}
                    {/*<div className="status">status - {cardReader.status}</div>*/}
                    {/*<div className="status-descr">statusDescr - {cardReader.statusDescr}</div>*/}
                </div>
                <div className="cash-acceptor border">
                    {/*<div className="driver">driver - {cashAcceptor.driver}</div>*/}
                    <div className="modName" onClick={() => dispatch(takeDataDevices(cashAcceptor))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${cashAcceptor.modName}`,
                        }}>{cashAcceptor.modName} v.{cashAcceptor.modVersion}
                        </Link>
                    </div>
                    {/*<div className="modVersion">modVersion - {cashAcceptor.modVersion}</div>*/}
                    {/*<div className="port">port - {cashAcceptor.port}</div>*/}
                    {/*<div className="status">status - {cashAcceptor.status}</div>*/}
                    {/*<div className="type">type - {cashAcceptor.type}</div>*/}
                    {/*<div className="version">version - {cashAcceptor.version}</div>*/}
                </div>
                <div className="cash-dispenser border">
                    <div className="modName" onClick={() => dispatch(takeDataDevices(cashDispenser))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${cashDispenser.modName}`,
                        }}>{cashDispenser.modName} v.{cashDispenser.modVersion}
                        </Link>
                    </div>
                    {/*<div className="modVersion">modVersion - {cashDispenser.modVersion}</div>*/}
                </div>
                <div className="pos border">
                    {/*<div className="driver">driver - {pos.driver}</div>*/}
                    <div className="modName" onClick={() => dispatch(takeDataDevices(pos))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${pos.modName}`,
                        }}>{pos.modName} v.{pos.modVersion}
                        </Link>
                    </div>
                    {/*<div className="modVersion">modVersion - {pos.modVersion}</div>*/}
                    {/*<div className="options">options - {pos.options.map(item => item.merchantIdx)}</div>*/}
                    {/*<div className="port">port - {pos.port}</div>*/}
                    {/*<div className="status">status - {pos.status}</div>*/}
                </div>
                <div className="printer border">
                    {/*<div className="driver">driver - {printer.driver}</div>*/}
                    <div className="modName" onClick={() => dispatch(takeDataDevices(printer))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${printer.modName}`,
                        }}>{printer.modName} v.{printer.modVersion}
                        </Link>
                    </div>
                    {/*<div className="modVersion">modVersion - {printer.modVersion}</div>*/}
                    {/*<div className="papperState">papperState - {printer.papperState}</div>*/}
                    {/*<div className="port">port- {printer.port}</div>*/}
                    {/*<div className="status">status- {printer.status}</div>*/}
                </div>
                <div className="product-dispenser border">
                    {/*<div className="driver">driver - {productDispenser.driver}</div>*/}
                    <div className="modName" onClick={() => dispatch(takeDataDevices(productDispenser))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${productDispenser.modName}`,
                        }}>{productDispenser.modName} v.{productDispenser.modVersion}
                        </Link>
                    </div>
                    {/*<div className="modVersion">modVersion - {productDispenser.modVersion}</div>*/}
                    {/*<div className="port">port - {productDispenser.port}</div>*/}
                    {/*<div className="products">products - {productDispenser.products.map((item, index) =>*/}
                    {/*    <div key={index}>*/}
                    {/*        <div className="class">{item.class}</div>*/}
                    {/*        <div className="count">{item.count}</div>*/}
                    {/*        <div className="name">{item.name}</div>*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    {/*</div>*/}
                    {/*<div className="status">status - {productDispenser.status}</div>*/}
                </div>
            </div>
        </div>
    )
}

export default MainPage;
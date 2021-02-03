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
    console.log(data);

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
                </div>
                <div className="cash-acceptor border">
                    <div className="modName" onClick={() => dispatch(takeDataDevices(cashAcceptor))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${cashAcceptor.modName}`,
                        }}>{cashAcceptor.modName} v.{cashAcceptor.modVersion}
                        </Link>
                    </div>
                </div>
                <div className="cash-dispenser border">
                    <div className="modName" onClick={() => dispatch(takeDataDevices(cashDispenser))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${cashDispenser.modName}`,
                        }}>{cashDispenser.modName} v.{cashDispenser.modVersion}
                        </Link>
                    </div>
                </div>
                <div className="pos border">
                    <div className="modName" onClick={() => dispatch(takeDataDevices(pos))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${pos.modName}`,
                        }}>{pos.modName} v.{pos.modVersion}
                        </Link>
                    </div>
                </div>
                <div className="printer border">
                    <div className="modName" onClick={() => dispatch(takeDataDevices(printer))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${printer.modName}`,
                        }}>{printer.modName} v.{printer.modVersion}
                        </Link>
                    </div>
                </div>
                <div className="product-dispenser border">
                    <div className="modName" onClick={() => dispatch(takeDataDevices(productDispenser))}>
                        <Link to={{
                            pathname: "/edit/",
                            hash: `#${productDispenser.modName}`,
                        }}>{productDispenser.modName} v.{productDispenser.modVersion}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
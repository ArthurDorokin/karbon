import React from 'react';
import {useSelector} from "react-redux";

const MainPage = () => {
    const data = useSelector(state => state.data.dataApi);
    console.log(data);
    return (
        <div>main page</div>
    )
}

export default MainPage;
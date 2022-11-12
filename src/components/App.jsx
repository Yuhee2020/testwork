import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {orderAPI} from "../api/testWorkAPI";


export const App = () => {

    const order=()=>{
        orderAPI.order(5256082)
    }
    return (
        <div>
            <input type={"tel"}/>
            <button onClick={order}><FontAwesomeIcon icon={faHome}/>заказать</button>
        </div>
    );
};


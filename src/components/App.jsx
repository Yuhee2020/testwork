import React from "react";
import {order, resetTelNumber} from "../store/appReducer";
import {useDispatch, useSelector} from "react-redux";
import {Popup} from "./Popup/Popup";
import {FullInput} from "./FullInput/FullInput";


export const App = () => {

    const dispatch =useDispatch()
    const number=useSelector(state => state.app.telNumber)

    const dispatchOrder = (value) => {
        dispatch(order({number:value}))
    }

    const resetNumber=()=>{
        dispatch(resetTelNumber())
    }

    return (
        <div>
            <FullInput callback={dispatchOrder} title={"Заказать"}/>
            {number && <Popup closePopup={resetNumber} text={number}/>}
        </div>
    );
};


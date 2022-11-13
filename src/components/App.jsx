import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight, faHome} from "@fortawesome/free-solid-svg-icons";
import {order, resetTelNumber} from "../store/appReducer";
import {useDispatch, useSelector} from "react-redux";
import "./app.scss"
import {Popup} from "./Popup";




export const App = () => {
    const dispatch =useDispatch()
    const number=useSelector(state => state.app.telNumber)
    const onClickHandler = () => {
        value.trim() ?
        (dispatch(order({number:value.trim()})), setValue("") ) : setError("Введите номер")
    }
    const [value, setValue]=useState("")
    const [error, setError]=useState(null)

    const onChangeHandler=(e)=>{
        error != null && setError(null)
        setValue(e.currentTarget.value)
    }

    const resetNumber=()=>{
        dispatch(resetTelNumber())
    }

    return (
        <div>
            <div className="fullInput">
                <div className="cell">
                    <input value={value} onChange={onChangeHandler} placeholder="Ваш номер..."/>
                </div>
                <div className="cell">
                    <button onClick={onClickHandler}>
                        <FontAwesomeIcon icon={faHandPointRight}/> Заказать
                    </button>
                </div>
            </div>
            <div className="error">{error}</div>
            {number && <Popup closePopup={resetNumber} text={number}/>}
        </div>
    );
};


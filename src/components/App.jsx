import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight, faHome} from "@fortawesome/free-solid-svg-icons";
import {order} from "../store/appReducer";
import {useDispatch, useSelector} from "react-redux";
import "./app.scss"
import re from '../img/bg.jpg'



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
    return (
        <div className="main">
            <img src={re}/>
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
            <div>{error}</div>
            {number && <div>заказ для номера {number} принят</div>}
        </div>
    );
};


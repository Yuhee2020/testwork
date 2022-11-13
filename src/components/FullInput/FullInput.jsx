import React, {useState} from 'react';
import "./FullImput.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";


export const FullInput = ({callback, title}) => {

    const [value, setValue] = useState("")
    const [error, setError] = useState(null)

    const onChangeHandler = (e) => {
        error != null && setError(null)
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if (value.trim()) {
            callback(value.trim())
            setValue("")
        } else setError("Введите номер")
    }

    return (
        <div className="container">
            <div className="fullInput">
                <div className="inputContainer">
                    <input value={value} onChange={onChangeHandler} placeholder="Ваш номер..."/>
                </div>
                <div className="buttonContainer">
                    <button onClick={onClickHandler}>
                        <FontAwesomeIcon icon={faHandPointRight}/> {title}
                    </button>
                </div>
            </div>
            <div className="error">{error}</div>
        </div>
    )
};


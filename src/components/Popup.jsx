import React from "react";
import "./Popup.css";

export const Popup = ({ text, closePopup }) => {
    return (
        <div className="popup-container">
            <div className="popup-body">
                <h1 className="successText">Заказ для номера {text} принят</h1>
                <button onClick={closePopup}>Close X</button>
            </div>
        </div>
    );
};
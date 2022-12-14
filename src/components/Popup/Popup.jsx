import React from "react";
import "./Popup.scss";

export const Popup = ({ text, closePopup }) => {
    return (
        <div className="popup-container">
            <div className="popup-body">
                <h2 className="successText">Заказ для номера {text} принят</h2>
                <button className="btn" onClick={closePopup}>Закрыть</button>
            </div>
        </div>
    );
};
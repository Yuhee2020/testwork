import React from 'react';
import "./FullImput.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";


export const FullInput = () => {

    return (
            <div className="fullInput">
                <div className="cell cellInp">
                    <input placeholder="Ваш номер..."/>
                </div>
                <div className="cell">
                    <button><FontAwesomeIcon icon={faHandPointRight}/> Заказать</button>
                </div>
            </div>

    )
};


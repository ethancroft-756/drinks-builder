import React from "react";
import { FaMinusCircle } from "react-icons/fa";

const ToggleButton = (props) => {
    return (
        <button
            className={`toggle-button ${props.className}`}
            id={props.id}
            type={props.type}
        >
            <span onClick={props.onClick} className="toggle-button__icon">
                <FaMinusCircle></FaMinusCircle>
            </span>
            <span className="toggle-button__label">{props.label}</span>
        </button>
    );
};

export default ToggleButton;

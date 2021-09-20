import React from "react";
import { FaMinusCircle } from "react-icons/fa";

const ToggleButton = (props) => {
    const handleClicks = () => {
        props.onClick(true);
    };

    return (
        <button
            className={`toggle-button ${props.className}`}
            id={props.id}
            type={props.type}
        >
            <span onClick={handleClicks} className="toggle-button__icon">
                <FaMinusCircle></FaMinusCircle>
            </span>
            <span className="toggle-button__label">{props.label}</span>
        </button>
    );
};

export default ToggleButton;

import React, { useState } from "react";
import { useEffect } from "react";
import { FaMinusCircle } from "react-icons/fa";

const ToggleButton = (props) => {
    const [buttonScalingSetting, setButtonScalingSetting] = useState(true);

    const handleClicks = () => {
        // buttonScalingSetting ? setButtonScalingSetting(false) : setButtonScalingSetting(true);
        setButtonScalingSetting(false);
        console.log(buttonScalingSetting);
        props.onClick(true);
    }

    useEffect(() => {
        setButtonScalingSetting(true);
    });

    return (
        <button
            className={`toggle-button toggle-button${buttonScalingSetting ? "--scale-up" : "--scale-down"} ${props.className}`}
            id={props.id}
            type={props.type}
        >
            {props.label}
            <span onClick={handleClicks} className="toggle-button__icon">
                <FaMinusCircle></FaMinusCircle>
            </span>
        </button>
    );
};

export default ToggleButton;

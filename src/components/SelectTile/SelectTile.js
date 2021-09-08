import React, { useRef, useState } from "react";
import { FaMinusCircle } from "react-icons/fa";

const SelectTile = (props) => {
    const selectTileRef = useRef();
    const [selectTileBackground, setSelectTileBackground] = useState("");

    const removeBackgroundEffect = () => {
        setSelectTileBackground("");
    };

    const createBackgroundEffect = (event) => {
        let tileCurrentPos = selectTileRef.current.getBoundingClientRect();
        let { width, height } = tileCurrentPos;

        let mouseDistanceFromLeft = event.nativeEvent.offsetX;
        let mouseDistanceFromTop = event.nativeEvent.offsetY;

        let percentLeft = Math.floor((mouseDistanceFromLeft / width) * 100);
        let percentTop = Math.floor((mouseDistanceFromTop / height) * 100);

        setSelectTileBackground(
            `radial-gradient(ellipse at ${percentLeft}% ${percentTop}%, #ffda8b 5%, #f7c455 100%)`
        );
    };

    return (
        <button
            className={`select-tile ${props.className}`}
            id={props.id}
            onMouseLeave={removeBackgroundEffect}
            onMouseMove={createBackgroundEffect}
            ref={selectTileRef}
            style={{ background: `${selectTileBackground}` }}
            type={props.type}
        >
            {props.label}
            <FaMinusCircle className="" onClick={props.onClick}></FaMinusCircle>
        </button>
    );
};

export default SelectTile;

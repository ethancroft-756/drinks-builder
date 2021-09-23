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
            `radial-gradient(circle at ${percentLeft}% ${percentTop}%, #f7d9ee 1%, #f8bae6 100%)`
        );
    };

    return (
        <button
            className={
                props.className
                    ? `select-tile ${props.className}`
                    : `select-tile`
            }
            id={props.tileId}
            onMouseLeave={removeBackgroundEffect}
            onMouseMove={createBackgroundEffect}
            ref={selectTileRef}
            style={{ background: `${selectTileBackground}` }}
            type={props.tileType}
        >
            {props.tileLabel}
        </button>
    );
};

export default SelectTile;

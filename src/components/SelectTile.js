import React, { useState, useRef } from "react";

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
            className={props.className}
            id={props.id}
            onClick={props.onClick}
            onMouseLeave={removeBackgroundEffect}
            onMouseMove={createBackgroundEffect}
            ref={selectTileRef}
            style={{ background: `${selectTileBackground}` }}
        >
            {props.label}
        </button>
    );
};

export default SelectTile;

import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

const GridList = (props) => {
    const gridListRef = useRef();
    const [listLength, setListLength] = useState(0);

    useEffect(() => {
        if (listLength !== props.ingredients.length) {
            if (listLength < props.ingredients.length) {
                gridListRef.current.scrollTop =
                    gridListRef.current.scrollHeight;
            }
            setListLength(props.ingredients.length);
        }
    }, [props.ingredients, listLength]);

    return (
        <ul ref={gridListRef} className="grid-list">
            {props.ingredients.map((ingredient) => (
                <li key={ingredient.ingredient_id} className="grid-list__item">
                    <ToggleButton
                        id={ingredient.ingredient_id}
                        label={ingredient.ingredient_name}
                        onClick={props.onClick.bind(
                            null,
                            ingredient.ingredient_id
                        )}
                        key={ingredient.ingredient_id}
                        className={props.className}
                    />
                </li>
            ))}
        </ul>
    );
};

export default GridList;

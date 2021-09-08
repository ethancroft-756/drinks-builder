import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

const GridList = (props) => {
    return (
        <ul className="grid-list">
            {props.ingredients.map((ingredient) => (
                <li className="grid-list__item">
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

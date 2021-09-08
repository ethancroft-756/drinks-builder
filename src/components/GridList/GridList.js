import React from "react";
import SelectTile from "../SelectTile/SelectTile";

const GridList = (props) => {
    return (
        <ul className="grid-list">
            {props.ingredients.map((ingredient) => (
                <li className="grid-list__item">
                    <SelectTile
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

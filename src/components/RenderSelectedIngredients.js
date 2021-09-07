import React from "react";
import SelectTile from "./SelectTile/SelectTile";

const RenderSelectedIngredients = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient) => (
                <li>
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

export default RenderSelectedIngredients;

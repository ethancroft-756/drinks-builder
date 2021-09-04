import React from "react";
import SelectTile from "./SelectTile";

const RenderIngredients = (props) => {
    return (
        <React.Fragment>
            {props.ingredients.map((ingredient) => (
                <SelectTile
                    id={ingredient.ingredient_id}
                    label={ingredient.ingredient_name}
                    onClick={props.onClick.bind(null, ingredient.ingredient_id)}
                    key={ingredient.ingredient_id}
                    className={props.className}
                />
            ))}
        </React.Fragment>
    );
};

export default RenderIngredients;

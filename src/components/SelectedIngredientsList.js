import React from "react";

const SelectedIngredientsList = (props) => {
    return (
        <ul>
            {props.ingredients.map((ingredient) => {
                return (
                    <li key={ingredient.ingredient_id}>
                        {ingredient.ingredient_name}
                    </li>
                );
            })}
        </ul>
    );
};

export default SelectedIngredientsList;

import React from "react";
import CocktailShort from "./CocktailShort";

const RenderCocktails = (props) => {
    return (
        <ul>
            {props.matchedCocktails.map((cocktail, index) => {
                return (
                    <li key={index}>
                        <CocktailShort name={cocktail.cocktail_name} />
                    </li>
                );
            })}
        </ul>
    );
};

export default RenderCocktails;

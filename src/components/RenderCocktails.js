import React from "react";
import CocktailShort from "./CocktailShort";

const RenderCocktails = (props) => {
    if (props.matchedCocktails.length === 0) {
        return null;
    } else {
        return (
            <div>
                <p>Results:</p>

                <ul>
                    {props.matchedCocktails.map((cocktail, index) => {
                        return (
                            <li key={index}>
                                <CocktailShort name={cocktail.cocktail_name} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default RenderCocktails;

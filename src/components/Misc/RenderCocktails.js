import React from "react";
import SelectTile from "../SelectTile/SelectTile";

const RenderCocktails = (props) => {
    return props.matchedCocktails.map((cocktail) => (
        <SelectTile
            tileId={cocktail.cocktail_id}
            tileLabel={cocktail.cocktail_name}
        ></SelectTile>
    ));
};

export default RenderCocktails;

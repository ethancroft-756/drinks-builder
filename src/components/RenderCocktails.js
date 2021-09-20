import React from "react";
import SimpleList from "./SimpleList/SimpleList";

const RenderCocktails = (props) => {
    return (
        <SimpleList listItems={props.matchedCocktails}></SimpleList>
    );
};

export default RenderCocktails;

import React from "react";
import SimpleListItem from "./SimpleListItem";

const SimpleList = (props) => {
    return (
        <ul className="simple-list">
            {props.listItems.map((cocktail) => {
                return (
                    <SimpleListItem
                        key={cocktail.cocktail_id}
                        name={cocktail.cocktail_name}
                    ></SimpleListItem>
                );
            })}
        </ul>
    );
};

export default SimpleList;

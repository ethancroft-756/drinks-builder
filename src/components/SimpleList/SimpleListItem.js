import React from "react";
import SelectTile from "../SelectTile/SelectTile";

const SimpleListItem = (props) => {
    return (
        <li key={props.itemId} className="simple-list__item">
            {props.itemName}
        </li>
    );
};

export default SimpleListItem;

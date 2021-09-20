import React from "react";

const SimpleListItem = (props) => {
    return (
        <li key={props.key} class="simple-list__item">
            {props.name}
        </li>
    );
};

export default SimpleListItem;

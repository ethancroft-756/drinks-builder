import React from "react";

const DropdownItem = (props) => {
    const buttonHandler = (itemId) => {
        props.onItemClick(itemId);
    };

    return (
        <li>
            <button
                type="button"
                className="dropdown__button"
                onClick={buttonHandler.bind(null, props.itemId)}
            >
                {props.itemName}
            </button>
        </li>
    );
};

export default DropdownItem;

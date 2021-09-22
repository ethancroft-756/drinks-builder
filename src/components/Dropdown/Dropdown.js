import React from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = (props) => {
    return (
        <ul className="dropdown">
            {props.dropdownItems.map((item) => {
                return (
                    <DropdownItem
                        itemId={item.ingredient_id}
                        itemName={item.ingredient_name}
                        onItemClick={props.onItemClick}
                        key={item.ingredient_id}
                    ></DropdownItem>
                );
            })}
        </ul>
    );
};

export default Dropdown;

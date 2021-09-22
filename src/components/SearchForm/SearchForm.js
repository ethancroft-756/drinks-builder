import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";

const SearchForm = (props) => {
    const [enteredQuery, setEnteredQuery] = useState("");
    const [matchingIngs, setMatchingIngs] = useState([]);

    const inputHandler = (event) => {
        setEnteredQuery(event.target.value.toLowerCase());
    };

    const buttonHandler = (ingredientId) => {
        props.selectedIngs(ingredientId);
    };

    useEffect(() => {
        let matchedItems = [];

        if (!(enteredQuery === "" || enteredQuery === " ")) {
            matchedItems = props.ingredients.filter((ingredient) =>
                ingredient.ingredient_name.toLowerCase().includes(enteredQuery)
            );
        }

        setMatchingIngs(matchedItems);
    }, [enteredQuery, props.ingredients]);

    return (
        <form className="search-form">
            <Input
                input={{
                    placeholder: "Enter an ingredient",
                    onChange: inputHandler,
                    onKeyDown: inputHandler,
                    value: enteredQuery,
                }}
            ></Input>
            {matchingIngs && matchingIngs.length !== 0 && (
                <Dropdown
                    onItemClick={buttonHandler}
                    dropdownItems={matchingIngs}
                ></Dropdown>
            )}
        </form>
    );
};

export default SearchForm;

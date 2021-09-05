import React, { useEffect, useState } from "react";
import Input from "./Input";

const SearchForm = (props) => {
    const [enteredQuery, setEnteredQuery] = useState("");
    const [matchingIngs, setMatchingIngs] = useState([]);

    const inputHandler = (event) => {
        setEnteredQuery(event.target.value.toLowerCase());
    };

    useEffect(() => {
        let matchedItems = [];

        if (!(enteredQuery === "" || enteredQuery === " ")) {
            matchedItems = props.ingredients.ingredients.filter((ingredient) =>
                ingredient.ingredient_name.toLowerCase().includes(enteredQuery)
            );
        }

        setMatchingIngs(matchedItems);
    }, [enteredQuery]);

    return (
        <form>
            <Input
                input={{
                    className: "input",
                    placeholder: "Enter an ingredient",
                    onChange: inputHandler,
                    onKeyDown: inputHandler,
                    value: enteredQuery,
                }}
            ></Input>
            <ul>
                {matchingIngs &&
                    matchingIngs.length !== 0 &&
                    matchingIngs.map((item) => {
                        return (
                            <li key={item.ingredient_id}>
                                <button>{item.ingredient_name}</button>
                            </li>
                        );
                    })}
            </ul>
        </form>
    );
};

export default SearchForm;

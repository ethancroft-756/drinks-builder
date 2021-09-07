import React, { useEffect, useState } from "react";
import Input from "../components/Input/Input";

const SearchForm = (props) => {
    const [enteredQuery, setEnteredQuery] = useState("");
    const [matchingIngs, setMatchingIngs] = useState([]);

    const inputHandler = (event) => {
        setEnteredQuery(event.target.value.toLowerCase());
    };

    const buttonHandler = (event, ingredientId) => {
        props.selectedIngs(ingredientId);
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
                    placeholder: "Enter an ingredient",
                    onChange: inputHandler,
                    onKeyDown: inputHandler,
                    value: enteredQuery,
                }}
            ></Input>
            <ul className="dropdown">
                {matchingIngs &&
                    matchingIngs.length !== 0 &&
                    matchingIngs.map((item) => {
                        return (
                            <li key={item.ingredient_id}>
                                <button
                                    type="button"
                                    className="dropdown__button"
                                    onClick={(event) =>
                                        buttonHandler(event, item.ingredient_id)
                                    }
                                >
                                    {item.ingredient_name}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </form>
    );
};

export default SearchForm;

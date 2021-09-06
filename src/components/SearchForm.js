import React, { useEffect, useState } from "react";
import Input from "../components/Input/Input";
import SelectTile from "./SelectTile";

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
                                <SelectTile
                                    label={item.ingredient_name}
                                    type="button"
                                    className="dropdown__button"
                                    onClick={props.selectedIngs.bind(
                                        null,
                                        item.ingredient_id
                                    )}
                                ></SelectTile>
                            </li>
                        );
                    })}
            </ul>
        </form>
    );
};

export default SearchForm;

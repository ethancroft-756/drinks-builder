import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RenderIngredients from "./components/RenderIngredients";
import RenderCocktails from "./components/RenderCocktails";
import cocktails from "./data/cocktails";
import ingredients from "./data/ingredients";
import SelectedIngredientsList from "./components/SelectedIngredientsList";
import Input from "./components/Input";
import SearchForm from "./components/SearchForm";

const App = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [matchingCocktails, setMatchingCocktails] = useState([]);
    const [] = useState();

    const handleSelectedIngredients = (ingredientId) => {
        const ingredientIndex = ingredients.ingredients.findIndex(
            (ingredient) => ingredient.ingredient_id === ingredientId
        );
        const ingredient = ingredients.ingredients[ingredientIndex];

        if (
            !selectedIngredients.find(
                (ingredient) => ingredient.ingredient_id === ingredientId
            )
        ) {
            setSelectedIngredients((prevState) => {
                return [...prevState, ingredient];
            });
        } else {
            setSelectedIngredients((prevState) => {
                const prevSelectedIngredientIndex = prevState.findIndex(
                    (ingredient) => ingredient.ingredient_id === ingredientId
                );

                const updatedIngredients = prevState.filter(
                    (item, index) => index !== prevSelectedIngredientIndex
                );

                return updatedIngredients;
            });
        }
    };

    useEffect(() => {
        const ingredientIds = [];
        const matchedCocktails = [];

        selectedIngredients.forEach((ingredient) => {
            ingredientIds.push(ingredient.ingredient_id);
        });

        ingredientIds.sort();

        cocktails.cocktails.forEach((cocktail) => {
            cocktail.cocktail_ingredient_ids
                .sort()
                .every((id, index) => id === ingredientIds[index]) &&
                matchedCocktails.push(cocktail);
        });

        setMatchingCocktails(matchedCocktails);
    }, [selectedIngredients]);

    return (
        <div className="content">
            <h1>Cocktails</h1>

            <SearchForm ingredients={ingredients}></SearchForm>

            {/* <RenderIngredients
                ingredients={mixerIngredients}
                onClick={handleSelectedIngredients}
                className="ingredients__item"
                /> */}

            <div className="col-2">
                Selected ingredients:
                <SelectedIngredientsList
                    ingredients={selectedIngredients}
                ></SelectedIngredientsList>
            </div>

            <RenderCocktails matchedCocktails={matchingCocktails} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

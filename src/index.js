import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RenderIngredients from "./components/RenderIngredients";
import RenderCocktails from "./components/RenderCocktails";
import cocktails from "./data/cocktails";
import ingredients from "./data/ingredients";
import SearchForm from "./components/SearchForm";

const App = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [matchingCocktails, setMatchingCocktails] = useState([]);

    const handleSelectedIngredients = (ingredientId) => {
        console.log(ingredientId);
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

            <SearchForm
                selectedIngs={handleSelectedIngredients}
                ingredients={ingredients}
            ></SearchForm>

            <h2>Selected ingredients:</h2>

            <RenderIngredients
                ingredients={selectedIngredients}
                onClick={handleSelectedIngredients}
                className="ingredients__item"
            />

            {matchingCocktails.length !== 0 && (
                <React.Fragment>
                    <p>Results:</p>

                    <RenderCocktails matchedCocktails={matchingCocktails} />
                </React.Fragment>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RenderIngredients from "./components/RenderIngredients";
import RenderCocktails from "./components/RenderCocktails";
import cocktails from "./data/cocktails";
import ingredients from "./data/ingredients";
import SelectedIngredientsList from "./components/SelectedIngredientsList";

const App = () => {
    const [baseIngredients, setBaseIngredients] = useState([]);
    const [modifierIngredients, setModifierIngredients] = useState([]);
    const [mixerIngredients, setMixerIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [matchingCocktails, setMatchingCocktails] = useState([]);

    useEffect(() => {
        setBaseIngredients(
            ingredients.ingredients.filter(
                (ingredient) => ingredient.ingredient_type === "base"
            )
        );
        setModifierIngredients(
            ingredients.ingredients.filter(
                (ingredient) => ingredient.ingredient_type === "modifier"
            )
        );
        setMixerIngredients(
            ingredients.ingredients.filter(
                (ingredient) => ingredient.ingredient_type === "mixer"
            )
        );
    }, []);

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

            <div className="col-1">
                <h2>
                    <span className="stepNumber">1: </span>
                    Select your base!
                </h2>

                <div className="ingredients">
                    <RenderIngredients
                        ingredients={baseIngredients}
                        onClick={handleSelectedIngredients}
                        className="ingredients__item"
                    />
                </div>

                <h2>
                    <span className="stepNumber">2: </span>
                    Select your modifier!
                </h2>

                <div className="ingredients">
                    <RenderIngredients
                        ingredients={modifierIngredients}
                        onClick={handleSelectedIngredients}
                        className="ingredients__item"
                    />
                </div>

                <h2>
                    <span className="stepNumber">3: </span>
                    Select your mixer!
                </h2>

                <div className="ingredients">
                    <RenderIngredients
                        ingredients={mixerIngredients}
                        onClick={handleSelectedIngredients}
                        className="ingredients__item"
                    />
                </div>
            </div>

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

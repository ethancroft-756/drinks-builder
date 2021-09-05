import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import RenderIngredients from "./components/RenderIngredients";
import RenderCocktails from "./components/RenderCocktails";
import cocktails from "./data/cocktails";
import ingredients from "./data/ingredients";

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
        if (selectedIngredients.includes(ingredientId)) {
            setSelectedIngredients((prevState) => {
                return prevState.filter((val) => val !== ingredientId);
            });
        } else {
            setSelectedIngredients((prevState) => {
                return [...prevState, ingredientId];
            });
        }
    };

    useEffect(() => {
        let selectedIngs = selectedIngredients.sort();
        let matchedCocktails = [];

        cocktails.cocktails.forEach((cocktail) => {
            cocktail.cocktail_ingredient_ids.every(
                (id, index) => id === selectedIngs[index]
            ) && matchedCocktails.push(cocktail.cocktail_id);
        });

        setMatchingCocktails(matchedCocktails);
    }, [selectedIngredients]);

    return (
        <div className="content">
            <h1>Cocktails</h1>

            {selectedIngredients && (
                <p>Selected ingredients: {selectedIngredients}</p>
            )}

            <div className="content content--light">
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

                <RenderCocktails matchedCocktails={matchingCocktails} />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

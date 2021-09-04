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
    }, [ingredients]);

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

    const getCocktails = () => {
        let selectedIngs = selectedIngredients.sort();

        cocktails.cocktails.forEach((cocktail) => {
            if (
                cocktail.cocktail_ingredient_ids.every(
                    (id, index) => id === selectedIngs[index]
                ) === true
            ) {
                if (
                    matchingCocktails.includes(cocktail.cocktail_id) === false
                ) {
                    setMatchingCocktails((prevState) => {
                        console.log(prevState);
                        // return [...prevState, cocktail.cocktail_id];
                    });
                } else if (
                    matchingCocktails.includes(cocktail.cocktail_id) === true
                ) {
                    setMatchingCocktails((prevState) => {
                        console.log(prevState);

                        // return prevState.filter(
                        //     (matchingCocktail) =>
                        //         matchingCocktail !== cocktail.cocktail_id
                        // );
                    });
                }
            }
        });
    };

    useEffect(() => {
        getCocktails();
    }, [selectedIngredients]);

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.selectedIngredients !== this.state.selectedIngredients) {
    //         this.getCocktails(prevState);
    //     }
    // }

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
                {/*
                    <RenderCocktails
                        matchedCocktails={matchingCocktails}
                    /> */}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

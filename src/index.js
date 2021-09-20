import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import GridList from "./components/GridList/GridList";
import RenderCocktails from "./components/RenderCocktails";
import cocktails from "./data/cocktails";
import ingredients from "./data/ingredients";
import SearchForm from "./components/SearchForm/SearchForm";
import Heading from "./components/Heading/Heading";
import Subheading from "./components/Subheading/Subheading";
import ContentBlock from "./components/ContentBlock/ContentBlock";

const App = () => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [notSelectedIngredients, setNotSelectedIngredients] = useState(
        ingredients.ingredients
    );
    const [matchingCocktails, setMatchingCocktails] = useState([]);

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

            setNotSelectedIngredients((prevState) => {
                const filteredIngs = prevState.filter((ingredient) => {
                    return ingredient.ingredient_id !== ingredientId;
                });

                return filteredIngs;
            });
        } else {
            setNotSelectedIngredients((prevState) => {
                return [...prevState, ingredient];
            });

            setSelectedIngredients((prevState) => {
                const filteredIngs = prevState.filter((ingredient) => {
                    return ingredient.ingredient_id !== ingredientId;
                });

                return filteredIngs;
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
            <Heading>
                Cocktails
                <sup
                    style={{
                        fontSize: "16px",
                        transform: "rotateZ(10deg)",
                        display: "inline-block",
                    }}
                >
                    Alpha!
                </sup>
            </Heading>
            <Subheading>
                A tool to quickly and simply find a cocktail to make with the
                ingredients you have.
            </Subheading>

            <ContentBlock className="content-block--with-flex">
                <SearchForm
                    selectedIngs={handleSelectedIngredients}
                    ingredients={notSelectedIngredients}
                ></SearchForm>

                {selectedIngredients.length !== 0 && (
                    <GridList
                        ingredients={selectedIngredients}
                        onClick={handleSelectedIngredients}
                        className="ingredients__item"
                    />
                )}
            </ContentBlock>

            {matchingCocktails.length !== 0 && (
                <ContentBlock>
                    <Subheading className="subheading--semi-bold">Results</Subheading>

                    <RenderCocktails matchedCocktails={matchingCocktails} />
                </ContentBlock>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

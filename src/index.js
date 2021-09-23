import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import GridList from "./components/GridList/GridList";
import RenderCocktails from "./components/Misc/RenderCocktails";
import SearchForm from "./components/SearchForm/SearchForm";
import Heading from "./components/Heading/Heading";
import Subheading from "./components/Subheading/Subheading";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import firebaseDatabase from "./firebase";

const App = () => {
    const [cocktails, setCocktails] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [notSelectedIngredients, setNotSelectedIngredients] = useState([]);
    const [matchingCocktails, setMatchingCocktails] = useState([]);

    useEffect(() => {
        firebaseDatabase.ref("ingredients").on("value", (snapshot) => {
            const ingredients = snapshot.val();

            setNotSelectedIngredients(ingredients);
        });

        firebaseDatabase.ref("cocktails").on("value", (snapshot) => {
            const cocktails = snapshot.val();

            setCocktails(cocktails);
        });
    }, []);

    // TODO: How can I consolidate these functions?
    const manageAddedSelectedIngredient = (ingredientId) => {
        const ingredient = getIngredient(notSelectedIngredients, ingredientId);

        setSelectedIngredients((prevState) => {
            return [...prevState, ingredient];
        });

        setNotSelectedIngredients((prevState) => {
            const filteredIngs = prevState.filter((ingredient) => {
                return ingredient.ingredient_id !== ingredientId;
            });

            return filteredIngs;
        });
    };

    const manageRemovedSelectedIngredient = (ingredientId) => {
        const ingredient = getIngredient(selectedIngredients, ingredientId);

        setNotSelectedIngredients((prevState) => {
            return [...prevState, ingredient];
        });

        setSelectedIngredients((prevState) => {
            const filteredIngs = prevState.filter((ingredient) => {
                return ingredient.ingredient_id !== ingredientId;
            });

            return filteredIngs;
        });
    };

    const getIngredient = (queriedState, ingredientId) => {
        let ingredientIndex = queriedState.findIndex(
            (ingredient) => ingredient.ingredient_id === ingredientId
        );

        return queriedState[ingredientIndex];
    };

    useEffect(() => {
        const selectedIngredientIds = [];
        const matchedCocktails = [];

        selectedIngredients.forEach((ingredient) => {
            selectedIngredientIds.push(ingredient.ingredient_id);
        });

        selectedIngredientIds.sort();

        cocktails.forEach((cocktail) => {
            cocktail.cocktail_ingredient_ids
                .sort()
                .every((cocktailIngId) =>
                    selectedIngredientIds.includes(cocktailIngId)
                ) && matchedCocktails.push(cocktail);
        });

        setMatchingCocktails(matchedCocktails);
    }, [selectedIngredients, cocktails]);

    return (
        <div className="content">
            <Heading>
                Cocktails
                <sup className="heading__sup">Alpha!</sup>
            </Heading>
            <Subheading>
                A tool to quickly and simply find a cocktail to make with the
                ingredients you have.
            </Subheading>

            <ContentBlock className="content-block--with-flex">
                <SearchForm
                    selectedIngs={manageAddedSelectedIngredient}
                    ingredients={notSelectedIngredients}
                ></SearchForm>

                {selectedIngredients.length !== 0 && (
                    <GridList
                        ingredients={selectedIngredients}
                        onClick={manageRemovedSelectedIngredient}
                        className="ingredients__item"
                    />
                )}
            </ContentBlock>

            {matchingCocktails.length !== 0 && (
                <ContentBlock>
                    <Subheading className="subheading--semi-bold">
                        Results
                    </Subheading>

                    <RenderCocktails matchedCocktails={matchingCocktails} />
                </ContentBlock>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

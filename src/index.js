import React from 'react';
import ReactDOM from 'react-dom';
import RenderIngredients from './components/RenderIngredients';
import RenderCocktails from './components/RenderCocktails';
import cocktails from './data/cocktails';

class App extends React.Component {
    state = { selectedIngredients: '', matchingCocktails: [] };

    constructor(props) {
        super(props);

        this.handleSelectedIngredients = this.handleSelectedIngredients.bind(
            this
        );
        this.getCocktails = this.getCocktails.bind(this);
    }

    handleSelectedIngredients(ingredientId) {
        /**
         * Adds or removes ingredientId of clicked ingredient from selectedIngredients state depending on if it exists in the state
         * @param {number} ingredientId - The id of clicked ingredient
         */

        if (this.state.selectedIngredients.includes(ingredientId)) {
            this.setState({
                selectedIngredients: this.state.selectedIngredients.filter(
                    val => val !== ingredientId
                ),
            });
        } else {
            this.setState({
                selectedIngredients: [
                    ...this.state.selectedIngredients,
                    ingredientId,
                ],
            });
        }
    }

    getCocktails(prevState) {
        let selectedIngs = this.state.selectedIngredients.sort();

        cocktails.cocktails.forEach(cocktail => {
            if (
                cocktail.cocktail_ingredient_ids.every(
                    (id, index) => id === selectedIngs[index]
                ) === true
            ) {
                if (
                    prevState.matchingCocktails.includes(
                        cocktail.cocktail_id
                    ) === false
                ) {
                    this.setState(prevState => ({
                        matchingCocktails: [
                            ...prevState.matchingCocktails,
                            cocktail.cocktail_id,
                        ],
                    }));
                }
            } else if (
                prevState.matchingCocktails.includes(cocktail.cocktail_id) ===
                true
            ) {
                this.setState(prevState => ({
                    matchingCocktails: prevState.matchingCocktails.filter(
                        matchingCocktail =>
                            matchingCocktail !== cocktail.cocktail_id
                    ),
                }));
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedIngredients !== this.state.selectedIngredients) {
            this.getCocktails(prevState);
        }
    }

    componentDidMount() {}

    render() {
        return (
            <div className="content">
                <h1>Cocktails</h1>

                <p>Selected ingredients: {this.state.selectedIngredients}</p>

                <div className="content content--light">
                    <h2>
                        <span className="stepNumber">1: </span>
                        Select your base!
                    </h2>

                    <div className="ingredients">
                        <RenderIngredients
                            type="Base"
                            onClick={this.handleSelectedIngredients}
                            className="ingredients__item"
                        />
                    </div>

                    <h2>
                        <span className="stepNumber">2: </span>
                        Select your modifier!
                    </h2>

                    <div className="ingredients">
                        <RenderIngredients
                            type="Modifier"
                            onClick={this.handleSelectedIngredients}
                            className="ingredients__item"
                        />
                    </div>

                    <h2>
                        <span className="stepNumber">3: </span>
                        Select your mixer!
                    </h2>

                    <div className="ingredients">
                        <RenderIngredients
                            type="Mixer"
                            onClick={this.handleSelectedIngredients}
                            className="ingredients__item"
                        />
                    </div>

                    <RenderCocktails
                        matchedCocktails={this.state.matchingCocktails}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

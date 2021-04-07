import React from 'react';
import ReactDOM from 'react-dom';
import RenderIngredients from './RenderIngredients';
import cocktails from './cocktails';

class App extends React.Component {
    state = { selectedIngredients: '', matchingCocktails: [] };

    constructor(props) {
        super(props);

        this.handleSelectedIngredients = this.handleSelectedIngredients.bind(
            this
        );
        this.displayCocktails = this.displayCocktails.bind(this);
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

    displayCocktails(prevState) {
        let selectedIngs = this.state.selectedIngredients.sort();

        cocktails.cocktails.forEach(cocktail => {
            if (
                cocktail.cocktail_ingredient_ids.every(
                    (id, index) => id === selectedIngs[index]
                ) === true
            ) {
                this.setState({
                    matchingCocktails: [
                        ...this.state.matchingCocktails,
                        `id: ${cocktail.cocktail_id}`,
                    ],
                });
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedIngredients !== this.state.selectedIngredients) {
            this.displayCocktails(prevState);
        }

        console.log(this.state.matchingCocktails);
    }

    render() {
        return (
            <div>
                <h1>Coktails</h1>

                <p>Selected ingredients: {this.state.selectedIngredients}</p>

                <div>
                    <h2>
                        <span className="stepNumber">1: </span>
                        Select your base!
                    </h2>

                    <RenderIngredients
                        type="Base"
                        onClick={this.handleSelectedIngredients}
                    />

                    <h2>
                        <span className="stepNumber">2: </span>
                        Select your modifier!
                    </h2>

                    <RenderIngredients
                        type="Modifier"
                        onClick={this.handleSelectedIngredients}
                    />

                    <h2>
                        <span className="stepNumber">3: </span>
                        Select your mixer!
                    </h2>

                    <RenderIngredients
                        type="Mixer"
                        onClick={this.handleSelectedIngredients}
                    />

                    <h2>Results:</h2>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

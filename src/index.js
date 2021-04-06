import React from 'react';
import ReactDOM from 'react-dom';
import RenderIngredients from './RenderIngredients';
import Cocktails from './Cocktails';

class App extends React.Component {
    state = { selectedIngredients: '' };

    constructor(props) {
        super(props);

        this.handleSelectedIngredients = this.handleSelectedIngredients.bind(
            this
        );
    }

    handleSelectedIngredients(ingredientId) {
        /**
         * Adds or removes ingredientId of clicked ingredient from selectedIngredients state depending on if it exists in the state
         * @param {number} ingredientId - The id of clicked ingredient2
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

    displayCocktails() {
        let selectedIngs = this.state.selectedIngredients;

        Cocktails.map(item => {
            selectedIngs.every(id, index) => id ===
        })
    }

    componentDidUpdate() {
        console.log(
            Cocktails.map(item => {
                if (this.state.selectedIngredients === item.ingredientIds) {
                    console.log('yes');
                }
            })
        );
        // Cocktails.filter(item => {
        //     item.ingredientIds === this.state.selectedIngredients;
        // });
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
                        type="base"
                        onClick={this.handleSelectedIngredients}
                    />

                    <h2>
                        <span className="stepNumber">2: </span>
                        Select your modifier!
                    </h2>

                    <RenderIngredients
                        type="modifier"
                        onClick={this.handleSelectedIngredients}
                    />

                    <h2>
                        <span className="stepNumber">3: </span>
                        Select your mixer!
                    </h2>

                    <RenderIngredients
                        type="mixer"
                        onClick={this.handleSelectedIngredients}
                    />

                    <h2>Results:</h2>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

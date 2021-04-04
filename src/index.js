import React from 'react';
import ReactDOM from 'react-dom';
import SelectTile from './SelectTile';
import ingredients from './ingredients';

class App extends React.Component {
    state = { selectedIngredients: [] };

    constructor(props) {
        super(props);

        this.handleSelectedIngredients = this.handleSelectedIngredients.bind(
            this
        );
    }

    handleSelectedIngredients(id) {
        console.log(id);
        // let selectedIngredients = this.state.selectedIngredients;

        // this.setState(
        //     {
        //         newSelectedIngredients: [...selectedIngredients, id],
        //     },
        //     () => {
        //         console.log(this.state.newSelectedIngredients);
        //     }
        // );
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

                    <SelectTile
                        ingredientId="1"
                        ingredientName="A"
                        onClick={this.handleSelectedIngredients}
                    />

                    <SelectTile
                        ingredientId="2"
                        ingredientName="B"
                        onClick={this.handleSelectedIngredients}
                    />

                    <SelectTile
                        ingredientId="3"
                        ingredientName="C"
                        onClick={this.handleSelectedIngredients}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

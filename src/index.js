import React from 'react';
import ReactDOM from 'react-dom';
import SelectTile from './select-tile';
import ingredients from './ingredients';

const DisplayIngredients = ingredients => {
    return (
        <div>
            {ingredients.map(ingredient => (
                <SelectTile
                    name={ingredient.name}
                    ingredienttype={ingredient.type}
                    key={ingredient.id}
                />
            ))}
        </div>
    );
};

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Coktails</h1>

                <div>
                    <h2>
                        <span className="stepNumber">1</span>
                        Select your base!
                    </h2>

                    {DisplayIngredients(ingredients)}

                    <h2>
                        <span className="stepNumber">2</span>
                        Select your modifier!
                    </h2>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

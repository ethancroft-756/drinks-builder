import React from 'react';
import ReactDOM from 'react-dom';
import SelectTile from './select-tile';
import ingredients from './ingredients';

let baseIngredients = ingredients.filter(
    ingredient => ingredient.type === 'base'
);

let modIngredients = ingredients.filter(
    ingredient => ingredient.type === 'modifier'
);

const displayIngredients = filteredIngs => {
    return (
        <div>
            {filteredIngs.map(ingredient => (
                <SelectTile
                    ingtype={ingredient.type}
                    ingname={ingredient.name}
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

                    {displayIngredients(baseIngredients)}

                    <h2>
                        <span className="stepNumber">2</span>
                        Select your modifier!
                    </h2>

                    {displayIngredients(modIngredients)}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

import React from 'react';
import ReactDOM from 'react-dom';
import SelectTile from './SelectTile';
import ingredients from './ingredients';

class App extends React.Component {
    state = { selectedIngs: [] };

    constructor(props) {
        super(props);

        this.handleSelectedIngredients = this.handleSelectedIngredients.bind(
            this
        );
    }

    handleSelectedIngredients(id) {
        console.log(id);
    }

    render() {
        return (
            <div>
                <h1>Coktails</h1>

                <p>{this.state.selectedIngs}</p>

                <div>
                    <h2>
                        <span className="stepNumber">1</span>
                        Select your base!
                    </h2>

                    <SelectTile
                        onClick={this.handleSelectedIngredients(
                            this.props.ingredientId
                        )}
                        ingredientid="2"
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

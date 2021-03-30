import React from 'react';
import ReactDOM from 'react-dom';
import SelectTile from './SelectTile';

const App = () => {
    return (
        <div>
            <h1>Coktails</h1>

            <div>
                <h2>
                    <span className="stepNumber">1</span>
                    Select your base!
                </h2>

                <SelectTile liquidId="1" name="Vodka" type="base" />
            </div>

            <div>
                <h2>
                    <span className="stepNumber">2</span>
                    Select your modifier!
                </h2>

                <SelectTile liquidId="2" name="Orange Juice" type="base" />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

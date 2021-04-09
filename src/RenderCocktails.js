import React from 'react';
import CocktailShort from './CocktailShort';

class RenderCocktails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.matchedCocktails.length === 0) {
            return null;
        } else {
            return (
                <div>
                    <p>Results:</p>

                    <ul>
                        {this.props.matchedCocktails.map((cocktail, index) => {
                            return (
                                <li key={index}>
                                    <CocktailShort name={cocktail} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        }
    }
}

export default RenderCocktails;

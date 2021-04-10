import React from 'react';
import cocktails from './cocktails';

class CocktailShort extends React.Component {
    render() {
        return cocktails.cocktails.map(cocktail => {
            if (cocktail.cocktail_id === this.props.cocktailId) {
                return <div>Name: {cocktail.cocktail_name}</div>;
            }
        });
    }
}

export default CocktailShort;

import React from 'react';

class CocktailSummary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                Name:{this.props.cocktailName}, Ingredient IDs:
                {this.props.cocktailIngIds}
            </li>
        );
    }
}

export default CocktailSummary;

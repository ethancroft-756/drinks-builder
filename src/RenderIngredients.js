import React from 'react';
import Ingredients from './Ingredients';
import SelectTile from './SelectTile';

class RenderIngredients extends React.Component {
    constructor(props) {
        super(props);

        this.baseIngredients = Ingredients.filter(
            ingredient => ingredient.type === 'base'
        );
        this.modifierIngredients = Ingredients.filter(
            ingredient => ingredient.type === 'modifier'
        );
    }

    render() {
        if (this.props.type === 'base') {
            return this.baseIngredients.map(ingredient => {
                return (
                    <SelectTile
                        ingredientId={ingredient.id}
                        ingredientName={ingredient.name}
                        onClick={this.props.onClick}
                        key={ingredient.id}
                    />
                );
            });
        } else if (this.props.type === 'modifier') {
            return this.modifierIngredients.map(ingredient => {
                return (
                    <SelectTile
                        ingredientId={ingredient.id}
                        ingredientName={ingredient.name}
                        onClick={this.props.onClick}
                        key={ingredient.id}
                    />
                );
            });
        }
    }
}

export default RenderIngredients;

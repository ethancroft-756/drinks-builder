import React from 'react';
import ingredients from './ingredients';
import SelectTile from './SelectTile';

class RenderIngredients extends React.Component {
    constructor(props) {
        super(props);

        this.baseIngredients = ingredients.ingredients.filter(
            ingredient => ingredient.ingredient_type === 'Base'
        );
        this.modifierIngredients = ingredients.ingredients.filter(
            ingredient => ingredient.ingredient_type === 'Modifier'
        );
        this.mixerIngredients = ingredients.ingredients.filter(
            ingredient => ingredient.ingredient_type === 'Mixer'
        );
    }

    render() {
        if (this.props.type === 'Base') {
            return this.baseIngredients.map(ingredient => {
                return (
                    <SelectTile
                        ingredientId={ingredient.ingredient_id}
                        ingredientName={ingredient.ingredient_name}
                        onClick={this.props.onClick}
                        key={ingredient.ingredient_id}
                    />
                );
            });
        } else if (this.props.type === 'Modifier') {
            return this.modifierIngredients.map(ingredient => {
                return (
                    <SelectTile
                        ingredientId={ingredient.ingredient_id}
                        ingredientName={ingredient.ingredient_name}
                        onClick={this.props.onClick}
                        key={ingredient.ingredient_id}
                    />
                );
            });
        } else if (this.props.type === 'Mixer') {
            return this.mixerIngredients.map(ingredient => {
                return (
                    <SelectTile
                        ingredientId={ingredient.ingredient_id}
                        ingredientName={ingredient.ingredient_name}
                        onClick={this.props.onClick}
                        key={ingredient.ingredient_id}
                    />
                );
            });
        }
    }
}

export default RenderIngredients;

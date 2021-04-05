import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

class SelectTile extends React.Component {
    constructor(props) {
        super(props);

        this.onIngredientClick = this.onIngredientClick.bind(this);
    }

    onIngredientClick() {
        this.props.onClick(this.props.ingredientId);
    }

    render() {
        return (
            <button
                onClick={this.onIngredientClick}
                ingredient-id={this.props.ingredientId}
            >
                {this.props.ingredientName}
            </button>
        );
    }
}

export default SelectTile;

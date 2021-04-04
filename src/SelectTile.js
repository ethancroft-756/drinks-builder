import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

class SelectTile extends React.Component {
    state = { selected: '' };

    constructor(props) {
        super(props);

        this.onIngredientClick = this.onIngredientClick.bind(this);
    }

    onIngredientClick() {
        this.setState({
            selected: this.props.ingredientId,
        });

        this.props.onClick(this.state.selected);
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

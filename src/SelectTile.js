import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

// <FaGlassCheers />;

class SelectTile extends React.Component {
    constructor(props) {
        super(props);

        this.state.selected = [];
    }

    render() {
        return (
            <button
                ingredientId={this.props.ingredientId}
                ingredientType={this.props.ingredientType}
                className="SelectTile"
            >
                {this.props.name}
            </button>
        );
    }
}

export default SelectTile;

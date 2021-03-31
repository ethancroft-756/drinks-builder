import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

// <FaGlassCheers />;

class SelectTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                key={this.props.ingredientid}
                ingredienttype={this.props.ingredienttype}
                className="SelectTile"
            >
                {this.props.name}
            </button>
        );
    }
}

export default SelectTile;

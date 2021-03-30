import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

// <FaGlassCheers />;

class SelectTile extends React.Component {
    constructor(props) {
        super(props);

        this.state = { id: null };
    }

    render() {
        return (
            <button liquidId={{ props.id }} className="SelectTile">
                {props.type}
                {props.name}
            </button>
        );
    }
}

export default SelectTile;

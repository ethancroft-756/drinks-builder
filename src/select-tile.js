import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

class SelectTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button ingtype={this.props.ingtype} className="select-tile">
                <FaGlassCheers />
                {this.props.ingname}
            </button>
        );
    }
}

export default SelectTile;

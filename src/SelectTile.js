import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

const SelectTile = props => {
    return (
        <button className="SelectTile">
            <FaGlassCheers />
            {props.name}
        </button>
    );
};

export default SelectTile;

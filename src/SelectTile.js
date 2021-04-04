import React from 'react';
import { FaGlassCheers } from 'react-icons/fa';

class SelectTile extends React.Component {
    constructor(props) {
        super(props);
    }

    // handleClick(selectedIngs) {
    //     console.log(selectedIngs);

    //     // if (!selectedIngs.includes(this.props.ingId)) {
    //     //     this.setState({
    //     //         selectedIngs: selectedIngs.filter(
    //     //             ing => ing !== this.props.ingId
    //     //         ),
    //     //     });
    //     // } else {
    //     //     this.setState({
    //     //         selectedIngs: [...selectedIngs, this.props.ingId],
    //     //     });
    //     // }
    // }

    render() {
        return <button ingredientid={this.props.ingredientId}></button>;
    }
}

export default SelectTile;

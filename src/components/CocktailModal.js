import React from 'react';
import { FaTimes } from 'react-icons/fa';

class CocktailModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isActive: this.props.isActive };
    }

    componentDidMount() {
        this.modal = document.querySelector(
            `[cocktail-id="${this.props.cocktailId}"]`
        );
    }

    componentDidUpdate() {
        this.props.isActive === true
            ? this.modal.classList.add('modal--active')
            : this.modal.classList.remove('modal--active');
    }

    render() {
        return (
            <div cocktail-id={this.props.cocktailId} className="modal">
                <p>Name: {this.props.cocktailName}</p>
                <p>Cocktail ID: {this.props.cocktailId}</p>

                <span>
                    <FaTimes onClick={this.props.closeModal} />
                </span>
            </div>
        );
    }
}

export default CocktailModal;

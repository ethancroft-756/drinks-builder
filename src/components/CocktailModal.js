import React from 'react';
import { FaTimes } from 'react-icons/fa';

class CocktailModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modalActive: false };
    }

    handleClicks() {}

    componentDidMount() {
        this.modal = document.querySelector('.modal');
    }

    componentDidUpdate() {
        this.props.isActive === true
            ? this.modal.classList.add('modal--active')
            : this.modal.classList.remove('modal--active');
    }

    render() {
        return (
            <div className="modal">
                Modal
                <span>
                    <FaTimes />
                </span>
            </div>
        );
    }
}

export default CocktailModal;

import React from 'react';
import cocktails from '../data/cocktails';
import CocktailModal from './CocktailModal';

class CocktailShort extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modalActive: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.modalActive === true
            ? this.setState({
                  modalActive: false,
              })
            : this.setState({
                  modalActive: true,
              });
    }

    render() {
        // console.log(this.modal);

        return cocktails.cocktails.map(cocktail => {
            if (cocktail.cocktail_id === this.props.cocktailId) {
                return (
                    <div key={cocktail.cocktail_id}>
                        <button onClick={this.handleClick}>
                            {cocktail.cocktail_name}
                        </button>

                        <CocktailModal isActive={this.state.modalActive} />
                    </div>
                );
            }
        });
    }
}

export default CocktailShort;

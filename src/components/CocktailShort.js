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
        return cocktails.cocktails.map(cocktail => {
            if (cocktail.cocktail_id === this.props.cocktailId) {
                return (
                    <div key={cocktail.cocktail_id}>
                        <button onClick={this.handleClick}>
                            {cocktail.cocktail_name}
                        </button>

                        <CocktailModal
                            isActive={this.state.modalActive}
                            closeModal={this.handleClick}
                            cocktailName={cocktail.cocktail_name}
                            cocktailId={cocktail.cocktail_id}
                        />
                    </div>
                );
            }
        });
    }
}

export default CocktailShort;

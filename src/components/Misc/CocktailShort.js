import React from "react";
import CocktailModal from "./CocktailModal";

const CocktailShort = (props) => {
    // const handleClick = () {
    //     this.state.modalActive === true
    //         ? this.setState({
    //               modalActive: false,
    //           })
    //         : this.setState({
    //               modalActive: true,
    //           });
    // }

    return (
        <p>{props.name}</p>
        // return cocktails.cocktails.map((cocktail) => {
        //     if (cocktail.cocktail_id === this.props.cocktailId) {
        //         return (
        //             <div key={cocktail.cocktail_id}>
        //                 <button onClick={this.handleClick}>
        //                     {cocktail.cocktail_name}
        //                 </button>

        //                 <CocktailModal
        //                     isActive={this.state.modalActive}
        //                     closeModal={this.handleClick}
        //                     cocktailName={cocktail.cocktail_name}
        //                     cocktailId={cocktail.cocktail_id}
        //                     key={cocktail.cocktail_id}
        //                 />
        //             </div>
        //         );
        //     }
        // });
    );
};

export default CocktailShort;

import React from 'react';

class SelectTile extends React.Component {
    constructor(props) {
        super(props);

        this.onIngredientClick = this.onIngredientClick.bind(this);
        this.onMouseLeaveTile = this.onMouseLeaveTile.bind(this);
        this.createBackgroundEffect = this.createBackgroundEffect.bind(this);
        this.ref = React.createRef();
    }

    onMouseLeaveTile() {
        this.ref.current.style.background = '';
    }

    createBackgroundEffect(e) {
        let tileCurrentPos = this.ref.current.getBoundingClientRect();
        let { width, height } = tileCurrentPos;

        let mouseDistanceFromLeft = e.nativeEvent.offsetX;
        let mouseDistanceFromTop = e.nativeEvent.offsetY;

        let percentLeft = Math.floor((mouseDistanceFromLeft / width * 100));
        let percentTop = Math.floor((mouseDistanceFromTop / height * 100));

        this.ref.current.style.background = `radial-gradient(ellipse at ${percentLeft}% ${percentTop}%, #ffda8b 5%, #f7c455 100%)`;
    }

    onIngredientClick() {
        this.props.onClick(this.props.ingredientId);
    }

    render() {
        return (
            <button
                onMouseMove={this.createBackgroundEffect}
                onMouseLeave={this.onMouseLeaveTile}
                onClick={this.onIngredientClick}
                ingredient-id={this.props.ingredientId}
                className={this.props.className}
                ref={this.ref}
            >
                {this.props.ingredientName}
            </button>
        );
    }
}

export default SelectTile;

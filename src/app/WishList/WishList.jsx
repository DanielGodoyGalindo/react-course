import React from "react";
import PropTypes from "prop-types";
import WishItem from "./WishItem";

const WishList = ({ wishes, onWishesChange }) => (
    <ul className="wish-list">
        {wishes.map(({ text, done }, i) => (
            <WishItem
                text={text}
                done={done}
                onDoneChange={(value) => {
                    const updatedWishes = [...wishes];
                    updatedWishes[i].done = value;
                    onWishesChange(updatedWishes);
                }}
                id={`wish${i}`}
                key={text}
            />
        ))}
    </ul>
);

// Definir con PropTypes las propiedades y su tipo de datos
WishList.PropTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape({
        text: String,
        done: Boolean
    }))
};

// Indicar valor por defecto de props
WishList.defaultProps = {
    wishes: []
};

export default WishList;
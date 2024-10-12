import React, { useState } from "react";
import PropTypes from "prop-types";

const WishInput = ({ onNewWish }) => {
    const [newWishText, setNewWishText] = useState('');
    return (
        <fieldset className="wish-input">
            <legend className="wish-input__label">Nuevo deseo</legend>
            <input className="wish-input__field"
                placeholder="Indica tu deseo"
                value={newWishText}
                onChange={e => setNewWishText(e.target.value)}
                onKeyDown={e => {
                    if (e.key === "Enter" && newWishText.length > 0) {
                        onNewWish({done: false, text: newWishText});
                        setNewWishText('');
                    }
                }

                }
            />
        </fieldset>
    );
};

WishInput.PropTypes = {
    onNewWish: PropTypes.func
}

WishInput.defaultProps = {
    onNewWish: () => { }
}

export default WishInput;
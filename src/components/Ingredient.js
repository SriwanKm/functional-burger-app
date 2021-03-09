import React from 'react';

function Ingredient(props) {
    const {name, ingredientActive, id, isActive, style} = props

    return (
        <span className="item-list">{name}
            <button style={style} id={id} value={name}
                    className={isActive ? "ingredientButton Active btn-floating btn-small waves-effect waves-light red" : "ingredientButton btn-floating btn-small waves-effect waves-light grey darken-3"}
                    onClick={(e) => ingredientActive(e)}>
                     {isActive ? "x" : "+"}
            </button>
        </span>
    );
}

export default Ingredient;

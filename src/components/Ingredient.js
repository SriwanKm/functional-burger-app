import React from 'react';

function Ingredient(props) {
    const {imgUrl, name, ingredientActive, id, isActive} = props

    return (
        <div className={"container"}>
            <img id={id} src={imgUrl} alt={name} className={isActive ? "ingredientButton Active" : "ingredientButton"} onClick={(e) => ingredientActive(e)}/>
        </div>
    );
}

export default Ingredient;

import React from 'react';
import {Ingredient} from "./Index";

function IngredientList(props) {
    const {ingredientActive, ingredients} = props

    return (
        <div>
        {ingredients.map(el => <Ingredient style={{margin: "15px"}} isActive={el.isActive} key={el.id} id={el.id} name={el.name}
                                               ingredientActive={ingredientActive}/>)}
        </div>
    );
}

export default IngredientList;
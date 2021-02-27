import React from 'react';
import {Ingredient} from "./Index";

function IngredientList(props) {
    const {ingredientActive, ingredients} = props

    return (
        <div>
            {ingredients.map(el => <Ingredient isActive={el.isActive} key={el.id} id={el.id} name={el.name}
                                               imgUrl={el.img_url}
                                               ingredientActive={ingredientActive}/>)}
        </div>
    );
}

export default IngredientList;
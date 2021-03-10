import React from 'react'
import {Ingredient} from "./Index"

const IngredientList = ({ingredientActive, ingredients}) => (
    <div>
        {ingredients?.map(el => <Ingredient style={{margin: "15px"}} isActive={el?.isActive} key={el?.id} id={el?.id}
                                            name={el?.name}
                                            ingredientActive={ingredientActive}/>)}
    </div>
)

export default IngredientList
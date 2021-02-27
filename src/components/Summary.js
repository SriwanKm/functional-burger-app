import React from 'react';

function Summary(props) {
    const {meats, ingredients, sendOrder, instruction} = props
    const activeMeats = meats.filter(el => el.isActive).map(el => el.name)[0]
    const activeIngredients = ingredients.filter(el => el.isActive).map(el => el.name).join(", ")

    return (
        <div>
            {activeMeats}
            <div>
                {activeIngredients}
            </div>
            <div>
                {instruction}
            </div>
            <div>
                <button onClick={() => sendOrder(activeMeats + activeIngredients + instruction)} value="submit">Send Order</button>
                <button>Clear</button>
            </div>
        </div>
    );
}

export default Summary;

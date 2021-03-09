import React from 'react';

function Summary(props) {
    const {meats, ingredients, sendOrder, instruction} = props
    const activeMeats = meats.filter(el => el.isActive).map(el => el.name)[0]
    const activeIngredients = ingredients.filter(el => el.isActive).map(el => el.name).join(", ")

    return (
        <div>
            <div className="card"
                 style={{width: "800px", margin: "30px auto 0 auto", padding: "10px", backgroundColor: "#424242"}}>
                <h6 className="white-text">Order Summary</h6>
            </div>

            <div className="card" style={{width: "800px", margin: "0 auto 30px auto", padding: "10px"}}>
                <h6 className="teal-text">{activeMeats}</h6>
                <ul className="collection">
                    {ingredients.filter(el => el.isActive).map(el => <li>{el.name}</li>)}
                    {instruction}
                </ul>
                <div>
                    <button onClick={() => sendOrder(activeMeats + activeIngredients + instruction)} className="btn waves-effect waves-light" type="submit" name="action">Send Order
                        <i className="material-icons right">send</i>
                    </button>
                    <button className="btn-flat red-text">Clear</button>

                </div>
            </div>

        </div>
    );
}

export default Summary;

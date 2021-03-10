import React from 'react';

function BurgerOrder(props) {
    const {meat, ingredients, instruction, handleDeleted, id, isDelivered, handleDelivered} = props

    return (
        <div className={isDelivered ? "card grey lighten-1" : "card"}
             style={{width: "800px", margin: "0 auto 30px auto", padding: "10px"}}>
            <h6 className="teal-text" style={isDelivered ? {"textDecoration": "line-through"} : null}>{meat}</h6>

            <ul style={isDelivered ? {"textDecoration": "line-through"} : null} className="collection">
                {ingredients.map(el => <li key={Math.round(Math.random() * 1000)}>{el}</li>)}
                <li key={Math.round(Math.random() * 1000)}>{instruction}</li>
            </ul>

            <button id={id} onClick={(e) => handleDelivered(e)} style={{margin: "2px"}}
                    className={isDelivered ? "btn waves-effect waves-light amber" : "btn waves-effect waves-light"}
                    type="submit" name="action">{isDelivered ? "Incomplete" : "Completed"}
                <i className="material-icons left">{isDelivered ? "clear" : "done"}</i>
            </button>
            <button onClick={() => handleDeleted(id)} style={{margin: "2px"}}
                    className="btn waves-effect waves-light red darken-2" type="submit" name="action">Delete
                <i className="material-icons left">delete</i>
            </button>
        </div>

    );
}

export default BurgerOrder;
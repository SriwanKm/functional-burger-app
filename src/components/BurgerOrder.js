import React, {useState} from 'react';

function BurgerOrder(props) {
    const {order, handleDeleted, id} = props
    const [delivered, setDelivered] = useState(false)

    const handleDelivered = () => {
        setDelivered(!delivered)
    }

    return (
        <div>
            <p style={delivered ? {"textDecoration": "line-through"} : null}>{order}</p>
            <button onClick={handleDelivered}>Delivered</button>
            <button onClick={() => handleDeleted(id)}>Delete</button>
        </div>
    );
}

export default BurgerOrder;
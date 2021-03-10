import React from 'react'
import BurgerOrder from './BurgerOrder'

const BurgerList = ({orders, handleDeleted, handleDelivered}) => {
    const mappedOrders = orders
        ?.map(el =>
            <BurgerOrder
                handleDelivered={handleDelivered}
                orders={orders}
                handleDeleted={handleDeleted}
                meat={el?.meat}
                ingredients={el?.ingredients}
                isDelivered={el?.isDelivered}
                instruction={el?.instruction}
                key={el?.id}
                id={el?.id}
            />
        )

    return (
        <div>
            <div className="card"
                 style={{width: "800px", margin: "30px auto 0 auto", padding: "10px", backgroundColor: "#424242"}}>
                <h6 className="white-text">Order List</h6>
            </div>
            {mappedOrders}
        </div>
    )
}

export default BurgerList

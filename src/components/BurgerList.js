import React from 'react';
import BurgerOrder from './BurgerOrder'

function BurgerList(props) {
    const {orders, handleDeleted} = props
    const mappedOrders = orders.map(el => <BurgerOrder handleDeleted={handleDeleted} order={el.name} key={el.id} id={el.id} />)

    return (<>{mappedOrders}</>);}

export default BurgerList;
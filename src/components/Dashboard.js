import React, {useState, useEffect} from 'react';
import {ButtonList, IngredientList, Summary, BurgerList, Customize} from "./Index"
import {INGREDIENT_SEEDS} from '../seeds/IngredientSeeds'
import {MEAT_SEEDS} from '../seeds/MeatSeeds'

function Dashboard(props) {
    const [orders, setOrders] = useState([])
    const [meats, setMeats] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [instruction, setInstuction] = useState("")

    const sendOrder = (order) => {
        if (order === "undefined") return
        setInstuction("")
        const randomId = Math.round(Math.random() * 1000)
        setOrders([...orders, {name: [order], id: randomId}])
        setMeats(meats.map(el => {
            el.isActive = false
            return el
        }))
        setIngredients(ingredients.map(el => {
            el.isActive = false
            return el
        }))
    }


    const toggleActive = (e) => {
        setMeats([...meats.map(el => {
            el.isActive = el.id == e.target.id;
            return el
        })])
    }

    useEffect(() => {
        // Replace with API call
        setMeats([...MEAT_SEEDS])
    }, [])


    useEffect(() => {
        setIngredients([...INGREDIENT_SEEDS])
    }, [])

    const ingredientActive = (e) => {
        setIngredients([...ingredients.map(el => {
                if (el.id == e.target.id) {
                    el.isActive = !el.isActive
                }
                return el
            }
            )]
        )
    }

    const handleDeleted = (id) => {
        setOrders([...orders.filter(el => el.id != id)])
    }

    return (
        <div>
            <div className="card"
                 style={{width: "800px", margin: "30px auto 0 auto", padding: "10px", backgroundColor: "#424242"}}>
                <h6 className="white-text">Make Order</h6>
            </div>
            
            <div className="card" style={{width: "800px", margin: "0 auto 30px auto", padding: "10px"}}>
                <ButtonList meats={meats} setMeats={setMeats} toggleActive={toggleActive}/>
                <IngredientList ingredients={ingredients} ingredientActive={ingredientActive}/>
                <Customize setInstruction={setInstuction}/>

            </div>
            <Summary instruction={instruction} meats={meats} ingredients={ingredients} sendOrder={sendOrder}/>
            <BurgerList handleDeleted={handleDeleted} orders={orders}/>
        </div>
    );
}

export default Dashboard;

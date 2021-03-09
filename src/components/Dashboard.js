import React, {useState, useEffect} from 'react';
import {ButtonList, IngredientList, Summary, BurgerList, Customize} from "./Index"
import {INGREDIENT_SEEDS} from '../seeds/IngredientSeeds'
import {MEAT_SEEDS} from '../seeds/MeatSeeds'

function Dashboard(props) {
    const [orders, setOrders] = useState([])
    const [meats, setMeats] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [instruction, setInstuction] = useState("")
    const [isDelivered, setDelivered] = useState(false)


    const sendOrder = (activeMeats, activeIngredients, instruction, isDelivered) => {
        if (!activeMeats && !instruction) return

        setInstuction("")
        const randomId = Math.round(Math.random() * 1000)
        setOrders([...orders, {
            meat: activeMeats,
            ingredients: [activeIngredients],
            instruction: instruction,
            id: randomId,
            isDelivered: false
        }])
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
            el.isActive = el.id === parseInt(e.target.id);
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
                if (el.id === parseInt(e.target.id)) {
                    el.isActive = !el.isActive
                }
                return el
            }
            )]
        )
    }

    const handleDeleted = (id) => {
        setOrders([...orders.filter(el => el.id !== parseInt(id))])
    }

    const handleClearSummary = () => {
        setInstuction("")
        setMeats(meats.map(el => {
            el.isActive = false
            return el
        }))
        setIngredients(ingredients.map(el => {
            el.isActive = false
            return el
        }))
    }

    const handleDelivered = (e) => {
        setDelivered(orders.map(el => {
                if (el.id === parseInt(e.target.id)) {
                    el.isDelivered = !el.isDelivered
                    return el
                }
                return null
            })
        )
    }

    return (
        <div>
            <div className="card"
                 style={{width: "800px", margin: "30px auto 0 auto", padding: "10px", backgroundColor: "#424242"}}>
                <h6 className="white-text">Create Your Order</h6>
            </div>
            
            <div className="card" style={{width: "800px", margin: "0 auto 30px auto", padding: "10px"}}>
                <ButtonList meats={meats} setMeats={setMeats} toggleActive={toggleActive}/>
                <IngredientList ingredients={ingredients} ingredientActive={ingredientActive}/>
                <Customize setInstruction={setInstuction}/>

            </div>
            <Summary handleClearSummary={handleClearSummary} instruction={instruction} meats={meats} ingredients={ingredients} sendOrder={sendOrder}/>
            <BurgerList isDelivered={isDelivered} ingredients={ingredients} meats={meats} handleDeleted={handleDeleted} orders={orders} handleDelivered={handleDelivered}/>
        </div>
    );
}

export default Dashboard;

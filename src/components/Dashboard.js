import React, {useState, useEffect} from 'react'
import {ButtonList, IngredientList, Summary, BurgerList, Customize} from "./Index"
import {INGREDIENT_SEEDS} from '../seeds/IngredientSeeds'
import {MEAT_SEEDS} from '../seeds/MeatSeeds'
import firebase from '../util/firebase'

const Dashboard = (props) => {
    const databaseName = 'BurgerOrder/'
    const [orders, setOrders] = useState([])
    const [meats, setMeats] = useState(MEAT_SEEDS)
    const [ingredients, setIngredients] = useState(INGREDIENT_SEEDS)
    const [instruction, setInstuction] = useState("")
    const orderRef = firebase.database()?.ref(databaseName)

    useEffect(() => {
        const orderRef = firebase?.database()?.ref(databaseName)
        orderRef.on('value', (snapshot) => {
            const odrs = snapshot?.val()
            const orderList = []
            for (let id in odrs) {
                orderList?.push({id, ...odrs[id]})
            }
            setOrders(orderList)
        })
    }, [])

    const clearMeats = () => {
        setMeats(meats?.map(el => {
            el.isActive = false
            return el
        }))
    }

    const clearIngredients = () => {
        setIngredients(ingredients?.map(el => {
            el.isActive = false
            return el
        }))
    }

    const sendOrder = (activeMeats, activeIngredients, instruction) => {
        if (!activeMeats && !instruction) return

        setInstuction("")
        const newOrder = {
            meat: activeMeats,
            ingredients: [activeIngredients],
            instruction: instruction,
            isDelivered: false
        }

        orderRef?.push(newOrder)
        clearMeats()
        clearIngredients()
    }

    const toggleActive = (e) => {
        setMeats(meats?.map(el => {
            el.isActive = el?.id === parseInt(e?.target?.id)
            return el
        }))
    }

    const ingredientActive = (e) => {
        setIngredients(ingredients?.map(el => {
                if (el?.id === parseInt(e?.target?.id)) {
                    el.isActive = !el?.isActive
                }
                return el
            }
            )
        )
    }

    const handleDeleted = (id) => {
        orderRef?.child(id)?.remove()
    }

    const handleClearSummary = () => {
        setInstuction("")
        clearMeats()
        clearIngredients()
    }

    const handleDelivered = (e) => {
        const childRef = orderRef?.child(e?.target?.id)
        childRef.once('value', (snapshot) => {
            const data = snapshot?.val()
            childRef?.update({isDelivered: !data?.isDelivered})
        })
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
            <Summary handleClearSummary={handleClearSummary} instruction={instruction} meats={meats}
                     ingredients={ingredients} sendOrder={sendOrder}/>
            <BurgerList ingredients={ingredients} meats={meats} handleDeleted={handleDeleted}
                        orders={orders} handleDelivered={handleDelivered}/>
        </div>
    )
}

export default Dashboard

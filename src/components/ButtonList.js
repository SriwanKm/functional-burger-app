import React from 'react'
import {Button} from './Index'

const ButtonList = ({setMeats, toggleActive, meats}) => (
        <div>
            {meats?.map(el => <Button style={{margin: "5px"}} handleMeat={toggleActive} setMeats={setMeats} name={el?.name} id={el?.id} key={el?.id}
                                     isActive={el?.isActive}/>)}
        </div>
    )

export default ButtonList
